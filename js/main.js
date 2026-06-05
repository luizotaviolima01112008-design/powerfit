// Create floating leaves
const leaves = document.getElementById('leaves');
const leafEmojis = ['🌿', '🍃', '🌱'];

for (let i = 0; i < 10; i++) {
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');
  leaf.textContent = leafEmojis[Math.floor(Math.random() * leafEmojis.length)];
  leaf.style.left = Math.random() * 100 + '%';
  leaf.style.animationDuration = (8 + Math.random() * 10) + 's';
  leaf.style.animationDelay = (Math.random() * 10) + 's';
  leaf.style.fontSize = (2 + Math.random() * 3) + 'rem';
  leaves.appendChild(leaf);
}

function goToThanks() {
  document.getElementById('screen-main').classList.remove('active');
  const thanks = document.getElementById('screen-thanks');
  thanks.classList.add('active');
  window.scrollTo(0, 0);
}

function openAndReturn() {
  // Link opens in new tab via href attribute
}
