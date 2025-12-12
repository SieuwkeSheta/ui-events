/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)



// Ga zelf verder met de overige elementen, aan de hand van de instructies

// Als je op het 1e linkje klikt (Frontend), wordt deze groter
// Stap 1: selecteer het Frontend linkje, en sla deze op in een variabele
const frontendLink = document.querySelector('a[href="#frontend"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
frontendLink.addEventListener('click', scaleHandler)

function scaleHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  frontendLink.classList.toggle('scale')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
frontendLink.addEventListener('animationend', scaleHandler)



// Als je op het 3e linkje klikt (&), gaat deze omhoog
// Stap 1: selecteer het '&'linkje, en sla deze op in een variabele
const andLink = document.querySelector('a[href="#and"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
andLink.addEventListener('click', translateYHandler)

function translateYHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  andLink.classList.toggle('translate-y')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
andLink.addEventListener('animationend', translateYHandler)



// Als je op het 4e linkje klikt (Development), gaat deze heen en weer schudden
// Stap 1: selecteer het 'Development'linkje, en sla deze op in een variabele
const developmentLink = document.querySelector('a[href="#development"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
developmentLink.addEventListener('dblclick', translateXHandler)

function translateXHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  developmentLink.classList.toggle('translate-x')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
developmentLink.addEventListener('animationend', translateXHandler)



// Als je op het 5e linkje focust (Sprint 5), veranderd deze van kleur
// Stap 1: selecteer het 'Sprint 5'linkje, en sla deze op in een variabele
const sprint5Link = document.querySelector('a[href="#sprint-5"]')

// Stap 2: voeg de (focus) event listener toe aan de link, met een callback functie
sprint5Link.addEventListener('focus', colorFocusHandler)


function colorFocusHandler(){
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  sprint5Link.classList.toggle('color-focus')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
sprint5Link.addEventListener('animationend', colorFocusHandler)



// Als je over het 6e linkje hovert (Fix), veranderd de text naar een emoji van een kat
// Stap 1: selecteer het 'Fix'linkje, en sla deze op in een variabele
const fixLink = document.querySelector('a[href="#fix"]')

// Stap 2: voeg de (mouseover & mouseout) event listener toe aan de link, met een callback functie
fixLink.addEventListener('mouseover', fixHovered)
fixLink.addEventListener('mouseout', fixHoveredOut)

function fixHovered() {
  // Stap 3: Verander de text naar een emoji van een kat (als er met de muis overheen wordt gehovert)

  fixLink.textContent = "🐱"
}

function fixHoveredOut() {
    // Stap : Verander de text terug (als de muis er af wordt gehaald)
  fixLink.textContent = "Fix" 
}



// Als je van het 7e linkje af hovert (The), gaat deze draaien over de y-as en x-as
// Stap 1: selecteer het 'The'linkje, en sla deze op in een variabele
const theLink = document.querySelector('a[href="#the"]')

// Stap 2: voeg de (mouseout) event listener toe aan de link, met een callback functie
theLink.addEventListener('mouseout', theHoveredOut)

function theHoveredOut() {
  // Stap 3: Laat de knop draaien als je er vanaf hovert
  theLink.classList.toggle('spin')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
theLink.addEventListener('animationend', theHoveredOut)



// Als je op het 8e linkje klikt (Flow), flipt die 180deg naar achter en als je loslaat flipt ie weer terig
// Stap 1: selecteer het 'Flow'linkje, en sla deze op in een variabele
const flowLink = document.querySelector('a[href="#flow"]')

// Stap 2: voeg de (mousedown en mouseup) event listener toe aan de link, met een callback functie
flowLink.addEventListener('mousedown', backFlip)
flowLink.addEventListener('mouseup', frontFlip)

function backFlip() {
  // Stap 3: Laat de knop naar achter flippen als je er op klikt en het vast houdt (door te switchen van classes)
  flowLink.classList.add('back-flip')
  flowLink.classList.remove('front-flip')
}

function frontFlip() {
  // Stap 4: Laat de knop terug flippen als je loslaat (door te switchen van classes)
  flowLink.classList.remove('back-flip')
  flowLink.classList.add('front-flip')
}



// Als je op de knoppen 'r, o, y, g, b, i of v' van het toetsenbord klikt, veranderd het 9e linkje (User) van kleur
// Stap 1: selecteer het 'User'linkje, en sla deze op in een variabele
const userLink = document.querySelector('a[href="#user"]')

// Stap 2: voeg de (keyup) event listener toe aan de link, met een callback functie
userLink.addEventListener('keyup', colorChangeKey)


function colorChangeKey(event) {
    // Stap 3: Laat die specifieke toetsenbord knoppen linken aan een kleur
  if (event.key === "r") {
		userLink.style.backgroundColor = "red"
	}
  if (event.key === "o") {
		userLink.style.backgroundColor = "orange"
	}
  if (event.key === "y") {
		userLink.style.backgroundColor = "yellow"
	}
  if (event.key === "g") {
		userLink.style.backgroundColor = "green"
	}
  if (event.key === "b") {
		userLink.style.backgroundColor = "blue"
	}
  if (event.key === "i") {
		userLink.style.backgroundColor = "indigo"
	}
  if (event.key === "v") {
		userLink.style.backgroundColor = "#eb7be4"
	}
}
