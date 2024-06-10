const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: './reports/cucumber-html-report.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '125'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Orange hrm reporter',
        data: [
            {label: 'Project', value: 'Orangehrm'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Jun 09th 2024, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Jun 10th 2024, 02:56 PM EST'}
        ]
    }
});