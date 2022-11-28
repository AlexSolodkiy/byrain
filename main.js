$(document).ready(function(){
  $('.header-content').addClass('active');
  $('.header-back-0').addClass('active');

  $('.menu-button').click(function(){
    $('.menu-button').toggleClass('active');
    $('.header-menu').toggleClass('active');
  });

  $('.popup-exit').click(function(){
    $($(this).parents('.popup-cont')).removeClass('active');
  })

  function scrollView(cl){
     
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $(cl).offset().top+250;
    var eh = $(cl).outerHeight();
    var dh = $(document).height();   
   
    if (wt + wh >= et || wh + wt == dh || eh + et < wh){
      
      $(cl).addClass('active');
    }
  }
  $(window).scroll(function(){
    scrollView('.section-2-left');
    scrollView('.section-2-right');
    scrollView('.collection-title');
    scrollView('.collection-block');
    scrollView('.footer-title');
    scrollView('.footer-left');
    scrollView('.footer-right');
  })
  $('.collection-block-1').click(function(){
    $('.popup-1').addClass('active');
  });
  $('.collection-block-2').click(function(){
    $('.popup-3').addClass('active');
  });
  $('.collection-block-3').click(function(){
    $('.popup-4').addClass('active');
  });
  $('.collection-block-4').click(function(){
    $('.popup-5').addClass('active');
  });
  $('.collection-block-5').click(function(){
    $('.popup-2').addClass('active');
  });
  $('.collection-block-6').click(function(){
    $('.popup-6').addClass('active');
  });

  $('.popup-bottom-block-button').click(function(){
    var product = $(this).parents('.popup-bottom-block').find('.popup-bottom-block-title').text();
    $('.popup-form').addClass('active');
    $('.popup-form').find('.footer-form-input-product').val(product);
  });
  $('.popup-button-opt').click(function(){
    var product = 'оптовый заказ';
    $('.popup-form').addClass('active');
    $('.popup-form').find('.footer-form-input-product').val(product);
  });
  $("#form-popup").validate({
    rules:{
        name:{
            required: true
        },
        phone:{
            required: true,
            number: true
        }
    },
    messages:{
        name:{
            required: "Введите имя",
        },
        phone:{
            required: "Введите номер телефона",
            number: "Введите номер телефона"
        }
    },
    submitHandler: function () {
      event.preventDefault();

        let name = $(this).find('input[name="name"]').val();
        let phone = $(this).find('input[name="phone"]').val();
        var product = $(this).find('input[name="product"]').val();
        let data = {
          name: name,
          phone: phone,
          product:product
        };
          $.ajax({
            type: 'POST',
            url: '/sendMail.php',
            data: data,
          }).done(function (resp) {
            $('.popup-form').removeClass('active');
            
          }).fail( function (x, y, z) {
              console.log('error');
          });     
    }
  });
  $("#footer-popup").validate({
    rules:{
        name:{
            required: true
        },
        phone:{
            required: true,
            number: true
        }
    },
    messages:{
        name:{
            required: "Введите имя",
        },
        phone:{
            required: "Введите номер телефона",
            number: "Введите номер телефона"
        }
    },
    submitHandler: function () {
      event.preventDefault();

      let name = $(this).find('input[name="name"]').val();
      let phone = $(this).find('input[name="phone"]').val();
      var product = $(this).find('input[name="product"]').val();
      let data = {
        name: name,
        phone: phone,
        product:product
      };
        $.ajax({
          type: 'POST',
          url: '/sendMail.php',
          data: data,
        }).done(function (resp) {
          $('.popup-form').removeClass('active');
          $('#footer-popup').find('.thanks').addClass('active');
        }).fail( function (x, y, z) {
            console.log('error');
        });     
    }
  });


  $(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
  });
});