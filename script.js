//alert('Доборо пожаловать на сайт оНяМеЧнИкОв когда-нибудь я сделаю это приветсткие нормальным а по что имеем - то имеем -_-')//
var isTrue = true
var isStar = true
function hide_up_nav(){
    var upper_nav = document.getElementById('border_navi')
    var set_other_hide = document.getElementById('set_hide_nav_to_end')
    if (isTrue){
        upper_nav.style['display'] = 'none'
        set_other_hide.innerHTML = "<div id='set_hide_nav_to_end'><button onclick = 'hide_up_nav()'>Показать верхнюю панель навигации  </button></div>"
        isTrue = false
    } 
    else{
        upper_nav.style['display'] = 'flex'
        set_other_hide.innerHTML = "<div id='set_hide_nav_to_end'><button onclick = 'hide_up_nav()'>Скрыть верхнюю панель навигации  </button></div>"
        isTrue = true
    } 
}
// ты пытался изсменять display звездочки через js (нихера не вышло)
//function show_star(){
//   var star = document.getElementsByTagName('body')
//   if (isStar){
//        star.style['background'] = 'red'
//        isStar = false
//    }
//    else{
//        star.style['background'] = 'blue'
//        isStar = true
//    }
//}
//