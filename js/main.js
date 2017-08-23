/*MENU*/
$(document).ready(function() {
    $('.carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
    pageDots: false,
    imagesLoaded: true,
    groupCells: true,
    groupCells: 7,
    groupCells: '80%',
    lazyLoad: true, 
    lazyLoad: 2,
    prevNextButtons: false
});

$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 6000);
  }
  
  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
  
  advance();
});
  
  $( "#responsive-menu-icon" ).click(function() {
  
  
var nav = $(".header_menu");
var navHeight = nav.height();
    
    if (navHeight < 150) {

TweenMax.to(nav, 1, {"height":150});
    } else {
      TweenMax.to(nav, 1, {"height":50});
    };
    
  });
  // menu icon jquery
  
  // when whole menu div is clicked
  
  $("#responsive-menu-icon").click( function() {
    // if the menu height is not full, transform icon
    var nav = $(".header_menu");
var navHeight = nav.height();
    
    if (navHeight < 150) {
      $("#a").addClass("rotate-down");
    $("#responsive-menu-icon").addClass("menu-up");
     $("#b").addClass("disappear");
   
     $("#c").addClass("rotate-up");
      
      
    } else {
      
      // if it's not less than full height, remove animation classes
      $("#a").removeClass("rotate-down");
    $("#responsive-menu-icon").removeClass("menu-up");
     $("#b").removeClass("disappear");
   
     $("#c").removeClass("rotate-up");
    };     
  }); 
});

/*MODAL*/

// Click function for show the Modal

$(".show").on("click", function(){
   $(".mask").addClass("active");
});

// Function for close the Modal

function closeModal(){
  $(".mask").removeClass("active");
}

// Call the closeModal function on the clicks/keyboard

$(".close, .mask").on("click", function(){
  closeModal();
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    closeModal();
  }

// CHANGE ALL TEXTS


//VISAO
$("#visao").on("click", function(){
 $("h2#title-modal").text('Nossa Visão');
  $("p#text-modal").text('Visamos destacar o amadurecimento do Futebol Americano no Brasil, auxiliando os times em captar talentos, desenvolver e fortalecer o melhor dos seus atletas, tornando o esporte mais competitivo.');   
});

//MISSAO
$("#missao").on("click", function(){
 $("h2#title-modal").text('Nossa Missão');
  $("p#text-modal").text('Sermos referência em conhecimento e tecnologia em avalição e análise de habilidades de jogadores de Futebol Americano no Brasil.');   
});

//PAIXAO
$("#paixao").on("click", function(){
 $("h2#title-modal").text('Paixão em Campo');
  $("p#text-modal").text('Um dos fatores cruciais que nos motivou a criar o Combine Brasil, é a paixão pelo futebol americano, o contato com praticantes que buscam evolução pessoal, mas não possuem o suporte necessário para que alcancem o nível profissional, assim podemos contribuir com o crescimento do esporte no país.');   
});

//QUALIDADE
$("#qualidade").on("click", function(){
 $("h2#title-modal").text('Qualidade é tudo');
  $("p#text-modal").text('o combine brasil trabalha constantemente na qualidade e melhora de cada serviço, observando os minimos detalhes,assim atendendo e fortalecendo as exigências e necessidades do time.');   
});

//CAMPEAO
$("#campeao").on("click", function(){
 $("h2#title-modal").text('Time Campeão');
  $("p#text-modal").text('O Combine Brasil traz a união de talentos e vivências de diversas áreas buscando o mesmo objetivo, tornando as equipes que os cercam diferenciadas no cenário esportivo, aperfeiçoando suas habilidades técnicas e físicas, favorecendo sua estruturação.');   
});

$("#Suplementos").on("click", function(){
 $("h2#title-modal").text('Suplementos');
  $("p#text-modal").text('Seguindo o pensamento Combine Brasil, criamos a primeira linha de suplementos com foco nos atletas, praticantes e amantes da “Bola Oval”. \n\nToda a linha de suplementos do Combine Brasil, foi testada por praticantes do esporte, e desenvolvida por profissionais da área de saúde e nutrição.Construímos uma linha específica, pensada e elaborada para os atletas no pré, durante e pós-treino, seja  de fortalecimento, no táticos ou nos jogos.Para concretizarmos isso, foi necessário muito esforço, trabalho em equipe e grandes parcerias, reduzindo custos e margens, desenvolvendo assim, um suplementos de alta qualidade com preços justos.Combine Brasil, nosso melhor touchdown é o Atleta!');   
});

$("#Como-seu-time").on("click", function(){
 $("h2#title-modal").text('Como o seu time pode usar da nossa metodologia:');
  $("p#text-modal").text('Para os times que estão nas regiões onde o Combine Brasil ainda não têm representantes, poderão se homologar e utilizar nossa metodologia, seguindo nossos protocolos para execução de suas avaliações nas seletivas e nos testes com seus jogadores. \nEnviando-nos as informações para processarmos em nossa plataforma. \nDesta maneira, os dados poderão ser analisados pela metodologia, gerando um relatório com qualidade Combine Brasil. Com base nisso o time poderá tomar novas diretrizes em relação as suas necessidades e estratégias.');   
});

$("#avaliacao").on("click", function(){
 $("h2#title-modal").text('Avaliação Interna');
  $("p#text-modal").text('Uma avaliação totalmente voltada pro futebol americano, separando as funcionalidades de cada posição dentro do seu time, gerando um comparativo entre jogadores da sua equipe e das demais equipes que utilizam da avaliação combine, assim cada resultado reflete a fidelidade ao apontar as condições dos seus jogadores comparadas ao nível nacional. Com isso a equipe poderá reorganizar as posições que mais combinam com cada característica física, e posteriormente realizar um reteste que apontará a evolução dos jogadores.');   
});

$("#seletiva").on("click", function(){
 $("h2#title-modal").text('Seletiva');
  $("p#text-modal").text('Nas regiões onde o Combine Brasil está presente, atuamos na organização, auxiliando na divulgação, aplicação de testes, captação de resultados automatizados e apresentação de relatórios finais, focando nas necessidades do time, prezando sempre a qualidade ao executar o serviço da seletiva.');   
});


$(document).scroll(function() {
  var st = $(this).scrollTop();
  $("#1").css({
    "background-position-y": (-st/20)
  })
  $("#2").css({
    "top": (-st/5),
    "bottom": (st/5)
  })
});


/*VISIBILITY*/

Visibility.onVisible(function(){
	setTimeout(function () {
		$(".introducao h1").addClass("animated fadeInUp");
	}, 400);
  setTimeout(function () {
		$(".introducao h2").addClass("animated fadeInUp");
	}, 400);
  
	setTimeout(function () {
		$(".introducao blockquote").addClass("animated fadeInUp");
	}, 800);
	setTimeout(function () {
		$(".introducao .btn").addClass("animated fadeInUp");
	}, 800);
  
 setTimeout(function () {
		$(".animar ").addClass("animated fadeInUp");
	}, 1600); 
 
	setTimeout(function () {
		$(".sobre ").addClass("animated fadeInUp");
	}, 1600);
 
 setTimeout(function () {
		$(".quem-somos").addClass("animated fadeInUp");
	}, 3000);
 
 setTimeout(function () {
		$(".titulo .animar").addClass("animated fadeInUp");
	}, 2000);
 
 
});

/*Formulario php */
$('.formulariophp').on('submit', function() {
	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
	
	that.find('[name]').each(function(index, value) {
		var that = $(this),
				name = that.attr('name'),
				value = that.val();
				
		data[name] = value;
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
         var resp = response;
		var verify = response.includes("Sucess");
			if( verify ) {
				$('.formulariophp').html("<div id='form-send'></div>");
				$('#form-send').html("<span>Mensagem enviada!</span><p>Obrigado por nos mandar suas informações e assim fortalecer o combine e o esporte no brasil!</p></center><h2> <br><button id='home' href='http://www.combinebrasil.com' class='btn''>Ir para o Combine</button>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-send');
				});
			} else if(verify==false){
			    $('.formulariophp').html("<div id='form-erro'></div>");
				$('#form-erro').html("<span>Ops... <p> Ocorreu um erro ao tentar enviar o formulário.</p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-erro');
				});
				
			};
		},
		error: function(response) {
			$('.formulariophp').html("<div id='form-erro'></div>");
			$('#form-erro').html("<span>Ops... <p> Ocorreu um erro ao tentar enviar o formulário.</p>")
			.hide()
			.fadeIn(1500, function() {
			$('#form-erro');  
		});
		}
	});	
	return false;
});

/*FORM PHP*/
$('.formphp').on('submit', function() {
	var emailContato = "contato@combinebrasil.com"; // Escreva aqui o seu e-mail

	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
	
	that.find('[name]').each(function(index, value) {
		var that = $(this),
				name = that.attr('name'),
				value = that.val();
				
		data[name] = value;
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
         var resp = response;
		var verify = response.includes("Sucess");
			if( verify ) {
				$('.formphp').html("<div id='form-send'></div>");
				$('#form-send').html("<span>Mensagem enviada!</span><p>Olá " + name + ", obrigado por entrar contato conosco, logo menos iremos responder sua mensagem!</p></center><h2>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-send');
				});
			} else if(verify==false){
			    $('.formphp').html("<div id='form-erro'></div>");
				$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-erro');
				});
				
			};
		},
		error: function(response) {
			$('.formphp').html("<div id='form-erro'></div>");
			$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
			.hide()
			.fadeIn(1500, function() {
			$('#form-erro');  
		});
		}
	});
	
	return false;
});


var simpleValidation = function(){

  var validateForm = $('form.formulariophp');

  // Gets all forms to Validate
  validateForm.each(function(){
    // Defining basic variables, bro
    var validateForm = $(this);
    var validate = {};
    var validateThis = $(this).find('.validate');
    var validatingLength = $(this).find('.validate').length;
    var submitBtn = $(this).find('.submit');

    // For Loop Getting Elements to Validate
    for(var i = 1; i <= validatingLength; i++){
      // Adding Inputs to object, false for default
      validate['input'+i] = false;
    }

    $('.validate').blur(function(){
      var index =  $(this).prevAll().length+1;
      var validateThisVal = $(this).val();
      var validateThisType = $(this).attr('type');

      // Checks if input type is email
      if(validateThisType === "email"){

        // Email regex
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // Condition to see if Email exists
        if(!validateThisVal.match(re)){
          $(this).addClass('not-valid');
          $(this).removeClass('is-valid');
          return validate['input'+index] = false;
        } else{
          $(this).addClass('is-valid');
          $(this).removeClass('not-valid');
          return validate['input'+index] = true;
        }
      } 
      else if(validateThisType === "date"){
        // Makes sure input is filled out
        if(validateThisVal == ""){
          $(this).addClass('not-valid');
          $(this).removeClass('is-valid');
          return validate['input'+index] = false;
        } else{
          $(this).addClass('is-valid');
          $(this).removeClass('not-valid');
          return validate['input'+index] = true;
        }
      }
      else{
        // Makes sure input is filled out
        if(validateThisVal == ""){
          $(this).addClass('not-valid');
          $(this).removeClass('is-valid');
          return validate['input'+index] = false;
        } else{
          $(this).addClass('is-valid');
          $(this).removeClass('not-valid');
          return validate['input'+index] = true;
        }
      }
    });


    validateForm.submit(function(event){
      // Prevents Default
      event.preventDefault();

      // Logging form errors
      var falseCtn = 0;
      for(var i = 1; i <= validatingLength; i++){
        if(validate['input'+i] == false){
          falseCtn++;
        }
      }

      // Checking if any falses exist
      if(falseCtn > 0){
        $(this).unbind('submit').submit();
        $(this).click();
      } else{
      }
    });

  });

};

simpleValidation();      


//Default active on home
$('#s1').addClass("active");


/*
Smooth scrolling
*/
$("#s1").click(function() {
     $('html, body').animate({
         scrollTop:        $("#1").offset().top-65
     }, 1000);
  return false;
 });

$("#s2").click(function() {
     $('html, body').animate({
         scrollTop:        $("#2").offset().top-100
     }, 1000);
  return false;
 });

$("#s3").click(function() {
     $('html, body').animate({
         scrollTop:        $("#3").offset().top-100
     }, 1000);
  return false;
 });

$("#s4").click(function() {
  $(this).addClass("active");
     $('html, body').animate({
         scrollTop:        $("#4").offset().top-100
     }, 1000);
  return false;
 });

$("#s5").click(function() {
  $(this).addClass("active");
     $('html, body').animate({
         scrollTop:        $("#5").offset().top-100
     }, 1000);
  return false;
 });

$("#s6").click(function() {
  $(this).addClass("active");
     $('html, body').animate({
         scrollTop:        $("#6").offset().top-100
     }, 1000);
  return false;
 });

$("#btn-link").click(function() {
  $(this).addClass("");
     $('html, body').animate({
         scrollTop:        $("#2").offset().top-100
     }, 1000);
  return false;
 });
/*$('#2').waypoint(function(event, direction) {

  $(".nav-container ul li").children().removeClass("active");
  $("#s2").addClass("active");
  
  if (direction === 'down') {
    offset = 90;
  } 
  else {
    offset = 20;
  }
});*/


/*
Using jquery waypoints to change active on scroll
*/
$('#2').waypoint(function() {

  $(".nav-container ul li").children().removeClass("active");
  $("#s2").addClass("active");
  
}, { offset: 101 });


$('#3').waypoint(function() {
  $(".nav-container ul li").children().removeClass("active");
  $("#s3").addClass("active");
}, { offset: 101 });

$('#4').waypoint(function() {
  $(".nav-container ul li").children().removeClass("active");
  $("#s4").addClass("active");
}, { offset: 101 });

$('#5').waypoint(function() {
  $(".nav-container ul li").children().removeClass("active");
  $("#s5").addClass("active");
}, { offset: 101 });

$('#6').waypoint(function() {
  $(".nav-container ul li").children().removeClass("active");
  $("#s6").addClass("active");
}, { offset: 101 });

$('#1').waypoint(function() {
  $(".nav-container ul li").children().removeClass("active");
  $("#s1").addClass("active");
}, { offset: 0 });

$('#2').waypoint(function() {
  $(".to-top").addClass("visible");
}, { offset: 100 });

$('#1').waypoint(function(event, direction) {
  $(".to-top").removeClass("visible");
}, { offset: 30 });


