export default id => {
  switch (id) {
    case 'yourname':
    case 'yourold':
      return id.replace('your', '');
    default:
      return null;
  }
};
