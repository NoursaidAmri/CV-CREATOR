// javascript.js
function nextStep() {
    const currentStep = document.querySelector('.step.active');
    const nextStep = currentStep.nextElementSibling;
    if (nextStep) {
        currentStep.classList.remove('active');
        nextStep.classList.add('active');
    }
}

function prevStep() {
    const currentStep = document.querySelector('.step.active');
    const prevStep = currentStep.previousElementSibling;
    if (prevStep) {
        currentStep.classList.remove('active');
        prevStep.classList.add('active');
    }
}

function addEducation() {
    const educationContainer = document.querySelector('.education-container');
    const educationItem = document.createElement('div');
    educationItem.classList.add('education-item');
    educationItem.innerHTML = `
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
        </div>
        <div class="input-group full-width">
            <label for="description_education">Missions et tâches :</label>
            <textarea name="description_education[]" class="input" required></textarea>
        </div>
    `;
    educationContainer.appendChild(educationItem);
}

function addExperience() {
    const experienceContainer = document.querySelector('.experience-container');
    const experienceItem = document.createElement('div');
    experienceItem.classList.add('experience-item');
    experienceItem.innerHTML = `
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
        </div>
        <div class="input-group">
            <label for="en_cours">En cours :</label>
            <input type="checkbox" name="en_cours[]">
        </div>
        <div class="input-group full-width">
            <label for="description">Description des tâches et missions :</label>
            <textarea name="description[]" class="input" required></textarea>
        </div>
    `;
    experienceContainer.appendChild(experienceItem);
}

function addHobby() {
    const hobbiesContainer = document.querySelector('.hobbies-container');
    const hobbiesItem = document.createElement('div');
    hobbiesItem.classList.add('hobbies-item');
    hobbiesItem.innerHTML = `
        <div class="input-group">
            <label for="hobby">Loisir :</label>
            <input type="text" name="hobby[]" class="input" required>
        </div>
    `;
    hobbiesContainer.appendChild(hobbiesItem);
}

function addLanguage() {
    const languagesContainer = document.querySelector('.languages-container');
    const languagesItem = document.createElement('div');
    languagesItem.classList.add('languages-item');
    languagesItem.innerHTML = `
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
        </div>
    `;
    languagesContainer.appendChild(languagesItem);
}

function addTechnology() {
    const technologiesContainer = document.querySelector('.technologies-container');
    const technologiesItem = document.createElement('div');
    technologiesItem.classList.add('technologies-item');
    technologiesItem.innerHTML = `
        <div class="flex">
            <div class="input-group">
                <label for="technologie">Technologie ou logiciel :</label>
                <input type="text" name="technologie[]" class="input" required>
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
        </div>
    `;
    technologiesContainer.appendChild(technologiesItem);
}

function addSkill() {
    const skillsContainer = document.querySelector('.skills-container');
    const skillsItem = document.createElement('div');
    skillsItem.classList.add('skills-item');
    skillsItem.innerHTML = `
        <div class="input-group">
            <label for="competence">Compétence :</label>
            <input type="text" name="competence[]" class="input" required>
        </div>
    `;
    skillsContainer.appendChild(skillsItem);
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Définir les marges et la taille de la police
    const margin = 10;
    const fontSize = 12;

    // Fonction pour ajouter du texte avec gestion automatique du saut de ligne si nécessaire
    const addText = (text, x, y) => {
        doc.setFontSize(fontSize);
        const splitText = doc.splitTextToSize(text, doc.internal.pageSize.width - 2 * margin);
        doc.text(margin + x, margin + y, splitText);
    };

    // Fonction pour ajouter un titre de section
    const addSectionTitle = (title, y) => {
        doc.setFontSize(fontSize + 2);
        doc.setFont('helvetica', 'bold'); // Utilisation de setFont pour définir la police et le style
        addText(title, 0, y);
        doc.setFont('helvetica', 'normal'); // Réinitialisation à la police normale après le titre de section
    };

    // Récupérer les informations personnelles
    const nomElement = document.querySelector('#nom_prenom');
    const adresseElement = document.querySelector('#adresse');
    const emailElement = document.querySelector('#email');
    const permisElement = document.querySelector('#permis');

    // Vérifier que tous les champs sont remplis
    if (nomElement && emailElement && adresseElement && permisElement) {
        const personalInfo = {
            nom: nomElement.value,
            email: emailElement.value,
            adresse: adresseElement.value,
            permis: permisElement.value
        };

        // Ajouter les informations personnelles au PDF
        addSectionTitle('Informations Personnelles', 10);
        addText(`Nom et Prénom: ${personalInfo.nom}`, 10, 20);
        addText(`Email: ${personalInfo.email}`, 10, 30);
        addText(`Adresse: ${personalInfo.adresse}`, 10, 40);
        addText(`Permis de conduire: ${personalInfo.permis}`, 10, 50);
    }

    let yOffset = 70; // Décalage vertical initial

    // Ajouter les informations d'éducation
    const educationItems = document.querySelectorAll('.education-item');
    if (educationItems.length > 0) {
        addSectionTitle('Éducation', yOffset);
        yOffset += 10;

        educationItems.forEach((item, index) => {
            const diplome = item.querySelector('input[name="diplome[]"]').value;
            const annee = item.querySelector('input[name="annee[]"]').value;
            const ecole = item.querySelector('input[name="ecole[]"]').value;
            const description = item.querySelector('textarea[name="description_education[]"]').value;

            addText(`Éducation ${index + 1}:`, 10, yOffset);
            addText(`Année: ${annee}`, 20, yOffset + 20);
            addText(`Diplôme: ${diplome}`, 20, yOffset + 10);
            addText(`École: ${ecole}`, 20, yOffset + 30);
            addText(`Description: ${description}`, 20, yOffset + 40);
            yOffset += 50;
        });
    }

    // Ajouter les informations d'expérience
    const experienceItems = document.querySelectorAll('.experience-item');
    if (experienceItems.length > 0) {
        addSectionTitle('Expérience Professionnelle', yOffset);
        yOffset += 10;

        experienceItems.forEach((item, index) => {
            const poste = item.querySelector('input[name="poste[]"]').value;
            const dateDebut = item.querySelector('input[name="date_debut[]"]').value;
            const dateFin = item.querySelector('input[name="date_fin[]"]').value || 'En cours';
            const entreprise = item.querySelector('input[name="entreprise[]"]').value;
            const description = item.querySelector('textarea[name="description[]"]').value;

            addText(`Expérience ${index + 1}:`, 10, yOffset);
            addText(`Poste: ${poste}`, 20, yOffset + 10);
            addText(`Date de début: ${dateDebut}`, 20, yOffset + 30);
            addText(`Date de fin: ${dateFin}`, 20, yOffset + 40);
            addText(`Entreprise: ${entreprise}`, 20, yOffset + 20);
            addText(`Description: ${description}`, 20, yOffset + 50);
            yOffset += 60;
        });
    }

    // Ajouter les informations de loisirs
    const hobbiesItems = document.querySelectorAll('.hobbies-item');
    if (hobbiesItems.length > 0) {
        addSectionTitle('Loisirs', yOffset);
        yOffset += 10;

        hobbiesItems.forEach((item, index) => {
            const hobby = item.querySelector('input[name="hobby[]"]').value;
            addText(`Loisir ${index + 1}: ${hobby}`, 20, yOffset);
            yOffset += 20;
        });
    }

    // Ajouter les informations de langues
    const languagesItems = document.querySelectorAll('.languages-item');
    if (languagesItems.length > 0) {
        addSectionTitle('Langues', yOffset);
        yOffset += 10;

        languagesItems.forEach((item, index) => {
            const langue = item.querySelector('input[name="langue[]"]').value;
            const niveau = item.querySelector('select[name="niveau[]"]').value;
            addText(`Langue ${index + 1}: ${langue} - Niveau: ${niveau}`, 20, yOffset);
            yOffset += 30;
        });
    }

    // Ajouter les informations de technologies
    const technologiesItems = document.querySelectorAll('.technologies-item');
    if (technologiesItems.length > 0) {
        addSectionTitle('Technologies', yOffset);
        yOffset += 10;

        technologiesItems.forEach((item, index) => {
            const technologie = item.querySelector('input[name="technologie[]"]').value;
            const niveau = item.querySelector('select[name="niveau[]"]').value;
            addText(`Technologie ${index + 1}: ${technologie} - Niveau: ${niveau}`, 20, yOffset);
            yOffset += 30;
        });
    }

    // Ajouter les informations de compétences
    const skillsItems = document.querySelectorAll('.skills-item');
    if (skillsItems.length > 0) {
        addSectionTitle('Compétences', yOffset);
        yOffset += 10;

        skillsItems.forEach((item, index) => {
            const competence = item.querySelector('input[name="competence[]"]').value;
            addText(`Compétence ${index + 1}: ${competence}`, 20, yOffset);
            yOffset += 20;
        });
    }

    // Sauvegarder le PDF
    doc.save('cv.pdf');
}
