  // Function to handle voting
        function vote() {
            var selectedOption = document.querySelector('input[name="color"]:checked');
            var customOption = document.getElementById('customOption');
            var option;
            if (selectedOption && selectedOption.value !== 'custom')
             {
                option = selectedOption.value;
            } 
            else if (customOption.value.trim() !== '')
             {
                option = customOption.value.trim();
            } 
            else
             {
                alert("Please select an option to vote.");
                return;
            }

            var votes = localStorage.getItem(option) || 0;
            votes++;
            localStorage.setItem(option, votes);
            showResults();
        }


        function changeLabel() {
            var button = document.getElementById("myButton");
            button.innerHTML = "18 degrees";
          }

        // Function to show results
        function showResults() {
            var resultsDiv = document.getElementById('poll-results');
            resultsDiv.innerHTML = '';
            Object.keys(localStorage).forEach(function(key) {
                if (key !== 'length') {
                    var votes = localStorage.getItem(key);
                    var result = document.createElement('div');
                    result.textContent = key + ': ' + votes + ' votes';
                    resultsDiv.appendChild(result);
                }
            });
        }

        // Show initial results
        showResults();