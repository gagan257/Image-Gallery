"use client";
import { UnsplashedImage } from "@/models/unsplash-image";
import { FormEvent, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
export default function SearchPage() {
  const [searchResults, setSearchResults] = useState<UnsplashedImage[] | null>(
    null
  );
  const [searchResultsLoading, setsearchResultsLoading] = useState(false);
  const [searchResultsLoadingIsError, setsearchResultsLoadingIsError] =
    useState(false);
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // prevents reload
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("query")?.toString().trim();
    if (query) {
      try {
        setSearchResults(null);
        setsearchResultsLoadingIsError(false);
        setsearchResultsLoading(true);
        const response = await fetch("/api/search?query=" + query);
        const images: UnsplashedImage[] = await response.json();
        setSearchResults(images);
      } catch (error) {
        console.error(error);
        setsearchResultsLoadingIsError(true);
      }
    }
  }
  return (
    <div className="text-center">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="search-input">
          <Form.Label>Search Query</Form.Label>
          <Form.Control name="query" placeholder="E.g cats, apples etc..." />
        </Form.Group>
        <Button type="submit" className="mb-3">
          Search
        </Button>
      </Form>

      <div className="d-flex flex-column align-items-center">
        {searchResultsLoading && <Spinner animation="border" />}
        {searchResultsLoadingIsError && (
          <p>Something went wrong. Please try again</p>
        )}
      </div>
    </div>
  );
}
