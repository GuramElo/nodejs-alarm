var nodemailer = require('nodemailer');
const {exec} =require("child_process");
function ghalatia(secs){
exec("start vlc \"C:\\Users\\DELL\\Documents\\gh\\Alarm.mp4\"");
setInterval(()=>{
exec("start vlc \"C:\\Users\\DELL\\Documents\\gh\\Alarm.mp4\"");
},secs*1000);

}


let is_sent=false;
function send(ger){
    
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'momentbeforedie@gmail.com',
    pass: 'GUramiani18'
  }
});

var mailOptions = {
  from: 'momentbeforedie@gmail.com',
  to: ger,
  subject: 'დაიდოოოოოოოოოო!!!!!!!',
  text: 'https://kinoafisha.ge'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}


let fetch=require("node-fetch");

setInterval(()=>{

fetch("https://kinoafisha.ge").then(s=>s.text()).
then(str=>{

    let arr1=new Array(),arr2=new Array();
    for(let i=0;i<str.length-3;i++){
    if(str[i]!="<")continue;
    
    let serte=str.substring(i,i+4);
    if(serte=="<div"){
    arr1.push(["<div",i]);
    continue;
    }
    else if(serte=="</di" && arr1.length!=0){
    arr2.push([(arr1[arr1.length-1][1]),i+3]);
    arr1.pop();
    continue;
    }
    }
    let the_container;
    for(let i=0;i<arr2.length;i++){
    let satu=str.substring((arr2[i])[0],(arr2[i])[1]);
    if(satu.indexOf("movie-body")!=-1){
        the_container=satu;
        break;
    }
}
  
let sakitxavi=Boolean(the_container.indexOf("Doctor Strange in the Multiverse of Madness")!=-1);
console.log(sakitxavi);
if(sakitxavi){
  if(!is_sent){send("g_elizbarashvili@cu.edu.ge");
  send("elizbarashvili.guram18@gmail.com");
  exec("C:\\Users\\DELL\\Desktop\\gh\\1111.lnk");
  ghalatia(120);
}
  is_sent=true;
}
else {console.log("checked");}
//=====================
});


},60000);

