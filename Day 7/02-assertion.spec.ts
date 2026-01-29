import { test, expect } from '@playwright/test';

test('example using soft assertions', async ({ page }) => {
  await page.goto('https://your-test-page.com'); // Replace with your URL

  // Example: Testing a form submission result page
  // Use soft assertions for multiple checks on the page.
  // Even if one fails, the test continues to the next assertion.

  // Check if the success message header is present (soft assertion)
  await expect.soft(page.locator('h1'), 'Checking for success header').toContainText('Success!');

  // Check if the confirmation number is visible (soft assertion)
  await expect.soft(page.locator('data-testid=confirmation-number'), 'Checking confirmation number visibility').toBeVisible();

  // Check if the email address displayed matches what was entered (soft assertion)
  // Assume 'userEmail' was entered earlier and stored
  const userEmail = 'test@example.com';
  await expect.soft(page.locator('p.user-email-display'), 'Checking displayed email').toContainText(userEmail);

  // Check if a secondary element (e.g., a summary section) exists (soft assertion)
  await expect.soft(page.locator('#summary-section'), 'Checking summary section existence').toBeAttached();

  // Check if the page title is correct (soft assertion)
  await expect.soft(page).toHaveTitle('Your Order Confirmation - MyShop'); // Replace with expected title

  // Example of a soft assertion that might fail:
  // await expect.soft(page.locator('.discount-badge'), 'Checking for discount badge').toBeVisible();

  // The test continues execution here even if previous soft assertions failed.
  console.log("All soft assertions have been evaluated.");

  // You can perform other actions after soft assertions if needed.
  // await page.click('button.continue-shopping');

  // Important: The test run will ultimately FAIL if ANY soft assertion failed,
  // but it will have attempted all of them first, providing a full report of failures.
});