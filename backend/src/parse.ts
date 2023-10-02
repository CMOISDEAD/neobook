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
import remarkFrontmatter from "remark-frontmatter";
import remarkPlant from "@akebifiky/remark-simple-plantuml";
import remarkImages from "./plugins/remark/remarkImage";
import remarkHint from "remark-hint";
import rehypeReact from "rehype-react";
import rehypeLinks from "./plugins/rehype/rehypeLinks";

export const parseNote = async (filepath: string) => {
  const markdown = Bun.file(filepath);
  const processor = await unified()
    .use(remarkParse)
    .use(remarkImages)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkPlant)
    .use(remarkHint)
    .use(remarkRehype)
    .use(rehypeLinks)
    .use(rehypeCode)
    .use(rehypePrettyCode, {
      theme: "slack-dark",
    })
    .use(rehypeKatex)
    .use(rehypeReact)
    .use(rehypeStringify)
    .process(await markdown.text());
  const content = processor.toString();
  return content;
};
