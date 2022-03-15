pipeline {
    agent any

    environment {
        ARTIFACT_ID = "andresvelez11/movie-analyst-api:${env.BUILD_ID}"
    }

    stages {
        stage("Build Docker Image"){
            steps{
                script {
                    customImage = docker.build("${env.ARTIFACT_ID}")
                    customImage = docker.build("andresvelez11/movie-analyst-api:latest")
                }
            }
        }

        stage("Publish Docker Image in DockerHub"){
            steps {
                script {
                    docker.withRegistry("https://hub.docker.com/repository/docker/andresvelez11/movie-analyst-api", "docker-hub") {
                        customImage.push()
                        latestImage.push()
                    }
                }
            }   
        }

    }  


}