const formAdd = document.querySelector('#form-add');
const formUpdate = document.querySelector('#form-update');
const deleteButton = document.querySelector('#delete');
const updateField = document.querySelector('#update-field');

formAdd?.addEventListener('submit', add);
formUpdate?.addEventListener('submit', update);
deleteButton?.addEventListener('click', deleteOne);

function add(event) {
    event.preventDefault();

    const fd = new FormData(formAdd);

    fetch('/contacts/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            fullName: fd.get('fullName'),
            phoneNumber: fd.get('phoneNumber')
        })
    })
        .then(() => window.location.href = '/contacts');
}

function update(event) {
    event.preventDefault();

    const fd = new FormData(formUpdate);

    fetch(`/contacts/update/${fd.get('id')}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            fullName: fd.get('fullName'),
            phoneNumber: fd.get('phoneNumber')
        })
    })
        .then(() => window.location.href = '/contacts');
}

function deleteOne(event) {
    event.preventDefault();

    const fd = new FormData(formUpdate);

    fetch(`/contacts/delete/${fd.get('id')}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
        .then(() => window.location.href = '/contacts');
}

var formChanged = false; 
var inputs = document.querySelectorAll('#form-update input'); 

for (var i = 0; i < inputs.length; i++) { 
    inputs[i].addEventListener('input', function() { 
        formChanged = true; 
        checkFormChanged();
    }); 
} 

function checkFormChanged() { 
    var deleteBtn = document.querySelector('#delete');
    if (formChanged) { 
        deleteBtn.disabled = true; 
    } else { 
        deleteBtn.disabled = false; 
    } 
} 

checkFormChanged(); 





