function procces_(data1){
    // console.log(data1)
    
}
function sites_api(){
  $.ajax(

    {
      url:'https://imdb-api.com/en/API/Top250Movies/k_4z92p35f',
      type:'GET',
      success: procces_
    }
  )

}

function setup(){
   // jQuery().load('sties_api');
   sites_api()
}

jQuery(document).ready(setup)
