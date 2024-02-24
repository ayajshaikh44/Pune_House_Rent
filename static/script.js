document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('rentPredictionForm');
    const predictedRentContainer = document.getElementById('predictedRentContainer');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const apiUrl = '/predict_rent';

        // Convert the FormData to an object
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Update content type
            },
            body: JSON.stringify(data) // Send data as JSON
        })
            .then(response => response.json())
            .then(data => {
                predictedRentContainer.innerText = data.Result;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });
});
