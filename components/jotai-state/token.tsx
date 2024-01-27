import { atom } from "jotai";

export const token = atom({
  Id: "",
  FirstName: "",
  LastName: "",
  Token: "",
  ImageUrl: "",
});

export const respondsStaffs = atom(false);

export const respondsPlayers = atom(false);

export const respondsUsers = atom(false);
