
let Main = document.getElementById("Main");
let CardsDiv = [];
let CardsP = [];
let FirstPicked = false;
let FirstPick;
let SecondPick;

let CardText = 
[
"The culmination of three tenets: obligation, justice and courage", "Honour",
"One who understands, values and possesses honour along reconizinges that his/her abilities carry with them a responsibility and trains diligently in the arts, sciences and defence", "The warrior",
"The art of war is written by who?", "sun tzu",
"What year was hannibal barca promoted to chief commander?", "221 B.C",
"What battle did shaka zulu win against the europeans?", "Battle of Isandlwana",
"What tribes was shaka zulu trying to unify?", "Nguni tribes",
"What were the three prominent thought philopshyies in acient china?", "Confucianism, Taoism, Buddhism",
"Commonly misconcepted to be a single martial, it is actually a term to represent any to way train the body and mind", "Kung Fu",
"As well as being loyal to the royal family, these guardsmen were expected to follows the the principles of confucianism","Templar Knights",
"What year did alexander the great ascend to the throne?", "336 B.C",
"The famous movie '300' is based of of these warriors","The spartans",
"How long did the roman empire last?","over a 1000 years",
"who is one of the earliest warrior epics based off?","Giglamesh",
"What time period was hammruabi's code of laws devolped?","1792 - 1750 B.C",
"He is one of the most influential figures in taking back the middle east from the europeans","Saladin",
"it is thought she fought in wars during the 6th centerury to protect her father from being enlisted","Mulan",
"Even with zero education or expirience she asked her king to be sent into war","Joan of arc",
"disguising herself as her brother she fought in the war, her secret was later discovered but she was rewarded handsomly due to her heroism","Deborah Sampson"
]


function start()
{
    for(let i = 0; i < 36; i++)
    {
        let div = document.createElement('div');
        let p = document.createElement('p');
        div.classList.add("Card");
        div.setAttribute("id", rand[i])
        p.classList.add("Cardp")
       // div.textContent = rand[i];
        Main.appendChild(div);
        div.appendChild(p)
        CardsDiv[i] = div;
        CardsP[i] = p
    }
}
function generateRandomArray() {
    let arr = [];
    for (let i = 1; i <= 36; i++) {
      arr.push(i);
    }
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function clear(div1,div2)
  {
    div1.querySelector("p").textContent = ''
    div1.querySelector("p").style.color = "black";
    div1.style.backgroundColor = "beige"
    div1.style.backgroundImage = "url('Swordbg.png')"
    div2.querySelector("p").style.color = "black";
    div2.querySelector("p").textContent = ""
    div2.style.backgroundColor = "beige"
    div2.style.backgroundImage = "url('Swordbg.png')"
  }

  document.addEventListener("click", (event) => {
    if(event.target.parentElement.className == "Card")
    {
      
        if (FirstPicked == false)
        {
            console.log(CardsP);
            FirstPick = event.target.parentElement;
            FirstPicked = true
            FirstPick.style.backgroundImage = "none"
            console.log(FirstPick.id);
            FirstPick.querySelector("p").textContent = CardText[FirstPick.id - 1]
    
        }
        else
        {


          SecondPick = event.target.parentElement;
          SecondPick.style.backgroundImage = "none";
          SecondPick.querySelector("p").textContent = CardText[SecondPick.id - 1]
       
          console.log(parseInt(FirstPick.id) - 1);

           if (parseInt(FirstPick.id) % 2 == 0)
           {
                if(parseInt(FirstPick.id) - 1 == parseInt(SecondPick.id))
                {
                  FirstPick.style.backgroundColor = "green";
                  SecondPick.style.backgroundColor = "green"
                  SecondPick.querySelector("p").style.color = "White";
                  FirstPick.querySelector("p").style.color = "White";
                    FirstPicked = false;
                    
                }
                else
                {
                  FirstPicked = false;
                  FirstPick.style.backgroundColor = "Red";
                  FirstPick.querySelector("p").style.color = "White";
                  SecondPick.style.backgroundColor = "Red"
                  SecondPick.querySelector("p").style.color = "White";

                  setTimeout(clear,1000,FirstPick,SecondPick)
                }
           }
           else if (parseInt(FirstPick.id) % 2 == 1)
           {
                if(parseInt(FirstPick.id) + 1 == parseInt(SecondPick.id))
                {
                  FirstPick.style.backgroundColor = "green";
                  FirstPick.querySelector("p").style.color = "White";
                  SecondPick.style.backgroundColor = "green"
                  SecondPick.querySelector("p").style.color = "White";
                  
                    FirstPicked = false;
                    
                }
                else
                {
                  FirstPicked = false;
                  FirstPick.style.backgroundColor = "Red";
                  FirstPick.querySelector("p").style.color = "White";
                  SecondPick.style.backgroundColor = "Red"
                  SecondPick.querySelector("p").style.color = "White";
                  setTimeout(clear,1000,FirstPick,SecondPick)
                }
           }


          


        }
    }
    
  });



let rand = generateRandomArray();

start();