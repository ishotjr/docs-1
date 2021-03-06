---
id: package-json
title: package.json
---

Your `package.json` is the source for information about your library.

## Example

```json
{
  "name": "example-library",
  "description": "An example library description",
  "author": "Bob Smith",
  "version": "1.2.3",
  "main": "index.js",
  "adalo": {
    "displayName": "Example Library",
    "components": [
      {
        "name": "ExampleComponent",
        "manifest": "./components/ExampleComponent/manifest.json"
      }
    ],
    "logo": "./logo.png",
    "iosInstallScript": "./relativePath/to/script/here",
    "androidInstallScript": "./relativePath/to/script/here",
    "webpackConfig": "./relative/path/to/config"
  }
}
```

## Keys

### `name`

- Type: `String`
- Format: [kebab-case](https://en.wiktionary.org/wiki/kebab_case)

The name of your Adalo Library. This will be used for referencing your library and deploying to our registry.

When choosing a name for your Library, choose a name that

- is unique
- is descriptive

Additionally, when choosing a name for an unpublished library, also choose a name that

- is not already owned by someone else
- is not spelled in a similar way to another library name
- will not confuse others about authorship

:::caution
Once you have published your library you can **NOT** change your library name.
:::

### `author`

The author property is currently used to show who the Library was created by in the Marketplace Library Browser.

### `description`

- Type: `String`

The description of your Adalo Library. This will be used in the Marketplace Library Browser.

### `version`

- Type: `String`

The current version of your Adalo Library. We use `semver` for versioning at Adalo.

For any changes to any of your Components `manifest.json`

- Additions require a minor version upgrade: `1.0.0` => `1.1.0`
- Removals or Heavy Modifications require a major version upgrade: `1.0.0` => `2.0.0`

### `main`

- Type: `String`
- Format: Relative path to image
- Allowed File Extensions: `.js`

The main entry point for your Library.

### `adalo`

- Type: `Object`

Information about your Library.

#### `logo`

- Type: `String`
- Format: Relative path to image
- Allowed File Extensions: `.png`
- Dimensions:
  - `min-height: 90px`
  - `min-width: 90px`

This image will be used in the Component Marketplace Browser. Logos should be at least `90px x 90px`.

##### Example Logo

![Example logo for Libraries](/img/example-logo.png)

#### `displayName`

This will be the name display in the Component Marketplace Browser.

#### `components`

- Type: `Array`

List of individual components in your library. Components in this list have the format:

```json
{
  "name": "ComponentName",
  "manifest": "./src/components/ComponentName/manifest.json"
}
```

Names of components should follow the naming convention of React components, with
mixed case and each internal word capitalized.

#### `iosInstallScript`

- Type: `String`

Optional. Relative path to script that can add steps the ios build process,
for example by installing additional dependencies, adding lines to the Podfile, etc.

See [install scripts](/docs/workflow/install-scripts) for more information.

#### `androidInstallScript`

- Type: `String`

Optional. Relative path to script that can add steps the android build process,
for example by installing additional dependencies, adding options to gradle files, etc.

See [install scripts](/docs/workflow/install-scripts) for more information.

#### `webpackConfig`

- Type: `String`

Optional. Relative path to a custom webpack config file. If you don't specify one,
we will use our own.

:::important
Make sure to make your config the only export of the webpack config file.
:::

See [webpack configs](/docs/workflow/webpack) for more information.
