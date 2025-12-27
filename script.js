for (let i = 0; i < 50; i++) {
  let star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.body.appendChild(star);
}
