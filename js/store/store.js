// Store Class:  Handles Storage
class Store {
    static getContacts() {
        let contacts;
        if (localStorage.getItem('contacts') === null) {
            contacts = [];
        }
        else {
            contacts = JSON.parse(localStorage.getItem('contacts'));
        }
        return contacts;
    }
    static getContactByEmail(email){   
        let contact = null;
        if (localStorage.getItem('contacts') !== null) {

            const contacts = Store.getContacts();
            contacts.forEach((c, index) => {
                if (c.email === email) { 
                    contact = c;
                }
            });            
        }  
        return contact;             
    }
    static addContact(newContact) {
        const contacts = Store.getContacts();
        let isExisting = false;
        contacts.forEach(contact => {
            if (contact.email === newContact.email) {
                isExisting = true;
                return;
            }
        });
        if (!isExisting) {
            contacts.push(newContact);
            localStorage.setItem('contacts', JSON.stringify(contacts));
        }
        return isExisting;
    } 
    static editContact(eContact) {
        const contacts = Store.getContacts();
        
        let isEdited = false;
        
        contacts.forEach(contact => {
            if (contact.email === eContact.email) {
                contact.firstName = eContact.firstName;
                contact.lastName = eContact.lastName;
                isEdited = true;
                return;
            }            
        });
        localStorage.setItem('contacts', JSON.stringify(contacts));

        return isEdited;
    }
    static setEditState(email){
        localStorage.setItem('editEmailName', email);
    }
    static getEditState(){
        let email = localStorage.getItem('editEmailName');
        localStorage.setItem('editEmailName', '');

        return email;
    }
    static deleteContact(email) {
        const contacts = Store.getContacts();
        let isDeleted = false;

        contacts.forEach((contact, index) => {
            if (contact.email === email) {
                contacts.splice(index, 1);
                isDeleted = true;
            }
        });

        localStorage.setItem('contacts', JSON.stringify(contacts));
        return isDeleted;
    }
}