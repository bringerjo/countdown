(function main(){

$(".btn--start").click (function(){
	var countS = $(".inputS").val();
	var counterS = setInterval (timer, 1000);

	function timer(){
		countS = countS-1;
		$(".box--S p").html(countS);
		if (countS == 0){
			clearInterval (counterS);
		};//Fin if ....
	};//Fin fonction timer	

	$(".btn--stop").click (function(){
		clearInterval (counterS);
	}); //Fin .click stop

	$(".btn--restart").click (function(){
		counterS = setInterval (timer, 1000);
	});//Fin .click restart

	$(".btn--reset").click (function() {
		$(".box--S p").html("");
		clearInterval (counterS);
	});//Fin .click reset

});//Fin .click btn1 start	

})();//fin fonction main