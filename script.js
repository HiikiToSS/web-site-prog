//alert('Доборо пожаловать на сайт оНяМеЧнИкОв когда-нибудь я сделаю это приветсткие нормальным а по что имеем - то имеем -_-')//
var isTrue = true
var isTrue2 = true
function hide_up_nav(){
  var upper_nav = document.getElementById('border_navi')

if (isTrue2){
  var set_other_hide = document.getElementById('set_hide_nav_to_end')
  set_other_hide.innerHTML = "<div id='set_hide_nav_to_end'><button onclick = 'hide_up_nav()'>Показать верхнюю панель навигации  </button></div>"
  isTrue2 = false
}
else{
  //Ты пытался сделать изменение надписи при скрытии верхней панельки навигации
}

  if (isTrue){
    upper_nav.style['display'] = 'none'
    isTrue = false
    
  } 
  else{
    upper_nav.style['display'] = 'flex' 
    isTrue = true
  } 
}