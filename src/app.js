import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class App {
  message = 'Registrants';
  filterGamertag = "";
  filterRegion = "";
  filterPassType = "";
  filterGame = "";
  showFilterOptions = false;

  regions = [
      {value: "", name: "All"},
      {value: "NSW", name: "NSW"},
      {value: "ACT", name: "ACT"},
      {value: "QLD", name: "QLD"},
      {value: "VIC", name: "VIC"},
      {value: "WA", name: "WA"},
      {value: "SA", name: "SA"},
      {value: "NT", name: "NT"},
      {value: "TAS", name: "TAS"}
  ];
  passTypes = [
      {value: "", name: "All"},
      {value: "Competitor", name: "Competitor"},
      {value: "Spectator", name: "Spectator"}
  ];
  games = [
      {value: "", name: "All"},
      {value: "SF", name: "SFV"},
      {value: "TK", name: "TK7"},
      {value: "MK", name: "MKX"},
      {value: "A1", name: "VF5FS"},
      {value: "S1", name: "Smash Melee Singles"},
      {value: "S2", name: "Smash Melee Doubles"},
      {value: "S3", name: "Smash Wii U Singles"},
      {value: "S4", name: "Smash Wii U Doubles"},
      {value: "DIY1", name: "Super Street Fighter II Turbo"},
      {value: "DIY2", name: "Street Fighter III: 3rd Strike"},
      {value: "DIY3", name: "Ultimate Marvel vs. Capcom 3"},
      {value: "DIY4", name: "The King of Fighters 2002: Unlimited Match"},
      {value: "DIY5", name: "The King of Fighters 98: Unlimited Match Final Edition"},
      {value: "DIY6", name: "Guilty Gear Xrd -REVELATOR-"},
      {value: "DIY7", name: "Persona 4 Arena Ultimax"},
      {value: "DIY8", name: "Pokken Tournament"},
      {value: "DIY9", name: "Super Smash Bros. 64"},
      {value: "DIY10", name: "Project M"}
  ];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://ohn.ozhadou.net/scripts/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('registrants.php')
      .then(response => response.json())
      .then(registrants => this.registrants = registrants);
  }
}
