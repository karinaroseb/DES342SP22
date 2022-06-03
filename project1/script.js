var audio
$(document).ready
audio = $('.audioDemo')
addEventHandlers()

function addEventHandlers() {
  $('a.load').click(loadAudio)
  $('a.start').click(startAudio)
  $('a.pause').click(pauseAudio)
  $('a.stop').click(stopAudio)
}

function loadAudio() {
  audio.bind('load', function () {
    $('.alert-success').html('Audio Loaded succesfully')
  })
  audio.trigger('load')
}

function startAudio() {
  audio.trigger('play')
}

function pauseAudio() {
  audio.trigger('pause')
}

function stopAudio() {
  pauseAudio()
  audio.prop('currentTime', 0)
}

//page close animation

var tl = new TimelineMax({
  repeat: 0,
  yoyo: false
})

// tl.to('.animated-rectangle', 1.5, {
//   scaleY: 0,
//   transformOrigin: '100% 0%',
//   duration: 7
// })

// tl.to('.wave-top', 1.5, {
//   scaleY: 0,
//   transformOrigin: '100% 0%',
//   duration: 7
// })

// $('.closeButton').click(function (e) {
//   e.preventDefault()
//   tl.to('.wave-top', 1.5, {
//     scaleY: 1,
//     transformOrigin: '-100% 0%',
//     duration: 7
//   })
//   setTimeout(function () {
//     window.location.replace('index.html#timeline')
//   }, 1500)
// })
//tl.play()
// {onComplete: window.location.replace}window.location.replace("index.html#timeline");

const wave1 = "M0,192L15,202.7C30,213,60,235,90,240C120,245,150,235,180,245.3C210,256,240,288,270,293.3C300,299,330,277,360,250.7C390,224,420,192,450,202.7C480,213,510,267,540,256C570,245,600,171,630,149.3C660,128,690,160,720,181.3C750,203,780,213,810,213.3C840,213,870,203,900,192C930,181,960,171,990,170.7C1020,171,1050,181,1080,186.7C1110,192,1140,192,1170,208C1200,224,1230,256,1260,229.3C1290,203,1320,117,1350,90.7C1380,64,1410,96,1425,112L1440,128L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z",
  wave2 = "M0,32L15,32C30,32,60,32,90,74.7C120,117,150,203,180,202.7C210,203,240,117,270,74.7C300,32,330,32,360,37.3C390,43,420,53,450,80C480,107,510,149,540,170.7C570,192,600,192,630,176C660,160,690,128,720,138.7C750,149,780,203,810,192C840,181,870,107,900,85.3C930,64,960,96,990,122.7C1020,149,1050,171,1080,186.7C1110,203,1140,213,1170,202.7C1200,192,1230,160,1260,176C1290,192,1320,256,1350,277.3C1380,299,1410,277,1425,266.7L1440,256L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z";

anime({
  targets: '.wave-top > path',
  easing: 'linear',
  duration: 7500,
  loop: true,
  d: [{
      value: [wave1, wave2]
    },
    {
      value: wave1
    },
    {
      value: wave2
    },
    {
      value: wave1
    },
  ],
});

tl.to('.wave-top', 1.5, {
  scaleY: 0,
  transformOrigin: '100% 0%',
  duration: 7
})

$('.closeButton').click(function (e) {
  e.preventDefault()
  tl.to('.wave-top', 1.5, {
    scaleY: 3,
    transformOrigin: '-100% 0%',
    duration: 7
  })
  setTimeout(function () {
    window.location.replace('index.html#timeline')
  }, 1000)
})