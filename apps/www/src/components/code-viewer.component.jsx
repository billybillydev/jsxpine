import { getHighlighter } from "shikiji";

/**
 * @typedef {"javascript" | "typescript" | "bash"} CodeLanguage
 */

/**
 * @typedef {Object} CodeViewerProps
 * @property {string} text
 * @property {CodeLanguage} lang
 */

/**
 * CodeEditor component props
 * @param {CodeViewerProps} props
 */
export async function CodeViewer({ lang = "javascript", text }) {
    const langs = [lang];
	const themes = ["vitesse-dark", "nord"];

	const highlighter = await getHighlighter({
		themes,
		langs,
	});

	const htmlContent = highlighter.codeToHtml(
		text,
		{
			lang: langs[0],
			theme: themes[0],
			mergeWhitespaces: false
		}
	);
	return htmlContent.toString();
}
