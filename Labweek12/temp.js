function procces_(data){
  jQuery('#city_temperature').html(data.main.temp)
}

function ajax_get(){
  city_name_input = jQuery('#city_name_input').val()
    $.ajax(
      {
        url:`https://api.openweathermap.org/data/2.5/weather?q=${city_name_input}&appid=b660f3402c54cb9a9c48f89c35249e5c&units=metric`,
        type:'GET',
        success: procces_
        }
     )
  }

function setup(){
  console.log('set up () got called')
  $('#get_temperature_button').click(ajax_get);
}
$(document).ready(setup)
