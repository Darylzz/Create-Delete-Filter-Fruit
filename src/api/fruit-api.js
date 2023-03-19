import axios from "../config/axios";

export const getAllFruit = () => axios.get("/fruit/get");
