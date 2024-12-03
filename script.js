/*
Etape 1 : J'analyse la donnée
Etape 2 : Je créer mon modèle de carte en HTML
Etape 3 : Je récupère la donnée et je l'affiche en console
Etape 4 : Je stock le chemin vers la donnée dans des variables
Etape 5 : Je créer les cartes remplies dynamiquement 
6. Je les envois dans le DOM
*/

//on donne l'url du site à appeller
fetch('data.json')
    .then((rep) => {
        //js reçoit une donnée 
        return rep.json()
    })
    .then(donnee => {
        //ensuite j'ai accès à ma donnée
        console.log(donnee)
        //ici j'ai une liste de produits
        //je boucle sur le tableau de données
        donnee.forEach(produit => {
            affiche(produit)
        });
    })
// Rôle : Afficher un produit dans la page HTML sous forme de carte
// Paramètre : "product",  un objet représentant un produit contenant les informations du produit
// Retour : Cette fonction ne retourne rien (elle effectue des manipulations DOM)

function affiche(recette) {
    let nom = recette.nom
    let image = recette.img
    let difficulte = recette.difficulte
    let prepa = recette.tempPreparation
    let cuisson = recette.tempCuisson
    let portion  = recette.portions
    let ingr = recette.ingredients
    let saison = recette.saison

    let ingredients= recette.ingredients
    ingredients.forEach(ing => {
        let quantite = ing.quantite
        let unite = ing.unite
        let aliment = ing.aliment
    })

    let etapes= recette.etapes
    etapes.forEach(steps=> {
        let etape = steps.numeroEtape
        let desc = steps.descEtape
    })
}