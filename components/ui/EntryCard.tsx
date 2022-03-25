import { Entry } from '../../interfaces';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { DragEvent, FC } from 'react';

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('text', entry._id);
    // TODO: modify state to indicate dragging
  };

  const onDragEnd = () => {
    // TODO: cancel dragging
  };

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}
        >
          <Typography variant="body2">30 minutes</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
