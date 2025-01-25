<?php
// Autoriser toutes les origines pour cette API
header("Access-Control-Allow-Origin: *");  // Autorise toutes les origines
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Méthodes autorisées
header("Access-Control-Allow-Headers: Content-Type"); // En-têtes autorisés

// Vérifier si les paramètres nécessaires sont présents
if (isset($_POST['pseudo']) && isset($_POST['points'])) {
    $pseudo = $_POST['pseudo'];
    $pointsToAdd = (int)$_POST['points'];  // Points à ajouter ou retirer

    // Si l'utilisateur existe dans notre "base de données"
    if (isset($users_points[$pseudo])) {
        // Mettre à jour les points
        $users_points[$pseudo] += $pointsToAdd;

        // Retourner le nouveau nombre de points sous forme de réponse JSON
        echo json_encode([
            'status' => 'success',
            'new_points' => $users_points[$pseudo]
        ]);
    } else {
        // Si l'utilisateur n'existe pas dans la base de données simulée
        echo json_encode(['status' => 'error', 'message' => 'Utilisateur non trouvé']);
    }
} else {
    // Si les paramètres nécessaires ne sont pas envoyés
    echo json_encode(['status' => 'error', 'message' => 'Paramètres manquants']);
}
?>
