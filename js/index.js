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

let timeout; 
$("#Erbjudanden, .dropdown_menu").mouseenter(function() {
clearTimeout(timeout);
	if (!$(".dropdown_menu").is(":visible")) 
	{
    	$(".dropdown_menu").stop(true, false).css("display", "flex").hide().slideDown();
	}
});

$("#Erbjudanden, .dropdown_menu").mouseleave(function() {
timeout = setTimeout(function() {
    if (!$("#Erbjudanden").is(":hover") && !$(".dropdown_menu").is(":hover")) 
	{
        $(".dropdown_menu").stop(true, false).slideUp();
    }
},100); 
});

$(window).scroll(function()
{
	if($(window).scrollTop() > 1300)
	{
		$("#pagetopbtn").fadeIn();
		
	} else
	{
		$("#pagetopbtn").fadeOut();
	}
});
$("#pagetopbtn").click(function()
{
	$("html, body").animate({scrollTop: 0}, 400);
});

let bild = $("#dragbarbild");
bild.draggable({
	helper:"clone",

	start: function(event, ui)
	{
		$("#dragbar_item_container").css("pointer-events", "none");
		bild.css("opacity", 0);
	},
	stop: function(event, ui)
	{
		$("#dragbar_item_container").css("pointer-events", "auto");
		bild.css("opacity", 1);
	}
});

$("#shoppingcart_icon").droppable({
	tolerance: "pointer",
	drop: function(event, ui)
	{
		let cartnum = $("#shoppingcart_icon .cart_num");
		if (cartnum.length == 0) {
			cartnum = $("<span>").addClass("cart_num").text("1").appendTo("#shoppingcart_icon");
		} else {

			let currentValue = parseInt(cartnum.text());
			cartnum.text(currentValue + 1);
		}
		cartnum.stop(true, true).fadeIn(100);
	}
});

