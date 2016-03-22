System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (_export) {
    'use strict';

    var inject, HttpClient, App;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaFetchClient) {
            HttpClient = _aureliaFetchClient.HttpClient;
        }, function (_fetch) {}],
        execute: function () {
            App = (function () {
                function App(http) {
                    _classCallCheck(this, _App);

                    this.message = 'Registrants';
                    this.filterGamertag = "";
                    this.filterRegion = "";
                    this.filterPassType = "";
                    this.filterGame = "";
                    this.showFilterOptions = false;
                    this.regions = [{ value: "", name: "All" }, { value: "NSW", name: "NSW" }, { value: "ACT", name: "ACT" }, { value: "QLD", name: "QLD" }, { value: "VIC", name: "VIC" }, { value: "WA", name: "WA" }, { value: "SA", name: "SA" }, { value: "NT", name: "NT" }, { value: "TAS", name: "TAS" }];
                    this.passTypes = [{ value: "", name: "All" }, { value: "Competitor", name: "Competitor" }, { value: "Spectator", name: "Spectator" }];
                    this.games = [{ value: "", name: "All" }, { value: "SF", name: "SFV" }, { value: "TK", name: "TK7" }, { value: "MK", name: "MKX" }, { value: "A1", name: "VF5FS" }];

                    http.configure(function (config) {
                        config.useStandardConfiguration().withBaseUrl('http://dev.ozhadou.net/scripts/');
                    });

                    this.http = http;
                }

                _createClass(App, [{
                    key: 'activate',
                    value: function activate() {
                        var _this = this;

                        return this.http.fetch('registrants.php').then(function (response) {
                            return response.json();
                        }).then(function (registrants) {
                            return _this.registrants = registrants;
                        });
                    }
                }]);

                var _App = App;
                App = inject(HttpClient)(App) || App;
                return App;
            })();

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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
