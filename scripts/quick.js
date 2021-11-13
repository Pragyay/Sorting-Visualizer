async function quick(arr, low, high){

    // console.log("In quick()");

    if(low >= high){
        return;
    }

    let start = low;
    let end = high;
    let mid = parseInt(start+(end-start)/2); 

    arr[mid].style.background = "green";

    let pivot = arr[mid].style.height;
    
    // console.log("found pivot");

    while(start<=end){

        await(waitforme(delay));
        arr[start].style.background = "crimson";

        while(parseInt(arr[start].style.height) < parseInt(pivot)){

            arr[start].style.background = "pink";

            start++;
        }

        await(waitforme(delay));
        arr[end].style.background = "blue";

        while(parseInt(arr[end].style.height) > parseInt(pivot)){

            arr[end].style.background = "pink";

            end--;
        }


        if(start<=end){

            await(waitforme(delay));

            swap(arr[start], arr[end]);

            arr[start].style.background = "pink";
            arr[end].style.background = "pink";

            start++;
            end--;
        }
    }

    // console.log("recursve call");

    await quick(arr, low, end);

    for(let i=low;i<=end;i++){
        arr[i].style.background = "purple";
    }
    
    await quick(arr, start, high);

    for(let i=start;i<=high;i++){
        arr[i].style.background = "purple";
    }
}

const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    const arr = document.querySelectorAll(".bar");
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quick(arr, 0, arr.length-1);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


