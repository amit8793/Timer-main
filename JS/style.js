var time=document.getElementsByClassName("main")
 
 var timings=50;
 var i=0;
     var myInterval = setInterval(Timeout, 1000);
    function Timeout(){
      if((timings*60-i)%60>=10){
        time[0].innerHTML=parseInt(`${(timings*60-i)/60}`)+":"+`${(timings*60-i)%60}`;
      }
      else{
        time[0].innerHTML=parseInt(`${(timings*60-i)/60}`)+":0"+`${(timings*60-i)%60}`;
      }
      
     

i++;
    }