$(".show-filters").on("click", function () {
  //1. when our navigation is expanded, collapse it
  //2. change text of show filters to 'show filters'
  //3. otherwise, if the nav is collapsed, expand it
  //4. change the text to day 'hide filters'

  if ($(".filters-list").is(":visible")) {
    $(".filters-list").slideUp();
    $(".show-filters").text("Show filters");
  } else {
    $(".filters-list").slideDown();
    $(".show-filters").text("Hide filters");
  }
});

$(".filters-list a").on("click", function () {
  var filter = $(this).attr("data-filter");

  console.log(filter);

  // 1. hide all the products
  //2. show the products with a particular filter
  $("product").hide();
  $(filter).show();

  return false;
});
