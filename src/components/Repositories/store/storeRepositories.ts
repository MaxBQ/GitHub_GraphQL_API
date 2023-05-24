import { atom } from "jotai";
import { IRepositories } from "../interfaces/IRepositories";

export const repositoriesAtom = atom<IRepositories[]>([] as IRepositories[]);
