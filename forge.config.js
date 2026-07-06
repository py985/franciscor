module.exports = {
    packagerConfig: {
        icon: 'icon',
        name: 'franciscor'
    },
    rebuildConfig: {},
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                name: 'franciscor'
            }
        },
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin']
        },
        {
            name: '@electron-forge/maker-deb',
            config: {
                icon: 'icon.png'
            }
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {
                icon: 'icon.png'
            }
        }
    ]
};