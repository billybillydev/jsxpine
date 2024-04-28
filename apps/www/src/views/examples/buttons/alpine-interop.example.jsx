import { Button } from "$components/button.component"

export function AlpineInteropButtonExample() {
    return (
        <Button x-on:click="console.log('clicked')" text="Click Me" />
    )
}