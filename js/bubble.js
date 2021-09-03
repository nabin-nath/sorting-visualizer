async function bubble() {
    console.log('Inside bubble sort');

    const ele = document.querySelectorAll(".bar");

    for (let i = 0; i < ele.length - 1; i++) {
        for (let j = 0; j < ele.length - i - 1; j++) {
            ele[j].style.background = '#ffcc29';
            ele[j + 1].style.background = '#ffcc29';
            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j + 1]);
            }
            ele[j].style.background = '#fdfdf3';
            ele[j + 1].style.background = '#fdfdf3';
        }
        ele[ele.length - 1 - i].style.background = '#81b214';
    }
    ele[0].style.background = '#81b214';
}

const bubSortbtn = document.getElementById('bubbleSort');   
bubSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableNewArrayBtn();
});