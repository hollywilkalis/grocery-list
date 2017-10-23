$(function() {
  $("form#form1").submit(function(event){
  event.preventDefault();
  var items = ["item1", "item2", "item3", "item4"];
  var itemArray = [];
  items.forEach(function(item) {
    var userInput = $("input#" + item).val();
    itemArray.push(userInput);
    });
  var ucArray = itemArray.map(function(array1) {
    return array1.toUpperCase();
  });
  var ucArray = ucArray.sort();
  ucArray.forEach(function(li) {
    $("ul.answers").append("<li>"+ li + "</li>");
  });
});
});
