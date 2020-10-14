setInterval(OraKiir,1);

function OraKiir()
{
    var ido=new Date();
    var ora=ido.getHours();
    if (ora<10)
        ora="0"+ora;
    var perc=ido.getMinutes();
    if (perc<10)
            perc="0"+perc;
    var mp=ido.getSeconds();
    if (mp%2==0)
    {
        
    }
    else
    {
              
    }
    var ezrdemp=ido.getMilliseconds();
    var uj=ora+":"+perc+":"+mp+"."+ezrdemp;
    document.getElementById("ora").innerHTML=uj;
}