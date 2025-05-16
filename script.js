const container = document.getElementById("sections");

// 🔤 Section titles + texts
const captions = [
  { title: "The Start", text: " first step — it all began here.", flicker: "First smile, " },
  { title: "School Days", text: "The pranks, the pals, the playground." },
  { title: "College Vibes", text: "Assignments and afterparties." },
  { title: "Best Friend Moments", text: "Bonds stronger than Wi-Fi." },
  { title: "Epic Trips", text: "Wander. Wonder. Repeat." },
  { title: "Gamer Hours", text: "Late nights, loud wins." },
  { title: "Photogenic You", text: "Caught being awesome!" },
  { title: "Us Together", text: "A story of laughter and loyalty." },
  { title: "Leveling Up", text: "Still iconic. Still unstoppable." }
];

// 📸 35 photos, placed in groups of 4
let photoIndex = 1;
captions.forEach((caption, i) => {
  const section = document.createElement("div");
  section.classList.add("section");
  if (i % 2 !== 0) section.classList.add("reverse");

  const textHTML = `
    <div class="text " data-aos="fade-${i % 2 === 0 ? "right" : "left"}">
      <h2>${caption.title}</h2>
      <p class="text-flicker-out-glow">${caption.flicker}</p>
      <p class="poojit">${caption.text}</p>
    </div>
  `;

  let mediaHTML = `<div class="media">`;
  for (let j = 0; j < 4 && photoIndex <= 35; j++, photoIndex++) {
    mediaHTML += `<img src="assets/images/photo${photoIndex}.jpg" data-aos="zoom-in" data-aos-delay="${j * 100}" class="animate__animated animate__zoomin image"/>`;
  }
  mediaHTML += `</div>`;

  section.innerHTML = textHTML + mediaHTML;
  container.appendChild(section);
});
// Animate hero text scale + fade on scroll
gsap.to(".video-text-mask h1", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true, // Keeps hero in place during scroll
  },
  scale: 4,
  opacity: 0,
  ease: "power2.out",
});

var sound = document.getElementById("sound");
var audio = document.getElementById("audio");
sound.addEventListener("click", function () {
  audio.play();
})