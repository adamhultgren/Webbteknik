
let images = $(".small_img");
let bigimage = $("#big_pic");
let currentindex = 0;

function updateimage(index)
{
	if(index < 0) index = images.length - 1;
	if(index == images.length) index = 0;

	currentindex = index;
	let newSrc = $(images[currentindex]).attr("src");
	bigimage.attr("src", newSrc);
	images.removeClass("active");
	$(images[currentindex]).addClass("active");
}

$("#scrollbtn1").click(function()
{
	updateimage(currentindex - 1);
});

$("#scrollbtn2").click(function()
{
	updateimage(currentindex + 1);
});

images.click(function()
{
	let clickedimage = images.index(this);
	updateimage(clickedimage);
});

let searchbar = document.querySelector(".search_bar");
let searchbarInput = document.querySelector(".search_bar input");

searchbarInput.onfocus = function()
{
	searchbar.style.boxShadow = "5px 5px 5px 1px rgba(0, 0, 0, 0.4)";
	this.placeholder = "";
};

searchbarInput.onblur = function()
{
	searchbar.style.boxShadow = "";
	this.placeholder = "Sök bland över 4000 sällskapsspel..."
};

let items = document.querySelectorAll(".navbar_item a");
for(let x = 0; x < items.length; x++)
{
	let icon = items[x].querySelector("i");
	items[x].onmouseover = function()
	{
		icon.style.transform = "scale(1.2)";
	};

	items[x].onmouseout = function()
	{
		icon.style.transform = "scale(1)";
	};
}

