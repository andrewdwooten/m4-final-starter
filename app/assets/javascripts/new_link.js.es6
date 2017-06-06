$( document ).ready(function(){
  $('#add-link-button').on("click", createLink)

})

function createLink(){
  var url = $('input[name=url]').val()
  var title = $('input[name=title]').val()
  $.post("/api/v1/links", {link: {url: url, title: title}}).then((data) =>{
    if( data.url){
      displayLink(data)
    }
    else {
      displayErrors(data)
    }
  })
}

function displayLink(link){
  $('#links').prepend(`<div class='link unread' align='center'><p>URL:<a href=${link.url}>${link.url}
                      </a></p><p>Title: ${link.title}</p>
                      <p>Read: ${link.read}</p>
                      <form class='button_to' method='get' action="/links/${link.id}/edit">
                      <input type="submit" value="Edit ${link.title}">
                      </form>
                      <button class='change-read-button' data-read-status='${link.read}' data-id='${link.id}'>Mark as Read</button>`)
}

function displayErrors(errors){
  $('.alert').html('')
  errors.forEach(function(error) {
    $('body').prepend(`<div class='alert'>
                        <h3>${error}</h3>
                      </div>`)
  })
}
