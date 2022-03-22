
let userinput1=document.getElementById("text1");
let userinput2=document.getElementById("text2");
 let finalresult=document.getElementById("finalres");
 
function operation ( operate){

  finalresult.innerHTML=calculate(userinput1.value,userinput2.value,operate)
}

function calculate( val1,val2,operate){
  if(typeof(val1)!=='number' || typeof(val2)!=='number'){
    val1=parseInt(val1);
    val2=parseInt(val2);}
  if(operate=== '+'){
    return val1+val2;
  }else if(operate==='*') {
    return val1*val2;
  }else if(operate==='-'){
    return val1-val2;
  } else{
    return val1/val2;
  }
}

