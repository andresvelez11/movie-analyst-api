pipeline {
    
    agent any

    environment {
		DOCKERHUB_CREDENTIALS=credentials('docker-hub')
        DB_HOST=${DB_HOST}
        DB_USER=${DB_USER}
        DB_PASS=${DB_PASS}
        DB_NAME=${DB_NAME}
        PORT_API=${PORT_API}
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

            stage('Testing') {
                steps {
                    dir('/var/lib/jenkins/workspace/api-pipeline/node/') {
                        sh "env"
                        
                    }
                }
            }

            stage('Deploying Docker Image to Dockerhub') {
                steps {
                    sh 'docker push andresvelez11/movie-analyst-api:latest'
                    sh 'docker image rm andresvelez11/movie-analyst-api -f'
                    sh 'docker logout'
                }
            }
        }
    }