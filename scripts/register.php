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
  "insert into `" . DB_TABLE . "` (`Gamertag`, `Pass_type`, `First_name`, `Last_name`, `Email`, `Contact_number`, `State`,
                                    `SF`, `TK`, `MK`, `A1`, `A2`, `S1`, `S2`, `S3`, `S4`, `Shirt_size`, `S2_Notes`, `S4_Notes`,
                                    `Payment_ID`, `Payment_status`, `Registration_date`) values ";

$updatequery = "";

$d = date(DATE_RFC2822);

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
  $shirtsize = "";
  $s2Notes = "";
  $s4Notes = "";
  if ($registrants[$i]->shirt) {
    $shirtsize = $mysqli->real_escape_string($registrants[$i]->shirtSize);
  }

  if ($registrants[$i]->s2 && $registrants[$i]->s2Notes) {
    $s2Notes = $mysqli->real_escape_string($registrants[$i]->s2Notes);
  }

  if ($registrants[$i]->s4 && $registrants[$i]->s4Notes) {
    $s4Notes = $mysqli->real_escape_string($registrants[$i]->s4Notes);
  }

  $sf = "false";
  $tk = "false";
  $mk  = "false";
  $a1  = "false";
  $a2  = "false";
  $s1  = "false";
  $s2  = "false";
  $s3  = "false";
  $s4  = "false";

  if ($passtype != "Spectator") {
    $sf = ($registrants[$i]->sf) ? "true" : "false";
    $tk = ($registrants[$i]->tk) ? "true" : "false";
    $mk  = ($registrants[$i]->mk) ? "true" : "false";
    $a1  = ($registrants[$i]->a1) ? "true" : "false";
    $a2  = ($registrants[$i]->a2) ? "true" : "false";
    $s1  = ($registrants[$i]->s1) ? "true" : "false";
    $s2  = ($registrants[$i]->s2) ? "true" : "false";
    $s3  = ($registrants[$i]->s3) ? "true" : "false";
    $s4  = ($registrants[$i]->s4) ? "true" : "false";
  }

  if ($passtype != "AddGames") {

    $insertquery .= "('$gamertag', '$passtype', '$firstname', '$lastname', '$email', '$contactnumber', '$state',
                      $sf, $tk, $mk, $a1, $a2, $s1, $s2, $s3, $s4, '$shirtsize', '$s2Notes', '$s4Notes',
                      '$paymentId', 'Pending', '$d'), ";

    $insertcount = $insertcount + 1;

  } else {

    $status = "-Pending-Add-";

    if ($registrants[$i]->sf) {
      $updatequery .= "update `" . DB_TABLE . "` set `SF` = true where `Gamertag` = '$gamertag'; ";
      $status .= "SF";
    }
     if ($registrants[$i]->tk) {
      $updatequery .= "update `" . DB_TABLE . "` set `TK` = true where `Gamertag` = '$gamertag'; ";
      $status .= "TK";
    }
     if ($registrants[$i]->mk) {
      $updatequery .= "update `" . DB_TABLE . "` set `MK` = true where `Gamertag` = '$gamertag'; ";
      $status .= "MK";
    }
     if ($registrants[$i]->a1) {
      $updatequery .= "update `" . DB_TABLE . "` set `A1` = true where `Gamertag` = '$gamertag'; ";
      $status .= "A1";
    }
     if ($registrants[$i]->a2) {
      $updatequery .= "update `" . DB_TABLE . "` set `A2` = true where `Gamertag` = '$gamertag'; ";
      $status .= "A2";
    }
    if ($registrants[$i]->s1) {
     $updatequery .= "update `" . DB_TABLE . "` set `S1` = true where `Gamertag` = '$gamertag'; ";
     $status .= "S1";
    }
    if ($registrants[$i]->s2) {
     $updatequery .= "update `" . DB_TABLE . "` set `S2` = true, `S2_Notes` = '$s2Notes' where `Gamertag` = '$gamertag'; ";
     $status .= "S2";
    }
    if ($registrants[$i]->s3) {
     $updatequery .= "update `" . DB_TABLE . "` set `S3` = true where `Gamertag` = '$gamertag'; ";
     $status .= "S3";
    }
    if ($registrants[$i]->s4) {
     $updatequery .= "update `" . DB_TABLE . "` set `S4` = true, `S4_Notes` = '$s4Notes' where `Gamertag` = '$gamertag'; ";
     $status .= "S4";
    }
    if ($registrants[$i]->shirt) {
     $updatequery .= "update `" . DB_TABLE . "` set `Shirt_size` = '$shirtsize' where `Gamertag` = '$gamertag'; ";
     $status .= "Shirt";
    }

    $updatequery .= "update `" . DB_TABLE . "` set `Payment_status` = CONCAT(`Payment_status`, '$status'), `Payment_ID` = '$paymentId' where `Gamertag` = '$gamertag'; ";
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
