import { List, Paper } from '@mui/material';
import { EntryCard } from './';

export const EntryList = () => {
  return (
    // TODO: DROP
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 180px)',
          overflow: 'scroll',
          backgroundColor: 'transparent',
          padding: '1px 5px',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {/* // TODO: if is dragging */}
        <List sx={{ opacity: 1 }}>
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
