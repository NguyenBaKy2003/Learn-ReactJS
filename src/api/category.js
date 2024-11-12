import axiosClient from "./axiosClient";

const categoryApi = {
  // Get all categories
  getAll() {
    let url = "/categories";
    return axiosClient.get(url);
  },

  // Get a specific category by ID
  get(id) {
    let url = `/categories/${id}`;
    return axiosClient.get(url);
  },

  // Add a new category
  add(data) {
    let url = "/categories";
    return axiosClient.post(url, data);
  },

  // Remove a category by ID
  remove(id) {
    let url = `/categories/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryApi;
