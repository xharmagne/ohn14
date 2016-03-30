"use strict";

System.register([], function (_export, _context) {
  var FilterValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("FilterValueConverter", FilterValueConverter = function () {
        function FilterValueConverter() {
          _classCallCheck(this, FilterValueConverter);
        }

        FilterValueConverter.prototype.toView = function toView(value, gamertag, region, passType, game) {

          var filtered = value.filter(function (registrant) {
            return (!gamertag || registrant.gamertag.toLowerCase().includes(gamertag.toLowerCase())) && (!region || registrant.region == region) && (!passType || registrant.passType == passType) && (!game || game == "SF" && registrant.games.sfRegistered || game == "TK" && registrant.games.tkRegistered || game == "MK" && registrant.games.mkRegistered || game == "A1" && registrant.games.a1Registered);
          });

          return filtered;
        };

        return FilterValueConverter;
      }());

      _export("FilterValueConverter", FilterValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztzQ0FBYTs7Ozs7dUNBQ1gseUJBQU8sT0FBTyxVQUFVLFFBQVEsVUFBVSxNQUFNOztBQUU5QyxjQUFJLFdBQVcsTUFBTSxNQUFOLENBQWEsVUFBUyxVQUFULEVBQXFCO0FBQzdDLG1CQUFPLENBQUMsQ0FBQyxRQUFELElBQWEsV0FBVyxRQUFYLENBQW9CLFdBQXBCLEdBQWtDLFFBQWxDLENBQTJDLFNBQVMsV0FBVCxFQUEzQyxDQUFiLENBQUQsS0FDSixDQUFDLE1BQUQsSUFBVyxXQUFXLE1BQVgsSUFBcUIsTUFBckIsQ0FEUCxLQUVKLENBQUMsUUFBRCxJQUFhLFdBQVcsUUFBWCxJQUF1QixRQUF2QixDQUZULEtBR0osQ0FBQyxJQUFELElBQ0ksSUFBQyxJQUFRLElBQVIsSUFBZ0IsV0FBVyxLQUFYLENBQWlCLFlBQWpCLElBQ2hCLFFBQVEsSUFBUixJQUFnQixXQUFXLEtBQVgsQ0FBaUIsWUFBakIsSUFDaEIsUUFBUSxJQUFSLElBQWdCLFdBQVcsS0FBWCxDQUFpQixZQUFqQixJQUNoQixRQUFRLElBQVIsSUFBZ0IsV0FBVyxLQUFYLENBQWlCLFlBQWpCLENBUGpCLENBRHNDO1dBQXJCLENBQXhCLENBRjBDOztBQWE5QyxpQkFBTyxRQUFQLENBYjhDOzs7ZUFEckMiLCJmaWxlIjoiZmlsdGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
