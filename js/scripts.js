function Tickets (movieTitle, price, time, age) {
  this.movie = movie;
  this.price = price;
  this.time = time;
  this.age = age
}

Tickets.prototype.ageDiscount = function(){
  if (this.age  === "child"){
  return this.price - 2;
}else if (this.age === "senior"){
  return this.price - 4;
}else {
  return 0;
}

Tickets.prototype.timeDiscount = function(){
if (this.time === "morning"){
  return this.price - 2;
}else if (this.time === "afternoon"){
  return this.price + 3;
} else {
  return 0
}
}

$(document).ready(function(){

var movie = $('input:radio[name=movie]:checked').val();
var age = $('input:radio[name=age]:checked').val();
var time = $('input:radio[name=time]:checked').val();
var price = $('input:radio[name=price]:checked').val();

});
