// Selectors
let selectors = {
    contactList: 'contact-list',
    contactForm: 'contact-form',
    email: 'email',
    firstName: 'first-name',
    lastName: 'last-name',
    errorMessage: '.error-message',
    emailIDClassName: '.email-id',
    infoMessage: 'info-message',
    contactFormButton: '#contact-form a.button',
    contactSubmitButton: '#contact-form input.submit',
    error: 'error',
    contactTable :'contact-table',
    hide: 'hide',
    noRecord: 'no-record'
}
let infoMessage = {
    add: {
        success: "Added the contact successfully. Click <a href='index.html'>here</a> to view the contacts.",
        failure: "This contact already exits. Click <a href='index.html'>here</a> to view the contacts."
    },
    edit: {
        success: "Edited the contact sucessfully. Click <a href='index.html'>here</a> to view the contacts.",
        failure: "Something went wrong!! Try again later"
    },
    delete: {
        success: "Deleted the contact successfully",
        failure: "Something went wrong!! Try again later"
    }

}
let fields = {
    required: {
        firstName: {
            text: "Please enter your first name",
            validate: {
                text: "First Name should be min 3 and max 25 characters(no speacial characters)",
                regExp: "^[A-Za-z]{3,25}$"
            }
        },
        email: {
            text: "Please enter your email address",
            validate:{
                text: "Please enter a valid email address",
                regExp: "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
            }
        }
    },
    optional: {
        lastName: {
            validate: {
                text: "Last Name should be min 2 and max 30 characters(no speacial characters)",
                regExp: "^[A-Za-z]{2,30}$"
            }
        }
    }
};


// Contact Class: Represents a Contact
class Contact {
    constructor(email, firstName, lastName) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}