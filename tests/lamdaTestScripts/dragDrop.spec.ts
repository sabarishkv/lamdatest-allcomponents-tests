import { test, expect } from "@playwright/test";

test.use({
    viewport: { width: 1600, height: 1200 },
  });

test.describe("All the test related to Drag and drop lies here", () => {

  test("Simple test to drag and drop element using pre available function", async ({
    page,
  }) => {
    let dropItem: string = "Draggable 1";

    await page.goto(
      "https://www.lambdatest.com/selenium-playground/drag-and-drop-demo"
    );
    await page.waitForLoadState("domcontentloaded");
    await page.waitForLoadState("networkidle");
    await expect(page.locator("//div[@id='mydropzone']")).toBeVisible();
    await page.dragAndDrop(
      `//div[@id='todrag']/span[contains(text(),'${dropItem}')]`,
      "//div[@id='mydropzone']"
    );
    await expect(
      page.locator(
        `//div[@id='droppedlist']/span[contains(text(),'${dropItem}')]`
      )
    ).toBeVisible({ timeout: 300 * 100 });
    await page.waitForTimeout(4000);
    await page.close();
  });

  test("Simple test to drag and drop elements in an array using pre available function, @dropAll", async ({
    page,
  }) => {
    let dropItem: string[] = ["Draggable 1", "Draggable 2"];
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/drag-and-drop-demo"
    );
    await page.waitForLoadState("domcontentloaded");
    await page.waitForLoadState("networkidle");
    await expect(page.locator("//div[@id='mydropzone']")).toBeVisible();
    for (let i = 0; i < dropItem.length; i++) {
      await page.dragAndDrop(
        `//div[@id='todrag']/span[contains(text(),'${dropItem[i]}')]`,
        "//div[@id='mydropzone']"
      );
      await expect(
        page.locator(
          `//div[@id='droppedlist']/span[contains(text(),'${dropItem[i]}')]`
        )
      ).toBeVisible({ timeout: 300 * 100 });
    }
    await page.waitForTimeout(4000);
    await page.close();
  });
});
