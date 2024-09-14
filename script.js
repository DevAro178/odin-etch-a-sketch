let gridCount=16
let sketchBoardWidth=650
let container=document.querySelector('div.container')
let gridSizeBtn=document.querySelector('div.title div.btn')
let itemDimensions=sketchBoardWidth/gridCount
let clicked=false

gridSizeBtn.addEventListener('click',e=>{
    let newGridSize=parseInt(prompt("Enter grid size between 1-100"))
    if(newGridSize>0 && newGridSize<=100){
        gridCount=newGridSize
        itemDimensions=sketchBoardWidth/gridCount
        createSketchBoard()
    }
    else
        alert("You entered invalid value")
})

container.style.maxWidth=sketchBoardWidth+'px'
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

let sketch=(element)=>{
    element.classList.add('active')
}

let createSketchBoard=()=>{
    container.innerHTML=''

    for(let i=0;i<gridCount;i++){
        createRow()
    }

    let items=document.querySelectorAll("div.item")
    items.forEach(item=>{
        item.addEventListener('mouseenter',e=>{
            if(clicked)
                sketch(e.target)
        })
    })
}


createSketchBoard()

