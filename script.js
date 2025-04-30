
  document.querySelectorAll('.strategy-card').forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();

      const title = this.getAttribute('data-title');
      const text = this.getAttribute('data-text');

      document.getElementById('strategyTitle').textContent = title;
      document.getElementById('strategyText').textContent = text;

      document.getElementById('strategyDetails').classList.remove('d-none');
      document.getElementById('strategyDetails').scrollIntoView({ behavior: 'smooth' });
    });
  });

// Show "Defense" by default on page load
window.addEventListener('DOMContentLoaded', () => {
    const firstCard = document.querySelector('.strategy-card');
    if (firstCard) {
      const title = firstCard.getAttribute('data-title');
      const text = firstCard.getAttribute('data-text');
  
      document.getElementById('strategyTitle').textContent = title;
      document.getElementById('strategyText').textContent = text;
  
      document.getElementById('strategyDetails').classList.remove('d-none');
    }
  });
  