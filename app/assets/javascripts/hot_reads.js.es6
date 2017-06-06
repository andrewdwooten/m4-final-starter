$( document ).ready(function(){
  getHotReads()
})

function isHotRead(reads){
  var urls = Object.keys(reads)
  var links = $('.link')
  links.each(function(index){
    var link = $('.link').eq(index)
    var baseUrl = link.children().first().next().text().split(':')
    var url = (baseUrl[1] + ':' + baseUrl[2]).trim()
    if (urls.includes(url)){
      $(link).children().first().html(`<h2 class='hot-read'>HOT READ!!<h2>`)
    }
  })
  isTopRead(urls[0])
}

function isTopRead(topReadUrl) {
  console.log(topReadUrl)
  var links = $('.link')
  links.each(function(index){
    var link = $('.link').eq(index)
    var baseUrl = link.children().first().next().text().split(':')
    var url = (baseUrl[1] + ':' + baseUrl[2]).trim()
    if (topReadUrl === url){
      $(link).children().first().html('')
      $(link).children().first().html(`<h2 class='top-read'>Top Read!!</h2>`)
    }
  })
}
function getHotReads(){
  $.ajax({
    type: "GET",
    url: "https://sheltered-cliffs-80557.herokuapp.com/api/v1/hot_reads/",
  }).then(function(data){
    isHotRead(data)
  })
    .fail(displayFailure);
}
