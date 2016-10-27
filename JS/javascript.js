$(document).ready(function() {
	$( '.mobile-menu' ).click( function() {
		$( '.mobile-menu-options' ).slideToggle();

	})

$(window).resize(function() {
    var width = $(document).width();
    if (width > 480) {
      $( '.mobile-menu-options' ).css( 'display', 'none' );
    }
  });

});

