// Select
$(function() {
	$('.slct').click(function(){
		var dropBlock = $(this).parent().find('.drop');

		if( dropBlock.is(':hidden') ) {
			dropBlock.slideDown(100);

			$(this).addClass('active');
			$('.drop').find('li').click(function(){
				var selectResult = $(this).html();
				$(this).parent().parent().find('input').val(selectResult);
				$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

				dropBlock.slideUp(100);
			});
		
		} else {
			$(this).removeClass('active');
			dropBlock.slideUp(100);
		}

		return false;
	});
});

$(function() {
	$('.main-slct').click(function(){
		var dropBlock = $(this).parent().find('.drop');

		if( dropBlock.is(':hidden') ) {
			dropBlock.slideDown(100);

			$(this).addClass('active');
			$('.drop').find('li').click(function(){
				var selectResult = $(this).html();
				$(this).parent().parent().find('input').val(selectResult);
				$(this).parent().parent().find('.main-slct').removeClass('active').find('span').html(selectResult);

				dropBlock.slideUp(100);
			});
		
		} else {
			$(this).removeClass('active');
			dropBlock.slideUp(100);
		}

		return false;
	});
});

$(document).mouseup(function (e) {
    var container = $(".drop");
    if (container.has(e.target).length === 0){
        container.slideUp(100);
        $('.slct').removeClass('active');
    }
});