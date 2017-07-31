$(document).ready(function() { main(); });
var currentslide=1;

function showSlide(n)
{
	
	var img=document.getElementById("galleryimage");
	var grey=document.getElementById("grey");
	var dots=document.getElementsByClassName("dot")
	img.src=n+".png";
	
	h=700*slides[n-1].naturalHeight/slides[n-1].naturalWidth;
	
	//alert(h);
	grey.style.height=h+"px";
	for(var i=0;i<4;i++)
	{
		if(i!=n-1)
		{
			dots[i].style.backgroundColor="grey";
		}
		else {dots[i].style.backgroundColor="green";}
	}
	
	
}

function setSortmenu(n)
{
	var sortmenu=document.getElementsByClassName("sort");
	
	if(n==1)
	{
		sortmenu[0].src="destination1.png";
		sortmenu[1].src="species0.png";
		sortmenu[2].src="tourtype0.png";
	}
	else if(n==2)
	{
		sortmenu[0].src="destination0.png";
		sortmenu[1].src="species1.png";
		sortmenu[2].src="tourtype0.png";
	}
	else if(n==3)
	{
		sortmenu[0].src="destination0.png";
		sortmenu[1].src="species0.png";
		sortmenu[2].src="tourtype1.png";
	}
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
	
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 


function main() 
{
	slides=document.getElementsByClassName("hidden");
	showSlide(1); 
	
	var destination = document.getElementById("destination");
	var tourtype=document.getElementById("tourtype");
	var species=document.getElementById("species");
	destination.style.display="inline";
	species.style.display="none";
	tourtype.style.display="none";	
}

function DestinationOn ()
{
	var destination = document.getElementById("destination");
	var tourtype=document.getElementById("tourtype");
	var species=document.getElementById("species");
	destination.style.display="inline";
	species.style.display="none";
	tourtype.style.display="none";	
}


function SpeciesOn ()
{
	var destination = document.getElementById("destination");
	var tourtype=document.getElementById("tourtype");
	var species=document.getElementById("species");
	
	destination.style.display="none";
	species.style.display="inline";
	tourtype.style.display="none";
	
}

function TourtypeOn ()
{
	var destination = document.getElementById("destination");
	var tourtype=document.getElementById("tourtype");
	var species=document.getElementById("species");
	destination.style.display="none";
	species.style.display="none";
	tourtype.style.display="inline";
	
	
}
function searchholidays(){
	alert("Your search gave 0 results");
}
function erase(){
	var inputtext = document.getElementById("inputtext");
	inputtext.value="";
}
function erasem(){
	var inputm = document.getElementById("inputmail");
	inputm.value="";
}
function erasen(){
	var inputn = document.getElementById("inputname");
	inputn.value="";
}