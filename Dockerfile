# Utilise une image Node officielle
FROM node:18-alpine

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie les fichiers de l'app dans le conteneur
COPY package*.json ./
RUN npm install

COPY . .

# Expose le port utilisé par l'app
EXPOSE 3000

# Commande de lancement de l'app
CMD ["node", "app.js"]
