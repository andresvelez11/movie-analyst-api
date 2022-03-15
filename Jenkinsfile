pipeline {
    
    agent any

    environment {
        DOCKER_HUB_CREDS = credentials ('docker-hub')
    }

    stages {
            stage('Building Docker Image') {
                steps {
                    dir('/node') {
                        sh "docker build -t movie-analyst-ui ."
                    }
                }
            }

            stage('Deploying Docker Image to Dockerhub') {
                steps {
                    sh 'docker push andresvelez11/movie-analyst-ui:movie-analyst-ui'
                }
            }
        }
    }