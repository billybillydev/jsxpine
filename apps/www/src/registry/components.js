export const components = /** @type {const} */ ([
	{
		name: "accordion",
		alpineDependencies: ["group-accordion", "solo-accordion"],
		registryDependencies: []
	},
	{
		name: "alert",
		alpineDependencies: [],
		registryDependencies: []
	},
	{
		name: "avatar",
		alpineDependencies: [],
		registryDependencies: []
	},
	{
		name: "badge",
		alpineDependencies: [],
		registryDependencies: []
	},
	{
		name: "button",
		alpineDependencies: [],
		registryDependencies: []
	},
	// {
	// 	name: "calendar",
	// 	alpineDependencies: ["calendar"],
	// 	registryDependencies: ["button", "icon", "input", "select"]
	// },
	{
		name: "card",
		alpineDependencies: [],
		registryDependencies: []
	},
	{
		name: "carousel",
		alpineDependencies: ["carousel"],
		registryDependencies: ["button", "icon", "image"]
	},
	{
		name: "checkbox",
		alpineDependencies: [],
		registryDependencies: []
	},
	// {
	// 	name: "datepicker",
	// 	alpineDependencies: ["datepicker"],
	// 	registryDependencies: ["calendar", "icon"]
	// },
	{
		name: "dropdown",
		alpineDependencies: ["dropdown"],
		registryDependencies: []
	},
	{
		name: "field",
		alpineDependencies: [],
		registryDependencies: ["input"]
	},
	{
		name: "gallery",
		alpineDependencies: ["rest-gallery"],
		registryDependencies: ["carousel", "image", "zoom"]
	},
	{
		name: "icon",
		alpineDependencies: [],
		registryDependencies: ["svg"]
	},
	{
		name: "image",
		alpineDependencies: [],
		registryDependencies: []
	},
	{
		name: "imagepicker",
		alpineDependencies: ["imagepicker"],
		registryDependencies: []
	},
	{
		name: "input",
		alpineDependencies: [],
		registryDependencies: ["icon"]
	},
	{
		name: "modal",
		alpineDependencies: ["modal"],
		registryDependencies: []
	},
	{
		name: "page",
		alpineDependencies: [],
		registryDependencies: []
	},
	{
		name: "pagination",
		alpineDependencies: ["pagination"],
		registryDependencies: ["button", "icon", "input", "select"]
	},
	{
		name: "progress",
		alpineDependencies: ["progress"],
		registryDependencies: []
	},
	{
		name: "radio",
		alpineDependencies: [],
		registryDependencies: []
	},
	{
		name: "range-slider",
		alpineDependencies: [],
		registryDependencies: []
	},
	{
		name: "ratings",
		alpineDependencies: [],
		registryDependencies: ["icon"]
	},
	{
		name: "seo-modifier",
		alpineDependencies: ["seo"],
		registryDependencies: []
	},
	{
		name: "select",
		alpineDependencies: ["dropdown-select"],
		registryDependencies: ["icon", "input"]
	},
	{
		name: "sidebar",
		alpineDependencies: ["sidebar"],
		registryDependencies: ["button", "icon"]
	},
	{
		name: "svg",
		alpineDependencies: [],
		registryDependencies: []
	},
	{
		name: "switch",
		alpineDependencies: ["switch-checkbox"],
		registryDependencies: []
	},
	{
		name: "table",
		alpineDependencies: ["table"],
		registryDependencies: ["input", "select"]
	},
	{
		name: "tabs",
		alpineDependencies: ["tabs"],
		registryDependencies: []
	},
	{
		name: "theme-toggle",
		alpineDependencies: ["theme-toggle"],
		registryDependencies: []
	},
	{
		name: "tooltip",
		alpineDependencies: ["tooltip"],
		registryDependencies: []
	},
	{
		name: "tree",
		alpineDependencies: ["tree"],
		registryDependencies: []
	},
	{
		name: "zoom",
		alpineDependencies: ["zoom"],
		registryDependencies: []
	}
]);

/**
 * @typedef ComponentRegistry
 * @type {typeof components[number]}
 */

/**
 * @param {ComponentRegistry["name"]} name
 * @param {Array<ComponentRegistry["name"]>} [componentDependencies]
 */
export function getComponentDependencies(name, componentDependencies = []) {
	const component = components.find((component) => component.name === name);

	if (!component) {
		return [];
	}

	for (const dependency of component.registryDependencies) {
		if (!componentDependencies.includes(dependency)) {
			componentDependencies.push(dependency);
			getComponentDependencies(dependency, componentDependencies);
		}
	}

	return componentDependencies;
}