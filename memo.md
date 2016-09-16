# memo

## React.createClass or React.Component?

ES2015 class を前提とした React.Component を使うほうが良さそう。

> Our eventual goal is for ES6 classes to replace React.createClass completely,
> but until we have a replacement for current mixin use cases and support for
> class property initializers in the language,
> we don't plan to deprecate React.createClass.
> 
> [React v0.13 | React](https://facebook.github.io/react/blog/2015/03/10/react-v0.13.html)

## React Developer Tools と `file://`

[facebook/react-devtools](https://github.com/facebook/react-devtools)

Chrome 拡張機能設定から "ファイルの URL へのアクセスを許可する"。
