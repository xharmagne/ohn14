System.register([], function (_export) {
  "use strict";

  var FilterValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      FilterValueConverter = (function () {
        function FilterValueConverter() {
          _classCallCheck(this, FilterValueConverter);
        }

        _createClass(FilterValueConverter, [{
          key: "toView",
          value: function toView(value, gamertag, region, passType, game) {

            var filtered = value.filter(function (registrant) {
              return (!gamertag || registrant.gamertag.includes(gamertag)) && (!region || registrant.region == region) && (!passType || registrant.passType == passType) && (!game || game == "SF" && registrant.games.sfRegistered || game == "TK" && registrant.games.tkRegistered || game == "MK" && registrant.games.mkRegistered || game == "A1" && registrant.games.a1Registered);
            });

            return filtered;
          }
        }]);

        return FilterValueConverter;
      })();

      _export("FilterValueConverter", FilterValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxvQkFBb0I7Ozs7Ozs7OztBQUFwQiwwQkFBb0I7aUJBQXBCLG9CQUFvQjtnQ0FBcEIsb0JBQW9COzs7cUJBQXBCLG9CQUFvQjs7aUJBQ3pCLGdCQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7O0FBRTlDLGdCQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVMsVUFBVSxFQUFFO0FBQzdDLHFCQUFPLENBQUMsQ0FBQyxRQUFRLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUEsS0FDeEQsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUEsQUFBQyxLQUN2QyxDQUFDLFFBQVEsSUFBSSxVQUFVLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQSxBQUFDLEtBQzdDLENBQUMsSUFBSSxJQUNELEFBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVksSUFDN0MsSUFBSSxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVksQUFBQyxJQUM5QyxJQUFJLElBQUksSUFBSSxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxBQUFDLElBQzlDLElBQUksSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLEFBQUMsQ0FBQyxBQUFDLENBQUM7YUFDNUQsQ0FBQyxDQUFDOztBQUVILG1CQUFPLFFBQVEsQ0FBQztXQUNqQjs7O2VBZlUsb0JBQW9CIiwiZmlsZSI6ImZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
