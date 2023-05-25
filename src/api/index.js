const express = require('express');
const galleryRouter = express.Router();
const GalleryModel = require('../db/models');

// Get images by type
galleryRouter.get('/', async (request, response) => {
  const type = request.query.type || 'gallery'

  try {
    const arts = await GalleryModel.find({type});

    response.status(200).json(arts);
  } catch (err) {
    if (err) {
      return console.error(err);
    }
  }
});

// Get all images count
galleryRouter.get('/count', async (request, response) => {
  
  try {
    const count = await GalleryModel.count();

    response.status(200).json({count});
  } catch (err) {
    if (err) {
      return console.error(err);
    }
  }
});

module.exports = {
  galleryRouter,
};
