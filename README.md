# Projet 11 - Développement de l'application web Kasa avec React et React Router

## Contexte du projet

**Kasa**, une plateforme de location d'appartements entre particuliers, a entrepris la refonte de son site pour offrir une expérience utilisateur plus moderne. En tant que développeur front-end freelance, j'ai été chargé de concevoir et de développer l'interface utilisateur de la nouvelle version, en respectant les maquettes Figma fournies.

L'application est construite sur une architecture JavaScript moderne avec **React** pour la création des interfaces, **React Router** pour la gestion de la navigation, et **Sass** pour la gestion du stylage. Les données de test sont extraites d'un fichier JSON, en attendant la mise en place du back-end.

## Mission du projet

-   **Création des composants React** : Développement d'une architecture de composants réutilisables et modulaires basés sur les maquettes Figma.
-   **Routage avec React Router** : Mise en place d'une navigation fluide entre les différentes pages de l'application.
-   **Animations et transitions** : Intégration d'animations CSS, notamment pour les menus déroulants et les interactions utilisateurs.
-   **Stylage avec Sass** : Utilisation de Sass pour améliorer et structurer le code CSS.

## Technologies utilisées

-   **React** : Bibliothèque JavaScript pour créer l'interface utilisateur.
-   **React Router** : Gestion des routes et navigation entre les pages.
-   **Sass** : Préprocesseur CSS pour organiser et optimiser le code de style.
-   **Prettier** : Outil de formatage automatique du code.
-   **ESLint** : Linter pour détecter et corriger les erreurs de code.
-   **Figma** : Outil de conception pour consulter les maquettes.
-   **GitHub** : Gestion du contrôle de version.

## Maquettes à respecter

Les maquettes ont été créées sur **Figma** et peuvent être consultées via ce [lien](<https://www.figma.com/design/qEno0LwL4ZLkWyeY59kxp1/Kasa-FR-(Archived-2)?node-id=3-0&node-type=frame&t=btDSER8ISVFFAP1i-0>).

### Page d'accueil

![Maquette Kasa accueil](/public/assets/maquettes/D_Home.png)

## Notes et contraintes du projet

![Kasa Coding Guidelines](/public/assets/maquettes/Kasa_coding-guidelines.pdf)

### Police

-   **Montserrat** : Utilisée pour toute la typographie.  
    [Lien Google Fonts](https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap).

### Couleurs

-   **Rouge** : `#FF6060`
-   **Gris** : `#F6F6F6`
-   **Noir** : `#000000`
-   **Blanc** : `#FFFFFF`

### Contraintes techniques

-   Composants **modulaires** et **réutilisables**.
-   Un **composant par fichier** pour une meilleure organisation du code.
-   Utilisation des **props** pour passer les données entre les composants.
-   Gestion de l'état local avec les **hooks** de React (`useState`, `useEffect`).
-   Gestion des événements et **utilisation de la méthode map** pour les listes.
-   Privilégier les composants **fonctionnels** aux composants de classe.
-   Gérer les **paramètres des routes** et récupérer les informations de chaque logement via **React Router**.
-   Créer une page **404** pour les routes inexistantes ou les URLs incorrectes.
-   Centraliser la logique du **router** dans un seul fichier.

### Approche de conception

-   **Desktop-first** : L'approche de conception privilégie l'affichage sur ordinateur, avec des adaptations pour mobile.
-   **Maquettes desktop et mobile** fournies. L'affichage tablette est à improviser.

### Validations

-   Aucune erreur ou avertissement dans la console (ESLint/React).

## Tester le projet

### Démo en ligne

Une version démo du projet est disponible ici :  
[Démo Kasa](https://master.d1mf0l7jegvee2.amplifyapp.com/)

### Installer et lancer le projet

1.  Cloner le dépôt GitHub :

        git clone https://github.com/Jerem16/React_kasa

2.  Accéder au répertoire du projet :

        cd React_kasa

3.  Installer les dépendances :

        yarn install

4.  Lancer l'application :

        yarn start

L'application sera accessible [ici](http://localhost:3000/) dans votre navigateur.

Accédez au répertoire du projet puis utilisez la commande `yarn install` pour installer les dépendances du projet et `yarn start` pour ouvrir l'application dans votre navigateur.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
