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
		<div class="flex flex-col gap-4">
			{radioOptions.map((option) => {
				return (
					<Radio
						name="radio-group"
						id={option.value}
						value={option.value}
						disabled={option.disabled}
						x-on:change="console.log($event.target.value)"
						class="flex items-start p-5 space-x-3 text-slate-900 bg-white border rounded-md shadow-sm hover:bg-gray-50 border-neutral-200/70 peer-checked:bg-info-200 peer-disabled:cursor-not-allowed peer-disabled:bg-white peer-disabled:text-slate-300"
					>
						<div class="relative flex flex-col text-left space-y-1.5 leading-none">
							<span class="font-semibold" safe>
								{option.title}
							</span>
							<span class="text-sm opacity-50" safe>
								{option.description}
							</span>
						</div>
					</Radio>
				);
			})}
		</div>
	);
}
