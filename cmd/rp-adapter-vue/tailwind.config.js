/*
Copyright SecureKey Technologies Inc. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

module.exports = {
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: true,
        content: [
            'src/components/**/*.vue',
            'src/pages/layouts/*.vue',
            'src/pages/**/*.vue',
            'src/*.vue',
            'src/*.js'
        ]
    },
    container: {
        center: true,
    },
    theme: {
        extend: {},
    },
    variants: {
        borderWidth: ['responsive', 'last', 'hover', 'focus'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    plugins: [],
}