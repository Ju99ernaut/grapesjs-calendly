# GrapesJS Calendly

This plugin adds calendly embed widgets to grapesjs.

## Summary

- Plugin name: `grapesjs-calendly`
- Blocks
  - `Calendly`

## Options

## Download

- CDN
  - `https://unpkg.com/grapesjs-calendly`
- NPM
  - `npm i grapesjs-calendly`
- GIT
  - `git clone https://github.com/Ju99ernaut/grapesjs-calendly`

## Usage

```html
<link
  href="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-calendly.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
    container : '#gjs',
    ...
    plugins: ['grapesjs-calendly']
  });
</script>
```

## Development

Clone the repository

```sh
$ git clone https://github.com/Ju99ernaut/grapesjs-calendly
$ cd grapesjs-calendly
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

## License

BSD 3-Clause
