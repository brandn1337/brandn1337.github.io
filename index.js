var Inventory = document.getElementById("Inventory");
var Actions = document.getElementById("Actions");
Inventory.style.display = "none";
Actions.style.display = "none";
function ChangeTab(ChangingTo)
{
    if(ChangingTo == "Inventory")
    {
        Actions.style.display = "none";
        Inventory.style.display = "block";
    }
    if(ChangingTo == "Actions")
    {
        Actions.style.display = "block";
        Inventory.style.display = "none";
       
    }
}




