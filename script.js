const enterBtn = document.getElementById('enterBtn');
const intro    = document.getElementById('intro');
const bgMusic  = document.getElementById('bgMusic');

enterBtn.addEventListener('click', () => {
  bgMusic.volume = 0.4;
  bgMusic.play();
  intro.classList.add('hidden');
  setTimeout(() => intro.remove(), 1300);
});

const hearts  = ['💜','💗','💖','💝','🤍'];
const flowers = ['🌸','💐','🌺','🌷','✿'];

function spawnItem(containerId, items) {
  const container = document.getElementById(containerId);
  const el = document.createElement('div');
  el.className = containerId === 'hearts' ? 'heart-item' : 'flower-item';
  el.textContent = items[Math.floor(Math.random() * items.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
  const dur = 6 + Math.random() * 8;
  el.style.animationDuration = dur + 's';
  el.style.animationDelay = (Math.random() * 3) + 's';
  container.appendChild(el);
  setTimeout(() => el.remove(), (dur + 4) * 1000);
}

function loop() {
  spawnItem('hearts', hearts);
  spawnItem('flowers', flowers);
  setTimeout(loop, 700 + Math.random() * 600);
}

loop();
