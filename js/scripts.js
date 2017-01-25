// Business logic
function Ticket(age, time, movie) {
  this.age = age;
  this.time = time;
  this.movie = movie;
}


Ticket.prototype.price = function() {
  var price = 12;
  console.log(price);
  if (this.age >= 65) {
    price=price-3;
    console.log("old");
  }
  if (this.time < 3) {
    price=price-3;
    console.log("matinee");
  }
  // if (!newRelease) {
  //   $(price + 2);
  // }
  return price;
  console.log(price);
}

Ticket.prototype.toString = function() {
  return this.movie + "(" + this.time + ")";
}
// newTicket.price()






// Interface logic
$(document).ready(function() {
  $("form#customerInformation").submit(function(event) {
    event.preventDefault();

    var inputtedAge = $("input#age").val();
    var inputtedMovie = $("input:radio[name=movie]:checked").val();
    var inputtedTime = $("#" + inputtedMovie + "Time :selected").text();
    inputtedTime = parseFloat(inputtedTime);
    var newTicket = new Ticket(inputtedAge, inputtedTime, inputtedMovie);
    console.log(newTicket);
    $("ul#tickets").append("<li><span class='ticket'>" + newTicket.price() + " " + newTicket.movie + "</span></li>");



  });
});



// $(newTicket).last().click(function() {
//   $("#ticket").show();
//   $("#ticket h2").text(newTicket.price);
//   $("#movieTitle").text(newTicket.movie);
//   $("#time").text(newTicket.time);
