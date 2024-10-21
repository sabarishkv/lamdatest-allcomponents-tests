import { test } from "@playwright/test";
import {faker} from '@faker-js/faker'
import { LargeNumberLike } from "crypto";
import { an } from "@faker-js/faker/dist/airline-C5Qwd7_q";

//Sources:
//https://www.youtube.com/watch?v=4G8c7BwHY5s&ab_channel=LetCodewithKoushik

test.describe("Testing the broken image Test Case", () => {
  test("Testing the broken image", async ({ page }) => {
    await test.step("Launching the Application", async () => {
      await page.goto(
        "https://www.lambdatest.com/selenium-playground/broken-image"
      );
    });

    await test.step("Find the broken image link", async () => {

        let name: string =  faker.person.fullName({sex:'male'});

        console.log(name);
    });
  });
});
