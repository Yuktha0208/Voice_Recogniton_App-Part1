var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start(){
    document.getElementById("text_box").innerHTML="";
    Recognition.start();
}

Recognition.onresult=function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
        document.getElementById("text_box").innerHTML=Content;
        console.log(Content);
}