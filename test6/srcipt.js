const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', () => {
    const triggleBottom = window.innerHeight * 4 / 5;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggleBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
});


/* const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
} */