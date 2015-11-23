;(function(){
	//obj draw
	var draw = {
		status: "крестики", //start draw with cross

		drawFigure: function(id){

			if(this.status == "нолики"){
				new Vivus(id, {type: 'oneByOne',duration: 50,file: "images/ellipse.svg"});
				this.status = "крестики";
			}else{
				new Vivus(id, {type: 'oneByOne',duration: 50,file: "images/cross.svg"});
				this.status = "нолики";
			}
			
		}

	};

	var field = {
		arr: [[0,0,0],[0,0,0],[0,0,0]],

		writeArr: function(self,value){
			this.arr[$(self).data("row")][$(self).data("col")] = value;
		},
		isWin: function(value){

			if( this.arr[0][0] == value && this.arr[0][1] == value && this.arr[0][2] == value ||
					this.arr[1][0] == value && this.arr[1][1] == value && this.arr[1][2] == value ||
					this.arr[2][0] == value && this.arr[2][1] == value && this.arr[2][2] == value ||
					this.arr[0][0] == value && this.arr[1][0] == value && this.arr[2][0] == value ||
					this.arr[0][1] == value && this.arr[1][1] == value && this.arr[2][1] == value ||
					this.arr[0][2] == value && this.arr[1][2] == value && this.arr[2][2] == value ||
					this.arr[0][0] == value && this.arr[1][1] == value && this.arr[2][2] == value ||
					this.arr[2][0] == value && this.arr[1][1] == value && this.arr[0][2] == value )
			{
					return value;
			}

		},
		isTie : function(){

			var tie = true;

			for( var i = 0; i < this.arr.length; i ++){
				for( var j = 0; j < this.arr.length; j++){
						if(this.arr[i][j] == 0){
							var tie = false;
							return tie;
						}
				}
			}

			return tie;
		},

		reset: function(){
			for( var i = 0; i < this.arr.length; i ++){
				for( var j = 0; j < this.arr.length; j++){
						this.arr[i][j] = 0;
				}
			}

			$(".field li").each(function(){
				$(this).html("");
			});

			draw.status= "крестики";
		}
	};

	$(document).ready(function(){

		$(".field li").click(function(){

			var id = $(this).attr("id");
			var figure = draw.status;
			draw.drawFigure(id);
			field.writeArr( this, figure);

			if(field.isTie()){
				$(".text-winner").text("Ничья");
				$(".field").addClass('active');
			}

			if( field.isWin(figure) ){

				$(".text-winner").text("Победили " + figure);
				$(".field").addClass('active');
			}

		});

		$("#reset").click(function(){
			field.reset();
			$(".text-winner").html("");
			$(".field").removeClass('active');
		});

	});

})();



