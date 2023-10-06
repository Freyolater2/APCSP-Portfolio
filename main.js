// A minimal CSS framework: you can research
// and choose others, or use none at all.
import '@picocss/pico'

// Our stylesheet.
import './style.css'

// We can import raw code fragments for samples, like this:
import fragmentOne from './code-fragments/fragment.js?raw'
document.querySelector('#fragment').textContent = fragment;

import importExample from './code-fragments/importExample.sh?raw'
document.querySelector('#importExample').textContent = importExample;

// A code highlighter
import hljs from 'highlight.js'
// You can check the folder for other themes!
import 'highlight.js/styles/panda-syntax-dark.css'
// This next line of code automatically finds
// code blocks in your HTML (in <pre><code></code>
// </pre>) and makes them look pretty!
hljs.highlightAll();

// This is a pretty good start for JavaScript: we will add more as needed!
 var numberOfEls = 1000;
    var duration = 3000;
    var midScreenX = window.innerWidth / 2;
    var midScreenY = window.innerHeight / 2;
    var radius = Math.sqrt(midScreenX * midScreenX + midScreenY * midScreenY);
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < numberOfEls; i++) {
      var hue = Math.round(360 / numberOfEls * i);
      var angle = Math.random() * Math.PI * 2;
      var el = document.createElement('div');
      el.classList.add('particule');
      el.style.backgroundColor = 'hsl(' + hue + ', 90%, 60%)';
      el.style.width = '1px';
      el.style.height = '1px';
      anime({
        targets: el,
        width: ['1px', '10px'],
        height: ['1px', '10px'],
        left: [midScreenX + 'px', Math.cos(angle) * radius + midScreenX + 'px'],
        top: [midScreenY + 'px'/2, Math.sin(angle) * radius + midScreenY + 'px'],
        delay: (duration / numberOfEls) * i,
        duration: duration,
        easing: 'easeInExpo',
        loop: true
      });
      fragment.appendChild(el);
    }

    document.body.appendChild(fragment);