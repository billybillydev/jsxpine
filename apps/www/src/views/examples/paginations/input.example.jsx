import { InputPagination } from "$components/pagination.component";

export function InputPaginationExample() {
	return (
		<InputPagination
			x-init={`
                $watch("selectedPage", (value) => {
                    console.log({ selectedPage: value });
                })
            `}
			pages={20}
			class="[&_input]:w-24 text-slate-900"
			selectedPage={3}
		/>
	);
}
