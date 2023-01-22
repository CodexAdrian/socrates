
export interface SearchResult {
    slug: string;
    title: string;
    description: string;
    categories: string[];
    client_side: string;
    server_side: string;
    project_type: string;
    downloads: number;
    icon_url?: string;
    project_id: string;
    author: string;
    display_catogires: string[];
    versions: string[];
    follows: number;
    date_created: string;
    date_modified: string;
    last_version: string;
    license: string;
    gallery: string[];
}