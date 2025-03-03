ocument.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const apiKey = '36f472b41dmsh2dd32c549d11796p15059fjsn4da4a944eaf4'; // Reemplaza con tu clave de API
    const url = 'https://carfax1.p.rapidapi.com/v1/cars';

    const fetchData = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': apiKey,
                    'X-RapidAPI-Host': 'carfax1.p.rapidapi.com'
                }
            });
            const data = await response.json();
            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <h2>${item.title}</h2>
                    <p>${item.text}</p>
                `;
                content.appendChild(card);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            console.log('Fetch operation completed.');
        }
    };

    fetchData();
});