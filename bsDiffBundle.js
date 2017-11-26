const bsdp = require('bsdp');
const path = require('path');

const bundlePath = path.join(__dirname, 'output', 'android');
const  NewFilePath= path.join(bundlePath, 'index.android.bundle');
const oldFilePath = path.join(bundlePath, 'index.android.testApp.bundle');
const patchFilePath = path.join(bundlePath, 'index.android.patch.js');

bsdp.diff(oldFilePath, NewFilePath, patchFilePath);
