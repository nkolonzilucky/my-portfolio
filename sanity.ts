import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: "vh4bzmyq",
    dataset: "production",
    useCdn: false,
    apiVersion: "2025-03-24"
});