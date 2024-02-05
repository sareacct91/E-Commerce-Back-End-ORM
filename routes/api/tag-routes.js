const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const data = await Tag.findAll({ include: Product });
    res.status(200).json({ msg: "Sucess", data });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Something went wrong. Try again later' });
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const { id: tag_id } = req.params;
  console.log(tag_id + '\n');

  try {
    const data = await Tag.findByPk(tag_id, { include: Product });

    if (!data) {
      return res.status(404).json({msg: `No Tag found with the id ${tag_id}`});
    }

    res.status(200).json({ msg: 'Success', data });

  } catch (error) {
    res.status(500).json({ msg: 'Something went wrong. Try again later' });
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  const { tag_name } = req.body;

  if (!tag_name) {
    return res.status(400).json({ msg: "Missing tag_name" });
  }

  try {
    const data = await Tag.create({ tag_name });
    res.status(200).json({ msg: "Success", data });

  } catch (error) {
    res.status(500).json({ msg: "Something went wrong. Try again later" });
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const { id: tag_id } = req.params;
  const { tag_name } = req.body;

  if (!tag_name) {
    res.status(400).json({ msg: "Missing tag_name" });
  }

  try {
    const data = await Tag.update({ tag_name }, { where: { id: tag_id } });

    if (!data[0]) {
      return res.status(404).json({ msg: `Nothing was updated with tag id ${tag_id}` });
    }

    res.status(200).json({ msg: 'Success', data });

  } catch (error) {
    res.status(500).json({ msg: "Something went wrong. Try again later" });
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const { id: tag_id } = req.params;

  try {
    const data = await Tag.destroy({ where: { id: tag_id } });

    if (!data) {
      return res.status(404).json({ msg: `No tag found with the id ${tag_id}` });
    }

    res.status(200).json({ msg: 'Success' });

  } catch (error) {
    res.status(500).json({ msg: "Something went wrong. Try again later" });
  }
});

module.exports = router;
