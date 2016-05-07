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

      $s2Notes = "";
      $s4Notes = "";

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

      $games = array('sfRegistered' => $sfRegistered, 'tkRegistered' => $tkRegistered, 'mkRegistered' => $mkRegistered, 'a1Registered' => $a1Registered, 'a2Registered' => $a2Registered, 's1Registered' => $s1Registered, 's2Registered' => $s2Registered, 's3Registered' => $s3Registered, 's4Registered' => $s4Registered);
      $registrant = array('gamertag' => $row["Gamertag"], 'passType' => $row["Pass_type"], 'region' => $row["State"], 'games' => $games, 's2Notes' => $s2Notes, 's4Notes' => $s4Notes);

      array_push($registrants, $registrant);

  }

  $result = json_encode($registrants);
  error_log("Reegistrants:".$result);
}



$mysqli->close();

echo $result;

?>
