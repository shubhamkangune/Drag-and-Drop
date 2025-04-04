console.log("this is drag and drop");

const imgBox = document.querySelector('.imgBox');
const whiteboxes = document.getElementsByClassName("whitebox")

// event listener for dragstart img
imgBox.addEventListener("dragstart", (e) => {
    console.log("dragstart...");
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide'
    }, 0);

})

// event listener for dragend img
imgBox.addEventListener("dragend", (e) => {
    console.log("dragEnd>>>");
    e.target.className = 'imgBox';
    
})

// event listener for dragover whitebox
for (let whiteBox of whiteboxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("dragover has been triggered");

    });

    whiteBox.addEventListener('dragenter', (e) => {
        console.log("dragenter has been triggered");
        e.target.className += ' dashed';
    });

    whiteBox.addEventListener('dragleave', (e) => {
        console.log("dragleave has been triggered");
        e.target.className = 'whitebox';
    });

    whiteBox.addEventListener('drop', (e) => {
        console.log("drop has been triggered");
        e.target.append(imgBox);

    });
}