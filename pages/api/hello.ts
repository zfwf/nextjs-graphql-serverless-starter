// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiResponse, NextApiRequest } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' });
};
