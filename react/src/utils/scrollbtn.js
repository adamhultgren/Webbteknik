import $ from "jquery";

export const scrollbtn = () => 
{
  $(window).on("scroll", function () 
  {
    if ($(this).scrollTop() > 1300) 
	{
      $("#pagetopbtn").addClass("visible");
    } else 
	{
      $("#pagetopbtn").removeClass("visible");
    }
  });
  $("#pagetopbtn").click(function () {
    $("html, body").animate({ scrollTop: 0}, 400);
  });
};

