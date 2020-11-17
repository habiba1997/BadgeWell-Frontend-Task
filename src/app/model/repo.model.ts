export class Repository {
    full_name: string;
    owner:{ avatar_url: string};

    description: string;
    stargazers_count: number;

    forks_counts: number;
    size:number;
    language: string;

    constructor(
        full_name?:string,
        avatar_url?: string,
        description?: string,
        stargazers_count?: number,

        forks_counts?: number,
        size?:number,
        language?: string
    )
    {
        this.full_name=full_name;
        this.owner.avatar_url = avatar_url;
        this.description = description;
        this.stargazers_count = stargazers_count;
        this.forks_counts = forks_counts;
        this.size=size;
        this.language=language;
        
    }

}