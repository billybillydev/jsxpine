import { EmailField, DateField, FileField, NumberField, PasswordField, TextareaField, TextField, TimeField } from "$components/field.component";

export function MainInputExample() {
	return (
		<div class="grid grid-cols-2 gap-x-2 gap-y-4 items-center">
			<TextField
				label="Text Field"
				id="username"
				name="username"
				placeholder="type your username here"
				x-on:input="console.log($event.target.value)"
			/>
			<PasswordField
				label="Password Field"
				id="password"
				name="password"
				placeholder="type your password here"
			/>
			<EmailField
				label="Email Field"
				id="email"
				name="email"
				placeholder="example@email.com"
				x-on:input="console.log($event.target.value)"
			/>
			<div class="flex items-center justify-center">
				<NumberField
					label="Number Field"
					id="quantity"
					name="quantity"
					min={1}
					max={5}
					class="w-24"
					x-on:input="console.log($event.target.value)"
				/>
			</div>
			<DateField
				label="Select a date"
				id="datefield"
				name="datefield"
				x-on:input="console.log($event.target.value)"
			/>
			<TimeField
				label="Select a time"
				id="timefield"
				name="timefield"
				x-on:input="console.log($event.target.value)"
			/>
			<FileField
				label="Select a file"
				x-on:input="console.log($event.target.value)"
			/>
			<FileField
				label="Select files"
				x-on:input="console.log($event.target.value)"
				multiple
			/>
			<div class="col-span-2 border">
				<TextareaField
					placeholder="This is textarea component"
					label="Textarea Field"
					x-on:input="console.log($event.target.value)"
					class="flex flex-col h-48 w-full"
				/>
			</div>
		</div>
	);
}
