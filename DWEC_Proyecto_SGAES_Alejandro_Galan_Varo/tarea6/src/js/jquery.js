$(() => {
    const content = $('#content');
    const apiKey = '36f472b41dmsh2dd32c549d11796p15059fjsn4da4a944eaf4'; // Reemplaza con tu clave de API
    const url = 'https://carfax1.p.rapidapi.com/v1/cars';

    const fetchData = () => {
        $.ajax({
            url: url,
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'carfax1.p.rapidapi.com'
            }
        }).done((data) => {
            data.forEach(item => {
                const card = $(`
                    <div class="card">
                        <img src="${item.image}" alt="${item.title}">
                        <h2>${item.title}</h2>
                        <p>${item.text}</p>
                    </div>
                `);
                content.append(card);
            });
        }).fail((jqXHR, textStatus, errorThrown) => {
            console.log('Error en la solicitud AJAX:', textStatus, errorThrown);
        });
    };

    fetchData();
});