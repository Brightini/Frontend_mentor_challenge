const form = document.querySelector("form");
const email = document.getElementById("email");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const password = document.getElementById("password");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

email.addEventListener("input", (event) => {
	if (email.validity.valid) {
		emailError.textContent = "";
		emailError.className = "emailError";
	} else {
		displayEmailError();
	}
});

firstName.addEventListener("input", (event) => {
	if (firstName.validity.valid) {
		firstNameError.textContent = "";
		firstNameError.className = "firstNameError";
	} else {
		displayFirstNameError();
	}
});

lastName.addEventListener("input", (event) => {
	if (lastName.validity.valid) {
		lastNameError.textContent = "";
		lastNameError.className = "lastNameError";
	} else {
		displayLastNameError();
	}
});

password.addEventListener("input", (event) => {
	if (password.validity.valid) {
		passwordError.textContent = "";
		passwordError.className = "passwordError";
	} else {
		displayPasswordError();
	}
});

form.addEventListener("submit", (event) => {
	let validEmail = email.validity.valid;
	let validFirstName = firstName.validity.valid;
	let validLastName = lastName.validity.valid;
	let validPassword = password.validity.valid;

	if (!validEmail && !validFirstName && !validLastName && !validPassword) {
		displayEmailError();
		displayFirstNameError();
		displayLastNameError();
		displayPasswordError();
		event.preventDefault();
	} else if (!firstName.validity.valid) {
		displayFirstNameError();
		event.preventDefault();
	} else if (!lastName.validity.valid) {
		displayLastNameError();
		event.preventDefault();
	} else if (!email.validity.valid) {
		displayEmailError();
		event.preventDefault();
	} else if (!password.validity.valid) {
		displayPasswordError();
		event.preventDefault();
	}
})

function displayEmailError() {
	if (firstName.validity.valid) {
		lastName.style.border = "1px solid gray";
	} else if (email.validity.valueMissing) {
		emailError.textContent = "Email cannot be empty";
		email.style.border = "1px solid #900";
	} else if (email.validity.typeMismatch) {
		emailError.textContent = "Looks like this is not an email";
		email.style.border = "1px solid #900";
	}

	emailError.className = "error-message";
}

function displayFirstNameError() {
	if (firstName.validity.valid) {
		lastName.style.border = "1px solid gray";
	} else {
		firstNameError.textContent = "First name cannot be empty";
		firstName.style.border = "1px solid #900";
	}

	firstNameError.className = "error-message";
}

function displayLastNameError() {
	if (lastName.validity.valid) {
		lastName.style.border = "1px solid gray";
	} else {
		lastNameError.textContent = "Last name cannot be empty";
		lastName.style.border = "1px solid #900";
	}

	lastNameError.className = "error-message";
}

function displayPasswordError() {
	if (password.validity.valid) {
		lastName.style.border = "1px solid gray";
	} else {
		passwordError.textContent = "Password cannot be empty";
		password.style.border = "1px solid #900";
	}

	passwordError.className = "error-message";
}
