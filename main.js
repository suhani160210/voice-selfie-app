var SpeechRecognition= window.webkitSpeechRecognition;
var speech= new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    speech.start();
}
speech.onresult=function(event){
    console.log(event);
    var content= event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        console.log("take my selfie");
        speak();
        
    }
}
function speak(){
    var synth=window.speechSynthesis;
     speak_data="taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    });
}
camera=document.getElementById("camera");
Webcam.set({
    width:350,
    height:250,
    image_format:'png',
    png_quality:80
});
function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie"src="'+data_uri+'">';
});
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();
}