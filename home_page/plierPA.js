document.addEventListener("DOMContentLoaded", function(){
    // Sélection des éléments du DOM
    const BlocPA = document.querySelector('.PageAccueil');
    const BtnPA = document.querySelector('.btn_plierPA');

    // Fonction pour basculer l'état plié/déplié
    const toggleState = () => {
        // Bascule des classes CSS pour l'état plié/déplié
        BlocPA.classList.toggle('PageAccueil_ouvert');
        BtnPA.classList.toggle('btn_plierPA_actif');
        
        // Enregistrement de l'état dans localStorage
        localStorage.setItem('blocPAState', BlocPA.classList.contains('PageAccueil_ouvert'));
    };

    // Gestion du clic sur le bouton
    BtnPA.addEventListener('click', toggleState);

    // Vérification et application de l'état stocké en localStorage au chargement de la page
    if (localStorage.getItem('blocPAState') === 'true') {
        toggleState(); // Si l'état est "true", appliquer l'état déplié
    }
});