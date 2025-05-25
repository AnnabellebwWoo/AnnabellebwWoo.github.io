import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";
import type { Section } from "./types";
import type { Root, Paragraph, Image, Text } from "mdast";

export function parseMarkdownToSections(markdown: string): Section[] {
  const tree = unified().use(remarkParse).parse(markdown) as Root;

  const sections: Section[] = [];

  visit(tree, "paragraph", (node) => {
    const paragraph = node as Paragraph;

    const textParts = paragraph.children
      .filter((child): child is Text => child.type === "text")
      .map((child) => child.value);

    const imageParts = paragraph.children
      .filter((child): child is Image => child.type === "image")
      .map((child) => child.url);

    if (textParts.length > 0) {
      sections.push({ type: "text", content: textParts });
    }

    if (imageParts.length > 0) {
      sections.push({ type: "image", content: imageParts });
    }
  });

  return sections;
}
