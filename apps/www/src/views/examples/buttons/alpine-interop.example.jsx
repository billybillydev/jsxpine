import { Button } from "$components/buttons.component"

export function AlpineInteropButtonExample() {
    return (
        <Button x-on:click="console.log('clicked')" text="Click Me" />
    )
}