import { atom } from "jotai";

export const token = atom({
  Id: "",
  FirstName: "",
  LastName: "",
  Token: "",
  ImageUrl: "",
});

export const respondsPlayers = atom(false);
