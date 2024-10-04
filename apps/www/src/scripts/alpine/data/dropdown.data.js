/**
 * @typedef OriginalBoundingClientRect
 * @property {number} originalBoundingClientRect.x
 * @property {number} originalBoundingClientRect.y
 * @property {number} originalBoundingClientRect.width
 * @property {number} originalBoundingClientRect.height
 * @property {number} originalBoundingClientRect.top
 * @property {number} originalBoundingClientRect.bottom
 * @property {number} originalBoundingClientRect.left
 * @property {number} originalBoundingClientRect.right
 */

/**
 * Dropdown alpine data output
 * @typedef {Object} DropdownDataOutput
 * @property {import("src/common/types").PositionType} position
 * @property {OriginalBoundingClientRect | null} originalBoundingClientRect
 * @property {number} duration
 * @property {boolean} visible
 * @property {Function} show
 * @property {Function} hide
 * @property {Function} toggle
 * @property {() => boolean} isVisible
 * @property {Record<string, Function>} hover
 * @property {Record<string, Function>} trigger
 * @property {Record<string, Function>} closer
 * @property {Record<string, Function>} toggler
 * @property {Record<string, Function>} shower
 * @property {(position: import("src/common/types").PositionType) => void} setPositionClasses
 * @property {(position: import("src/common/types").PositionType) => void} resetPositionClasses
 * @property {(position: import("src/common/types").PositionType) => void} setAlpineAttributes
 * @property {(position: import("src/common/types").PositionType) => import("src/common/types").PositionType} updatePosition
 */

/**
 * Dropdown alpine data
 * @param {import("src/common/types").PositionType} position
 * @param {number} duration
 * @returns {import("alpinejs").AlpineComponent<DropdownDataOutput>}
 */
export function dropdownData(position = "bottom", duration) {
	/**
	 * @type {Map<import("src/common/types").PositionType, {x: string[], y: string[]}>}
	 */
	const positionClassMap = new Map([
		["top", { x: ["-translate-x-1/2", "left-1/2"], y: ["bottom-full"] }],
		["bottom", { x: ["-translate-x-1/2", "left-1/2"], y: ["top-full"] }],
		["left", { y: ["-translate-y-1/2", "top-1/2"], x: ["right-full"] }],
		["right", { y: ["-translate-y-1/2", "top-1/2"], x: ["left-full"] }]
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
			const positionUpdated = this.updatePosition(this.position);
			const positionClass = positionClassMap.get(positionUpdated);
			if (positionClass) {
				this.$refs.content.classList.add(
					...positionClass.x,
					...positionClass.y
				);
				this.originalBoundingClientRect =
					this.$refs.content.getBoundingClientRect();
				this.setAlpineAttributes(positionUpdated);
			}
			this.$watch("visible", (visibleValue) => {
				this.$refs.content.addEventListener("animationend", () => {
					if (!visibleValue) {
						this.$refs.content.style.left = "";
					}
				});
			});
		},
		position,
		duration,
		visible: false,
		originalBoundingClientRect: null,
		async show() {
			this.visible = true;
			await this.$nextTick();
			this.setPositionClasses(this.position);
		},
		async hide() {
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
		toggler: {
			["@click"]() {
				if (this.visible) {
					this.hide();
				} else {
					this.show();
				}
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
		async setPositionClasses(position) {
			const positionUpdated = this.updatePosition(position);
			const positionClass = positionClassMap.get(positionUpdated);

			if (positionClass) {
				this.$refs.content.classList.add(
					...positionClass.x,
					...positionClass.y
				);
				if (this.originalBoundingClientRect) {
					if (["top", "bottom"].includes(positionUpdated)) {
						if (this.originalBoundingClientRect.right > window.innerWidth) {
							this.$refs.content.classList.remove(...positionClass.x);
							// const delta =
							// 	this.$refs.trigger.getBoundingClientRect().left +
							// 	this.originalBoundingClientRect.width -
							// 	window.innerWidth;
							// this.$refs.content.style.left = `-${delta}px`;
							this.$refs.content.style.right = `0px`;
						} else if (this.originalBoundingClientRect.left < 0) {
							this.$refs.content.classList.remove(...positionClass.x);
							// this.$refs.content.style.left = `-${
							// 	this.$refs.trigger.getBoundingClientRect().left
							// }px`;
							this.$refs.content.style.left = `0px`;
						}
					}
					if (["left", "right"].includes(positionUpdated)) {
						if (this.originalBoundingClientRect.bottom > window.innerHeight) {
							this.$refs.content.classList.remove(...positionClass.y);
							this.$refs.content.style.bottom = `0px`;
						} else if (this.originalBoundingClientRect.top < 0) {
							this.$refs.content.classList.remove(...positionClass.y);
							this.$refs.content.style.top = `0px`;
						}
					}
				}
				await this.$nextTick();
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve(this.setAlpineAttributes(positionUpdated));
					}, 1000)
				);
			}
		},
		resetPositionClasses(position) {
			const positionClass = positionClassMap.get(position);
			if (positionClass) {
				this.$refs.content.classList.remove(
					...positionClass.x,
					...positionClass.y
				);
			}
		},
		setAlpineAttributes(position) {
			const transitionClass = transitionClassMap.get(position);
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
		updatePosition(position) {
			switch (position) {
				case "top":
					if (this.$refs.content.getBoundingClientRect().top < 0) {
						this.resetPositionClasses(position);
						return "bottom";
					}
					return position;
				case "right":
					if (
						this.$refs.trigger.getBoundingClientRect().right +
							this.$refs.content.clientWidth >
						window.innerWidth
					) {
						this.resetPositionClasses(position);
						return "left";
					}
					return position;
				case "left":
					if (this.$refs.content.getBoundingClientRect().left < 0) {
						this.resetPositionClasses(position);
						return "right";
					}
					return position;
				case "bottom":
				default:
					if (
						this.$refs.trigger.getBoundingClientRect().bottom +
							this.$refs.content.clientHeight >
						window.innerHeight
					) {
						this.resetPositionClasses("bottom");
						return "top";
					}
					return "bottom";
			}
		}
	};
}
