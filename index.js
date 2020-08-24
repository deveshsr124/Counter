let count=0;

//slecting value and buttons

const value=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){

     const styles=e.currentTarget.classList;
     if(styles.contains("decrease")){
         count--;
         document.querySelector("#value").style.color="red";
     }

     else if (styles.contains("reset")){
         count=0;
         document.querySelector("#value").style.color="black";

     }

     else{
         count++;
         document.querySelector("#value").style.color="green";

     }

        value.textContent=count;
});
});