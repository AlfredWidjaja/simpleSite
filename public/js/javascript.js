 var opacity =0;
 var intervalID=0;
 function fadeIn() 
 {
	intervalID=setInterval(show,20);
 }
 function show() //fungsi animasi menampilkan content
 {
	 var key1 = document.getElementById("jud");
	 var key2 = document.getElementById("ket");
	 var key3 = document.getElementById("quote");
	 opacity = Number(window.getComputedStyle(key1).getPropertyValue("opacity"));
	 if(opacity<1)
	 {
		 opacity=opacity+0.1;
		 key1.style.opacity=opacity;
		 key2.style.opacity=opacity;
		 key3.style.opacity=opacity;
	 }
	 else
	 {
		clearInterval(intervalID);
	 }
 }
 
function home() // fungsi ketika button Home ditekan
{
	document.getElementById("jud").style.opacity = 0;
	document.getElementById("ket").style.opacity = 0;
	document.getElementById("quote").style.opacity= 0;	
	var judul = "Welcome To My First Homepage</br> Using HTML, CSS, & JavaScript"
	var ket = "Homepage is greatly different from before</br>\
			There are many sub features in navigation bar</br>\
			</br>\
			Features available:</br>\
			1. Home</br> 2. About Me";
	var quote ='"LIFE is like a GAME of CHESS</br>\
				CHANGING with each MOVE"';
	document.getElementById("jud").innerHTML = judul;
	document.getElementById("ket").innerHTML = ket;
	document.getElementById("quote").innerHTML = quote;	
	fadeIn();
}
function about_me() //fungsi ketika button About Me di tekan
{
	document.getElementById("jud").style.opacity = 0;
	document.getElementById("ket").style.opacity = 0;
	document.getElementById("quote").style.opacity= 0;
	var judul = "Hi, I'm Alfred Widjaja";
	var ket = "I'm an informatics student</br>\
	from Bina Nusantara University </br>who like to design web,\
	take photos of </br>natural landscape, read books, and learn new things\
	</br></br>Right now are developing myself in study</br> \
	Android Studio, Java, mastering HTML and CSS.";
	var quote ='"EVERY single person is UNIQUE</br>\
				BE WHO you ARE"';
	document.getElementById("jud").innerHTML = judul;
	document.getElementById("ket").innerHTML = ket;
	document.getElementById("quote").innerHTML = quote;
	fadeIn();
}
function reminder() // fungsi ketika button selain about me dan home diklik
{
	alert("Sorry, features still unavailable");			
}

function printTime() { // fungsi animasi untuk menampilkan waktu
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  var date= document.getElementById("date");
  date.innerHTML = hours+" : "+mins+" : "+secs;
}
setInterval(printTime, 1000);
