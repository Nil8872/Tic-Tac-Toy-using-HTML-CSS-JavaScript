let oddEven = true; 
let allButtons = document.querySelectorAll(".btn");
let winner = document.getElementById("win");
let chk1 = document.getElementById("chk1");
let chk2 = document.getElementById("chk2");
chk1.classList.add("smallBox");
let count = 0;


let win = false;

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function checkBox(){
    return false;
}
function changeButtonValue(val) {
    if (!win) {

        if (oddEven) {
            if (!(arr[val] === "X" || arr[val] === "O")) {
                arr[val] = "X";
                allButtons[val].innerText = "X";
                chk2.classList.add("smallBox");
                chk1.classList.remove("smallBox");
                oddEven = false;
                count++;
                checkWin(arr);
            }

        } else {

            if (!(arr[val] === "X" || arr[val] === "O")) {
                arr[val] = "O";
                allButtons[val].innerText = "O";
                chk2.classList.remove("smallBox");
                chk1.classList.add("smallBox");
                oddEven = true;
                checkWin(arr);
                count++;
            }
        }
    }


}

const checkWin = (arr) => {

    if (arr[0] == arr[1] && arr[1] == arr[2]) {
        arr[0] == "X" ? winner.innerText = "Player 1 is Winned" : winner.innerText = "Player 2 is Winned";
        win = true;

    }
    else if (arr[3] == arr[4] && arr[4] == arr[5]) {
        arr[0] == "X" ? winner.innerText = "Player 1 is Winned" : winner.innerText = "Player 2 is Winned";
        win = true;
    }
    else if (arr[6] == arr[7] && arr[7] == arr[8]) {
        arr[6] == "X" ? winner.innerText = "Player 1 is Winned" : winner.innerText = "Player 2 is Winned";
        win = true;
    }
    else if (arr[0] == arr[3] && arr[3] == arr[6]) {
        arr[0] == "X" ? winner.innerText = "Player 1 is Winned" : winner.innerText = "Player 2 is Winned";
        win = true;
    }
    else if (arr[1] == arr[4] && arr[4] == arr[7]) {
        arr[1] == "X" ? winner.innerText = "Player 1 is Winned" : winner.innerText = "Player 2 is Winned";
        win = true;
    }
    else if (arr[2] == arr[5] && arr[5] == arr[8]) {
        arr[2] == "X" ? winner.innerText = "Player 1 is Winned" : winner.innerText = "Player 2 is Winned";
        win = true;
    }
    else if (arr[0] == arr[4] && arr[4] == arr[8]) {
        arr[0] == "X" ? winner.innerText = "Player 1 is Winned" : winner.innerText = "Player 2 is Winned";
        win = true;
    }
    else if (arr[2] == arr[4] && arr[4] == arr[6]) {
        arr[2] == "X" ? winner.innerText = "Player 1 is Winned" : winner.innerText = "Player 2 is Winned";
        win = true;
    }
    else {
        if(count == 9){
            winner.innerText = "Tie";
        }
    }


}



function resetGame(){
    win = false;
    oddEven = true;
    chk2.classList.remove("smallBox");
    chk1.classList.add("smallBox");
    for (let i = 0; i < arr.length; i++) {
        allButtons[i].innerHTML = "";
        arr[i] = i;
        winner.innerHTML = "";
    }
}