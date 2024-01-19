let image = document.querySelectorAll(".image img")
let imageArr = Array.from(image)
let imageLength = imageArr.length
let butNext = document.querySelector(".Next")
let butPrevious = document.querySelector(".previous")
let slidenum = document.querySelector(".slide-num")
let Spans = document.querySelectorAll(".spans span")
let ArraySpan = Array.from(Spans)

let crentindex = 1;



butNext.onclick = clickNext;
butPrevious.onclick = clickPrevious;


slidenum.innerHTML = `slide ${crentindex} of ${imageLength}`;



for (var i = 0 ; i < ArraySpan.length; i++){

    
    ArraySpan[i].onclick = function () {
        crentindex = parseInt(this.getAttribute("data-index"))
        ArraySpan[crentindex - 1].classList.add("active")

        clback()
      
    }

}
 
clback()


function clickNext(){

    if (butNext.classList.contains("stop")){
        return false
    }else{
        crentindex++
 
        clback()
    }


 }



function clickPrevious(){
        if (butPrevious.classList.contains("stop")){
            return false
        }else{
        crentindex--;
       
      
        clback()
    }
}
function clback(){

    slidenum.innerHTML = `slide ${crentindex} of ${imageLength}`

    removeAllActive()
   
    imageArr[crentindex - 1].classList.add("active")
    ArraySpan[crentindex - 1].classList.add("active")




    if(crentindex == imageLength){
        butNext.classList.add("stop")
    }
     else {
        butNext.classList.remove("stop")
    }
    
    if(crentindex == 1){
        butPrevious.classList.add("stop")
    }
     else {
        butPrevious.classList.remove("stop")
    }
    

}

function removeAllActive(){
    imageArr.forEach( (img) => {
        img.classList.remove("active")
    })

    ArraySpan.forEach((span) => {
        span.classList.remove("active")
    })
}



