import { MainLayout } from "$views/layouts.view";
import { UseCasePresentation } from "$views/usecases.views";

/**
 * Introduction UseCase page props
 * @param {import("$components/page.component").PageContext<{ content: import("$views/usecases.views").UseCasePresentationProps }>} props
 */
export function FormSubmissionUseCasePage({ content, ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<UseCasePresentation {...content} />
		</MainLayout>
	);
}
