import axiosClient from "./axiosClient";

const productApi = {
  // Get all products
  getAll() {
    let url = "/products";
    return axiosClient.get(url);
  },

  // Get a specific category by ID
  get(id) {
    let url = `/products/${id}`;
    return axiosClient.get(url);
  },

  // Add a new category
  add(data) {
    let url = "/products";
    return axiosClient.post(url, data);
  },

  // Remove a category by ID
  remove(id) {
    let url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
