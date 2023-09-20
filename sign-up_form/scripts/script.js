const email = document.getElementById("email");

email.addEventListener("input", (event) => {
	if (email.validity.typeMismatch) {
		email.setCustomValidity("Looks like this is not an email");
	} else {
		email.setCustomValidity("");
	}
});
