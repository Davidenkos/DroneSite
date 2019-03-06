function sorteazaCrescator()
{
	var obiecte = document.querySelectorAll(".Tab");
	for ( var i = 0; i < obiecte.length; i++)
	{
		for(var j = 0; j < obiecte.length-i-1; j++)
		{
			var nr1 = parseInt(document.getElementsByClassName("Space")[j].children[0].innerHTML);
			var nr2 = parseInt(document.getElementsByClassName("Space")[j+1].children[0].innerHTML);
			if (nr1 > nr2)
			{
				var aux = obiecte[j].innerHTML;
				obiecte[j].innerHTML = obiecte[j+1].innerHTML;
				obiecte[j+1].innerHTML = aux;
			}			
		}
	}
}

function sorteazaDescrescator()
{
	var obiecte = document.querySelectorAll(".Tab");
	for ( var i = 0; i < obiecte.length; i++)
	{
		for(var j = 0; j < obiecte.length-i-1; j++)
		{
			var nr1 = parseInt(document.getElementsByClassName("Space")[j].children[0].innerHTML);
			var nr2 = parseInt(document.getElementsByClassName("Space")[j+1].children[0].innerHTML);
			if (nr1 < nr2)
			{
				var aux = obiecte[j].innerHTML;
				obiecte[j].innerHTML = obiecte[j+1].innerHTML;
				obiecte[j+1].innerHTML = aux;
			}			
		}
	}
}

function word (tariSelectate)
{
	var obiecte = document.querySelectorAll(".Tab");
	var tari = document.querySelectorAll(".Tab span + p");
	if(tariSelectate[0] == tari[0].innerHTML.split(":")[1])
	{
		console.log(tariSelectate[0]);
	}
	for ( var i = 0; i < obiecte.length; i++)
	{
		var este = false;
		for ( var j = 0;j < tariSelectate.length; j++)
		{
			if (tari[i].innerHTML.split(":")[1] == tariSelectate[j])
			{
				este = true;
				break;
			}
		}
		if (este)
		{
			obiecte[i].style.visibility = "initial";
		}
		else
		{
			obiecte[i].style.visibility = "hidden";
		}
	}
}

/*function Sort()
{
	var obiecte = document.querySelectorAll(".Tab");
	for (var i=0;i<obiecte.length-1;i++)
	{
		for (var j=0;j<obiecte.length-i-1;j++)
		{
			var k=0;
			var comparat = false;
			while (!comparat)
			{
				if ( obiecte[j].children[1].innerHTML.charCodeAt(k) - obiecte[j+1].children[1].innerHTML.charCodeAt(k) > 0 )
				{
					var aux = obiecte[j].innerHTML;
					obiecte[j].innerHTML = obiecte[j+1].innerHTML;
					obiecte[j+1].innerHTML = aux;
					comparat = true;
				}
				else if ( obiecte[j].children[1].innerHTML.charCodeAt(k) - obiecte[j+1].children[1].innerHTML.charCodeAt(k) == 0 )
				{
					k++;
				}
				else
				{
					comparat = true;
				}
			}
		}
	}
}*/

window.onmousemove = function (e)
{
	console.log(e.clientX);
	console.log(e.clientY);
}

window.onload = function ()
{
	var div = document.createElement("div");
	div.style.marginBottom = 2 + "rem";	
	document.body.insertBefore(div, document.body.children[1]);
	
	var sortCrescator = document.createElement("button");
	sortCrescator.appendChild(document.createTextNode("Sortare Pret Crescator"));
	div.appendChild(sortCrescator);
	sortCrescator.onclick = function ()
	{
		sorteazaCrescator();
	}
	var sortDescrescator = document.createElement("button");
	sortDescrescator.innerHTML = "Sortare Pret Descresator";
	div.insertBefore(sortDescrescator, div.lastChild.nextSibling);
	sortDescrescator.onclick = function ()
	{
		sorteazaDescrescator();
	}
	
	
	var select = document.createElement("select");
	select.multiple = true;
	var tari = document.querySelectorAll(".Tab span + p");
	for ( var i = 0; i < 4; i++)
	{
		var option = document.createElement("option");
		option.value = tari[i].innerHTML.split(":")[1];
		option.innerHTML = tari[i].innerHTML.split(":")[1];
		select.appendChild(option);	
	}
	select.onchange = function()
	{
		var tariSelectate = [];
		for(var i = 0; i < select.children.length; i++)
		{
			if (select.children[i].selected == true)
			{
				tariSelectate.push(select.children[i].value);
			}
		}
		word(tariSelectate);
	}
	div.insertBefore(select, div.firstChild);
	

}