import Upgrades from './Upgrades.json' assert {type:'json'};
CreateUpgrade(0);

console.log(Upgrades[0].Name);
function CreateUpgrade(Num)
{
    var tooltip = document.createElement("div")
    var Button = document.createElement("button");
    Button.innerText = Upgrades[Num].Name;
    document.getElementById("Main").appendChild(Button);
    var h1 = document.createElement("h1");
    h1.innerText = Upgrades[Num].Name
    var p1 = document.createElement("p");
    p1.innerText = Upgrades[Num].Description
    var Break1 = document.createElement("hr");
    var Break2 = document.createElement("hr");
    var p2 = document.createElement("p");
    p2.innerText = "Cost: " + Upgrades[Num].Cost;
    tooltip.appendChild(h1);
    tooltip.appendChild(Break1);
    tooltip.appendChild(p1);
    tooltip.appendChild(Break2);
    tooltip.appendChild(p2);
    Button.appendChild(tooltip);
    tooltip.setAttribute('id','UpgradeToolTip');
}
