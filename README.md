Nom du projet :<br><br>
"Déploiement Automatisé d'une Application Web de Gestion des Tâches"

🎯 Objectif du Projet:<br><br>
Ce projet a pour objectif de mettre en œuvre un **pipeline DevOps complet** pour le déploiement automatisé d'une application web de gestion des tâches. L'application est développée en **Node.js**, conteneurisée avec **Docker**, déployée automatiquement sur un cluster **Kubernetes**, via un pipeline **CI/CD géré par Jenkins**.

📚 Compétences évaluées: <br><br>
✅ Infrastructure as Code --> Provisionnement de 2 machines virtuelles avec Ansible<br>
✅ CI/CD avec Jenkins --> Pipeline complet : clone, test, build, push, déploiement <br>
✅ Conteneurisation --> Création d'une image Docker de l'application <br>
✅ Orchestration Kubernetes --> Déploiement de l'application et exposition via Service <br>
✅ Git & GitHub --> Gestion de code source versionné avec bonne structure<br>

🛠️ Technologies utilisées:<br><br>
✅Node.js + Express     --> Développement de l’application<br>
✅Docker                 --> Conteneurisation <br>
✅Jenkins                --> Automatisation CI/CD<br>
✅Kubernetes (minikube)  -->  Orchestration & déploiement<br>
✅Git + GitHub           --> Gestion de version<br>
✅Ansible + VirtualBox   -->Provisionnement VMs (local)<br>

🚀 Étapes CI/CD dans Jenkins:<br>
1. **Clonage** du dépôt GitHub<br>
2.**Construction** de l’image Docker<br>
3. **Push** vers DockerHub <br>
4. **Déploiement Kubernetes** via `kubectl apply`<br>

🌐 Déploiement Kubernetes:<br><br>
- **Fichier `deployment.yaml`** : déploie l'application depuis DockerHub<br>
- **Fichier `service.yaml`** : expose l’application sur le port `31000`<br>
- **Fichier `pvc.yaml`** : volume persistant<br>
- **Fichier `secret.yaml`** : stockage sécurisé de variables sensibles<br>

🧠Conclusion:<br><br>
Ce projet m’a permis de comprendre la chaîne complète CI/CD moderne, le rôle de Jenkins, la conteneurisation avec Docker, et le déploiement d’applications sur un cluster Kubernetes.
