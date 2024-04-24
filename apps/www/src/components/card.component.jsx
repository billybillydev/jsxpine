import {
	Button,
	DangerButton,
	InfoButton,
	PrimaryButton,
	SecondaryButton,
	SuccessButton,
	WarningButton
} from "$components/buttons.component";
import { capitalize } from "$lib";
import clsx from "clsx";

/**
 * @typedef CardImageProps
 * @type {import("$components/image.component").ImageProps}
 */

/**
 * @typedef CardBodyControlProps
 * @type {{label: string, action?: string} & import("$common/props").ThemeColorProps}
 */

/**
 * @typedef CardBodyProps
 * @type {{title?: string, text?: string, texts?: string[], controls?: CardBodyControlProps[] } & import("$common/props").HTMLTagWithChildren}
 */

/**
 * @typedef CardProps
 * @type {{ image?: import("$components/image.component").ImageType } & CardBodyProps & import("$common/props").HTMLTagWithChildren & import("$common/props").DirectionProps}
 */

/**
 * Card Image props
 * @type {import("$common/props").JSXComponent<CardImageProps>}
 */
export function CardImage(props) {
	const { class: className, ...restProps } = props;

	return (
		<div id="card-image" class={clsx("relative", className)}>
			<img {...restProps} class="w-full h-full object-cover" />
		</div>
	);
}

/**
 * Card Body props
 * @type {import("$common/props").JSXComponent<CardBodyProps>}
 */
export function CardBody(props) {
	const { children, class: className, title, text, texts, controls } = props;
	return (
		<div
			class={clsx("bg-white flex flex-col gap-y-4 rounded-lg p-4", className)}
			id="card-body"
		>
			{children ?? (
				<>
					{title ? (
						<h4 class="text-xl font-bold leading-none tracking-tight text-neutral-900">
							{title}
						</h4>
					) : (
						""
					)}
					{text || texts ? (
						<div id="card-body-text">
							{texts?.length ? (
								texts.map((line) => <p class="text-neutral-500">{line}</p>)
							) : text ? (
								<p class="text-neutral-500">{text}</p>
							) : (
								""
							)}
						</div>
					) : (
						""
					)}
				</>
			)}
			{controls ? (
				<div
					id="card-controls"
					class="flex flex-wrap gap-2 items-center justify-end w-full"
				>
					{controls.map(async (control) => {
						// if (control.component) {
						// 	const ButtonControl = control.component;
						// 	return <ButtonControl />;
						// }
						if (control.type) {
							const componentName = `${capitalize(control.type)}Button`;
							const ButtonControl = await import(
								`$components/buttons.component`
							).then(
								/**
								 * @param {Record<string, Function>} m
								 * @returns {Function}
								 */
								function (m) {
									return m[componentName];
								}
							);
							return (
								<ButtonControl
									text={control.label}
									x-on:click={control.action}
								/>
							);
						}
						return (
							<Button
								variant="inversed"
								text={control.label}
								x-on:click={control.action}
							/>
						);
					})}
				</div>
			) : null}
		</div>
	);
}

/**
 *
 * @type {import("$common/props").JSXComponent<CardProps>}
 */
export function Card(props) {
	const {
		children,
		class: className,
		direction = "vertical",
		image,
		title,
		text,
		texts,
		controls
	} = props;

	/**
	 * @type {Map<import("$common/types").DirectionType, string>}
	 */
	const directionClassMap = new Map([
		["vertical", "flex-col"],
		["horizontal", "flex-row"]
	]);
	return (
		<div
			class={clsx(
				"flex rounded-lg overflow-hidden border border-neutral-200/60 bg-white text-neutral-700 shadow-sm w-full",
				directionClassMap.get(direction),
				className
			)}
		>
			{children ?? (
				<>
					{image ? (
						<CardImage
							class={
								direction === "vertical" ? "w-full h-auto" : "w-auto h-full"
							}
							src={image.src}
							alt={image.alt}
						/>
					) : null}
					{controls || title || text || texts ? (
						<CardBody
							title={title}
							text={texts ? "" : text}
							texts={texts}
							controls={controls}
						/>
					) : null}
				</>
			)}
		</div>
	);
}
