import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";
import type { Section } from "./types";
import type { Root, Paragraph, Image, Link as MdastLink } from "mdast";
import Link from "next/link";
import React from "react";

export function parseMarkdownToSections(markdown: string): Section[] {
  const tree = unified().use(remarkParse).parse(markdown) as Root;
  const sections: Section[] = [];

  visit(tree, "paragraph", (node) => {
    const paragraph = node as Paragraph;

    const imageParts = paragraph.children
      .filter((child): child is Image => child.type === "image")
      .map((child) => child.url);

    if (imageParts.length > 0) {
      sections.push({ type: "image", content: imageParts });
      return;
    }

    const content: React.ReactNode[] = paragraph.children.map((child, idx) => {
      if (child.type === "text") {
        return <React.Fragment key={idx}>{child.value}</React.Fragment>;
      }

      if (child.type === "link") {
        const link = child as MdastLink;
        return (
          <Link key={idx} href={link.url}>
            {link.children.map((sub, subIdx) =>
              sub.type === "text" ? (
                <React.Fragment key={subIdx}>{sub.value}</React.Fragment>
              ) : null
            )}
          </Link>
        );
      }

      return null;
    });

    if (content.length > 0) {
      sections.push({
        type: "text",
        content: <p>{content}</p>,
      });
    }
  });

  return sections;
}
