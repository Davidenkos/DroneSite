var orase = ["Alba", "Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud", "Botosani", "Brasov", "Braila", "Bucuresti", "Buzau"]


function doubleCheck(input1, input2)
{
	if( input1.checked == true )
	{
		input2.checked = false;
	}
}

window.onmousemove = function (e)
{
	console.log(e.clientX);
	console.log(e.clientY);
}

window.onload = function ()
{
	var div = document.createElement("div");
	div.style.height = 15 + "rem";
	div.style.padding = 1 + "rem"
	div.style.border = "1px solid black";
	div.style.textAlign = "center";
	div.onmouseover = function (e)
	{
		this.style.backgroundColor = "#6DC0D5";
	}
	div.onmouseout = function ()
	{
		this.style.backgroundColor = "inherit";
	}
	document.body.insertBefore(div, document.body.children[1]);	
	
	var p = document.createElement("p");
	p.style.paddingBottom = 0.5 + "rem";
	p.innerHTML = "In caz ca doriti sa castigati Drona de curse, puteti sa va inscrieti in tombola completand acest formular !!!"
	div.appendChild(p);
	
	var form = document.createElement("form");
	form.action = "javascript:submit()";
	div.appendChild(form);
	
	
	var nume = document.createElement("input");
	nume.type = "text";
	nume.id = "nume";
	nume.name = "nume";
	nume.placeholder = "Numele Dvs...";
	var numeL = document.createElement("label");
	numeL.innerHTML = "Nume:";
	numeL.htmlFor = nume.id;
	
	var email = document.createElement("input");
	email.type = "text";
	email.id = "email";
	email.name = "email";
	email.placeholder = "Email-ul Dvs...";
	var emailL = document.createElement("label");
	emailL.innerHTML = "Email:";
	emailL.htmlFor = email.id;
	
	var select = document.createElement("select");
	select.id = "select";
	for (var i = 0; i < orase.length; i++)
	{
		var option = document.createElement("Option");
		option.value = orase[i];
		option.innerHTML = orase[i];
		select.appendChild(option);
	}
	var selectL = document.createElement("label");
	selectL.innerHTML = "Judet:";
	selectL.htmlFor = select.id;
	
	var male = document.createElement("input");
	male.id = "sexM";
	male.type = "checkbox";
	var maleL = document.createElement("label");
	maleL.innerHTML = "Male:";
	maleL.htmlFor = male.id;
	male.onchange = function()
	{
		doubleCheck(male, female)
	}
	
	var female = document.createElement("input");
	female.id = "sexF";
	female.type = "checkbox";
	var femaleL = document.createElement("label");
	femaleL.innerHTML = "Female:";
	femaleL.htmlFor = female.id;
	female.onchange = function()
	{
		doubleCheck(female, male)
	}

	var textArea = document.createElement("textArea");
	textArea.id = "Feedback";
	textArea.rows = "4";
	textArea.cols = "30";
	var textAreaL = document.createElement("label");
	textAreaL.innerHTML = "Feedback:";
	textAreaL.htmlFor = textArea.id;
	
	var submitB = document.createElement("input");
	submitB.style.display = "block";
	submitB.style.margin = "auto";
	submitB.type = "submit";
	submitB.value = "Submit";
	
	form.onsubmit= function ()
	{
		alert("Felicitari, v-ati inscris in tombola, extragerea se va face pe 8 februarie.")
		div.parentNode.removeChild(div);
	}
	
	form.appendChild(numeL);
	form.appendChild(nume);
	form.appendChild(document.createElement("br"));
	form.appendChild(emailL);
	form.appendChild(email);
	form.appendChild(document.createElement("br"));
	form.appendChild(selectL);
	form.appendChild(select);
	form.appendChild(document.createElement("br"));
	form.appendChild(maleL);
	form.appendChild(male);
	form.appendChild(document.createElement("br"));
	form.appendChild(femaleL);
	form.appendChild(female);
	form.appendChild(document.createElement("br"));
	form.appendChild(textAreaL);
	form.appendChild(document.createElement("br"));
	form.appendChild(textArea);
	form.appendChild(document.createElement("br"));
	form.appendChild(submitB);
	
}