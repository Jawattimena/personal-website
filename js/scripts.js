// Hier haal ik de API op
let base = "https://fdnd.directus.app/items";
let endpoint = "/person?filter[id]=";

let id = 298;

let url = base + endpoint + id;
let main = document.querySelector("main");

// Hier laad ik de popovers in en bewerk ik dus het html bestand.
async function haalDataOp() {
  let response = await fetch(url);
  let responseJson = await response.json();
  console.log(responseJson);

  let dataPersonInDeMinor = responseJson.data[0];

  let popoverPersoonlijkProfiel = `
  <div popover id="popover-profiel">
  <h2>Persoonlijk Profiel</h2>
  <button popovertarget="popover-profiel" popovertargetaction="hide">X</button>
  
  <div class="text-veld1">
    <p><strong>Naam:</strong> ${dataPersonInDeMinor.name}</p>
    <p><strong>Geboortedatum:</strong> ${dataPersonInDeMinor.birthdate}</p>
    <p><strong>Woonplaats:</strong> ${dataPersonInDeMinor.residency}</p>
    <p><strong>Favoriete kleur:</strong> ${dataPersonInDeMinor.fav_color}</p>
    <p><strong>Vibe emoji:</strong> ${dataPersonInDeMinor.vibe_emoji}</p>
    <p><strong>Favoriete emoji:</strong> ${dataPersonInDeMinor.fav_emoji}</p>
  </div>
  <img
    id="avatar"
    src="${dataPersonInDeMinor.avatar}"
    alt="${dataPersonInDeMinor.name}"
  />
    `;
  main.insertAdjacentHTML("beforeend", popoverPersoonlijkProfiel);

  let popoverEntertainment = `
  <div popover id="popover-entertainment">
    <h2>Entertainment & Vrije Tijd</h2>
    <button popovertarget="popover-entertainment" popovertargetaction="hide">X</button>
    <div class="text-veld1">
      <p><strong>Favoriete game:</strong> ${dataPersonInDeMinor.fav_game}</p>
      <p><strong>Favoriete film:</strong> ${dataPersonInDeMinor.fav_movie}</p>
      <p><strong>Favoriete Hobby:</strong> ${dataPersonInDeMinor.fav_hobby}</p>
      <p><strong>Muziekstijl:</strong> ${dataPersonInDeMinor.fav_music_genre}</p>
      <a href="${dataPersonInDeMinor.fav_spotify_track}"
        ><strong>Favoriete Spotify track</strong>
      </a>
    </div>
  </div>
    `;
  main.insertAdjacentHTML("beforeend", popoverEntertainment);

  let popoverEten = `
    <div popover id="popover-eten">
    <h2>Eten & Favorieten</h2>
    <button popovertarget="popover-eten" popovertargetaction="hide">X</button>
    <div class="text-veld1">
      <p><strong>Favoriet fruit:</strong> ${dataPersonInDeMinor.fav_fruit}</p>
      <p><strong>Favoriete soep:</strong> ${dataPersonInDeMinor.fav_soup}</p>
      <p><strong>Favoriete seizoen:</strong> ${dataPersonInDeMinor.fav_season}</p>
      <p><strong>Favoriete dier:</strong> ${dataPersonInDeMinor.fav_animal}</p>
    </div>
    </div>
  `;
  main.insertAdjacentHTML("beforeend", popoverEten);

  let popoverTech = `
  <div popover id="popover-tech">
  <h2>Tech & Creativiteit</h2>
  <button popovertarget="popover-tech" popovertargetaction="hide">X</button>
  <div class="text-veld1">
    <p><strong>GitHub:</strong> ${dataPersonInDeMinor.github_handle}</p>
    <p>
      <strong>GitHub personal website:</strong> ${dataPersonInDeMinor.website}
    </p>
    <p>
      <strong>Portfolio website:</strong> ${dataPersonInDeMinor.profilecard}
    </p>
    <p><strong>Favoriete HTML-tag:</strong> ${dataPersonInDeMinor.fav_tag}</p>
    <p>
      <strong>Favoriete CSS-property:</strong>
      ${dataPersonInDeMinor.fav_property}
    </p>
    <p>
      <strong>Favoriete attribute:</strong>
      ${dataPersonInDeMinor.fav_music_genre}
    </p>
    <p>
      <strong>Favoriete JS feature:</strong> ${dataPersonInDeMinor.fav_feature}
    </p>
  </div>
</div>
  `;
  main.insertAdjacentHTML("beforeend", popoverTech);

  let popoverFunFacts = `
  <div popover id="popover-fun-facts" class="popovers">
  <h2>Fun Facts</h2>
  <button popovertarget="popover-fun-facts" popovertargetaction="hide">X</button>
  <div class="text-veld1">
    <p><strong>Schoenmaat:</strong> ${dataPersonInDeMinor.shoe_size}</p>
    <p><strong>Profiel-ID:</strong> ${dataPersonInDeMinor.id}</p>
  </div>
</div>
  `;
  main.insertAdjacentHTML("beforeend", popoverFunFacts);
}
haalDataOp();

// Dit gedeelte staat voor de audio
const snaarLowE = document.getElementById("snaar-low-e");
const snaarA = document.getElementById("snaar-a");
const snaarD = document.getElementById("snaar-d");
const snaarG = document.getElementById("snaar-g");
const snaarB = document.getElementById("snaar-b");
const snaarHighE = document.getElementById("snaar-high-e");

const snaarLowESound = document.getElementById("snaar-low-e-sound");
const snaarASound = document.getElementById("snaar-a-sound");
const snaarDSound = document.getElementById("snaar-d-sound");
const snaarGSound = document.getElementById("snaar-g-sound");
const snaarBSound = document.getElementById("snaar-b-sound");
const snaarHighESound = document.getElementById("snaar-high-e-sound");

snaarLowE.addEventListener("mouseover", () => {
  snaarLowESound.currentTime = 0;
  snaarLowESound.play();
});

snaarA.addEventListener("mouseover", () => {
  snaarASound.currentTime = 0;
  snaarASound.play();
});

snaarD.addEventListener("mouseover", () => {
  snaarDSound.currentTime = 0;
  snaarDSound.play();
});

snaarG.addEventListener("mouseover", () => {
  snaarGSound.currentTime = 0;
  snaarGSound.play();
});

snaarB.addEventListener("mouseover", () => {
  snaarBSound.currentTime = 0;
  snaarBSound.play();
});

snaarHighE.addEventListener("mouseover", () => {
  snaarHighESound.currentTime = 0;
  snaarHighESound.play();
});

// hier laat ik de gitaat veranderen (darkmode) door een class toe te voegen aan de body
const buttonModeSwitch = document.getElementById("darkmode-toggle");

function toggleElectricGuitar() {
  let body = document.querySelector("body");
  body.classList.toggle("electric");
}

buttonModeSwitch.addEventListener("click", () => {
  toggleElectricGuitar();
});

const changeID = document.getElementById("mijnInvoer");
const confirmKnop = document.getElementById("mijnKnop");

confirmKnop.addEventListener("click", () => {
  id = changeID.value;
  url = base + endpoint + id;

  document.querySelectorAll("[popover]").forEach((popover) => {
    if (popover.id !== "leerdoelen") {
      popover.remove();
    }
  });

  haalDataOp();
});
