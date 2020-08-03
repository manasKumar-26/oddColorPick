var grid=document.getElementById('grid');
let size=4;
let score=0;
const getRandomColors = function(){
    var ratio = 0.618033988749895;
    
    var hue = (Math.random() + ratio) % 1;
    var saturation = Math.round(Math.random() * 100) % 85;
    var lightness = Math.round(Math.random() * 100) % 85;

    var color = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + lightness + '%)';
    var oddColor = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + (lightness + 5) + '%)';

    return {
        color,
        oddColor
    }
}
function generateGrid(){
    let color=getRandomColors();
    let rowin=Math.floor(Math.random()*size);
    let colin=Math.floor(Math.random()*size);
    for(let i=0;i<size;i++){
        var gridrow=document.createElement('div');
        gridrow.classList.add('row');
        for(let j=0;j<size;j++){
            let gridelem=document.createElement('span');
            data=gridelem.dataset;
            data.row=i;
            data.col=j;
            gridelem.classList.add('dim');
            gridelem.classList.add('d');
            if(i===rowin && j===colin){
                gridelem.style.backgroundColor=color.oddColor;
            }
            else{
                gridelem.style.backgroundColor=color.color;
            }
            gridelem.addEventListener('click',()=>{
                let clickedrow=gridelem.getAttribute('data-row');
                let clickedcol=gridelem.getAttribute('data-col');
                if(clickedrow==rowin && clickedcol==colin){
                    size++;
                    score++;
                    document.getElementById('demo').innerText=score;
                    removediv();
                    generateGrid();
                }
                else{
                    size=4;
                    score=0;
                    document.getElementById('demo').innerText=score;
                    grid.className='shake';
                    setTimeout(()=>{
                       grid.classList.remove('shake');
                       removediv();
                        generateGrid();
                    },1000);

                }


            });
            gridrow.appendChild(gridelem);
        }
        grid.appendChild(gridrow);
    }
}
function removediv(){
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
}
generateGrid();


