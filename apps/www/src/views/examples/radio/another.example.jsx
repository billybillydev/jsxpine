import { Icon } from "$components/icon.component";
import { Radio } from "$components/radio.component";

export function AnotherRadioExample() {
	const radioOptions = [
		{
			title: "Tailwind CSS",
			description: "A utility-first CSS framework for rapid UI development.",
			value: "another-tailwind"
		},
		{
			title: "Alpine JS",
			description: "A rugged and lightweight JavaScript framework.",
			value: "another-alpine",
			disabled: true
		},
		{
			title: "Laravel",
			description: "The PHP Framework for Web Artisans.",
			value: "another-laravel"
		}
	];

	return (
		<div class="flex flex-col gap-4">
			{radioOptions.map((option) => {
				return (
					<Radio
						name="radio-another-group"
						id={option.value}
						value={option.value}
						disabled={option.disabled}
						x-on:change="console.log($event.target.value)"
						class="group/item flex items-start p-5 space-x-3 bg-white border rounded-md shadow-sm hover:bg-gray-50 border-neutral-200/70 peer-checked:border-info-600 peer-checked:[&>svg]:visible peer-checked:[&>*]:text-info-600 peer-disabled:cursor-not-allowed peer-disabled:bg-white peer-disabled:text-slate-300"
					>
						<Icon
							name="check-line"
							stroke-width="3"
							size={6}
							class="invisible"
						/>
						<div class="relative flex flex-col text-left space-y-1.5 leading-none">
							<span class="flex font-semibold">{option.title}</span>
							<span class="text-sm opacity-50">{option.description}</span>
						</div>
					</Radio>
				);
			})}
		</div>
	);
}
