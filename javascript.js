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

  document
    .getElementById("generate-pdf")
    .addEventListener("click", function () {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      const personalInfoForm = document.getElementById("personal-info-form");
      const educationForm = document.getElementById("education-form");
      const experienceForm = document.getElementById("experience-form");
      const hobbiesForm = document.getElementById("hobbies-form");
      const languagesForm = document.getElementById("languages-form");
      const technologiesForm = document.getElementById("technologies-form");

      let y = 10;

      function addFormDataToPDF(form, title) {
        const formData = new FormData(form);
        const formEntries = [...formData.entries()];

        doc.setFontSize(14);
        doc.text(title, 10, y);
        y += 10;

        doc.setFontSize(12);
        formEntries.forEach(([name, value]) => {
          if (value !== "on") {
            doc.text(`${name.replace(/_/g, " ")}: ${value}`, 10, y);
            y += 10;
          }
        });
        y += 10;
      }

      addFormDataToPDF(personalInfoForm, "Informations Personnelles");
      addFormDataToPDF(educationForm, "Éducation");
      addFormDataToPDF(experienceForm, "Expérience");
      addFormDataToPDF(hobbiesForm, "Hobbies");
      addFormDataToPDF(languagesForm, "Langues maîtrisées");
      addFormDataToPDF(technologiesForm, "Technologies maîtrisées");

      doc.save("cv.pdf");
    });
});

function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Définir les marges et la taille de la police
  const margin = 10;
  const fontSize = 12;

  // Fonction pour ajouter du texte avec gestion automatique du saut de ligne si nécessaire
  const addText = (text, x, y) => {
    doc.setFontSize(fontSize);
    const splitText = doc.splitTextToSize(
      text,
      doc.internal.pageSize.width - 2 * margin
    );
    doc.text(margin + x, margin + y, splitText);
  };

  // Fonction pour ajouter un titre de section
  const addSectionTitle = (title, y) => {
    doc.setFontSize(fontSize + 2);
    doc.setFont("helvetica", "bold"); // Utilisation de setFont pour définir la police et le style
    addText(title, 0, y);
    doc.setFont("helvetica", "normal"); // Réinitialisation à la police normale après le titre de section
  };

  // Le reste de votre code pour ajouter les informations au PDF...
}
