var tl = new TimelineMax();

 tl.fromTo('#top', 1, {width: 0}, {width: '100%', ease: Expo.easeInOut})
    .fromTo('#bottom', 1, {'margin-left': '100%'}, {width: '100%', ease: Expo.easeInOut, 'margin-left': 0}, '-=1')
    .fromTo('#navbotline', 1, {width: 0}, {width: '50%', ease: Expo.easeInOut, 'transform-origin':'center center'})
    .fromTo('#navitems', 2, {bottom: '-100%'}, { bottom: 0, ease: Expo.easeInOut}, '-=1')
    .fromTo('#maittle', 1, {top: '100%'}, { top: '62%', ease: Expo.easeInOut}, '-=1')
    .fromTo('#maittle-bottom', 1, {top: '-30%'}, { top: '-84px', ease: Expo.easeInOut}, '-=1')
    .fromTo('#myimg', 1, {opacity:0, transform: 'scale(1.1)'}, { opacity: 1, transform: 'scale(1)', ease: Expo.easeInOut}, '-=1')
    .fromTo('#play', 2, {opacity: 0}, { opacity: 1, ease: Expo.easeInOut})