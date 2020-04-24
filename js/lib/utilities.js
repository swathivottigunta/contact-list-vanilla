// Validating Form Fields
let validateContactForm = () => {
    var isError = false;
    
    Object.keys(fields).forEach(type => {
        Object.keys(fields[`${type}`]).forEach(field => {

            let fieldId = document.getElementById(selectors[`${field}`]);
            let fieldValue = fieldId.value;
            
            let errorMessageElement = fieldId.parentElement.querySelector(selectors.errorMessage);
            errorMessageElement.innerHTML = '';

            if (type === 'required' && fieldValue === '') {
                errorMessageElement.innerHTML = fields.required[`${field}`].text;
                isError = true;
            }
            else if ("validate" in fields[`${type}`][`${field}`]) {
                if (!(type === 'optional' && fieldValue === '')) {

                    let regex = new RegExp(fields[`${type}`][`${field}`].validate.regExp);
                    let result = regex.test(fieldValue);

                    if (!result) {
                        errorMessageElement.innerHTML = fields[`${type}`][`${field}`].validate.text;
                        isError = true;
                    }
                }
            }
        });
    });
    return isError;
}