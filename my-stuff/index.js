const things = [
	{
		name: "True Facts",
		description: "Funny facts. (They're definitely accurate though.)",
		url: "completely-true-facts"
	},
	{
		name: "Sarcastic Dictionary",
		description: "Definition of \"Sarcastic Dictionary\": A sarcastic dictionary.",
		url: "sarcastic-dictionary"
	},
	{
		name: "This site",
		description: "Uhh... ",
		url: ""
	}
];
addEventListener("load", function() {
	things.forEach(element => {
		let thing = document.createElement("a");
		thing.setAttribute("style", `display: block;
		border: solid #d2d2d2;
		padding: 10px;
		margin: 10px 0px;
		border-width: 1px;
		border-radius: 5px;
		text-decoration: none;
		cursor: pointer;
		color: black;
		width: 100%;`);
		thing.setAttribute("href", "/" + element.url);
		let title = document.createElement("h3");
		let description = document.createElement("span");
		title.className = "red title";
		title.innerText = element.name;
		description.className = "description";
		description.innerText = element.description;
		thing.appendChild(title);
		thing.appendChild(description);
		document.querySelector("div.container").appendChild(thing);
	});
});
