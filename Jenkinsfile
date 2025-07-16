pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
        IMAGE_NAME = 'ayoubkoutari/task-app'
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Ayoub-kt02/AKproject-devops.git'
            }
        }
        stage('Test') {
            steps {
                echo "Ici, vous pourrez lancer des tests"
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
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker push $IMAGE_NAME'
                }
            }
        }
        stage('Déploiement Kubernetes') {
    steps {
        sh '''
            kubectl apply -f k8s/deployment.yaml
            kubectl apply -f k8s/service.yaml
        '''
         }
      }
   }
}

