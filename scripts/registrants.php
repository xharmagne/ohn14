<?php
require_once('./rconfig.php');

$result = null;

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

$query = "select * from `" . DB_TABLE . "`
          where `Payment_status` = 'Paid'; ";


if ($qryresult = $mysqli->query($query)) {

  $registrants = array();

  while ($row = $qryresult->fetch_assoc()) {

      $sfRegistered = 0;
      $tkRegistered = 0;
      $mkRegistered = 0;
      $a1Registered = 0;
      $a2Registered = 0;

      if ($row["SF"]) {
        $sfRegistered = 1;
      }
        if ($row["TK"]) {
        $tkRegistered = 1;
      }
        if ($row["MK"]) {
        $mkRegistered = 1;
      }
      if ($row["A1"]) {
        $a1Registered = 1;
      }
      if ($row["A2"]) {
        $a2Registered = 1;
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
