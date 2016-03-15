CREATE TABLE IF NOT EXISTS `ohn14_registrants` (
  `Gamertag` varchar(100) NOT NULL,
  `Pass_type` varchar(100) NOT NULL,
  `First_name` varchar(100) NULL,
  `Last_name` varchar(100) NULL,
  `Email` varchar(100) NOT NULL,
  `Contact_number` varchar(100) NULL,
  `State` varchar(100) NOT NULL,
  `SF` tinyint(1) NOT NULL,
  `TK` tinyint(1) NOT NULL,
  `MK` tinyint(1) NOT NULL,
  `A1` tinyint(1) NOT NULL,
  `A2` tinyint(1) NOT NULL,
  `Payment_ID` varchar(100) NULL,
  `Payment_status` varchar(100) NULL,
  `Payer_ID` varchar(100) NULL,
  `Payment_date` varchar(100) NULL,
  `Registration_date` varchar(100) NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;