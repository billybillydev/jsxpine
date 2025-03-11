import { Icon } from "$components/icon.component";

export function SizeIconExample() {
    return (
        <>
            <Icon name="ri.add-circle-fill" size={6} />
            <Icon name="ri.add-circle-fill" size={8} />
            <Icon name="ri.add-circle-fill" size={12} />
            <Icon name="ri.add-circle-fill" size={16} />
        </>
    )
}