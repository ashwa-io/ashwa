import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	compress: true,
	poweredByHeader: false,
	// The dev badge would be photographed into the product screens captured from /shots.
	devIndicators: false,
	images: {
		formats: ["image/avif", "image/webp"],
	},
};

export default nextConfig;

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
