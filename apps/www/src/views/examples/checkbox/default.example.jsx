import { Checkbox } from "$components/checkbox.component";
import { Icon } from "$components/icon.component";

export function DefaultCheckboxExample() {
	const checkboxOptions = [
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
		<div class="flex flex-col gap-4 bg-white rounded p-2">
			{checkboxOptions.map((option) => {
				return (
					<Checkbox
						id={option.value}
						name={option.value}
						value={option.value}
						disabled={option.disabled}
						x-on:change="console.log($event.target.value)"
						class="group/item flex items-start p-5 space-x-3 text-base-dark bg-white border rounded-md shadow-sm hover:bg-info/15 border-base-light peer-checked:border-info peer-checked:[&>svg]:visible peer-checked:[&>*]:text-info peer-disabled:cursor-not-allowed peer-disabled:bg-white peer-disabled:text-base-light"
					>
						<Icon
							name="ri.check-line"
							stroke-width="3"
							size={6}
							class="invisible"
						/>
						<div class="relative flex flex-col text-left space-y-1.5 leading-none">
							<span class="flex font-semibold" safe>
								{option.title}
							</span>
							<span class="text-sm opacity-75" safe>
								{option.description}
							</span>
						</div>
					</Checkbox>
				);
			})}
		</div>
	);
}
