$(".post-nav").hover(
  function() {//Mouseenter
    //var x = $(this).parent().parent().parent().parent().siblings().find("img");
    //EN CASO DE EXISTIR SECCIONES SIMILARES A ESTA!!
    var x = $(".change");
    var img = $(this).data("img");
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $(x).removeClass("animated bounceOut fadeInLeft");
    $(x).addClass("animated bounceOut").one(animationEnd, function() {
      $(this).attr("src",img);
      $(this).removeClass('bounceOut').addClass("fadeInLeft").one(animationEnd, function() {
        $(this).removeClass('animated fadeInLeft');
      });
    });
  }, function() {//Mouseout
  }
);

$(".click").click(function(){
  $(".modal").addClass("is-active");
})

$(".modal-background").click(function(){
  $(".modal").removeClass("is-active");
})

$(".modal-close").click(function(){
  $(".modal").removeClass("is-active");
})
