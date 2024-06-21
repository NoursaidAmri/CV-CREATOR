// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.step'); // Sélectionne toutes les étapes du formulaire

    // Ajoute un écouteur d'événement à chaque bouton "Suivant"
    document.querySelectorAll('.next-btn').forEach(button => {
        button.addEventListener('click', function() {
            navigateSteps(1); // Passe à l'étape suivante
        });
    });

    // Ajoute un écouteur d'événement à chaque bouton "Précédent"
    document.querySelectorAll('.prev-btn').forEach(button => {
        button.addEventListener('click', function() {
            navigateSteps(-1); // Reviens à l'étape précédente
        });
    });

    // Fonction pour naviguer entre les étapes
    function navigateSteps(direction) {
        let currentStep = document.querySelector('.step.active');
        let currentIndex = Array.from(steps).indexOf(currentStep);
        let nextIndex = currentIndex + direction;

        // Vérifie les limites de l'index
        if (nextIndex >= 0 && nextIndex < steps.length) {
            currentStep.classList.remove('active');
            steps[nextIndex].classList.add('active');
        }
    }

    // Ajoutez ici des fonctionnalités spécifiques à votre formulaire

    // Ajout dynamique d'éducation pour l'étape 2
    document.querySelector('.add-btn.education').addEventListener('click', function() {
        addEducation();
    });

    function addEducation() {
        let educationContainer = document.querySelector('.education-container');
        let newEducationItem = document.createElement('div');
        newEducationItem.classList.add('education-item');
        newEducationItem.innerHTML = `
            <div class="flex">
                <div class="input-group">
                    <label for="diplome">Diplôme obtenu :</label>
                    <input type="text" name="diplome[]" class="input" required>
                </div>
                <div class="input-group">
                    <label for="annee">Année d'obtention :</label>
                    <input type="text" name="annee[]" class="input" required>
                </div>
                <div class="input-group">
                    <label for="ecole">École ou Université :</label>
                    <input type="text" name="ecole[]" class="input" required>
                </div>
                <div class="input-group">
                    <label for="en_cours">En cours :</label>
                    <input type="checkbox" name="en_cours[]">
                </div>
                <div class="input-group full-width">
                    <label for="description_education">Description de l'éducation :</label>
                    <textarea id="description_education" name="description_education[]" class="input" required></textarea>
                </div>
            </div>`;
        educationContainer.appendChild(newEducationItem);
    }

    // Ajout dynamique d'expérience pour l'étape 3
    document.querySelector('.add-btn.experience').addEventListener('click', function() {
        addExperience();
    });

    function addExperience() {
        let experienceContainer = document.querySelector('.experience-container');
        let newExperienceItem = document.createElement('div');
        newExperienceItem.classList.add('experience-item');
        newExperienceItem.innerHTML = `
            <div class="flex">
                <div class="input-group">
                    <label for="poste">Poste occupé :</label>
                    <input type="text" name="poste[]" class="input" required>
                </div>
                <div class="input-group">
                    <label for="entreprise">Entreprise :</label>
                    <input type="text" name="entreprise[]" class="input" required>
                </div>
                <div class="input-group">
                    <label for="date_debut">Date de début :</label>
                    <input type="date" name="date_debut[]" class="input" required>
                </div>
                <div class="input-group">
                    <label for="date_fin">Date de fin :</label>
                    <input type="date" name="date_fin[]" class="input">
                </div>
                <div class="input-group full-width">
                    <label for="description">Description des tâches et missions :</label>
                    <textarea id="description" name="description[]" class="input" required></textarea>
                </div>
            </div>`;
        experienceContainer.appendChild(newExperienceItem);
    }

    // Ajoutez d'autres fonctions pour gérer l'ajout dynamique de hobbies, langues, etc. pour les autres étapes.
});
// Fonctions d'ajout dynamique pour chaque étape
function addEducation() {
    let educationContainer = document.querySelector('.step#step2 .education-container');
    let newEducationItem = document.createElement('div');
    newEducationItem.classList.add('education-item');
    newEducationItem.innerHTML = `
        <div class="flex">
                                <div class="input-group">
                                    <label for="diplome">Diplôme obtenu :</label>
                                    <input type="text" id="diplome" name="diplome[]" class="input" required>
                                </div>
                                <div class="input-group">
                                    <label for="annee">Année d'obtention :</label>
                                    <input type="text" id="annee" name="annee[]" class="input" required>
                                </div>
                                <div class="input-group">
                                    <label for="ecole">École ou Université :</label>
                                    <input type="text" id="ecole" name="ecole[]" class="input" required>
                                </div>
                            </div>
                            <div class="input-group">
                                <label for="en_cours">En cours :</label>
                                <input type="checkbox" id="en_cours" name="en_cours[]">
                            </div>
                            <div class="input-group full-width">
                                <label for="description_education">Missions et taches :</label>
                                <textarea id="description_education" name="description_education[]" class="input" required></textarea>
                            </div>`;
    educationContainer.appendChild(newEducationItem);
}

function addExperience() {
    let experienceContainer = document.querySelector('.step#step3 .experience-container');
    let newExperienceItem = document.createElement('div');
    newExperienceItem.classList.add('experience-item');
    newExperienceItem.innerHTML = `
        <div class="flex">
                                <div class="input-group">
                                    <label for="poste">Poste occupé :</label>
                                    <input type="text" id="poste" name="poste[]" class="input" required>
                                </div>
                                <div class="input-group">
                                    <label for="entreprise">Entreprise :</label>
                                    <input type="text" id="entreprise" name="entreprise[]" class="input" required>
                                </div>
                                <div class="input-group">
                                    <label for="date_debut">Date de début :</label>
                                    <input type="date" id="date_debut" name="date_debut[]" class="input" required>
                                </div>
                                <div class="input-group">
                                    <label for="date_fin">Date de fin :</label>
                                    <input type="date" id="date_fin" name="date_fin[]" class="input">
                                </div>
                            </div>
                            <div class="input-group full-width">
                                <label for="description">Description des tâches et missions :</label>
                                <textarea id="description" name="description[]" class="input" required></textarea>
                            </div>
                        </div>`;
    experienceContainer.appendChild(newExperienceItem);
}

function addHobby() {
    let hobbiesContainer = document.querySelector('.step#step4 .hobbies-container');
    let newHobbyItem = document.createElement('div');
    newHobbyItem.classList.add('hobbies-item');
    newHobbyItem.innerHTML = `
        <div class="flex">
            <div class="input-group">
                <label for="hobby">Hobby :</label>
                <input type="text" name="hobby[]" class="input" required>
            </div>
        </div>`;
    hobbiesContainer.appendChild(newHobbyItem);
}

function addLangue() {
    let languesContainer = document.querySelector('.step#step5 .langues-container');
    let newLangueItem = document.createElement('div');
    newLangueItem.classList.add('langues-item');
    newLangueItem.innerHTML = `
        <div class="flex">
            <div class="input-group">
                <label for="langue">Langue :</label>
                <input type="text" name="langue[]" class="input" required>
            </div>
            <div class="input-group">
                <label for="niveau">Niveau :</label>
                <select name="niveau[]" class="input" required>
                    <option value="">Choisir...</option>
                    <option value="débutant">Débutant</option>
                    <option value="intermédiaire">Intermédiaire</option>
                    <option value="avancé">Avancé</option>
                    <option value="expert">Expert</option>
                </select>
            </div>
        </div>`;
    languesContainer.appendChild(newLangueItem);
}

function addTechnologie() {
    let technologiesContainer = document.querySelector('.step#step6 .technologies-container');
    let newTechnologieItem = document.createElement('div');
    newTechnologieItem.classList.add('technologies-item');
    newTechnologieItem.innerHTML = `
        <div class="flex">
            <div class="input-group">
                <label for="technologie">Technologie ou logiciel :</label>
                <input type="text" name="technologie[]" class="input" required>
            </div>
            <div class="input-group">
                <label for="niveau_technologie">Niveau :</label>
                <select name="niveau_technologie[]" class="input" required>
                    <option value="">Choisir...</option>
                    <option value="débutant">Débutant</option>
                    <option value="intermédiaire">Intermédiaire</option>
                    <option value="avancé">Avancé</option>
                    <option value="expert">Expert</option>
                </select>
            </div>
        </div>`;
    technologiesContainer.appendChild(newTechnologieItem);
}

// Navigation entre les étapes
function nextStep() {
    // Code pour passer à l'étape suivante
}

function prevStep() {
    // Code pour revenir à l'étape précédente
}
