const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
    const TagData = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(TagData)
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/:id', async (req, res) => {
  try {
    const TagId = await Tag.findByPk(req.params.id, {
      include: [{ model: Product}]
    });
    res.status(200).json(TagId)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const TagAdd = await Tag.create(req.body);
    res.status(200).json(TagAdd);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagUpdate = await Tag.update(req.body, {
      where: {
        id: req.params.id
      },
    })
    res.status(200).json(tagUpdate);
  } catch (err) {
    console.log(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tagDelete = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(tagDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
