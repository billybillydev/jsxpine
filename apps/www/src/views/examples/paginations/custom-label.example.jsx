import { InputPagination } from "$components/pagination.component";

export function CustomLabelPaginationExample() {
	return (
		<InputPagination
			x-init={`
                $watch("selectedPage", (value) => {
                    console.log({ selectedPage: value });
                })
            `}
			class={"text-slate-900"}
			pages={10}
			firstButtonLabel="First"
			previousButtonLabel="Previous"
			nextButtonLabel="Next"
			lastButtonLabel="Last"
		/>
	);
}
