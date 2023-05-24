export interface IRepository {
  name: string;
  stargazerCount: number;
  updatedAt: string;
  description: string;
  url: string;
  owner: {
    avatarUrl: string;
    url: string;
    login: string;
  };
  languages: {
    nodes: {
      name: string;
      color: string;
    }[];
  };
}

export interface IRepositoryResponse {
  repository: IRepository;
}
