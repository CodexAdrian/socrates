
export interface Project {
    slug: string;
    title: string;
    description: string;
    categories: string[];
    client_side: string;
    server_side: string;
    body: string;
    additional_categories?: string[];
    issues_url?: string;
    source_url?: string;
    wiki_url?: string;
    discord_url?: string;
    donation_urls?: string[];
    project_type: string;
    downloads: number;
    icon_url?: string;
    id: string;
    team: string;
    published: string;
    updated: string;
    approved?: string;
    followers: number;
    status: string;
    license?: string;
    versions?: string[];
    gallery?: string[];
}