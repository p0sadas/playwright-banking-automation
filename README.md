# 🏦 XYZ Bank - E2E Test Automation Framework

A professional End-to-End (E2E) test automation framework built with **Playwright** and **TypeScript**. This project showcases industry-standard automation patterns, including Page Object Model (POM), Data-Driven Testing (DDT), and Continuous Integration.

## 🚀 Key Features

* **Design Pattern:** Implemented **Page Object Model (POM)** to separate page structure from test logic, ensuring high maintainability.
* **Data-Driven Testing (DDT):** Test scenarios are powered by external **JSON** files, enabling validation of multiple user profiles without code duplication.
* **Robust Locators:** Utilization of ARIA roles and scoped locators to handle dynamic Angular elements effectively.
* **CI/CD Integration:** Fully automated pipeline using **GitHub Actions** that triggers test execution on every push/pull request.
* **Comprehensive Reporting:** Detailed HTML reports generated automatically, featuring:
    * 🎥 Video recordings of test execution.
    * 📸 Automated screenshots on failure.
    * 🔍 Playwright Trace Viewer logs for deep debugging.

---

## 🛠️ Tech Stack

* **Language:** TypeScript
* **Framework:** Playwright
* **CI/CD:** GitHub Actions / Jenkins
* **Reporting:** Playwright HTML Reporter

---

## 📦 Project Structure

```text
├── .github/workflows/    # CI/CD Pipeline configuration (GitHub Actions)
├── data/                 # JSON data files for Data-Driven testing
├── pages/                # Page Object Model classes (Locators & Actions)
├── tests/                
│   ├── ui/               # Web UI E2E tests
│   └── api/              # Backend API validation tests
├── playwright.config.ts  # Global Playwright configuration
└── package.json          # Dependencies and automation scripts