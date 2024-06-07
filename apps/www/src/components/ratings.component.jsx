import { Icon } from "$components/icon.component";
import clsx from "clsx";

/**
 * @typedef {Object} LinearGradientDefsProps
 * @type {{ applyDefsId: string, color: { empty: string, fill: string }, percentageValue: number} & import("$common/props").HTMLTag}
 */

/**
 * @typedef {Object} RatingsProps
 * @type {{ applyDefsId: string, nb?: number, value: number, max?: number, size?: number, icon?: string, color?: { empty: string, fill: string } } & import("$common/props").HTMLTagWithChildren}
 */

/**
 * Linear Gradient Defs component props
 * @type {import("$common/props").JSXComponent<LinearGradientDefsProps>}
 */
export function LinearGradientDefs(props) {
	const { applyDefsId, color, percentageValue } = props;
	return (
		<defs>
			<linearGradient id={applyDefsId}>
				{percentageValue === 100 && (
					<stop offset="0%" stop-color={color.fill} />
				)}
				{percentageValue === 0 && <stop offset="0%" stop-color={color.empty} />}
				{![0, 100].includes(percentageValue) && (
					<>
						<stop offset="0%" stop-color={color.fill} />
						<stop offset={`${percentageValue}%`} stop-color={color.fill} />
						<stop offset={`${percentageValue}%`} stop-color={color.empty} />
						<stop offset="100%" stop-color={color.empty} stop-opacity="1" />
					</>
				)}
			</linearGradient>
		</defs>
	);
}

/**
 * Ratings component props
 * @type {import("$common/props").JSXComponent<RatingsProps>}
 */
export function Ratings(props) {
	const {
		children,
		class: className,
		value,
		nb = 1,
		max = 5,
		color,
		size = 6,
		icon = "star-fill",
		...restProps
	} = props;

	const chunk = max / nb;
	const ratings = Array.from({ length: nb }, (_, index) => {
		const slice = index + 1;
		return value < (slice - 1) * chunk
			? 0
			: value > slice * chunk
			? chunk
			: value - (slice - 1) * chunk;
	});
	return (
		<ul
			class={clsx("flex items-center justify-center gap-x-2", className)}
			{...restProps}
		>
			{
                children ??
				ratings.map((rating) => {
					const percentageRating = Number(((rating * 100) / chunk).toFixed(2));
					const applyDefsId = crypto.randomUUID();
					return (
						<li>
							<Icon
								name={icon}
								size={size}
								stroke-width="1"
								applyDefsId={applyDefsId}
							>
								{applyDefsId && (
									<LinearGradientDefs
										percentageValue={percentageRating}
										applyDefsId={applyDefsId}
										color={{
											empty: color?.empty ?? "grey",
											fill: color?.fill ?? "orange"
										}}
									/>
								)}
							</Icon>
						</li>
					);
				})}
		</ul>
	);
}
