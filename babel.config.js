const presets = [
        [
          '@babel/preset-env',
          {
            targets: {
              node: true,
            },
          },
        ],
      ],
      plugins = [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods',
      ]

module.exports = { presets, plugins }
