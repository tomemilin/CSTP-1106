function procces_(){
    console.log('#div1')
}
function sites_api(){
  $.ajax(

    {
      url:'https://imdb-api.com/en/API/Top250Movies/k_12345678',
      type:'GET',
      success: procces_
    }
  )

}

function setup(){
   jQuery().load('sties_api');
}

jQuery(document).ready(setup)
