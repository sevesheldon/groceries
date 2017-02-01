$(function() {
  $("form#groceries").submit(function(event) {
    event.preventDefault();

    var item1 = $("#item1").val();
    var item2 = $("#item2").val();
    var item3 = $("#item3").val();
    var item4 = $("#item4").val();
    var item5 = $("#item5").val();

    var groceries = [item1, item2, item3, item4, item5];
    groceries.sort();

    console.log(groceries);

    var groceriesUp = groceries.map(function(grocer) {
      return grocer.toUpperCase();

    });

    if (item1 && item2 && item3 && item4 && item5) {
      $("#grocery-area").fadeOut();
      $("#grocery-list").fadeIn();
      $("#grocery-list").append("<li>" + groceriesUp + "</li>");

    } else {

      alert("Please fill all 5 items");
    }

    console.log(groceriesUp);

  });
});
