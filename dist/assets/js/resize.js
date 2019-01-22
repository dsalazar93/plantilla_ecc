var pageWidth, pageHeight;

var basePage = {
  width: 1366,
  height: 768,
  scale: 1,
  scaleX: 1,
  scaleY: 1
};

function getPageSize() {
  pageHeight = document.querySelector('#container').clientHeight
  pageWidth = document.querySelector('#container').clientWidth
}

function scalePages(page, maxWidth, maxHeight) {            
  var scaleX = 1, scaleY = 1;                      
  scaleX = maxWidth / basePage.width
  scaleY = maxHeight / basePage.height
  basePage.scaleX = scaleX
  basePage.scaleY = scaleY
  basePage.scale = (scaleX > scaleY) ? scaleY : scaleX

  var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth)/2));
  var newTopPos = Math.abs(Math.floor(((basePage.height * basePage.scale) - maxHeight)/2));

  page.setAttribute('style', '-webkit-transform:scale(' + basePage.scale + ');left:' + newLeftPos + 'px;top:' + newTopPos + 'px;');
}

var $page = document.querySelector('.page_content')

//using underscore to delay resize method till finished resizing window
window.addEventListener('resize', function (){
  getPageSize()
  scalePages($page, pageWidth, pageHeight)
})