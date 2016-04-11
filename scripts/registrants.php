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

      $games = array('sfRegistered' => $sfRegistered, 'tkRegistered' => $tkRegistered, 'mkRegistered' => $mkRegistered, 'a1Registered' => $a1Registered, 'a2Registered' => $a2Registered);
      $registrant = array('gamertag' => $row["Gamertag"], 'passType' => $row["Pass_type"], 'region' => $row["State"], 'games' => $games);

      array_push($registrants, $registrant);

  }

  $result = json_encode($registrants);
  error_log("Reegistrants:".$result);
}



$mysqli->close();

echo $result;

?>
