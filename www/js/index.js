/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var me=-1;
var target=-1;
var content=document.getElementById('content');
function get_message(){
    $.get("http://202.31.147.197:7680/RandomChatting/random_chatting_php/get_new_message.php",{id:me}).done((r)=>{
        alert(r);
    });
}
function get_new_ticket(){
    $.post("http://202.31.147.197:7680/RandomChatting/random_chatting_php/connect_to_server.php",{}).done((r)=>{
        var obj=JSON.parse(r);
        if(r.errmsg=="There have not target Should Waiting"){
            //alert(r+"대기");
            me=obj.me;
            document.getElementById('modal').style.display="block";
        }else{
            //alert(r+"사람찾음");
            me=obj.me;
            target=obj.target;
        }
        alert(me+":"+target);
        setInterval(get_message,1000);
    });
}
function build_message(msg){
    var html='<div class=line>';
    html+='<div class="right-chat bubble">'+msg+'<div class=date>2018/01/29</div></div>';
    html+='</div>';
    return html;
}
function send_message(){
    var msg=document.getElementById('key_input_text').value;
    content.innerHTML=content.innerHTML+build_message(msg);
}
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        document.getElementById('modal').style.display="none";
        get_new_ticket();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        console.log('Received Event: ' + id);
    }
};

app.initialize();