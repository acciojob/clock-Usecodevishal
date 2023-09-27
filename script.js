//your JS code here. If required.
let p = document.getElementById("timer");
let tarikh = new Date();
// let arr = tarikh.split(" ");
let arr = [];
arr.push(tarikh);
let str = "";
str = str+arr[0];
let Arr = str.split(" ")
let dayNo=tarikh.getDate(); let monthNo = Arr[2]; let year = Arr[3];
switch(Arr[1]){
	case "Jan":  
      monthNo = 1;
	  break;
	case "Feb":
		monthNo = 2;
		break;
	case "Mar":
		monthNo = 3;
		break;
	case "Apr":
		monthNo = 4;
		break;
	case "May":
		monthNo = 5;
		break;
	case "Jun":
		monthNo = 6;
		break;
	case "Jul":
		monthNo = 7;
		break;
    case "Aug":
		monthNo = 8;
		break;
	case "Sep":
		monthNo = 9;
		break;
	case "Oct":
		monthNo = 10;
		break;
	case "Nov":
		monthNo = 11;
		break;
	case "Dec":
		monthNo = 12;
		break;
}



setInterval(function(){
	let date = new Date();
let D = date.toLocaleTimeString();
	p.innerText = `${monthNo}/${dayNo}/${year}, ${D}`;
},1000)
