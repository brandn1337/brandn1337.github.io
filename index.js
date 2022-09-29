import Upgrades from './Upgrades.json' assert {type:'json'};
CreateUpgrade(0);

function CreateUpgrade(Num)
{
    var Button = document.createElement("button");
    Button.innerText = Upgrades[Num].Name;
    document.getElementById("Main").appendChild(Button);
    
}
