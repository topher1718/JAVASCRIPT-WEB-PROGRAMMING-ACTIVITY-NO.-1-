var numbers = [];

      function addNumber() {
        var input = document.getElementById("numberInput");
        var number = parseInt(input.value);
        if (!isNaN(number)) {
          numbers.push(number);
          showNumbers();
          showTotalButton();
        } else {
          alert("Please enter a whole number only");
        }
      }

      function showNumbers() {
        var list = document.getElementById("numberList");
        list.innerHTML = "";
        for (var i = 0; i < numbers.length; i++) {
          var listItem = document.createElement("div");
          listItem.innerHTML = numbers[i] + " (" + (numbers[i] % 2 === 0 ? "even" : "odd") + ")" + " <button onclick='editNumber(" + i + ")'>Edit</button> <button onclick='deleteNumber(" + i + ")'>Delete</button>";
          list.appendChild(listItem);
        }
      }

      function clearInput() {
        var input = document.getElementById("numberInput");
        input.value = "";
      }

      function deleteNumber(index) {
        numbers.splice(index, 1);
        showNumbers();
        showTotalButton();
      }

      function editNumber(index) {
        var newNumber = prompt("Enter a new number", numbers[index]);
        if (newNumber !== null && !isNaN(newNumber)) {
          numbers[index] = parseInt(newNumber);
          showNumbers();
          showTotalButton();
        } else if (newNumber !== null) {
          alert("Accepting whiole numbers only!");
        }
      }

      function calculateTotal() {
        var total = 0;
        for (var i = 0; i < numbers.length; i++) {
          total += numbers[i];
        }
        var totalContainer = document.getElementById("totalContainer");
        totalContainer.innerHTML = "TOTAL " + total;
      }


      function showTotalButton() {
        var totalButtonContainer = document.getElementById("totalButtonContainer");
        if (numbers.length > 0) {
          var totalButton = document.createElement("button");
          totalButton.innerHTML = "Get Total";
          totalButton.onclick = calculateTotal;
          totalButtonContainer.innerHTML = "";
          totalButtonContainer.appendChild(totalButton);
        } else {
          totalButtonContainer.innerHTML = "";
        }
      }

      function clearList() {
  numbers = [];
  showNumbers();
  document.getElementById("totalContainer").innerHTML = "";
}