<?php
require_once('./rconfig.php');

$data = json_decode(file_get_contents("php://input"));
$gamertag = $data->gamertag;
$result = null;

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

$query = "select * from `" . DB_TABLE . "`
          where `Gamertag` = '$gamertag'
          and `Pass_type` = 'Competitor'
          and `Payment_status` = 'Paid'; ";

if ($qryresult = $mysqli->query($query)) {
  while ($row = $qryresult->fetch_assoc()) {

      $sfRegistered = 0;
      $tkRegistered = 0;
      $mkRegistered = 0;
      $a1Registered = 0;
      $a2Registered = 0;
      $s1Registered = 0;
      $s2Registered = 0;
      $s3Registered = 0;
      $s4Registered = 0;
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
      $shirtRegistered = 0;
      $shirtSize = "";


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
      if ($row["S1"]) {
        $s1Registered = 1;
      }
      if ($row["S2"]) {
        $s2Registered = 1;
      }
      if ($row["S3"]) {
        $s3Registered = 1;
      }
      if ($row["S4"]) {
        $s4Registered = 1;
      }
      if ($row["DIY1"]) {
        $diy1Registered = true;
      }
      if ($row["DIY2"]) {
        $diy2Registered = true;
      }
      if ($row["DIY3"]) {
        $diy3Registered = true;
      }
      if ($row["DIY4"]) {
        $diy4Registered = true;
      }
      if ($row["DIY5"]) {
        $diy5Registered = true;
      }
      if ($row["DIY6"]) {
        $diy6Registered = true;
      }
      if ($row["DIY7"]) {
        $diy7Registered = true;
      }
      if ($row["DIY8"]) {
        $diy8Registered = true;
      }
      if ($row["DIY9"]) {
        $diy9Registered = true;
      }
      if ($row["DIY10"]) {
        $diy10Registered = true;
      }
      if ($row["DIY11"]) {
        $diy11Registered = true;
      }
      if ($row["DIY12"]) {
        $diy12Registered = true;
      }

      if (!empty($row["Shirt_size"])) {
        $shirtRegistered = 1;
        $shirtSize = $row["Shirt_size"];
      }

      $arr = array('sfRegistered' => $sfRegistered, 'tkRegistered' => $tkRegistered, 'mkRegistered' => $mkRegistered, 'a1Registered' => $a1Registered, 'a2Registered' => $a2Registered,
                   's1Registered' => $s1Registered, 's2Registered' => $s2Registered, 's3Registered' => $s3Registered, 's4Registered' => $s4Registered,
                   'diy1Registered' => $diy1Registered, 'diy2Registered' => $diy2Registered, 'diy3Registered' => $diy3Registered, 'diy4Registered' => $diy4Registered, 'diy5Registered' => $diy5Registered, 'diy6Registered' => $diy6Registered,
                   'diy7Registered' => $diy7Registered, 'diy8Registered' => $diy8Registered, 'diy9Registered' => $diy9Registered, 'diy10Registered' => $diy10Registered, 'diy11Registered' => $diy11Registered, 'diy12Registered' => $diy12Registered,
                   'shirtRegistered' => $shirtRegistered, 'shirtSize' => $shirtSize);
      $result = json_encode($arr);

  }

}



$mysqli->close();

echo $result;

?>
