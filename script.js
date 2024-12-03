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
// Paramètre : "recette",  un objet représentant un produit contenant les informations du produit
// Retour : Cette fonction ne retourne rien 

function affiche(recette) {
    let nom = recette.nom
    let image = recette.img
    let difficulte = recette.difficulte
    let prepa = recette.tempPreparation
    let cuisson = recette.tempCuisson
    let portion = recette.portions
    let ingr = recette.ingredients
    let saison = recette.saison
    let ingredients = recette.ingredients
    let ingre = ""
    let étapes = ""

    ingredients.forEach(ing => {
        let quantite = ing.quantite
        let unite = ing.unite
        let aliment = ing.aliment
        ingre += `<li>${quantite} ${unite} ${aliment}</li>`
    });

    let etapes = recette.etapes
    etapes.forEach(steps => {
        let etape = steps.numeroEtape
        let desc = steps.descEtape
        étapes += `<li>${desc}</li>`
    });


    document.querySelector(".Recette").innerHTML +=
        `
<h2>${saison}</h2>
            <div class="card margin">
                <div class="flex margin30">
                <h3>${nom}</h3>
                <ul class="flex spaceBetween w60 ">
                    <li><span>Difficulté: </span> ${difficulte}</li>
                    <li><span>Portion: </span>${portion}</li>
                    <li><span>Temps de préparation: </span>${prepa}</li>
                    <li><span>Temps de cuisson: </span>${cuisson}</li>
                </ul>
                </div>
                <div class= "flex spaceBetween">
                    <div class="w30">
                        <h4>Ingrédients</h4>
                        <ul>
                            ${ingre}
                        </ul>
                    </div>
                <div class="w30">
                    <h4>Etapes</h4>
                    <ol>
                        ${étapes}
                    </ol>
                </div>
                <div class="w30">
                    <img src="${image}" alt="">
                </div>
            </div>
`
}