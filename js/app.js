$(document).ready(function(){

	$('#add-item').submit(function(e){
		e.preventDefault(); //Prevents refresh
		var listValue = $('#list-value').val();
		if(listValue == new String(""))
		{

		}
		else {
		var listHTML = '<li class="red-item">' +  listValue +  '<br><a class="remove-item-link">X</a></li>';
		$('.shopping-list').prepend(listHTML); //Add list element
		$('#list-value').val('');
		$('#list-value').focus();
		}
	})

	$(document).on('click','.remove-item-link', function() {
		 $(this).closest('li').remove();
		 $('#list-value').focus();
		 var listSize = $('.shopping-list li').length;
		 if(listSize < 1)
		 {
		 	//$('.click-to-check').hide();
			$('.no-items').show();
		 }
		 else
		 {
			$('.no-items').hide();
			//$('.click-to-check').show();
		 }
	})
});