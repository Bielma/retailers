import baseUrl from "../constants/Api";

export const sendRequest = async (route, request) => {
  let response;
  try {
    response = await fetch(baseUrl + route, request);
    if (response.status === 401) {
      return { success: false };
    }
  } catch (error) {
    return { success: false };
  }
  try {
    return await response.json();
  } catch (error) {
    return { success: false };
  }
};
