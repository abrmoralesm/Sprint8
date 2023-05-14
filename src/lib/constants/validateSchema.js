import Schema from "validate";

export const schema = new Schema({
  user: {
    type: String,
    required: true,
    match: /^[A-Za-z0-9_-]{4,12}$/,
    message:
      'User name must be minimum 4 characters long and up to 12, with letters & numbers and/or "_", "-"',
  },
  keyPass: {
    type: String,
    required: true,
    match: /^[A-Za-z0-9_-]{8}$/,
    message:
      'Password must be 8 characters long, with letters, numbers and/or "_", "-"',
  },
});

export const errorUser = schema.props.user.messages.default;
export const errorKeyPass = schema.props.keyPass.messages.default;
