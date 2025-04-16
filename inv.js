  document.addEventListener('DOMContentLoaded', function() {
  // Фільтрація інвесторів
  const searchBtn = document.querySelector('.search-btn');
  searchBtn.addEventListener('click', function() {
  const industry = document.getElementById('industry-filter').value;
  const amount = document.getElementById('amount-filter').value;
  alert(`Застосовано фільтри: Сфера - ${industry}, Сума - ${amount}`);
});

  // Кнопки контакту
  const contactBtns = document.querySelectorAll('.contact-btn');
  contactBtns.forEach(btn => {
  btn.addEventListener('click', function() {
  const investorName = this.closest('tr').querySelector('.investor-profile span').textContent;
  alert(`Запит на контакт відправлено до ${investorName}`);
});
});
});
