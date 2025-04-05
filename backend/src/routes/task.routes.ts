import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the API');
});

// Add more route handlers as needed
// e.g., router.post('/data', (req: Request, res: Response) => { ... });

export { router };

