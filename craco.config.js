const {whenDev} = require('@craco/craco');

module.exports = {
    babel: {
        plugins: [
            [
                'styled-jsx/babel',
                {
                    optimizeForSpeed: whenDev(() => true, false),
                    plugins: [
                        '@styled-jsx/plugin-sass',
                    ],
                },
            ],
        ],
    },
};
