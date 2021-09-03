let myArray = [];
let delay = 200;

// when the programs starts for the first time
disableSortingBtn();

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

function disableSortingBtn(){
    document.querySelector("#bubbleSort").disabled = true;
    document.querySelector("#insertionSort").disabled = true;
    document.querySelector("#mergeSort").disabled = true;
    document.querySelector("#quickSort").disabled = true;
    document.querySelector("#selectionSort").disabled = true;
}


function enableSortingBtn(){
    document.querySelector("#bubbleSort").disabled = false;
    document.querySelector("#insertionSort").disabled = false;
    document.querySelector("#mergeSort").disabled = false;
    document.querySelector("#quickSort").disabled = false;
    document.querySelector("#selectionSort").disabled = false;
}



function enableNewArrayBtn(){
    document.querySelector("#newArray").disabled = false;
}

function disableNewArrayBtn(){
    document.querySelector("#newArray").disabled = true;
}

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

function swap(bar1, bar2) {
    console.log('In swap()');
    
    let temp = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = temp;
    
}

function deleteBars() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

function new_array() {
    enableSortingBtn();
    myArray = [];

    deleteBars();

    for (let i = 0; i < 50; i++) {
        let a = Math.floor(Math.random() * 270) + 1;
        myArray.push(a);
    }


    console.log(myArray);


    const bars = document.querySelector("#bars");

    for (let i = 0; i < 50; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${myArray[i] * 2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

const newArray = document.getElementById('newArray');

newArray.addEventListener('click', function (event) {
  new_array();
});