$(function () {
	$('.nav-bars').click(function () {
		$('#modal').addClass('show');
	});
	$('.close').click(function() {
		$('#modal').removeClass('show')
	})
})

$(function () {
	$('.btn').click(function () {
		$('#modal2').addClass('show');
	});
	$('.close').click(function() {
		$('#modal2').removeClass('show')
	})
})


$(function () {
   $('.scrollup').click(function() {
   $('html, body').scrollTop(0);
  })

});


// $(window).scroll(function() {
//   if ($(this).scrollTop() > 300) {
//     $('.scrollup').fadeIn();
//   }
//   else {
//     $('.scrollup').fadeOut();
//   }
// });