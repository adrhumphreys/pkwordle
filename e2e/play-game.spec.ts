import { test, expect } from "@playwright/test";

test("should navigate to the about page", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.getByRole("textbox", { name: "Username" }).first().fill("Biome");
  await page.getByRole("button", { name: "Create room" }).click();

  await expect(page.locator("h1")).toContainText("Room: ");

  await page.getByRole("button", { name: "Start" }).click();
  await page.getByRole("textbox", { name: "Guess" }).first().fill("Biome");
  await page.getByRole("button", { name: "Enter" }).click();

  await expect(page.getByTestId("previous-guesses")).toContainText("biome");
  await expect(page.getByTestId("previous-guesses")).toHaveScreenshot(
    "first-guess.png"
  );

  await page.getByRole("textbox", { name: "Guess" }).first().fill("mango");
  await page.getByRole("button", { name: "Enter" }).click();

  await expect(page.getByTestId("previous-guesses")).toContainText("mango");
  await expect(page.getByTestId("previous-guesses")).toHaveScreenshot(
    "second-guess.png"
  );
});
