function buycurrent() {
	console.log("run buy proccess");
}
window.onload = function() {
	dotdraw();
	document.getElementById("cart").addEventListener("click", function(event) {
		event.preventDefault();
		console.log("veiwcart");
	});

	document.getElementById("prevLink").onclick = processPrevious;
	document.getElementById("nextLink").onclick = processNext;
};

var thePic = 0;
var myPix = [
	{
		text: "Matebook",
		url: "img/matebook.png",
		desc: "The new 14 inch bezeless display oferring a 4k display with touch screen."
	},
	{
		text: "Razer stealth",
		url: "img/razer.png",
		desc: "GAMER"
	},
	{
		text: "Macbook",
		url: "img/macbook.png",
		desc: "oveepricedmacbook"
	}
];

function processPrevious() {
	if (thePic == 0) {
		thePic = myPix.length;
	}
	thePic--;
	document.getElementById("mainimg").src = myPix[thePic].url;
	document.getElementById("name").innerHTML = myPix[thePic].text;
	document.getElementById("spec").innerHTML = myPix[thePic].desc;
	dotdraw();
	//return false;
}

function processNext() {
	thePic++;
	if (thePic == myPix.length) {
		thePic = 0;
	}
	document.getElementById("mainimg").src = myPix[thePic].url;
	document.getElementById("name").innerHTML = myPix[thePic].text;
	document.getElementById("spec").innerHTML = myPix[thePic].desc;
	dotdraw();
	//return false;
}
function dotdraw() {
	//resseting div
	document.getElementById("dotdiv").innerHTML = "";
	//gor every item before current dot
	//console.log("length: " + myPix.length);
	//console.log("current: " + thePic);
	let added = 0;
	for (i = 0; i < thePic; i++) {
		//console.log("before");
		document.getElementById("dotdiv").innerHTML += `<img src="img/dot.svg" alt="">`;
		added++;
	}

	//for current dot
	document.getElementById("dotdiv").innerHTML += `<img src="img/dot-full.svg" alt="">`;
	added++;

	//for everydot after
	//gor every item before current dot
	for (i = 0; i < myPix.length - added; i++) {
		//console.log("after");
		document.getElementById("dotdiv").innerHTML += `<img src="img/dot.svg" alt="">`;
	}
}
