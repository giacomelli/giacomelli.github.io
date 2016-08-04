---
published: true
layout: post
title: "Testing js-dos"
published: true
---
Recenlty I discovered the project [Emscripten](https://github.com/kripken/emscripten):

> Emscripten is an LLVM-to-JavaScript compiler. It takes LLVM bitcode - which can be generated from C/C++, using llvm-gcc (DragonEgg) or clang, or any other language that can be converted into LLVM - and compiles that into JavaScript, which can be run on the web (or anywhere else JavaScript can run).

And after this discovered the js-dox project:

> A javascript version of dosbox that can run dos programs and games in browser.
> js-dos provides javascript API to easily run DOS programs and games in browser. This API allows to run unmodified versions of DOS programs, in other words you can run DOS binary in browser.

js-dos use Emscripten and [em-dosbox](https://github.com/dreamlayers/em-dosbox) projects do built his easy-to-use api.

Below I made a test with it and put one of my first games, a Nibble clone wrote with 461 lines of C to run in browser.

This is all JS code to start js-dos in this sample:

```js
var dosbox = new Dosbox({
    id: "dosbox",
    onload: function (dosbox) {
      dosbox.run("NIBBLE.zip", "./NIBBLE.EXE");
    },
    onrun: function (dosbox, app) {
      console.log("App '" + app + "' is runned");
    }
  });
```

Below is the result. Enjoy it!

<iframe width="100%" height="480" src="../labs/testing-js-dos/nibble.html" frameborder="0" allowfullscreen></iframe>

The full sample can be download here: [sample](../labs/testing-js-dos/sample.zip).

*Note: tested on Chrome 64 bits.*



