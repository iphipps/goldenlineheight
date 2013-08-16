/*global jQuery */
/*!
* GoldenLineHeight.js .9
*
* Copyright 2013, iphipps, ianmphipps.com
* Forked from fittext.js - thanks davatron5000
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: August 15, 2013
*/

(function( $ ){


  $.fn.goldenLineHeight = function( kompressor ) {


    var compressor = kompressor || 1;

    return this.each(function(){

      // Store the object
      var $this = $(this);

  
			var goldenCalc = function( fsize, wwidth ){
					var golden = 1.6180339887;
					var glf = 1 / ( 2 * golden );
					goldenfont = fsize * golden;
					var lineHeight = golden - glf * ( 1 - ( wwidth / ( ( goldenfont ) * ( goldenfont ) ) ) ); 
					return parseFloat(lineHeight.toFixed(2))*compressor;
			}
			//get width of element
      var widther = $this.width();
      //get font size of element
      var fonter = $this.css('fontSize');
			var fonter = fonter.slice(0,-2);
			var fonter = parseFloat(fonter);

			var goldenLines = function(){
				$this.css( 'line-height', goldenCalc(fonter, widther) );


			}
		goldenLines();




      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.goldenLineHeight orientationchange.goldenLineHeight', goldenLines);

    });

  };



})( jQuery );