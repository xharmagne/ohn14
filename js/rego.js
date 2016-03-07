// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

function RegoController($scope, $http, $anchorScroll, $window) {
    var that = this;
    that.scope = $scope;
    that.http = $http;
    that.anchorScroll = $anchorScroll;
    that.currentRegistrantForAgeCheck = null;

    that.passTypes = [{ type: "Competitor", description: "Competitor pass", price: 40 },
                      { type: "Spectator", description: "Spectator pass", price: 5 },
                      { type: "AddGames", description: "Add games to existing pass", price: 0 }];

    that.games = [{ code: "SF", description: "SFV tournament entry", price: 10 },
                  { code: "TK", description: "Tekken 7 tournament entry", price: 10 },
                  { code: "MK", description: "Mortal Kombat X tournament entry", price: 10 },
                  { code: "A1", description: "Virtua Fighter tournament entry", price: 10 },
                  { code: "A2", description: "Other 2 tournament entry", price: 10 }];

    that.init = function () {
        that.scope.safeApply(function () {
            that.scope.isBusy = false;
            that.scope.state = "Editing";
            that.scope.triedProceedToRegister = false;
            that.scope.total = 0;

            that.scope.registrants = [];
            that.scope.registrants.push(that.scope.createRegistrant(0));
        });

    };

    that.scope.summarizeItems = function () {

        var total = 0;

        that.scope.registrants.forEach(function (r) {
            r.items.length = 0;

            // Pass type
            var passTypeMatches = $.grep(that.passTypes, function (p) {
                return p.type == r.type;
            });

            var passTypeMatch = passTypeMatches[0];

            var pti = {};
            pti.quantity = "1";
            pti.name = passTypeMatch.description;
            pti.description = "For " + r.gamertag;
            pti.price = passTypeMatch.price;
            pti.currency = "AUD";
            r.items.push(pti);

            // Games
            if (r.type == "Competitor" || r.type == "AddGames") {
                var gameTypeMatches = $.grep(that.games, function (g) {
                    return (r.sf && g.code == "SF") ||
                           (r.tk && g.code == "TK") ||
                           (r.mk && g.code == "MK") ||
                           (r.a1 && g.code == "A1") ||
                           (r.a2 && g.code == "A2");
                });

                gameTypeMatches.forEach(function (g) {
                    var gi = {};
                    gi.quantity = "1";
                    gi.name = g.description;
                    gi.description = "For " + r.gamertag;
                    gi.price = g.price;
                    gi.currency = "AUD";
                    r.items.push(gi);
                });
            }

            r.total = r.items.reduce(function (previousValue, currentValue) {
                return { price: previousValue.price + currentValue.price };
            }).price;

            total += r.total;
        });

        that.scope.total = total;
    };

    that.scope.reviewRegistration = function () {

        if (!that.scope.form.$valid) {
            that.scope.validationFailed = true;

            // Scroll to top
            that.anchorScroll("top");
            return;
        }

        that.scope.validationFailed = false;

        that.scope.summarizeItems();
        that.scope.state = 'Reviewing';
    };

    that.scope.editRegistration = function (registrant) {
        if (registrant) {
            that.scope.registrants.forEach(function (r) {
                r.isCollapsed = true;
            });
            registrant.isCollapsed = false;
        }

        that.scope.state = 'Editing';
    };

    that.scope.createRegistrant = function (ix) {
        var registrant = {};
        registrant.index = ix;
        registrant.type = "";
        registrant.gamertag = "";
        registrant.firstName = "";
        registrant.lastName = "";
        registrant.email = "";
        registrant.contactNumber = "";
        registrant.state = "";
        registrant.otherLocation = "";
        registrant.sf = false;
        registrant.tk = false;
        registrant.mk = false;
        registrant.a1 = false;
        registrant.a2 = false;
        registrant.isCollapsed = false;

        registrant.sfRegistered = false;
        registrant.tkRegistered = false;
        registrant.mkRegistered = false;
        registrant.a1Registered = false;
        registrant.a2Registered = false;

        registrant.items = [];
        registrant.total = 0;

        return registrant;
    };

    that.scope.toggleRegistrant = function (registrant) {
        registrant.isCollapsed = !registrant.isCollapsed
    };

    that.scope.addRegistrant = function () {

        // Collapse all other registrants
        that.scope.registrants.forEach(function (r) {
            r.isCollapsed = true;
        });

        // Add registrant
        var lastRegistrantIx = that.scope.registrants.length - 1;
        var newIx = that.scope.registrants[lastRegistrantIx].index + 1;
        that.scope.registrants.push(that.scope.createRegistrant(newIx));

        // Scroll to top
        that.anchorScroll("top");
    };

    that.scope.removeRegistrant = function (registrant) {

        var toRemoveIndex = that.scope.registrants.indexOf(registrant);
        if (toRemoveIndex > -1) {
            that.scope.registrants.splice(toRemoveIndex, 1);
        }

        if (that.scope.registrants.length == 1) {
            that.scope.registrants[0].isCollapsed = false;
        }
    };

    that.scope.resetGamesSelected = function (registrant) {
        registrant.sf = false;
        registrant.tk = false;
        registrant.mk = false;
        registrant.a1 = false;
        registrant.a2 = false;
        registrant.sfRegistered = false;
        registrant.tkRegistered = false;
        registrant.mkRegistered = false;
        registrant.a1Registered = false;
        registrant.a2Registered = false;
    };

    that.scope.getExistingRegistrant = function (registrant) {

        that.scope.resetGamesSelected(registrant);

        if (registrant.gamertag && registrant.type == "AddGames") {

            $http({
                method: 'POST',
                url: 'scripts/getCompetitor.php',
                data: {
                    gamertag: registrant.gamertag
                }
            }).success(function (data, status, headers, config) {

                that.scope.resetGamesSelected(registrant);

                if (data) {
                    registrant.sfRegistered = data.sfRegistered == true;
                    registrant.tkRegistered = data.tkRegistered == true;
                    registrant.mkRegistered = data.mkRegistered == true;
                    registrant.a1Registered = data.a1Registered == true;
                    registrant.a2Registered = data.a2Registered == true;
                }

            });
        }

    };

    that.scope.competitorPassSelected = function (registrant) {
        that.scope.resetGamesSelected(registrant);
    };

    that.scope.mkxSelectionChanged = function (registrant) {

        if (registrant.mk) {
            that.currentRegistrantForAgeCheck = registrant;
            $('#mkxDialog').foundation('reveal', 'open');
        }
    };

    that.scope.closeMkxDialog = function (isAgeOk) {

        if (that.currentRegistrantForAgeCheck) {
            that.currentRegistrantForAgeCheck.mkx = isAgeOk;
        }

        $('#mkxDialog').foundation('reveal', 'close');

    }

    that.scope.register = function (paymentId, onSuccess) {

        if (!paymentId) {
            paymentId = "TEST";
        }

        var registrants = {
            "registrants": that.scope.registrants,
            "paymentId": paymentId
        };

        var registerReq = {
            method: 'POST',
            url: 'scripts/register.php',
            headers: {
                "Content-Type": "application/json"
            },
            data: registrants
        }

        $http(registerReq).success(function (response) {
            if (onSuccess) {
                onSuccess();
            }
        }).error(function () {
        });

    };

    that.scope.pay = function () {

        that.scope.isBusy = true;


        // Get list of all items to pay for
        var allItems = [];
        that.scope.registrants.forEach(function (r) {
            allItems = allItems.concat(r.items);
        });


        // Create payment object to send to Paypal
        var payment = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "transactions": [
              {
                  "amount": {
                      "total": that.scope.total.toString(),
                      "currency": "AUD",
                      "details": {
                          "subtotal": that.scope.total.toString()
                      }
                  },
                  "description": "OHN 13 Registration",
                  "item_list": {
                      "items": allItems
                  },
                  "soft_descriptor": "OHN13 Registration"
              }
            ]
        };


        // Create payment in paypal
        var createPayReq = {
            method: 'POST',
            url: 'scripts/p1.php',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            data: payment
        }

        $http(createPayReq).success(function (response) {

            if (!response) {
                that.scope.isBusy = false;
                return;
            }

            var paymentId = response;

            // Store registrants data in database
            that.scope.register(paymentId, function () {

                var redirectUrl = "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=" + paymentId;

                // Redirect to approval URL
                // After user approves payment on Paypal, Paypal will redirect to redirect URL
                // specified in initial call to create payment
                $window.location.href = redirectUrl;
            });

        }).error(function () {
            that.scope.isBusy = false;
        });


    };

    //taken from https://coderwall.com/p/ngisma
    that.scope.safeApply = function (fn) {
        var phase = this.$root.$$phase;
        if (phase == '$apply' || phase == '$digest') {
            if (fn && (typeof (fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    that.init();
}


//init angularJS
var regoapp = angular.module('registrationApp', ['ngAnimate', 'angular-spinkit']);


//anuglar controller registration
regoapp.controller('RegoController', function ($scope, $http, $anchorScroll, $window) {
    return new RegoController($scope, $http, $anchorScroll, $window);
});


// directives
regoapp.directive('ohnExistingCompetitor', ['$http', function ($http) {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            function checkCompetitorExists() {
                if (elem.val() && scope.$eval(attrs.ohnExistingCompetitor)) {

                    $http({
                        method: 'POST',
                        url: 'scripts/checkCompetitorExists.php',
                        data: {
                            gamertag: elem.val()
                        }
                    }).success(function (data, status, headers, config) {
                        var isValid = data == true;
                        ctrl.$setValidity('existing', isValid);
                    });
                } else {
                    ctrl.$setValidity('existing', true);
                }
            }
            elem.on('blur', function (evt) {
                scope.$apply(checkCompetitorExists);
            });
            scope.$watch(attrs.ohnExistingCompetitor, function (newValue, oldValue) {
                if (newValue != oldValue) {
                    checkCompetitorExists();
                }
            });
        }
    }
}]);

regoapp.directive('ohnUniqueCompetitor', ['$http', function ($http) {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            function checkCompetitorExists() {
                if (elem.val() && scope.$eval(attrs.ohnUniqueCompetitor)) {

                    $http({
                        method: 'POST',
                        url: 'scripts/checkCompetitorExists.php',
                        data: {
                            gamertag: elem.val()
                        }
                    }).success(function (data, status, headers, config) {
                        var isValid = data == false;
                        ctrl.$setValidity('unique', isValid);
                    });
                } else {
                    ctrl.$setValidity('unique', true);
                }
            }
            elem.on('blur', function (evt) {
                scope.$apply(checkCompetitorExists);
            });
            scope.$watch(attrs.ohnUniqueCompetitor, function (newValue, oldValue) {
                if (newValue != oldValue) {
                    checkCompetitorExists();
                }
            });
        }
    }
}]);
