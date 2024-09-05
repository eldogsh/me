
function age(){

  //get user input
  let day=parseInt(document.getElementById("day").value);
  let month=parseInt(document.getElementById("month").value)-1;
  let year=parseInt(document.getElementById("year").value);


   // Create date objects

  let birthdate=new Date(year,month,day);
  let today=new Date();
  
  
  // Calculate age

  let getyear=today.getFullYear() -birthdate.getFullYear(); //السنه;
  let getmonth= today.getMonth() -birthdate.getMonth(); // الشهر;
  let getday=today.getDay() -birthdate.getDay(); //اليوم ;

  if (getmonth < 0 || (getmonth === 0 && getday < 0)) {
    getyear--;
    getmonth += (getmonth < 0) ? 12 : 0;
  }

  if(getday<0){ 
    let lastmonth=new Date(today.getFullYear(),today.getMonth(),0);
    getday +=lastmonth.getDate();
    getmonth --;

  }
    let result=document.getElementById("result");

    
    result.innerHTML=`your age is ${getyear} and your motnth is ${getmonth} and your day is${day}`

}