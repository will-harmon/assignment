var items = 0;

$("button").click(function () {
  items= items + 1;
  $(".cart-items").text(items);

  $("button").text("ADDED TO CART!");
  setTimeout(function () {
    $("button").text("Buy Now");
  }, 1000);
});
