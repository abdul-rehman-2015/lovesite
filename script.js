document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const maleInput = form.querySelector('input[placeholder="Male Name"]');
  const femaleInput = form.querySelector('input[placeholder="Female Message"]');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', (e) => { 
    e.preventDefault(); // Prevent default form submission

    const maleNameRaw = maleInput.value.trim();
    const femaleNameRaw = femaleInput.value.trim();

    if (maleNameRaw && femaleNameRaw) {
      const maleName = maleNameRaw.toUpperCase();
      const femaleName = femaleNameRaw.toUpperCase();

      let lovePercentage;

      // Check if the names match "abdul rehman" and "zainab" (case-insensitive)
      if (
        maleNameRaw.toLowerCase() === "abdul rehman" &&
        femaleNameRaw.toLowerCase() === "zainab"
      ) {
        lovePercentage = 100;
      } else {
        // Otherwise, generate random number between 1 and 100
        lovePercentage = Math.floor(Math.random() * 100) + 1;
      }

      resultDiv.textContent = `${maleName} & ${femaleName}: ${lovePercentage}% LOVE COMPATIBILITY`;
      resultDiv.style.color = '#e91e63';
    } else {
      resultDiv.textContent = 'PLEASE ENTER BOTH NAMES!';
      resultDiv.style.color = 'red';
    }
  });
});
