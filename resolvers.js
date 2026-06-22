const db = require("./firebase");

const resolvers = {
  Query: {
    getOrders: async () => {
      const snapshot = await db.ref("orders").once("value");

      const data = snapshot.val();

      return data ? Object.values(data) : [];
    },

    getTrackingItemsById: async (_, { id }) => {
      const snapshot = await db
        .ref(`trackingItems/${id}`)
        .once("value");

      return snapshot.val();
    },
  },
};

module.exports = resolvers;