let gridCount=16
let sketchBoardWidth=650
let container=document.querySelector('div.container')
container.style.maxWidth=sketchBoardWidth+'px'
let itemDimensions=sketchBoardWidth/gridCount
let clicked=false


let createElementWithClassName=(type,...className)=>{
    let element=document.createElement(type)
    className.forEach(e=>{
        element.classList.add(e)
    })
    return element
}

let createRow=()=>{
    for(let i=0;i<gridCount;i++){
        let item=createElementWithClassName('div','item')
        item.style.height=itemDimensions+'px'
        item.style.width=itemDimensions+'px'
        container.append(item)
    }
}

let createSketchBoard=()=>{
    for(let i=0;i<gridCount;i++){
        createRow()
    }
}

let sketch=(element)=>{
    element.classList.add('active')
}

createSketchBoard()

let items=document.querySelectorAll("div.item")

container.addEventListener('mousedown',e=>{
    clicked=true
    sketch(e.target)
})
container.addEventListener('mouseup',e=>{
    clicked=false
})
container.addEventListener('drag',e=>{
    clicked=false
})
items.forEach(item=>{
    item.addEventListener('mouseenter',e=>{
        if(clicked)
            sketch(e.target)
    })
})