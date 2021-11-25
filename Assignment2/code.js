add = function() {
    x = parseInt(jQuery('#OP1').val());
    y = parseInt(jQuery('#OP2').val());
    // alert(x + y) //now, adition not concatenation anymore

    z = x + y
    valu = '<span>' + x  + ' + ' + y +  ' = ' + z + '<button id ="delete">delete</button>' + '<br>' + '</span>';
    jQuery('#result').append(valu);
}
subtract = function() {
    x = parseInt(jQuery('#OP1').val());
    y = parseInt(jQuery('#OP2').val());
    // alert(x + y) //now, adition not concatenation anymore
    z = x - y // processing
    valu = '<span>' + x  + ' - ' + y +  ' = ' + z + '<button id ="delete">delete</button>' + '<br>' + '</span>';
    jQuery('#result').append(valu);
}
multiply = function() {
    x = parseInt(jQuery('#OP1').val());
    y = parseInt(jQuery('#OP2').val());
    // alert(x + y) //now, adition not concatenation anymore
    z = x * y // processing
    valu = '<span>' + x  + ' * ' + y +  ' = ' + z + '<button id ="delete">delete</button>' + '<br>' + '</span>';
    jQuery('#result').append(valu);
}
divide = function() {
    x = parseInt(jQuery('#OP1').val());
    y = parseInt(jQuery('#OP2').val());
    // alert(x + y) //now, adition not concatenation anymore
    z = x / y // processing
    valu = '<span>' + x  + ' / ' + y +  ' = ' + z + '<button id ="delete">delete</button>' + '<br>' + '</span>';
    jQuery('#result').append(valu);
}
power = function(){
  x = parseInt(jQuery('#OP1').val());
  y = parseInt(jQuery('#OP2').val());
  let exp = 1;
    for (let i = 1; i <= y; i++)
    {
      exp = exp*x;
    }
  valu = '<span>' + x  + ' to the power ' + y +  ' = ' + z + '<button id ="delete">delete</button>' + '<br>' + '</span>';
  jQuery('#result').append(valu);
}

show1 = function(){
  jQuery('#result').show();
}
hide1 = function(){
  jQuery('#result').hide();
}
delete1 = function(){
  jQuery(this).parent().hide();
}


setup = function() {
    jQuery('#trigger_the_add').click(add)
    jQuery('#trigger_the_divide').click(divide)
    jQuery('#trigger_the_multiply').click(multiply)
    jQuery('#trigger_the_subtract').click(subtract)
    jQuery('#trigger_the_hide').click(hide1)
    jQuery('#trigger_the_show').click(show1)
    jQuery("#trigger_the_power").click(power)
    jQuery('body').on('click', '#delete', delete1)
}

jQuery(document).ready(setup)
