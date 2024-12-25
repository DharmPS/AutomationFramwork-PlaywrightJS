import { defineConfig, devices } from '@playwright/test';
import { on } from 'events';

export default defineConfig({
  timeout: 60*2*1000,
  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'], headless: false },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], headless: false },
    },  
  ],
  reporter: [['html', { outputFolder: 'test-results/html' }]],  // HTML reporter in a subfolder
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://www.automationexercise.com/',
  },
  outputDir: 'test-results/output',  // Ensure the main output directory is separate
  workers: 1,
});
