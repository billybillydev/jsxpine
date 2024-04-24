import { InputPagination } from "$components/paginations.component";

export function CustomLabelPaginationExample() {
	return (
		<InputPagination
			x-init={`
                $watch("selectedPage", (value) => {
                    console.log({ selectedPage: value });
                })
            `}
			pages={10}
			firstButtonLabel="First"
			previousButtonLabel="Previous"
			nextButtonLabel="Next"
			lastButtonLabel="Last"
		/>
	);
}
