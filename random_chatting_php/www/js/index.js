var me=-101;
var target=-100;
var content=document.getElementById('content');
function get_message(){
    console.log("request server me::"+me);
    $.get("../get_new_message.php",{id:me}).done((r)=>{
        var obj=JSON.parse(r);
        console.log(r);

        if(obj.info=="NO_DATA"){

        }else{
            document.getElementById('modal').style.display="none";
            console.log(obj[0][1]+":ME!!ReallyMe::"+me);

            if(obj[0][1]==me){
                build_right_message(obj[0][3]);
                if(target==-100){
                    target=obj[0][2];
                }
            }else{
                build_left_message(obj[0][3]);
                if(target==-100){
                    target=obj[0][2];
                }
            }
            console.log(":Target::"+target);
            // else{
            //     build_left_message(obj[0][3]);
            // }
        }

    });
}
function get_new_ticket(){
    $.post("../connect_to_server.php",{}).done((r)=>{
        var obj=JSON.parse(r);
        console.log(r);
        if(obj.errmsg=="There have not target Should Waiting"){
            alert(r+"대기");
            me=obj.me;
            document.getElementById('modal').style.display="block";
            setInterval(get_message,300);
        }else{
            //alert(r+"사람찾음");
            me=obj.me;
            target=obj.target;
            console.log("target register:me:"+me+":target:"+target);
            setTimeout(()=>{setInterval(get_message,300)},1000);
        }
        //alert(me+":"+target);
        
    });
}
function build_right_message(msg){
    var html='<div class=line>';
    html+='<div class="right-chat bubble">'+msg+'<div class=date>2018/01/29</div></div>';
    html+='</div>';
    document.getElementById('content').innerHTML+=html;
}
function build_left_message(msg){
    var html='<div class=line>';
    html+='<div class="left-chat bubble">'+msg+'<div class=date>2018/01/29</div></div>';
    html+='</div>';
    document.getElementById('content').innerHTML+=html;
}
function send_message(){
    var msg=document.getElementById('key_input_text').value;
    console.log("INSERT MESSAGE:ME:"+me+":TARGET:"+target+":msg:"+msg);
    $.get("../insert_new_message.php",{
        src:me,
        dest:target,
        message:msg
    }).done((r)=>{

    });
}

window.onload=()=>{
    document.getElementById('modal').style.display="none";
    get_new_ticket();
}