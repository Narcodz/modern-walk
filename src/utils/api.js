import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

export const getProducts = async (limit, category = "") => {
  try {
    const response = await axios.get(`${API_URL}?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_URL}/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
