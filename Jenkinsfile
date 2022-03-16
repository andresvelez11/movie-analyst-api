pipeline {
    
    agent any

    environment {
		DOCKERHUB_CREDENTIALS=credentials('docker-hub')
	}

    stages {

            stage('Login') {

			    steps {
				    sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			    }
		    }      

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

    post {
		always {
			sh 'docker logout'
		}
	}