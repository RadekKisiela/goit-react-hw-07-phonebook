const apiService = {
  getContacts: async () => {
    try {
      const resp = await fetch(
        'https://65967fcf6bb4ec36ca02c178.mockapi.io/contacts'
      );
      const data = await resp.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default apiService;
