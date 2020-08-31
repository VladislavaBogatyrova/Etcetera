module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                extensions: ['.ios.js', '.android.js', '.windows.js', '.native.js', '.js', '.jsx', '.json'],
                alias: {
                    '@components': ['./src/components'],
                    '@constants': ['./src/constants'],
                    '@images': ['./src/assets/images'],
                    '@screens': ['./src/screens'],
                    '@services': ['./src/services'],
                    '@assets': ['./src/assets']
                },
                cwd: 'packagejson',
            },
        ],
        '@babel/plugin-proposal-optional-chaining',
    ],
};