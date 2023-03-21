import axios from "../config/axios";

export const getAllFruit = () => axios.get("/fruit/get");
export const createFruit = input => axios.post("/fruit/add", input);
export const deleteFruit = fruitListId => axios.delete(`/fruit/${fruitListId}`);
