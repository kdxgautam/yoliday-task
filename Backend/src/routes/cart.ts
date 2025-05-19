import express, { Request, Response,Router } from 'express';
import  db  from '../config/db';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

const router = Router();

// Interface for a project item (adjust fields as per your 'projects' table)
interface Project extends RowDataPacket {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  image_url: string;
}



// Add a project to the cart
router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { project_id } = req.body;

  if (!project_id || typeof project_id !== 'number') {
    res.status(400).json({ error: 'Invalid or missing project_id' });
    return;
  }

  try {
    // Check if project exists before adding
    const [projects]: [Project[], any] = await db.query(
      'SELECT * FROM projects WHERE id = ?',
      [project_id]
    );
    if (projects.length === 0) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }

    // Check if project already in cart to avoid duplicates 
    const [existing]: [RowDataPacket[], any] = await db.query(
      'SELECT * FROM cart WHERE project_id = ?',
      [project_id]
    );
    if (existing.length > 0) {
      res.status(409).json({ error: 'Project already in cart' });
      return;
    }

    // Insert into cart
    const [result]: [ResultSetHeader, any] = await db.query(
      'INSERT INTO cart (project_id) VALUES (?)',
      [project_id]
    );

    res.status(201).json({ message: 'Project added to cart', insertId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add project to cart' });
  }
});




// Get all projects in the cart
router.get('/', async (req: Request, res: Response) => {
  try {
    
    const [cartProjects]: [Project[], any] = await db.query(
      `SELECT p.* FROM projects p
       JOIN cart c ON p.id = c.project_id`
    );

    res.json({ projects: cartProjects });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch cart projects' });
  }
});

export default router;
