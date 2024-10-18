import { test } from "@playwright/test";


//Sources:
//https://www.youtube.com/watch?v=4G8c7BwHY5s&ab_channel=LetCodewithKoushik 

test.describe("Testing the broken image Test Case", () => {
  test("Testing the broken image", async ({ page }) => {
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/broken-image"
    );
  });
});
