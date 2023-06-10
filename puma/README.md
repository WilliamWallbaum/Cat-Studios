# Cat Studios Online

```
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)



## 🚀 Project Structure

Inside of Cat Studios, you'll see the following folders and files:

```
/
├── public/
├── src/
│   ├── assests
│   ├── components
│   ├── layouts
│   │   └── 
│   └── pages/
│       └── blog/
│       └── index.astro
└── package.json
```

## Assets
assets include images, videos, and JSON files needed for rthe site to run or display what it needs.

## Components
Components are the working pices for the web site. these pieces are styled with flex to handle mobile functionality as small chunks of the website

## Layouts
Layout cover two functions:

- section layouts
sections are the pieces wrapped in HTML tag `<section>`. Creating the bassic rows to be used on page layouts. will include 2, 3, 4 column sections. these section are styled with grid to handle mobile functionality

- page layouts
page layouts should handle different page tyes to match data types. Ex: if you have a landing page with no navigation that layout goes here. Along with your standard bare minimum layout for basic pages.
This should basically be everything in the HTML down to the `<main>`

## Pages
Page are JSON files describing how the page will be layed out and the content on the pages. Schema to follow.