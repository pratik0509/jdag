import express from "express";

import config from "./config/server";
import setup from "./setup";

async function serverSetup() {
    const app   = express();
    await setup(app);
    await app.listen(config.PORT);
}

serverSetup().then(() => {
    console.log("Server started on PORT: " + config.PORT);
});