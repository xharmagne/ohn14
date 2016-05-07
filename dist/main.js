'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      function configure(aurelia) {
        aurelia.use.standardConfiguration().developmentLogging();

        aurelia.use.plugin('aurelia-animator-css');


        aurelia.start().then(function () {
          return aurelia.setRoot();
        });
      }

      _export('configure', configure);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sZUFBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCO0FBQ2pDLGdCQUFRLEdBQVIsQ0FDRyxxQkFESCxHQUVHLGtCQUZIOztBQUtBLGdCQUFRLEdBQVIsQ0FBWSxNQUFaLENBQW1CLHNCQUFuQjs7O0FBTUEsZ0JBQVEsS0FBUixHQUFnQixJQUFoQixDQUFxQjtBQUFBLGlCQUFNLFFBQVEsT0FBUixFQUFOO0FBQUEsU0FBckI7QUFDRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
