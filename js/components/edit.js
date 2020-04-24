// UI Class: Handle UI
class UI {

    static loadFields() {
        let email = Store.getEditState();
        if (email !== '') {
            let contact = Store.getContactByEmail(email)
            if (contact !== null) {
                document.getElementById(selectors.email).value = contact.email;
                document.getElementById(selectors.firstName).value = contact.firstName;
                document.getElementById(selectors.lastName).value = contact.lastName;
            }
        }
    }
}

// Event: Add a Contact
document.querySelector(selectors.contactFormButton).addEventListener('click', e => {

    e.preventDefault();

    const email = document.getElementById(selectors.email).value;
    
    if(email === '' )
        return;
    const firstName = document.getElementById(selectors.firstName).value;
    const lastName = document.getElementById(selectors.lastName).value;


    let infoMessageElement = document.getElementById(selectors.infoMessage);
    infoMessageElement.innerHTML = '';
    infoMessageElement.classList.remove(selectors.error);

    // Validate
    if (!validateContactForm()) {
        const contact = new Contact(email, firstName, lastName);
        let isEdited = Store.editContact(contact);
        if (isEdited) {
            infoMessageElement.innerHTML = infoMessage.edit.success;
        }
        else {
            infoMessageElement.innerHTML = infoMessage.edit.failure;
            //document.querySelector(selectors.edit).addEventListener('click', (email) => Store.setEditState(email));
            infoMessageElement.classList.add(selectors.error);
        }
    }
});

// Event: Load Edit Contacts 
document.addEventListener('DOMContentLoaded', UI.loadFields);