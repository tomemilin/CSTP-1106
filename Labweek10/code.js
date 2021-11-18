add = function() {
    x = parseInt(jQuery("#OP1").val());
    y = parseInt(jQuery("#OP2").val());
    // alert(x + y) //now, adition not concatenation anymore
    z = x + y
    jQuery('#result').append( x  + " + " + y +  " = " + z + "<br>" );
}
subtract = function() {
    x = parseInt(jQuery("#OP1").val());
    y = parseInt(jQuery("#OP2").val());
    // alert(x + y) //now, adition not concatenation anymore
    z = x - y // processing
    jQuery('#result').append( x  + " - " + y +  " = " + z + "<br>" );
}
multiply = function() {
    x = parseInt(jQuery("#OP1").val());
    y = parseInt(jQuery("#OP2").val());
    // alert(x + y) //now, adition not concatenation anymore
    z = x * y // processing
    jQuery('#result').append( x  + " x " + y +  " = " + z + "<br>" );
}
divide = function() {
    x = parseInt(jQuery("#OP1").val());
    y = parseInt(jQuery("#OP2").val());
    // alert(x + y) //now, adition not concatenation anymore
    z = x / y // processing
    jQuery('#result').append( x  + " / " + y +  " = " + z + "<br>" );
}
show1 = function(){
jQuery('#result').show();
}
hide1 = function(){
jQuery('#result').hide();
}

setup = function() {
    jQuery('#trigger_the_add').click(add)
    jQuery('#trigger_the_divide').click(divide)
    jQuery('#trigger_the_multiply').click(multiply)
    jQuery('#trigger_the_subtract').click(subtract)
    jQuery('#trigger_the_hide').click(hide1)
    jQuery('#trigger_the_show').click(show1)
}

jQuery(document).ready(setup)
