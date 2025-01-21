# jsxpine

A CLI for adding jsxpine components to your node.js project.

## Usage

Use the `init` command to initialize dependencies for a new project.

The `init` command installs dependencies, configures `tailwind.config.cjs`. For now, CSS variables are not set for the project.

```bash
npx jsxpine init
```

## add

Use the `add` command to add components to your project.

The `add` command adds a component to your project and installs all required dependencies.

```bash
npx jsxpine add [component]
```

### Example

```bash
npx jsxpine add alert
```

You can also run the command without any arguments to view a list of all available components:

```bash
npx jsxpine add
```

## Documentation

Visit https://jsxpine.com/core/installation-and-usage to view the documentation.

## License

Licensed under the [MIT license](https://github.com/billybillydev/astropine/blob/main/LICENSE.md).
