import Schema from "validate";

export const schema = new Schema({
  usuari: {
    type: String,
    required: true,
    match: /^[A-Za-z0-9_-]{4,12}$/,
    message:
      'User name must be minimum 4 characters long and up to 12, with letters & numbers and/or "_", "-"',
  },
  claudePas: {
    type: String,
    required: true,
    match: /^[A-Za-z0-9_-]{8}$/,
    message:
      'Password must be 8 characters long, with letters, numbers and/or "_", "-"',
  },
});
