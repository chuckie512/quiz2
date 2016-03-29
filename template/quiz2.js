


(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.



	$mouseover = $('.mouse-over');
	$click     = $('.click');
	$sub       = $('.submit');
    $button    = $('.button');


	//on mouse over
	$mouseover.mouseover( function() {

		$this = $(this);
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50); //why would you make it bigger every time!?!??!?!?!?!?!?
	});

	//onclick
	$click.click( function() {

        $this = $(this);
		$(this).html('Peace Out!');
		$(this).fadeOut(1500);
		return false;
	});

	//on submit
	$sub.submit( function(e) {

		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {


			$(this).find('input').fadeOut('slow');

			$(this).append('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

    $button.click(function(){
        if($(this).html()=="Get title") {
            $(this).html('change it');
            //$(".content").hide();
            $(".part2").append("<button class='keep'>keep it</button>");
            $(".keep").click(function(){

                document.cookie="text="+$(".response").html();

            });
        }
        var xhttp = new XMLHttpRequest();
        var data = "quizData";
        xhttp.onreadystatechange = function() {
            if(xhttp.readyState==4) {

                var response = JSON.parse(xhttp.responseText);
                var arr = response.data;
                var num = Math.floor((Math.random() * arr.length));
                $(".response").html(arr[num]);
            }
        };
        xhttp.open("GET", "http://www.mattbowytz.com/simple_api.json?data=" + data, true);
        xhttp.send();
    });



	//on ready
	$(document).ready( function() {
        if(document.cookie != null) {
            $(".response").html("last time you chose <b>" + document.cookie.substring(5) + "</b>");
        }
        $(".timeout").hide();
		setTimeout( function(){$(".timeout").fadeIn('slow');
        }, 1000);
    });

})(jQuery);

