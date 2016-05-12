'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (_export, _context) {
  var inject, HttpClient, _dec, _class, App;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }, function (_fetch) {}],
    execute: function () {
      _export('App', App = (_dec = inject(HttpClient), _dec(_class = function () {
        function App(http) {
          _classCallCheck(this, App);

          this.message = 'Registrants';
          this.filterGamertag = "";
          this.filterRegion = "";
          this.filterPassType = "";
          this.filterGame = "";
          this.showFilterOptions = false;
          this.regions = [{ value: "", name: "All" }, { value: "NSW", name: "NSW" }, { value: "ACT", name: "ACT" }, { value: "QLD", name: "QLD" }, { value: "VIC", name: "VIC" }, { value: "WA", name: "WA" }, { value: "SA", name: "SA" }, { value: "NT", name: "NT" }, { value: "TAS", name: "TAS" }];
          this.passTypes = [{ value: "", name: "All" }, { value: "Competitor", name: "Competitor" }, { value: "Spectator", name: "Spectator" }];
          this.games = [{ value: "", name: "All" }, { value: "SF", name: "SFV" }, { value: "TK", name: "TK7" }, { value: "MK", name: "MKX" }, { value: "A1", name: "VF5FS" }, { value: "S1", name: "Smash Melee Singles" }, { value: "S2", name: "Smash Melee Doubles" }, { value: "S3", name: "Smash Wii U Singles" }, { value: "S4", name: "Smash Wii U Doubles" }];

          http.configure(function (config) {
            config.useStandardConfiguration().withBaseUrl('http://ohn.ozhadou.net/scripts/');
          });

          this.http = http;
        }

        App.prototype.activate = function activate() {
          var _this = this;

          return this.http.fetch('registrants.php').then(function (response) {
            return response.json();
          }).then(function (registrants) {
            return _this.registrants = registrants;
          });
        };

        return App;
      }()) || _class));

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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
