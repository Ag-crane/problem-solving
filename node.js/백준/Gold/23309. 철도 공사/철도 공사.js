const fs = require('fs');
const raw = fs.readFileSync('/dev/stdin', 'utf8');

let pos = 0;
function readLine() {
  if (pos >= raw.length) return null;
  let nl = raw.indexOf('\n', pos);
  if (nl === -1) nl = raw.length;
  const line = raw.slice(pos, nl);
  pos = nl + 1;
  return line;
}

const firstLine = readLine();
let spacePos = firstLine.indexOf(' ');
const N = +firstLine.slice(0, spacePos);
const M = +firstLine.slice(spacePos + 1);

const secondLine = readLine().split(' ');
const initialStations = new Array(N);
for (let i = 0; i < N; i++) {
  initialStations[i] = +secondLine[i];
}

const MAX_ID = 1000000;
const prev = new Int32Array(MAX_ID + 1);
const next = new Int32Array(MAX_ID + 1);

for (let i = 0; i < N; i++) {
  const cur = initialStations[i];
  const p = initialStations[(i - 1 + N) % N];
  const n = initialStations[(i + 1) % N];
  prev[cur] = p;
  next[cur] = n;
}

const output = new Array(M);
let outPos = 0;

for (let m = 0; m < M; m++) {
  const line = readLine();
  let sp = line.indexOf(' ');
  const cmd = line.slice(0, sp);
  let i, j, pv, nx, nxN, pvP;

  if (cmd === 'BN') {
    let sp2 = line.indexOf(' ', sp + 1);
    i = +line.slice(sp + 1, sp2);
    j = +line.slice(sp2 + 1);
    nx = next[i];
    output[outPos++] = nx;
    next[i] = j;
    prev[j] = i;
    next[j] = nx;
    prev[nx] = j;
  } else if (cmd === 'BP') {
    let sp2 = line.indexOf(' ', sp + 1);
    i = +line.slice(sp + 1, sp2);
    j = +line.slice(sp2 + 1);
    pv = prev[i];
    output[outPos++] = pv;
    next[pv] = j;
    prev[j] = pv;
    next[j] = i;
    prev[i] = j;
  } else if (cmd === 'CN') {
    i = +line.slice(sp + 1);
    nx = next[i];
    output[outPos++] = nx;
    nxN = next[nx];
    next[i] = nxN;
    prev[nxN] = i;
    next[nx] = 0;
    prev[nx] = 0;
  } else {
    i = +line.slice(sp + 1);
    pv = prev[i];
    output[outPos++] = pv;
    pvP = prev[pv];
    next[pvP] = i;
    prev[i] = pvP;
    next[pv] = 0;
    prev[pv] = 0;
  }
}

console.log(output.join('\n'));
