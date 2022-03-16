pipeline {
    
    agent any

    stages {
            stage('Building Docker Image') {
                steps {
                    dir('/var/lib/jenkins/workspace/api-pipeline/node/') {
                        sh "docker build -t andresvelez11/movie-analyst-api ."
                    }
                }
            }

            stage('Deploying Docker Image to Dockerhub') {
                steps {
                    sh 'docker push andresvelez11/movie-analyst-api:latest'
                }
            }
        }
    }
