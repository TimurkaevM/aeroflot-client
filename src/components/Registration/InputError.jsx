import { TextField } from '@material-ui/core';

function InputError(props) {
  return (
    <TextField
      error
      helperText={props.helperText}
      autoComplete={props.autoComplete}
      name={props.name}
      variant="outlined"
      required
      fullWidth
      id={props.id}
      label={props.id}
      autoFocus
      value={props.value}
      onChange={props.onChange}
      type={props.id}
    />
  );
}

export default InputError;
