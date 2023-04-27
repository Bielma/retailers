import { sendRequest } from "../../util/utils";

const getStores = async (params, paginationData) => {
  const { orderBy, search, filter } = params;
  const { page, rowsPerPage } = paginationData;
  const query =
    "{" +
    `${
      search
        ? `"$or":[{"id":{"$regex":"${search}"}}, {"cuit":{"$regex":"${search}"}},{"name":{"$regex":"${search}"}}]`
        : ""
    }` +
    `${filter ? `${search ? `,"active"` : "active"}:${filter}` : ""}` +
    "}" +
    `${orderBy ? `&sort=${orderBy}` : ""}` +
    `&skip=${page}&max=${rowsPerPage}`;
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
