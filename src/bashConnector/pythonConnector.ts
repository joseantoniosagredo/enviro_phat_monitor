import { Callback } from "../utils/typescript";
import { spawn } from 'child_process'
const spawnPyton = spawn.bind(null, 'python')

export default function (script: string[], callback: Callback<string>) {
    const ls = spawnPyton(script)

    ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        callback(null, data)
    });

    ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        callback(new Error(data))
    });

    ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}