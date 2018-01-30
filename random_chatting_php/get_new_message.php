<?php
    include("init.php");
    $id=$_GET['id'];
    $result_array=array();
    $flag=-1;
    $query="SELECT * FROM rc_message WHERE src_user=$id";
    if($result=mysqli_query($con,$query)){
        while($row=mysqli_fetch_row($result)){
            $query_2="UPDATE rc_message SET src_user=-1 WHERE no=".$row[0];
            mysqli_query($con,$query_2);
            array_push($result_array,$row);
            $flag=1;
        }
    }
    $query="SELECT * FROM rc_message WHERE dest_user=$id";
    if($result=mysqli_query($con,$query)){
        while($row=mysqli_fetch_row($result)){
            $query_2="UPDATE rc_message SET dest_user=-1 WHERE no=".$row[0];
            mysqli_query($con,$query_2);
            array_push($result_array,$row);
            $flag=1;
        }
    }
    if($flag==-1){
        $result_array['info']="NO_DATA";
    }else{
        
    }
    echo json_encode($result_array);
?>