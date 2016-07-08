// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

function RegoController($scope, $http, $anchorScroll, $window) {
    var that = this;
    that.scope = $scope;
    that.http = $http;
    that.anchorScroll = $anchorScroll;
    that.currentRegistrantForAgeCheck = null;
    that.scope.currentRegistrantForS2 = null;
    that.scope.currentRegistrantForS4 = null;
    that.scope.currentRegistrantForDIY10 = null;

    that.passTypes = [{ type: "Competitor", description: "Competitor pass", price: 50 },
                      { type: "Spectator", description: "Spectator pass", price: 10 },
                      { type: "AddGames", description: "Add games to existing pass", price: 0 }];

    that.games = [{ code: "SF", description: "SFV tournament entry", price: 10 },
                  { code: "TK", description: "Tekken 7 tournament entry", price: 10 },
                  { code: "MK", description: "Mortal Kombat X tournament entry", price: 10 },
                  { code: "A1", description: "Virtua Fighter tournament entry", price: 10 },
                  { code: "A2", description: "Other 2 tournament entry", price: 10 },
                  { code: "S1", description: "Super Smash Bros. Melee (Singles) tournament entry", price: 10 },
                  { code: "S2", description: "Super Smash Bros. Melee (Doubles) tournament entry", price: 10 },
                  { code: "S3", description: "Super Smash Bros. for Wii U (Singles) tournament entry", price: 10 },
                  { code: "S4", description: "Super Smash Bros. for Wii U (Doubles) tournament entry", price: 10 },
                  { code: "DIY1", description: "Super Street Fighter II Turbo tournament entry", price: 5 },
                  { code: "DIY2", description: "Street Fighter III: 3rd Strike tournament entry", price: 5 },
                  { code: "DIY3", description: "Ultimate Marvel vs. Capcom 3 tournament entry", price: 5 },
                  { code: "DIY4", description: "The King of Fighters 2002: Unlimited Match tournament entry", price: 5 },
                  { code: "DIY5", description: "The King of Fighters 98: Unlimited Match Final Edition tournament entry", price: 5 },
                  { code: "DIY6", description: "Guilty Gear Xrd -REVELATOR- tournament entry", price: 5 },
                  { code: "DIY7", description: "Persona 4 Arena Ultimax tournament entry", price: 5 },
                  { code: "DIY8", description: "Pokken Tournament tournament entry", price: 5 },
                  { code: "DIY9", description: "Super Smash Bros. 64 tournament entry", price: 5 },
                  { code: "DIY10", description: "Project M tournament entry", price: 5 },
                  { code: "DIY11", description: "Other DIY tournament entry", price: 5 },
                  { code: "DIY12", description: "Other DIY tournament entry", price: 5 }];

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

            if (r.shirt) {
              var shirtItemName = "OHN14 Shirt Size " + r.shirtSize;
              var shirtPrice = 25;

              var si = {};
              si.quantity = "1";
              si.name = shirtItemName;
              si.description = "For " + r.gamertag;
              si.price = shirtPrice;
              si.currency = "AUD";
              r.items.push(si);
            }


            // Games
            if (r.type == "Competitor" || r.type == "AddGames") {
                var gameTypeMatches = $.grep(that.games, function (g) {
                    return (r.sf && g.code == "SF") ||
                           (r.tk && g.code == "TK") ||
                           (r.mk && g.code == "MK") ||
                           (r.a1 && g.code == "A1") ||
                           (r.a2 && g.code == "A2") ||
                           (r.s1 && g.code == "S1") ||
                           (r.s2 && g.code == "S2") ||
                           (r.s3 && g.code == "S3") ||
                           (r.s4 && g.code == "S4") ||
                           (r.diy1 && g.code == "DIY1") ||
                           (r.diy2 && g.code == "DIY2") ||
                           (r.diy3 && g.code == "DIY3") ||
                           (r.diy4 && g.code == "DIY4") ||
                           (r.diy5 && g.code == "DIY5") ||
                           (r.diy6 && g.code == "DIY6") ||
                           (r.diy7 && g.code == "DIY7") ||
                           (r.diy8 && g.code == "DIY8") ||
                           (r.diy9 && g.code == "DIY9") ||
                           (r.diy10 && g.code == "DIY10") ||
                           (r.diy11 && g.code == "DIY11") ||
                           (r.diy12 && g.code == "DIY12");
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
        registrant.isCollapsed = false;

        that.scope.resetGamesSelected(registrant);

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
        registrant.s1 = false;
        registrant.s2 = false;
        registrant.s3 = false;
        registrant.s4 = false;
        registrant.diy1 = false;
        registrant.diy2 = false;
        registrant.diy3 = false;
        registrant.diy4 = false;
        registrant.diy5 = false;
        registrant.diy6 = false;
        registrant.diy7 = false;
        registrant.diy8 = false;
        registrant.diy9 = false;
        registrant.diy10 = false;
        registrant.diy11 = false;
        registrant.diy12 = false;
        registrant.s2Notes = "";
        registrant.s4Notes = "";
        registrant.diy10tes = "";

        registrant.sfRegistered = false;
        registrant.tkRegistered = false;
        registrant.mkRegistered = false;
        registrant.a1Registered = false;
        registrant.a2Registered = false;
        registrant.s1Registered = false;
        registrant.s2Registered = false;
        registrant.s3Registered = false;
        registrant.s4Registered = false;
        registrant.diy1Registered = false;
        registrant.diy2Registered = false;
        registrant.diy3Registered = false;
        registrant.diy4Registered = false;
        registrant.diy5Registered = false;
        registrant.diy6Registered = false;
        registrant.diy7Registered = false;
        registrant.diy8Registered = false;
        registrant.diy9Registered = false;
        registrant.diy10Registered = false;
        registrant.diy11Registered = false;
        registrant.diy12Registered = false;

        registrant.shirt = false;
        registrant.shirtRegistered = false;
        registrant.shirtSize = "M";
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
                    registrant.s1Registered = data.s1Registered == true;
                    registrant.s2Registered = data.s2Registered == true;
                    registrant.s3Registered = data.s3Registered == true;
                    registrant.s4Registered = data.s4Registered == true;
                    registrant.diy1Registered = data.diy1Registered == true;
                    registrant.diy2Registered = data.diy2Registered == true;
                    registrant.diy3Registered = data.diy3Registered == true;
                    registrant.diy4Registered = data.diy4Registered == true;
                    registrant.diy5Registered = data.diy5Registered == true;
                    registrant.diy6Registered = data.diy6Registered == true;
                    registrant.diy7Registered = data.diy7Registered == true;
                    registrant.diy8Registered = data.diy8Registered == true;
                    registrant.diy9Registered = data.diy9Registered == true;
                    registrant.diy10Registered = data.diy10Registered == true;
                    registrant.diy11Registered = data.diy11Registered == true;
                    registrant.diy12Registered = data.diy12Registered == true;
                    registrant.shirtRegistered = data.shirtRegistered == true;
                    if (data.shirtSize) {
                      registrant.shirtSize = data.shirtSize;
                    }
                }

            });
        }

    };

    that.scope.competitorPassSelected = function (registrant) {
        that.scope.resetGamesSelected(registrant);
    };

    that.scope.s2SelectionChanged = function (registrant) {

        if (registrant.s2) {
            that.scope.currentRegistrantForS2 = registrant;
            $('#s2Dialog').foundation('reveal', 'open');
        }
    };

    that.scope.closeS2Dialog = function () {

        $('#s2Dialog').foundation('reveal', 'close');

    }

    that.scope.s4SelectionChanged = function (registrant) {

        if (registrant.s4) {
            that.scope.currentRegistrantForS4 = registrant;
            $('#s4Dialog').foundation('reveal', 'open');
        }
    };

    that.scope.diy10SelectionChanged = function (registrant) {

        if (registrant.diy10) {
            that.scope.currentRegistrantForDIY10 = registrant;
            $('#diy10Dialog').foundation('reveal', 'open');
        }
    };

    that.scope.closeDIY10Dialog = function () {

        $('#diy10Dialog').foundation('reveal', 'close');

    }

    that.scope.closeS4Dialog = function () {

        $('#s4Dialog').foundation('reveal', 'close');

    }

    that.scope.mkxSelectionChanged = function (registrant) {

        if (registrant.mk) {
            that.currentRegistrantForAgeCheck = registrant;
            $('#mkxDialog').foundation('reveal', 'open');
        }
    };

    that.scope.closeMkxDialog = function (isAgeOk) {

        if (that.currentRegistrantForAgeCheck) {
            that.currentRegistrantForAgeCheck.mk = isAgeOk;
        }

        $('#mkxDialog').foundation('reveal', 'close');

    }

    that.scope.register = function (paymentId, onSuccess) {

        that.scope.registrationFailed = false;

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
            that.scope.isBusy = false;
            that.scope.registrationFailed = true;
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
                  "description": "OHN14 Registration",
                  "item_list": {
                      "items": allItems
                  },
                  "soft_descriptor": "OHN14 Registration"
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

                //var redirectUrl = "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=" + paymentId;
                var redirectUrl = "https://www.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=" + paymentId;

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
