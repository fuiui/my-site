// Read the existing collection: each quotation has only one source of truth.
const quoteCards = Array.from(document.querySelectorAll('.quote-list > .quote'));
const randomPanel = document.querySelector('.random-quote');
const randomContent = document.getElementById('random-content');
const nextButton = document.getElementById('next-quote');
let previousIndex = -1;

function showRandomQuote() {
  if (quoteCards.length === 0) return;

  // Exclude the current card, so even rapid clicks produce a different quote.
  const candidates = quoteCards.filter((card, index) => index !== previousIndex);
  const selected = candidates.length
    ? candidates[Math.floor(Math.random() * candidates.length)]
    : quoteCards[0];
  previousIndex = quoteCards.indexOf(selected);

  const quotation = selected.querySelector('blockquote').cloneNode(true);
  const source = selected.querySelector('.quote-source').cloneNode(true);
  const count = document.createElement('p');
  count.className = 'random-count';
  count.textContent = `Quote ${previousIndex + 1} of ${quoteCards.length}`;
  // Copy content only, not the card's heading or its unique HTML IDs.
  randomContent.replaceChildren(count, quotation, source);
}

if (quoteCards.length && randomPanel && randomContent && nextButton) {
  showRandomQuote();
  randomPanel.hidden = false;
  nextButton.disabled = quoteCards.length < 2;
  nextButton.addEventListener('click', showRandomQuote);
}
