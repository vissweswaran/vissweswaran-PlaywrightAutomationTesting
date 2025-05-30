🎭 Playwright Automation Framework (BDD + JavaScript)
This repository contains an end-to-end automation test framework built using:

✅ Playwright – for browser automation

✅ Cucumber.js – for Behavior-Driven Development (BDD)

✅ JavaScript – as the scripting language

📁 Project Structure
playwright/

├── tests/                           # All test-related files

│   ├── feature/                     # .feature files (BDD Gherkin syntax)

│   ├── stepdefinition/             # Step definitions mapped to each feature

│   └── hooks.js                    # Global setup/teardown (e.g., browser launch/close)

│
├── reports/                        # ⛔ Auto-generated test results (ignored in Git)

│   ├── cucumber_report.json        # JSON output generated after test execution

│   ├── html/                       # HTML report output (from multiple-cucumber-html-reporter)

│   └── screenshots/                # Failure screenshots (if configured)

│
├── report.js                       # Script to generate HTML report from JSON

├── cucumber.json                   # (Optional) Cucumber config file for CLI options

├── package.json                    # NPM dependencies and test scripts

├── package-lock.json               # Auto-generated dependency tree lock

└── README.md                       # Project overview and documentation

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
