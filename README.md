# ember-cli-index-redirect

This addon allows you to use the {{content-for 'app-redirect'}} helper in your app/index.html file to force a redirection to a different
Host before loading the app.

This is useful for quick or temporary redirections during changes on platform or infrastructure.

## Install

* `ember install ember-cli-index-redirect`

## Usage

First set the `indexRedirect` options on the config object in `config/enviroment.js`:

```js
/* jshint node: true */

module.exports = function(environment) {
  const ENV = {
    modulePrefix: sample-app',
    environment,
    
    indexRedirect: {
      host: 'my.sample-app.com',
      protocol: 'https'
    },
    // ...
    },
  // ...

  return ENV;
};
```

* `host`: domain to redirect if the current one (detected using `document.location.host`) is not the same.
* `protocol`: specify `http` or `https`.

Target URL will maintain pathname and query string params present in the current URL.

Then you can use `{{content-for 'index-redirect'}}` on `app/index.html` to insert URL check and redirection code.

That's it :D

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
