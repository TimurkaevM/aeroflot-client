import { TextField } from '@material-ui/core';

function Input(props) {
  return (
    <TextField
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
      margin={props.margin}
    />
  );
}

export default Input;
