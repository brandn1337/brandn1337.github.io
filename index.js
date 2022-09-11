var Inventory = document.getElementById("Inventory");
var Actions = document.getElementById("Actions");
var BeastCores = document.getElementById("Beast Core");
var BeastCoresNum = 0;
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
function DoAction()
{
    BeastCoresNum = BeastCoresNum + 1
    BeastCores.innerText = "Beast Cores " + BeastCoresNum + "/200";
}

function InitializeAction()
{
    var Num
    switch(Num){
    case 1:
        
        break;
    }
}




