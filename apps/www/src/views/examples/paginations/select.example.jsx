import { SelectPagination } from "$components/pagination.component";

export function SelectPaginationExample() {
	return (
		<SelectPagination
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
