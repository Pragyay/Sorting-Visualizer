async function bubble() {

    // console.log('bubble sort');

    const arr = document.querySelectorAll(".bar");
    for(let i = 0; i < arr.length-1; i++)
    {
        // console.log('In ith loop');

        for(let j = 0; j < arr.length-i-1; j++)
        {
            // console.log('In jth loop');

            arr[j].style.background = 'crimson';
            arr[j+1].style.background = 'crimson';

            if(parseInt(arr[j].style.height) > parseInt(arr[j+1].style.height))
            {
                // console.log('In if condition');
                await waitforme(delay);
                swap(arr[j], arr[j+1]);
            }

            arr[j].style.background = 'pink';
            arr[j+1].style.background = 'pink';
        }

        arr[arr.length-1-i].style.background = 'purple';
    }
    
    arr[0].style.background = 'purple';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disable();
    await bubble();
    enable();
});