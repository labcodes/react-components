module.exports = {
    moduleNameMapper: {
        '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/tests/mocks/style.js'
    },
    testURL: 'http://localhost',
    setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.js',
};