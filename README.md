### Summary

Using Create React App is typically recommended for beginners because it handles much of the setup and configuration automatically. To understand the building block of the React, Next JS ecosystem we will work with stripped down manual installations

### 1. **Set Up the Project Directory**

First, create a new directory for your project and navigate into it:

```bash
mkdir my-react-app
cd my-react-app
```

### 2. **Initialise a New npm Project**

Initialise a new npm project with:

```bash
npm init -y. #or npm init for a manual
```

This will create a `package.json` file with default settings.

**Delete the type in the package.json - this causes the compiler problems**

** make a .gitignore *node_modules/* **

### 3. **Install React and ReactDOM**

Install React and ReactDOM as dependencies:

```bash
npm install react@latest react-dom@latest
```

### 4. **Set Up a Build Tool**

You need a build tool to compile JSX and bundle your JavaScript. You can use Webpack and Babel for this purpose.

#### **Install Webpack and Babel**

Install Webpack and Babel along with their required plugins:

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin

```

**Note:** now we add you .gitignore!

#### **Create Webpack Configuration**

Create a file named `webpack.config.js` in the root of your project with the following content:

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // cleans up the /dist folder before build
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
  },
};
```

#### **Create Babel Configuration**

Create a file named `.babelrc` in the root of your project with the following content:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### 5. **Set Up Project Structure**

Create the necessary directories and files:

```bash
mkdir src public
touch src/index.js public/index.html
```

#### **Edit `public/index.html`**

Add basic HTML content to `public/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

#### **Edit `src/index.js`**

Add basic React code to `src/index.js`:

```javascript
import React from "react";
import { createRoot } from "react-dom/client";

const App = () => <h1>Hello, React!</h1>;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

### 6. **Add npm Scripts**

Update your `package.json` to include the following scripts:

```json
"scripts": {
  "start": "webpack serve --mode development",
  "build": "webpack --mode production"
}
```

### 7. **Run Your Project**

Start the development server with:

```bash
npm start
```

Your React app should be available at `http://localhost:3000`.
