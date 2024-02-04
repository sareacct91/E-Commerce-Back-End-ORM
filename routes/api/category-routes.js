const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const data = await Category.findAll({ include: Product });
    res.status(200).json({ msg: 'Success', data });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Something went wrong. Try again later' });
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const { id: category_id } = req.params;

  try {
    const data = await Category.findByPk(category_id, { include: Product });

    if (!data) {
      res.status(404).json({msg: `No category found with the id ${category_id}`});
    }

    res.status(200).json({ msg: 'Success', data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Something went wrong. Try again later' });
  }
});

router.post('/', async (req, res) => {
  // create a new category
  const { category_name } = req.body;

  if (!category_name) {
    res.status(400).json({ msg: 'No category name given!' });
  }

  try {
    const data = await Category.create({ category_name });

    res.status(200).json({ msg: 'sucess', data });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Something went wrong. Try again later' });
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const { id: category_id } = req.params;
  const { category_name } = req.body;

  try {
    const data = await Category.update({ category_name }, { where: { id: category_id } });

    if (!data) {
      res.status(404).json({msg: `No category found with the id ${category_id}`});
    }

    res.status(200).json({ msg: 'Success', data });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Something went wrong. Try again later' });
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const { id: category_id } = req.params;

  try {
    const data = await Category.destroy({ where: { id: category_id } });

    if (!data) {
      res.status(404).json({msg: `No category found with the id ${category_id}`});
    }

    res.status(200).json({ msg: 'Success', data });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Something went wrong. Try again later' });
  }
});

module.exports = router;
