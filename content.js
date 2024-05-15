function clickLoadMore() {
  const submitButtons = document.querySelectorAll('button[type="submit"]');
  const loadMoreButtons = Array.from(submitButtons).filter((button) =>
    button.textContent.includes('\n            Load more…\n          ')
  );

  if (loadMoreButtons.length > 0) {
    loadMoreButtons.forEach((button) => {
      button.click();
    });
  }
}

// Run the function every 1 seconds to ensure all "Load more" buttons are clicked
setInterval(clickLoadMore, 1000);
