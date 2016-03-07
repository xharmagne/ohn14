<?php
require_once('./rconfig.php');

error_log("Registerdata:".file_get_contents("php://input"));

$data = json_decode(file_get_contents("php://input"));

$registrants = $data->registrants;
$paymentId = $data->paymentId;

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

$count = count($registrants);

$insertcount = 0;
$insertquery =
  "insert into `" + DB_TABLE + "` (`Gamertag`, `Pass_type`, `First_name`, `Last_name`, `Email`, `Contact_number`, `State`,
                                    `SF`, `TK`, `MK`, `A1`, `A2`,
                                    `Payment_ID`, `Payment_status`, `Registration_date`) values ";

$updatequery = "";

$today = getdate();
$d = $todayh['mday'] + " " + $todayh['mon'] + " " + $todayh['year'] + " " +  $todayh['hours'] + ":" +  $todayh['minutes'];

for ($i=0; $i < $count; $i++) {

  $gamertag = $mysqli->real_escape_string($registrants[$i]->gamertag);
  $passtype = $registrants[$i]->type;

  $firstname = $mysqli->real_escape_string($registrants[$i]->firstName);
  $lastname = $mysqli->real_escape_string($registrants[$i]->lastName);
  $email = $mysqli->real_escape_string($registrants[$i]->email);
  $contactnumber = $mysqli->real_escape_string($registrants[$i]->contactNumber);
  $state = $mysqli->real_escape_string($registrants[$i]->state);
  if (trim($state) == 'Other') {
    $state = $mysqli->real_escape_string($registrants[$i]->otherLocation);
  }

  $sf = "false";
  $tk = "false";
  $mk  = "false";
  $a1  = "false";
  $a2  = "false";

  if ($passtype != "Spectator") {
    $sf = ($registrants[$i]->sf) ? "true" : "false";
    $tk = ($registrants[$i]->tk) ? "true" : "false";
    $mk  = ($registrants[$i]->mk) ? "true" : "false";
    $a1  = ($registrants[$i]->a1) ? "true" : "false";
    $a2  = ($registrants[$i]->a2) ? "true" : "false";
  }

  if ($passtype != "AddGames") {

    $insertquery .= "('$gamertag', '$passtype', '$firstname', '$lastname', '$email', '$contactnumber', '$state',
                      $sf, $tk, $mk, $a1, $a2,
                      '$paymentId', 'Pending', '$d'), ";

    $insertcount = $insertcount + 1;

  } else {

    $status = "-Pending-Add-";

    if ($registrants[$i]->sf) {
      $updatequery .= "update `" + DB_TABLE + "` set `SF` = true where `Gamertag` = '$gamertag'; ";
      $status .= "SF";
    }
     if ($registrants[$i]->tk) {
      $updatequery .= "update `" + DB_TABLE + "` set `TK` = true where `Gamertag` = '$gamertag'; ";
      $status .= "TK";
    }
     if ($registrants[$i]->mk) {
      $updatequery .= "update `" + DB_TABLE + "` set `MK` = true where `Gamertag` = '$gamertag'; ";
      $status .= "MK";
    }
     if ($registrants[$i]->a1) {
      $updatequery .= "update `" + DB_TABLE + "` set `A1` = true where `Gamertag` = '$gamertag'; ";
      $status .= "A1";
    }
     if ($registrants[$i]->a2) {
      $updatequery .= "update `" + DB_TABLE + "` set `A2` = true where `Gamertag` = '$gamertag'; ";
      $status .= "A2";
    }

    $updatequery .= "update `" + DB_TABLE + "` set `Payment_status` = CONCAT(`Payment_status`, '$status'), `Payment_ID` = '$paymentId' where `Gamertag` = '$gamertag'; ";
  }

}

$query = "";

if ($insertcount > 0) {
  $insertquery = substr($insertquery, 0, -2);
  $query = $insertquery.";";
}

$query .= $updatequery;

error_log("Register:".$query);

$result = $query;

if ($mysqli->multi_query($query)) {
  $result .= $mysqli->affected_rows;
} else {
  $result .= $mysqli->error;

  error_log($result, 0);
}

$mysqli->close();

error_log("Register:".$result);
echo $result;

?>
