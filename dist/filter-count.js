System.register([], function (_export) {
  "use strict";

  var FilterCountValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      FilterCountValueConverter = (function () {
        function FilterCountValueConverter() {
          _classCallCheck(this, FilterCountValueConverter);
        }

        _createClass(FilterCountValueConverter, [{
          key: "toView",
          value: function toView(value, gamertag, region, passType, game) {

            var filtered = value.filter(function (registrant) {
              return (!gamertag || registrant.gamertag.includes(gamertag)) && (!region || registrant.region == region) && (!passType || registrant.passType == passType) && (!game || game == "SF" && registrant.games.sfRegistered || game == "TK" && registrant.games.tkRegistered || game == "MK" && registrant.games.mkRegistered || game == "A1" && registrant.games.a1Registered);
            });

            return filtered.length;
          }
        }]);

        return FilterCountValueConverter;
      })();

      _export("FilterCountValueConverter", FilterCountValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci1jb3VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSx5QkFBeUI7Ozs7Ozs7OztBQUF6QiwrQkFBeUI7aUJBQXpCLHlCQUF5QjtnQ0FBekIseUJBQXlCOzs7cUJBQXpCLHlCQUF5Qjs7aUJBQzlCLGdCQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7O0FBRTlDLGdCQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVMsVUFBVSxFQUFFO0FBQzdDLHFCQUFPLENBQUMsQ0FBQyxRQUFRLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUEsS0FDeEQsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUEsQUFBQyxLQUN2QyxDQUFDLFFBQVEsSUFBSSxVQUFVLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQSxBQUFDLEtBQzdDLENBQUMsSUFBSSxJQUNELEFBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVksSUFDN0MsSUFBSSxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVksQUFBQyxJQUM5QyxJQUFJLElBQUksSUFBSSxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxBQUFDLElBQzlDLElBQUksSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLEFBQUMsQ0FBQyxBQUFDLENBQUM7YUFDNUQsQ0FBQyxDQUFDOztBQUVILG1CQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7V0FDeEI7OztlQWZVLHlCQUF5QiIsImZpbGUiOiJmaWx0ZXItY291bnQuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
