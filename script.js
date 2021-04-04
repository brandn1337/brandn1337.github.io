 

function MenuChange(Num)
{

	if (Num == 1)
	{	
		 document.getElementById("WS").style.display = "Block";
		 document.getElementById("W").style.display = "none";
		 document.getElementById("Q").style.display = "none";	 
	}
	if (Num == 2)
	{	
		 document.getElementById("WS").style.display = "none";
		 document.getElementById("W").style.display = "Block";
		 document.getElementById("Q").style.display = "none";	 
	}
	if (Num == 3)
	{	
		 document.getElementById("WS").style.display = "none";
		 document.getElementById("W").style.display = "none";
		 document.getElementById("Q").style.display = "Block";	 
	}

}
function TimeMechanic()
{
	
	Hour++;
	if(Hour == 24)
	{
		Day++;
		Hour = 0;
	}
	if(Day == 30)
	{
		Month++;
		Day = 0;
	}
	if (Month == 12)
	{
		Month = 0;
		Year++;
	}
	document.getElementById("HourNum").innerHTML = Hour;
	document.getElementById("DayNum").innerHTML = Day;
	document.getElementById("MonthNum").innerHTML = Month;
	document.getElementById("YearNum").innerHTML = Year;
}