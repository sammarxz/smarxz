import { ClientConfig, createClient } from "next-sanity";

const sanityConfig:ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2021-03-25",
  useCdn: true
}

const client = createClient(sanityConfig)

const query = process.env.NEXT_PUPLIC_SANITY_QUERY as string

export { client, query }