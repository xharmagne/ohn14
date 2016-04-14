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
               (game == "S4" && registrant.games.s4Registered)));
    });

    return filtered;
  }
}
