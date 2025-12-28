import test, { expect } from "@playwright/test";
test.describe("chek Api for manager Bank", () => {
  test("Check if endpoint of reading clients is ok", async ({ request }) => {
    //since this page has no API I use this as an example but logic is the same
    const res = await request.get(
      "https://jsonplaceholder.typicode.com/users/3"
    );
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(body.username).toEqual("Samantha");
  });
});
