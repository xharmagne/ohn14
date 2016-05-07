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

          if (!value) {
            return value;
          }

          var filtered = value.filter(function (registrant) {
            return (!gamertag || registrant.gamertag.toLowerCase().includes(gamertag.toLowerCase())) && (!region || registrant.region == region) && (!passType || registrant.passType == passType) && (!game || game == "SF" && registrant.games.sfRegistered || game == "TK" && registrant.games.tkRegistered || game == "MK" && registrant.games.mkRegistered || game == "A1" && registrant.games.a1Registered || game == "S1" && registrant.games.s1Registered || game == "S2" && registrant.games.s2Registered || game == "S3" && registrant.games.s3Registered || game == "S4" && registrant.games.s4Registered);
          });

          return filtered;
        };

        return FilterValueConverter;
      }());

      _export("FilterValueConverter", FilterValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztzQ0FBYSxvQjs7Ozs7dUNBQ1gsTSxtQkFBTyxLLEVBQU8sUSxFQUFVLE0sRUFBUSxRLEVBQVUsSSxFQUFNOztBQUU5QyxjQUFJLENBQUMsS0FBTCxFQUFZO0FBQ1YsbUJBQU8sS0FBUDtBQUNEOztBQUVELGNBQUksV0FBVyxNQUFNLE1BQU4sQ0FBYSxVQUFTLFVBQVQsRUFBcUI7QUFDN0MsbUJBQU8sQ0FBQyxDQUFDLFFBQUQsSUFBYSxXQUFXLFFBQVgsQ0FBb0IsV0FBcEIsR0FBa0MsUUFBbEMsQ0FBMkMsU0FBUyxXQUFULEVBQTNDLENBQWQsTUFDSixDQUFDLE1BQUQsSUFBVyxXQUFXLE1BQVgsSUFBcUIsTUFENUIsTUFFSixDQUFDLFFBQUQsSUFBYSxXQUFXLFFBQVgsSUFBdUIsUUFGaEMsTUFHSixDQUFDLElBQUQsSUFDSyxRQUFRLElBQVIsSUFBZ0IsV0FBVyxLQUFYLENBQWlCLFlBQWxDLElBQ0MsUUFBUSxJQUFSLElBQWdCLFdBQVcsS0FBWCxDQUFpQixZQURsQyxJQUVDLFFBQVEsSUFBUixJQUFnQixXQUFXLEtBQVgsQ0FBaUIsWUFGbEMsSUFHQyxRQUFRLElBQVIsSUFBZ0IsV0FBVyxLQUFYLENBQWlCLFlBSGxDLElBSUMsUUFBUSxJQUFSLElBQWdCLFdBQVcsS0FBWCxDQUFpQixZQUpsQyxJQUtDLFFBQVEsSUFBUixJQUFnQixXQUFXLEtBQVgsQ0FBaUIsWUFMbEMsSUFNQyxRQUFRLElBQVIsSUFBZ0IsV0FBVyxLQUFYLENBQWlCLFlBTmxDLElBT0MsUUFBUSxJQUFSLElBQWdCLFdBQVcsS0FBWCxDQUFpQixZQVhsQyxDQUFQO0FBWUgsV0FiYyxDQUFmOztBQWVBLGlCQUFPLFFBQVA7QUFDRCxTIiwiZmlsZSI6ImZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
