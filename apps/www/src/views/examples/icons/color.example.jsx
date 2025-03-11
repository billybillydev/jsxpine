import { Icon } from "$components/icon.component";

export function ColorIconExample() {
    return (
        <>
            <Icon name="ri.edit-box-line" size={12} class="text-primary" />
            <Icon name="ri.edit-box-line" size={12} class="text-secondary" />
            <Icon name="ri.edit-box-line" size={12} class="text-info" />
            <Icon name="ri.edit-box-line" size={12} class="text-success" />
            <Icon name="ri.edit-box-line" size={12} class="text-warning" />
            <Icon name="ri.edit-box-line" size={12} class="text-danger" />
        </>
    )
}