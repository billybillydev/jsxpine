import {
	Button,
	InfoButton,
	PrimaryButton,
	SecondaryButton,
	SuccessButton
} from "$components/button.component";

export function SizeButtonExample() {
	return (
		<>
			<Button size="xs">Size xs</Button>
			<InfoButton text="Size sm" size="sm" />
			<PrimaryButton>Size md</PrimaryButton>
			<Button borderRadius="square" text="Size lg" size="lg" />
			<SuccessButton borderRadius="arc" text="Size xl" size="xl" />
			<SecondaryButton borderRadius="curve" text="Size 2xl" size="2xl" />
		</>
	);
}
