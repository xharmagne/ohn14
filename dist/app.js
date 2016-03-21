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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MEJBS2EsR0FBRzs7Ozs7Ozs7aUNBTFIsTUFBTTs7dUNBQ04sVUFBVTs7O0FBSUwsU0FBRztBQUdILGlCQUhBLEdBQUcsQ0FHRixJQUFJLEVBQUU7OztlQUZsQixPQUFPLEdBQUcsYUFBYTs7QUFHckIsY0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUN2QixrQkFBTSxDQUNILHdCQUF3QixFQUFFLENBQzFCLFdBQVcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1dBQ25ELENBQUMsQ0FBQzs7QUFFSCxjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjs7cUJBWFUsR0FBRzs7aUJBYU4sb0JBQUc7OztBQUNULG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQ3RDLElBQUksQ0FBQyxVQUFBLFFBQVE7cUJBQUksUUFBUSxDQUFDLElBQUksRUFBRTthQUFBLENBQUMsQ0FDakMsSUFBSSxDQUFDLFVBQUEsV0FBVztxQkFBSSxNQUFLLFdBQVcsR0FBRyxXQUFXO2FBQUEsQ0FBQyxDQUFDO1dBQ3hEOzs7bUJBakJVLEdBQUc7QUFBSCxXQUFHLEdBRGYsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLEdBQUcsS0FBSCxHQUFHO2VBQUgsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
