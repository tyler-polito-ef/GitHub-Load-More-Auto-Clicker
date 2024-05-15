function clickLoadMore() {
  const submitButtons = document.querySelectorAll('button[type="submit"]');
  const loadMoreButtons = Array.from(submitButtons).filter((button) =>
    button.textContent.includes('\n            Load more…\n          ')
  );

  if (loadMoreButtons.length === 0) {
    clearInterval(interval);
    return;
  } else {
    loadMoreButtons.forEach((button) => {
      if (button.textContent.includes('\n            Load more…\n          ')) {
        button.click();
      }
    });
  }
}

// Run the function every 2 seconds to ensure all "Load more" buttons are clicked
const interval = setInterval(clickLoadMore, 2000);
