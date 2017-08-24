/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-index-redirect',

  contentFor(type, config) {
    const { host, protocol } = config.indexRedirect;

    if (type === 'app-redirect' && (typeof host !== 'undefined')) {
      return `
        <script>
          var appHost = "${host}";
          if ( appHost !== "" && appHost !== document.location.host) {
            var url = "${protocol}" + appHost + document.location.pathname + document.location.search;
            window.location.replace(url);
          }
        </script>
      `;
    }
  }
};
