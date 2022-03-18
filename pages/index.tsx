import type { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';

import { Layout } from '../components/layouts';
import { EntryList } from '../components/ui';

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px )' }}>
            <CardHeader title="Pending" />
            {/* Add new entry */}
            {/* Entries list */}
            <EntryList />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px )' }}>
            <CardHeader title="In Progress" />
            <EntryList />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px )' }}>
            <CardHeader title="Finish" />
            <EntryList />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
