alert("test");
function MenuChange(var Num)
{

	if (Num == 1)
	{	
		 document.getElementById("WS").style.display = "Block";
		 document.getElementById("W").style.display = "none";
		 document.getElementById("I").style.display = "none";
		 document.getElementById("Q").style.display = "none";	 
	}
	if (Num == 2)
	{	
		 document.getElementById("WS").style.display = "none";
		 document.getElementById("W").style.display = "Block";
		 document.getElementById("I").style.display = "none";
		 document.getElementById("Q").style.display = "none";	 
	}
	if (Num == 3)
	{	
		 document.getElementById("WS").style.display = "none";
		 document.getElementById("W").style.display = "none";
		 document.getElementById("I").style.display = "Block";
		 document.getElementById("Q").style.display = "none";	 
	}
	if (Num == 4)
	{	
		 document.getElementById("WS").style.display = "none";
		 document.getElementById("W").style.display = "none";
		 document.getElementById("I").style.display = "none";
		 document.getElementById("Q").style.display = "Block";	 
	}
}