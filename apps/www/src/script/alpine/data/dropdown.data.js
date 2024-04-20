/**
 * Dropdown alpine data output
 * @typedef {Object} DropdownDataOutput
 * @property {import("src/common/types").PositionType} position
 * @property {number} duration
 * @property {boolean} visible
 * @property {Function} show
 * @property {Function} hide
 * @property {Function} toggle
 * @property {() => boolean} isVisible
 * @property {Record<string, Function>} hover
 * @property {Record<string, Function>} trigger
 * @property {Record<string, Function>} closer
 * @property {Record<string, Function>} shower
 * @property {Function} setPositionClasses
 * @property {Function} resetPositionClasses
 * @property {Function} setAlpineAttributes
 * @property {Function} selectPositionUpdate
 */

/**
 * Dropdown alpine data
 * @param {import("src/common/types").PositionType} position
 * @param {number} duration
 * @returns {import("alpinejs").AlpineComponent<DropdownDataOutput>}
 */
export function dropdownData(position = "bottom", duration) {
	/**
	 * @type {Map<import("src/common/types").PositionType, string>}
	 */
	const positionClassMap = new Map([
		["top", "-translate-x-1/2 left-1/2 bottom-full"],
		["bottom", "-translate-x-1/2 left-1/2 top-full"],
		["left", "-translate-y-1/2 top-1/2 right-full"],
		["right", "-translate-y-1/2 top-1/2 left-full"]
	]);

	/**
	 * @type {Map<import("src/common/types").PositionType, import("src/common/types").TransitionStateType>}
	 */
	const transitionClassMap = new Map([
		[
			"top",
			{
				enter: {
					start: "translate-y-2 opacity-0",
					end: "translate-y-0 opacity-100"
				},
				leave: {
					start: "translate-y-0 opacity-100",
					end: "translate-y-2 opacity-0"
				}
			}
		],
		[
			"bottom",
			{
				enter: {
					start: "-translate-y-2 opacity-0",
					end: "translate-y-0 opacity-100"
				},
				leave: {
					start: "translate-y-0 opacity-100",
					end: "-translate-y-2 opacity-0"
				}
			}
		],
		[
			"left",
			{
				enter: {
					start: "translate-x-2 opacity-0",
					end: "translate-x-0 opacity-100"
				},
				leave: {
					start: "translate-x-0 opacity-100",
					end: "translate-x-2 opacity-0"
				}
			}
		],
		[
			"right",
			{
				enter: {
					start: "-translate-x-2 opacity-0",
					end: "translate-x-0 opacity-100"
				},
				leave: {
					start: "translate-x-0 opacity-100",
					end: "-translate-x-2 opacity-0"
				}
			}
		]
	]);

	return {
		init() {
			this.$watch("visible", () => {
				window.addEventListener("resize", () => {
					this.selectPositionUpdate();
				});
			});
			this.setPositionClasses();
			this.setAlpineAttributes();
		},
		position,
		duration,
		visible: false,
		async show() {
			this.visible = true;
			await this.$nextTick();
			this.selectPositionUpdate();
			this.setPositionClasses();
			this.setAlpineAttributes();
		},
		hide() {
			this.visible = false;
		},
		toggle() {
			this.visible = !this.visible;
		},
		hover: {
			["@mouseenter"]() {
				this.show();
			},
			["@mouseleave"]() {
				this.hide();
			}
		},
		trigger: {
			["@click"]() {
				this.show();
			}
		},
		closer: {
			["@click.away"]() {
				this.hide();
			}
		},
		isVisible() {
			return this.visible;
		},
		shower: {
			["x-show"]() {
				return this.visible;
			}
		},
		setPositionClasses() {
			const positionClass = positionClassMap.get(this.position);
			if (positionClass) {
				this.$refs.content.classList.add(...positionClass.split(" "));
			}
		},
		resetPositionClasses() {
			const positionClass = positionClassMap.get(this.position);
			if (positionClass) {
				this.$refs.content.classList.remove(...positionClass.split(" "));
			}
		},
		setAlpineAttributes() {
			const transitionClass = transitionClassMap.get(this.position);
			if (transitionClass) {
				this.$refs.content.style.transitionDuration = `${this.duration}ms`;
				this.$refs.content.setAttribute("x-transition:enter", `ease-out`);
				this.$refs.content.setAttribute(
					"x-transition:enter-start",
					transitionClass.enter.start
				);
				this.$refs.content.setAttribute(
					"x-transition:enter-end",
					transitionClass.enter.end
				);
				this.$refs.content.setAttribute("x-transition:leave", `ease-out`);
				this.$refs.content.setAttribute(
					"x-transition:leave-start",
					transitionClass.leave.start
				);
				this.$refs.content.setAttribute(
					"x-transition:leave-end",
					transitionClass.leave.end
				);
			}
		},
		selectPositionUpdate() {
			switch (this.position) {
				case "bottom":
					if (
						this.$refs.content.getBoundingClientRect().bottom >
						window.innerHeight
					) {
						this.resetPositionClasses();
						this.position = "top";
					} else {
						this.position = "bottom";
					}
					break;
				case "top":
					if (this.$refs.content.getBoundingClientRect().top < 0) {
						this.resetPositionClasses();
						this.position = "bottom";
					} else {
						this.position = "top";
					}
					break;

				default:
					break;
			}
		}
	};
}
