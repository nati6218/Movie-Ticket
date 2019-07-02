
function Tickets (movieTitle, price, time, age) {
  this.movie = movieTitle;
  this.price = price;
  this.time = time;
  this.age = age;
}

Tickets.prototype.ageDiscount = function(){
  if (this.age  === "child"){
    return  "$-2";
  }else if (this.age === "senior"){
    return "$-2";
  }else {
    return 0;
  }
}

  Tickets.prototype.timeDiscount = function(){
    if (this.time === "10am" || this.age === "child" || this.age === "senior" ){
      return this.price - 2;
    }else if (this.time === "3pm"){
      return this.price + 3;
    } else {
      return this.price;
    }
  }

  $(document).ready(function(){
    $("#container").submit(function(event){
      event.preventDefault();

      var movie = $('input:radio[name=movie]:checked').val();
      var age = $('input:radio[name=age]:checked').val();
      var time = $('input:radio[name=time]:checked').val();
      var price = parseInt($('input:radio[name=prices]:checked').val());
      var form = $('#container').prop("checked", true);

      var ticket = new Tickets(movie, price, time, age);

      $("#checkOut").show();
      $(".movie").text(movie);
      $(".time").text(time);
      $(".price").text(ticket.timeDiscount());
      $(".age").text(ticket.ageDiscount());
    });
  });
