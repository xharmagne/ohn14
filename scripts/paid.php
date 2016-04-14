<?php
require_once('./rconfig.php');
require_once('./sendmail.php');

$data = json_decode(file_get_contents("php://input"));
$paymentId = $data->paymentId;
$payerId = $data->payerId;
$status = $data->status;

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

$d = date(DATE_RFC2822);
$query = "update `" . DB_TABLE . "` set `Payment_status` = '$status', `Payer_ID` = '$payerId', `Payment_date` = '$d' where `Payment_ID` = '$paymentId'; ";

$result = $query;

if ($mysqli->multi_query($query)) {
  $result .= $mysqli->affected_rows;

  $updatedRegistrantsQuery = "select * from `" . DB_TABLE . "`
                              where `Payment_ID` = '$paymentId'
                              and `Payment_status` = 'Paid'; ";

  $result.="run mail query\n";

  $result.=$updatedRegistrantsQuery;

  if ($updatedRegistrantsResult = $mysqli->query($updatedRegistrantsQuery)) {
    while ($row = $updatedRegistrantsResult->fetch_assoc()) {
      $result.="result";

        $name = $row["First_name"]." ".$row["Last_name"];
        $gamertag = $row["Gamertag"];
        $pass = $row["Pass_type"];
        $email = $row["Email"];
        $games = "";
        $shirt = "N/A";

        $result.=$gamertag;

        if ($row["SF"]) {
          $games .= "SFV | ";
        }
         if ($row["TK"]) {
          $games .= "T7 | ";
        }
         if ($row["MK"]) {
          $games .= "MKX | ";
        }
         if ($row["A1"]) {
          $games .= "VF | ";
        }
         if ($row["A2"]) {
          $games .= "A2 | ";
        }
        if ($row["S1"]) {
         $games .= "SSBM Singles | ";
        }
        if ($row["S2"]) {
         $games .= "SSBM Doubles | ";
        }
       if ($row["S3"]) {
        $games .= "SSB4 Singles | ";
       }
       if ($row["S4"]) {
        $games .= "SSB4 Doubles | ";
       }
       if (!empty($row["Shirt_size"])) {
         $shirt = "Size ".$row["Shirt_size"];
       }

        if ($games == "") {
          $games = "N/A";
        }

        $body = sprintf('<div style="width:600px;margin:0 auto">
                          <img src="http://ohn.ozhadou.net/img/banner.jpg" alt="OHN14" style="width:auto;max-height:170px" />

                          <h1>OHN14 Registration confirmed</h1>

                          <p style="font-family:Roboto, Verdana;">Thanks for registering for OHN14! Here are the details of your registration:</p>

                          <table style="font-family:Roboto, Verdana;">
	                          <tr><td style="font-weight:bold;width:100px">Gamertag</td><td>%s</td></tr>
	                          <tr><td style="font-weight:bold;">Pass type</td><td>%s</td></tr>
	                          <tr><td style="font-weight:bold;">Games</td><td>%s</td></tr>
                            <tr><td style="font-weight:bold;">Shirt</td><td>%s</td></tr>
                          </table>

                          <br/>

                          <p style="font-family:Roboto, Verdana;">What to do on entry:</p>

                          <ul style="font-family:Roboto, Verdana;">
                            <li style="font-family:Roboto, Verdana;">Show us a copy of this email (printed or on your smartphone) </li>
                            <li style="font-family:Roboto, Verdana;">Show us photo identification if requested </li>
                          </ul>

                        </div>', $gamertag, $pass, $games, $shirt);

        $plainBody = sprintf("Thanks for registering for OHN14! Here are the details of your registration:\n\n
                              Gamertag: %s\n
	                            Pass type: %s\n
	                            Games: %s\n
                              Shirt: %s\n
                              \n\n
                              What to do on entry:\n
                              Show us a copy of this email (printed or on your smartphone)\n
                              Show us photo identification if requested", $gamertag, $pass, $games, $shirt);

        send_mail($name, $email, "OHN14 Registration Confirmed", $body, $plainBody);
    }

  }


} else {
  $result .= $mysqli->error;

  error_log($result, 0);
}

$mysqli->close();

echo $result;

?>
