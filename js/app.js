/*
Where's the Paper Towels?: A Shopping List App
By Chris Slaight, 2015
-app.js main JavaScript/jQuery logic for application
*/

//Main jQuery code to be fired upon page load completion
$(document).ready(function(){
	//Functionality to add new items to the list
	$('#add-item').submit(function(e){
		e.preventDefault(); //Prevents refresh
		var rawListValue = $('#list-value').val(); //Variable to hold input value
		var listValue = escapeHtml(rawListValue);
		if(listValue == new String(""))
		{
			//Intentionally blank, just to handle scenarios of blank input
		}
		else { //Perform add logic to follow
			//Build HTML for new li
			var listHTML = '<li class="red-item">' +  listValue +  '<br><a class="remove-item-link">Remove Item</a></li>'; 
			$('.shopping-list').prepend(listHTML); //Prepend list element to shopping list
			$('#list-value').val(''); //Clear out the form input
			$('#list-value').focus(); //Return focus to the input for better usability
		}

		flipBackgroundMessage(); //Calls method to add/remove 'remove all' button and 'no-items' text
	})


	//Functionality to remove list items
	$(document).on('click touchstart','.remove-item-link', function() {
		 $(this).closest('li').remove(); //Choose the closest list item and remove
		 //$('#list-value').focus(); //Return focus to the input for better usability

		 flipBackgroundMessage(); //Calls method to add/remove 'remove all' button and 'no-items' text
	})


	//Functionality to change colors for unchecked/checked
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


	$(document).on('click touchstart','.remove-all-link', function() {
		$('li').remove(); //Remove all li elements from the class

		flipBackgroundMessage(); //Calls method to add/remove 'remove all' button and 'no-items' text
	})


	//Function to escape HTML characters from input for added security and hardening
	function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 	}


 	//This function will determine the list of items and either 
 	//add/remove the display of the 'no items' and 'remove all' elements
 	function flipBackgroundMessage() {
 		var listSize = $('.shopping-list li').length; //Determine the length of the list for 'no items' text
		 if(listSize < 1)
		 {
		 	//If no list items, show message to add them and hide 'remove all' button
			$('.no-items').show();
			$('.remove-all-link').hide();
		 }
		 else
		 {
		 	//If items exist, hide message and show 'remove all' button
			$('.no-items').hide();
			$('.remove-all-link').show();
		 }
 	}
});

$(function() {
    $( ".shopping-list" ).sortable();
    $( ".shopping-list" ).disableSelection();
  });






