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

        while(parseInt(arr[start].style.height) < parseInt(pivot))
        {
            arr[start].style.background = " #FB8CAB";

            start++;
        }

        await(waitforme(delay));
        arr[end].style.background = "blue";

        while(parseInt(arr[end].style.height) > parseInt(pivot))
        {
            arr[end].style.background = " #FB8CAB";

            end--;
        }


        if(start<=end)
        {
            await(waitforme(delay));

            swap(arr[start], arr[end]);

            arr[start].style.background = " #FB8CAB";
            arr[end].style.background = " #FB8CAB";

            start++;
            end--;
        }
    }

    // console.log("recursve call");

    await quick(arr, low, end);

    // change color of sorted divs to #E65C9C
    for(let i=low;i<=end;i++){
        arr[i].style.background = "#E65C9C";
    }
    
    await quick(arr, start, high);  

    //chnage color of sorted divs to #E65C9C
    for(let i=start;i<=high;i++){
        arr[i].style.background = "#E65C9C";
    }
}

const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    const arr = document.querySelectorAll(".bar");

    disable();
    quickSortbtn.style.background = "rgba(0, 0, 0, 0.5)";

    await quick(arr, 0, arr.length-1);

    enable();
    quickSortbtn.style.background = "rgba(0, 0, 0, 0)";
});


