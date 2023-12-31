const header = document.getElementById("header");
const body = document.getElementById("body");

for(let i=65;i<=90;i++)
{
    let tempChar = String.fromCharCode(i);

    const bold = document.createElement("b");

    bold.innerText = tempChar;
    header.appendChild(bold);
}

function createAndAppendRow(rowNumber){
    const row = document.createElement("div");
    row.className = "row";

    for(let i=64;i<=90;i++){
        if( i === 64)
        {
            const bold = document.createElement("b"); 
            bold.innerText = rowNumber;
            row.appendChild(bold);
        }
        else{
        const cell = document.createElement("div");
        cell.id=`${String.fromCharCode(i)}${rowNumber}`;
        cell.contentEditable="true";
        cell.addEventListener("focus", onCellFocus);
        row.appendChild(cell);
        }
    }
    body.appendChild(row);
}


for (let i = 1; i <= 100; i++){
    createAndAppendRow(i);
}


