#!/usr/bin/env node

'use strict';

const os = require('os');

const ifaces = os.networkInterfaces();

for (const name in ifaces) {
    const iface = ifaces[name];
    for (let i = 0; i < iface.length; i++) {
        const details = iface[i];
        if (details.family === 'IPv4' && details.internal === false) {
            process.stdout.write(details.address);
            process.exit(0);
        }
    }
}

process.stdout.write('127.0.0.1');
