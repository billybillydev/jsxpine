import { Card } from "$components/card.component";

export function HorizontalCardExample() {
	return (
		<Card
			image={{
				src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
				alt: "Card component image"
			}}
			class="grid grid-cols-2 [&_#card-body-text]:h-full [&_#card-controls]:justify-center [&_#card-controls>*]:w-full"
			title="Product Name"
			text="This card element can be used to display a product, post, or any other type of data."
			controls={[
				{
					label: "View Product",
					type: "secondary",
					action: "console.log('card component')"
				}
			]}
			direction="horizontal"
		/>
	);
}
