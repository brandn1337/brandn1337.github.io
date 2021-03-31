
function AddStone(amount)
{
	Stone += amount;
	UpdateMinerals();
}


function UpdateMinerals()
{
	document.getElementById("StoneNum").innerHTML = Stone;
}