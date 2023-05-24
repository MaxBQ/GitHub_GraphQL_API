import { atom } from "jotai";
import { IRepositories } from "../interfaces/IRepositories";

export const repositoryAtom = atom<IRepositories[]>([] as IRepositories[]);
