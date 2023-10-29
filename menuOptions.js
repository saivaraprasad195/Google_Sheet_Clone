let activeCell = null;
let activeCellOptions={};
const activeCellDisplay = document.getElementById("active-cell");
const textAlignElements = document.getElementsByClassName("text-align");
const boldButton = document.getElementById("bold");
const italicButton = document.getElementById("italic");
const underlinedButton = document.getElementById("underlined");

function toggleButtonsStyle(btn, isSelected){
    if(isSelected){
        btn.classList.add("active-option");
    }
    else{
        btn.classList.remove("active-option")
    }
}

function highlightOptionButtonsOnFocus(){
    toggleButtonsStyle(boldButton, activeCellOptions.isBold);
    toggleButtonsStyle(italicButton, activeCellOptions.isItalic);
    toggleButtonsStyle(underlinedButton, activeCellOptions.isUnderline);
    highlightTextAlignButtons(activeCellOptions.textAlign);

}

function onCellFocus(event){
    if(activeCell && activeCell.id === event.target.id){
        return;
    }

    activeCell= event.target;
    activeCellDisplay.innerText = activeCell.id;

    const computedStyle = getComputedStyle(activeCell);

    activeCellOptions ={
        fontFamily: computedStyle.fontFamily,
        fontSize: computedStyle.fontSize,
        isBold: computedStyle.fontWeight === "600",
        isItalic: computedStyle.fontStyle === "italic",
        isUnderline: computedStyle.textDecoration.includes("underline"),
        textAlign: computedStyle.textAlign,
        textColor: computedStyle.color,
        backgroundColor: computedStyle.backgroundColor,
    }

    highlightOptionButtonsOnFocus();  
}


function onFontFamilyChange(){
    const fontFam = document.getElementById("fontFamilySelector").value;

    if(activeCell){
        activeCell.style.fontFamily = fontFam ;
    }

    activeCellOptions.fontFamily = fontFam;
}

function onFontSizeChange(){
    const size = document.getElementById("sizeSelector").value;
    if(activeCell){
        activeCell.style.fontSize = size;
    }
    activeCellOptions.fontSize = size;
}

function onClickBold(boldBtn){
    boldBtn.classList.toggle("active-option");

    if(activeCell){
        if(activeCellOptions.isBold === false){
            activeCell.style.fontWeight="600";
        }
        else{
            activeCell.style.fontWeight="400";
        }
        activeCellOptions.isBold = !activeCellOptions.isBold;
    }
}

function onClickItalic(italicBtn){
    italicBtn.classList.toggle("active-option");

    if(activeCell){
        if(activeCellOptions.isItalic === false){
            activeCell.style.fontStyle="italic";
        }
        else{
            activeCell.style.fontStyle="normal";
        }
        activeCellOptions.isItalic = !activeCellOptions.isItalic;
    }
}

function onClickUnderline(underlineBtn){
    underlineBtn.classList.toggle("active-option");

    if(activeCell){
        if(activeCellOptions.isUnderline === false){
            activeCell.style.textDecoration="underline";
        }
        else{
            activeCell.style.textDecoration="none";
        }
        activeCellOptions.isUnderline = !activeCellOptions.isUnderline;
    }
}

function onChangeTextColor(textColorInput) {
    let selectedColor = textColorInput.value;

    if (activeCell) {
      activeCell.style.color = selectedColor;
      activeCellOptions.textColor= selectedColor;
    }
}

function onChangeBackgroundColor(textColorInput) {

    let selectedColor = textColorInput.value;

    if (activeCell) {
      activeCell.style.backgroundColor = selectedColor;
      activeCellOptions.backgroundColor = selectedColor;
    }
}

function highlightTextAlignButtons(textAlignValue) {

    for (let i = 0; i < textAlignElements.length; i++) {
        if (textAlignElements[i].getAttribute("data-value") === textAlignValue) {
          textAlignElements[i].classList.add("active-option");
        } else {
          textAlignElements[i].classList.remove("active-option");
        }
      }

}

function onClickTextAlign(textAlignButton) {
    let selectedValue = textAlignButton.getAttribute("data-value");

    highlightTextAlignButtons(selectedValue);
  
    if (activeCell) {
      activeCell.style.textAlign = selectedValue;
      activeCellOptions.textAlign = selectedValue;
    }
}


  










