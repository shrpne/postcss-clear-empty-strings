var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input, { from: undefined })
        .then(function (result) {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}


it('remove declarations with empty string values', function () {
    return run(
        'a{ color: ""; border: \'\'; }',
        'a{ }',
        {}
    );
});

it('does not remove `content`', function () {
    return run(
        'a{ content: ""; content: \'\'; }',
        'a{ content: \"\"; content: \'\'; }',
        {}
    );
});
