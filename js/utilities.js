// button show hide
function shoeSectionById(id){
    // hide all section
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    // show the section with the provide id as perameter
    document.getElementById(id).classList.remove('hidden')
}


// donation input value
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    // console.log(id, inputValue, inputNumber);
    return inputNumber;
    
}

// Total donation Ammount
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
