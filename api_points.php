<?php
// Simulez une base de données de points (en vrai, vous devriez interagir avec la base de données)
// Vérifier si les paramètres nécessaires sont présents
if (isset($_POST['pseudo']) && isset($_POST['points'])) {
    $pseudo = $_POST['pseudo'];
    $pointsToAdd = (int)$_POST['points'];

    // Si l'utilisateur existe dans notre "base de données"
    if (isset($users_points[$pseudo])) {
        // Mettre à jour les points
        $users_points[$pseudo] += $pointsToAdd;

        // Retourner le nouveau nombre de points
        echo json_encode([
            'status' => 'success',
            'new_points' => $users_points[$pseudo]
        ]);
    } else {
        // Si l'utilisateur n'existe pas
        echo json_encode(['status' => 'error', 'message' => 'Utilisateur non trouvé']);
    }
} else {
    // Si les paramètres ne sont pas envoyés correctement
    echo json_encode(['status' => 'error', 'message' => 'Paramètres manquants']);
}
?>
