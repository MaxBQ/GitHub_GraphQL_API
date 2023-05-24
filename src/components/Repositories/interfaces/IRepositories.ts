export interface IRepositories {
  id: string;
  name: string;
  stargazerCount: number;
  updatedAt: string;
  url: string;
}

export interface IRepositoriesResponse {
  search: {
    nodes: IRepositories[];
  };
}
