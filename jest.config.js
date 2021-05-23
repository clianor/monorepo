const base = require('./jest.config.base');

module.exports = {
	...base,
	roots: ['<rootDir>'],
	projects: ['<rootDir>/packages/ui', '<rootDir>/packages/utils'],
};
