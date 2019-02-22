# eslint-config-camo

[![npm version](https://img.shields.io/npm/v/eslint-config-camo.svg)](https://npmjs.com/package/eslint-config-camo)
[![travis-ci build status](https://travis-ci.com/usecamo/eslint-config-camo.svg?branch=master)](https://travis-ci.com/usecamo/eslint-config-camo)
[![appveyor build status](https://ci.appveyor.com/api/projects/status/ixwt6xdgxkao4u94/branch/master?svg=true)](https://ci.appveyor.com/project/jasonnam/eslint-config-camo/branch/master)

Base eslint config used by Camo.

## Installation

### install-peerdeps

Install with [`install-peerdeps`](https://npmjs.com/package/install-peerdeps):

```sh
npx install-peerdeps --dev eslint-config-camo
```

### npm

Install with npm:

```sh
npm install --save-dev eslint-config-camo
```

Next, install the correct versions of each package, which are listed by the command:

```sh
npm info "eslint-config-camo@latest" peerDependencies
```

## Usage

Extend eslint config with `camo`.

```json
{
  "extends": "camo"
}
```

## License

eslint-config-camo is released under the MIT license. [See LICENSE](https://github.com/usecamo/eslint-config-camo/blob/master/LICENSE) for details.
