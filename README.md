goldenlineheight
================

Works like fittext, creates a golden line height for selected elements

Usage:

Include the library after jquery.

Initiate the plugin like fit text

  $('p').goldenLineHeight(compressorvalue); // compressor's default 1

compressor is multiplied by the product of the equation, if you want more than the golden line-height, perhaps by font-family, pass an option.

$('p').goldenLineHeight(1.1);

Caution:  only works with pixel font sizes currently, will add alternate versions in the future.



Acknowledgments:
The equation is from @pearsonified 's article on line height and golden ratio.  Thanks @pearsonified
JS structure and usage was forked from and based on fittext.js - thanks @davatron5000

