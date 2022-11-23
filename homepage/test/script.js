function reply_click(clicked_id)
{
    if (clicked_id == 1) {
        document.getElementById("bg_img").src="image/cover.png";
      } else if (clicked_id == 2) {
        document.getElementById("bg_img").src="image/afternoon.jpg";
      } else if (clicked_id == 3) {
        document.getElementById("bg_img").src="image/quote1.png";
      }
      else {
        document.getElementById("bg_img").src="image/sea.jpg";
      }
    //document.getElementById("bg_img").src="image/afternoon.jpg";
}
