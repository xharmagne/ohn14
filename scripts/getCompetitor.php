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

      if (!empty($row["Shirt_size"])) {
        $shirtRegistered = 1;
        $shirtSize = $row["Shirt_size"];
      }

      $arr = array('sfRegistered' => $sfRegistered, 'tkRegistered' => $tkRegistered, 'mkRegistered' => $mkRegistered, 'a1Registered' => $a1Registered, 'a2Registered' => $a2Registered,
                   's1Registered' => $s1Registered, 's2Registered' => $s2Registered, 's3Registered' => $s3Registered, 's4Registered' => $s4Registered,
                   'shirtRegistered' => $shirtRegistered, 'shirtSize' => $shirtSize);
      $result = json_encode($arr);

  }

}



$mysqli->close();

echo $result;

?>
