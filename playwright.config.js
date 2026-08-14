// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { junit } from 'node:test/reporters';

  const environments={
    dev : 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    stage : '',
    uat : '',
    prod : ''
  };

 const targetUrl = environments[process.env.ENV] || environments.dev;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  workers:undefined,
  reporter: [['html'],['junit',{outputFile:'test-results/junit.xml'}]],
  expect:{
      timeout:60*100,
    },
 
  use: {
    baseURL: targetUrl,
    trace: 'on-first-retry',
    screenshot:'only-on-failure',
    video:'on',
    timeout:60*100,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],headless:false },
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

