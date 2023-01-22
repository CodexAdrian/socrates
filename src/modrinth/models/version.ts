
export interface Version {
    name: string;
    version_number: string;
    changelog?: string;
    dependencies?: string[];
    game_versions: string[];
    version_type: string;
    loaders: string[];
    featured: boolean;
    id: string;
    project_id: string;
    author_id: string;
    date_published: string;
    downloads: number;
    files: string[];
}