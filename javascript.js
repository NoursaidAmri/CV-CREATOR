// JavaScript pour gérer les étapes du formulaire CV

let currentStep = 1;
const form = document.querySelector('.form');
const steps = form.querySelectorAll('.step');
const nextBtns = form.querySelectorAll('.next-btn');
const prevBtns = form.querySelectorAll('.prev-btn');

function showStep(stepNum) {
    steps.forEach(step => step.classList.remove('active'));
    steps[stepNum - 1].classList.add('active');
}

function nextStep() {
    if (currentStep < steps.length) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

nextBtns.forEach(btn => btn.addEventListener('click', nextStep));
prevBtns.forEach(btn => btn.addEventListener('click', prevStep));

// Fonctions pour ajouter dynamiquement des champs pour l'éducation, l'expérience, les hobbies, langues et technologies

function addEducation() {
    const educationContainer = document.querySelector('.education-container');
    const educationItem = document.querySelector('.education-item').cloneNode(true);
    educationContainer.appendChild(educationItem);
}

function addExperience() {
    const experienceContainer = document.querySelector('.experience-container');
    const experienceItem = document.querySelector('.experience-item').cloneNode(true);
    experienceContainer.appendChild(experienceItem);
}

function addHobby() {
    const hobbiesContainer = document.querySelector('.hobbies-container');
    const hobbyItem = document.querySelector('.hobbies-item').cloneNode(true);
    hobbiesContainer.appendChild(hobbyItem);
}

function addLangue() {
    const languesContainer = document.querySelector('.langues-container');
    const langueItem = document.querySelector('.langues-item').cloneNode(true);
    languesContainer.appendChild(langueItem);
}

function addTechnologie() {
    const technologiesContainer = document.querySelector('.technologies-container');
    const technologieItem = document.querySelector('.technologies-item').cloneNode(true);
    technologiesContainer.appendChild(technologieItem);
}