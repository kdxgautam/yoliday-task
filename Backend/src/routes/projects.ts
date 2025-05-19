import { Router } from 'express';
import db from '../config/db';
import { RowDataPacket } from 'mysql2';


const router = Router()


interface CountResult extends RowDataPacket {
  total: number;
}


router.get('/', async (req, res) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;

    try {
        const [projects] = await db.query('SELECT * FROM projects LIMIT ? OFFSET ?', [limit, offset]);
        const [rows] = await db.query<CountResult[]>('SELECT COUNT(*) AS total FROM projects');
        const total = rows[0].total;

        res.json({ page, limit, total, projects });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});




export default router