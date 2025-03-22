# Calculator Project

This is a simple calculator project with both **unit tests** and **end-to-end (E2E) tests** using **Jasmine/Karma** and **Cypress**.

## 🚀 Prerequisites

1. **Node.js and npm**  
   Download and install Node.js (which includes npm):  
   👉 [Download Node.js](https://nodejs.org/)

2. **Recommended Node version:**  
   Use the LTS version or Node.js 18+.

## 📦 Installation

1. Clone or download this repository.
2. Open a terminal and navigate to the project root directory.
   ```bash
   cd /path/to/UnitTest-2
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## 🧪 Running Unit Tests (Jasmine/Karma)

1. Install Karma CLI globally (if you haven't already):
   ```bash
   npm install -g karma
   ```
2. Run the unit tests:
   ```bash
   npm test
   ```
   This runs Karma and Jasmine unit tests located in the `spec/` directory.

## ✅ Running End-to-End (E2E) Tests (Cypress)

1. Make sure your app is running in a local server, e.g.:

   ```bash
   npx http-server . -p 5500
   ```

   This will serve index.html at http://localhost:5500.

2. Run Cypress in interactive mode:

   ```bash
   npx cypress open
   ```

   - Choose E2E Testing.
   - Select a browser (Chrome, Electron, etc.).
   - Click on `calculator.cy.js` in the `cypress/e2e/` folder to run the tests.

3. Alternatively, run Cypress in headless mode:
   ```bash
   npx cypress run
   ```

## 🗂️ Project Structure

```
UnitTest-2/
├── cypress/
│   ├── e2e/               # Cypress E2E test specs
│   │   └── calculator.cy.js
│   └── support/           # Cypress support files
│       └── e2e.js
├── lib/
│   └── calculator.js      # Calculator logic and UI handlers
├── spec/                  # Jasmine unit test specs
│   └── calculator.unit.spec.js
├── index.html             # Calculator web page
├── cypress.config.js      # Cypress configuration
├── karma.conf.js          # Karma configuration for Jasmine unit tests
├── package.json
├── README.md
└── node_modules/
```

## 📝 Notes

- Make sure the `cypress.config.js` file is in the project root directory.
- Cypress is set up to visit http://localhost:5500.
- If your server runs on a different port, update `baseUrl` in `cypress.config.js` accordingly:
  ```javascript
  e2e: {
    baseUrl: 'http://localhost:5500',
  }
  ```

## 📄 Useful Commands

- Install Cypress locally (already done via `npm install`):
  ```bash
  npm install --save-dev cypress
  ```
- Open Cypress interactive mode:
  ```bash
  npx cypress open
  ```
- Run Cypress in headless mode:
  ```bash
  npx cypress run
  ```
- Run Jasmine unit tests with Karma:
  ```bash
  npm test
  ```

## 🎉 Credits

Developed by Joel Dixon  
Built using HTML, JavaScript, Jasmine/Karma, and Cypress.
