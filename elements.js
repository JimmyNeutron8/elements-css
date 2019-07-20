// Get the tabbed areas
const tabbed_views = document.querySelectorAll('.tabbed-view');

// Add event listeners to each tab button
tabbed_views.forEach(view => {
  const tabs = view.querySelector('.tabs').children;
  const contents = view.querySelectorAll('.tabbed-content');

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (event) => {
      contents.forEach(content => {
        content.classList.add('hidden');
      });

      contents[i].classList.remove('hidden');

      // Prevent default action from occurring
      event.preventDefault();
    });
  }
});
