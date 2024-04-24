import { InputPagination } from "$components/paginations.component";

export function InputPaginationExample() {
	return (
		<InputPagination
			x-init={`
                $watch("selectedPage", (value) => {
                    console.log({ selectedPage: value });
                })
            `}
			pages={20}
			class="[&_input]:w-24"
			selectedPage={3}
		/>
	);
}
