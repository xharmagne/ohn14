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
                        config.useStandardConfiguration().withBaseUrl('http://localhost:89/ohn14/scripts/');
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
