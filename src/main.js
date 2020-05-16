import string from './css.js'

// let demo2 = document.querySelector("#html");
// let demo = document.querySelector("#style");
// let n = 0;
// let string2 = "";
//
// function step() {
//   setTimeout(() => {
//     // 如果是回车，就不照搬
//     // 如果不是回车就照搬
//     if (string[n] === "\n") {
//       string2 += "<br>";
//     } else if (string[n] === " ") {
//       string2 += "&nbsp";
//     } else {
//       string2 += string[n];
//     }
//     n += 1;
//     demo2.innerHTML = string2;
//     demo.innerHTML = string.substring(0, n);
//     window.scrollTo(0, 99999);
//     demo2.scrollTo(0, 99999);
//     if (n < string.length) {
//       step();
//     }
//   }, 0);
// }
//
// step();

const player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#html'),
    demo2: document.querySelector('#style')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.bindEvents()
    player.play()
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }

  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight
  },
  play: () => {
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    player.pause()
    player.time = 300
    player.play()
  },
  normal: () => {
    player.pause()
    player.time = 100
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 0
    player.play()
  }
}

player.init()



