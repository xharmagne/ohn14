export class FilterValueConverter {
  toView(value, gamertag, region, passType, game) {

    if (!value) {
      return value;
    }

    var filtered = value.filter(function(registrant) {
        return (!gamertag || registrant.gamertag.toLowerCase().includes(gamertag.toLowerCase())) &&
          (!region || registrant.region == region) &&
          (!passType || registrant.passType == passType) &&
          (!game ||
              ((game == "SF" && registrant.games.sfRegistered) ||
               (game == "TK" && registrant.games.tkRegistered) ||
               (game == "MK" && registrant.games.mkRegistered) ||
               (game == "A1" && registrant.games.a1Registered) ||
               (game == "S1" && registrant.games.s1Registered) ||
               (game == "S2" && registrant.games.s2Registered) ||
               (game == "S3" && registrant.games.s3Registered) ||
               (game == "S4" && registrant.games.s4Registered) ||
               (game == "DIY1" && registrant.games.diy1Registered) ||
               (game == "DIY2" && registrant.games.diy2Registered) ||
               (game == "DIY3" && registrant.games.diy3Registered) ||
               (game == "DIY4" && registrant.games.diy4Registered) ||
               (game == "DIY5" && registrant.games.diy5Registered) ||
               (game == "DIY6" && registrant.games.diy6Registered) ||
               (game == "DIY7" && registrant.games.diy7Registered) ||
               (game == "DIY8" && registrant.games.diy8Registered) ||
               (game == "DIY9" && registrant.games.diy9Registered) ||
               (game == "DIY10" && registrant.games.diy10Registered) ||
               (game == "DIY11" && registrant.games.diy11Registered) ||
               (game == "DIY12" && registrant.games.diy12Registered)));
    });

    return filtered;
  }
}
