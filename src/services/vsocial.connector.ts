const VSocialConnector = {
  GET: async (url: string, token: string = "") => {
    const response = await fetch(
      import.meta.env.VITE_BACK_SERVICE.concat(url),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  },
  POST: async (url: string, data: any, token: string = "") => {
    const response = await fetch(
      import.meta.env.VITE_BACK_SERVICE.concat(url),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  },
};

export default VSocialConnector;
