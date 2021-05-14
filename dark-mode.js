addEventListener("load", function() {
	if(localStorage.darkMode === "true") {
		document.body.setAttribute("data-dark-mode", "");
		document.querySelector(".darkModeToggle").setAttribute("src", "/sun.svg");
	}
});
