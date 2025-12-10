import { VercelRequest, VercelResponse } from '@vercel/node';

export default async (_request: VercelRequest, response: VercelResponse): Promise<void | VercelResponse> => {
  return response.status(200).send('OK!');
};
