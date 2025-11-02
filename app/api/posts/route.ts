import { NextResponse } from "next/server";
import { getAllPosts } from "../../../lib/utils";

export async function GET() {
  const posts = await getAllPosts();
  return NextResponse.json(posts);
}
