let enterBtn = document.querySelector(".enter");
const video1 = document.querySelector(".video1");
const video2 = document.querySelector(".video2");
const video3 = document.querySelector(".video3");
const video4 = document.querySelector(".video4");
const entBtn = document.querySelector(".entered-age")

enterBtn.addEventListener("click",() => {
    const age = document.querySelector(".entered-age").value;
    

        if(age === ""){
            alert("enter your age")
        }else if(age <= 18){
            video1.style.display = "block";
        }else if(age > 18 && age <= 25){
            video2.style.display = "block";
        }else if(age >25 && age < 100){
            video3.style.display = "block";
        }else{
            video4.style.display = "block";
        }
   
})

entBtn.addEventListener("keydown", (e) => {
    if(e.key === "Enter" ){
        const age = document.querySelector(".entered-age").value;
    

        if(age === ""){
            alert("enter your age")
        }else if(age <= 18){
            video1.style.display = "block";
        }else if(age > 18 && age <= 30){
            video2.style.display = "block";
        }else if(age >30 && age < 100){
            video3.style.display = "block";
        }else{
            video4.style.display = "block";
        }
    }
})