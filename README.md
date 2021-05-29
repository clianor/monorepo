# 1. 모노레포 설정

```shell
$ yarn init -y
$ yarn add lerna -DW
```

```json
// package.json에 아래의 내용 추가
{
  ...,
  "scripts": {
    "lerna": "lerna"
  },
  "private": true,
  "workspaces": ["packages/*"]
}
```

```json
// lerna.json
{
  "packages": ["packages/**"],
  "version": "independent",
  "npmClient": "yarn",
  "useWorkspaces": true
}
```

# 2. 타입스크립트 설정

```shell
$ yarn add typescript -DW
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "module": "commonjs",
    "moduleResolution": "node",
    "target": "es2015",
    "composite": true
  }
}
```

# 3. 패키지 생성

## utils 패키지 추가
```json
// packages/utils/package.json
{
  "name": "@design-system/utils",
  "version": "0.0.1",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "private": true,
  "scripts": {
    "build": "tsc -b"
  }
}
```

```json
// packages/utils/tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```

```ts
// packages/utils/src/index.ts
export function roll(roll: string): string {
  return `I rolled a dice: ${roll}. Outcome grim`;
}
```

## ui 패키지 추가
```json
// packages/ui/package.json
{
  "name": "@design-system/ui",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "build": "tsc -b"
  },
  "dependencies": {
    "@design-system/utils": "^0.0.1"
  }
}
```

```json
// packages/ui/tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src",
    "target": "ES2019",
    "lib": [ "dom", "ES2019"]
  },
  "references": [
    { "path":  "../utils" }
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```

```ts
// packages/ui/src/index.ts
import { roll } from "@design-system/utils";

console.log(roll("1d20"));
```

```shell
// 의존성 설치하기
$ yarn lerna bootstrap
// 모든 패키지에서 빌드를 실행함 ( --stream 옵션은 prefix를 붙인 결과를 보여줌 )
$ yarn lerna run build --stream
$ yarn lerna add rimraf --scope=@design-system/utils --scope=@design-system/ui
```

```json
// packages/utils/tsconfig.json
{
  ...,
  "scripts": {
    "build": "tsc -b",
    "clean": "rimraf ./dist && rimraf tsconfig.tsbuildinfo",
    "watch": "tsc -b -w --preserveWatchOutput"
  },
  ...
}
```

```json
// packages/ui/tsconfig.json
{
  ...,
  "scripts": {
    "build": "tsc -b",
    "clean": "rimraf ./dist && rimraf tsconfig.tsbuildinfo"
  },
  ...
}
```

```json
// package.json
{
  ...,
  "scripts": {
    "lerna": "lerna",
    "build": "lerna run build --stream",
    "clean": "lerna run clean --parallel"
  },
  ...
}
```

# 4. 웹팩 설정

```shell
$ yarn add -DW webpack webpack-cli ts-loader
```

```js
// packages/ui/webpack.config.js
// packages/utils/webpack.config.js
module.exports = function (env, argv) {
  return {
    mode: env.production ? "production" : "development",
    devtool: env.production ? "source-map" : "eval",
    entry: {
      index: "./src/index.ts",
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
  };
};
```

```json
// packages/ui/package.json
// packages/utils/package.json
{
  ...,
  "scripts": {
    "build": "webpack --env production",
    "clean": "rimraf ./dist && rimraf tsconfig.tsbuildinfo",
    "watch": "tsc -b -w --preserveWatchOutput",
  },
  ...,
}
```

# 5. ESLint 설정

```shell
$ yarn add -D -W eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier prettier
```

```js
// .eslintrc.js
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
};
```

```js
// .prettierrc.js
module.exports = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true, // JSX에서 singleQuote or doubleQuote
  endOfLine: 'lf',
  trailingComma: 'all', // comma 항상 붙이기
  bracketSpacing: false, // 객체리터럴에서 { } 사이에 공백을 넣을 것인지
  jsxBracketSameLine: false, // 여러줄의 JSX 요소가 있을때, > 를 마지막 줄의 끝부분에서 닫을 것인지
  arrowParens: 'always', // (x) => x : always | x => x : avoid
};
```

```json
// package.json
{
  "scripts": {
    ...,
    "lint": "eslint ./packages --ext .ts,.tsx",
    "lint:fix": "eslint ./packages --ext .ts,.tsx --fix"
  }
}
```

# 6. Jest 셋팅

```shell
$ yarn add -DW jest ts-jest @types/jest
```

```js
// jest.config.base.js
module.exports = {
	preset: 'ts-jest',
	roots: ['<rootDir>/src'],
	testEnvironment: 'node',
	collectCoverage: true,
	coveragePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
	coverageDirectory: '<rootDir>/coverage/',
	verbose: true,
};

```

```js
// jest.config.js
const base = require('./jest.config.base');

module.exports = {
	...base,
	roots: ['<rootDir>'],
	projects: ['<rootDir>/packages/ui', '<rootDir>/packages/utils'],
};
```

```json
// package.json
{
  ...,
  "scripts": {
    ...,
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

```ts
// packages/utils/src/index.test.ts
describe('utils first test', () => {
    it.todo('todo1');
	it.todo('todo2');
});
```

# 7. Husky and Lint-Staged

```shell
$ yarn add -DW husky lint-staged
```

```js
module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'pre-push': 'yarn test',
  },
};
```

```js
// lint-staged.config.js
module.exports = {
  '*.{ts,tsx}': ['eslint --fix'],
};
```