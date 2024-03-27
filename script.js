const [mainContainer,slide,nBtn,pBtn] = [document.querySelector(".slider"),document.querySelector("#slides"),document.querySelector(".next"),document.querySelector(".prev")];
let currentTranstlation = 0;
mainContainer.addEventListener("click",function(e){
    if(e.target.tagName !== "A"){
        return
    }

    const isNext = e.target.classList.contains("next");
    if (e.target.tagName !== "A" || (isNext && currentTranstlation <= -1800) || (!isNext && currentTranstlation >= 0)) return;
    
    currentTranstlation += isNext ? -600 : 600;
    slide.style.transform = `translateX(${currentTranstlation}px)`;
    // if(e.target.classList[0]=== "next"){
    //     if(currentTranstlation > -1800){
    //         currentTranstlation -= 600;
    //         slide.style.transform = `translate(${currentTranstlation}px)`

    //     }
    // }
    // if(e.target.classList[0]=== "prev"){
    //     if(currentTranstlation < 0){
    //         currentTranstlation += 600;
    //         slide.style.transform = `translate(${currentTranstlation}px)`
    //     }
    // }
})
