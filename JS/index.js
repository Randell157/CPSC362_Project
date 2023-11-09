//Author: Joshua Yee
//Date Started: 10/12/23
//Last Edit: 10/12/23
//Group: 8

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

let prevRightRowSize;
let prevRightColSize;

let prevLeftRowSize;
let prevLeftColSize;

//the left matrix button
let leftButton = document.getElementById("leftButton");

//the right matrix button
let rightButton = document.getElementById("rightButton");

//the compute button
let computeButton = document.getElementById("computeButton");

//the previous button
let prevButton = document.getElementById("prevButton");

//the next button
let nextButton = document.getElementById("nextButton");

//the left and right matrices
let leftMatrix = [];
let rightMatrix = [];

//the previous left and right matrices
let prevLeftMatrix = [];
let prevRightMatrix = [];

//the next matrix
let nextLeftMatrix = [];

let nextLeftRowSize;
let nextLeftColSize;

//check if the matrices are ready to go
let leftMatReady = false;
let rightMatReady = false;

//the dne label
let dneLabel = document.getElementById("dneLabel");

//creates the left matrix
function UserEntersLeftMatrixSize()
{
    //create textboxes for the left matrix
    if ((Number(leftMatrixColSize.value) > 0 && Number(leftMatrixRowSize.value) > 0) && (Number(leftMatrixColSize.value) < 11 && Number(leftMatrixRowSize.value) < 11))
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
        //user can no longer change the left matrix's sizes
        leftMatrixColSize.disabled = true;
        leftMatrixRowSize.disabled = true;

        //change the left matrix button so that it allows users to change the left matrix's sizes
        leftButton.setAttribute("onclick", "UserChangesLeftMatrixSize()");
        leftButton.innerHTML = "Change Left Size";

        //left matrix is ready for computation
        leftMatReady = true;

        //check if the left and right matrices are ready
        //if so, allow computation
        if (leftMatReady && rightMatReady)
        {
            computeButton.disabled = false;
        }
    }
}

//creates the right matrix
function UserEntersRightMatrixSize()
{
    //creates the textboxes for the right matrix
    if ((Number(rightMatrixColSize.value) > 0 && Number(rightMatrixRowSize.value) > 0) && (Number(rightMatrixColSize.value) < 11 && Number(rightMatrixRowSize.value) < 11))
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

    //user can no longer change the right matrix's sizes
    rightMatrixColSize.disabled = true;
    rightMatrixRowSize.disabled = true;

    //changes the right matrix button so that it would allow the user to go back and change the sizes
    rightButton.setAttribute("onclick", "UserChangesRightMatrixSize()");
    rightButton.innerHTML = "Change Right Size";

    //the right matrix is ready to be computed
    rightMatReady = true;

    //check if the right and left matrices are ready to be computed
    //if so, allow computation
    if (rightMatReady && leftMatReady)
    {
        computeButton.disabled = false;
    }
}

//changes the left matrix
function UserChangesLeftMatrixSize()
{
    //get the textboxes connected to the left matrix
    let leftMatList = document.getElementsByClassName("LeftMatVal");
    //get the amount of left matrix textboxes
    const listSize = leftMatList.length;
    
    //go through the left matrix and remove the textboxes
    //also remove the values in the left matrix variable
    for (let i = 0; i < Number(listSize); i++)
    {
        document.body.removeChild(leftMatList[0]);
        leftMatrix.pop();
    }

    //allow the user to alter the left matrix col and row sizes
    leftMatrixColSize.disabled = false;
    leftMatrixRowSize.disabled = false;

    //change the left matrix button so that it would create the textboxes
    leftButton.setAttribute("onclick", "UserEntersLeftMatrixSize()");
    leftButton.innerHTML = "Create Left Matrix";

    //computation is no longer possible
    leftMatReady = false;

    //makes sure the compute button is turned off
    computeButton.disabled = true;
}

//changes the right matrix
function UserChangesRightMatrixSize()
{
    //get the textboxes connected with the right matrix
    let rightMatList = document.getElementsByClassName("RightMatVal");
    //get the amount of right matrix textboxes
    const listSize = rightMatList.length;
    
    //remove the right matrix's textboxes
    //remove the values within the right matrix variable
    for (let i = 0; i < Number(listSize); i++)
    {
        document.body.removeChild(rightMatList[0]);
        rightMatrix.pop();
    }

    //allow the user to alter the right matrix's col and row sizes
    rightMatrixColSize.disabled = false;
    rightMatrixRowSize.disabled = false;

    //change the right matrix button so that it would create the textboxes
    rightButton.setAttribute("onclick", "UserEntersRightMatrixSize()");
    rightButton.innerHTML = "Create Right Matrix";

    //computation is no longer possible
    rightMatReady = false;

    //makes sure that the compute button is turned off
    computeButton.disabled = true;
}

//computes the matrices
function UserComputesMatrix()
{
    prevButton.disabled = false;

    //get the textboxes connected to the left matrix
    let currLeftMat = document.getElementsByClassName("LeftMatVal");

    //check if there are values in the left matrix variable
    if (Number(leftMatrix.length) <= 0)
    {
        //take the values from the textboxes and put them into the left matrix variable
        for (let i = 0; i < Number(currLeftMat.length); i++)
        {
            leftMatrix.push(Number(currLeftMat[i].value));
        }
    }
    else
    {
        //take the values in the left matrix variable and set them to be equal to the values in the textboxes
        for (let i = 0; i < Number(currLeftMat.length); i++)
        {
            leftMatrix[i] = Number(currLeftMat[i].value);
        }
    }

    prevLeftColSize = Number(leftMatrixColSize.value);
    prevLeftRowSize = Number(leftMatrixRowSize.value);

    //get the textboxes connected to the right matrix
    let currRightMat = document.getElementsByClassName("RightMatVal");
    
    //checks if there are values in the right matrix variable
    if (Number(rightMatrix.length) <= 0)
    {
        //take the values from the textboxes and put them into the right matrix variable
        for (let i = 0; i < Number(currRightMat.length); i++)
        {
            rightMatrix.push(Number(currRightMat[i].value));
        }
    }
    else
    {
        //take the values from the right matrix variable and set them to be equal to the values in the textboxes
        for (let i = 0; i < Number(currRightMat.length); i++)
        {
            rightMatrix[i] = Number(currRightMat[i].value);
        }
    }

    prevRightColSize = Number(rightMatrixColSize.value);
    prevRightRowSize = Number(rightMatrixRowSize.value);

    //check if the previous right matrix has any values, if so remove them
    while (Number(prevRightMatrix.length) > 0)
    {
        prevRightMatrix.pop();
    }

    //save the values from the right matrix into a previous right matrix variable
    for (let i = 0; i < Number(rightMatrix.length); i++)
    {
        prevRightMatrix.push(rightMatrix[i]);
    }

    //check if the previous left matrix has any values, if so remove them
    while (Number(prevLeftMatrix.length) > 0)
    {
        prevLeftMatrix.pop();
    }

    //save the values from the left matrix into a previous left matrix variable
    for (let i = 0; i < Number(leftMatrix.length); i++)
    {
        prevLeftMatrix.push(leftMatrix[i]);
    }

    //check what operation the user wants to use
    if (myOp.value == "+")
    {
        //ADDITION
        AddMatrix(currLeftMat)

        //user can no longer change the sizes of the left button
        leftButton.disabled = true;

        //make a new right matrix
        UserChangesRightMatrixSize();
    }
    else if (myOp.value == "-")
    {

        //SUBTRACTION
        SubtractMatrix(currLeftMat);

        //user can no longer change the sizes of the left matrix
        leftButton.disabled = true;

        //create a new right matrix
        UserChangesRightMatrixSize();
        
    }
    else if (myOp.value == "/")
    {

        //DIVISION
        InverseRightMatrix();
        MultiplyMatrix(currLeftMat);

        //user can not change the left matrix sizes
        leftButton.disabled = true;
        
        //create a new right matrix
        UserChangesRightMatrixSize();
    }
    else if (myOp.value == "*")
    {

        //MULTIPLICATION
        MultiplyMatrix(currLeftMat);
        
        //user can not change the left matrix sizes
        leftButton.disabled = true;
        
        //create a new right matrix
        UserChangesRightMatrixSize();
    }
    else
    {
        DoesNotExist("not an operation");
    }
}

function AddMatrix(currLeftMat)
{
    //check if the sizes of the right and left matrices are the same
    if ((Number(rightMatrixRowSize.value) == Number(leftMatrixRowSize.value)) && (Number(rightMatrixColSize.value) == Number(leftMatrixColSize.value)))
    {   
        //add values from the right matrix and add it to the values in the left matrix
        for (let i = 0; i < Number(leftMatrix.length); i++)
        {
            leftMatrix[i] += rightMatrix[i];
        }

        //change all the values within the left matrix textboxes to reflect the new values
        //user can no longer change the values in the left matrix
        for (let i = 0; i < Number(currLeftMat.length); i++)
        {
            let currBox = currLeftMat[i];
            currBox.value = leftMatrix[i];
            currBox.disabled = true;
        }
    }
    else
    {
        //sizes are not equal
        DoesNotExist("sizes are not equal");
    }
}

function SubtractMatrix(currLeftMat)
{
    //check if the sizes in the left and right matrices are equal
    if ((Number(rightMatrixRowSize.value) == Number(leftMatrixRowSize.value)) && (Number(rightMatrixColSize.value) == Number(leftMatrixColSize.value)))
    {
        //subtract the values in the left matrix by the values of the right matrix
        for (let i = 0; i < Number(leftMatrix.length); i++)
        {
            leftMatrix[i] -= rightMatrix[i];
        }

        //change the values in the left matrix textboxes to reflect the new values
        for (let i = 0; i < Number(currLeftMat.length); i++)
        {
            let currBox = currLeftMat[i];
            currBox.value = leftMatrix[i];
            currBox.disabled = true;
        }
    }
    else
    {
        //sizes are not equal
        DoesNotExist("sizes are not equal");
    }
}

function MultiplyMatrix(currLeftMat)
{
    //check if the left matrix col size is equal to the right matrix row size
    if (Number(leftMatrixColSize.value) == Number(rightMatrixRowSize.value))
    {
        //create an answer matrix that the left matrix will be set to by the end of the function
        let answerMatrix = [];
        //set the answer matrix's sizes
        let answerMatrixRowSize = Number(leftMatrixRowSize.value);
        let answerMatrixColSize = Number(rightMatrixColSize.value);

        //actual multiplication 
        for (let i = 0; i < Number(leftMatrixRowSize.value); i++)
        {   
            //the current row in the left matrix
            let currRow = []

            //the last point of the row
            let endPoint = ((i * Number(leftMatrixColSize.value)) + Number(leftMatrixColSize.value))

            //put the values into the current row
            for (let r = (i * Number(leftMatrixColSize.value)); r < endPoint; r++)
            {
                currRow.push(leftMatrix[r]);
            }

            //get the columns and mulitply it with the current row
           for (let j = 0; j < Number(rightMatrixColSize.value); j++)
            {
                //the current col of the right matrix
                let currCol = []
            
                //put the values into the current col
                for (let c = j; c < Number(rightMatrix.length); c += Number(rightMatrixColSize.value))
                {                    
                    currCol.push(rightMatrix[c]);
                }
                    
                //the answer that will be put into the answer matrix
                let currAns= 0;

                //get the values from the curr row and the curr col, multiply them together, and then add them to the current answer
                for (let a = 0; a < Number(currRow.length); a++)
                {
                    currAns += currRow[a] * currCol[a];
                }

                //put the current answer into the answer matrix
                answerMatrix.push(currAns);
            }
        }

        //removes data from left matrix variable
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
    else
    {
        //sizes are not equal
        DoesNotExist("sizes are not equal");
    }
}

function InverseRightMatrix()
{
    if (Number(rightMatrixColSize.value) == Number(rightMatrixRowSize.value))
    {
        let stateMat = []

        for (let i = 0; i < Number(rightMatrixRowSize.value); i++)
        {
            let currRow = [];
            for (let j = 0; j < Number(rightMatrixColSize.value); j++)
            {
                if (i == j)
                {
                    currRow.push(1);
                }
                else
                {
                    currRow.push(0);
                }
            }
            stateMat.push(currRow);
        }

        let rightRows = []

        for (let i = 0; i < Number(rightMatrixRowSize.value); i++)
        {
            let currRow = [];
            let rowItr = i * Number(rightMatrixRowSize.value);
            for (let j = 0; j < Number(rightMatrixColSize.value); j++)
            {
                currRow.push(rightMatrix[rowItr + j]);
            }
            rightRows.push(currRow);
        }

        //inverse time
        for (let i = 0; i < Number(rightRows.length); i++)
        {
            let divNum = 1;

            for (let j = 0; j < Number(rightRows[i].length); j++)
            {
                if (i == j)
                {
                    divNum = rightRows[i][j];
                }
            }

            for (let j = 0; j < Number(rightRows[i].length); j++)
            {
                if (divNum != 0)
                {
                    rightRows[i][j] /= divNum;
                    stateMat[i][j] /= divNum;
                }
                else
                {
                    DoesNotExist("right matrix can not be inversed");
                    return;
                }

            }

            for (let j = 0; j < Number(rightRows.length); j++)
            {
                if (i != j)
                {
                    //sub the select row (w/ multiplier) from the current row

                    let multNum = 1;

                    for (let k = 0; k < Number(rightRows[j].length); k++)
                    {
                        if (i == k)
                        {
                            multNum = rightRows[j][k];
                        }
                    }

                    for (let k = 0; k < Number(rightRows[j].length); k++)
                    {
                        rightRows[j][k] = rightRows[j][k] - (rightRows[i][k] * multNum);
                        stateMat[j][k] = stateMat[j][k] - (stateMat[i][k] * multNum);
                    }

                }
            }
        }

        let rightItr = 0

        for (let i = 0; i < Number(stateMat.length); i++)
        {
            for (let j = 0; j < Number(stateMat.length); j++)
            {
                rightMatrix[rightItr] = stateMat[i][j];
                rightItr++;
            }
        }
    }
}

function DoesNotExist(myMes)
{
    UserChangesLeftMatrixSize();
    UserChangesRightMatrixSize();
    rightMatrixColSize.disabled = true;
    rightMatrixRowSize.disabled = true;
    leftMatrixColSize.disabled = true;
    leftMatrixRowSize.disabled = true;
    leftButton.disabled = true;
    rightButton.disabled = true;
    prevButton.disabled = true;
    nextButton.disabled = true;
    dneLabel.innerText = "DNE: " + myMes;
}

function PreviousEquation()
{
    if (Number(nextLeftMatrix.length) == 0)
    {
        for (let i = 0; i < Number(leftMatrix.length); i++)
        {
            nextLeftMatrix.push(leftMatrix[i]);
        }
    }
    else
    {
        for (let i = 0; i < Number(leftMatrix.length); i++)
        {
            nextLeftMatrix[i] = leftMatrix[i];
        }
    }

    UserChangesLeftMatrixSize();
    UserChangesRightMatrixSize();
    rightMatrixColSize.disabled = true;
    rightMatrixRowSize.disabled = true;
    leftMatrixColSize.disabled = true;
    leftMatrixRowSize.disabled = true;
    leftButton.disabled = true;
    rightButton.disabled = true;

    nextLeftRowSize = Number(leftMatrixRowSize.value);
    nextLeftColSize = Number(leftMatrixColSize.value);

    while (Number(leftMatrix.length) > 0)
    {
        leftMatrix.pop();
    }

    for (let i = 0; i < Number(prevLeftMatrix.length); i++)
    {
        leftMatrix.push(prevLeftMatrix[i]);
    }

    while (Number(rightMatrix.length) > 0)
    {
        rightMatrix.pop();
    }

    for (let i = 0; i < Number(prevRightMatrix.length); i++)
    {
        rightMatrix.push(prevRightMatrix[i]);
    }

    leftMatrixRowSize.value = prevLeftRowSize;
    leftMatrixColSize.value = prevLeftColSize;

    rightMatrixRowSize.value = prevRightRowSize;
    rightMatrixColSize.value = prevRightColSize;

    //create textboxes for the left matrix
    let leftItr = 0;
    for (let i = 0; i < Number(leftMatrixRowSize.value); i++)
    {
        for (let j = 0; j < Number(leftMatrixColSize.value); j++)
        {
            let currBox = document.createElement("INPUT");
            currBox.setAttribute("type", "number");
            currBox.setAttribute("value", leftMatrix[leftItr]);
            currBox.setAttribute("class", "LeftMatVal");
            currBox.disabled = true;
            document.body.appendChild(currBox);
            leftItr++;
        }
    }

    //create textboxes for the right matrix
    let rightItr = 0;
    for (let i = 0; i < Number(rightMatrixRowSize.value); i++)
    {
        for (let j = 0; j < Number(rightMatrixColSize.value); j++)
        {
            let currBox = document.createElement("INPUT");
            currBox.setAttribute("type", "number");
            currBox.setAttribute("value", rightMatrix[rightItr]);
            currBox.setAttribute("class", "RightMatVal");
            currBox.disabled = true;
            document.body.appendChild(currBox);
            rightItr++;
        }
    }

    prevButton.disabled = true;
    nextButton.disabled = false;

    alert(rightMatrix);
    alert(leftMatrix);
}

function NextEquation()
{
    UserChangesLeftMatrixSize();
    UserChangesRightMatrixSize();
    leftMatrixColSize.disabled = true;
    leftMatrixRowSize.disabled = true;
    leftButton.disabled = true;
    rightButton.disabled = false;
    leftMatReady = true;

    while (Number(leftMatrix.length) > 0)
    {
        leftMatrix.pop();
    }

    for (let i = 0; i < Number(nextLeftMatrix.length); i++)
    {
        leftMatrix.push(nextLeftMatrix[i]);
    }

    while (Number(nextLeftMatrix.length) > 0)
    {
        nextLeftMatrix.pop();
    }

    while (Number(rightMatrix.length) > 0)
    {
        rightMatrix.pop();
    }

    leftMatrixRowSize.value = nextLeftRowSize;
    leftMatrixColSize.value = nextLeftColSize;

    //create textboxes for the left matrix
    let leftItr = 0;
    for (let i = 0; i < Number(leftMatrixRowSize.value); i++)
    {
        for (let j = 0; j < Number(leftMatrixColSize.value); j++)
        {
            let currBox = document.createElement("INPUT");
            currBox.setAttribute("type", "number");
            currBox.setAttribute("value", leftMatrix[leftItr]);
            currBox.setAttribute("class", "LeftMatVal");
            currBox.disabled = true;
            document.body.appendChild(currBox);
            leftItr++;
        }
    }

    nextButton.disabled = true;
    prevButton.disabled = false;

    alert(rightMatrix);
    alert(leftMatrix);
}

function ResetValues()
{
    prevButton.disabled = true;
    nextButton.disabled = true;
    UserChangesLeftMatrixSize();
    UserChangesRightMatrixSize();
    leftMatrixColSize.value = 0
    leftMatrixRowSize.value = 0;
    rightMatrixRowSize.value = 0;
    rightMatrixColSize.value = 0;
    leftButton.disabled = false;
    rightButton.disabled = false;
    myOp.innerHTML = "+";
}