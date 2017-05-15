window.onload = function () {
  let doc = document.body
  let touchStartPoint = {}
  let docScrollTop
  window.onscroll = function () {
    let navbar = document.getElementsByClassName('navbar')[0]
    let navbarHidden = document.getElementsByClassName('navbarHidden')[0]
    if(doc.scrollTop > 55){
      navbar.style.position = 'fixed'
      navbar.style.top = '0'
      navbar.style["z-index"] = 1
      navbarHidden.style.display = 'block'
      navbarHidden.style["z-index"] = 0
      navbarHidden.style['line-height'] = '1.2em'
      navbarHidden.style['padding'] = '0.8em 0'
    }
    if(doc.scrollTop < 55){
      navbar.style.position = 'relative'
      navbarHidden.style.display = 'none'
    }
  }
  doc.addEventListener('touchstart', function (e) {
    touchStartPoint.y = e.changedTouches[0].pageY
    docScrollTop = doc.scrollTop
  }, false)
  doc.addEventListener('touchmove', function (e) {
    if(doc.scrollTop - docScrollTop > 5){
      let tabbar = document.getElementsByClassName('tabbar')[0]
      tabbar.style.transform = 'translateY(100%)'
      tabbar.style.transition = 'all .3s'
    }
    else if(doc.scrollTop - docScrollTop < 0) {
      let tabbar = document.getElementsByClassName('tabbar')[0]
      tabbar.style.transform = 'translateY(0)'
      tabbar.style.transition = 'all .3s'
    }
  }, false)
}