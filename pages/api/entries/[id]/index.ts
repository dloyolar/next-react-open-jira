import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../database';
import { Entry } from '../../../../models';
import { IEntry } from '../../../../models/Entry';

type Data =
  | {
      message: string;
    }
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res);
    case 'GET':
      return getEntryById(req, res);
    default:
      return res.status(400).json({ message: 'Method doesnt exists' });
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  await db.connect();

  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(404).json({ message: 'Entry not found' });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true }
    );
    await db.disconnect();
    res.status(200).json(updatedEntry!);
  } catch (error: any) {
    console.log(error);
    await db.disconnect();
    res.status(400).json({ message: error.errors.status.message });
  }
};

const getEntryById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { id } = req.query;
  await db.connect();

  const entry = await Entry.findById(id);

  if (!entry) {
    await db.disconnect();
    return res.status(404).json({ message: 'Entry not found' });
  }

  await db.disconnect();
  res.status(200).json(entry);
};
