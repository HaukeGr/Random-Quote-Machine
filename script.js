var numberArr = [];
function newQuote(randomNumber) {
  if(numberArr[0] !== randomNumber) {
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=" + randomNumber + "&callback=",   
    function(a) {
      $("p").fadeOut(function() {
        $(this).html(a[0].content)
      }).fadeIn();
      $(".author").fadeOut(function() {
        $(this).html(a[0].title)
      }).fadeIn();
    })
    numberArr.shift();
    numberArr.push(randomNumber);
}
  else {
    randomNumber = randomNumber + 1;
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=" + randomNumber + "&callback=",   
    function(a) {
      $("p").fadeOut(function() {
        $(this).html(a[0].content)
      }).fadeIn();
      $(".author").fadeOut(function() {
        $(this).html(a[0].title)
      }).fadeIn();
    })
  }
}

  function tweetQuote() {
    window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + ($(".quote").text()) + "- " + ($(".author").text()))
  }

$(document).ready(function(){
  newQuote(Math.floor(Math.random() * (0 - 42 + 1)) + 0)
  $(".new_quote").on("click", function() {
    newQuote(Math.floor(Math.random() * (0 - 42 + 1)) + 0);
  })
  
  $(".tweet-button").on("click", function() {
    tweetQuote();
  })
});
