import { raw } from "hono/html";
import { getHighlighter } from "shikiji";

/**
 * @typedef {Object} CodeEditorProps
 * @property {string} path
 */

/**
 * CodeEditor component props
 * @type {import("$common/props").JSXComponent<CodeEditorProps>}
 */
export async function CodeViewer({ path }) {
	// Use the appropriate method for Node.js and Deno
    const file = Bun.file(path);
    const text = await file.text();
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
	return raw(htmlContent);
}
