let contactTableElement = document.getElementById(selectors.contactTable);        
let contactNorecord = document.getElementById(selectors.noRecord);

// UI Class: Handle UI
class UI {
    static addContactToList(contact) {
        const contactList = document.getElementById(selectors.contactList);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="email-id">${contact.email}</td>
            <td>${contact.firstName}</td>
            <td>${contact.lastName}</td>
            <td class="action"><a href="edit-contact.html" onclick="return onClickEdit(this)"><i class="far fa-edit edit" ></i></a></td>
            <td class="action"><a href="#" ><i class="far fa-trash-alt delete" ></i></a></td>`;

        contactList.appendChild(row);
    }

    static displayContacts() {
        const contacts = Store.getContacts();
        contactTableElement.classList.remove(selectors.hide);
        contactNorecord.classList.remove(selectors.hide);

        if(contacts.length === 0)
            contactTableElement.classList.add(selectors.hide);
        else{
            contactNorecord.classList.add(selectors.hide);
            contacts.forEach(contact => UI.addContactToList(contact));
        }
    }   

    static deleteContact(el) {      
        const contacts = Store.getContacts();
        if(contacts.length === 0){
            contactNorecord.classList.remove(selectors.hide);            
        }  
        el.parentElement.parentElement.parentElement.remove();                
    }
}
// Edit Click
let onClickEdit = e => {
    
    email = e.parentElement.parentElement.querySelector(selectors.emailIDClassName).innerHTML;
    Store.setEditState(email);
    
    return true;
}

// Event: Delete a Contact
document.getElementById(selectors.contactList).addEventListener('click', e => {
    
    let email = '';
    if(!(e.target.classList.contains('edit')))
        e.preventDefault();
        
    // Delete contact from store   
    if (e.target.classList.contains('delete')) {        
        email = e.target.parentElement.parentElement.parentElement.querySelector(selectors.emailIDClassName).innerHTML;
        let isDeleted = Store.deleteContact(email);
        let infoMessageElement = document.getElementById(selectors.infoMessage);

        infoMessageElement.classList.remove(selectors.error);
        infoMessageElement.innerHTML = '';

        if (isDeleted) {
            UI.deleteContact(e.target);
            infoMessageElement.innerHTML = infoMessage.delete.success;
        }
        else {
            infoMessageElement.innerHTML = infoMessage.delete.failure;
            infoMessageElement.classList.add(selectors.error);
        }        
    }
});
// Event: Display Contacts 
document.addEventListener('DOMContentLoaded', UI.displayContacts);
