var Links = {setcolor:function(color)
// { var list = document.querySelectorAll('a');
//   var i = 0 ;
//   while (i < list.length) {list[i].style.color = color; i = i + 1 ; } } }
{$('a').css('color',color);}}

var Body = {setcolor:function(color){$('body').css('color',color);}
 // {document.querySelector('body').style.color = color;}}

,setBackgroundColor:function(color){$('body').css('backgroundColor',color);}}
// {document.querySelector('body').style.backgroundColor = color; }}}


function nightday(best){
  var target = document.querySelector('body');
    if (best.value === 'night')
      { Body.setBackgroundColor('dimgrey') ;
        Body.setcolor('lightgrey') ;
      best.value = 'day';
  Links.setcolor('gray');}
    else
      { Body.setBackgroundColor('thistle') ;
        Body.setcolor('black') ;
      best.value = 'night' ;
    Links.setcolor('black'); } }
