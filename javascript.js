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

    // Ajoutez ici d'autres fonctionnalités JavaScript spécifiques à votre formulaire, comme ajouter des éléments dynamiquement.
    // Exemple: Ajouter une fonction pour ajouter dynamiquement des diplômes, des expériences, des hobbies, etc.
    // Exemple pour ajouter un diplôme
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
            </div>`;
        educationContainer.appendChild(newEducationItem);
    }

    // Ajoutez d'autres fonctions pour gérer l'ajout dynamique d'expériences, hobbies, langues, etc.
});
