exports.config = {
    host: '0.0.0.0',
    port: 4444,
    maxInstances: 10,
    capabilities: [
        {
            browserName: 'chrome',
        }
    ],
    specs: [
        './*.spec.js'
    ],
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },
    services: ['selenium-standalone'],
};