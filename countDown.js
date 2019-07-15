function countDown(){
    var numberOfDays= document.getElementById('noOfdays').value;
    var numberOfMins=document.getElementById('noOfmins').value;
    var now=new Date();
    var eventDate = new Date(now.getFullYear(), numberOfDays, numberOfMins);

    var currentTime=now.getTime();
    var eventTime=eventDate.getTime();
    
    var remaningTime=eventTime-currentTime;

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
    setTimeout(countDown,1000);
}

