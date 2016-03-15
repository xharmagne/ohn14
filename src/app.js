import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class App {
  message = 'Registrants';

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://dev.ozhadou.net/scripts/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('registrants.php')
      .then(response => response.json())
      .then(registrants => this.registrants = registrants);
  }
}
