// Business logic
function Ticket(age, time, movie) {
  this.age = age;
  this.time = time;
  this.movie = movie;
}


Ticket.prototype.price = function() {
  var price = 12;
  if (this.age >= 65) {
    $(price - 3);
  }
  if (this.time <= 3) {
    $(price - 3);
  }
  // if (!newRelease) {
  //   $(price + 2);
  // }
  return price;
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
    console.log(inputtedAge);
    var inputtedMovie = $("input:radio[name=movie]:checked").val();
    debugger;
    console.log(inputtedMovie);
    var inputtedTime = $("#" + inputtedMovie + "Time").val();
    console.log(inputtedTime);
    var newTicket = new Ticket(inputtedAge, inputtedTime, inputtedMovie);
    debugger;
    $("ul#tickets").append("<li><span class='ticket'>" + newTicket.price() + " " + newTicket.movie + "</span></li>");



  });
});



// $(newTicket).last().click(function() {
//   $("#ticket").show();
//   $("#ticket h2").text(newTicket.price);
//   $("#movieTitle").text(newTicket.movie);
//   $("#time").text(newTicket.time);
