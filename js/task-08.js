const formItem = document.querySelector('.login-form')

formItem.addEventListener('submit', onControlsFilingAndSubmissionFormData)

function onControlsFilingAndSubmissionFormData(event) {
    event.preventDefault()
    const formElem = event.currentTarget.elements
    const inputEmail = [...formElem.email.value]
    const inputPass = [...formElem.password.value]
    const email = formElem.email.value
    const password = formElem.password.value

    if (inputPass.length <= 0 || inputEmail.length <= 0) {
        alert('Все поля должны быть заполнены!')
    } else {
        const formData = { email, password }
        formItem.reset()

        console.log(formData)
    }
}
