const inputItem = document.querySelector('#validation-input')

inputItem.addEventListener('blur', checksInput)

function checksInput(event) {
	if (Number(inputItem.dataset.length) === event.currentTarget.value.length) {
		inputItem.setAttribute('class', 'valid')
	} else {
		inputItem.setAttribute('class', 'invalid')
	}

	console.log(event.currentTarget.value.length)
}