# 💝 V-Question: L'Application de Demande en Valentine

Une application web interactive, romantique et amusante pour demander à quelqu'un d'être votre Valentine. Conçue avec **React**, **Vite** et **Framer Motion** pour des animations fluides.

## ✨ Fonctionnalités

* **Intro Cinématographique** : Un texte défilant avec des messages doux pour mettre l'ambiance.
* **Personnalisation** : Les noms de l'expéditeur et du destinataire sont dynamiques via l'URL.
* **Interactivité Ludique** :
  * Le bouton "Non" s'enfuit de la souris (2 fois).
  * Le bouton "Oui" déclenche une explosion de confettis 🎉.
* **Notifications** :
  * **Email** : Recevez une notification par email de la réponse (via EmailJS).
  * **WhatsApp** : La personne peut vous répondre directement sur WhatsApp avec un message pré-rempli ("Oui, je veux...").
  * **Mailto** : Option de secours pour envoyer un email depuis le client.
* **Design Premium** : Animations soignées, polices modernes (Outfit) et palette de couleurs romantiques.

## 🚀 Installation & Lancement

1. **Cloner ou Télécharger** le projet.
2. **Installer les dépendances** :

    ```bash
    npm install
    ```

3. **Lancer le serveur de développement** :

    ```bash
    npm run dev
    ```

4. Ouvrez le lien affiché (ex: `http://localhost:5173`).

## 💌 Comment Utiliser (Créer votre Lien)

Tout se passe dans l'URL ! Vous n'avez pas besoin de changer le code pour chaque personne. Construisez votre lien en ajoutant des paramètres à la fin de l'adresse.

Le format est :
`/?sender=VOTRE_NOM&receiver=SON_NOM&email=VOTRE_EMAIL`

### Les Paramètres

| Paramètre | Rôle | Exemple |
| :--- | :--- | :--- |
| `sender` | Votre prénom (L'envoyeur) | `sender=Thomas` |
| `receiver` | Son prénom (La destinataire) | `receiver=Juliette` |
| `email` | Votre email (pour le bouton "Envoyer un Email") | `email=thomas@gmail.com` |

### Exemples de Liens

* **Simple** :
    `http://localhost:5173/?sender=Alex&receiver=Sam`
    *(Affiche : "Sam, veux-tu être ma Valentine ? Envoyé par Alex")*

* **Complet** :
    `http://localhost:5173/?sender=Léo&receiver=Mia&email=leo@test.com`

> **Note** : Lorsque vous déploierez l'application (sur Vercel ou Netlify), remplacez `http://localhost:5173` par l'adresse de votre site.

## ⚙️ Configuration EmailJS (Optionnel)

Pour recevoir réellement les emails "Oui" ou "Non" de manière automatique :

1. Créez un compte gratuit sur [EmailJS.com](https://www.emailjs.com/).
2. Ajoutez un **Service** (ex: Gmail).
3. Créez un **Template** d'email.
4. Ouvrez le fichier `src/emailService.js` et remplacez les placeholders :

```javascript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'votre_service_id', // ex: service_x9...
  TEMPLATE_ID: 'votre_template_id', // ex: template_a5...
  PUBLIC_KEY: 'votre_public_key',   // ex: user_Wz...
};
```

## 📱 Mobile

L'application est totalement responsive et fonctionne parfaitement sur mobile. Sur téléphone, le bouton "Non" se déplace au toucher.

---
*Fait avec ❤️ pour les amoureux.*
