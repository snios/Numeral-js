// numeral.js locale configuration
// locale : swedish sweden
// author : Nicklas Öst : https://github.com/mstorgaard

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['../numeral'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('../numeral'));
    } else {
        factory(global.numeral);
    }
}(this, function (numeral) {
    numeral.register('locale', 'sv', {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 't',
            million: 'mn',
            billion: 'md',
            trillion: 'bn'
        },
        ordinal: function (number) {
            var str = number.toString();
            var endsWith = str[str.length - 1];
            return (endsWith === '1' || endsWith === '2') ? ':a' : ':e';
        },
        currency: {
            symbol: 'SEK'
        }
    });
}));