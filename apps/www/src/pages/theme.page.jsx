import { Avatar } from "$components/avatar.component";
import { SecondaryButton } from "$components/button.component";
import { Card, CardBody } from "$components/card.component";
import { Dropdown, DropdownContent } from "$components/dropdown.component";
import { Icon } from "$components/icon.component";
import { Select } from "$components/select.component";
import { RootLayout } from "$views/layouts.view";

/**
 * @param {import("$components/page.component").PageContext<{ description: string }>} props
 */
export function ThemePage({ description, ...restProps }) {
    /** @type {import("$scripts/alpine/data/theme-selector.data").ThemeSelectorVariables[]} */
	const palettes = [
		{
			background: {
				light: "hsl(210, 40%, 98%)",
				dark: "hsl(224, 71%, 4%)"
			},
			foreground: {
				light: "hsl(224, 71%, 4%)",
				dark: "hsl(210, 40%, 98%)"
			},
			accent: {
				light: "hsl(210, 40%, 96%)",
				dark: "hsl(222, 47%, 11%)"
			},
			accentForeground: {
				light: "hsl(222, 47%, 11%)",
				dark: "hsl(210, 40%, 96%)"
			},
			muted: {
				light: "hsl(210, 40%, 96%)",
				dark: "hsl(215, 16%, 47%)"
			},
			mutedForeground: {
				light: "hsl(215, 16%, 47%)",
				dark: "hsl(210, 40%, 96%)"
			},
			primary: "hsl(243, 75%, 59%)",
			primaryDark1: "hsl(244, 55%, 41%)",
			primaryDark2: "hsl(244, 47%, 20%)",
			primaryLight1: "hsl(228, 96%, 89%)",
			primaryLight2: "hsl(226, 100%, 97%)",
			primaryForeground: "hsl(210, 40%, 98%)",
			secondary: "hsl(0, 0%, 22%)",
			secondaryDark: "hsl(0, 0%, 7%)",
			secondaryLight: "hsl(216, 12%, 84%)",
			secondaryForeground: "hsl(210, 40%, 98%)",
			success: "hsl(142, 71%, 45%)",
			successDark: "hsl(142, 72%, 29%)",
			successLight: "hsl(142, 77%, 73%)",
			successForeground: "hsl(210, 40%, 98%)",
			danger: "hsl(0, 84%, 60%)",
			dangerDark: "hsl(0, 74%, 42%)",
			dangerLight: "hsl(0, 96%, 89%)",
			dangerForeground: "hsl(210, 40%, 98%)",
			info: "hsl(217, 91%, 60%)",
			infoDark: "hsl(226, 71%, 40%)",
			infoLight: "hsl(212, 96%, 78%)",
			infoForeground: "hsl(210, 40%, 98%)",
			warning: "hsl(48, 96%, 53%)",
			warningDark: "hsl(41, 96%, 40%)",
			warningLight: "hsl(53, 98%, 77%)",
			warningForeground: "hsl(224, 71%, 4%)",
			overlayDark: "hsl(0, 0%, 0%)",
			overlayLight: "hsl(0, 0%, 100%)"
		},
		{
			background: {
				light: "hsl(340, 35%, 95%)",
				dark: "hsl(340, 20%, 15%)"
			},
			foreground: {
				light: "hsl(340, 20%, 15%)",
				dark: "hsl(340, 35%, 95%)"
			},
			accent: {
				light: "hsl(10, 25%, 90%)",
				dark: "hsl(10, 40%, 25%)"
			},
			accentForeground: {
				light: "hsl(10, 40%, 25%)",
				dark: "hsl(10, 25%, 90%)"
			},
			muted: {
				light: "hsl(10, 25%, 90%)",
				dark: "hsl(10, 25%, 45%)"
			},
			mutedForeground: {
				light: "hsl(10, 25%, 45%)",
				dark: "hsl(10, 25%, 90%)"
			},
			primary: "hsl(340, 70%, 50%)",
			primaryDark1: "hsl(340, 60%, 40%)",
			primaryDark2: "hsl(340, 50%, 30%)",
			primaryLight1: "hsl(340, 80%, 70%)",
			primaryLight2: "hsl(340, 90%, 85%)",
			primaryForeground: "hsl(340, 35%, 95%)",
			secondary: "hsl(10, 30%, 35%)",
			secondaryDark: "hsl(10, 20%, 20%)",
			secondaryLight: "hsl(10, 40%, 70%)",
			secondaryForeground: "hsl(340, 35%, 95%)",
			success: "hsl(140, 50%, 50%)",
			successDark: "hsl(140, 60%, 40%)",
			successLight: "hsl(140, 70%, 70%)",
			successForeground: "hsl(340, 35%, 95%)",
			danger: "hsl(0, 70%, 50%)",
			dangerDark: "hsl(0, 60%, 40%)",
			dangerLight: "hsl(0, 80%, 85%)",
			dangerForeground: "hsl(340, 35%, 95%)",
			info: "hsl(220, 85%, 55%)",
			infoDark: "hsl(220, 70%, 40%)",
			infoLight: "hsl(220, 90%, 85%)",
			infoForeground: "hsl(340, 35%, 95%)",
			warning: "hsl(30, 85%, 55%)",
			warningDark: "hsl(30, 75%, 35%)",
			warningLight: "hsl(30, 95%, 80%)",
			warningForeground: "hsl(340, 20%, 15%)",
			overlayDark: "hsl(340, 20%, 10%)",
			overlayLight: "hsl(340, 40%, 98%)"
		},
		{
			background: {
				light: "hsl(198, 52%, 95%)",
				dark: "hsl(210, 20%, 10%)"
			},
			foreground: {
				light: "hsl(210, 20%, 10%)",
				dark: "hsl(198, 52%, 95%)"
			},
			accent: {
				light: "hsl(200, 30%, 94%)",
				dark: "hsl(200, 30%, 94%)"
			},
			accentForeground: {
				light: "hsl(198, 52%, 15%)",
				dark: "hsl(198, 52%, 15%)"
			},
			muted: {
				light: "hsl(200, 30%, 94%)",
				dark: "hsl(210, 10%, 40%)"
			},
			mutedForeground: {
				light: "hsl(210, 10%, 40%)",
				dark: "hsl(200, 30%, 94%)"
			},
			primary: "hsl(200, 88%, 55%)",
			primaryDark1: "hsl(198, 82%, 40%)",
			primaryDark2: "hsl(198, 75%, 30%)",
			primaryLight1: "hsl(198, 92%, 85%)",
			primaryLight2: "hsl(198, 96%, 95%)",
			primaryForeground: "hsl(198, 52%, 95%)",
			secondary: "hsl(210, 15%, 30%)",
			secondaryDark: "hsl(210, 10%, 15%)",
			secondaryLight: "hsl(200, 20%, 80%)",
			secondaryForeground: "hsl(198, 52%, 95%)",
			success: "hsl(160, 60%, 50%)",
			successDark: "hsl(160, 70%, 35%)",
			successLight: "hsl(160, 80%, 75%)",
			successForeground: "hsl(198, 52%, 95%)",
			danger: "hsl(0, 70%, 55%)",
			dangerDark: "hsl(0, 65%, 40%)",
			dangerLight: "hsl(0, 80%, 85%)",
			dangerForeground: "hsl(198, 52%, 95%)",
			info: "hsl(210, 80%, 60%)",
			infoDark: "hsl(210, 65%, 40%)",
			infoLight: "hsl(210, 90%, 85%)",
			infoForeground: "hsl(198, 52%, 95%)",
			warning: "hsl(40, 85%, 55%)",
			warningDark: "hsl(35, 85%, 40%)",
			warningLight: "hsl(45, 90%, 80%)",
			warningForeground: "hsl(210, 20%, 10%)",
			overlayDark: "hsl(210, 20%, 5%)",
			overlayLight: "hsl(198, 52%, 98%)"
		},
		{
			background: {
				light: "hsl(45, 50%, 95%)",
				dark: "hsl(30, 20%, 15%)"
			},
			foreground: {
				light: "hsl(30, 20%, 15%)",
				dark: "hsl(45, 50%, 95%)"
			},
			accent: {
				light: "hsl(35, 25%, 90%)",
				dark: "hsl(30, 40%, 25%)"
			},
			accentForeground: {
				light: "hsl(30, 40%, 25%)",
				dark: "hsl(35, 25%, 90%)"
			},
			muted: {
				light: "hsl(35, 25%, 90%)",
				dark: "hsl(30, 25%, 45%)"
			},
			mutedForeground: {
				light: "hsl(30, 25%, 45%)",
				dark: "hsl(35, 25%, 90%)"
			},
			primary: "hsl(35, 85%, 55%)",
			primaryDark1: "hsl(35, 75%, 40%)",
			primaryDark2: "hsl(35, 70%, 30%)",
			primaryLight1: "hsl(40, 85%, 80%)",
			primaryLight2: "hsl(40, 95%, 90%)",
			primaryForeground: "hsl(45, 50%, 95%)",
			secondary: "hsl(30, 15%, 30%)",
			secondaryDark: "hsl(30, 10%, 15%)",
			secondaryLight: "hsl(35, 20%, 75%)",
			secondaryForeground: "hsl(45, 50%, 95%)",
			success: "hsl(80, 60%, 55%)",
			successDark: "hsl(80, 70%, 40%)",
			successLight: "hsl(80, 85%, 80%)",
			successForeground: "hsl(45, 50%, 95%)",
			danger: "hsl(0, 70%, 55%)",
			dangerDark: "hsl(0, 65%, 40%)",
			dangerLight: "hsl(0, 80%, 85%)",
			dangerForeground: "hsl(45, 50%, 95%)",
			info: "hsl(190, 85%, 55%)",
			infoDark: "hsl(190, 70%, 40%)",
			infoLight: "hsl(190, 90%, 85%)",
			infoForeground: "hsl(45, 50%, 95%)",
			warning: "hsl(48, 85%, 55%)",
			warningDark: "hsl(48, 75%, 35%)",
			warningLight: "hsl(53, 95%, 80%)",
			warningForeground: "hsl(30, 20%, 15%)",
			overlayDark: "hsl(30, 20%, 10%)",
			overlayLight: "hsl(45, 60%, 98%)"
		},
		{
			background: {
				light: "hsl(18, 95%, 96%)",
				dark: "hsl(14, 20%, 10%)"
			},
			foreground: {
				light: "hsl(14, 20%, 10%)",
				dark: "hsl(18, 95%, 96%)"
			},
			accent: {
				light: "hsl(18, 30%, 95%)",
				dark: "hsl(12, 60%, 20%)"
			},
			accentForeground: {
				light: "hsl(12, 60%, 20%)",
				dark: "hsl(18, 30%, 95%)"
			},
			muted: {
				light: "hsl(18, 30%, 95%)",
				dark: "hsl(14, 20%, 45%)"
			},
			mutedForeground: {
				light: "hsl(14, 20%, 45%)",
				dark: "hsl(18, 30%, 95%)"
			},
			primary: "hsl(14, 86%, 57%)",
			primaryDark1: "hsl(14, 75%, 43%)",
			primaryDark2: "hsl(14, 65%, 33%)",
			primaryLight1: "hsl(20, 90%, 77%)",
			primaryLight2: "hsl(20, 98%, 92%)",
			primaryForeground: "hsl(18, 95%, 96%)",
			secondary: "hsl(0, 15%, 25%)",
			secondaryDark: "hsl(0, 10%, 12%)",
			secondaryLight: "hsl(14, 20%, 80%)",
			secondaryForeground: "hsl(18, 95%, 96%)",
			success: "hsl(120, 45%, 45%)",
			successDark: "hsl(120, 55%, 35%)",
			successLight: "hsl(120, 60%, 75%)",
			successForeground: "hsl(18, 95%, 96%)",
			danger: "hsl(0, 80%, 50%)",
			dangerDark: "hsl(0, 70%, 40%)",
			dangerLight: "hsl(0, 90%, 85%)",
			dangerForeground: "hsl(18, 95%, 96%)",
			info: "hsl(200, 85%, 55%)",
			infoDark: "hsl(200, 70%, 40%)",
			infoLight: "hsl(200, 92%, 88%)",
			infoForeground: "hsl(18, 95%, 96%)",
			warning: "hsl(30, 85%, 60%)",
			warningDark: "hsl(30, 75%, 45%)",
			warningLight: "hsl(40, 90%, 80%)",
			warningForeground: "hsl(14, 20%, 10%)",
			overlayDark: "hsl(14, 20%, 5%)",
			overlayLight: "hsl(18, 98%, 98%)"
		},
		{
			background: {
				light: "hsl(220, 60%, 15%)",
				dark: "hsl(230, 10%, 8%)"
			},
			foreground: {
				light: "hsl(220, 20%, 5%)",
				dark: "hsl(220, 20%, 95%)"
			},
			accent: {
				light: "hsl(230, 20%, 20%)",
				dark: "hsl(230, 40%, 90%)"
			},
			accentForeground: {
				light: "hsl(230, 40%, 90%)",
				dark: "hsl(230, 20%, 20%)"
			},
			muted: {
				light: "hsl(230, 20%, 20%)",
				dark: "hsl(230, 15%, 70%)"
			},
			mutedForeground: {
				light: "hsl(230, 15%, 70%)",
				dark: "hsl(230, 20%, 20%)"
			},
			primary: "hsl(220, 85%, 40%)",
			primaryDark1: "hsl(220, 70%, 30%)",
			primaryDark2: "hsl(220, 60%, 20%)",
			primaryLight1: "hsl(220, 85%, 55%)",
			primaryLight2: "hsl(220, 95%, 75%)",
			primaryForeground: "hsl(220, 20%, 95%)",
			secondary: "hsl(230, 15%, 25%)",
			secondaryDark: "hsl(230, 10%, 12%)",
			secondaryLight: "hsl(230, 25%, 75%)",
			secondaryForeground: "hsl(220, 20%, 95%)",
			success: "hsl(160, 45%, 45%)",
			successDark: "hsl(160, 55%, 35%)",
			successLight: "hsl(160, 65%, 75%)",
			successForeground: "hsl(220, 20%, 95%)",
			danger: "hsl(0, 85%, 50%)",
			dangerDark: "hsl(0, 70%, 35%)",
			dangerLight: "hsl(0, 95%, 85%)",
			dangerForeground: "hsl(220, 20%, 95%)",
			info: "hsl(220, 85%, 55%)",
			infoDark: "hsl(220, 70%, 40%)",
			infoLight: "hsl(220, 90%, 85%)",
			infoForeground: "hsl(220, 20%, 95%)",
			warning: "hsl(48, 85%, 55%)",
			warningDark: "hsl(48, 75%, 35%)",
			warningLight: "hsl(48, 95%, 80%)",
			warningForeground: "hsl(220, 20%, 95%)",
			overlayDark: "hsl(230, 10%, 5%)",
			overlayLight: "hsl(220, 62%, 18%)"
		},
		{
			background: {
				light: "hsl(120, 40%, 94%)",
				dark: "hsl(120, 20%, 15%)"
			},
			foreground: {
				light: "hsl(120, 20%, 15%)",
				dark: "hsl(120, 40%, 94%)"
			},
			accent: {
				light: "hsl(100, 20%, 90%)",
				dark: "hsl(80, 40%, 25%)"
			},
			accentForeground: {
				light: "hsl(80, 40%, 25%)",
				dark: "hsl(100, 20%, 90%)"
			},
			muted: {
				light: "hsl(100, 20%, 90%)",
				dark: "hsl(90, 25%, 45%)"
			},
			mutedForeground: {
				light: "hsl(90, 25%, 45%)",
				dark: "hsl(100, 20%, 90%)"
			},
			primary: "hsl(100, 70%, 50%)",
			primaryDark1: "hsl(100, 60%, 40%)",
			primaryDark2: "hsl(100, 50%, 30%)",
			primaryLight1: "hsl(100, 80%, 65%)",
			primaryLight2: "hsl(100, 90%, 85%)",
			primaryForeground: "hsl(120, 40%, 94%)",
			secondary: "hsl(80, 30%, 35%)",
			secondaryDark: "hsl(80, 20%, 20%)",
			secondaryLight: "hsl(90, 40%, 70%)",
			secondaryForeground: "hsl(120, 40%, 94%)",
			success: "hsl(140, 50%, 50%)",
			successDark: "hsl(140, 60%, 40%)",
			successLight: "hsl(140, 70%, 70%)",
			successForeground: "hsl(120, 40%, 94%)",
			danger: "hsl(0, 80%, 50%)",
			dangerDark: "hsl(0, 70%, 40%)",
			dangerLight: "hsl(0, 90%, 85%)",
			dangerForeground: "hsl(120, 40%, 94%)",
			info: "hsl(210, 85%, 55%)",
			infoDark: "hsl(210, 70%, 40%)",
			infoLight: "hsl(210, 90%, 85%)",
			infoForeground: "hsl(120, 40%, 94%)",
			warning: "hsl(48, 85%, 55%)",
			warningDark: "hsl(48, 75%, 35%)",
			warningLight: "hsl(53, 95%, 80%)",
			warningForeground: "hsl(120, 20%, 15%)",
			overlayDark: "hsl(120, 20%, 10%)",
			overlayLight: "hsl(120, 42%, 96%)"
		},
		{
			background: {
				light: "hsl(200, 30%, 95%)",
				dark: "hsl(200, 20%, 15%)"
			},
			foreground: {
				light: "hsl(200, 20%, 15%)",
				dark: "hsl(200, 30%, 95%)"
			},
			accent: {
				light: "hsl(200, 20%, 90%)",
				dark: "hsl(180, 40%, 25%)"
			},
			accentForeground: {
				light: "hsl(180, 40%, 25%)",
				dark: "hsl(200, 20%, 90%)"
			},
			muted: {
				light: "hsl(200, 20%, 90%)",
				dark: "hsl(180, 25%, 45%)"
			},
			mutedForeground: {
				light: "hsl(180, 25%, 45%)",
				dark: "hsl(200, 20%, 90%)"
			},
			primary: "hsl(200, 70%, 50%)",
			primaryDark1: "hsl(200, 60%, 40%)",
			primaryDark2: "hsl(200, 50%, 30%)",
			primaryLight1: "hsl(200, 80%, 65%)",
			primaryLight2: "hsl(200, 90%, 85%)",
			primaryForeground: "hsl(200, 30%, 95%)",
			secondary: "hsl(180, 30%, 35%)",
			secondaryDark: "hsl(180, 20%, 20%)",
			secondaryLight: "hsl(180, 40%, 70%)",
			secondaryForeground: "hsl(200, 30%, 95%)",
			success: "hsl(140, 50%, 50%)",
			successDark: "hsl(140, 60%, 40%)",
			successLight: "hsl(140, 70%, 70%)",
			successForeground: "hsl(200, 30%, 95%)",
			danger: "hsl(0, 80%, 50%)",
			dangerDark: "hsl(0, 70%, 40%)",
			dangerLight: "hsl(0, 90%, 85%)",
			dangerForeground: "hsl(200, 30%, 95%)",
			info: "hsl(220, 85%, 55%)",
			infoDark: "hsl(220, 70%, 40%)",
			infoLight: "hsl(220, 90%, 85%)",
			infoForeground: "hsl(200, 30%, 95%)",
			warning: "hsl(48, 85%, 55%)",
			warningDark: "hsl(48, 75%, 35%)",
			warningLight: "hsl(53, 95%, 80%)",
			warningForeground: "hsl(200, 20%, 15%)",
			overlayDark: "hsl(200, 20%, 10%)",
			overlayLight: "hsl(200, 32%, 97%)"
		}
	];

	return (
		<RootLayout {...restProps}>
			<main
				class="flex items-center flex-col grow"
				x-data={`themeSelector(${JSON.stringify(palettes)})`}
				x-bind="styler"
			>
				<div class={"p-2 md:p-8 w-full space-y-4"}>
					<h1>Own it. Design your theme.</h1>
					<h3>{description}</h3>
					<div class={"flex items-center gap-x-4"}>
						<ThemePaletteSelector />
						<SecondaryButton text="Copy code" variant="inversed" />
					</div>
				</div>
				<div class={"border-t h-full w-full p-2 md:p-4 xl:p-8 flex flex-wrap"}>
					<TeamMemberList />
				</div>
			</main>
		</RootLayout>
	);
}

function TeamMemberList() {
	return (
		<Card class={"max-w-xl h-fit overflow-visible"}>
			<CardBody class={"p-4 bg-primary/5 [&_p]:text-foreground/75"}>
				<div>
					<strong class={"text-lg"}>Team Members</strong>
					<p>Invite your team members to participate.</p>
				</div>
				<ul class={"space-y-2"}>
					{[
						{
							name: "Sofia Davis",
							email: "s.davis@example.com",
							role: { label: "Owner", value: "owner" },
							img: "https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=Sophia"
						},
						{
							name: "John Doe",
							email: "j.doe@example.com",
							role: { label: "Editor", value: "editor" },
							img: "https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=Jessica"
						},
						{
							name: "Isabelle Nguyen",
							email: "i.nguyen@example.com",
							role: { label: "Editor", value: "editor" },
							img: "https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=Easton"
						}
					].map((member) => (
						<li class={"flex items-center gap-x-4"}>
							<Avatar image={{ src: member.img, alt: member.name }} size="10" />
							<div class={"grow"}>
								<h4>{member.name}</h4>
								<p class={"text-sm"}>{member.email}</p>
							</div>
							<Select
								class={
									"btn btn-secondary-inversed [&>ul]:border p-1 rounded w-32 shrink-0 flex"
								}
								items={[
									{ label: "Owner", value: "owner" },
									{ label: "Viewer", value: "viewer" },
									{ label: "Editor", value: "editor" },
									{ label: "Developper", value: "developper" }
								]}
								defaultValue={member.role}
							/>
						</li>
					))}
				</ul>
			</CardBody>
		</Card>
	);
}

function ThemePaletteSelector() {
	return (
		<Dropdown>
			<SecondaryButton x-bind="toggler" x-ref="trigger" text="Customize" />
			<DropdownContent
				class={
					"flex items-center justify-center w-40 bg-background rounded border p-4"
				}
			>
				<ul class={"grid grid-cols-3 items-center gap-4"}>
					<template x-for="palette in palettes">
						<li>
							<button
								class="w-6 h-6 rounded-full flex items-center justify-center"
								x-bind:style={"`background-color: ${palette.primary}`"}
								x-on:click="choosePalette(palette)"
							>
								<Icon name="check-line" x-show="isSelected(palette)" />
							</button>
						</li>
					</template>
				</ul>
			</DropdownContent>
		</Dropdown>
	);
}
