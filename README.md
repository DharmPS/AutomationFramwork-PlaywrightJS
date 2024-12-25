Playwright Automation Framework
-------------------------------

This repository contains an automation framework built using Playwright & JS. Below is explanation of the folder structure.

Folder Structure:-
-----------------

node_modules/         # It contains dependencies installed via npm.
pages/                # Page Object Models (POM) for application pages.
 POManager & Fixture  # It contains fixtures for pages and setting up & cleaning up fixtures after test.
 HomePage.js       # Home page locators & functions.
 LoginPage.js      # Login page locators & functions.
 ProductsPage.js   # Products page locators & functions.
 SignupPage.js     # Signup page locators & functions.
 ViewCartPage.js   # View Cart locators & functions.
test-results/         # Test execution reports.
 html/             # HTML (index.html) formatted test reports.
 output/           # It contains video report.
testData/             # Test data for test cases.
 loginTestData.json          # Test data for login tests.
 productsTestData.json       # Test data for product's related tests.
 registrationTestData.json   # Test data for registration tests.
tests/                # Spec files containing test cases.
 login.spec.js              # Test cases for login functionalities.
 productsTests.spec.js      # Test cases for product functionalities.
 registrationTests.spec.js  # Test cases for registration functionalities.
utils/                # Utility files for reusable functions and custom assertions.
Assertion.js      # Custom assertion methods.
CustomFixture.js  # Custom fixtures to merge all the fixtures.
test-utils.js     # Utility functions for common tasks.
.gitignore            # Files and folders to ignore in version control in github.
package-lock.json     # Auto-generated file for npm dependency tree.
package.json          # Project configuration and dependencies.
playwright.config.js  # Playwright configuration file.


Description of some imp files:-
------------------------------

1. "pages/"
This folder contains Page Object Model (POM) files. Each file.

2. "test-results/"
This folder stores the output of test execution report.

3. "testData/"
This folder contains JSON files that store test data for different test scenarios.

4. "tests/"
This folder contains the spec files for writing test cases. Each file corresponds to a specific module/feature of the application.

5. "utils/"
The utilities folder contains helper files for common tasks like assertions etc.

6. "playwright.config.js"
This is the central configuration file for Playwright. It contains settings like browser configurations, base URL, timeouts, and other global settings for the framework.

7. Getting Started:-

Prerequisites:-
- Latest Node.js installed on your system.
- Playwright installed in your project.

Installation:-
1. Clone the repository:
   git clone <repository_url>
   
2. Install dependencies:
   npm install

Running Tests:-
npx playwright test
