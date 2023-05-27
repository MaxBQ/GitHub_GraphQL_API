export interface IRepositories {
  id: string;
  name: string;
  stargazerCount: number;
  updatedAt: string;
  url: string;
  resourcePath: string;
}

export interface IRepositoriesResponse {
  search: {
    nodes: IRepositories[];
  };
}

export interface IMyRepositoriesResponse {
  viewer: {
    repositories: {
      nodes: IRepositories[];
    };
  };
}
