/**
 * @typedef {Object} Chapter
 * @property {string} text
 * @property {string} slug
 */

/**
 * @typedef {Object} Menu
 * @property {string} text
 * @property {string} link
 * @property {Array<Chapter>} [chapters]
 */

/**
 * @typedef MenuMap
 * @type {Map<string, Menu>}
 */

/**
 * @typedef {Object} SidebarSection
 * @property {string} header
 * @property {MenuMap} menu
 */

/**
 * @type {Array<SidebarSection>}
 */
export const SIDEBAR = [
	{
		header: "core",
		menu: new Map([
			[
				"core/introduction",
				{ text: "Introduction", link: "/core/introduction" }
			],
			["core/colors", { text: "Colors", link: "/core/colors" }],
			["core/typography", { text: "Typography", link: "/core/typography" }],
			["core/shadows", { text: "Shadows", link: "/core/shadows" }]
		])
	},
	{
		header: "components",
		menu: new Map([
			[
				"components/accordions",
				{
					text: "Accordions",
					link: "/components/accordions",
					chapters: [
						{ text: "Overview", slug: "overview" },
						{ text: "Solo Accordion", slug: "solo-accordion" },
						{ text: "Group Accordion", slug: "group-accordion" }
					]
				}
			],
			[
				"components/alerts",
				{
					text: "Alerts",
					link: "/components/alerts",
					chapters: [
						{ text: "Overview", slug: "overview" },
						{ text: "Primary Alert", slug: "primary-alert" },
						{ text: "Secondary Alert", slug: "secondary-alert" },
						{ text: "Success Alert", slug: "success-alert" },
						{ text: "Danger Alert", slug: "danger-alert" },
						{ text: "Info Alert", slug: "info-alert" },
						{ text: "Warning Alert", slug: "warning-alert" }
					]
				}
			],
			[
				"components/avatar",
				{
					text: "Avatar",
					link: "/components/avatar",
					chapters: [
						{ text: "Overview", slug: "overview" },
						{ text: "Avatar with Image", slug: "avatar-with-image" },
						{ text: "Avatar with Text", slug: "avatar-with-text" },
						{ text: "Size Props Avatar", slug: "size-props-avatar" }
					]
				}
			],
			[
				"components/badges",
				{
					text: "Badges",
					link: "/components/badges",
					chapters: [
						{ text: "Overview", slug: "overview" },
						{ text: "Default badge", slug: "default-badge" },
						{ text: "Primary badge", slug: "primary-badge" },
						{ text: "Secondary badge", slug: "secondary-badge" },
						{ text: "Success badge", slug: "success-badge" },
						{ text: "Danger badge", slug: "danger-badge" },
						{ text: "Info badge", slug: "info-badge" },
						{ text: "Warning badge", slug: "warning-badge" }
					]
				}
			],
			[
				"components/buttons",
				{
					text: "Buttons",
					link: "/components/buttons",
					chapters: [
						{ text: "Overview", slug: "overview" },
						{ text: "Alpine interop", slug: "alpine-interop" },
						{ text: "Primary Button", slug: "primary-button" },
						{ text: "Secondary Button", slug: "secondary-button" },
						{ text: "Success Button", slug: "success-button" },
						{ text: "Danger Button", slug: "danger-button" },
						{ text: "Info Button", slug: "info-button" },
						{ text: "Warning Button", slug: "warning-button" }
					]
				}
			],
			[
				"components/calendar",
				{
					text: "Calendar",
					link: "/components/calendar",
					chapters: [
						{ text: "Overview", slug: "overview" },
						{ text: "Default Calendar", slug: "default-calendar" },
						{
							text: "Multiple Select Calendar",
							slug: "multiple-select-calendar"
						},
						{
							text: "Disabled Dates Calendar",
							slug: "disabled-dates-calendar"
						},
						{ text: "Year Min Max Calendar", slug: "year-min-max-calendar" },
						{ text: "Custom Slot Days", slug: "custom-slot-days-calendar" }
					]
				}
			],
			[
				"components/card",
				{
					text: "Card",
					link: "/components/card",
					chapters: [
						{ text: "Overview", slug: "overview" },
						{ text: "Default Card", slug: "default-card" },
						{ text: "Horizontal Card", slug: "horizontal-card" },
						{ text: "Custom Slot Card", slug: "custom-card" }
					]
				}
			],
			[
				"components/carousel",
				{
					text: "Carousel",
					link: "/components/carousel",
					chapters: [
						{ text: "Overview", slug: "overview" },
						{ text: "Default Carousel", slug: "default-carousel" },
						{ text: "With Indicators", slug: "with-indicators" },
						{ text: "Carousel Direction", slug: "carousel-direction" },
						{ text: "Loop", slug: "carousel-loop" },
						{ text: "Custom Slides", slug: "custom-slides" },
						{ text: "Custom Navigations", slug: "custom-navigations" },
						{ text: "Custom Indicators", slug: "custom-indicators" },
						{ text: "Multiple Slides", slug: "multiple-slides" }
					]
				}
			],
			[
				"components/checkbox",
				{
					text: "Checkbox",
					link: "/components/checkbox",
					chapters: [{ text: "Overview", slug: "overview" }]
				}
			],
			[
				"components/datepicker",
				{
					text: "DatePicker",
					link: "/components/datepicker",
					chapters: [
						{ text: "Overview", slug: "overview" },
						{
							text: "Default DatePicker",
							slug: "set-datepicker-fulldate-on-init"
						},
						{
							text: "Set DatePicker FullDate On Init",
							slug: "default-datepicker"
						},
						{ text: "Disabled DatePicker", slug: "disabled-datepicker" },
						{
							text: "Reset And Today Buttons DatePicker",
							slug: "reset-and-today-buttons-datepicker"
						},
						{
							text: "Different Date Formats",
							slug: "different-date-formats"
						}
					]
				}
			],
			[
				"components/dropdown",
				{
					text: "Dropdown",
					link: "/components/dropdown",
					chapters: [
						{ text: "Overview", slug: "overview" },
						{ text: "Dropdown on Click", slug: "dropdown-on-click" },
						{ text: "Dropdown on Hover", slug: "dropdown-on-hover" },
						{
							text: "Dropdown Menu Bar Example",
							slug: "dropdown-menu-bar-example"
						},
						{
							text: "Dropdown Menu Hover Example",
							slug: "dropdown-menu-hover-example"
						}
					]
				}
			],
			[
				"components/galleries",
				{
					text: "Galleries",
					link: "/components/galleries",
					chapters: [
						{ text: "Overview", slug: "overview" },
						{ text: "Rest Gallery", slug: "rest-gallery" },
						{ text: "Carousel Gallery", slug: "carousel-gallery" },
						{ text: "Zoom Gallery", slug: "zoom-gallery" }
					]
				}
			],
			[
				"components/imagepicker",
				{
					text: "ImagePicker",
					link: "/components/imagepicker",
					chapters: [
						{
							text: "Overview",
							slug: "overview"
						},
						{
							text: "Default ImagePicker",
							slug: "default-imagepicker"
						},
						{
							text: "Multiple Files ImagePicker",
							slug: "multiple-files-imagepicker"
						}
					]
				}
			],
			[
				"components/inputs",
				{
					text: "Inputs",
					link: "/components/inputs",
					chapters: [
						{
							text: "Overview",
							slug: "overview"
						},
						{
							text: "Main Inputs",
							slug: "main-inputs"
						},
						{
							text: "Select Input",
							slug: "select-input"
						},
						{
							text: "Multiple Select Input",
							slug: "multi-select-input"
						},
						{
							text: "Radio Input",
							slug: "radio-input"
						},
						{
							text: "Checkbox Input",
							slug: "checkbox-input"
						}
					]
				}
			],
			[
				"components/modals",
				{
					text: "Modals",
					link: "/components/modals",
					chapters: [
						{ text: "Overview", slug: "overview" },
						{ text: "Simple Modal", slug: "simple-modal" },
						{ text: "Full Screen Modal", slug: "full-screen-modal" }
					]
				}
			],
			[
				"components/paginations",
				{
					text: "Paginations",
					link: "/components/paginations",
					chapters: [
						{ text: "Overview", slug: "overview" },
						{ text: "Input Pagination", slug: "input-pagination" },
						{ text: "Select Pagination", slug: "select-pagination" },
						{
							text: "Custom Button Label Pagination",
							slug: "custom-button-label-pagination"
						},
						{
							text: "Custom Button Design Pagination",
							slug: "custom-button-design-pagination"
						}
					]
				}
			],
			[
				"components/progress",
				{
					text: "Progress",
					link: "/components/progress",
					chapters: [
						{ text: "Overview", slug: "overview" },
						{ text: "Default Bar Progress", slug: "default-bar-progress" },
						{
							text: "Default Counter Progress",
							slug: "default-counter-progress"
						},
						{ text: "Value Bar Progress", slug: "value-bar-progress" },
						{
							text: "Theme Color Bar Progress",
							slug: "theme-color-bar-progress"
						},
						{
							text: "Interval Duration Progress",
							slug: "interval-duration-progress"
						},
						{
							text: "Custom Class Bar Progress",
							slug: "custom-class-bar-progress"
						},
						{
							text: "Track Value Bar Progress",
							slug: "track-value-bar-progress"
						},
						{
							text: "No Animation Bar Progress",
							slug: "no-animation-bar-progress"
						}
					]
				}
			],
			[
				"components/radio",
				{
					text: "Radio",
					link: "/components/radio",
					chapters: [{ text: "Overview", slug: "overview" }]
				}
			],
			[
				"components/range-slider",
				{
					text: "Range Slider",
					link: "/components/range-slider",
					chapters: [{ text: "Overview", slug: "overview" }]
				}
			],
			[
				"components/ratings",
				{
					text: "Ratings",
					link: "/components/ratings",
					chapters: [
						{ text: "Overview", slug: "overview" },
						{ text: "Default Ratings", slug: "default-ratings" },
						{ text: "Number Stars Ratings", slug: "number-stars-ratings" },
						{ text: "Custom Icon Ratings", slug: "custom-icon-ratings" }
					]
				}
			],
			[
				"components/select",
				{
					text: "Select",
					link: "/components/select",
					chapters: [
						{
							text: "Overview",
							slug: "overview"
						}
					]
				}
			],
			[
				"components/sidebar",
				{
					text: "Sidebar",
					link: "/components/sidebar",
					chapters: [
						{
							text: "Overview",
							slug: "overview"
						},
						{
							text: "Default Sidebar",
							slug: "default-sidebar"
						},
						{
							text: "Full Example",
							slug: "full-example"
						},
						{
							text: "Sidebar Inside Content",
							slug: "sidebar-inside-content"
						}
					]
				}
			],
			[
				"components/switch",
				{
					text: "Switch",
					link: "/components/switch",
					chapters: [
						{
							text: "Overview",
							slug: "overview"
						}
					]
				}
			],
			[
				"components/table",
				{
					text: "Table",
					link: "/components/table",
					chapters: [
						{
							text: "Overview",
							slug: "overview"
						},
						{
							text: "Basic Table",
							slug: "basic-table"
						},
						{
							text: "Styling Table",
							slug: "styling-table"
						},
						{
							text: "Sorting Table",
							slug: "sorting-table"
						},
						{
							text: "Filtering Table",
							slug: "filtering-table"
						},
						{
							text: "Sorting and Filtering Table",
							slug: "sorting-and-filtering-table"
						}
					]
				}
			],
			[
				"components/tabs",
				{
					text: "Tabs",
					link: "/components/tabs",
					chapters: [
						{
							text: "Overview",
							slug: "overview"
						},
						{
							text: "Default Tabs",
							slug: "default-tabs"
						},
						{
							text: "Horizontal Tabs",
							slug: "horizontal-tabs"
						}
					]
				}
			],
			[
				"components/tooltips",
				{
					text: "Tooltips",
					link: "/components/tooltips",
					chapters: [
						{
							text: "Overview",
							slug: "overview"
						},
						{
							text: "Tooltip as Text",
							slug: "tooltip-as-text"
						},
						{
							text: "Tooltip as Component",
							slug: "tooltip-as-component"
						},
						{
							text: "Custom Tooltip Trigger",
							slug: "custom-tooltip-trigger"
						}
					]
				}
			],
			[
				"components/trees",
				{
					text: "Trees",
					link: "/components/trees",
					chapters: [
						{
							text: "Overview",
							slug: "overview"
						},
						{
							text: "Menu Tree",
							slug: "menu-tree"
						}
					]
				}
			],
			[
				"components/zoom",
				{
					text: "Zoom",
					link: "/components/zoom",
					chapters: [
						{
							text: "Overview",
							slug: "overview"
						},
						{
							text: "Default Zoom",
							slug: "default-zoom"
						},
						{
							text: "Show Navigation Zoom",
							slug: "show-navigation-zoom"
						},
						{
							text: "Disabled Navigation Zoom",
							slug: "disabled-navigation-zoom"
						}
					]
				}
			]
		])
	},
	{
		header: "patterns",
		menu: new Map([
			[
				"patterns/introduction",
				{ text: "Introduction", link: "/patterns/introduction" }
			]
		])
	}
];
