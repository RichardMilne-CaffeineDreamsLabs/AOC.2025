import * as fs from "fs";
import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

function maxSubsequenceDigits(s, k) {
  const n = s.length;
  if (k >= n) return s;
  const stack = [];
  let toRemove = n - k;

  for (let i = 0; i < n; i++) {
    const ch = s[i];
    while (stack.length > 0 && toRemove > 0 && stack[stack.length - 1] < ch) {
      stack.pop();
      toRemove--;
    }
    stack.push(ch);
  }

  if (toRemove > 0) stack.length = stack.length - toRemove;
  
  return stack.slice(0, k).join("");
}

const p = path.join(__dirname, "input.txt");
fs.readFile(p, (_, data) => {
    const lines = data.toString().split("\n");

    let jolts = new Array(lines.length);

    for (let i = 0; i < lines.length; i++){
        let l = lines[i];
        jolts[i] = maxSubsequenceDigits(l, 12);
    }

    const ans = jolts
        .map(Number)
        .reduce((a,b) => a + b, 0);

    console.log(ans);
});