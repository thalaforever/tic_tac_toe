let  boxess = document.querySelectorAll(".boxes");
let btn = document.querySelector("#rest");
let win = document.querySelector(".para");
let Newbtn = document.querySelector("#new");
let turnO = true ;
const arr= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxess.forEach((box) => {
    box.addEventListener("click" , () => {
    console.log("clicked button");
    if(turnO)
    {
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
}) 
});
const checkWinner = () => 
{
    for(let patterns of arr)
    {
        let pos1=boxess[patterns[0]].innerText;
        let pos2=boxess[patterns[1]].innerText;
        let pos3=boxess[patterns[2]].innerText;
       
        if(pos1 != "" && pos2 != "" &&  pos3 != "")
        {
            if (pos1 === pos2 && pos2 === pos3)
            {
                console.log("winner",pos1);
                showWinner(pos1);
                disableBoxes();
            }
        }
    }
};
const disableBoxes = () => {
    boxess.forEach((box) => {
        box.disabled = true;
    });
};
const enableBoxes = () => {
    boxess.forEach((box) => {
        box.disabled = false;
        box.innerText="";
    });
};
const showWinner = (pos1) => {
    win.innerText = ` Congratulations ${pos1} ! ` ;
    win.style.display = "block"; 
    Newbtn.style.display = "block"; 
};
const resetBtn = () => {
    turnO=true;
    enableBoxes();
    win.style.display = "none"; 
    Newbtn.style.display = "none"; 
};
btn.addEventListener("click", resetBtn);
Newbtn.addEventListener("click", resetBtn);
