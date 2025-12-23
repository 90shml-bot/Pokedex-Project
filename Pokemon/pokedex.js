const pokemon = [
    { id: 1, name: "Bulbasaur", types: ["grass", "poison"], entry: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon." },
    { id: 2, name: "Ivysaur", types: ["grass", "poison"], entry: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs." },
    { id: 3, name: "Venusaur", types: ["grass", "poison"], entry: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight." },
    { id: 4, name: "Charmander", types: ["fire"], entry: "It has a preference for hot places. When it rains, steam is said to spout from the tip of its tail." },
    { id: 5, name: "Charmeleon", types: ["fire"], entry: "It lashes about with its tail to knock down its foe. The tail burns with a blue flame." },
    { id: 6, name: "Charizard", types: ["fire", "flying"], entry: "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally." },
    { id: 7, name: "Squirtle", types: ["water"], entry: "After birth, its back swells and hardens into a shell. Powerfully sprays water from its mouth." },
    { id: 8, name: "Wartortle", types: ["water"], entry: "Often hides in water to stalk unwary prey. Its tail is large and covered with fluffy fur." },
    { id: 9, name: "Blastoise", types: ["water"], entry: "It crushes its foe under its heavy body. Its powerful cannons fire water jets capable of punching holes through steel." },
    { id: 10, name: "Caterpie", types: ["bug"], entry: "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls." },
    { id: 12, name: "Butterfree", types: ["bug", "flying"], entry: "In battle, it flaps its wings at high speed to release highly toxic dust into the air." },
    { id: 15, name: "Beedrill", types: ["bug", "poison"], entry: "It has three poisonous stingers on its forelegs and tail. They are used to jab its enemy repeatedly." },
    { id: 25, name: "Pikachu", types: ["electric"], entry: "When several of these Pokémon gather, their electricity could build and cause lightning storms." },
    { id: 26, name: "Raichu", types: ["electric"], entry: "Its long tail serves as a ground to protect itself from its own high-voltage power." },
    { id: 39, name: "Jigglypuff", types: ["normal", "fairy"], entry: "When its huge eyes light up, it sings a lullaby that puts everyone to sleep." },
    { id: 40, name: "Wigglytuff", types: ["normal", "fairy"], entry: "Its body is filled with air, so it can freely float by inhaling deeply." },
    { id: 52, name: "Meowth", types: ["normal"], entry: "Adores circular objects. Wanders the streets on a nightly basis to look for shiny coins." },
    { id: 54, name: "Psyduck", types: ["water"], entry: "While lulling its enemies with vacant look, this wily Pokémon will use psychokinetic powers." },
    { id: 63, name: "Abra", types: ["psychic"], entry: "Using its ability to sense danger, it teleports to safety before its enemies can attack." },
    { id: 64, name: "Kadabra", types: ["psychic"], entry: "It emits alpha waves from its body. It is said to have something to do with extrasensory powers." },
    { id: 65, name: "Alakazam", types: ["psychic"], entry: "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000." },
    { id: 66, name: "Machop", types: ["fighting"], entry: "Loves to build its muscles. It trains in all sorts of physical exercises to become stronger." },
    { id: 67, name: "Machoke", types: ["fighting"], entry: "Its muscular body is so powerful that it must wear a power-save belt to be able to regulate its motions." },
    { id: 68, name: "Machamp", types: ["fighting"], entry: "Using its four arms, it throws powerful punches that can send even the largest opponents flying." },
    { id: 92, name: "Gastly", types: ["ghost", "poison"], entry: "Almost invisible, this gaseous Pokémon cloaks the target and puts it to sleep without warning." },
    { id: 93, name: "Haunter", types: ["ghost", "poison"], entry: "Because it loves to frighten people, it tries to lick anything that moves to scare them." },
    { id: 94, name: "Gengar", types: ["ghost", "poison"], entry: "Under a full moon, this Pokémon likes to mimic the shadows of people and laugh at their fright." },
    { id: 104, name: "Cubone", types: ["ground"], entry: "Wears the skull of its deceased mother. It cries at night, which echoes in lonely places." },
    { id: 105, name: "Marowak", types: ["ground"], entry: "The bone it carries is extremely powerful. It can smash through rock and hard objects with ease." }
];




const grid = document.getElementById("pokemonGrid");
const search = document.getElementById("search");

const modal = document.getElementById("pokemonModal");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalId = document.getElementById("modalId");
const modalTypes = document.getElementById("modalTypes");
const closeModal = document.getElementById("closeModal");

const modalEntry = document.getElementById("modalEntry");



function render(list) {
    grid.innerHTML = "";
    list.forEach(p => {
        const card = document.createElement("div");
        card.className = "pokemon-card";

        card.innerHTML = `
            <img class="pokemon-img"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png">
            <div class="pokemon-name">${p.name}</div>
            <div class="pokemon-types">
                ${p.types.map(t => `<span class="pokemon-type ${t}">${t}</span>`).join("")}
            </div>
        `;

        card.addEventListener("click", () => openModal(p));
        grid.appendChild(card);
    });
}

function openModal(pokemon) {
    modalImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    modalName.textContent = pokemon.name;
    modalId.textContent = `#${pokemon.id.toString().padStart(3, "0")}`;

    modalTypes.innerHTML = pokemon.types
        .map(t => `<span class="pokemon-type ${t}">${t}</span>`)
        .join("");

    modalEntry.textContent = pokemon.entry; // <-- Make sure this line is included

    modal.classList.remove("hidden");
}


closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

modal.addEventListener("click", e => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});


search.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    render(pokemon.filter(p => p.name.toLowerCase().includes(value)));
});

render(pokemon);
