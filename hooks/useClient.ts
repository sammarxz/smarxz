import { createClient } from "next-sanity"

import { sanityConfig } from "@/config/sanity.config"

const client = createClient(sanityConfig)

export function useClient() {
  return {
    client
  }
}