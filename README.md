Nom du projet :
"Déploiement Automatisé d'une Application Web de Gestion des Tâches"

🎯 Objectif du Projet:
Ce projet a pour objectif de mettre en œuvre un **pipeline DevOps complet** pour le déploiement automatisé d'une application web de gestion des tâches. L'application est développée en **Node.js**, conteneurisée avec **Docker**, déployée automatiquement sur un cluster **Kubernetes**, via un pipeline **CI/CD géré par Jenkins**.

📚 Compétences évaluées:
✅ Infrastructure as Code --> Provisionnement de 2 machines virtuelles avec Ansible
✅ CI/CD avec Jenkins --> Pipeline complet : clone, test, build, push, déploiement 
✅ Conteneurisation --> Création d'une image Docker de l'application 
✅ Orchestration Kubernetes --> Déploiement de l'application et exposition via Service 
✅ Git & GitHub --> Gestion de code source versionné avec bonne structure

🛠️ Technologies utilisées:
✅Node.js + Express     --> Développement de l’application
✅Docker                 --> Conteneurisation 
✅Jenkins                --> Automatisation CI/CD
✅Kubernetes (minikube)  -->  Orchestration & déploiement
✅Git + GitHub           --> Gestion de version
✅Ansible + VirtualBox   -->Provisionnement VMs (local)

🚀 Étapes CI/CD dans Jenkins:
1. **Clonage** du dépôt GitHub
2.**Construction** de l’image Docker
3. **Push** vers DockerHub 
4. **Déploiement Kubernetes** via `kubectl apply`

🌐 Déploiement Kubernetes:
- **Fichier `deployment.yaml`** : déploie l'application depuis DockerHub
- **Fichier `service.yaml`** : expose l’application sur le port `31000`
- **Fichier `pvc.yaml`** : volume persistant
- **Fichier `secret.yaml`** : stockage sécurisé de variables sensibles

🧠Conclusion:
Ce projet m’a permis de comprendre la chaîne complète CI/CD moderne, le rôle de Jenkins, la conteneurisation avec Docker, et le déploiement d’applications sur un cluster Kubernetes.
