$(document).ready(function(){



// new Vivus('game', {duration: 200, file: 'images/cross.svg'});

	


$(".field li").click(function(){

	var id = $(this).attr("id");
	
	var cross = new Vivus(id, {type: 'oneByOne',duration: 50,file: "images/cross.svg",
			onReady: function(){
				this.play();
			}
	});

})


});



