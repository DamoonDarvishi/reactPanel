import http from "./httpService";
import config from "./config.json";

// E-shop
export const loginPost = (user) => {
  return http.post(
    `${config.baseUrl}/...`,
    JSON.stringify(user)
  );
};

