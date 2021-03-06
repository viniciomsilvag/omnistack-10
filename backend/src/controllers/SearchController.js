const Dev = require('../models/Dev');

const parseArray = require('../utils/parseArray');

module.exports = {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const arrayTechs = parseArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: arrayTechs,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json({ devs });
  },
};
