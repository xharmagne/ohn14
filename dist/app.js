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
                    this.games = [{ value: "", name: "All" }, { value: "SF", name: "SFV" }, { value: "TK", name: "TK7" }, { value: "MK", name: "MKX" }, { value: "A1", name: "VF5FS" }];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVE7O0FBQ0E7OzsyQkFJSyxjQURaLE9BQU8sVUFBUDtBQWlDQyx5QkFoQ1csR0FnQ1gsQ0FBWSxJQUFaLEVBQWtCOzBDQWhDUCxLQWdDTzs7eUJBL0JsQixVQUFVLGNBK0JRO3lCQTlCbEIsaUJBQWlCLEdBOEJDO3lCQTdCbEIsZUFBZSxHQTZCRzt5QkE1QmxCLGlCQUFpQixHQTRCQzt5QkEzQmxCLGFBQWEsR0EyQks7eUJBMUJsQixvQkFBb0IsTUEwQkY7eUJBeEJsQixVQUFVLENBQ04sRUFBQyxPQUFPLEVBQVAsRUFBVyxNQUFNLEtBQU4sRUFETixFQUVOLEVBQUMsT0FBTyxLQUFQLEVBQWMsTUFBTSxLQUFOLEVBRlQsRUFHTixFQUFDLE9BQU8sS0FBUCxFQUFjLE1BQU0sS0FBTixFQUhULEVBSU4sRUFBQyxPQUFPLEtBQVAsRUFBYyxNQUFNLEtBQU4sRUFKVCxFQUtOLEVBQUMsT0FBTyxLQUFQLEVBQWMsTUFBTSxLQUFOLEVBTFQsRUFNTixFQUFDLE9BQU8sSUFBUCxFQUFhLE1BQU0sSUFBTixFQU5SLEVBT04sRUFBQyxPQUFPLElBQVAsRUFBYSxNQUFNLElBQU4sRUFQUixFQVFOLEVBQUMsT0FBTyxJQUFQLEVBQWEsTUFBTSxJQUFOLEVBUlIsRUFTTixFQUFDLE9BQU8sS0FBUCxFQUFjLE1BQU0sS0FBTixFQVRULEVBd0JRO3lCQWJsQixZQUFZLENBQ1IsRUFBQyxPQUFPLEVBQVAsRUFBVyxNQUFNLEtBQU4sRUFESixFQUVSLEVBQUMsT0FBTyxZQUFQLEVBQXFCLE1BQU0sWUFBTixFQUZkLEVBR1IsRUFBQyxPQUFPLFdBQVAsRUFBb0IsTUFBTSxXQUFOLEVBSGIsRUFhTTt5QkFSbEIsUUFBUSxDQUNKLEVBQUMsT0FBTyxFQUFQLEVBQVcsTUFBTSxLQUFOLEVBRFIsRUFFSixFQUFDLE9BQU8sSUFBUCxFQUFhLE1BQU0sS0FBTixFQUZWLEVBR0osRUFBQyxPQUFPLElBQVAsRUFBYSxNQUFNLEtBQU4sRUFIVixFQUlKLEVBQUMsT0FBTyxJQUFQLEVBQWEsTUFBTSxLQUFOLEVBSlYsRUFLSixFQUFDLE9BQU8sSUFBUCxFQUFhLE1BQU0sT0FBTixFQUxWLEVBUVU7O0FBQ2hCLHlCQUFLLFNBQUwsQ0FBZSxrQkFBVTtBQUN2QiwrQkFDRyx3QkFESCxHQUVHLFdBRkgsQ0FFZSxvQ0FGZixFQUR1QjtxQkFBVixDQUFmLENBRGdCOztBQU9oQix5QkFBSyxJQUFMLEdBQVksSUFBWixDQVBnQjtpQkFBbEI7O0FBaENXLDhCQTBDWCwrQkFBVzs7O0FBQ1QsMkJBQU8sS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixpQkFBaEIsRUFDSixJQURJLENBQ0M7K0JBQVksU0FBUyxJQUFUO3FCQUFaLENBREQsQ0FFSixJQUZJLENBRUM7K0JBQWUsTUFBSyxXQUFMLEdBQW1CLFdBQW5CO3FCQUFmLENBRlIsQ0FEUzs7O3VCQTFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
