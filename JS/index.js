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

//check if the matrices are ready to go
let leftMatReady = false;
let rightMatReady = false;

//creates the left matrix
function UserEntersLeftMatrixSize()
{
    for (let i = 0; i < Number(leftMatrixRowSize.value); i++)
    {
        for (let j = 0; j < Number(leftMatrixColSize.value); j++)
        {
            let currBox = document.createElement("INPUT");
            currBox.setAttribute("type", "number");
            currBox.setAttribute("placeholder", 0);
            currBox.setAttribute("class", "LeftMatVal")
            document.body.appendChild(currBox);
        }
    }

    leftMatrixColSize.disabled = true;
    leftMatrixRowSize.disabled = true;

    leftButton.setAttribute("onclick", "UserChangesLeftMatrixSize()");
    leftButton.innerHTML = "Change Left Size";

    leftMatReady = true;

    if (leftMatReady && rightMatReady)
    {
        computeButton.disabled = false;
    }
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
            currBox.setAttribute("placeholder", 0);
            currBox.setAttribute("class", "RightMatVal")
            document.body.appendChild(currBox);
        }
    }

    rightMatrixColSize.disabled = true;
    rightMatrixRowSize.disabled = true;

    rightButton.setAttribute("onclick", "UserChangesRightMatrixSize()");
    rightButton.innerHTML = "Change Right Size";

    rightMatReady = true;

    if (rightMatReady && leftMatReady)
    {
        computeButton.disabled = false;
    }
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

    leftMatReady = false;

    computeButton.disabled = true;
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

    rightMatrixColSize.disabled = false;
    rightMatrixRowSize.disabled = false;

    rightButton.setAttribute("onclick", "UserEntersRightMatrixSize()");
    rightButton.innerHTML = "Create Right Matrix";

    rightMatReady = false;

    computeButton.disabled = true;
}

//computes the matrices
function UserComputesMatrix()
{
    let currLeftMat = document.getElementsByClassName("LeftMatVal");

    if (Number(leftMatrix.length) <= 0)
    {
        for (let i = 0; i < Number(currLeftMat.length); i++)
        {
            leftMatrix.push(Number(currLeftMat[i].value));
        }
    }
    else
    {
        for (let i = 0; i < Number(currLeftMat.length); i++)
        {
            leftMatrix[i] = Number(currLeftMat[i].value);
        }
    }

    let currRightMat = document.getElementsByClassName("RightMatVal");
    
    if (Number(rightMatrix.length) <= 0)
    {
        for (let i = 0; i < Number(currRightMat.length); i++)
        {
            rightMatrix.push(Number(currRightMat[i].value));
        }
    }
    else
    {
        for (let i = 0; i < Number(currRightMat.length); i++)
        {
            rightMatrix[i] = Number(currRightMat[i].value);
        }
    }

    while (Number(prevRightMatrix.length) > 0)
    {
        prevRightMatrix.pop();
    }

    for (let i = 0; i < Number(rightMatrix.length); i++)
    {
        prevRightMatrix.push(rightMatrix[i]);
    }


    while (Number(prevLeftMatrix.length) > 0)
    {
        prevLeftMatrix.pop();
    }

    for (let i = 0; i < Number(leftMatrix.length); i++)
    {
        prevLeftMatrix.push(leftMatrix[i]);
    }

    if (myOp.value == "+")
    {
        if ((Number(rightMatrixRowSize.value) == Number(leftMatrixRowSize.value)) && (Number(rightMatrixColSize.value) == Number(leftMatrixColSize.value)))
        {
            for (let i = 0; i < Number(leftMatrix.length); i++)
            {
                leftMatrix[i] += rightMatrix[i];
            }

            for (let i = 0; i < Number(currLeftMat.length); i++)
            {
                let currBox = currLeftMat[i];
                currBox.value = leftMatrix[i];
                currBox.disabled = true;
            }

            leftButton.disabled = true;

            UserChangesRightMatrixSize();
        }
        else
        {

        }
    }
    else if (myOp.value == "-")
    {
        if ((Number(rightMatrixRowSize.value) == Number(leftMatrixRowSize.value)) && (Number(rightMatrixColSize.value) == Number(leftMatrixColSize.value)))
        {
            for (let i = 0; i < Number(leftMatrix.length); i++)
            {
                leftMatrix[i] -= rightMatrix[i];
            }

            for (let i = 0; i < Number(currLeftMat.length); i++)
            {
                let currBox = currLeftMat[i];
                currBox.value = leftMatrix[i];
                currBox.disabled = true;
            }

            leftButton.disabled = true;

            UserChangesRightMatrixSize();
        }
    }
    else if (myOp.value == "/")
    {

    }
    else if (myOp.value == "*")
    {
        if (Number(leftMatrixColSize.value) == Number(rightMatrixRowSize.value))
        {
            let answerMatrix = [];
            let answerMatrixRowSize = Number(leftMatrixRowSize.value);
            let answerMatrixColSize = Number(rightMatrixColSize.value);

            for (let i = 0; i < Number(leftMatrixRowSize.value); i++)
            {   
                let currRow = []
                
                //get current row from the left matrix

                let endPoint = ((i * Number(leftMatrixColSize.value)) + Number(leftMatrixColSize.value))
                for (let r = (i * Number(leftMatrixColSize.value)); r < endPoint; r++)
                {
                    currRow.push(leftMatrix[r]);
                }

                for (let j = 0; j < Number(rightMatrixColSize.value); j++)
                {
                    let currCol = []

                    //get current col from the right matrix
                    for (let c = j; c < Number(rightMatrix.length); c += Number(rightMatrixColSize.value))
                    {                    
                        currCol.push(rightMatrix[c]);
                    }

                    let currAns= 0;

                    for (let a = 0; a < Number(currRow.length); a++)
                    {
                        currAns += currRow[a] * currCol[a];
                    }

                    answerMatrix.push(currAns);

                }
            }

            //removes data from left matrix var
            while (Number(leftMatrix.length) > 0)
            {
                leftMatrix.pop();
            }

            //moves data from answer matrix to the left matrix
            for (let i = 0; i < Number(answerMatrix.length); i++)
            {
                leftMatrix.push(answerMatrix[i])
            }

            //changes row and col sizes to the answer's sizes
            leftMatrixRowSize.value = Number(answerMatrixRowSize);
            leftMatrixColSize.value = Number(answerMatrixColSize);

            //removes textboxes
            while (Number(currLeftMat.length) > 0)
            {
                document.body.removeChild(currLeftMat[0]);
            }

            //adds textboxes
            for (let i = 0; i < Number(answerMatrix.length); i++)
            {
                let currBox = document.createElement("INPUT");
                currBox.setAttribute("type", "number");
                currBox.setAttribute("value", leftMatrix[i]);
                currBox.setAttribute("class", "LeftMatVal")
                currBox.disabled = true;
                document.body.appendChild(currBox);
            }
        }

        leftButton.disabled = true;

        UserChangesRightMatrixSize();
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