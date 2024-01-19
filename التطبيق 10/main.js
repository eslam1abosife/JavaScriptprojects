let ALLli = document.querySelectorAll("ul li")
let images = Array.from(document.images) 


ALLli.forEach((li) => {
    li.addEventListener("click",remove)
    li.addEventListener("click",imag)
})

function remove(){
    ALLli.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active")
    })
}

function imag(){
    images.forEach((img) => {
        img.style.display = "none"
    })
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block"
    })
}