
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const prog = document.getElementById('prog');
const circles = document.querySelectorAll('.circle');


let activeCircle = 1

next.addEventListener('click', ()=>{
    activeCircle ++
    

if(activeCircle > circles.length){
    activeCircle = circles.length
}

update()

})



prev.addEventListener('click', ()=>{
    activeCircle --
    

if(activeCircle < 1){
    activeCircle = 1
}


update()

})



function update(){

    circles.forEach((circle, idx)=>{
    
        if(idx < activeCircle){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }

    const active = document.querySelectorAll('.active')

    progress.style.width= ((active.length -1)/(circles.length-1)) *100 + "%"

    if(activeCircle === 1){
        prev.disabled=true
    }else{
        
        if(activeCircle === circles.length)
        next.disabled = true

    else{
            prev.disabled=false
            next.disabled=false
        }


}})





}