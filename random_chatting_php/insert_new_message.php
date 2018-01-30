<?php
    include("init.php");
    $src=$_GET['src'];
    $dest=$_GET['dest'];
    $message=$_GET['message'];

    $query="INSERT INTO rc_message(no,src_user,dest_user,message,time) VALUES(NULL,$src,$dest,'$message',now())";
    
    mysqli_query($con,$query);
?>