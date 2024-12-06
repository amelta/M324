pipeline {
    agent any
    tools { nodejs 'node' }
    stages {
        stage('Cloning Repo') {
            steps {
                script {
                    git branch: 'main',
                        url: 'https://github.com/amelta/M324.git'
                }
            }
        }
 
        stage('Install jest-cli') {
            steps {
                sh 'npm install jest-cli -g'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
