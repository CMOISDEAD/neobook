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
import rehypeImages from "./plugins/rehype/rehypeImages";
import remarkFrontmatter from "remark-frontmatter";

export const parseNote = async (filepath: string) => {
  const markdown = Bun.file(filepath);
  const processor = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkRehype)
    .use(rehypeCode)
    .use(rehypeImages)
    .use(rehypePrettyCode, {
      theme: "slack-dark",
    })
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(await markdown.text());
  const content = processor.toString();
  return content;
};
