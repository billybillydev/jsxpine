import { Radio } from "$components/radio.component";

export function DefaultRadioExample() {
	const radioOptions = [
		{
			title: "Tailwind CSS",
			description: "A utility-first CSS framework for rapid UI development.",
			value: "tailwind"
		},
		{
			title: "Alpine JS",
			description: "A rugged and lightweight JavaScript framework.",
			value: "alpine"
		},
		{
			title: "Laravel",
			description: "The PHP Framework for Web Artisans.",
			value: "laravel",
			disabled: true
		}
	];

	return (
		<div class="flex flex-col gap-4 bg-white rounded p-2">
			{radioOptions.map((option) => {
				return (
					<Radio
						name="radio-group"
						id={option.value}
						value={option.value}
						disabled={option.disabled}
						x-on:change="console.log($event.target.value)"
						class="flex items-start p-5 space-x-3 text-base-dark bg-white border rounded-md shadow-sm hover:bg-info/15 border-base-light peer-checked:border-info peer-checked:[&>svg]:visible peer-checked:[&>*]:text-info peer-disabled:cursor-not-allowed peer-disabled:bg-white peer-disabled:text-base-light"
					>
						<div class="relative flex flex-col text-left space-y-1.5 leading-none">
							<span class="font-semibold" safe>
								{option.title}
							</span>
							<span class="text-sm opacity-75" safe>
								{option.description}
							</span>
						</div>
					</Radio>
				);
			})}
		</div>
	);
}
