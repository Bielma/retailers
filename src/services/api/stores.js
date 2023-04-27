import { sendRequest } from "../../util/utils";

const getStores = async (params, page) => {
  const { orderBy, search, filter } = params;
  const query =
    "{" +
    `${
      search
        ? `"$or":[{"id":{"$regex":"${search}"}}, {"cuit":{"$regex":"${search}"}},{"name":{"$regex":"${search}"}}]`
        : ""
    }` +
    `${filter ? `${search ? `,"active"` : "active"}:${filter}` : ""}` +
    "}" +
    `${orderBy ? `&sort=${orderBy}` : ""}`;
  const route = `/stores/?q=${query}`,
    request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
  console.log(route);
  return await sendRequest(route, request);
};

export default {
  getStores,
};
