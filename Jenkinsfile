pipeline {
	agent any
    stages {
        stage('Create Stack') {
            steps {
               
               bat """
                   FOR /f "tokens=*" %%i IN ('docker ps -aq') DO docker stop %%i && docker rm %%i
                   docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube
                   docker run --name reportingdashboard -p 3337:3337 -i -t -d karthiknarayanpdec11/reporting-dashboard:latest
                   npm install
               """ 
            }
        }
        stage('Unit Test') {
            steps {
				bat 'npm test'
            }
		}
		stage('Run Sonar Scan') {
            steps {
				bat 'npm run scan'
            }
		}
     /*   stage('Build Docker Image') {
            steps {
                bat 'docker build -t mythicalmysfits:latest .'
                }
        }*/
        stage('Run Docker Image - Start Rest Services') {
            steps {
				bat 'docker run --name mythicalmysfitsfrontend -p 3000:3000 -p 8180:8180 -i -t -d mythicalmysfits:latest'
            }
        }
        stage('Start React-App') {
            steps {
				bat 'docker exec -d mythicalmysfitsfrontend npm start'
            }
		}
		stage('Regression Test') {
            steps {
				bat 'docker exec mythicalmysfitsfrontend npm run bvt'
            }
        }
        stage('Publish Regression Test Results') {
            steps {
				bat 'docker cp mythicalmysfitsfrontend:/app/test/results test/.'
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'test/results/latestresult', reportFiles: 'Summary.html', reportName: 'Summary Report', reportTitles: ''])
            }
        }
         stage('Push Image to Docker HUB') {
            steps {
				bat 'docker tag mythicalmysfits karthiknarayanpdec11/mythicalmysfits'
                //bat 'docker push karthiknarayanpdec11/mythicalmysfits:latest'
            }
        }
        stage ('Git Checkout') {
 	        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '', url: 'https://github.com/TechnologyBootCamps/functional-assurance']]])
	    }
	stage ('Run Zalenium Grid') {
	      bat """
             docker run -d --rm -ti --name zalenium -p 4444:4444 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp/videos:/home/seluser/videos --privileged dosel/zalenium start 
         """   
	}     
	stage ('Execute Scripts Smoke Scripts') {
	    bat """
        mvn clean test -Dcucumber.options="--tags '@UITest and @Smoke'" -DexecutionPlatform="GRID_CHROME"
        """ 
	}
    }
}
