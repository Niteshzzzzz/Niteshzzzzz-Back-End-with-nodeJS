import axiosInstance from "./axiosInstance";

export const userRegisterApi = async (userData) => {
  const { data } = await axiosInstance.post("/auth/register",userData);
  return data;
};

export const userLoginApi = async (userData) => {
  const { data } = await axiosInstance.post("/auth/login",userData);
  return data;
};

export const userLogoutApi = async () => {
  const { data } = await axiosInstance.post("/auth/logout");
  return data;
};

export const getUserProfileApi = async () => {
  const { data } = await axiosInstance.get("/auth/profile");
  return data;
};
