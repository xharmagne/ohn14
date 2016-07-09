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
          this.games = [{ value: "", name: "All" }, { value: "SF", name: "SFV" }, { value: "TK", name: "TK7" }, { value: "MK", name: "MKX" }, { value: "A1", name: "VF5FS" }, { value: "S1", name: "Smash Melee Singles" }, { value: "S2", name: "Smash Melee Doubles" }, { value: "S3", name: "Smash Wii U Singles" }, { value: "S4", name: "Smash Wii U Doubles" }, { value: "DIY1", name: "Super Street Fighter II Turbo" }, { value: "DIY2", name: "Street Fighter III: 3rd Strike" }, { value: "DIY3", name: "Ultimate Marvel vs. Capcom 3" }, { value: "DIY4", name: "The King of Fighters 2002: Unlimited Match" }, { value: "DIY5", name: "The King of Fighters 98: Unlimited Match Final Edition" }, { value: "DIY6", name: "Guilty Gear Xrd -REVELATOR-" }, { value: "DIY7", name: "Persona 4 Arena Ultimax" }, { value: "DIY8", name: "Pokken Tournament" }, { value: "DIY9", name: "Super Smash Bros. 64" }, { value: "DIY10", name: "Project M" }];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVEsWSxxQkFBQSxNOztBQUNBLGdCLHVCQUFBLFU7OztxQkFJSyxHLFdBRFosT0FBTyxVQUFQLEM7QUErQ0MscUJBQVksSUFBWixFQUFrQjtBQUFBOztBQUFBLGVBN0NsQixPQTZDa0IsR0E3Q1IsYUE2Q1E7QUFBQSxlQTVDbEIsY0E0Q2tCLEdBNUNELEVBNENDO0FBQUEsZUEzQ2xCLFlBMkNrQixHQTNDSCxFQTJDRztBQUFBLGVBMUNsQixjQTBDa0IsR0ExQ0QsRUEwQ0M7QUFBQSxlQXpDbEIsVUF5Q2tCLEdBekNMLEVBeUNLO0FBQUEsZUF4Q2xCLGlCQXdDa0IsR0F4Q0UsS0F3Q0Y7QUFBQSxlQXRDbEIsT0FzQ2tCLEdBdENSLENBQ04sRUFBQyxPQUFPLEVBQVIsRUFBWSxNQUFNLEtBQWxCLEVBRE0sRUFFTixFQUFDLE9BQU8sS0FBUixFQUFlLE1BQU0sS0FBckIsRUFGTSxFQUdOLEVBQUMsT0FBTyxLQUFSLEVBQWUsTUFBTSxLQUFyQixFQUhNLEVBSU4sRUFBQyxPQUFPLEtBQVIsRUFBZSxNQUFNLEtBQXJCLEVBSk0sRUFLTixFQUFDLE9BQU8sS0FBUixFQUFlLE1BQU0sS0FBckIsRUFMTSxFQU1OLEVBQUMsT0FBTyxJQUFSLEVBQWMsTUFBTSxJQUFwQixFQU5NLEVBT04sRUFBQyxPQUFPLElBQVIsRUFBYyxNQUFNLElBQXBCLEVBUE0sRUFRTixFQUFDLE9BQU8sSUFBUixFQUFjLE1BQU0sSUFBcEIsRUFSTSxFQVNOLEVBQUMsT0FBTyxLQUFSLEVBQWUsTUFBTSxLQUFyQixFQVRNLENBc0NRO0FBQUEsZUEzQmxCLFNBMkJrQixHQTNCTixDQUNSLEVBQUMsT0FBTyxFQUFSLEVBQVksTUFBTSxLQUFsQixFQURRLEVBRVIsRUFBQyxPQUFPLFlBQVIsRUFBc0IsTUFBTSxZQUE1QixFQUZRLEVBR1IsRUFBQyxPQUFPLFdBQVIsRUFBcUIsTUFBTSxXQUEzQixFQUhRLENBMkJNO0FBQUEsZUF0QmxCLEtBc0JrQixHQXRCVixDQUNKLEVBQUMsT0FBTyxFQUFSLEVBQVksTUFBTSxLQUFsQixFQURJLEVBRUosRUFBQyxPQUFPLElBQVIsRUFBYyxNQUFNLEtBQXBCLEVBRkksRUFHSixFQUFDLE9BQU8sSUFBUixFQUFjLE1BQU0sS0FBcEIsRUFISSxFQUlKLEVBQUMsT0FBTyxJQUFSLEVBQWMsTUFBTSxLQUFwQixFQUpJLEVBS0osRUFBQyxPQUFPLElBQVIsRUFBYyxNQUFNLE9BQXBCLEVBTEksRUFNSixFQUFDLE9BQU8sSUFBUixFQUFjLE1BQU0scUJBQXBCLEVBTkksRUFPSixFQUFDLE9BQU8sSUFBUixFQUFjLE1BQU0scUJBQXBCLEVBUEksRUFRSixFQUFDLE9BQU8sSUFBUixFQUFjLE1BQU0scUJBQXBCLEVBUkksRUFTSixFQUFDLE9BQU8sSUFBUixFQUFjLE1BQU0scUJBQXBCLEVBVEksRUFVSixFQUFDLE9BQU8sTUFBUixFQUFnQixNQUFNLCtCQUF0QixFQVZJLEVBV0osRUFBQyxPQUFPLE1BQVIsRUFBZ0IsTUFBTSxnQ0FBdEIsRUFYSSxFQVlKLEVBQUMsT0FBTyxNQUFSLEVBQWdCLE1BQU0sOEJBQXRCLEVBWkksRUFhSixFQUFDLE9BQU8sTUFBUixFQUFnQixNQUFNLDRDQUF0QixFQWJJLEVBY0osRUFBQyxPQUFPLE1BQVIsRUFBZ0IsTUFBTSx3REFBdEIsRUFkSSxFQWVKLEVBQUMsT0FBTyxNQUFSLEVBQWdCLE1BQU0sNkJBQXRCLEVBZkksRUFnQkosRUFBQyxPQUFPLE1BQVIsRUFBZ0IsTUFBTSx5QkFBdEIsRUFoQkksRUFpQkosRUFBQyxPQUFPLE1BQVIsRUFBZ0IsTUFBTSxtQkFBdEIsRUFqQkksRUFrQkosRUFBQyxPQUFPLE1BQVIsRUFBZ0IsTUFBTSxzQkFBdEIsRUFsQkksRUFtQkosRUFBQyxPQUFPLE9BQVIsRUFBaUIsTUFBTSxXQUF2QixFQW5CSSxDQXNCVTs7QUFDaEIsZUFBSyxTQUFMLENBQWUsa0JBQVU7QUFDdkIsbUJBQ0csd0JBREgsR0FFRyxXQUZILENBRWUsaUNBRmY7QUFHRCxXQUpEOztBQU1BLGVBQUssSUFBTCxHQUFZLElBQVo7QUFDRDs7c0JBRUQsUSx1QkFBVztBQUFBOztBQUNULGlCQUFPLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsaUJBQWhCLEVBQ0osSUFESSxDQUNDO0FBQUEsbUJBQVksU0FBUyxJQUFULEVBQVo7QUFBQSxXQURELEVBRUosSUFGSSxDQUVDO0FBQUEsbUJBQWUsTUFBSyxXQUFMLEdBQW1CLFdBQWxDO0FBQUEsV0FGRCxDQUFQO0FBR0QsUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
