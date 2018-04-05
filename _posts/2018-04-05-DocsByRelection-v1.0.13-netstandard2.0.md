---
published: true
layout: post
title: DocsByReflection v1.0.13 - .NET Standard 2.0
image: http://diegogiacomelli.com.br/images/netcore.svg
---
The **[DocsByReflection v1.0.13](https://github.com/giacomelli/DocsByReflection/releases/tag/v1.0.13)** is out.

> If you don't know what is DocsByReflection or what you can do with it, take a look in my previous post about it ["Getting your code documentation at runtime"](http://diegogiacomelli.com.br/getting-your-code-documentation-at-runtime).

## .NET Standard 2.0 and .NET Framework 4.6
In this version [DocsByReflection](https://github.com/giacomelli/DocsByReflection) starts to support .NET Standard 2.0.

Now, if you need to use the library on .NET Standard 2.0 or .NET Framework 4.6 projects:

```shell
install-package DocsByReflection.
```

## .NET Framework
If you are in a .NET Framework project lower than .NET Framework 4.6 you can use the previous version:

```shell
install-package DocsByReflection -Version 1.0.12.20
```

## Thanks to
I would like to thanks [Erik O'Leary](https://github.com/onionhammer) to perform the whole migration of DocsByReflection to .NET Standard 2.0.
