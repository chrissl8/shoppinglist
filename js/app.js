$(document).ready(function(){
	//Functionality to add new items to the list
	$('#add-item').submit(function(e){
		e.preventDefault(); //Prevents refresh
		var listValue = $('#list-value').val(); //Variable to hold input value
		if(listValue == new String(""))
		{
			//Just to catch lack of input, form is required so this is a second level of validation
		}
		else { //Perform add logic to follow
		var listHTML = '<li class="red-item">' +  listValue +  '<br><a class="remove-item-link">Remove Item</a></li>'; //Build HTML for new li
		$('.shopping-list').prepend(listHTML); //Prepend list element to shopping list
		$('#list-value').val(''); //Clear out the form input
		$('#list-value').focus(); //Return focus to the input for better usability
		}

		var listSize = $('.shopping-list li').length; //Determine the length of the list for 'no items' text
		 if(listSize < 1)
		 {
		 	//If no list items, show message to add them
			$('.no-items').show();
		 }
		 else
		 {
		 	//If items exist, hide message
			$('.no-items').hide();
		 }
	})

	$(document).on('click touchstart','.remove-item-link', function() {
		//Functionality to remove list items
		 $(this).closest('li').remove(); //Choose the closest list item and remove
		 //$('#list-value').focus(); //Return focus to the input for better usability

		 var listSize = $('.shopping-list li').length; //Determine the length of the list for 'no items' text
		 if(listSize < 1)
		 {
		 	//If no list items, show message to add them
			$('.no-items').show();
		 }
		 else
		 {
		 	//If items exist, hide message
			$('.no-items').hide();
		 }
	})

	$(document).on('click touchstart','.list-items li',function() {
		
		 if($(this).closest('li').is('.red-item'))
		 {
		 	//If current item is red, do the following
		 	$(this).removeClass('green-item').addClass('red-item');
    		$(this).toggleClass('green-item red-item');
		 }
		 else if($(this).closest('li').is('.green-item'))
		 {
		 	//If current item is green, do the following
		 	$(this).removeClass('red-item').addClass('green-item');
    		$(this).toggleClass('red-item green-item');
		 }
		
	})
});






