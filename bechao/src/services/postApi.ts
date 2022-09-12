import http from "../http-common";
import { PostMessage } from "../shared/types";
import { ROOT_URL } from "../utils/Constants";



const getAll = () => {
  return fetch(`${ROOT_URL}/postsssss`);
};
const get = (id:number) => {
  return http.get(`${ROOT_URL}/post/${id}`);
};
const create = (data:PostMessage) => {
  return http.post(`${ROOT_URL}/post`, data);
};
const update = (id:number, data:PostMessage) => {
  return http.put(`${ROOT_URL}/post/${id}`, data);
};
const remove = (id:number) => {
  return http.delete(`${ROOT_URL}/post/${id}`);
};
const removeAll = () => {
  return http.delete(`${ROOT_URL}/test`);
};
const findById = (id:number) => {
  return http.get(`${ROOT_URL}/post/${id}`);
};
const postApi = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findById
};



export default postApi;