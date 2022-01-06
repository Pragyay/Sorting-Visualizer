// function to swap two divs
function swap(el1, el2) 
{
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// disable buttons and sliders
function disable(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    document.querySelector("#array_size").disabled = true;
    document.querySelector("#array_generate").disabled = true;
}

// enable buttons and sliders
function enable(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    document.querySelector("#array_size").disabled = false;
    document.querySelector("#array_generate").disabled = false;
}

// Used in async function to show animations of sorting
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    })  
}

// Selecting size slider from DOM
let arraySize = document.querySelector('#array_size');


// Event listener to update the bars on the UI
arraySize.addEventListener('input', function(){
    // console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

// Default input for waitforme function (250ms)
let delay = 250;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#array_speed');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    // console.log(delayElement.value, typeof(delayElement.value));
    delay = 300 - parseInt(delayElement.value);
});

// Creating array to store randomly generated numbers which will be our height
let heights = [];

// Call to display bars right when you visit the site
createNewArray();

// To create new array input size of array
function createNewArray(noOfBars = 60) {

    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers 
    heights = [];
    for (let i = 0; i < noOfBars; i++) {
        heights.push(Math.floor(Math.random() * 250) + 1);
    }

    // select the div #bars element
    const bars = document.querySelector("#array_container");

    // create multiple divs using loop
    for (let i = 0; i < noOfBars; i++) 
    {
        //create a div element
        const bar = document.createElement("div");

        //height of div will be the equal to ith value in array
        bar.style.height = `${heights[i]*2}px`;

        //position divs to bottom of array_container
        bar.style.marginTop = "auto";

        //to update height of divs smoothly while sorting
        bar.style.transition = "height 0.3s";

        //add bar and flex-item classes to div
        bar.classList.add('bar');
        bar.classList.add('flex-item');

        //append div to array_container div
        bars.appendChild(bar);
    }
}

// function to clear all divs in array_container
function deleteChild() {
    const bar = document.querySelector("#array_container");
    bar.innerHTML = '';
}

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector("#array_generate");
newArray.addEventListener("click", function(){
    enable();
    createNewArray(arraySize.value);
});