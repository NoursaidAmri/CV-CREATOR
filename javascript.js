document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");
    let currentStep = 0;

    function showStep(index) {
        steps.forEach((step, i) => {
            step.classList.toggle("active", i === index);
        });
    }

    window.nextStep = function () {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    };

    window.prevStep = function () {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    };

    window.previewPhoto = function () {
        const fileInput = document.getElementById("photo");
        const preview = document.getElementById("photo-preview");

        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onloadend = function () {
            preview.innerHTML = `<img src="${reader.result}" alt="Photo de profil">`;
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.innerHTML = "";
        }
    };

    window.addEducation = function () {
        const container = document.querySelector(".education-container");
        const newEducation = document.createElement("div");
        newEducation.classList.add("education-item");
        newEducation.innerHTML = `
            <div class="education-item">
                <div class="flex">
                    <div class="input-group">
                        <label for="diplome">Diplôme obtenu :</label>
                        <input type="text" name="diplome[]" class="input" required>
                    </div>
                    <div class="input-group">
                        <label for="annee">Année d'obtention :</label>
                        <input type="text" name="annee" class="input" required>
                    </div>
                    <div class="input-group">
                        <label for="ecole">École ou Université :</label>
                        <input type="text" name="ecole" class="input" required>
                    </div>
                    <div class="input-group">
                        <label for="en_cours">En cours :</label>
                        <input type="checkbox" name="en_cours">
                    </div>
                </div>
                <div class="input-group full-width">
                    <label for="description_education">Missions et tâches :</label>
                    <textarea name="description_education" class="input" required></textarea>
                </div>
            </div>`;
        container.appendChild(newEducation);
    };

    window.addExperience = function () {
        const container = document.querySelector(".experience-container");
        const newExperience = document.createElement("div");
        newExperience.classList.add("experience-item");
        newExperience.innerHTML = `
            <div class="flex">
                <div class="input-group">
                    <label for="poste">Poste occupé :</label>
                    <input type="text" name="poste" class="input" required>
                </div>
                <div class="input-group">
                    <label for="entreprise">Entreprise :</label>
                    <input type="text" name="entreprise" class="input" required>
                </div>
                <div class="input-group">
                    <label for="date_debut">Date de début :</label>
                    <input type="date" name="date_debut" class="input" required>
                </div>
                <div class="input-group">
                    <label for="date_fin">Date de fin :</label>
                    <input type="date" name="date_fin" class="input">
                </div>
            </div>
            <div class="input-group">
                <label for="en_cours">En cours :</label>
                <input type="checkbox" name="en_cours">
            </div>
            <div class="input-group full-width">
                <label for="description">Description des tâches et missions :</label>
                <textarea name="description" class="input" required></textarea>
            </div>`;
        container.appendChild(newExperience);
    };

    window.addHobby = function () {
        const container = document.querySelector(".hobbies-container");
        const newHobby = document.createElement("div");
        newHobby.classList.add("hobbies-item");
        newHobby.innerHTML = `
            <div class="flex">
                <div class="input-group">
                    <label for="hobby">Hobby :</label>
                    <input type="text" name="hobby" class="input" required>
                </div>
            </div>`;
        container.appendChild(newHobby);
    };

    window.addLanguage = function () {
        const container = document.querySelector(".languages-container");
        const newLanguage = document.createElement("div");
        newLanguage.classList.add("languages-item");
        newLanguage.innerHTML = `
            <div class="flex">
                <div class="input-group">
                    <label for="langue">Langue :</label>
                    <input type="text" name="langue" class="input" required>
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
        container.appendChild(newLanguage);
    };

    window.addTechnology = function () {
        const container = document.querySelector(".technologies-container");
        const newTechnology = document.createElement("div");
        newTechnology.classList.add("technologies-item");
        newTechnology.innerHTML = `
            <div class="flex">
                <div class="input-group">
                    <label for="technologie">Technologie :</label>
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
            </div>`;
        container.appendChild(newTechnology);
    };

    document.getElementById("generate-pdf").addEventListener("click", function () {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const margin = 25;
        let y = 40;

        const personalInfoForm = document.getElementById("personal-info-form");
        const educationForm = document.getElementById("education-form");
        const experienceForm = document.getElementById("experience-form");
        const hobbiesForm = document.getElementById("hobbies-form");
        const languagesForm = document.getElementById("languages-form");
        const technologiesForm = document.getElementById("technologies-form");

        const selectedModel = document.getElementById("cv_model").value;

        function addFormDataToPDF(form, title, xPos, yPos) {
            const formData = new FormData(form);
            const formEntries = [...formData.entries()];

            doc.setFont("Helvetica", "bold");
            doc.setFontSize(16);
            doc.setTextColor("#1976D2"); // Couleur bleue
            doc.text(title, xPos, yPos);

            doc.setFont("Helvetica", "normal");
            doc.setFontSize(12);
            yPos += 12;

            formEntries.forEach(([name, value]) => {
                if (value !== "on") {
                    doc.setTextColor("#333333"); // Couleur de texte principale
                    doc.setFont("Helvetica", "normal"); // Réinitialisation à la police normale
                    doc.text(`${name.replace(/_/g, " ")}:`, xPos, yPos);
                    doc.text(value, xPos + 40, yPos);
                    yPos += 12;

                    // Vérifie si le contenu dépasse la hauteur de la page
                    if (yPos > doc.internal.pageSize.height - margin) {
                        doc.addPage(); // Ajoute une nouvelle page
                        yPos = margin; // Réinitialise la position verticale
                    }
                }
            });

            yPos += 10;
            doc.setLineWidth(0.1); // Épaisseur de la ligne
            doc.setDrawColor("#CCCCCC"); // Couleur de la ligne grise
            doc.line(margin, yPos, doc.internal.pageSize.width - margin, yPos); // Dessiner la ligne
            yPos += 10; // Espacement après la ligne

            return yPos;
        }

        function generateDebutantCV() {
            y = addFormDataToPDF(personalInfoForm, "Informations Personnelles", margin, y);
            y = addFormDataToPDF(educationForm, "Éducation", margin, y);
            y = addFormDataToPDF(experienceForm, "Expérience", margin, y);
            y = addFormDataToPDF(hobbiesForm, "Loisirs et Centres d'Intérêt", margin, y);
            y = addFormDataToPDF(languagesForm, "Langues", margin, y);
            y = addFormDataToPDF(technologiesForm, "Technologies", margin, y);
        }

        function generateIntermediaireCV() {
            doc.setFillColor('#F0F0F0'); // Couleur de fond des titres
            doc.rect(margin, y, 170, 10, 'F'); // Arrière-plan pour le titre
            doc.setFontSize(18);
            doc.setTextColor('#007BFF'); // Couleur du texte pour le titre
            doc.text('Curriculum Vitae', margin, y + 7);
            y += 20; // Ajoute un espace avant le début du CV

            y = addFormDataToPDF(personalInfoForm, "Informations Personnelles", margin, y);
            y = addFormDataToPDF(educationForm, "Éducation", margin, y);
            y = addFormDataToPDF(experienceForm, "Expérience Professionnelle", margin, y);
            y = addFormDataToPDF(hobbiesForm, "Loisirs et Centres d'Intérêt", margin, y);
            y = addFormDataToPDF(languagesForm, "Compétences Linguistiques", margin, y);
            y = addFormDataToPDF(technologiesForm, "Compétences Techniques", margin, y);
        }

        function generateProfessionnelCV() {
            doc.setFillColor('#E0E0E0'); // Couleur de fond des titres
            doc.rect(margin, y, 170, 10, 'F'); // Arrière-plan pour le titre
            doc.setFontSize(18);
            doc.setTextColor('#000000'); // Couleur du texte pour le titre
            doc.text('Curriculum Vitae', margin, y + 7);
            y += 20; // Ajoute un espace avant le début du CV

            y = addFormDataToPDF(personalInfoForm, "Coordonnées Personnelles", margin, y);
            y = addFormDataToPDF(educationForm, "Parcours Éducatif", margin, y);
            y = addFormDataToPDF(experienceForm, "Parcours Professionnel", margin, y);
            y = addFormDataToPDF(hobbiesForm, "Activités et Intérêts", margin, y);
            y = addFormDataToPDF(languagesForm, "Langues Parlées", margin, y);
            y = addFormDataToPDF(technologiesForm, "Compétences Informatiques", margin, y);
        }

        // Appelle la fonction appropriée en fonction du modèle sélectionné
        if (selectedModel === "modelcv1.html") {
            generateDebutantCV();
        } else if (selectedModel === "modelcv2.html") {
            generateIntermediaireCV();
        } else if (selectedModel === "modelcv3.html") {
            generateProfessionnelCV();
        }

        doc.save("cv.pdf");
    });
});
