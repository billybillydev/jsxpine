# astropine

A CLI for adding astropine components to your astro project.

## Usage

Use the `init` command to initialize dependencies for a new project.

The `init` command installs dependencies, configures `tailwind.config.cjs`. For now, CSS variables are not set for the project.

```bash
npx astropine init
```

## add

Use the `add` command to add components to your project.

The `add` command adds a component to your project and installs all required dependencies.

```bash
npx astropine add [component]
```

### Example

```bash
npx astropine add alert
```

You can also run the command without any arguments to view a list of all available components:

```bash
npx astropine add
```

## Documentation

Visit https://astropine-ui.com to view the documentation.

## License

Licensed under the [MIT license](https://github.com/billybillydev/astropine/blob/main/LICENSE.md).
