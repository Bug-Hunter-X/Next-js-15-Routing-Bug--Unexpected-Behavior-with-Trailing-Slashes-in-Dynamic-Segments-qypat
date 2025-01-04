# Next.js 15 Routing Bug: Trailing Slashes in Dynamic Segments

This repository demonstrates a bug in Next.js 15 related to routing with dynamic segments and trailing slashes.  The issue involves unexpected behavior when a dynamic segment in a route ends with a trailing slash.

## Bug Description

When using dynamic segments in routes (e.g., `/products/[id]`), Next.js 15 seems to mishandle cases where the `id` segment includes a trailing slash. This leads to incorrect page rendering or routing errors.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/products/123/` (note the trailing slash).
5. Observe the unexpected behavior (e.g., 404 error or incorrect page rendering).

## Expected Behavior

The application should correctly handle routes with trailing slashes in dynamic segments.  The route `/products/123/` should be handled as equivalent to `/products/123`.

## Workaround

The workaround is to remove trailing slashes on server-side handling of the dynamic id segment.