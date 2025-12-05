import * as fs from "fs";
import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const p = path.join(__dirname, "input.txt");
fs.readFile(p, (_, data) => {
    const lines = data.toString().split("\n");

    let jolts = new Array(lines.length);

    for (let i = 0; i < lines.length; i++){
        let l = lines[i];
        let digits = l.split("");
        jolts[i] = [];

        for (let i1 = 0; i1 < digits.length; i1++) {
            const n1 = digits[i1];

            for (let i2 = i1+1; i2 < digits.length; i2++) {
                const n2 = digits[i2];

                jolts[i].push(n1 + n2);
            }
        }
    }

    const ans = jolts
        .map((v) => v.sort().pop())
        .flatMap(Number)
        .reduce((a,b) => a + b, 0);

    console.log(ans);
});