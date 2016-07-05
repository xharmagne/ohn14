<?php
header("Access-Control-Allow-Origin: *");
require_once('./rconfig.php');

$result = null;

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

$query = "select * from `" . DB_TABLE . "`
          where `Payment_status` = 'Paid'; ";


if ($qryresult = $mysqli->query($query)) {

  $registrants = array();

  while ($row = $qryresult->fetch_assoc()) {

      $sfRegistered = false;
      $tkRegistered = false;
      $mkRegistered = false;
      $a1Registered = false;
      $a2Registered = false;
      $s1Registered = false;
      $s2Registered = false;
      $s3Registered = false;
      $s4Registered = false;
      $diy1Registered = false;
      $diy2Registered = false;
      $diy3Registered = false;
      $diy4Registered = false;
      $diy5Registered = false;
      $diy6Registered = false;
      $diy7Registered = false;
      $diy8Registered = false;
      $diy9Registered = false;
      $diy10Registered = false;
      $diy11Registered = false;
      $diy12Registered = false;

      $s2Notes = "";
      $s4Notes = "";
      $diy10Notes = "";

      if ($row["SF"]) {
        $sfRegistered = true;
      }
        if ($row["TK"]) {
        $tkRegistered = true;
      }
        if ($row["MK"]) {
        $mkRegistered = true;
      }
      if ($row["A1"]) {
        $a1Registered = true;
      }
      if ($row["A2"]) {
        $a2Registered = true;
      }
      if ($row["S1"]) {
        $s1Registered = true;
      }
      if ($row["S2"]) {
        $s2Registered = true;

        if (!empty($row["S2_Notes"])) {
          $s2Notes = $row["S2_Notes"];
        }
      }
      if ($row["S3"]) {
        $s3Registered = true;
      }
      if ($row["S4"]) {
        $s4Registered = true;

        if (!empty($row["S4_Notes"])) {
          $s4Notes = $row["S4_Notes"];
        }
      }
      if ($row["DIY1"]) {
        $diy1Registered = true;
      }
      if ($row["DIY2"]) {
        $diy2Registered = true;
      }
      if ($row["DIY3"]) {
        $diy1Registered = true;
      }
      if ($row["DIY4"]) {
        $diy1Registered = true;
      }
      if ($row["DIY5"]) {
        $diy1Registered = true;
      }
      if ($row["DIY6"]) {
        $diy1Registered = true;
      }
      if ($row["DIY7"]) {
        $diy1Registered = true;
      }
      if ($row["DIY8"]) {
        $diy1Registered = true;
      }
      if ($row["DIY9"]) {
        $diy1Registered = true;
      }
      if ($row["DIY10"]) {
        $diy1Registered = true;

        if (!empty($row["DIY10_Notes"])) {
          $diy10Notes = $row["DIY10_Notes"];
        }
      }
      if ($row["DIY11"]) {
        $diy11Registered = true;
      }
      if ($row["DIY12"]) {
        $diy12Registered = true;
      }

      $games = array('sfRegistered' => $sfRegistered, 'tkRegistered' => $tkRegistered, 'mkRegistered' => $mkRegistered, 'a1Registered' => $a1Registered, 'a2Registered' => $a2Registered,
                     's1Registered' => $s1Registered, 's2Registered' => $s2Registered, 's3Registered' => $s3Registered, 's4Registered' => $s4Registered
                     'diy1Registered' => $diy1Registered, 'diy2Registered' => $diy2Registered, 'diy3Registered' => $diy3Registered, 'diy4Registered' => $diy4Registered, 'diy5Registered' => $diy5Registered, 'diy6Registered' => $diy6Registered,
                     'diy7Registered' => $diy7Registered, 'diy8Registered' => $diy8Registered, 'diy9Registered' => $diy9Registered, 'diy10Registered' => $diy10Registered, 'diy11Registered' => $diy11Registered, 'diy12Registered' => $diy12Registered,
      $registrant = array('gamertag' => $row["Gamertag"], 'passType' => $row["Pass_type"], 'region' => $row["State"], 'games' => $games, 's2Notes' => $s2Notes, 's4Notes' => $s4Notes, 'diy10Notes' => $diy10Notes);

      array_push($registrants, $registrant);

  }

  $result = json_encode($registrants);
  //error_log("Registrants:".$result);
}



$mysqli->close();

echo $result;

?>
