export default {
	preset: "ts-jest", // Tells Jest to use ts-jest to transpile TypeScript
	testEnvironment: "jsdom", // Simulates a browser-like environment (DOM)
	moduleFileExtensions: ["ts", "tsx", "js"], // Supports TypeScript and JavaScript file extensions
	transform: {
		"^.+\\.tsx?$": [
			"ts-jest", // Transpile TypeScript files using ts-jest
			{
				tsconfig: "tsconfig.app.json", // Specify tsconfig file if needed
			},
		],
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Points to a Jest setup file
	testMatch: ["<rootDir>/src/**/*.(test|spec).(ts|tsx)"], // Optional, to find tests inside src
};
