
function deleteGrid(container){
    container.textContent='';
}

function drawGrid(gridSize){
    const container=document.querySelector('.container');
    container.style.gridTemplateRows=`repeat(${gridSize},50px)`;
    container.style.gridTemplateColumns=`repeat(${gridSize},50px)`;
    deleteGrid(container);
    let totalGrid=gridSize*gridSize;
    for(i=0;i<totalGrid;i++){
        const div=document.createElement('div');
        container.appendChild(div);
        div.addEventListener('mouseover', function(e) {
            e.target.style.background='blue';
        });
    }
}

const gridButton=document.querySelector('#grid-size');
gridButton.addEventListener('click', ()=> {
    let gridSize=prompt("Please enter the size of the grid (100 maximum)","");
    if(gridSize>100){
        gridSize=100;
    }
    drawGrid(gridSize);
});

drawGrid(16);

