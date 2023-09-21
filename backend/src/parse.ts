//@ts-nocheck
import { unified } from "unified";
import remarkParse from "remark-parse/lib";
import remarkRehype from "remark-rehype/lib";
import rehypeStringify from "rehype-stringify";
import rehypeCode from "./plugins/rehype/rehypeCode";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { config } from "./config";
import rehypeLinks from "./plugins/rehype/rehypeLinks";

export const parseNote = async (note: string) => {
  const markdown = Bun.file(`${config.notesDir}/${note}.md`);
  const processor = await unified()
    .use(remarkParse)
    // .use(remarkGfm) // FIX: https://github.com/remarkjs/remark-gfm/issues/57
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeCode)
    // .use(rehypeLinks)
    .use(rehypePrettyCode, {
      theme: "slack-dark",
    })
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(await markdown.text());
  const content = processor.toString();
  return content;
};
