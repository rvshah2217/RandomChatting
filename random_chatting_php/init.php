<?php
  $host="localhost";
  $username="root";
  $password="2262552a";
  $dbname="rc";
  $con=mysqli_connect($host,$username,$password,$dbname);
  if(mysqli_connect_errno()){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
?>