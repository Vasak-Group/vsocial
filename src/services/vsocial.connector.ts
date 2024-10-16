const VSocialConnector = {
  GET: async (url: string, token: string = "") => {
    try {
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
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  POST: async (url: string, data: any, token: string = "") => {
    try {
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
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default VSocialConnector;
