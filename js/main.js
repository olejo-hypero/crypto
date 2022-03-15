		$(document).ready(function() {
		    $('.top-header-lang').each(function(index) {
		        $(this).prev().addClass('collapsible').click(function() {
		            if ($(this).next().css('display') == 'none') {
		                $(this).next().slideDown(300, function() {
		                    $(this).prev().removeClass('collapsed').addClass('expanded');
		                });
		            } else {
		                $(this).next().slideUp(300, function() {
		                    $(this).prev().removeClass('expanded').addClass('collapsed');
		                    $(this).find('ul').each(function() {
		                        $(this).hide().prev().removeClass('expanded').addClass('collapsed');
		                    });
		                });
		            }
		            return false;
		        });
		    });
		});

		$(document).ready(function() {
		    $('.top-menu').each(function(index) {
		        $(this).prev().addClass('collapsible').click(function() {
		            if ($(this).next().css('display') == 'none') {
		                $(this).next().slideDown(300, function() {
		                    $(this).prev().removeClass('collapsed').addClass('expanded');
		                });
		            } else {
		                $(this).next().slideUp(300, function() {
		                    $(this).prev().removeClass('expanded').addClass('collapsed');
		                    $(this).find('ul').each(function() {
		                        $(this).hide().prev().removeClass('expanded').addClass('collapsed');
		                    });
		                });
		            }
		            return false;
		        });
		    });
		});