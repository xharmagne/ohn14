System.register([], function (_export) {
  "use strict";

  var FilterSumValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      FilterSumValueConverter = (function () {
        function FilterSumValueConverter() {
          _classCallCheck(this, FilterSumValueConverter);
        }

        _createClass(FilterSumValueConverter, [{
          key: "toView",
          value: function toView(value, gamertag, region, passType, game) {

            var filtered = value.filter(function (registrant) {
              return (!gamertag || registrant.gamertag.includes(gamertag)) && (!region || registrant.region == region) && (!passType || registrant.passType == passType) && (!game || game == "SF" && registrant.games.sfRegistered || game == "TK" && registrant.games.tkRegistered || game == "MK" && registrant.games.mkRegistered || game == "A1" && registrant.games.a1Registered);
            });

            return filtered.length;
          }
        }]);

        return FilterSumValueConverter;
      })();

      _export("FilterSumValueConverter", FilterSumValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci1zdW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQWEsdUJBQXVCOzs7Ozs7Ozs7QUFBdkIsNkJBQXVCO2lCQUF2Qix1QkFBdUI7Z0NBQXZCLHVCQUF1Qjs7O3FCQUF2Qix1QkFBdUI7O2lCQUM1QixnQkFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFOztBQUU5QyxnQkFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFTLFVBQVUsRUFBRTtBQUM3QyxxQkFBTyxDQUFDLENBQUMsUUFBUSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBLEtBQ3hELENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFBLEFBQUMsS0FDdkMsQ0FBQyxRQUFRLElBQUksVUFBVSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUEsQUFBQyxLQUM3QyxDQUFDLElBQUksSUFDRCxBQUFDLElBQUksSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQzdDLElBQUksSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLEFBQUMsSUFDOUMsSUFBSSxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVksQUFBQyxJQUM5QyxJQUFJLElBQUksSUFBSSxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxBQUFDLENBQUMsQUFBQyxDQUFDO2FBQzVELENBQUMsQ0FBQzs7QUFFSCxtQkFBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1dBQ3hCOzs7ZUFmVSx1QkFBdUIiLCJmaWxlIjoiZmlsdGVyLXN1bS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
