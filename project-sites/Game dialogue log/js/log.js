const options = document.querySelector('#options')
const list = document.querySelector('#text-list');
const input = document.querySelector('#text-input');
let editing = false;

input.focus()

options.addEventListener('click', (e) => {
    if (e.target.id ==='add-text') {
        parseInput();
    }
    else if (e.target.id === 'download') {
        if (!editing) {
            downloadLog();
        }
        else {
            alert('You must be out of edit mode to download the log.')
        }
    }
});

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        parseInput();
    }
})

list.addEventListener('click', (e) => {
    if (e.target.id === 'edit') {
        if (!editing) {
            editText(e.target);
        }
        else {
            alert('Can only edit one line at a time.')
        }
    }
    else if (e.target.id === 'delete') {
        deleteText(e.target);
    }
    else if (e.target.id === 'confirm') {
        confirmEdit(e.target);
    }
    else if (e.target.id === 'discard') {
        discardChange(e.target);
    }
    
})

function editText(element) {
    const listItem = element.parentElement;
    const textElement = listItem.firstChild;
    let textValue = textElement.textContent;
    editing = true;
    element.textContent = 'Confirm';
    element.id = 'confirm';
    element.classList.remove('btn-warning');
    element.classList.add('btn-success')
    element.parentElement.lastChild.textContent = 'Discard Changes'
    element.parentElement.lastChild.id = 'discard';
    element.parentElement.lastChild.classList.remove('btn-danger');
    element.parentElement.lastChild.classList.add('btn-secondary');
    textElement.remove();
    listItem.insertAdjacentHTML('afterbegin', `<input id='text-edit' data-text='${textValue}' class='col-9' value='${textValue}'></input>`);
    listItem.firstChild.addEventListener('keyup', (e) => {
        if (e.target.id === 'text-edit') {
            if (e.key === 'Enter') {
                confirmEdit(element);
            }
        }
    })
}

function deleteText(element) {
    const response = confirm('Are you sure you want to delete this?')
    if (response) {
        element.parentElement.remove();
    }
}

function confirmEdit(element) {
    const input = element.parentElement.firstChild;
    const text = input.value;
    editing = false;
    element.textContent = 'Edit';
    element.id = 'edit';
    element.classList.remove('btn-success');
    element.classList.add('btn-warning')
    element.parentElement.lastChild.textContent = 'Delete'
    element.parentElement.lastChild.id = 'delete';
    element.parentElement.lastChild.classList.remove('btn-secondary');
    element.parentElement.lastChild.classList.add('btn-danger');
    input.remove();
    element.parentElement.insertAdjacentHTML('afterbegin', `<p class="col-9">${text}</p>`);
}

function discardChange(element) {
    const input = element.parentElement.firstChild;
    const text = input.dataset.text; 
    const confirmBtn = document.querySelector('#confirm')
    editing = false;
    confirmBtn.textContent = 'Edit';
    confirmBtn.id = 'edit';
    confirmBtn.classList.remove('btn-success');
    confirmBtn.classList.add('btn-warning')
    element.textContent = 'Delete'
    element.id = 'delete';
    element.classList.remove('btn-secondary');
    element.classList.add('btn-danger');
    input.remove();
    element.parentElement.insertAdjacentHTML('afterbegin', `<p class="col-9">${text}</p>`);
}

function parseInput() {
    const text = input.value;
    if (text !== '') {
        printText(text);
        clearInput();
    }

    function printText(text) {
        const html = `<li><p class="col-9">${text}</p><button class='col-1 btn btn-warning' id='edit'>Edit</button><button class='btn btn-danger col-1' id='delete'>Delete</button></li>`;
        list.insertAdjacentHTML('beforeend', html);
        list.parentElement.scrollTop = list.parentElement.scrollHeight;
    }

    function clearInput() {
        input.value = '';
    }
}

function downloadLog() {
    const logArray = [];
    const textElements = document.querySelectorAll('p');
    for (let i = 0; i < textElements.length; i++) {
        logArray.push(textElements[i].innerText)
    }
    const saveText = logArray.join(' ');
    console.log(saveText)
    // Create element with <a> tag
    const link = document.createElement("a");
    // Create a blog object with the file content which you want to add to the file
    const file = new Blob([saveText], { type: 'text/plain' });
    // Add file content in the object URL
    link.href = URL.createObjectURL(file);
    // Add file name
    link.download = "log.txt";
    // Add click event to <a> tag to save file.
    link.click();
    URL.revokeObjectURL(link.href);
}
