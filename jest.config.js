module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    testPathIgnorePatterns: ["/dist/", "/lib/", "/node_modules/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverage: true,
    setupFilesAfterEnv: ["jest-extended"],
};