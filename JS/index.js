//Author: Joshua Yee
//Date Started: 10/12/23
//Last Edit: 10/12/23

//the size of the left matrix
const leftMatrixRowSize = document.getElementById("leftMatRowSize");
const leftMatrixColSize = document.getElementById("leftMatColSize");
//the operation (+, -, /, *)
let myOp = document.getElementById("myOp");
//the size of the right matrix
const rightMatrixRowSize = document.getElementById("rightMatRowSize");
const rightMatrixColSize = document.getElementById("rightMatColSize");
//the max size a matrix can be
const maxSize = 10;
//the smallest size a matrix can be
const minSize = 1;

//the left matrix button
let leftButton = document.getElementById("leftButton");

//the right matrix button
let rightButton = document.getElementById("rightButton");

//the compute button
let computeButton = document.getElementById("computeButton");

//the left and right matrices
let leftMatrix = [];
let rightMatrix = [];

//the previous left and right matrices
let prevLeftMatrix = [];
let prevRightMatrix = [];

//creates the left matrix
function UserEntersLeftMatrixSize()
{
    for (let i = 0; i < Number(leftMatrixRowSize.value); i++)
    {
        for (let j = 0; j < Number(leftMatrixColSize.value); j++)
        {
            let currBox = document.createElement("INPUT");
            currBox.setAttribute("type", "number");
            currBox.setAttribute("value", 0);
            currBox.setAttribute("class", "LeftMatVal")
            leftMatrix.push(currBox);
            document.body.appendChild(currBox);
        }
    }

    leftMatrixColSize.disabled = true;
    leftMatrixRowSize.disabled = true;

    leftButton.setAttribute("onclick", "UserChangesLeftMatrixSize()");
    leftButton.innerHTML = "Change Left Size";
}

//creates the right matrix
function UserEntersRightMatrixSize()
{
    for (let i = 0; i < Number(rightMatrixRowSize.value); i++)
    {
        for (let j = 0; j < Number(rightMatrixColSize.value); j++)
        {
            let currBox = document.createElement("INPUT");
            currBox.setAttribute("type", "number");
            currBox.setAttribute("value", 0);
            currBox.setAttribute("class", "RightMatVal")
            rightMatrix.push(currBox);
            document.body.appendChild(currBox);
        }
    }

    rightMatrixColSize.disabled = true;
    rightMatrixRowSize.disabled = true;

    rightButton.setAttribute("onclick", "UserChangesRightMatrixSize()");
    rightButton.innerHTML = "Change Right Size";
}

//changes the left matrix
function UserChangesLeftMatrixSize()
{
    let leftMatList = document.getElementsByClassName("LeftMatVal");
    const listSize = leftMatList.length;
    
    for (let i = 0; i < Number(listSize); i++)
    {
        document.body.removeChild(leftMatList[0]);
        leftMatrix.pop();
    }

    leftMatrixColSize.disabled = false;
    leftMatrixRowSize.disabled = false;

    leftButton.setAttribute("onclick", "UserEntersLeftMatrixSize()");
    leftButton.innerHTML = "Create Left Matrix";
}

//changes the right matrix
function UserChangesRightMatrixSize()
{
    let rightMatList = document.getElementsByClassName("RightMatVal");
    const listSize = rightMatList.length;
    
    for (let i = 0; i < Number(listSize); i++)
    {
        document.body.removeChild(rightMatList[0]);
        rightMatrix.pop();
    }

    rightMatrixColSize.disabled = false
    rightMatrixRowSize.disabled = false;

    rightButton.setAttribute("onclick", "UserEntersRightMatrixSize()");
    rightButton.innerHTML = "Create Right Matrix";
}

function UserComputesMatrix()
{
    for (let i = 0; i < Number(rightMatrix.length); i++)
    {
        prevRightMatrix.push(rightMatrix[i]);
    }

    for (let i = 0; i < Number(leftMatrix.length); i++)
    {
        prevLeftMatrix.push(leftMatrix[i]);
    }

    if (myOp.innerHTML == "+")
    {
        if (Number(rightMatrix.length) == Number(leftMatrix.length))
        {
            for (let i = 0; i < Number(rightMatrix.length); i++)
            {
                leftMatrix[i] += rightMatrix[i];
            }

            while (Number(rightMatrix.length) > 0)
            {
                rightMatrix.pop();
            }
        }
    }
    else if (myOp.innerHTML == "-")
    {
        if (Number(rightMatrix.length) == Number(leftMatrix.length))
        {
            for (let i = 0; i < Number(rightMatrix.length); i++)
            {
                leftMatrix[i] -= rightMatrix[i];
            }

            while (Number(rightMatrix.length) > 0)
            {
                rightMatrix.pop();
            }
        }
    }
    else if (myOp.innerHTML == "/")
    {

    }
    else if (myOp.innerHTML == "*")
    {
        if (leftMatrixColSize == rightMatrixRowSize)
        {
            for (let i = 0; i < (leftMatrixRowSize * rightMatrixColSize); i++)
            {
                let answerMatrix = [];
                let answerMatrixRowSize = leftMatrixRowSize;
                let answerMatrixColSize = rightMatrixColSize;
                let currRow = [];
                let currCol = [];
                let currItem = 0;
                for (let j = (i * leftMatrixColSize); j < leftMatrixRowSize; j++)
                {
                    currRow.push(leftMatrix[j]);
                }

                for (let j = (i * rightMatrixRowSize); j < rightMatrixColSize; j += rightMatrixRowSize)
                {
                    currCol.push(rightMatrix[j]);
                }

                
            }
            
        }
    }
    else
    {
        
    }
}

//test code
/*
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
*/