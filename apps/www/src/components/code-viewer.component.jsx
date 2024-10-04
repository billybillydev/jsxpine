import { getHighlighter } from "shikiji";

/**
 * @typedef {Object} CodeViewerProps
 * @property {string} text
 */

/**
 * CodeEditor component props
 * @type {import("../common/props").JSXComponent<CodeViewerProps>}
 */
export async function CodeViewer({ text }) {
    const langs = ["javascript"];
	const themes = ["vitesse-dark", "nord"];

	const highlighter = await getHighlighter({
		themes,
		langs,
	});

	const htmlContent = await highlighter.codeToHtml(
		text,
		{
			lang: langs[0],
			theme: themes[0],
			mergeWhitespaces: false
		}
	);
	return htmlContent.toString();
}
