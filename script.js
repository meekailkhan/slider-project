const [mainContainer,slide,nBtn,pBtn] = [document.querySelector(".slider"),document.querySelector("#slides"),document.querySelector(".next"),document.querySelector(".prev")];
let currentTranstlation = 0;
mainContainer.addEventListener("click",function(e){
    if(e.target.tagName !== "A"){
        return
    }
    if(e.target.classList[0]=== "next"){
        if(currentTranstlation > -1800){
            currentTranstlation -= 600;
            slide.style.transform = `translate(${currentTranstlation}px)`

        }
    }
    if(e.target.classList[0]=== "prev"){
        if(currentTranstlation < 0){
            currentTranstlation += 600;
            slide.style.transform = `translate(${currentTranstlation}px)`
        }
    }
    // e.target.classList[0] === "next" ?  slide.style.transform += "translate(-600px)" : null;
    // e.target.classList[0] === "prev" ? slide.style.transform += "translate(600px)" : null;
})
