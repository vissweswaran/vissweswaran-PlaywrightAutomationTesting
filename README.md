🎭 Playwright Automation Framework (BDD + JavaScript)
This repository contains an end-to-end automation test framework built using:

✅ Playwright – for browser automation

✅ Cucumber.js – for Behavior-Driven Development (BDD)

✅ JavaScript – as the scripting language

📁 Project Structure
playwright/
├── tests/
│   ├── feature/              # .feature files (BDD Gherkin syntax)
│   ├── stepdefinition/       # Step definitions for each feature
│   └── hooks.js              # Global setup and teardown (browser, context)
├── reports/                  # ⛔ Ignored in Git (auto-generated test results)
│   ├── cucumber_report.json  # JSON output after test execution
│   ├── html/                 # Generated HTML reports
│   └── screenshots/          # Screenshots on failure (optional)
├── report.js                 # Script to generate the HTML report
├── package.json              # NPM config and test scripts
├── package-lock.json         
├── cucumber.json             # (Optional) Cucumber config (if created)
└── README.md                 # Project documentation

🚀 Getting Started
1. Clone the repo
git clone https://github.com/vissweswaran/vissweswaran-PlaywrightAutomationTesting.git
cd vissweswaran-PlaywrightAutomationTesting

2. Install dependencies
npm install

🧪 Run Tests
To run all tests
npm test

Or manually
npx cucumber-js --require tests/hooks.js --require tests/stepdefinition/**/*.js tests/feature

Make sure your .feature file and steps are properly connected.

🛠 Technologies Used
Playwright for browser automation

Cucumber.js for BDD-style test writing

JavaScript as the core language

💡 Example Feature
Feature: Facebook Login
Scenario: User logs in with valid credentials
Given the user is on the login page
When the user enters valid username and password
Then the user should be redirected to the dashboard

📌 Notes
You can set headless mode true or false in the browser options inside the hooks.js file.

You can debug using breakpoints in VS Code with --inspect flag.

📧 Contact
Created with ❤️ by Vissweswaran
GitHub: https://github.com/vissweswaran
