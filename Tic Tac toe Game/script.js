let boxes=document.querySelectorAll('.box');
console.log(boxes);
let boxesArray=Array.from(boxes)
let winnerArray=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let boxValue='O';
boxes.forEach((e)=>{
e.addEventListener('click',()=>{
    document.getElementById('winner').innerHTML==" ";
    //Change the va;ue on the alernate click..
        if(e.innerHTML==""){
            if(boxValue=='X'){
                e.innerHTML=boxValue;
                boxValue='O';
                document.querySelector('#turn span').innerHTML=boxValue;
                e.classList.remove('colorPurple');
            } 
            else {
                e.innerHTML=boxValue;
                boxValue='X'
                document.querySelector('#turn span').innerHTML=boxValue;
                e.classList.add('colorPurple');
            }
        }
        //Winner select on the base of winning condition...
        winnerArray.forEach((e)=>{
            let N=boxes[e[0]].innerHTML + boxes[e[1]].innerHTML + boxes[e[2]].innerHTML;
            if(N==='OOO'|| N==='XXX'){
                document.getElementById('winner').innerHTML=`Winner Player is <span> ${N[0]} </span>`
                setTimeout(() => {
                    alert(`${N[0]} is winner | Click 'OK' to Enjoy Game`)
                    boxes.forEach((e)=>{
                        e.innerHTML="";
                    });
                }, 1000);
                
                    
                
            }  
        })
        //If no one is win
        let full=true;
        boxes.forEach(e => {
            if(e.innerHTML==""){
                full=false;
            }
        });
        if(full){
            console.log("Boxes is Full")
            document.getElementById('winner').innerHTML=`<span> Tie the Game  </span>`
            setTimeout(() => {
                alert(`All field are full , Play Again`);
                boxes.forEach((e)=>{
                    e.innerHTML="";
                });
            }, 1000);
            
        }
    
   });
});



