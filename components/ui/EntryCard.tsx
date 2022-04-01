import { Entry } from '../../interfaces';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { DragEvent, FC, useContext } from 'react';
import { UIContext } from '../../context/ui';
import { useRouter } from 'next/router';

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const router = useRouter();
  const { startDragging, stopDragging } = useContext(UIContext);

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('text', entry._id);
    startDragging();
  };

  const onDragEnd = () => {
    stopDragging();
  };

  const onClick = () => router.push(`/entries/${entry._id}`);

  return (
    <Card
      onClick={onClick}
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
