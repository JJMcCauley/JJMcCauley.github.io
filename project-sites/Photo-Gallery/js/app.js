baguetteBox.run('.gallery');

// 



function getUserInput() {
    const userInput = document.querySelector('#gallery-search').value.toLowerCase();
    console.log(userInput)
    return userInput;
}

function compareText(userInput) {
    userInput = getUserInput();
    const imageList = document.querySelectorAll('.gallery-img');
    console.log(imageList)

    for (i = 0; i < imageList.length; i++) {
        let imageListText = imageList[i].getAttribute('data-caption').toLowerCase();
        if (imageListText.includes(userInput) !== true ){
            imageList[i].style.display = 'none';
        }
        else {imageList[i].style.display = 'grid';}
    }
}