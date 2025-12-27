# 🏦 XYZ Bank - E2E Test Automation Framework

A professional end-to-end testing suite for a Banking Application, built with **Playwright** and **TypeScript**. This project demonstrates advanced automation techniques used in enterprise environments.

## 🚀 Key Features
- **Page Object Model (POM):** Improved maintainability by separating page logic from test scripts.
- **Data-Driven Testing (DDT):** Dynamically executes test cases using data from external **JSON** files.
- **Full CRUD Lifecycle:** Automates Creating, Searching, and Deleting customers with robust assertions.
- **Advanced Locators:** Utilizes ARIA roles and scoped filtering to interact with dynamic Angular tables.
- **Automated Reporting:** Configured to capture screenshots, videos, and traces automatically upon failure.

## 🛠️ Tech Stack
- **Framework:** Playwright
- **Language:** TypeScript
- **Design Pattern:** Page Object Model
- **Data Format:** JSON

## 📦 Getting Started
1. **Clone the repo:** `git clone https://github.com/YOUR_USER/repo-name.git`
2. **Install dependencies:** `npm install`
3. **Run all tests:** `npx playwright test`
4. **Run in UI Mode:** `npx playwright test --ui`
5. **View Report:** `npx playwright show-report`

## 📊 Evidence & Reporting
The framework is configured to provide full transparency:
- **Screenshots:** Captured on failure for visual debugging.
- **Videos:** Retained for failed runs to analyze test execution.
- **Trace Viewer:** Detailed step-by-step logs of every action and network request.
