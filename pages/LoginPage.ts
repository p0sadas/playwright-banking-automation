import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly btnClient: Locator;
  readonly btnBankManager: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnClient = page.getByRole("button", { name: "Customer Login" });
    this.btnBankManager = page.getByRole("button", { name: "Bank Manager Login" });
  }

  async navigate() {
    await this.page.goto(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
  }
   async loginAsManager(){
    await this.btnBankManager.click();
    await this.page.waitForURL("**manager",{waitUntil:'networkidle'});
   }
}
