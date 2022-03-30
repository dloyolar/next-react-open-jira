interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pending: description 1',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'In Progress: description 2',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description: 'Finished: description 3',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};
