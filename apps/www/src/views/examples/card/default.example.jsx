import { Card } from "$components/card.component";

export function DefaultCardExample() {
	return (
		<div class="w-full flex flex-col gap-y-4 items-center">
			<Card
				title="Card Title"
				text={`
                    This card element can be used to display a product, post, or any other type of data.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliquid inventore impedit minus suscipit! Inventore est, omnis blanditiis iste fuga excepturi nam sit, officia pariatur molestias esse eius voluptas veniam eligendi!
                `}
				controls={[
					{
						label: "Cancel",
						type: "danger",
						action: "console.log('cancel')"
					},
					{
						label: "Confirm",
						type: "success",
						action: "console.log('confirm')"
					}
				]}
			/>
			<Card
				title="With Texts props as Array"
				class="[&_#card-controls]:justify-center"
				texts={[
					"This card element can be used to display a product, post, or any other type of data.",
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
					"Aliquid inventore impedit minus suscipit! Inventore est, omnis blanditiis iste fuga excepturi nam sit, officia pariatur molestias esse eius voluptas veniam eligendi!"
				]}
				controls={[
					{
						label: "I Refuse",
						action: "console.log('cancel')"
					},
					{
						label: "I Accept",
						type: "secondary",
						action: "console.log('card component')"
					}
				]}
			/>
			<Card
				image={{
					src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
					alt: "Card component image"
				}}
				class="w-3/5 [&_#card-controls]:justify-center [&_#card-controls>*]:w-full"
				title="Product Name"
				text="This card element can be used to display a product, post, or any other type of data."
				controls={[
					{
						label: "View Product",
						type: "secondary",
						action: "console.log('card component')"
					}
				]}
			/>
		</div>
	);
}
