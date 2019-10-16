module.exports = {
  dragonTreasure: async (req, res) => {
    const db = req.app.get("db");
    let treasure = await db.get_dragon_treasure(1);
    res.status(200).send(treasure);
  },

  getUserTreasure: async (req, res) => {
    const db = req.app.get("db");
    let treasure = await db.get_user_treasure([req.session.user.id]);
    res.status(200).send(treasure);
  },

  addUserTreasure: async (req, res) => {
    const db = req.app.get("db");
    const { treasureURL } = req.body;
    const { id } = req.session.user;
    let userTreasure = await db.add_user_treasure([treasureURL, id]);
    res.status(200).send(userTreasure);
  },

  getAllTreasure: async (req, res) => {
    const db = req.app.get("db");
    let allTreasure = await db.get_all_treasure();
    res.status(200).send(allTreasure);
  }
};
