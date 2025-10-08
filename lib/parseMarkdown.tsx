import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";
import type {
  Root,
  Paragraph,
  Image as ParsedImage,
  Link as MdastLink,
  Heading,
  List,
  ListItem,
} from "mdast";
import type { Section } from "./types";
import Link from "next/link";
import React from "react";

export function parseMarkdownToSections(markdown: string): Section[] {
  const tree = unified().use(remarkParse).parse(markdown) as Root;
  const sections: Section[] = [];

  visit(tree, ["paragraph", "heading", "list"], (node, index, parent) => {
    if (node.type === "paragraph") {
      if (parent && parent.type === "listItem") return;

      const paragraph = node as Paragraph;

      const imageNodes = paragraph.children.filter(
        (child): child is ParsedImage => child.type === "image"
      );
      const imageUrls = imageNodes
        .map((img) => img.url)
        .filter((url): url is string => !!url);

      if (imageUrls.length > 0) {
        sections.push({
          type: "image",
          content: imageUrls,
        });
        return;
      }

      const content: React.ReactNode[] = paragraph.children.map(
        (child, idx) => {
          if (child.type === "text")
            return <React.Fragment key={idx}>{child.value}</React.Fragment>;

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

          if (child.type === "emphasis") {
            return (
              <em key={idx}>
                {child.children.map((sub, subIdx) =>
                  sub.type === "text" ? (
                    <React.Fragment key={subIdx}>{sub.value}</React.Fragment>
                  ) : null
                )}
              </em>
            );
          }

          if (child.type === "strong") {
            return (
              <strong key={idx}>
                {child.children.map((sub, subIdx) =>
                  sub.type === "text" ? (
                    <React.Fragment key={subIdx}>{sub.value}</React.Fragment>
                  ) : null
                )}
              </strong>
            );
          }

          return null;
        }
      );

      if (content.length > 0) {
        sections.push({ type: "text", content: <p>{content}</p> });
      }
    } else if (node.type === "heading") {
      const heading = node as Heading;
      const level = heading.depth;
      const content = heading.children.map((child, idx) =>
        child.type === "text" ? (
          <React.Fragment key={idx}>{child.value}</React.Fragment>
        ) : null
      );

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
            return child.children.map((grandChild, grandIdx) => {
              if (grandChild.type === "text")
                return (
                  <React.Fragment key={grandIdx}>
                    {grandChild.value}
                  </React.Fragment>
                );
              if (grandChild.type === "link") {
                const link = grandChild as MdastLink;
                return (
                  <Link key={grandIdx} href={link.url}>
                    {link.children.map((sub, subIdx) =>
                      sub.type === "text" ? (
                        <React.Fragment key={subIdx}>
                          {sub.value}
                        </React.Fragment>
                      ) : null
                    )}
                  </Link>
                );
              }
              return null;
            });
          }
          return null;
        });

        return <li key={idx}>{itemContent}</li>;
      });

      sections.push({
        type: "list",
        content: listNode.ordered ? <ol>{listItems}</ol> : <ul>{listItems}</ul>,
      });
    }
  });

  return sections;
}
