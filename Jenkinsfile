pipeline {
    
    agent any

    environment {
        DOCKER_HUB_CREDS = credentials ('docker-hub')
    }

    stages {
            stage('Cloning our Git') {
                
                checkout scm

            }

            stage('Building Docker Image') {
                steps {
                    sh 'cd /node'
                    sh 'sudo docker build -t movie-analyst-ui .'
                }
            }

            stage('Deploying Docker Image to Dockerhub') {
                steps {
                    sh 'docker push andresvelez11/movie-analyst-ui:movie-analyst-ui'
                }
            }
        }
    }