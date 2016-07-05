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
        $note  = "";

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
          $partnera = "";
          if (!empty($row["S2_Notes"])) {
            $partnera = " (with ".$row["S2_Notes"].")";
          }

         $games .= "SSBM Doubles".$partnera." | ";
         $note = "Please notify us of any changes to Doubles teams via email at <a href=\"mailto:ohnsmash@ozhadou.net\">ohnsmash@ozhadou.net</a><br/>";
        }
       if ($row["S3"]) {
        $games .= "SSB4 Singles | ";
       }
       if ($row["S4"]) {
         $partnerb = "";
         if (!empty($row["S4_Notes"])) {
           $partnerb =  " (with ".$row["S4_Notes"].")";
         }

        $games .= "SSB4 Doubles".$partnerb." | ";
        $note = "Please notify us of any changes to Doubles teams via email at <a href=\"mailto:ohnsmash@ozhadou.net\">ohnsmash@ozhadou.net</a><br/>";
       }

       if ($row["DIY1"]) {
        $games .= "ST | ";
       }

       if ($row["DIY2"]) {
        $games .= "3S | ";
       }

       if ($row["DIY3"]) {
        $games .= "UMVC3 | ";
       }

       if ($row["DIY4"]) {
        $games .= "KOF02UM | ";
       }

       if ($row["DIY5"]) {
        $games .= "KOF98UM | ";
       }

       if ($row["DIY6"]) {
        $games .= "GGXrd | ";
       }

       if ($row["DIY7"]) {
        $games .= "P4AU | ";
       }

       if ($row["DIY8"]) {
        $games .= "POK | ";
       }

       if ($row["DIY9"]) {
        $games .= "SSB64 | ";
       }

       if ($row["DIY10"]) {
         $partnerc = "";
         if (!empty($row["DIY10_Notes"])) {
           $partnerc =  " (with ".$row["DIY10_Notes"].")";
         }

        $games .= "PM Doubles".$partnerc." | ";
        $note = "Please notify us of any changes to Doubles teams via email at <a href=\"mailto:ohnsmash@ozhadou.net\">ohnsmash@ozhadou.net</a><br/>";
       }

       if ($row["DIY11"]) {
        $games .= "X | ";
       }

       if ($row["DIY12"]) {
        $games .= "X | ";
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

                          %s

                          <p style="font-family:Roboto, Verdana;">What to do on entry:</p>

                          <ul style="font-family:Roboto, Verdana;">
                            <li style="font-family:Roboto, Verdana;">Show us a copy of this email (printed or on your smartphone) </li>
                            <li style="font-family:Roboto, Verdana;">Show us photo identification if requested </li>
                          </ul>

                        </div>', $gamertag, $pass, $games, $shirt, $note);

        $plainBody = sprintf("Thanks for registering for OHN14! Here are the details of your registration:\n\n
                              Gamertag: %s\n
	                            Pass type: %s\n
	                            Games: %s\n
                              Shirt: %s\n
                              \n\n
                              Please notify us of any changes to Doubles teams via email at ohnsmash@ozhadou.net.
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
