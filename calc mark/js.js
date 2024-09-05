
function calc(){
    var deg=parseFloat(document.getElementById("deg").value);
    var full=parseFloat(document.getElementById("full").value);
    var res=document.getElementById("resulat");

 
if(deg ==0 && full ==0){
    res.innerHTML="none";
}

else if(full ==0){
    res.innerHTML="full mark must be greatet than 0";
}

else if(deg > full){
    res.innerHTML="Full Mark must be greater Than Degree.";

}
else{
    var all=(deg/full)*100;
    res.innerHTML=all + "%"
}


}









