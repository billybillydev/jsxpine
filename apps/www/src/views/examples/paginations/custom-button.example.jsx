import { PrimaryButton } from "$components/button.component";
import { SelectPagination } from "$components/pagination.component";

export function CustomButtonPaginationExample() {
	return (
		<SelectPagination
			x-init={`
                $watch("selectedPage", (value) => {
                    console.log({ selectedPage: value });
                })
            `}
			pages={3}
			class="[&_input]:w-24"
			selectedPage={3}
			customFirstButton={
				<PrimaryButton
					x-bind:disabled="isFirstPage"
					x-on:click="selectFirstPage"
					text="Première"
				/>
			}
			customPreviousButton={
				<PrimaryButton
					x-bind:disabled="isFirstPage"
					x-on:click="selectPreviousPage"
					text="Précédente"
				/>
			}
			customNextButton={
				<PrimaryButton
					x-bind:disabled="isLastPage"
					x-on:click="selectNextPage"
					text="Suivante"
				/>
			}
			customLastButton={
				<PrimaryButton
					x-bind:disabled="isLastPage"
					x-on:click="selectLastPage"
					text="Dernière"
				/>
			}
		/>
	);
}
