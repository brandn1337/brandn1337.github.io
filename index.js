import Upgrades from './Upgrades.json' assert {type:'json'};
CreateUpgrade(1);
var stamina = 0


function CreateUpgrade(Num)
{
    var tooltip = document.createElement("div")
    var Button = document.createElement("button"); 
    var h1 = document.createElement("h1"); 
    var p1 = document.createElement("p"); 
    var Break1 = document.createElement("hr");
    var Break2 = document.createElement("hr");
    var p2 = document.createElement("p");
    document.getElementById("Main").appendChild(Button);
    Button.innerText = Upgrades[Num].Name;
    h1.innerText = Upgrades[Num].Name;
    p1.innerText = Upgrades[Num].Description;
    console.log(Upgrades[Num].Cost[1])
    for(let i = 0; i < Object.keys(Upgrades[Num].Cost).length; i++)
    {
        p2.innerHTML += Object.keys(Upgrades[Num].Cost)[i] + ": " + Object.values(Upgrades[Num].Cost)[0] + "<br>";
        
    }
   
    tooltip.appendChild(h1);
    tooltip.appendChild(Break1);
    tooltip.appendChild(p1);
    tooltip.appendChild(Break2);
    tooltip.appendChild(p2);
    Button.appendChild(tooltip);
    tooltip.setAttribute('id','UpgradeToolTip');
}
