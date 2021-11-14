async function merge(arr,left,right,mid){

    // console.log("in merge()");
    // console.log(`left=${left},mid=${mid},right=${right}`);

    let left_arr_length = mid-left+1;
    let right_arr_length = right-mid;
    
    // console.log(`left_arr_length=${left_arr_length}, right_arr_length=${right_arr_length}`);

    let left_arr = new Array(left_arr_length);
    let right_arr = new Array(right_arr_length);

    for(let i=0;i<left_arr.length;i++){

        arr[left+i].style.background = "crimson";

        await waitforme(delay);
        left_arr[i] = arr[left+i].style.height;
    }

    // console.log("added elements to left_arr");
     
    for(let i=0;i<right_arr.length;i++){

        arr[mid+1+i].style.background = "crimson";

        await waitforme(delay);
        right_arr[i] = arr[mid+1+i].style.height;
    }

    // console.log("added elements to right_arr");

    let i = 0;
    let j = 0;
    let k = left;

    while(i<left_arr_length && j<right_arr_length){
        await waitforme(delay);

        // console.log(typeof(left_arr[i]));  

        // use parseInt to convert string to int (left_arr[i] is of type string)
        if(parseInt(left_arr[i])<parseInt(right_arr[j])){  
            
            arr[k].style.background = "purple";
            
            arr[k].style.height = left_arr[i];
            i++;
        }else{

            arr[k].style.background = "purple";

            arr[k].style.height = right_arr[j];
            j++;
        }
        k++;
    }

    // console.log("sorted elements");
    // for(let x=left;x<=k;x++){
    //     console.log(arr[x].style.height);
    // }

    while(i<left_arr_length){

        arr[k].style.background = "purple";

        await waitforme(delay);
        arr[k].style.height = left_arr[i];
        i++;
        k++;
    }

    while(j<right_arr_length){

        arr[k].style.background = "purple";

        await waitforme(delay);
        arr[k].style.height = right_arr[j];
        j++;
        k++;
    }

    for(let x=0;x<k;x++){
        arr[x].style.background = "pink";
    }

    // console.log("sorted remaining elements");

}

async function mergeSort(arr,left,right){

    // console.log("mergeSort()");

    if(left>=right){    
        // console.log("arr length = 1. returning");
        return;
    }
    const mid = Math.floor((left + right)/2);      // .floor to convert double to int
    // console.log("mid= ",mid);
    
    await mergeSort(arr,left,mid);
    await mergeSort(arr,mid+1,right);
    await merge(arr,left,right,mid);
}

//chnage color of sorted divs to purple
async function changeColorSorted(arr){
    for(let i=0;i<arr.length;i++){
        arr[i].style.background = "purple";
    }
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    let arr = document.querySelectorAll(".bar");
    let left = 0;
    let right = arr.length-1; 
    disable();
    await mergeSort(arr,left,right);
    changeColorSorted(arr);
    enable();
});