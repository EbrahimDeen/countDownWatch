function valueWork(){
    var numberOfDays=numberOfHours=numberOfMin=0;
    var choice=document.getElementById('optionList').value;
    var inputSection=document.getElementById('inputSection');
    
    if(choice=='0'){
        inputSection.disabled=true;
        inputSection.placeholder='First Select Field';
    }
    if(choice=='1'){
        //document.getElementById('inputSection').innerHTML="";
        inputSection.disabled=false;
        inputSection.placeholder='Enter Number of Days';
        // numberOfDays=document.getElementById('inputSection').value;
        
    }
    numberOfDays=document.getElementById('inputSection').value;
    console.log(numberOfDays)   
    if(choice=='2'){
        document.getElementById('inputSection').innerHTML="";
        inputSection.disabled=false;
        inputSection.placeholder='Enter Number of Hours';
        
    }
    numberOfHours=document.getElementById('inputSection').value;
    if(choice=='3'){
        document.getElementById('inputSection').innerHTML="";
        inputSection.disabled=false;
        inputSection.placeholder='Enter Number of Mins';
    }
    numberOfMin=document.getElementById('inputSection').value;
    var now=new Date();
    var eventDate = new Date(now.getFullYear(),numberOfDays, numberOfHours,numberOfMin);

    var currentTime=now.getTime();
    var eventTime=eventDate.getTime();
    
    var remaningTime=eventTime-currentTime;
    remaningTime=Math.abs(remaningTime);
    var s =Math.floor(remaningTime/1000);
    var m =Math.floor(s/60);
    var h =Math.floor(m/60);
    var d =Math.floor(h/24);

    h %=24;
    m %=60;
    s %=60;

    h = (h<10) ? "0" + h : h;
    m = (h<10) ? "0" + m : m;
    s = (h<10) ? "0" + s : s;

    document.getElementById("day").innerHTML=d;
    document.getElementById("hour").innerHTML=h;
    document.getElementById("minute").innerHTML=m;
    document.getElementById("second").innerHTML=s;
    
    setTimeout(valueWork,1000);
  
}
// function countDown(){
//     // var numberOfDays= document.getElementById('noOfdays').value;
//     // var numberOfMins=document.getElementById('noOfmins').value;
    
// }


