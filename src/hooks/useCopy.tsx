const useCopy = (text: string): void => {
  navigator.clipboard.writeText(text);
};

export default useCopy;
