import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";
import type {
  Root,
  Paragraph,
  Image,
  Link as MdastLink,
  Heading,
  List,
  ListItem,
} from "mdast";
import type { Section } from "./types";
import Link from "next/link";
import React from "react";

function renderNodeChildren(children: any[]): React.ReactNode[] {
  return children.map((child, idx) => {
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
}

export function parseMarkdownToSections(markdown: string): Section[] {
  const tree = unified().use(remarkParse).parse(markdown) as Root;
  const sections: Section[] = [];

  visit(tree, ["paragraph", "heading", "list"], (node, index, parent) => {
    if (node.type === "paragraph") {
      if (parent && parent.type === "listItem") return;

      const paragraph = node as Paragraph;

      const imageParts = paragraph.children
        .filter((child): child is Image => child.type === "image")
        .map((child) => child.url);

      if (imageParts.length > 0) {
        sections.push({ type: "image", content: imageParts });
        return;
      }

      const content = renderNodeChildren(paragraph.children);

      if (content.length > 0) {
        sections.push({ type: "text", content: <p>{content}</p> });
      }
    } else if (node.type === "heading") {
      const heading = node as Heading;
      const level = heading.depth;

      const content = renderNodeChildren(heading.children);

      sections.push({
        type: "heading",
        content: React.createElement(`h${level}`, {}, content),
      });
    } else if (node.type === "list") {
      const listNode = node as List;

      const listItems = listNode.children.map((item, idx) => {
        const listItem = item as ListItem;

        const itemContent = listItem.children.map((child) => {
          if (child.type === "paragraph") {
            return renderNodeChildren(child.children);
          }
          return null;
        });

        return <li key={idx}>{itemContent}</li>;
      });

      const listElement = listNode.ordered ? <ol>{listItems}</ol> : <ul>{listItems}</ul>;

      sections.push({ type: "list", content: listElement });
    }
  });

  return sections;
}
