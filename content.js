function clickLoadMore() {
  const submitButtons = document.querySelectorAll('button[type="submit"]');
  const loadMoreButtons = Array.from(submitButtons).filter((button) => {
    const buttonText = button.textContent.trim();
    return buttonText === 'Load more…';
  });

  if (loadMoreButtons.length > 0) {
    loadMoreButtons.forEach((button) => {
      button.click();
    });
  }
}

// Run the function every 1 seconds to ensure all "Load more" buttons are clicked
setInterval(clickLoadMore, 1000);
