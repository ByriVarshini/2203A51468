const WINDOW_SIZE = 10;
let currentWindow = [];

export function updateWindow(newNumbers) {
  const prevState = [...currentWindow];

  // Add only unique new numbers (ignore duplicates)
  newNumbers.forEach((num) => {
    if (!currentWindow.includes(num)) {
      currentWindow.push(num);
    }
  });

  // Trim to window size
  if (currentWindow.length > WINDOW_SIZE) {
    currentWindow = currentWindow.slice(currentWindow.length - WINDOW_SIZE);
  }

  // Calculate average
  const avg =
    currentWindow.length === 0
      ? 0
      : (currentWindow.reduce((a, b) => a + b, 0) / currentWindow.length).toFixed(2);

  return {
    windowPrevState: prevState,
    windowCurrState: [...currentWindow],
    numbers: newNumbers,
    avg: parseFloat(avg)
  };
}
