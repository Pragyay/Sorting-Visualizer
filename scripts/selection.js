async function selection(){
    // console.log('selection sort');

    const arr = document.querySelectorAll('.bar');

    for(let i=0;i<arr.length-1;i++)
    {
        // console.log('in ith loop');
        let min_index = i;
        for(let j=i+1;j<arr.length;j++)
        {
            // console.log('in jth loop');
            arr[min_index].style.background = "crimson";
            arr[j].style.background = "crimson";
            if(parseInt(arr[min_index].style.height) > parseInt(arr[j].style.height))
            {
                // console.log('in if cond');
                await waitforme(delay);
                arr[min_index].style.background = ' #FB8CAB';
                min_index = j;
                arr[min_index].style.background = 'crimson';
            }
            else{
                await waitforme(delay);
                arr[j].style.background = " #FB8CAB";
            }
        }

        swap(arr[min_index],arr[i]);

        arr[min_index].style.background = " #FB8CAB";
        arr[i].style.background = "#E65C9C";
    }
    
    arr[arr.length-1].style.background = "#E65C9C";
}

const selectionSortBtn = document.querySelector('.selectionSort');
selectionSortBtn.addEventListener('click',async function(){
    disable();
    selectionSortbtn.style.background = "rgba(0, 0, 0, 0.5)";

    await selection();
    
    enable();
    selectionSortbtn.style.background = "rgba(0, 0, 0, 0)";

})
