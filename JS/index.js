//Author: Joshua Yee
//Date Started: 10/12/23
//Last Edit: 10/12/23

//the size of the left matrix
let leftMatrixRowSize = 1, leftMatrixColSize = 1;
//the operation (+, -, /, *)
let myOp = '+';
//the size of the right matrix
let rightMatrixRowSize = 1, rightMatrixColSize = 1;
//the max size a matrix can be
const maxSize = 10;
//the smallest size a matrix can be
const minSize = 1;

//the left and right matrices
let leftMatrix = [];
let rightMatrix = [];

//the answer matrix
let answerMatrix = [];

//TODO: make it so that text boxes are spawned in the left matrix
function UserEntersLeftMatrixSize()
{
    for (let i = 0; i < leftMatrixRowSize; i++)
    {
        for (let j = 0; i < leftMatrixColSize; i++)
        {
            console.log(i);
            console.log(j);
        }
    }
}

//TODO: make it so that text boxes are spawned in the right matrix
function UserEntersRightMatrixSize()
{
    for (let i = 0; i < rightMatrixRowSize; i++)
    {
        for (let j = 0; i < rightMatrixColSize; i++)
        {
            console.log(i);
            console.log(j);
        }
    }
}

const leftNum = document.getElementById("leftNum");
const myOperation = document.getElementById("myOp");
const rightNum = document.getElementById("rightNum");
let myOut = document.getElementById("myOut");

function add()
{
    let myAnswer = 0;

    if (myOperation.value == "+")
    {
        myAnswer = Number(rightNum.value) + Number(leftNum.value);
    }
    else if (myOperation.value == "-")
    {
        myAnswer = Number(rightNum.value) - Number(leftNum.value);
    }
    else if (myOperation.value == "/")
    {
        myAnswer = Number(rightNum.value) / Number(leftNum.value);
    }
    else if (myOperation.value == "*")
    {
        myAnswer = Number(rightNum.value) * Number(leftNum.value);
    }
    else
    {
        myAnswer = "ERROR";
    }
    myOut.innerHTML = String(myAnswer);
}
