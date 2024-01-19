import { browserServer } from "./global-setup";
async function globalTeardown() {
    console.info(`Global teardown started`);
    await browserServer.close();
    console.info(`Destorying browser server on port = ${process.env.WS_ENDPOINT}`);
}

export default globalTeardown;