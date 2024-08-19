import { Router } from 'express';
import cardModels from '../models/cardModels.js';

const router = Router();

router.post('/', async (req, res, next) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }

        const card = new cardModels({ title, description });
        await card.save();
        res.status(201).json(card);
    } catch (err) {
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const cards = await cardModels.find({});
        res.status(200).json(cards);
    } catch (err) {
        next(err);
    }
});

router.get('/:title', async (req, res, next) => {
    try {
        const { title } = req.params;
        const card = await cardModels.findOne({ title });

        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }

        res.status(200).json(card);
    } catch (err) {
        next(err);
    }
});

export default router;
