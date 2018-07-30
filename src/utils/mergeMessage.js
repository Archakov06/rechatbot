export default (state, msg) => ({
  messages: [...state.messages, Object.assign({}, msg, { formData: state.formData })],
});
