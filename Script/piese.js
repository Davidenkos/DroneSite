window.onmousemove = function (e)
{
	console.log(e.clientX);
	console.log(e.clientY);
}

function checkTime(nr)
{
	if (nr < 10)
	{
		nr = "0" + nr;
	}
	return nr ;
}

function Time()
{		
	var time = new Date();
	var h = time.getHours();
	var m = time.getMinutes();
	var s = time.getSeconds();
		
	h = checkTime(24 - h);
	m = checkTime(60 - m);
	s = checkTime(60 - s);
 	alert("(Timp ramas pana la finalul tombolei) \n" + h + ":" + m + ":" + s  );	
}

var firme = ["AIO", "Hubsan", "KingKong", "Xiaomi"];

function range(min, max)
{	
	var obiecte = document.querySelectorAll("dd");
	for(var i = 0; i < obiecte.length; i++)
	{
		var pret = parseInt(obiecte[i].innerHTML.split(":")[1]);
		if( pret >= min && pret <= max)
		{
			obiecte[i].style.display = "block";
		}
		else
		{
			obiecte[i].style.display = "none";
		}
	}
}
	
function Audio()
{
	var audio = document.createElement("audio");
	audio.src = "./Audio/macanache.mp3";
	audio.type = "audio/mpeg";
	audio.play();
}	
	
function Macanache()
{
	var img = document.createElement("IMG");
	img.src = "./Pictures/Macanache.png"
	img.style.position = "absolute";
	img.style.width = 15 + "vw";
	var position = 0;
	console.log(window.innerWidth / parseInt(img.style.width) );
	setInterval(
	function ()
	{
		console.log (position + window.innerWidth / parseInt(img.style.width));
		console.log(window.innerWidth);
		if ( position + window.innerWidth / parseInt(img.style.width) > window.innerWidth/2)
		{
			setTimeout(
			function ()
			{
				
				img.parentNode.removeChild(img);
			}, 1000);
			clearInterval();
		}
		else
		{
			position++;
			img.style.left = position + "px";
		}
	}, 10);
	document.body.appendChild(img);
}
	
window.onload = function()
{
	
	var div = document.createElement("div");
	div.style.marginBottom = 2 + "rem";	
	document.body.insertBefore(div, document.body.children[1]);
	
	var rangeMin = document.createElement("input");
	rangeMin.type = "range";
	rangeMin.min = 0;
	rangeMin.max = 300;
	rangeMin.value = 0;
	
	var labelMin = document.createElement("label");
	labelMin.innerHTML = "Pret Minim:" + rangeMin.value + " RON   ";
	
	rangeMin.onchange = function ()
	{
		labelMin.innerHTML = "Pret Minim:" + rangeMin.value + " RON   ";
	}
	
	var rangeMax = document.createElement("input");
	rangeMax.type = "range";
	rangeMax.min = 0;
	rangeMax.max = 300;
	rangeMax.value = 300;
	
	var labelMax = document.createElement("label");
	labelMax.innerHTML = "  Pret Minim:" + rangeMax.value + " RON   ";
	
	rangeMin.onchange = function ()
	{
		labelMin.innerHTML = "Pret Minim:" + rangeMin.value + " RON   ";
		rangeMax.min = rangeMin.value;
		range(rangeMin.value, rangeMax.value)
	}
	
	rangeMax.onchange = function ()
	{
		labelMax.innerHTML = "  Pret Minim:" + rangeMax.value + " RON   ";
		rangeMin.max = rangeMax.value;
		range(rangeMin.value, rangeMax.value)
	}
	
	div.appendChild(labelMin);
	div.appendChild(rangeMin);
	div.appendChild(labelMax);
	div.appendChild(rangeMax);
	div.appendChild(document.createElement("br"));
	
	for(var i = 0; i < firme.length; i++)
	{		
		var label = document.createElement("label");
		label.innerHTML = firme[i];
	
		var radioButton = document.createElement("input");
		radioButton.name = "firma";
		radioButton.value = firme[i];
		radioButton.type = "radio";
		radioButton.onchange = function()
		{
			var dd = document.querySelectorAll("dd");
			for(var j = 0; j < dd.length; j++)
			{
				if(dd[j].innerHTML.includes(this.value))
				{
					dd[j].style.display = "initial";
				}
				else
				{
					dd[j].style.display = "none";
				}
			}
		}
		div.appendChild(radioButton);
		div.appendChild(label);
		div.appendChild(document.createElement("br"));
		
	}
	
	var lastKeyCode;
	window.onkeypress = function (e)
	{
		if (e.keyCode == 116)
		{
			if(e.keyCode == lastKeyCode)
			{
				Audio();
				Macanache();
			}
		}
		lastKeyCode = e.keyCode;	
		setTimeout( 
		function ()
		{
			lastKeyCode = 0;
		}, 500);		
	}
	
	setInterval(
	function()
	{
		Time()
	},10000
	)
}