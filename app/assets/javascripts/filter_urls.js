$( document ).ready(function(){
    $('input[name=filter-input]').on('keyup', filterLinks)
    $('#hide-unread-links-button').on('click', hideUnreadLinks)
    $('#hide-read-links-button').on('click', hideReadLinks)
})

function filterLinks(){
  var links = $('.link')
  links.each(function(index){
    var link = $('.link').eq(index)
    var url = link.children().first().next().text().toLowerCase()
    var title = link.children().first().next().next().text().toLowerCase()
    var queryString = $('input[name=filter-input]').val().toLowerCase()
    if (!url.includes(queryString) || !title.includes(queryString)){
      link.hide()
    }
    else{
      link.show()
    }
  })
}

function hideUnreadLinks(){
  showAllLinks()
  var links = $('.link.unread')
  links.each(function(index){
    $('.link.unread').eq(index).hide()
  })
}

function hideReadLinks(){
  showAllLinks()
  var links = $('.link.read')
  links.each(function(index){
    $('.link.read').eq(index).hide()
  })
}

function showAllLinks(){
  var links = $('.link')
  links.each(function(index){
    $('.link').eq(index).show()
  })
}
