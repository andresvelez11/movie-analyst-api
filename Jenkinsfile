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

            stage('Testing') {
                steps {
                    dir('/var/lib/jenkins/workspace/api-pipeline/node/') {
                        sh "docker run --network=host -e DB_HOST=${DB_HOST} \
                            -e DB_USER=${DB_USER} \
                            -e DB_PASS=${DB_PASS} \
                            -e DB_NAME=${DB_NAME} \
                            -e PORT_API=${PORT_API} --name test-api andresvelez11/movie-analyst-api npm test"
                        sh "docker rm test-api"                        
                    }
                }
            }

            stage('Deploying Docker Image to Dockerhub') {
                steps {
                    sh 'docker push andresvelez11/movie-analyst-api:latest'
                    sh "docker stop $(docker ps -aq); docker rm $(docker ps -aq)"
                    sh 'docker logout'
                }
            }
        }
    }