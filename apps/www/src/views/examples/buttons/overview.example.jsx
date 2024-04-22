import { Button, PrimaryButton, SuccessButton, SecondaryButton, WarningButton } from "$components/buttons.component";

export function OverviewButtonExample() {
    return (
			<>
				<Button>With Slot</Button>
				<Button text="With text props" />
				<Button text="Disabled" disabled="true" />
				<PrimaryButton>Rounded</PrimaryButton>
				<Button borderRadius="square" text="Square" />
				<SuccessButton borderRadius="arc" text="With Arc borderRadius" />
				<SecondaryButton borderRadius="curve" text="Curve" />
				<Button variant="outlined" text="Base button outlined" />
				<Button variant="inversed" text="Base button inversed" />
				<Button class="bg-slate-300 text-slate-800 p-4" borderRadius="pill">
					Pill borderRadius with custom class
				</Button>
				<WarningButton borderRadius="circle" text="Circle" />
			</>
		);
}