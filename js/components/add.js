
// UI Class: Handle UI
class UI{    

    static clearFields() {
        document.getElementById(selectors.email).value = '';
        document.getElementById(selectors.firstName).value = '';
        document.getElementById(selectors.lastName).value = '';
    }
}
// Event: Add a Contact
document.querySelector(selectors.contactFormButton).addEventListener('click', e => {
    
    e.preventDefault();

    const email = document.getElementById(selectors.email).value;
    const firstName = document.getElementById(selectors.firstName).value;
    const lastName = document.getElementById(selectors.lastName).value;
    
    let infoMessageElement = document.getElementById(selectors.infoMessage);
    infoMessageElement.innerHTML = '';
    infoMessageElement.classList.remove(selectors.error);

    // Validate
    if (!validateContactForm()) {
        const contact = new Contact(email, firstName, lastName);
        let isExisting = Store.addContact(contact);
        if (!isExisting) {
                       
            infoMessageElement.innerHTML = infoMessage.add.success;

            // Clear Fields
            UI.clearFields();
        }
        else {
            infoMessageElement.innerHTML = infoMessage.add.failure;
            infoMessageElement.classList.add(selectors.error);
        }
    }
});