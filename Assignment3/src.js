
click1 = function(){
  var imageUrl = jQuery(this).attr('src');
  jQuery('#mainImage').attr('src',imageUrl);
}

setup = function() {
jQuery('#divContainer img').on('click', click1)
}

jQuery(document).ready(setup)
