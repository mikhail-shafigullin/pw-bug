import { chromium, firefox, webkit } from '@playwright/test';
export let browserServer;
async function globalSetup(config) {
    console.info(`Global setup started`);

    const { browserName } = config.projects[0].use;
    const headless = !!process.env.CI;
    browserServer = await { chromium, firefox, webkit }[browserName].launchServer({
        headless: headless,
    });
    process.env.WS_ENDPOINT = browserServer.wsEndpoint();

    console.info(
        `Browser server started on port = ${process.env.WS_ENDPOINT} headless = ${headless}`
    );
}
export default globalSetup;