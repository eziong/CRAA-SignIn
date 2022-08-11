import { UserDto } from "type";
import axios from "axios";
import { baseURL } from "./base";

export const test = () => baseURL.get("/auth");

export const verifyUser = (userInfo: UserDto) =>
  baseURL.post("/auth/users/verification", userInfo);

export const verifyUserWithToken = (token: string, provider: string) =>
  baseURL.get(`auth/users/verification/${provider}/${token}`);

export const createUser = (userInfo: UserDto) =>
  baseURL.post("auth/users/create", userInfo);

export const readUser = (email: string) => baseURL.get(`auth/users/${email}`);

export const updateUser = (userInfo: UserDto) =>
  baseURL.put("auth/users/modify", userInfo);

export const deleteUser = (email: string) =>
  baseURL.delete(`auth/users/${email}/delete`);
