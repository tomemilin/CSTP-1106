function procces_(data){
  jQuery(body).html(data.TitleData.Title)
}

function ajax_get(){
    title = jQuery('#titles').val()
    $.ajax(
      {
        url:`https://imdb-api.com/en/API/${title}/k_4z92p35f/tt1375666`,
        type:'GET',
        success: procces_
        }
     )
  }

function setup(){
  jQuery('#titles').click(ajax_get);
}
jQuery(document).ready(setup)
