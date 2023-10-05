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
		email.style.border = "1px solid gray";
	} else {
		displayEmailError();
	}
});

firstName.addEventListener("input", (event) => {
	if (firstName.validity.valid) {
		firstNameError.textContent = "";
		firstName.style.border = "1px solid gray";
	} else {
		displayFirstNameError();
	}
});

lastName.addEventListener("input", (event) => {
	if (lastName.validity.valid) {
		lastNameError.textContent = "";
		lastName.style.border = "1px solid gray";
	} else {
		displayLastNameError();
	}
});

password.addEventListener("input", (event) => {
	if (password.validity.valid) {
		passwordError.textContent = "";
		password.style.border = "1px solid gray";
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
	}
	const firstNameCheck = displayFirstNameError();
	if (firstNameCheck === 1) {
		event.preventDefault();
	}
	const lastNameCheck = displayLastNameError();
	if (lastNameCheck === 1) {
		event.preventDefault();
	}
	const emailCheck = displayEmailError();
	if (emailCheck === 1) {
		event.preventDefault();
	}
	const passwordCheck = displayPasswordError();
	if (passwordCheck === 1) {
		event.preventDefault();
	}
})

function displayEmailError() {
	if (!email.validity.valid) {
		email.style.border = "1px solid #900";
		emailError.className = "error-message";

		if (email.validity.valueMissing) {
			emailError.textContent = "Email cannot be empty";
		} else if (email.validity.typeMismatch) {
			emailError.textContent = "Looks like this is not an email";
		}
		return 1;
	}
}

function displayFirstNameError() {
	if (!firstName.validity.valid) {
		firstNameError.textContent = "First name cannot be empty";
		firstName.style.border = "1px solid #900";
		firstNameError.className = "error-message";
		return 1;
	}
	return 0;
}

function displayLastNameError() {
	if (!lastName.validity.valid) {
		lastNameError.textContent = "Last name cannot be empty";
		lastName.style.border = "1px solid #900";
		lastNameError.className = "error-message";
		return 1;
	}
	return 0;
}

function displayPasswordError() {
	if (!password.validity.valid) {
		passwordError.textContent = "Password cannot be empty";
		password.style.border = "1px solid #900";
		passwordError.className = "error-message";
		return 1;
	}
	return 0;
}
