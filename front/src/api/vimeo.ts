import { baseURL } from "./base";

export const getSubtitle = (videoId: string) =>
  baseURL.get(`/vimeo/${videoId}`);
