const boxElement = document.querySelectorAll(".box");
var wincombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
var xcount = [];
var ocount = [];
var click = 0;
var wonthegame = 0;
const message = document.getElementById('message');
const restart = document.getElementById('button');
const gameresult = document.getElementById('result');



boxElement.forEach(box => {
    box.onclick = handleClick;
})


function handleClick(e){
    const i=e.target.getAttribute('id');
    // console.log(e.target.getAttribute('id'));
    const text = document.createElement('p');
    text.setAttribute('id','text');
    boxElement[i-1].appendChild(text);
    // console.log(boxElement(i-1))

    if(click%2==0){
        xcount.push(parseInt(i-1));
        console.log(xcount)
        text.innerHTML = 'X';
        text.style.color = '#FAB201';
        Result(wincombination,xcount,"X");
    } 
    else{
        ocount.push(parseInt(i-1));
        console.log(ocount)
        text.innerHTML = 'O';
        text.style.color = '#FAB201';
        Result(wincombination,ocount,"O");
    }
    click++;
    if(click==9 && wonthegame==0){
        gameresult.style.visibility='visible';
        message.innerHTML = "'It's a tie";
    }
}

function Result(wincombination,attempt,players ){
    let flag = 0;
    let checker = [];
    for (var i =0; i<wincombination.length;i++){
        console.log(wincombination[i]);
        if (Array.isArray(wincombination[i])){
            Result(wincombination[i],attempt,players);
        }else{
            if(attempt.includes(wincombination[i])){
                console.log("done")
                checker.push(true);
                flag++;
            }else{
                checker.push(false);
            }
        }
    }
    if (checker.every(check => check === true) && flag>2){
        gameresult.style.visibility = "visible";
        message.innerHTML= "'"+ players +"'"+"Won the game!";
        wonthegame=1;
    }
}

restart.onclick = () =>{
    history.go(0);
}