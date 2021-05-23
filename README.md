# 1. 모노레포 설정

```
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

```
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

```
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

```
$ yarn add -DW html-webpack-plugin webpack webpack-cli webpack-dev-server ts-loader
```

```html
// packages/ui/src/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title>UI</title>
  </head>

  <body>
    <div id="result"></div>
  </body>
</html>
```

```js
// packages/ui/webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function (env, argv) {
  return {
    mode: env.production ? "production" : "development",
    devtool: env.production ? "source-map" : "eval",
    devServer: {
      open: true,
      historyApiFallback: true,
    },
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
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
  };
};
```

```json
// packages/ui/package.json
{
  ...,
  "scripts": {
    "start": "webpack serve",
    "build": "webpack --env production",
    "clean": "rimraf ./dist && rimraf tsconfig.tsbuildinfo",
    "watch": "tsc -b -w --preserveWatchOutput",
  },
  ...,
}
```

```js
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
