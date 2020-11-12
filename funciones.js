var overlay= document.getElementById("overlay")
var map = document.getElementById("earth_div")
var description = document.getElementById("description")
var arrow= document.getElementById("arrow")

overlay.addEventListener("click", ()=>{
    description.scrollIntoView({behavior:'smooth'})
})

arrow.addEventListener("click",()=>{
    map.scrollIntoView({behavior:'smooth'})
})
