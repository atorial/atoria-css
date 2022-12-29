# @toria
<img src="https://atoria.site/logo3.png" alt="@toria logo"/>

- - -
<div style="display:flex; justify-content:center; align-items: center">
 <spn style="display:flex;align-items:center; margin-right:12px;"> 
    <img src="https://img.icons8.com/color/32/null/internet--v1.png" style="margin-right:5px" alt="" />
    <a href="https://www.atoria.site">www.atoria.site</a>
</spn>
|
 <spn style="display:flex;align-items:center; margin-right:14px;"> 
    <img src="https://img.icons8.com/windows/32/null/github.png" style="margin-right:5px" alt="" />
    <a href="https://github.com/atorial/atoria.git">atoria</a>
</spn>
|
 <spn style="display:flex;align-items:center; margin-right:5px;"> 
    <img src="https://img.icons8.com/color/32/null/npm.png" style="margin-right:5px" alt="" />
    <a href="https://github.com/atorial/atoria.git">atoria</a>
</spn>
</div>

--- 

[![Publish package](https://github.com/atorial/atoriacss/actions/workflows/release.yml/badge.svg)](https://github.com/atorial/atoriacss/actions/workflows/release.yml)
 
Atoria is a simple, lightweight frontend library designed to make it easy to create visually appealing, responsive layouts for modern websites and applications. It is built with simplicity in mind and aims to provide a set of easy-to-use, customizable styles that can be quickly applied to your project.


## Development

To get started, please follow the following step by step procedure

1. install required libraries for development - these are the main libraries which should be installed globally on your development machine.
    - nodejs
    - package manager - npm, yarn or pnpm
    - git
2. clone atoria repository - [atoria](https://github.com/atorial.atoria.git), and run initial dev server

     ```bash 
   git clone git@github.com:atorial/atoriacss.git
   cd atoriacss
   # install dependencies 
   pnpm
   # run dev environment
   pnpm dev
   # create a release 
   pnpm releasee
   # deploy or publish to npm 
   npm login 
   npm publish
   ```
## Development Guide

### Project Structure

This project has a minimal structure with one index.scss file where all css files are derived from. the rest of files are found inside _partias folde.

The following are the main partial files that are included:
1. _partials/_base.scs
2. _partials/_colors.scss
3. _partials/_utils.scss
4. _partials/_sizing.scss
5. _partials/_radius.scss
6. _partials/_background.scss
    



