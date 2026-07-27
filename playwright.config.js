// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { junit } from 'node:test/reporters';


export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  workers:undefined,
  reporter: [['html'],['junit',{outputFile:'test-results/junit.xml'}]],
  expect:{
      timeout:50*100,
    },
  use: {
    trace: 'on-first-retry',
    screenshot:'only-on-failure',
    video:'on',
    timeout:50*100,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
 
  ],
});

