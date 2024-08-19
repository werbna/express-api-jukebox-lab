const Track = require('../models/track')
const express = require('express');
const router = express.Router();

router.post('/', async (req,res) => {
  try {
    const createdTrack = await Track.create(req.body);
    res.status (201).json(createdTrack)
  } catch (err) {
    res.status(500).json({ Error: err.message })
  }
})

router.get('/', async (req,res) => {
  try {
    const showTracks = await Track.find();
    res.status(200).json(showTracks)
  } catch (err) {
    res.status(500).json({ Error: err.message })
  }
})

router.get('/:trackId', async (req,res) => {
  try {
    const showTrack = await Track.findById(req.params.trackId)
    res.status(200).json(showTrack)
  } catch (err) {
    res.status(500).json({ Error: err.message })
  }
})

router.put('/:trackId', async (req,res) => {
  try {
    const updateTrack = await Track.findByIdAndUpdate(req.params.trackId, req.body, {
      new:true
    })
    res.status(200).json(updateTrack)
  } catch (err) {
    res.status(500).json({ Error: err.message })
  }
})

router.delete('/:trackId', async (req,res) => {
  try {
    const removeTrack = await Track.findByIdAndDelete(req.params.trackId)
    res.status(200).json(removeTrack)
  } catch (err) {
    res.status(500).json({ Error: err.message })
  }
})

module.exports = router;