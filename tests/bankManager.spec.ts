import test, { expect } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";
import { ManagerDashboard } from "./pages/ManagerDashboard";
import customersData from "./data/customers.json";
test.describe("Bank Manager - Data Driven", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.loginAsManager();
  });
  test.skip("Should be in bankManager dashboard", async ({ page }) => {
    await expect(page.url()).toContain("manager");
  });
  for (let i = 0; i < customersData.length; i++) {
    const customer = customersData[i];
    test(`Should add customer: ${customer.firstName} ${customer.lastName}`, async ({
      page,
    }) => {
      const managerDashboard = new ManagerDashboard(page);

      await managerDashboard.btnAddCustomer.click();
      await managerDashboard.fillAllCustomerInputs(
        customer.firstName,
        customer.lastName,
        customer.postCode
      );
      await managerDashboard.clickBtnAddCustomerSubmit();

      await managerDashboard.btnCustomers.click();
      await managerDashboard.searchCustomer(customer.firstName);

      const rowCustomer = await managerDashboard.verifyCustomerInTable(
        customer.firstName
      );
      await expect(rowCustomer).toBeVisible();
      await expect(rowCustomer.locator("td").first()).toHaveText(
        customer.firstName
      );
      if (i == 2) {
        await managerDashboard.deleteCustomer(customer.firstName + "d");
      } else {
        await managerDashboard.deleteCustomer(customer.firstName);
        await expect(rowCustomer).not.toBeVisible();
      }
    });
  }
  
  test("Check if endpoint of reading clients is ok", async ({ request }) => {
    //since this page has no API I use this as an example but logic is the same
    const res = await request.get(
      "https://jsonplaceholder.typicode.com/users/3"
    );
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(body.username).toEqual('Samantha');
    
  });
});
