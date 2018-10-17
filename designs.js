// Select color input
// Select size input
let hight = $('#input_height');
let width = $('#input_width');
let tColor = $('#colorPicker');
let table = $('#pixel_canvas');
// When size is submitted by the user, call makeGrid()

$('#subButton').on('click',function() {
	
	
	table.children().remove();
	width.on('change',function(){
		let newWidth;
		newWidth= $(this).val();
		$(this).attr('value',newWidth);
	});
	hight.on('change',function(){
		let newHight;
		newHight= $(this).val();
		$(this).attr('value',newHight);

	});
	
	for (let i =0 ; i<hight.val() ; i++){
		table.append('<tr id='+i+'></tr>');
	}
	for (let j = 0; j < width.val(); j++) {
		$('tr').append('<td id='+j+'></td>');
	}
});

tColor.on('change',function(){   //changing the color
	let newColor = tColor.val();
});

table.on('click','td',function(){    // controlling the click event
	let newColor = tColor.val();
	$(this).addClass('selected');
	$('.selected').css('background-color',newColor);
	$('.selected').toggleClass();       //this line will allow using multi colors in the canvas

});
table.on('dblclick','td',function(){   //double click will remove the color in the selected cell
	$(this).removeClass('selected');
	$(this).removeAttr('style');
});

