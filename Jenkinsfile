pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')  // ID des identifiants Jenkins
        IMAGE_NAME = "ayoubkoutari/AKproject-devops"
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/ayoub-koutari/AKproject-devops.git'
            }
        }

        stage('Test') {
            steps {
                echo "Pas de tests pour le moment"
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh """
                    echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                    docker push $IMAGE_NAME
                    """
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo "Déploiement Kubernetes prévu après"
                // Ici on utilisera kubectl pour appliquer les YAMLs plus tard
            }
        }
    }
}
