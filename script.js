document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('electionChart').getContext('2d');
    
    const data = {
        labels: ['DAD', 'PPP', 'CCCC', 'MCD'],
        datasets: [{
            data: [45, 5, 27, 23],
            backgroundColor: [
                '#2ecc71', // DAD - Green
                '#e74c3c', // PPP - Red
                '#3498db', // CCCC - Blue
                '#f1c40f'  // MCD - Yellow
            ],
            borderWidth: 2,
            borderColor: '#ffffff'
        }]
    };

    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };

    new Chart(ctx, config);
});
