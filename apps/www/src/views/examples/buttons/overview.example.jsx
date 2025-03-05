import {
	Button,
	PrimaryButton,
	SuccessButton,
	SecondaryButton,
	WarningButton,
	DangerButton,
	InfoButton
} from "$components/button.component";
import { Icon } from "$components/icon.component";

export function OverviewButtonExample() {
	return (
		<>
			<Button>With Children</Button>
			<InfoButton text="With text props" />
			<Button text="Disabled" disabled />
			<PrimaryButton>Rounded</PrimaryButton>
			<DangerButton borderRadius="square" text="Square" />
			<SuccessButton borderRadius="arc" text="With Arc borderRadius" />
			<Button variant="inversed" borderRadius="circle">
				<Icon name="ri.edit-box-line" />
			</Button>
			<SecondaryButton borderRadius="curve" text="Curve" />
			<Button variant="outlined" text="Base button outlined" />
			<Button class="bg-slate-300 hover:bg-slate-800 text-slate-800 hover:text-slate-300 p-4" borderRadius="pill">
				Pill borderRadius with custom class
			</Button>
			<WarningButton borderRadius="circle" text="Circle" />
		</>
	);
}
