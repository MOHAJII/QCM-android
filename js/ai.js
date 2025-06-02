// js/ai.js
// Questions for AI module
const questions = [
    // Section 1 : Introduction à l'IA (10 questions)
    {
        question: "Qu'est-ce que l'intelligence artificielle (IA) ?",
        options: [
            "La simulation de l'intelligence humaine dans des machines programmées pour penser et apprendre comme les humains.",
            "La création de robots autonomes capables de prendre des décisions sans intervention humaine.",
            "L'utilisation de données massives pour prédire des tendances futures.",
            "Le développement de logiciels qui peuvent résoudre des problèmes complexes sans aide humaine."
        ],
        correct: "La simulation de l'intelligence humaine dans des machines programmées pour penser et apprendre comme les humains.",
        explanation: "L'IA est définie comme la simulation de l'intelligence humaine dans des machines programmées pour penser et apprendre comme les humains."
    },
    {
        question: "Quelles sont les technologies et approches englobées par l'IA ?",
        options: [
            "L'apprentissage automatique, le deep learning, le traitement du langage naturel, la vision par ordinateur, etc.",
            "La robotique, l'automatisation industrielle, la domotique, etc.",
            "Les bases de données, les systèmes d'information, les réseaux informatiques, etc.",
            "La programmation orientée objet, les algorithmes de tri, les structures de données, etc."
        ],
        correct: "L'apprentissage automatique, le deep learning, le traitement du langage naturel, la vision par ordinateur, etc.",
        explanation: "L'IA englobe des technologies comme l'apprentissage automatique, le deep learning, le traitement du langage naturel et la vision par ordinateur."
    },
    {
        question: "Quel est l'objectif principal de l'IA ?",
        options: [
            "Permettre aux ordinateurs d'accomplir des tâches qui nécessitent généralement une intelligence humaine.",
            "Remplacer entièrement les humains dans toutes les tâches cognitives.",
            "Créer des machines qui peuvent surpasser les capacités humaines dans tous les domaines.",
            "Développer des systèmes qui peuvent apprendre de manière autonome sans données."
        ],
        correct: "Permettre aux ordinateurs d'accomplir des tâches qui nécessitent généralement une intelligence humaine.",
        explanation: "L'objectif principal de l'IA est de permettre aux ordinateurs d'effectuer des tâches nécessitant une intelligence humaine."
    },
    {
        question: "Qui sont les auteurs du livre 'Intelligence Artificielle : Une Approche Moderne' ?",
        options: [
            "Stuart Russell et Peter Norvig",
            "Alan Turing et John McCarthy",
            "Marvin Minsky et Seymour Papert",
            "Geoffrey Hinton et Yann LeCun"
        ],
        correct: "Stuart Russell et Peter Norvig",
        explanation: "Le livre de référence en IA est 'Intelligence Artificielle : Une Approche Moderne' par Stuart Russell et Peter Norvig."
    },
    {
        question: "Quelle est la tâche principale de l'apprentissage automatique (machine learning) ?",
        options: [
            "Permettre aux machines d'apprendre à partir de données sans être explicitement programmées.",
            "Créer des algorithmes qui peuvent résoudre des problèmes spécifiques.",
            "Développer des systèmes experts basés sur des règles définies par des humains.",
            "Simuler le cerveau humain pour reproduire son fonctionnement."
        ],
        correct: "Permettre aux machines d'apprendre à partir de données sans être explicitement programmées.",
        explanation: "L'apprentissage automatique permet aux machines d'apprendre à partir de données sans programmation explicite."
    },
    {
        question: "Qu'est-ce que le deep learning ?",
        options: [
            "Une sous-discipline de l'apprentissage automatique qui utilise des réseaux de neurones profonds.",
            "Une méthode pour apprendre à partir de données non structurées.",
            "Une technique pour optimiser les algorithmes d'apprentissage.",
            "Une approche pour résoudre des problèmes de classification uniquement."
        ],
        correct: "Une sous-discipline de l'apprentissage automatique qui utilise des réseaux de neurones profonds.",
        explanation: "Le deep learning utilise des réseaux de neurones profonds pour apprendre à partir de données."
    },
    {
        question: "Quel est un exemple de tâche qui nécessite généralement une intelligence humaine ?",
        options: [
            "Comprendre le langage naturel",
            "Effectuer des calculs arithmétiques simples",
            "Stocker des données dans une base de données",
            "Exécuter des instructions séquentielles"
        ],
        correct: "Comprendre le langage naturel",
        explanation: "Comprendre le langage naturel nécessite une intelligence humaine."
    },
    {
        question: "Quelle est la différence entre l'apprentissage supervisé et non supervisé ?",
        options: [
            "L'apprentissage supervisé utilise des données étiquetées, tandis que l'apprentissage non supervisé utilise des données non étiquetées.",
            "L'apprentissage supervisé est utilisé pour la classification, tandis que l'apprentissage non supervisé est utilisé pour la régression.",
            "L'apprentissage supervisé nécessite plus de données que l'apprentissage non supervisé.",
            "L'apprentissage supervisé est plus rapide que l'apprentissage non supervisé."
        ],
        correct: "L'apprentissage supervisé utilise des données étiquetées, tandis que l'apprentissage non supervisé utilise des données non étiquetées.",
        explanation: "L'apprentissage supervisé repose sur des données étiquetées, contrairement à l'apprentissage non supervisé."
    },
    {
        question: "Qu'est-ce que le traitement du langage naturel (NLP) ?",
        options: [
            "Une branche de l'IA qui se concentre sur l'interaction entre les ordinateurs et le langage humain.",
            "Une technique pour traduire des langues étrangères.",
            "Un algorithme pour générer du texte automatiquement.",
            "Un système pour reconnaître la parole."
        ],
        correct: "Une branche de l'IA qui se concentre sur l'interaction entre les ordinateurs et le langage humain.",
        explanation: "Le NLP se focalise sur l'interaction entre ordinateurs et langage humain."
    },
    {
        question: "Quel est un exemple de problème de vision par ordinateur ?",
        options: [
            "Reconnaître des objets dans une image",
            "Prédire le prix d'une maison",
            "Classer des emails comme spam ou non spam",
            "Prédire la demande de produits"
        ],
        correct: "Reconnaître des objets dans une image",
        explanation: "La vision par ordinateur permet de reconnaître des objets dans des images."
    },

    // Section 2 : Régression (45 questions)
    {
        question: "Qu'est-ce que la régression dans le contexte de l'apprentissage supervisé ?",
        options: [
            "Prédire la valeur d'une variable continue à partir de variables d'entrée.",
            "Classer des données dans des catégories discrètes.",
            "Trouver des motifs dans des données non étiquetées.",
            "Optimiser une fonction objectif sans données."
        ],
        correct: "Prédire la valeur d'une variable continue à partir de variables d'entrée.",
        explanation: "La régression prédit des valeurs continues, comme le prix ou la température."
    },
    {
        question: "Quelle est la différence entre la régression simple et la régression multiple ?",
        options: [
            "La régression simple utilise une seule variable d'entrée, tandis que la régression multiple en utilise plusieurs.",
            "La régression simple est utilisée pour la classification, tandis que la régression multiple est utilisée pour la régression.",
            "La régression simple est plus précise que la régression multiple.",
            "La régression multiple est plus rapide à calculer que la régression simple."
        ],
        correct: "La régression simple utilise une seule variable d'entrée, tandis que la régression multiple en utilise plusieurs.",
        explanation: "La régression simple utilise une variable, la régression multiple en utilise plusieurs."
    },
    {
        question: "Quel est le modèle mathématique de la régression linéaire simple ?",
        options: [
            "y = a x + b",
            "y = a x² + b x + c",
            "y = 1 / (1 + e^{-x})",
            "y = log(x) + b"
        ],
        correct: "y = a x + b",
        explanation: "La régression linéaire simple est une fonction affine : y = a x + b."
    },
    {
        question: "Quelle est la fonction coût couramment utilisée pour la régression linéaire ?",
        options: [
            "La somme des carrés des erreurs (SSE)",
            "La somme des valeurs absolues des erreurs",
            "La probabilité logistique",
            "La fonction sigmoïde"
        ],
        correct: "La somme des carrés des erreurs (SSE)",
        explanation: "La SSE mesure la différence entre les valeurs prédites et réelles."
    },
    {
        question: "Quel algorithme est souvent utilisé pour minimiser la fonction coût dans la régression linéaire ?",
        options: [
            "La descente de gradient",
            "L'algorithme de Dijkstra",
            "L'algorithme de Kruskal",
            "L'algorithme de Bellman-Ford"
        ],
        correct: "La descente de gradient",
        explanation: "La descente de gradient ajuste les paramètres pour minimiser la fonction coût."
    },
    {
        question: "Que représente le taux d'apprentissage (learning rate) dans la descente de gradient ?",
        options: [
            "La vitesse à laquelle les paramètres sont mis à jour",
            "Le nombre d'itérations nécessaires pour converger",
            "La précision du modèle",
            "La taille du dataset"
        ],
        correct: "La vitesse à laquelle les paramètres sont mis à jour",
        explanation: "Le taux d'apprentissage contrôle la taille des pas dans la descente de gradient."
    },
    {
        question: "Pourquoi est-il important de diviser les données en ensembles d'entraînement et de test ?",
        options: [
            "Pour évaluer la performance du modèle sur des données non vues",
            "Pour augmenter la taille du dataset",
            "Pour réduire le temps de calcul",
            "Pour simplifier le modèle"
        ],
        correct: "Pour évaluer la performance du modèle sur des données non vues",
        explanation: "Cela permet d'évaluer la généralisation du modèle."
    },
    {
        question: "Qu'est-ce que la mise à l'échelle des caractéristiques (feature scaling) ?",
        options: [
            "Une technique pour normaliser les variables d'entrée afin qu'elles soient sur la même échelle",
            "Une méthode pour sélectionner les caractéristiques les plus importantes",
            "Un algorithme pour réduire la dimensionnalité des données",
            "Une technique pour augmenter la taille du dataset"
        ],
        correct: "Une technique pour normaliser les variables d'entrée afin qu'elles soient sur la même échelle",
        explanation: "La mise à l'échelle améliore la convergence et la performance."
    },
    {
        question: "Quelle est une technique courante de mise à l'échelle des caractéristiques ?",
        options: [
            "La normalisation Min-Max",
            "La régression logistique",
            "La descente de gradient",
            "La validation croisée"
        ],
        correct: "La normalisation Min-Max",
        explanation: "La normalisation Min-Max ajuste les valeurs entre 0 et 1."
    },
    {
        question: "Qu'est-ce que la régression polynomiale ?",
        options: [
            "Une extension de la régression linéaire qui utilise des termes polynomiaux pour modéliser des relations non linéaires",
            "Une méthode pour classer des données en plusieurs catégories",
            "Une technique pour réduire le nombre de caractéristiques",
            "Un algorithme pour optimiser la fonction coût"
        ],
        correct: "Une extension de la régression linéaire qui utilise des termes polynomiaux pour modéliser des relations non linéaires",
        explanation: "La régression polynomiale modélise des relations non linéaires."
    },
    {
        question: "Comment sélectionner le degré optimal d'une régression polynomiale ?",
        options: [
            "En utilisant la validation croisée pour évaluer la performance du modèle pour différents degrés",
            "En choisissant le degré le plus élevé possible",
            "En utilisant la méthode des moindres carrés",
            "En calculant la corrélation entre les variables"
        ],
        correct: "En utilisant la validation croisée pour évaluer la performance du modèle pour différents degrés",
        explanation: "La validation croisée choisit le meilleur degré."
    },
    {
        question: "Qu'est-ce que l'overfitting dans le contexte de la régression ?",
        options: [
            "Lorsque le modèle est trop complexe et s'ajuste trop aux données d'entraînement, mais généralise mal",
            "Lorsque le modèle est trop simple et ne capture pas les relations dans les données",
            "Lorsque le modèle ne converge pas lors de l'entraînement",
            "Lorsque le modèle prédit des valeurs négatives"
        ],
        correct: "Lorsque le modèle est trop complexe et s'ajuste trop aux données d'entraînement, mais généralise mal",
        explanation: "L'overfitting réduit la capacité de généralisation."
    },
    {
        question: "Quelle est une méthode pour éviter l'overfitting dans la régression ?",
        options: [
            "La régularisation",
            "L'augmentation du nombre de caractéristiques",
            "L'utilisation d'un taux d'apprentissage élevé",
            "La réduction de la taille du dataset"
        ],
        correct: "La régularisation",
        explanation: "La régularisation limite la complexité du modèle."
    },
    {
        question: "Qu'est-ce que la régularisation L1 (LASSO) ?",
        options: [
            "Une technique qui ajoute la somme des valeurs absolues des coefficients à la fonction coût",
            "Une méthode qui ajoute la somme des carrés des coefficients à la fonction coût",
            "Une approche qui sélectionne aléatoirement des caractéristiques",
            "Une technique qui augmente la taille du dataset"
        ],
        correct: "Une technique qui ajoute la somme des valeurs absolues des coefficients à la fonction coût",
        explanation: "L1 peut mettre certains coefficients à zéro."
    },
    {
        question: "Qu'est-ce que la régularisation L2 (Ridge) ?",
        options: [
            "Une technique qui ajoute la somme des carrés des coefficients à la fonction coût",
            "Une méthode qui ajoute la somme des valeurs absolues des coefficients à la fonction coût",
            "Une approche qui utilise la descente de gradient pour optimiser le modèle",
            "Une technique qui divise les données en ensembles d'entraînement et de test"
        ],
        correct: "Une technique qui ajoute la somme des carrés des coefficients à la fonction coût",
        explanation: "L2 pénalise les grands coefficients."
    },
    {
        question: "Quel est l'effet de la régularisation L1 sur les coefficients du modèle ?",
        options: [
            "Elle peut mettre certains coefficients à zéro, effectuant ainsi une sélection de caractéristiques",
            "Elle réduit tous les coefficients proportionnellement",
            "Elle augmente les coefficients pour améliorer la précision",
            "Elle ne modifie pas les coefficients"
        ],
        correct: "Elle peut mettre certains coefficients à zéro, effectuant ainsi une sélection de caractéristiques",
        explanation: "L1 sélectionne automatiquement les caractéristiques."
    },
    {
        question: "Quel est l'effet de la régularisation L2 sur les coefficients du modèle ?",
        options: [
            "Elle réduit les coefficients mais ne les met pas à zéro",
            "Elle met certains coefficients à zéro",
            "Elle augmente les coefficients pour améliorer la précision",
            "Elle ne modifie pas les coefficients"
        ],
        correct: "Elle réduit les coefficients mais ne les met pas à zéro",
        explanation: "L2 réduit les coefficients sans les éliminer."
    },
    {
        question: "Qu'est-ce que la validation croisée ?",
        options: [
            "Une technique pour évaluer la performance du modèle en divisant les données en plusieurs sous-ensembles",
            "Une méthode pour augmenter la taille du dataset",
            "Un algorithme pour optimiser la fonction coût",
            "Une technique pour sélectionner les caractéristiques"
        ],
        correct: "Une technique pour évaluer la performance du modèle en divisant les données en plusieurs sous-ensembles",
        explanation: "La validation croisée teste la généralisation."
    },
    {
        question: "Quel est l'objectif de la division des données en ensembles d'entraînement et de test ?",
        options: [
            "Éviter le surajustement et évaluer la performance du modèle sur des données non vues",
            "Réduire le temps de calcul",
            "Augmenter la précision du modèle",
            "Simplifier le modèle"
        ],
        correct: "Éviter le surajustement et évaluer la performance du modèle sur des données non vues",
        explanation: "Cela évite le surajustement."
    },
    {
        question: "Qu'est-ce que le Principal Component Regression (PCR) ?",
        options: [
            "Une technique qui combine la régression linéaire avec l'analyse en composantes principales pour réduire la dimensionnalité",
            "Une méthode pour classer des données en plusieurs catégories",
            "Un algorithme pour optimiser la fonction coût",
            "Une technique pour augmenter la taille du dataset"
        ],
        correct: "Une technique qui combine la régression linéaire avec l'analyse en composantes principales pour réduire la dimensionnalité",
        explanation: "Le PCR réduit la dimensionnalité avant la régression."
    },
    {
        question: "Quelle est la formule de la fonction sigmoïde utilisée dans la régression logistique ?",
        options: [
            "σ(z) = 1 / (1 + e^{-z})",
            "σ(z) = e^{-z}",
            "σ(z) = log(1 + e^z)",
            "σ(z) = e^z / (e^z + 1)"
        ],
        correct: "σ(z) = 1 / (1 + e^{-z})",
        explanation: "La sigmoïde mappe les valeurs réelles à [0, 1]."
    },
    {
        question: "À quoi sert la fonction sigmoïde dans la régression logistique ?",
        options: [
            "Elle transforme les prédictions linéaires en probabilités pour la classification binaire",
            "Elle optimise la fonction coût",
            "Elle normalise les caractéristiques",
            "Elle sélectionne les caractéristiques importantes"
        ],
        correct: "Elle transforme les prédictions linéaires en probabilités pour la classification binaire",
        explanation: "La sigmoïde génère des probabilités."
    },
    {
        question: "Quelle est la fonction coût pour la régression logistique ?",
        options: [
            "La log-vraisemblance négative",
            "La somme des carrés des erreurs",
            "La somme des valeurs absolues des erreurs",
            "La fonction hinge loss"
        ],
        correct: "La log-vraisemblance négative",
        explanation: "Elle mesure l'écart entre prédictions et labels."
    },
    {
        question: "Comment interpréter la sortie de la régression logistique ?",
        options: [
            "La probabilité qu'une observation appartienne à la classe positive",
            "La valeur continue prédite",
            "La distance à l'hyperplan",
            "Le nombre de voisins les plus proches"
        ],
        correct: "La probabilité qu'une observation appartienne à la classe positive",
        explanation: "La sortie est une probabilité."
    },
    {
        question: "Quelle est la méthode utilisée pour entraîner la régression logistique ?",
        options: [
            "La descente de gradient pour minimiser la fonction coût",
            "La méthode des moindres carrés",
            "L'algorithme de Dijkstra",
            "L'algorithme de Kruskal"
        ],
        correct: "La descente de gradient pour minimiser la fonction coût",
        explanation: "La descente de gradient optimise les paramètres."
    },
    {
        question: "Qu'est-ce que la régression logistique multinomiale ?",
        options: [
            "Une extension de la régression logistique pour la classification multiclasses",
            "Une technique pour la régression avec plusieurs variables cibles",
            "Une méthode pour la régression non linéaire",
            "Une approche pour la sélection de caractéristiques"
        ],
        correct: "Une extension de la régression logistique pour la classification multiclasses",
        explanation: "Elle gère plus de deux classes."
    },
    {
        question: "Quelle est l'approche One-vs-Rest (OvR) dans la classification multiclasses ?",
        options: [
            "Entraîner un classificateur binaire pour chaque classe par rapport aux autres classes",
            "Entraîner un classificateur pour chaque paire de classes",
            "Utiliser un seul classificateur pour toutes les classes",
            "Sélectionner la classe avec la plus haute probabilité"
        ],
        correct: "Entraîner un classificateur binaire pour chaque classe par rapport aux autres classes",
        explanation: "OvR entraîne un classificateur par classe."
    },
    {
        question: "Quelle est l'approche One-vs-One (OvO) dans la classification multiclasses ?",
        options: [
            "Entraîner un classificateur pour chaque paire de classes",
            "Entraîner un classificateur pour chaque classe par rapport aux autres",
            "Utiliser un seul classificateur pour toutes les classes",
            "Sélectionner la classe avec la plus haute probabilité"
        ],
        correct: "Entraîner un classificateur pour chaque paire de classes",
        explanation: "OvO utilise un vote majoritaire."
    },
    {
        question: "Quel est le principe de l'algorithme K-Nearest Neighbors (KNN) ?",
        options: [
            "Classer une nouvelle observation en fonction de la majorité des classes de ses k voisins les plus proches",
            "Trouver un hyperplan qui sépare les classes",
            "Utiliser une fonction sigmoïde pour prédire les probabilités",
            "Minimiser la fonction coût avec la descente de gradient"
        ],
        correct: "Classer une nouvelle observation en fonction de la majorité des classes de ses k voisins les plus proches",
        explanation: "KNN repose sur les voisins les plus proches."
    },
    {
        question: "Quel est un inconvénient de l'algorithme KNN ?",
        options: [
            "Il est sensible à la dimensionnalité et peut être lent pour de grands datasets",
            "Il nécessite un grand nombre de paramètres à ajuster",
            "Il ne peut pas gérer des données non linéaires",
            "Il est uniquement applicable à la classification binaire"
        ],
        correct: "Il est sensible à la dimensionnalité et peut être lent pour de grands datasets",
        explanation: "KNN est lent avec de grands datasets."
    },
    {
        question: "Comment choisir la valeur de k dans KNN ?",
        options: [
            "En utilisant la validation croisée pour trouver la valeur qui minimise l'erreur de classification",
            "En choisissant k = 1 pour une précision maximale",
            "En utilisant la racine carrée du nombre de points dans le dataset",
            "En choisissant k = nombre de classes"
        ],
        correct: "En utilisant la validation croisée pour trouver la valeur qui minimise l'erreur de classification",
        explanation: "La validation croisée optimise k."
    },
    {
        question: "Qu'est-ce que la distance euclidienne dans KNN ?",
        options: [
            "Une mesure de similarité entre deux points dans l'espace des caractéristiques",
            "Une fonction de perte pour la classification",
            "Une technique de régularisation",
            "Une méthode pour normaliser les données"
        ],
        correct: "Une mesure de similarité entre deux points dans l'espace des caractéristiques",
        explanation: "Elle mesure la proximité entre points."
    },
    {
        question: "Quel est l'effet d'un k trop petit dans KNN ?",
        options: [
            "Le modèle peut être sensible au bruit et surajuster les données",
            "Le modèle peut être trop simple et sous-ajuster les données",
            "Le modèle sera plus rapide à calculer",
            "Le modèle ne pourra pas classer correctement les données"
        ],
        correct: "Le modèle peut être sensible au bruit et surajuster les données",
        explanation: "Un k petit entraîne un surajustement."
    },
    {
        question: "Quel est l'effet d'un k trop grand dans KNN ?",
        options: [
            "Le modèle peut être trop lisse et sous-ajuster les données",
            "Le modèle sera plus précis",
            "Le modèle sera plus rapide à calculer",
            "Le modèle ne pourra pas classer correctement les données"
        ],
        correct: "Le modèle peut être trop lisse et sous-ajuster les données",
        explanation: "Un k grand entraîne un sous-ajustement."
    },
    {
        question: "Qu'est-ce que la régression logistique non linéaire ?",
        options: [
            "Une extension de la régression logistique qui utilise des termes polynomiaux pour modéliser des frontières non linéaires",
            "Une technique pour la régression avec plusieurs variables cibles",
            "Une méthode pour la classification multiclasses",
            "Une approche pour la sélection de caractéristiques"
        ],
        correct: "Une extension de la régression logistique qui utilise des termes polynomiaux pour modéliser des frontières non linéaires",
        explanation: "Elle modélise des relations non linéaires."
    },
    {
        question: "Quelle est la fonction de perte hinge utilisée dans le SVM ?",
        options: [
            "max(0, 1 - y_i (w^T x_i + b))",
            "(y_i - ŷ_i)^2",
            "-log(ŷ_i)",
            "|y_i - ŷ_i|"
        ],
        correct: "max(0, 1 - y_i (w^T x_i + b))",
        explanation: "Elle pénalise les points mal classés."
    },
    {
        question: "Quel est le rôle de l'hyperparamètre C dans le SVM ?",
        options: [
            "Il contrôle le compromis entre la maximisation de la marge et la minimisation des erreurs de classification",
            "Il détermine le nombre de vecteurs de support",
            "Il fixe la dimension de l'espace des caractéristiques",
            "Il choisit le noyau à utiliser"
        ],
        correct: "Il contrôle le compromis entre la maximisation de la marge et la minimisation des erreurs de classification",
        explanation: "C ajuste la tolérance aux erreurs."
    },
    {
        question: "Que sont les vecteurs de support dans le SVM ?",
        options: [
            "Les points de données les plus proches de l'hyperplan de séparation",
            "Tous les points de données dans le dataset",
            "Les points de données qui sont mal classés",
            "Les points de données qui sont loin de l'hyperplan"
        ],
        correct: "Les points de données les plus proches de l'hyperplan de séparation",
        explanation: "Ils définissent l'hyperplan."
    },
    {
        question: "Quel est l'objectif principal du SVM ?",
        options: [
            "Maximiser la marge entre les classes tout en minimisant les erreurs de classification",
            "Minimiser la distance entre tous les points et l'hyperplan",
            "Maximiser le nombre de vecteurs de support",
            "Minimiser la complexité du modèle"
        ],
        correct: "Maximiser la marge entre les classes tout en minimisant les erreurs de classification",
        explanation: "Le SVM maximise la marge."
    },
    {
        question: "Quelle est la formulation de la fonction objective du SVM à marge souple ?",
        options: [
            "min_{w, b} 1/2 ||w||^2 + C ∑_{i=1}^m max(0, 1 - y_i (w^T x_i + b))",
            "min_{w, b} ∑_{i=1}^m (y_i - w^T x_i - b)^2",
            "min_{w, b} ∑_{i=1}^m |y_i - w^T x_i - b|",
            "min_{w, b} 1/2 ||w||^2"
        ],
        correct: "min_{w, b} 1/2 ||w||^2 + C ∑_{i=1}^m max(0, 1 - y_i (w^T x_i + b))",
        explanation: "Elle combine marge et perte hinge."
    },
    {
        question: "Comment choisir la valeur de C dans le SVM ?",
        options: [
            "En utilisant la validation croisée pour trouver la valeur qui minimise l'erreur de classification",
            "En choisissant C = 1 par défaut",
            "En utilisant la valeur la plus grande possible",
            "En choisissant C = 0 pour une marge maximale"
        ],
        correct: "En utilisant la validation croisée pour trouver la valeur qui minimise l'erreur de classification",
        explanation: "La validation croisée optimise C."
    },
    {
        question: "Qu'est-ce que la descente par coordonnées dans le contexte du SVM ?",
        options: [
            "Une méthode d'optimisation qui ajuste une variable à la fois pour minimiser la fonction objectif",
            "Une technique pour sélectionner les vecteurs de support",
            "Un algorithme pour calculer la distance entre les points",
            "Une méthode pour normaliser les données"
        ],
        correct: "Une méthode d'optimisation qui ajuste une variable à la fois pour minimiser la fonction objectif",
        explanation: "Elle optimise itérativement."
    },
    {
        question: "Quel est l'effet d'un C très grand dans le SVM ?",
        options: [
            "Le modèle pénalise fortement les erreurs de classification, ce qui peut conduire à un surajustement",
            "Le modèle tolère plus d'erreurs, ce qui peut conduire à un sous-ajustement",
            "Le modèle aura une marge plus large",
            "Le modèle ne convergera pas"
        ],
        correct: "Le modèle pénalise fortement les erreurs de classification, ce qui peut conduire à un surajustement",
        explanation: "Un C grand surajuste."
    },
    {
        question: "Quel est l'effet d'un C très petit dans le SVM ?",
        options: [
            "Le modèle tolère plus d'erreurs, ce qui peut conduire à une marge plus large et à un sous-ajustement",
            "Le modèle pénalise fortement les erreurs, ce qui peut conduire à un surajustement",
            "Le modèle aura moins de vecteurs de support",
            "Le modèle ne convergera pas"
        ],
        correct: "Le modèle tolère plus d'erreurs, ce qui peut conduire à une marge plus large et à un sous-ajustement",
        explanation: "Un C petit sous-ajuste."
    },
    {
        question: "Pourquoi utilise-t-on la formulation Hinge Loss dans le SVM ?",
        options: [
            "Pour transformer l'optimisation avec contraintes en une optimisation sans contraintes",
            "Pour calculer la distance entre les points",
            "Pour normaliser les caractéristiques",
            "Pour sélectionner les caractéristiques importantes"
        ],
        correct: "Pour transformer l'optimisation avec contraintes en une optimisation sans contraintes",
        explanation: "Elle simplifie l'optimisation."
    },

    // Section 3 : Classification (40 questions)
    {
        question: "Qu'est-ce que la classification dans le contexte de l'apprentissage supervisé ?",
        options: [
            "Prédire la classe ou la catégorie d'une observation à partir de variables d'entrée",
            "Prédire une valeur continue à partir de variables d'entrée",
            "Trouver des motifs dans des données non étiquetées",
            "Optimiser une fonction objectif sans données"
        ],
        correct: "Prédire la classe ou la catégorie d'une observation à partir de variables d'entrée",
        explanation: "La classification prédit des catégories discrètes."
    },
    {
        question: "Quelle est la différence entre la classification binaire et la classification multiclasses ?",
        options: [
            "La classification binaire a deux classes, tandis que la classification multiclasses en a plus de deux",
            "La classification binaire est plus précise que la classification multiclasses",
            "La classification multiclasses est plus rapide à calculer",
            "La classification binaire est utilisée pour la régression"
        ],
        correct: "La classification binaire a deux classes, tandis que la classification multiclasses en a plus de deux",
        explanation: "Binaire = 2 classes, multiclasses > 2."
    },
    {
        question: "Quel algorithme est couramment utilisé pour la classification binaire ?",
        options: [
            "La régression logistique",
            "La régression linéaire",
            "L'algorithme de Dijkstra",
            "L'algorithme de Kruskal"
        ],
        correct: "La régression logistique",
        explanation: "La régression logistique est adaptée à la classification binaire."
    },
    {
        question: "Quelle fonction est utilisée dans la régression logistique pour mapper les prédictions à des probabilités ?",
        options: [
            "La fonction sigmoïde",
            "La fonction linéaire",
            "La fonction exponentielle",
            "La fonction logarithmique"
        ],
        correct: "La fonction sigmoïde",
        explanation: "La sigmoïde génère des probabilités."
    },
    {
        question: "Quelle est la plage de valeurs de la fonction sigmoïde ?",
        options: [
            "Entre 0 et 1",
            "Entre -1 et 1",
            "Entre 0 et ∞",
            "Entre -∞ et ∞"
        ],
        correct: "Entre 0 et 1",
        explanation: "La sigmoïde produit des valeurs entre 0 et 1."
    },
    {
        question: "Comment interpréter la probabilité prédite par la régression logistique ?",
        options: [
            "La probabilité que l'observation appartienne à la classe positive",
            "La distance à l'hyperplan",
            "Le nombre de voisins les plus proches",
            "La valeur continue prédite"
        ],
        correct: "La probabilité que l'observation appartienne à la classe positive",
        explanation: "Elle indique la probabilité de la classe positive."
    },
    {
        question: "Quelle est la fonction coût pour la régression logistique ?",
        options: [
            "La log-vraisemblance négative",
            "La somme des carrés des erreurs",
            "La somme des valeurs absolues des erreurs",
            "La fonction hinge loss"
        ],
        correct: "La log-vraisemblance négative",
        explanation: "Elle mesure l'écart entre prédictions et labels."
    },
    {
        question: "Comment la régression logistique gère-t-elle les données non linéairement séparables ?",
        options: [
            "En ajoutant des termes polynomiaux ou en utilisant des transformations non linéaires",
            "En utilisant un taux d'apprentissage élevé",
            "En augmentant la taille du dataset",
            "En réduisant le nombre de caractéristiques"
        ],
        correct: "En ajoutant des termes polynomiaux ou en utilisant des transformations non linéaires",
        explanation: "Les termes polynomiaux permettent une séparation non linéaire."
    },
    {
        question: "Quelle est l'approche One-vs-Rest (OvR) pour la classification multiclasses ?",
        options: [
            "Entraîner un classificateur binaire pour chaque classe par rapport aux autres classes",
            "Entraîner un classificateur pour chaque paire de classes",
            "Utiliser un seul classificateur pour toutes les classes",
            "Sélectionner la classe avec la plus haute probabilité"
        ],
        correct: "Entraîner un classificateur binaire pour chaque classe par rapport aux autres classes",
        explanation: "OvR entraîne un classificateur par classe."
    },
    {
        question: "Quelle est l'approche One-vs-One (OvO) pour la classification multiclasses ?",
        options: [
            "Entraîner un classificateur pour chaque paire de classes",
            "Entraîner un classificateur pour chaque classe par rapport aux autres",
            "Utiliser un seul classificateur pour toutes les classes",
            "Sélectionner la classe avec la plus haute probabilité"
        ],
        correct: "Entraîner un classificateur pour chaque paire de classes",
        explanation: "OvO utilise un vote majoritaire."
    },
    {
        question: "Quel est le principe de l'algorithme K-Nearest Neighbors (KNN) ?",
        options: [
            "Classer une nouvelle observation en fonction de la majorité des classes de ses k voisins les plus proches",
            "Trouver un hyperplan qui sépare les classes",
            "Utiliser une fonction sigmoïde pour prédire les probabilités",
            "Minimiser la fonction coût avec la descente de gradient"
        ],
        correct: "Classer une nouvelle observation en fonction de la majorité des classes de ses k voisins les plus proches",
        explanation: "KNN repose sur les voisins les plus proches."
    },
    {
        question: "Comment choisir la valeur de k dans KNN ?",
        options: [
            "En utilisant la validation croisée pour trouver la valeur qui minimise l'erreur de classification",
            "En choisissant k = 1 pour une précision maximale",
            "En utilisant la racine carrée du nombre de points dans le dataset",
            "En choisissant k = nombre de classes"
        ],
        correct: "En utilisant la validation croisée pour trouver la valeur qui minimise l'erreur de classification",
        explanation: "La validation croisée optimise k."
    },
    {
        question: "Qu'est-ce que la distance euclidienne dans KNN ?",
        options: [
            "Une mesure de similarité entre deux points dans l'espace des caractéristiques",
            "Une fonction de perte pour la classification",
            "Une technique de régularisation",
            "Une méthode pour normaliser les données"
        ],
        correct: "Une mesure de similarité entre deux points dans l'espace des caractéristiques",
        explanation: "Elle mesure la proximité entre points."
    },
    {
        question: "Quel est l'effet d'un k trop petit dans KNN ?",
        options: [
            "Le modèle peut être sensible au bruit et surajuster les données",
            "Le modèle peut être trop simple et sous-ajuster les données",
            "Le modèle sera plus rapide à calculer",
            "Le modèle ne pourra pas classer correctement les données"
        ],
        correct: "Le modèle peut être sensible au bruit et surajuster les données",
        explanation: "Un k petit entraîne un surajustement."
    },
    {
        question: "Quel est l'effet d'un k trop grand dans KNN ?",
        options: [
            "Le modèle peut être trop lisse et sous-ajuster les données",
            "Le modèle sera plus précis",
            "Le modèle sera plus rapide à calculer",
            "Le modèle ne pourra pas classer correctement les données"
        ],
        correct: "Le modèle peut être trop lisse et sous-ajuster les données",
        explanation: "Un k grand entraîne un sous-ajustement."
    },
    {
        question: "Qu'est-ce que la régression logistique non linéaire ?",
        options: [
            "Une extension de la régression logistique qui utilise des termes polynomiaux pour modéliser des frontières non linéaires",
            "Une technique pour la régression avec plusieurs variables cibles",
            "Une méthode pour la classification multiclasses",
            "Une approche pour la sélection de caractéristiques"
        ],
        correct: "Une extension de la régression logistique qui utilise des termes polynomiaux pour modéliser des frontières non linéaires",
        explanation: "Elle modélise des relations non linéaires."
    },
    {
        question: "Quelle est la fonction de perte hinge utilisée dans le SVM ?",
        options: [
            "max(0, 1 - y_i (w^T x_i + b))",
            "(y_i - ŷ_i)^2",
            "-log(ŷ_i)",
            "|y_i - ŷ_i|"
        ],
        correct: "max(0, 1 - y_i (w^T x_i + b))",
        explanation: "Elle pénalise les points mal classés."
    },
    {
        question: "Quel est le rôle de l'hyperparamètre C dans le SVM ?",
        options: [
            "Il contrôle le compromis entre la maximisation de la marge et la minimisation des erreurs de classification",
            "Il détermine le nombre de vecteurs de support",
            "Il fixe la dimension de l'espace des caractéristiques",
            "Il choisit le noyau à utiliser"
        ],
        correct: "Il contrôle le compromis entre la maximisation de la marge et la minimisation des erreurs de classification",
        explanation: "C ajuste la tolérance aux erreurs."
    },
    {
        question: "Que sont les vecteurs de support dans le SVM ?",
        options: [
            "Les points de données les plus proches de l'hyperplan de séparation",
            "Tous les points de données dans le dataset",
            "Les points de données qui sont mal classés",
            "Les points de données qui sont loin de l'hyperplan"
        ],
        correct: "Les points de données les plus proches de l'hyperplan de séparation",
        explanation: "Ils définissent l'hyperplan."
    },
    {
        question: "Quel est l'objectif principal du SVM ?",
        options: [
            "Maximiser la marge entre les classes tout en minimisant les erreurs de classification",
            "Minimiser la distance entre tous les points et l'hyperplan",
            "Maximiser le nombre de vecteurs de support",
            "Minimiser la complexité du modèle"
        ],
        correct: "Maximiser la marge entre les classes tout en minimisant les erreurs de classification",
        explanation: "Le SVM maximise la marge."
    },
    {
        question: "Quelle est la formulation de la fonction objective du SVM à marge souple ?",
        options: [
            "min_{w, b} 1/2 ||w||^2 + C ∑_{i=1}^m max(0, 1 - y_i (w^T x_i + b))",
            "min_{w, b} ∑_{i=1}^m (y_i - w^T x_i - b)^2",
            "min_{w, b} ∑_{i=1}^m |y_i - w^T x_i - b|",
            "min_{w, b} 1/2 ||w||^2"
        ],
        correct: "min_{w, b} 1/2 ||w||^2 + C ∑_{i=1}^m max(0, 1 - y_i (w^T x_i + b))",
        explanation: "Elle combine marge et perte hinge."
    },
    {
        question: "Comment choisir la valeur de C dans le SVM ?",
        options: [
            "En utilisant la validation croisée pour trouver la valeur qui minimise l'erreur de classification",
            "En choisissant C = 1 par défaut",
            "En utilisant la valeur la plus grande possible",
            "En choisissant C = 0 pour une marge maximale"
        ],
        correct: "En utilisant la validation croisée pour trouver la valeur qui minimise l'erreur de classification",
        explanation: "La validation croisée optimise C."
    },
    {
        question: "Qu'est-ce que la descente par coordonnées dans le contexte du SVM ?",
        options: [
            "Une méthode d'optimisation qui ajuste une variable à la fois pour minimiser la fonction objectif",
            "Une technique pour sélectionner les vecteurs de support",
            "Un algorithme pour calculer la distance entre les points",
            "Une méthode pour normaliser les données"
        ],
        correct: "Une méthode d'optimisation qui ajuste une variable à la fois pour minimiser la fonction objectif",
        explanation: "Elle optimise itérativement."
    },
    {
        question: "Quel est l'effet d'un C très grand dans le SVM ?",
        options: [
            "Le modèle pénalise fortement les erreurs de classification, ce qui peut conduire à un surajustement",
            "Le modèle tolère plus d'erreurs, ce qui peut conduire à un sous-ajustement",
            "Le modèle aura une marge plus large",
            "Le modèle ne convergera pas"
        ],
        correct: "Le modèle pénalise fortement les erreurs de classification, ce qui peut conduire à un surajustement",
        explanation: "Un C grand surajuste."
    },
    {
        question: "Quel est l'effet d'un C très petit dans le SVM ?",
        options: [
            "Le modèle tolère plus d'erreurs, ce qui peut conduire à une marge plus large et à un sous-ajustement",
            "Le modèle pénalise fortement les erreurs, ce qui peut conduire à un surajustement",
            "Le modèle aura moins de vecteurs de support",
            "Le modèle ne convergera pas"
        ],
        correct: "Le modèle tolère plus d'erreurs, ce qui peut conduire à une marge plus large et à un sous-ajustement",
        explanation: "Un C petit sous-ajuste."
    },
    {
        question: "Pourquoi utilise-t-on la formulation Hinge Loss dans le SVM ?",
        options: [
            "Pour transformer l'optimisation avec contraintes en une optimisation sans contraintes",
            "Pour calculer la distance entre les points",
            "Pour normaliser les caractéristiques",
            "Pour sélectionner les caractéristiques importantes"
        ],
        correct: "Pour transformer l'optimisation avec contraintes en une optimisation sans contraintes",
        explanation: "Elle simplifie l'optimisation."
    },
    {
        question: "Quelle est la distance entre un point et un hyperplan dans le SVM ?",
        options: [
            "|w^T x + b| / ||w||",
            "|w^T x| / ||w||",
            "||w||",
            "|w^T x + b|"
        ],
        correct: "|w^T x + b| / ||w||",
        explanation: "C'est la formule de la distance à l'hyperplan."
    },
    {
        question: "Quelle est la condition pour qu'un point soit un vecteur de support dans le SVM à marge dure ?",
        options: [
            "Le point est sur la marge, c'est-à-dire y_i (w^T x_i + b) = 1",
            "Le point est mal classé, c'est-à-dire y_i (w^T x_i + b) < 0",
            "Le point est loin de l'hyperplan, c'est-à-dire y_i (w^T x_i + b) > 1",
            "Le point est sur l'hyperplan, c'est-à-dire w^T x_i + b = 0"
        ],
        correct: "Le point est sur la marge, c'est-à-dire y_i (w^T x_i + b) = 1",
        explanation: "Les vecteurs de support sont sur la marge."
    },
    {
        question: "Quelle est la condition pour qu'un point soit un vecteur de support dans le SVM à marge souple ?",
        options: [
            "Le point est sur la marge ou à l'intérieur, c'est-à-dire y_i (w^T x_i + b) ≤ 1",
            "Le point est mal classé, c'est-à-dire y_i (w^T x_i + b) < 0",
            "Le point est loin de l'hyperplan, c'est-à-dire y_i (w^T x_i + b) > 1",
            "Le point est sur l'hyperplan, c'est-à-dire w^T x_i + b = 0"
        ],
        correct: "Le point est sur la marge ou à l'intérieur, c'est-à-dire y_i (w^T x_i + b) ≤ 1",
        explanation: "Ils incluent les points sur ou dans la marge."
    },
    {
        question: "Quel est le rôle de la variable d'écart ε_i dans le SVM à marge souple ?",
        options: [
            "Elle mesure dans quelle mesure un point est mal classé ou dans la marge",
            "Elle détermine la distance à l'hyperplan",
            "Elle sélectionne les vecteurs de support",
            "Elle normalise les caractéristiques"
        ],
        correct: "Elle mesure dans quelle mesure un point est mal classé ou dans la marge",
        explanation: "ε_i tolère les erreurs."
    },
    {
        question: "Quelle est la contrainte dans le SVM à marge souple ?",
        options: [
            "y_i (w^T x_i + b) ≥ 1 - ε_i avec ε_i ≥ 0",
            "y_i (w^T x_i + b) = 1",
            "y_i (w^T x_i + b) > 1",
            "w^T x_i + b = 0"
        ],
        correct: "y_i (w^T x_i + b) ≥ 1 - ε_i avec ε_i ≥ 0",
        explanation: "Elle permet des violations de la marge."
    },
    {
        question: "Comment la valeur de C affecte-t-elle le nombre de vecteurs de support ?",
        options: [
            "Un C petit entraîne plus de vecteurs de support, tandis qu'un C grand en entraîne moins",
            "Un C grand entraîne plus de vecteurs de support, tandis qu'un C petit en entraîne moins",
            "C n'affecte pas le nombre de vecteurs de support",
            "Le nombre de vecteurs de support est toujours égal au nombre de points dans le dataset"
        ],
        correct: "Un C petit entraîne plus de vecteurs de support, tandis qu'un C grand en entraîne moins",
        explanation: "Un C petit augmente les vecteurs de support."
    },
    {
        question: "Quel est l'avantage du SVM par rapport à d'autres algorithmes de classification ?",
        options: [
            "Il est efficace pour les données à haute dimension et peut gérer des données non linéaires avec des noyaux",
            "Il est plus rapide à entraîner que les autres algorithmes",
            "Il ne nécessite pas de données étiquetées",
            "Il est plus simple à implémenter"
        ],
        correct: "Il est efficace pour les données à haute dimension et peut gérer des données non linéaires avec des noyaux",
        explanation: "Le SVM excelle en haute dimension et avec noyaux."
    },
    {
        question: "Qu'est-ce qu'un noyau (kernel) dans le SVM ?",
        options: [
            "Une fonction qui transforme les données dans un espace de dimension supérieure pour les rendre linéairement séparables",
            "Une technique pour réduire la dimensionnalité des données",
            "Un algorithme pour optimiser la fonction objectif",
            "Une méthode pour normaliser les caractéristiques"
        ],
        correct: "Une fonction qui transforme les données dans un espace de dimension supérieure pour les rendre linéairement séparables",
        explanation: "Les noyaux permettent une séparation linéaire."
    },
    {
        question: "Quel est un exemple de noyau couramment utilisé dans le SVM ?",
        options: [
            "Le noyau RBF (Radial Basis Function)",
            "Le noyau linéaire",
            "Le noyau polynomial",
            "Tous les ci-dessus"
        ],
        correct: "Tous les ci-dessus",
        explanation: "Tous sont couramment utilisés."
    },
    {
        question: "Comment le noyau RBF est-il défini ?",
        options: [
            "K(x, x') = exp(-||x - x'||^2 / (2σ^2))",
            "K(x, x') = x^T x'",
            "K(x, x') = (x^T x' + 1)^d",
            "K(x, x') = tanh(κ x^T x' + c)"
        ],
        correct: "K(x, x') = exp(-||x - x'||^2 / (2σ^2))",
        explanation: "C'est la définition du noyau RBF."
    },
    {
        question: "Quel est l'avantage d'utiliser un noyau dans le SVM ?",
        options: [
            "Il permet de modéliser des relations non linéaires sans augmenter explicitement la dimensionnalité",
            "Il réduit le temps de calcul",
            "Il sélectionne automatiquement les caractéristiques importantes",
            "Il normalise les données"
        ],
        correct: "Il permet de modéliserilin types non linéaires",
        explanation: "Les noyaux efficaces pour le non linéaires."
    },
    {
        question: "Comment choisir le noyau approprié pour un problème donné ?",
        options: [
            "En testant plusieurs noyaux et en utilisant la validation croisée pour sélectionner le meilleur",
            "En choisissant toujours le noyau linéaire",
            "En utilisant le noyau polynomial pour tous les problèmes",
            "En sélectionnant le noyau avec le temps de moins de paramètres",
        ],
        correct: "En testant plusieurs noyaux",
        explanation: "La validation croisée choisit le meilleur noyau."
    },
    {
        question: "Quel est le rôle de la constante b dans l'équation de l'hyperplan du SVM ?",
        options: [
            "Elle représente le biais ou l'ordonnance à l'origine de l'hyperplan",
            "Elle détermine la pente de l'hyperplan",
            "Elle contrôles la régularisation",
            "Elle sélectionne les vecteurs de support",
        ],
        correct: "Elle représente le biais",
        explanation: "b positionne l'hyperplan."
    },
    {
        question: "Comment le SVM géré-t-il les données non linéables sans noyau ?",
        options: [
            "En utilisant la marge souple pour tolérer certaines erreurs de classification",
            "En augmentant la dimensionnalité",
            "En utilisant la régression liné",
            "En sélectionnant une méthode pour caractériser",
        ],
        correct: "En utilisant la marge souple",
        explanation: "La marge souple tolère les erreurs."
    },

    // Section 4 : SVM (5 questions)
    {
        question: "Qu'est-ce que le Support Vector Machine (SVM) ?",
        options: [
            "Un algorithme d'apprentissage supervisé pour la classification et la régression qui maximise la marge entre les classes",
            "Un algorithme de clustering pour trouver des groupes dans les données",
            "Une technique de réduction de la dimensionnalité",
            "Un algorithme de reinforcement learning",
        ],
        correct: "Un algorithme supervisé",
        explanation: "Le SVM maximise la marge."
    },
    {
        question: "Quel est le rôle des vecteurs de support dans le SVM ?",
        options: [
            "Ce sont les points de données qui déterminent la position de l'hyperplan de séparation.",
            "Ce sont tous les points de données dans le dataset.",
            "Ce sont des points sont mal classés.",
            "Le point est sur les données qui sont loin de l'hyperplan."
        ],
        correct: "Ce sont les points de données qui déterminent la position",
        explanation: "Ils définissent l'hyperplan."
    },
    {
        question: "Quelle est la fonction objective du SVM à la marge souple ?",
        options: [
            "Minimiser une fonction à /1/2 2^2 + w||^2||",
            "Minimiser la fonction à ∑(y_i i - - w - x^T x_i - b)^2 x_i",
            "Maximiser la fonction à ∑ y_i (y_i (w^T x_i + b))",
            "Minimiser la fonction."
        ],
        correct: "Minimiser une fonction à /1/2 2^2 + w||^2||",
        explanation: "Elle équilibre la marge."
    },
    {
        question: "Comment le paramètre C affecte-t-il le SVM ?",
        options: [
            "Un C grand pénalisé plus les erreurs, tandis qu'un C petit tolère plus un d'erreurs",
            "Un C maximise la marge, tandis qu’un C petit la diminue",
            "C détermine le nombre de points de support",
            "C choisit le noyau",
        ],
        correct: "Un C grand pénalisé",
        explanation: "C ajuste la tolérance."
    },
    {
        question: "Quelle est la méthode utilisée pour couramment entraîner le SVM ?",
        options: [
            "La descente par coordonnées",
            "Une descente de gradient",
            "Un algorithme de Newton",
            "Une programmation quadratique",
        ],
        correct: "La descente par coord",
        explanation: "Elle optimise l'en."
    }
];


let currentQuestion = 0;
const userAnswers = Array(questions.length).fill(null);

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    q.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        optionsDiv.appendChild(label);
    });
    // Restore previous answer if exists
    if (userAnswers[currentQuestion]) {
        const radios = document.getElementsByName('answer');
        for (let radio of radios) {
            if (radio.value === userAnswers[currentQuestion]) {
                radio.checked = true;
                break;
            }
        }
    }
    document.getElementById('feedback').textContent = '';
    updateNavButtons();
}

document.getElementById('submit').addEventListener('click', () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    const feedback = document.getElementById('feedback');

    if (!selected) {
        feedback.textContent = "Vous devez sélectionner une réponse.";
        feedback.className = '';
        return;
    }

    const answer = selected.value;
    userAnswers[currentQuestion] = answer;
    const correct = questions[currentQuestion].correct;
    const explanation = questions[currentQuestion].explanation;

    if (answer === correct) {
        feedback.textContent = `Correct ! ${explanation}`;
        feedback.className = 'correct';
    } else {
        feedback.textContent = `Incorrect. La réponse correcte est : ${correct}. ${explanation}`;
        feedback.className = 'incorrect';
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});

function updateNavButtons() {
    document.getElementById('prev').disabled = currentQuestion === 0;
    document.getElementById('next').disabled = currentQuestion === questions.length - 1;
}

// Charger la première question
loadQuestion();

