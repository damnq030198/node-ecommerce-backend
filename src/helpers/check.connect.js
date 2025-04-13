'use strict';

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');
const _SECOND = 5000;
const countConnection = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of connections: ${numConnection}`);
    // return numConnection;
};

// check over load
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        // Example maximum number of connections is 5
        const maxConnections = numCores * 5;
        console.log(`Number of connections: ${numConnection}`);
        console.log(`Number of cores: ${numCores}`);
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);
        console.log(`Max connections: ${maxConnections}`);
        if (numConnection > maxConnections) {
            console.log(`Connection overload detected`);
        }
    }, _SECOND);
};
module.exports = { countConnection, checkOverload };
