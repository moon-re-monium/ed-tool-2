function calculate() {
  const stockInput = document.getElementById('stock');
  const totalAmountInput = document.getElementById('totalAmount');
  const resultDiv = document.getElementById('result');

  const stock = parseInt(stockInput.value);
  const totalAmount = parseInt(totalAmountInput.value);

  if (isNaN(stock) || isNaN(totalAmount)) {
    resultDiv.innerHTML = '<p class="text-danger">入力値が無効です。</p>';
    return;
  }

  let unitPriceA, unitPriceB, quantityA, quantityB;

  if (totalAmount % stock === 0) {
    unitPriceA = totalAmount / stock;
    quantityA = stock - 1;

    resultDiv.innerHTML = `
      <p class="mb-2">入庫</p>
      <p class="resultT">A: ${unitPriceA}円が${quantityA}枚</p>
    `;
  } else {
    unitPriceA = Math.floor(totalAmount / (stock - 1));
    quantityA = stock - 1;

    unitPriceB = totalAmount - unitPriceA * quantityA;
    quantityB = 1;

    resultDiv.innerHTML = `
      <p class="mb-2">入庫-----------------</p>
      <p class="resultT">A: ${unitPriceA}円が${quantityA}枚</p>
      <p class="resultT">B: ${unitPriceB}円が${quantityB}枚</p>
    `;
  }
}
