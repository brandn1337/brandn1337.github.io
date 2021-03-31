
var Quest1 = 1;
var Quest2;
var Quest3;
var Quest4;
var Quest5;
var Quest6;


function CompleteQuest(Button)
{
	var finished;
	switch(Button)
	{
		case 1:
				finished = AllQuest(Quest1);
				if (finished == true)
					alert("Yay");
				else
					alert("Oh No");
			break;
		case 2:
				finished = AllQuest(Quest2);
			break;
		case 3:
				finished = AllQuest(Quest3);
			break;
		case 4:
				finished = AllQuest(Quest4);
			break;
		case 5:
				finished = AllQuest(Quest5);
			break;
		case 6:
				finished = AllQuest(Quest6);
			break;
	}

}

function UpdateQuest()
{

}
function AllQuest(CurrentQuest)
{
	if(CurrentQuest == 1)
	{
		if(Stone => 20)
			return true;
		else
			return false;
	}
}