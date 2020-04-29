(function($) {

/*INPUT FORM*/

	var form  = $('#add-form');
	    input = form.find('#text');


	    // klikne zpět do textarey a vymaže předchozí hodnotu
	    input.val('')
	    	    .focus();

		// znemožnění odeslání formuláře přes php tlačítkem
	    form.on('submit', function(event) {
		    event.preventDefault();

		    var req = $.ajax({
			    url: form.attr('action'),
			    type: 'POST',
			    data: form.serialize()
			});

			req.done(function(data) {
				if ( data === 'success') {
					$.ajax({ url: '/todoapp' }).done(function(html) {
						var newItem = $(html).find('li:last-child');

						newItem.appendTo('.list-group')
							.css({ backgroundColor: '#00bc8c' })
							.animate({ backgroundColor: '#303030' });

						input.val('');

					});
			}
		});
	});

	//fce na odeslání formuláře klávesou enter
	form.on('keypress', function(event){
		if(event.which === 13 ) {
			form.submit();
			return false;
		}
	});

/*EDIT FORM*/
$('#edit-form').find('#text').select();




/*DELETE FORM*/
$('#delete-form').on('submit', function() {
	return confirm('Opravdu chceš smazat item?');
});

}(jQuery));