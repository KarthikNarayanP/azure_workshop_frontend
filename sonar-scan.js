
fullscan();

async function fullscan() {
    
  await postExecutionPublishReport('Completed');
  await scan();
 // await postExecutionPublishReport('Completed');

  }

async function scan() {
  const sonarqubeScanner = require('sonarqube-scanner');
  const request = require('superagent');

  let server = process.env.backendIP || 'localhost';

  try{
    const response = await request
        .get(`http://${server}:9000/projects`)
        .timeout({
            response: 120000,  // Wait 5 seconds for the server to start sending,
            deadline: 4000, // but allow 1 minute for the file to finish loading.
          })
        .set('content-type', 'application/json')
        .set('accept', 'application/json')
        .set('X-Requested-With', 'XMLHttpRequest');
    }
        catch(err){
            console.log('Sonarqube is not up')
        }


  sonarqubeScanner(
    {
      serverUrl : 'http://'+server+':9000',
      options: {
        'sonar.projectName': 'azurewrkshp-aut-frontend',
        'sonar.projectDescription': 'Mythical Mysfits'
      }
    },
    () => process.exit()
  )
  }
  
async function postExecutionPublishReport(status) {
  let reportServer = process.env.backendIP || 'localhost';
  const request = require('superagent');
  let strPayLoad ={"moduleName":"codecoverage_static_ui","status":status};
  try{
    const response = await request
    .post(`http://${reportServer}:3337/api/v1/azure_dashboard_report/moudule/update`)
    .send(strPayLoad)
    .set('content-type', 'application/json')
    .set('accept', 'application/json')
    .set('X-Requested-With', 'XMLHttpRequest');
  } catch(err){
    console.log('WARN: Report Server is not up')
  }
}
