let scrollContainer=document.querySelector(".gallery");
let backBtn=document.getElementById("backBtn")
let nextBtn=document.getElementById("nextBtn")

backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft-=900;
});

nextBtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft+=900;
    scrollContainer.style.scrollBehavior="smooth";
});