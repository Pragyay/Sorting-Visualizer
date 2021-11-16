async function bubble() {

    // console.log('bubble sort');

    const arr = document.querySelectorAll(".bar");
    for(let i = 0; i < arr.length-1; i++)
    {
        for(let j = 0; j < arr.length-i-1; j++)
        {
            arr[j].style.background = 'crimson';
            arr[j+1].style.background = 'crimson';

            if(parseInt(arr[j].style.height) > parseInt(arr[j+1].style.height))
            {
                // console.log('In if condition');
                await waitforme(delay);
                swap(arr[j], arr[j+1]);
            }

            arr[j].style.background = '#FB8CAB';
            arr[j+1].style.background = '#FB8CAB';
        }

        arr[arr.length-1-i].style.background = '#E65C9C';
    }

    arr[0].style.background = '#E65C9C';
}

const bubbleSortbtn = document.querySelector(".bubbleSort");
bubbleSortbtn.addEventListener('click', async function(){
    disable();
    bubbleSortbtn.style.background = "rgba(0, 0, 0, 0.5)";

    await bubble();
    
    enable();
    bubbleSortbtn.style.background = "rgba(0, 0, 0, 0.0)";
});