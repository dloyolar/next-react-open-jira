import { Button, TextField, Box } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      <Button startIcon={<AddIcon />} fullWidth variant="outlined">
        Add entry
      </Button>
      <TextField
        fullWidth
        sx={{ marginTop: 2, marginButton: 1 }}
        placeholder="New entry"
        autoFocus
        multiline
        label="New entry"
        helperText="Add new entry"
      />
      <Box display="flex" justifyContent="space-between">
        <Button variant="text">Cancel</Button>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<SaveOutlinedIcon />}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};
