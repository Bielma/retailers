import { sendRequest } from "../../util/utils";

const getStores = async (orderBy, page, search) => {
  const route = `/stores/?page=${page}&search=${search}&orderBy=${orderBy}`,
    request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
  return await sendRequest(route, request);
};

export default {
  getStores,
};
