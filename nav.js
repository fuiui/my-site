// The three pages share these fragments, so each is written only once.
async function loadPart(file, targetId) {
  const target = document.getElementById(targetId);
  try {
    // Browsers block this request when the page is opened using file://.
    if (window.location.protocol === 'file:') {
      throw new Error('Open the site with Live Server or a local HTTP server.');
    }
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Could not load ${file}: HTTP ${response.status}`);
    }
    // These are our own static HTML fragments, not user-submitted content.
    target.innerHTML = await response.text();
    return true;
  } catch (error) {
    const message = document.createElement('p');
    message.className = 'part-error';
    message.setAttribute('role', 'status');
    message.textContent = window.location.protocol === 'file:'
      ? 'Open this folder with Live Server to load the shared navigation and footer.'
      : 'This part of the page could not load. Please refresh to try again.';
    target.replaceChildren(message);
    console.error(error);
    return false;
  }
}

function markCurrentPage() {
  // The homepage may be visited as either /index.html or the folder's / URL.
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#site-header nav a').forEach(link => {
    const destination = new URL(link.getAttribute('href'), window.location.href);
    // About, Learning and Resources are sections, not separate pages.
    if (!destination.hash && destination.pathname.split('/').pop() === currentFile) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

async function loadLayout() {
  const [navLoaded] = await Promise.all([
    loadPart('nav.html', 'site-header'),
    loadPart('footer.html', 'site-footer')
  ]);
  if (navLoaded) markCurrentPage();

  // Restore an incoming section link after the header has taken up its space.
  const section = document.getElementById(window.location.hash.slice(1));
  if (section) section.scrollIntoView();
}

loadLayout();
