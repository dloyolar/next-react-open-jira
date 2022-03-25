import { ChangeEvent, useState, useContext } from 'react';
import { Button, TextField, Box } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);
  const { addNewEntry } = useContext(EntriesContext);

  const onTextFieldChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    setIsAddingEntry(false);
    setTouched(false);
    setInputValue('');
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginButton: 1 }}
            placeholder="New entry"
            autoFocus
            multiline
            label="New entry"
            helperText={inputValue.length <= 0 && touched && 'Add new entry'}
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onTextFieldChanges}
            onBlur={() => setTouched(true)}
          />
          <Box display="flex" justifyContent="space-between" marginTop={1}>
            <Button variant="text" onClick={() => setIsAddingEntry(false)}>
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Button
            startIcon={<AddIcon />}
            fullWidth
            variant="outlined"
            onClick={() => setIsAddingEntry(true)}
          >
            Add entry
          </Button>
        </>
      )}
    </Box>
  );
};
