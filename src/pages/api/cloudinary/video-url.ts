import type { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

type Data = {
  url?: string;
  error?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { publicId } = req.query;

  if (!publicId || typeof publicId !== 'string') {
    res.status(400).json({ error: 'Missing publicId' });
    return;
  }

  const url = cloudinary.url(publicId, {
    resource_type: 'video',
    type: 'upload',
    secure: true,
  });

  res.status(200).json({ url });
}
