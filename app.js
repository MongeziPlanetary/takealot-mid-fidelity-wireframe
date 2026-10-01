// ============ NAVIGATION ============
const history = [];

function show(id, pushHistory = true) {
  const current = document.querySelector('.screen.active');
  if (current && pushHistory && current.id !== id) history.push(current.id);

  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const next = document.getElementById(id);
  if (!next) {
    console.warn('Screen not found:', id);
    return;
  }
  next.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Global click delegation
document.addEventListener('click', e => {
  const target = e.target.closest('[data-goto]');
  if (target) {
    e.preventDefault();
    show(target.dataset.goto);
  }

  const back = e.target.closest('[data-back]');
  if (back) {
    e.preventDefault();
    const prev = history.pop();
    if (prev) show(prev, false);
    else show('welcome', false);
  }
});

// ============ CART ============
let cartCount = 0;
function updateCartBadge() {
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = cartCount);
}

document.getElementById('add-to-cart')?.addEventListener('click', (e) => {
  const btn = e.currentTarget;
  btn.textContent = 'Adding...';
  btn.disabled = true;

  setTimeout(() => {
    cartCount += 1;
    updateCartBadge();
    show('s1-addsuccess');
    btn.textContent = 'Add to cart';
    btn.disabled = false;
  }, 900);
});

// ============ COMPARE ============
let compareItems = 0;
document.querySelectorAll('[data-compare]').forEach(btn => {
  btn.addEventListener('click', () => {
    compareItems += 1;
    document.querySelectorAll('#compare-count, #compare-count-2')
      .forEach(el => el.textContent = compareItems);
    btn.textContent = '✓ Added';
    btn.disabled = true;
    btn.style.opacity = '.6';
  });
});

// ============ SEARCH ============
document.querySelectorAll('[data-search]').forEach(el => {
  el.addEventListener('click', () => {
    const q = el.dataset.search;
    const target = document.getElementById('results-query');
    if (target) target.textContent = q;
    show('s1-results');
  });
});

// Prevent Enter in the search box from reloading the page
const searchInput = document.getElementById('search-input');
if (searchInput) {
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const q = searchInput.textContent.trim() || 'laptop under R8000';
      const target = document.getElementById('results-query');
      if (target) target.textContent = q;
      show('s1-results');
    }
  });
}

// ============ FILTERS ============
document.querySelectorAll('.filter-toggle').forEach(f => {
  f.addEventListener('click', () => f.classList.toggle('on'));
});
document.getElementById('reset-filters')?.addEventListener('click', () => {
  document.querySelectorAll('.filter-toggle').forEach(f => f.classList.remove('on'));
});

// ============ PLACE ORDER ============
document.getElementById('place-order')?.addEventListener('click', () => {
  show('s2-processing');
  setTimeout(() => show('s2-confirm'), 2200);
});

// ============ INIT ============
show('welcome', false);
updateCartBadge();