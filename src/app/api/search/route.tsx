import { UnsplashedSearchResponse } from "@/models/unsplash-image";
import { NextResponse } from "next/server";
import { resolve } from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  if (!query)
    return NextResponse.json({ error: "No query provided" }, { status: 400 });

  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const { results }: UnsplashedSearchResponse = await response.json();

  return NextResponse.json(results);
}
