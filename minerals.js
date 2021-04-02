
function AddStone(amount)
{
	Stone += amount;
	UpdateMinerals();
}
function AddCopper(amount)
{
	Copper += amount;
	UpdateMinerals();
}
function AddLumber(amount)
{
	Lumber += amount;
	UpdateMinerals();
}
function AddLeaves(amount)
{
	Leaves += amount;
	UpdateMinerals();
}


function UpdateMinerals()
{
	document.getElementById("StoneNum").innerHTML = Stone;
	document.getElementById("CopperNum").innerHTML = Copper;
	document.getElementById("LumberNum").innerHTML = Lumber;
	document.getElementById("LeavesNum").innerHTML = Leaves;

	document.getElementById("StoneNumm").innerHTML = Stone;
	document.getElementById("CopperNumm").innerHTML = Copper;
	document.getElementById("LumberNumm").innerHTML = Lumber;
	document.getElementById("LeavesNumm").innerHTML = Leaves;
}