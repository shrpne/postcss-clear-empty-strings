var postcss = require('postcss');

module.exports = postcss.plugin('postcss-clear-empty-strings', function () {
    return function (root) {
        root.walkDecls(function (decl) {
            if ((decl.value === '\'\'' ||  decl.value === '""') && decl.prop !== 'content') {
                decl.remove();
            }
        });
    };
});
