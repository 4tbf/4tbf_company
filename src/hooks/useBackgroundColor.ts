export const useBackbroundColor = (hoveredProject) => {
  switch (hoveredProject) {
    case '1':
      return '#EFF3FF';
    case '2':
      return '#EAF8F4';
    case '3':
      return '#EFF3FF';
    case '4':
      return '#EAF8F4';
    case '5':
      return '#EFF3FF';
    default:
      return '#FFFFFF';
  }
};
