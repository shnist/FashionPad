	
        
        // Swipe left and right between pages

        $('.swipe').live("swipeleft", function(event){
            //console.log($(event.target).parents('.hot-items').length)
            //if ($(event.targer).parents('.hot-items').length !== 0){
            //    
            //    
            //}
            var classArray = $(event.target).prop('class').split(' ');
            if (classArray.length > 2){
                var firstItem = classArray[0],
                    secondItem = classArray[1];
            }
                
            if(firstItem === 'hot-items'){
                if (secondItem === 'left'){
                    
                    
                } else {
                    
                    
                }
            } else {
                if($('.ui-page-active').prop('id') !== '7'){
                    var nextPageNumber = Number($('.ui-page-active').attr('id')) + 1;
                    var nextPage = 'page-' + nextPageNumber + '.shtml';
                
                    $.mobile.changePage(nextPage, 'slide');
                }
            }
        });
        

	$('.swipe').live("swiperight", function(event){
            if ($(event.target).parents('.hot-items').length !== 0 || $(event.target).hasClass('.hot-items')){
                var target;
                if($(event.target).parents('.hot-items').length !== 0){
                    target = $(event.target).parents('.hot-items');
                } else {
                    target = $(event.target);
                }
                
                var classArray = target.prop('class').split(' ');
                if (classArray.length > 2){
                    var firstItem = classArray[0];
                }
                
                if(target.parents('.hot-items-col1').length !== 0){
                   if(target.siblings('.hot-box')){
                        target.siblings('.hot-box').css({left: 0})
                    
                   } else if (target.children('.hot-box')){
                        target.children('.hot-box').css({left: 0})
                    
                   }
                   
                   
                }                    
      
            } else {
                if($('.ui-page-active').prop('id') !== '1'){
                    var prevPageNumber = Number($('.ui-page-active').attr('id')) - 1;
                    var prevPage = 'page-' + prevPageNumber + '.shtml';
    
                    $.mobile.changePage(prevPage, {transition: 'slide', reverse: true});
                }  
            }

	});


        
        /**
         * Function that controls navigation icon
         */
        function applier (page) {

            twitterfeed(page.find('.twitter-feed'));
			// carousel must be started before navigation
			carousel(page.find('.navigation-viewer'));
			navigation(page.find('.navigation-bar'));
			navigationviewer(page.find('.navigation-viewer'));
			//twitter(page.find('.twitter-share'));
			navigationhold(page.find('.content'));
        }
		
		/**
		 * Function carousel
		 * Applies a carousel to the navigation viewer
		 */
		function carousel(element){
			if (element.length > 0){
				// add the arrows
				$(element).children('ul').before('<img src="images/icon_viewer_arrow_left" alt="Left arrow" class="navigation-arrow-left">')
				.after('<img src="images/icon_viewer_arrow_right.png" alt="Right arrow" class="navigation-arrow-right">')
				// wrap the ul
				.wrap('<div class="carousel-wrapper"></div>');
				
				// initialise carousel
				$('.carousel-wrapper').children('ul').carouFredSel({
					items: 6,
					scroll : {
						items: 1,
						wipe: true
					},
					prev : {
						button: $(element).children('.navigation-arrow-left')
					},
					next : {
						button: $(element).children('.navigation-arrow-right')
					},
					auto:{
						play:false
					}
				});
			}
		}
        
        /**
         * Function that controls the navigation
         */
        function navigation (element) {
      
            if (element.length !== 0){
                // first hide the navigation bar
                $('.navigation-bar, .navigation-bar-top').hide();
                
                // Show/hide navigation on a tap
				$('.navigation-button').unbind('tap');
                $('.navigation-button').tap(function() {
                    $('.navigation-bar, .navigation-bar-top').toggle('fast', function() {
                    });
                });    
            }
        }
		
		/**
		 * Navigation Hold
		 * Navigation shows when users tap holds on the page
		 */
        function navigationhold (element) {
            if (element.length !== 0){
                // Show/hide navigation on a tap
                $(element).taphold(function() {
                    $('.navigation-bar, .navigation-bar-top').toggle('fast', function() {
                    });
                });  
            }     
        }
        
		
        function navigationviewer (element) {
      
            if (element.length !== 0){
                // first hide the navigation bar
                $('.navigation-viewer').hide();
                
                // Show/hide navigation on a tap
                $('.navigation-viewer-button').tap(function() {
                    $('.navigation-viewer').toggle('fast', function() {
                    });
                });    
            }
        }
        
           
        //neatTweet 1.2 by http://andygrn.co.uk
        function twitterfeed (element) {
            if (element.length !== 0){
                neatTweet.setup({
                    id : 'tweetz',
                    hashtag : 'FashionNews',
                    count : 5
                });
            }
        }
        
            

    /**
     * Runs applier every time a page is loaded
     */
    $(document).bind('pageload', function(event, data){
        event.preventDefault();
        var pages = $('.ui-page');
            
        applier($(pages[pages.length-1]));

        
    });
    
    /**
     * Runs applier on the first page load
     */
    $(document).ready(function(){
        applier($('body'));   
    });