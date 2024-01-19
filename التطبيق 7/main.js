let key = document.querySelector(".keybord");
let aAndz = "abcdefghijklmnopqrstuvwxyz";
let leter = Array.from(aAndz)




leter.forEach((ele) => {
    let span = document.createElement("span")
     span.innerHTML = ele
     span.classList.add("letter-box")
     key.appendChild(span)
    })




const words = {
    programming: ["php","javascript","go","scala","fortran","r","mysql","python"],
    movies:["prestige","inception","parasite","interstellar","whiplash","memento","coco","up"],
    people:["albert Einstein","hitchcock","alexander","cleopatra","mahatma Ghandi"],
    countries:["syria","palestine","yemen","Egypt","Bahrain","qatar"]
}



let propWords = Object.keys(words)
let numwords = Math.floor(Math.random() * propWords.length)
let propvalue = propWords[numwords]
let wordvalu = words[propvalue]
let propwords = Math.floor(Math.random() * wordvalu.length)
let fanal = wordvalu[propwords]


document.querySelector(".word").innerHTML = "word from" + " " + propvalue 



let arr = Array.from(fanal)
arr.forEach((el) => {
    let arrelee = el
    let foter = document.querySelector(".carcter")
    let fotspan = document.createElement("span")
    let fotspan2 = document.createElement("span")
    let elespan = document.createTextNode("")
    
    
    fotspan2.appendChild(elespan)
    fotspan.appendChild(fotspan2)
    foter.appendChild(fotspan)


})
let gesspan = document.querySelectorAll(".carcter  span span")
console.log(gesspan)

let man =   document.querySelector(".man")
let rwng = 0
document.addEventListener("click",(e) =>{
    let thestatus = false;
    if (e.target.className === "letter-box"){
        e.target.classList.add("clicked")


        let clicktargt = e.target.innerHTML.toLowerCase();


         arr.forEach((el,inx) => {
       
            if (clicktargt == el.toLowerCase()){

                thestatus = true
             let arrges =   Array.from(gesspan)
             arrges.forEach((ew,spaninx) => {
                if (inx == spaninx){
                    ew.innerHTML = clicktargt
                }
             })
            }
            })
            let letr = document.querySelector(".keybord")
            if(thestatus !== true){
                rwng++
                man.classList.add(`none${rwng}`)

                if (rwng === 6){
                    letr.classList.add("stop")
                    endGame()
                }          
            }
    }
 })

 function endGame(){
    let div = document.createElement("div")
    let divText = document.createTextNode(`GAME OVER, The Word Is ${fanal}`)

    div.appendChild(divText)
    div.className ="pop"
    document.body.appendChild(div)
 }