

  document.addEventListener('DOMContentLoaded', () => {
    fetch('investors.json')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.querySelector('#investors-table tbody');
        tableBody.innerHTML = ''; // Очищуємо старі записи

        data.forEach(investor => {
          const row = document.createElement('tr');

          row.innerHTML = `
          <td>
            <div class="investor-profile">
              <img src="${investor.logo}" alt="${investor.name}" class="investor-logo">
              <span>${investor.name}</span>
            </div>
          </td>
          <td>${investor.industry}</td>
          <td>${investor.type}</td>
          <td>${investor.amount}</td>
          <td>${investor.stages}</td>
          <td><button class="contact-btn"><i class="fas fa-envelope"></i> Контакт</button></td>
        `;

          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Помилка при зчитуванні інвесторів:', error));
  });
