document.querySelector(".control-buttons span").onclick = function () {
    let yourName = prompt("whats your Name")
    
    if( yourName == null || yourName == ""){
        document.querySelector(".info-name span").innerHTML = "unKnown"
    }else{
        document.querySelector(".info-name span").innerHTML = yourName
    }
    document.querySelector(".control-buttons").remove()

}

let duration = 1000;

let blocksContainer = document.querySelector(".body");

let blocks = Array.from(blocksContainer.children)

let orderRange = [...Array(blocks.length).keys()]


shuffle(orderRange)


blocks.forEach((block,index) => {
    block.style.order = orderRange[index]

    block.addEventListener("click", () => {
        flubBlock(block)
    })
})

function flubBlock(selectBlock){

    selectBlock.classList.add("is-flipped")

    let allFlippedBlocks = blocks.filter(FlippedBlock => FlippedBlock.classList.contains("is-flipped"))

    if(allFlippedBlocks.length === 2){

        stopClicking()

        checkMatchBlocks(allFlippedBlocks[0],allFlippedBlocks[1])
    }
}

function stopClicking() {
    blocksContainer.classList.add("no-clicking")

    setTimeout(() => {
        blocksContainer.classList.remove("no-clicking")

    },duration)
}

function checkMatchBlocks(firstBlock,secondBlock){

    let triesElement = document.querySelector(" .info-number span")

    if(firstBlock.dataset.technology === secondBlock.dataset.technology){
        firstBlock.classList.remove("is-flipped")
        secondBlock.classList.remove("is-flipped")

        firstBlock.classList.add("has-match")
        secondBlock.classList.add("has-match")
    }else{
        triesElement.innerHTML = parseInt(triesElement.innerHTML)  + 1 

       setTimeout(() => {
        firstBlock.classList.remove("is-flipped")
        secondBlock.classList.remove("is-flipped")
       },duration)
    }
}

function shuffle(array){

    let current = array.length,
        temp,
        random;
    while(current > 0){

        random = Math.floor(Math.random() * current)

        current--;

        temp = array[current]

        array[current] = array[random]

        array[random]  = temp

    }

    return array
}

