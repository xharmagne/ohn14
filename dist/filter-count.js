"use strict";

System.register([], function (_export, _context) {
  var FilterCountValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("FilterCountValueConverter", FilterCountValueConverter = function () {
        function FilterCountValueConverter() {
          _classCallCheck(this, FilterCountValueConverter);
        }

        FilterCountValueConverter.prototype.toView = function toView(value, gamertag, region, passType, game) {

          if (!value) {
            return 0;
          }

          var filtered = value.filter(function (registrant) {
            return (!gamertag || registrant.gamertag.toLowerCase().includes(gamertag.toLowerCase())) && (!region || registrant.region == region) && (!passType || registrant.passType == passType) && (!game || game == "SF" && registrant.games.sfRegistered || game == "TK" && registrant.games.tkRegistered || game == "MK" && registrant.games.mkRegistered || game == "A1" && registrant.games.a1Registered || game == "S1" && registrant.games.s1Registered || game == "S2" && registrant.games.s2Registered || game == "S3" && registrant.games.s3Registered || game == "S4" && registrant.games.s4Registered);
          });

          return filtered.length;
        };

        return FilterCountValueConverter;
      }());

      _export("FilterCountValueConverter", FilterCountValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci1jb3VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzsyQ0FBYTs7Ozs7NENBQ1gseUJBQU8sT0FBTyxVQUFVLFFBQVEsVUFBVSxNQUFNOztBQUU5QyxjQUFJLENBQUMsS0FBRCxFQUFRO0FBQ1YsbUJBQU8sQ0FBUCxDQURVO1dBQVo7O0FBSUEsY0FBSSxXQUFXLE1BQU0sTUFBTixDQUFhLFVBQVMsVUFBVCxFQUFxQjtBQUM3QyxtQkFBTyxDQUFDLENBQUMsUUFBRCxJQUFhLFdBQVcsUUFBWCxDQUFvQixXQUFwQixHQUFrQyxRQUFsQyxDQUEyQyxTQUFTLFdBQVQsRUFBM0MsQ0FBYixDQUFELEtBQ0osQ0FBQyxNQUFELElBQVcsV0FBVyxNQUFYLElBQXFCLE1BQXJCLENBRFAsS0FFSixDQUFDLFFBQUQsSUFBYSxXQUFXLFFBQVgsSUFBdUIsUUFBdkIsQ0FGVCxLQUdKLENBQUMsSUFBRCxJQUNJLElBQUMsSUFBUSxJQUFSLElBQWdCLFdBQVcsS0FBWCxDQUFpQixZQUFqQixJQUNoQixRQUFRLElBQVIsSUFBZ0IsV0FBVyxLQUFYLENBQWlCLFlBQWpCLElBQ2hCLFFBQVEsSUFBUixJQUFnQixXQUFXLEtBQVgsQ0FBaUIsWUFBakIsSUFDaEIsUUFBUSxJQUFSLElBQWdCLFdBQVcsS0FBWCxDQUFpQixZQUFqQixJQUNoQixRQUFRLElBQVIsSUFBZ0IsV0FBVyxLQUFYLENBQWlCLFlBQWpCLElBQ2hCLFFBQVEsSUFBUixJQUFnQixXQUFXLEtBQVgsQ0FBaUIsWUFBakIsSUFDaEIsUUFBUSxJQUFSLElBQWdCLFdBQVcsS0FBWCxDQUFpQixZQUFqQixJQUNoQixRQUFRLElBQVIsSUFBZ0IsV0FBVyxLQUFYLENBQWlCLFlBQWpCLENBWGpCLENBRHNDO1dBQXJCLENBQXhCLENBTjBDOztBQXFCOUMsaUJBQU8sU0FBUyxNQUFULENBckJ1Qzs7O2VBRHJDIiwiZmlsZSI6ImZpbHRlci1jb3VudC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
