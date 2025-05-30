const reporter = require('multiple-cucumber-html-reporter');


const fs = require('fs');
const path = require('path');

const reportDir = 'reports';

fs.readdirSync(reportDir).forEach(file => {
  if (!file.endsWith('.json')) return;

  const filePath = path.join(reportDir, file);
  if (fs.statSync(filePath).isDirectory()) return;

  const data = fs.readFileSync(filePath, 'utf-8');
  try {
    const parsed = JSON.parse(data);
    console.log(`${file}: root type = ${Array.isArray(parsed) ? 'array' : typeof parsed}`);
  } catch (e) {
    console.error(`Failed to parse ${file}:`, e.message);
  }
});


reporter.generate({
  jsonDir: 'reports/json',            // Folder where your cucumber JSON reports are saved
  reportPath: 'reports/html',    // Output folder for HTML report
  openReportInBrowser: true,
  saveCollectedJSON: true,
  displayDuration: true,
  durationInMS: false,
  metadata: {
    browser: { name: 'chrome', version: '136' },
    device: 'Local test machine',
    platform: { name: 'windows', version: '10' }
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Playwright BDD' },
      { label: 'Release', value: '1.0' },
      { label: 'Cycle', value: 'Regression' },
    ],
  },
});