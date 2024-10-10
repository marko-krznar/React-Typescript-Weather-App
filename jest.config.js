export default {
	preset: "ts-jest", // Tells Jest to use ts-jest to transpile TypeScript
	testEnvironment: "jsdom", // Simulates a browser-like environment (DOM)
	moduleFileExtensions: ["ts", "tsx", "js"], // Supports TypeScript and JavaScript file extensions
	transform: {
		"^.+\\.tsx?$": "ts-jest", // Transforms TypeScript files using ts-jest
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Points to a Jest setup file
	testMatch: ["<rootDir>/src/**/*.(test|spec).(ts|tsx)"], // Optional, to find tests inside src
	// Specifies global settings or variables that apply to all tests
	globals: {
		// Allows to configure options for ts-jest, the transformer that handles TypeScript files
		"ts-jest": {
			tsconfig: "tsconfig.app.json", // Specifies which TypeScript configuration file should be used by ts-jest during the test runs
		},
	},
};
