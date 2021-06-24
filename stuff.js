addEventListener("load", function() {
	if(localStorage.darkMode === "true") {
		document.body.setAttribute("data-dark-mode", "");
		document.querySelector(".darkModeToggle").setAttribute("src", "/sun.svg");
	}
	document.querySelector("nav#navigation img").addEventListener("click", function() {
		if(this.src === "/menu.svg") {
			this.src = "/close.svg";
			document.querySelector("nav#navigation div.menu").hidden = false;
		} else {
			this.src = "/menu.svg";
			document.querySelector("nav#navigation div.menu").hidden = true;
		}
	});
});