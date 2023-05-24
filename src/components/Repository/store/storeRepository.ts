import { atom } from "jotai";
import { IRepository } from "../interfaces/IRepository";

export const repositoryAtom = atom<IRepository>({} as IRepository);
