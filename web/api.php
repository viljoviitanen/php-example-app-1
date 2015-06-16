<?php
header('Content-Type: application/json');
print(json_encode(array("status" => true, "data" => array(rand(1,99),rand(1,99),rand(1,99)))));
?>
