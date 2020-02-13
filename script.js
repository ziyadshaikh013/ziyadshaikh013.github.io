var tl = new TimelineMax();

 tl.fromTo('#top', 1, {width: 0}, {width: '100%', ease: Expo.easeInOut})
    .fromTo('#bottom', 1, {'margin-left': '100%'}, {width: '100%', ease: Expo.easeInOut, 'margin-left': 0}, '-=1')
    .fromTo('#navbotline', 1, {width: 0}, {width: '50%', ease: Expo.easeInOut, 'transform-origin':'center center'})
    .fromTo('#navitems', 2, {bottom: '-100%'}, { bottom: 0, ease: Expo.easeInOut}, '-=1')
    .fromTo('#maittle', 1, {top: '100%'}, { top: '62%', ease: Expo.easeInOut}, '-=1')
    .fromTo('#maittle-bottom', 1, {top: '-30%'}, { top: '-84px', ease: Expo.easeInOut}, '-=1')
    .fromTo('#myimg', 1, {opacity:0, transform: 'scale(1.1)'}, { opacity: 1, transform: 'scale(1)', ease: Expo.easeInOut}, '-=1')
    .fromTo('#play', 2, {opacity: 0}, { opacity: 1, ease: Expo.easeInOut});


var play = document.querySelector('#play');

play.addEventListener('click', function(){
   var tl2 = new TimelineMax();
   tl2.fromTo('#layer1', 1 , {left: '100%'}, {left: 0, ease: Expo.easeInOut})
      .fromTo('#leftline', 1, {height: 0}, {height: '35%'})
      .fromTo('#rightbar', 1, {width: 0}, {width: '15%'}, '-=1')
      .fromTo('#modelimage img', 1, {bottom: '100%'}, {bottom: 0, ease: Expo.easeIn}, '-=1')
      .fromTo('#textdets', 1, {opacity: 0, left: '20%'}, {left: '42%', opacity: 1, ease: Expo.easeInOut});

});

document.querySelector('#naigateback i, p').addEventListener('click', function(){
   var tl3 = new TimelineMax();
   tl3.fromTo('#layer1', 1 , {left: 0}, {left: '100%', ease: Expo.easeInOut});
})
document.querySelector('#naigateback p').addEventListener('click', function(){
   var tl4 = new TimelineMax();
   tl4.fromTo('#layer1', 1 , {left: 0}, {left: '100%', ease: Expo.easeInOut});
})
  