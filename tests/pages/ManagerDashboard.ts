import { Page, Locator } from "@playwright/test";

export class ManagerDashboard {
  readonly page: Page;
  readonly btnAddCustomer: Locator;
  readonly btnOpenAccount: Locator;
  readonly btnCustomers: Locator;
  readonly inputFirstName: Locator;
  readonly inputLastName: Locator;
  readonly inputPostCode: Locator;
  readonly inputSearchCustomer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnAddCustomer = page.getByRole("button", { name: "Add Customer" });
    this.btnOpenAccount = page.getByRole("button", { name: "Open Account" });
    this.btnCustomers = page.getByRole("button", { name: "Customers" });
    this.inputFirstName = page.getByPlaceholder("First Name");
    this.inputLastName = page.getByPlaceholder("Last Name");
    this.inputPostCode = page.getByPlaceholder("Post Code");
    this.inputSearchCustomer = page.getByPlaceholder("Search Customer");
  }

  async navigate() {
    await this.page.goto("url");
  }
  async fillAllCustomerInputs(
    firstName: string,
    lastName: string,
    postalCode: string
  ): Promise<void> {
    await this.inputFirstName.fill(firstName);
    await this.inputLastName.fill(lastName);
    await this.inputPostCode.fill(postalCode);
  }
  async clickBtnAddCustomerSubmit(): Promise<void> {
    const form = this.page.locator('form[name="myForm"]');
    const btnSubmitCustomer = form.getByRole("button", {
      name: "Add Customer",
    });
    await btnSubmitCustomer.click();
  }
  async searchCustomer(customer: string): Promise<void> {
    await this.inputSearchCustomer.fill(customer);
  }
  async verifyCustomerInTable(name: string) {
    const table = this.page.getByRole("table");
    const row = table.locator("tbody tr").filter({ hasText: name });
    return row;
  }
  async deleteCustomer(name: string): Promise<void> {
    const table = this.page.getByRole("table");
    const row = table.locator("tbody tr").filter({ hasText: name });
    await row.getByRole("button",{name:'Delete'}).click();
    
  }
}
