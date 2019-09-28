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
        'babel-plugin-prismjs',
      ]

module.exports = { presets, plugins }
