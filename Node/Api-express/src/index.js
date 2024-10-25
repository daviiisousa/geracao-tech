import express from "express";
import os from 'os'
import {router} from '../routes/users.js'
const port = 3000;

const app = express();

app.use(express.json());

app.use('/users', router)

app.listen(port, () => {
  console.log(`api esta rodando em ${port}`);
});

app.get('/system', (_req, res) => {
    const systemInfo = {
        hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        cpuCores: os.cpus().length,
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        versionSystem: os.version()
    }
    res.json(systemInfo)
})