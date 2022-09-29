import Upgrades from './Upgrades.json' assert {type:'json'};
CreateUpgrade(0);

console.log(Upgrades[0].Name);
function CreateUpgrade(Num)
{
    var Button = document.createElement("button");
    Button.innerText = Upgrades[Num].Name;
    document.getElementById("Main").appendChild(Button);
    
}
