async function insertion(){

    // console.log("Insertion");

    const arr = document.querySelectorAll('.bar');
    for(let i=1;i<arr.length;i++){

        // console.log("in ith loop");

        arr[i].style.background = "purple";

        let key = arr[i].style.height;
        let j;  
        for(j=i-1;j>=0;j--)
        {
            // console.log("in jth loop");

            arr[j].style.background = "crimson";
            if(parseInt(arr[j].style.height) > parseInt(key))
            {
                // console.log("in if cond");
                await waitforme(delay);
                arr[j+1].style.height = arr[j].style.height;
                arr[j].style.background = "#FB8CAB";
            }
            else{
                arr[j].style.background = "#FB8CAB";
                arr[j+1].style.background = "purple";
                break;
            }
        }
        await waitforme(delay);
        arr[j+1].style.height = key;
        arr[i].style.background = "#FB8CAB";
        
        for(let x=0;x<=i;x++){
            arr[x].style.background = "#E65C9C";
        }
    }
    
    arr[arr.length-1].style.background = "#E65C9C";
}

const insertionSortbtn = document.querySelector(".insertionSort");
insertionSortbtn.addEventListener('click', async function(){
    disable();
    await insertion();
    enable();
});

