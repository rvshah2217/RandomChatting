<?php
    include("init.php");

    $query="SELECT no,timediff(now(),time) FROM rc_wait_queue";
    
    $waiting_time=new DateTime('00:05:00');
    $target=-1;
    if($result=mysqli_query($con,$query)){
        while($row=mysqli_fetch_row($result)){
            $diffed_time=new DateTime($row[1]); 

            $time_minus=round(($diffed_time->format('U')-$waiting_time->format('U'))/(60));
            if($time_minus<=5){
                //최근 사용자
                //echo $row[0];
                $target=$row[0];
                break;
            }
        }
    }
    $result_json=array();
    if($target!=-1){
        
        $result_json['target']=$target;
        $result_json['me']=date('U');
        $query="DELETE FROM rc_wait_queue WHERE no='".$result_json['target']."'";
        mysqli_query($con,$query);
        $query="INSERT INTO rc_message(no,src_user,dest_user,message,time) VALUES(NULL,".$result_json['target'].",".$result_json['me'].",'(#chatting_start#)',now())";
        mysqli_query($con,$query);
        
    }else{
        $result_json['errmsg']="There have not target Should Waiting";
        $query="INSERT INTO rc_wait_queue(no,time) VALUES(NULL,now())";
        mysqli_query($con,$query);
        $query="SELECT MAX(no) FROM rc_wait_queue";
        if($result=mysqli_query($con,$query)){
            while($row=mysqli_fetch_row($result)){
                $result_json['me']=$row[0];
            }
        }
    }
    echo json_encode($result_json);

?>