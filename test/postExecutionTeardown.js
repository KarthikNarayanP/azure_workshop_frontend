
module.exports = async function postExecutionPublishReport() {
    const fs = require('fs');
    const fse = require('fs-extra')
    if (fs.existsSync('./test/results/latestresult')) {
        fse.emptyDirSync('./test/results/latestresult')
    }
    fse.copySync(`${process.env.reportpath}`, `./test/results/latestresult`);


    const request = require('superagent');
    let reportServer = process.env.backendIP || "localhost";
    let jsonAllTestCases = await convertUnitTest();
    console.log(jsonAllTestCases.testsuites.failures[0]);
    let status = 'Pass';
    let failCount = jsonAllTestCases.testsuites.failures[0]
    let passCount = jsonAllTestCases.testsuites.tests[0] - failCount;
    if (failCount > 0) {
        status = 'Fail';
    }
    /*
    var jp = require('jsonpath');
    let failCount = jp.query(jsonAllTestCases, '$..[?(@.stepsFailed>0)]');
    let status = 'Pass';
    if (failCount.length > 0) {
        status = 'Fail';
    }
    let passCount = jsonAllTestCases.length - failCount.length;*/
    let strPayLoad = { "moduleName": "unittest_ui", "pass": passCount, "fail": failCount, "status": status };
    try{
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
        catch(err){
            console.log('WARN: Report Server is not up')
        }
}

export async function getFiles() {
    const fs = require('fs');
    const directoryPath = process.env.reportpath + '/json';
    let jsonAllTestCases = [];
    let alltest = fs.readdirSync(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
    });
    for (let i = 0; i < alltest.length; i++) {
        const json = require(directoryPath.replace('/test', '') + '/' + alltest[i]);
        jsonAllTestCases.push(json)
    }
    return jsonAllTestCases;
}
export async function convertUnitTest() {
    const xml2js = require('xml2js');
    const fs = require('fs');

    // read XML from a file
    const xml = fs.readFileSync('./test/results/junit.xml');
    const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });

    // convert it to a JSON string
    const json = JSON.stringify(result, null, 4);
    const jsonParsed = JSON.parse(json);

    return jsonParsed;

}