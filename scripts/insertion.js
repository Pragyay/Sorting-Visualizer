async function insertion(){

    // console.log("Insertion");

    const arr = document.querySelectorAll('.bar');
    for(let i=1;i<arr.length;i++){

        // console.log("in ith loop");

        let key = arr[i].style.height;
        let j;  
        for(j=i-1;j>=0;j--)
        {
            // console.log("in jth loop");

            arr[j].style.background = "purple";
            if(parseInt(arr[j].style.height) > parseInt(key))
            {
                // console.log("in if cond");
                await waitforme(delay);
                arr[j+1].style.height = arr[j].style.height;
            }
            else{
                break;
            }
        }
        await waitforme(delay);
        arr[j+1].style.height = key;
    }
    
    arr[arr.length-1].style.background = "purple";
}

const insertionSortbtn = document.querySelector(".insertionSort");
insertionSortbtn.addEventListener('click', async function(){
    disable();
    await insertion();
    enable();
});

