module.exports =  async function postExecutionPublishReport() {
    let reportServer = process.env.backendIP || "localhost";
    console.log('Report Server :'+process.env.backendIP);
    const request = require('superagent');
    let strPayLoad = { "moduleName": "unittest_ui", "pass": 0, "fail": 0, "status": "In Progress" };
    try {
        const response = await request
            .post(`http://${reportServer}:3337/api/v1/azure_dashboard_report/moudule/update`)
            .timeout({
                response: 3000,  // Wait 5 seconds for the server to start sending,
                deadline: 4000, // but allow 1 minute for the file to finish loading.
            })
            .send(strPayLoad)
            .set('content-type', 'application/json')
            .set('accept', 'application/json')
            .set('X-Requested-With', 'XMLHttpRequest');
    }
    catch (err) {
        console.log('WARN: Report Server is not up')
    }
}
