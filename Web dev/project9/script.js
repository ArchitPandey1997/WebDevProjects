
const decrementbtn = document.getElementById("decrementbtn");
const incrementbtn =document.getElementById("incrementbtn");
const displayvalue=document.getElementById("displayvalue");
const resetbtn=document.getElementById("resetbtn");


decrementbtn.addEventListener("click",() => {
    const value= Number(displayvalue.innerText);
    if (value>0){
        displayvalue.innerText=value-1;
    }
    else{
        alert("Negative value not allowed");
    }
});

incrementbtn.addEventListener("click",() =>{
    const value= Number(displayvalue.innerText);
    if(value >=10){
        alert("10+ values are not allowed");
    }

    else{
        displayvalue.innerText=value+1;
    }
});

resetbtn.addEventListener("click",() => {
    displayvalue.innerText=0;
})