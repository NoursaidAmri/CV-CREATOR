// Fonction pour passer à l'étape suivante
function nextStep(step) {
    const currentStep = document.querySelector('.step.active');
    const nextStep = document.getElementById('step' + step);

    if (nextStep) {
        currentStep.classList.remove('active');
        nextStep.classList.add('active');
        scrollToElement(nextStep);
    }
}

// Fonction pour revenir à l'étape précédente
function prevStep(step) {
    const currentStep = document.querySelector('.step.active');
    const prevStep = document.getElementById('step' + step);

    if (prevStep) {
        currentStep.classList.remove('active');
        prevStep.classList.add('active');
        scrollToElement(prevStep);
    }
}

// Fonction pour faire défiler jusqu'à l'élément spécifié
function scrollToElement(element) {
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}

// Fonction pour ajouter un diplôme
function addEducation() {
    const educationContainer = document.querySelector('.education-container');
    const newEducationItem = document.createElement('div');
    newEducationItem.classList.add('education-item');
    newEducationItem.innerHTML = `
        <div class="flex">
            <div class="input-group">
                <label for="diplome">
                    Diplôme obtenu :
                    <input type="text" id="diplome" name="diplome[]" class="input" required>
                </label>
            </div>
            <div class="input-group">
                <label for="annee">
                    Année d'obtention :
                    <input type="text" id="annee" name="annee[]" class="input" required>
                </label>
            </div>
            <div class="input-group">
                <label for="ecole">
                    École ou Université :
                    <input type="text" id="ecole" name="ecole[]" class="input" required>
                </label>
            </div>
            <div class="input-group">
                <label for="en_cours">
                    En cours :
                    <input type="checkbox" id="en_cours" name="en_cours[]">
                </label>
            </div>
        </div>
    `;
    educationContainer.appendChild(newEducationItem);
}

// Fonction pour ajouter une expérience
function addExperience() {
    const experienceContainer = document.querySelector('.experience-container');
    const newExperienceItem = document.createElement('div');
    newExperienceItem.classList.add('experience-item');
    newExperienceItem.innerHTML = `
        <div class="flex">
            <div class="input-group">
                <label for="poste">
                    Poste occupé :
                    <input type="text" id="poste" name="poste[]" class="input" required>
                </label>
            </div>
            <div class="input-group">
                <label for="entreprise">
                    Entreprise :
                    <input type="text" id="entreprise" name="entreprise[]" class="input" required>
                </label>
            </div>
            <div class="input-group">
                <label for="date_debut">
                    Date de début :
                    <input type="date" id="date_debut" name="date_debut[]" class="input" required>
                </label>
            </div>
            <div class="input-group">
                <label for="date_fin">
                    Date de fin :
                    <input type="date" id="date_fin" name="date_fin[]" class="input">
                </label>
                <label for="en_poste_aujourdhui">
                    À aujourd'hui :
                    <input type="checkbox" id="en_poste_aujourdhui" name="en_poste_aujourdhui[]">
                </label>
            </div>
        </div>
    `;
    experienceContainer.appendChild(newExperienceItem);
}

// Fonction pour ajouter un hobby
function addHobby() {
    const hobbiesContainer = document.querySelector('.hobbies-container');
    const newHobbyItem = document.createElement('div');
    newHobbyItem.classList.add('hobbies-item');
    newHobbyItem.innerHTML = `
        <div class="flex">
            <div class="input-group">
                <label for="hobby">
                    Hobby :
                    <input type="text" id="hobby" name="hobby[]" class="input" required>
                </label>
            </div>
        </div>
    `;
    hobbiesContainer.appendChild(newHobbyItem);
}

// Fonction pour ajouter une langue
function addLangue() {
    const languesContainer = document.querySelector('.langues-container');
    const newLangueItem = document.createElement('div');
    newLangueItem.classList.add('langues-item');
    newLangueItem.innerHTML = `
        <div class="flex">
            <div class="input-group">
                <label for="langue">
                    Langue :
                    <input type="text" id="langue" name="langue[]" class="input" required>
                </label>
            </div>
            <div class="input-group">
                <label for="niveau">
                    Niveau :
                    <select id="niveau" name="niveau[]" class="input" required>
                        <option value="">Choisir...</option>
                        <option value="débutant">Débutant</option>
                        <option value="intermédiaire">Intermédiaire</option>
                        <option value="avancé">Avancé</option>
                        <option value="expert">Expert</option>
                    </select>
                </label>
            </div>
        </div>
    `;
    languesContainer.appendChild(newLangueItem);
}

// Fonction pour soumettre le formulaire (à personnaliser selon vos besoins)
function submitForm() {
    // Ici vous pouvez ajouter le code pour récupérer et traiter les données du formulaire
    alert('Formulaire soumis avec succès !');
}