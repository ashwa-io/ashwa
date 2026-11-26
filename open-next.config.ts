import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
	// Serve the pages built at deploy time from the worker's static assets. Without a cache the
	// worker cannot see them, and routes with `dynamicParams = false` answer 404 for every path.
	// The site has no revalidation, so a read-only cache is enough.
	incrementalCache: staticAssetsIncrementalCache,
});
