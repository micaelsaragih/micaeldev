import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://micaeldev.vercel.app";
  
  return [
    { url: `${baseUrl}` },
    { url: `${baseUrl}/projects` },
    { url: `${baseUrl}/certifications` },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/contact` },
  ];
}
