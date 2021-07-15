module.exports = {
    setupFilesAfterEnv: ["./tests/setup.js"],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy"
    },
    testEnvironment: "jsdom",
};