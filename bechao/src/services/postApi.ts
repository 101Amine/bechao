import axios from "axios";
import { PostMessage } from "../shared/types";



const getAll = () => {
  return axios.get("/posts");
};
const get = (id:number) => {
  return axios.get(`/post/${id}`);
};
const create = (data:PostMessage) => {
  return axios.post("/post", data);
};
const update = (id:number, data:PostMessage) => {
  return axios.put(`/post/${id}`, data);
};
const remove = (id:number) => {
  return axios.delete(`/post/${id}`);
};
const removeAll = () => {
  return axios.delete(`/posts`);
};
const findById = (id:number) => {
  return axios.get(`/post/${id}`);
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