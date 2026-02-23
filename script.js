for (let i = 0; i < 50; i++) {
  let star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.body.appendChild(star);
}
const audio = document.getElementById("audio");
const toggleBtn = document.getElementById("toggleBtn");
const icon = document.getElementById("icon");
const volumeSlider = document.getElementById("volumeSlider");
const glow = document.querySelector(".music-glow");
const avatar = document.getElementById("avatar");

audio.volume = volumeSlider.value;

toggleBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.textContent = "❚❚";
    avatar.classList.add("playing");
  } else {
    audio.pause();
    icon.textContent = "▶";
    avatar.classList.remove("playing");
  }
});

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;

  // تغيير لون الشريط حسب مستوى الصوت
  let percent = volumeSlider.value * 100;
  volumeSlider.style.background =
    `linear-gradient(to right, #001aff ${percent}%, #333 ${percent}%)`;

  // زيادة قوة الإضاءة حسب الصوت
  glow.style.filter = `blur(${20 + percent / 5}px)`;
});
