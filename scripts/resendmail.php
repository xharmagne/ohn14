<?php
require_once('./rconfig.php');
require_once('./sendmail.php');

$data = json_decode(file_get_contents("php://input"));
$gamertag = $data->gamertag;

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

  $registrantsQuery = "select * from `" . DB_TABLE . "`
                              where `Gamertag` = '$gamertag'
                              and `Payment_status` = 'Paid'; ";

  $result.="resend email \n";

  $result.=$registrantsQuery;

  if ($registrantsResult = $mysqli->query($registrantsQuery)) {
    while ($row = $registrantsResult->fetch_assoc()) {
      $result.="result";

        $name = $row["First_name"]." ".$row["Last_name"];
        $gamertag = $row["Gamertag"];
        $pass = $row["Pass_type"];
        $email = $row["Email"];
        $games = "";

        $result.=$gamertag;

        if ($row["SF"]) {
          $games .= "SFV ";
        }
         if ($row["TK"]) {
          $games .= "T7 ";
        }
         if ($row["MK"]) {
          $games .= "MKX ";
        }
         if ($row["A1"]) {
          $games .= "VF ";
        }
         if ($row["A2"]) {
          $games .= "A2 ";
        }

        if ($games == "") {
          $games = "N/A";
        }

        $body = sprintf('<div style="width:600px;margin:0 auto">
                          <img src="http://ohn.ozhadou.net/img/img_banner.jpg" alt="OHN14" style="width:auto;max-height:170px" />

                          <h1>OHN14 Registration confirmed</h1>

                          <p style="font-family:Roboto, Verdana;">Thanks for registering for OHN14! Here are the details of your registration:</p>

                          <table style="font-family:Roboto, Verdana;">
	                          <tr><td style="font-weight:bold;width:100px">Gamertag</td><td>%s</td></tr>
	                          <tr><td style="font-weight:bold;">Pass type</td><td>%s</td></tr>
	                          <tr><td style="font-weight:bold;">Games</td><td>%s</td></tr>
                          </table>

                          <br/>

                          <p style="font-family:Roboto, Verdana;">What to do on entry:</p>

                          <ul style="font-family:Roboto, Verdana;">
                            <li style="font-family:Roboto, Verdana;">Show us a copy of this email (printed or on your smartphone) </li>
                            <li style="font-family:Roboto, Verdana;">Show us photo identification if requested </li>
                          </ul>

                        </div>', $gamertag, $pass, $games);

        $plainBody = sprintf("Thanks for registering for OHN14! Here are the details of your registration:\n\n
                              Gamertag: %s\n
	                            Pass type: %s\n
	                            Games: %s\n
                              \n\n
                              What to do on entry:\n
                              Show us a copy of this email (printed or on your smartphone)\n
                              Show us photo identification if requested", $gamertag, $pass, $games);

        send_mail($name, $email, "OHN 14 Registration Confirmed", $body, $plainBody);
    }

  }


$mysqli->close();

echo $result;

?>
