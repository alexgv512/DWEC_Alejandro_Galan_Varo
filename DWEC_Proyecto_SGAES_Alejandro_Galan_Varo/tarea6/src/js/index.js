document.addEventListener('DOMContentLoaded', () => {
    let page = 1;
    let isLoading = false;

    async function fetchCatPhotos() {
        if (isLoading) return;
        isLoading = true;

        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=20&page=${page}`, {
                method: 'GET',
                headers: {
                    'x-api-key': 'YOUR_CAT_API_KEY'
                }
            });
            const catPhotos = await response.json();
            renderPhotos(catPhotos.map(catPhoto => ({
                url: catPhoto.url,
                title: 'A cute cat'
            })));
            page++;
        } catch (error) {
            console.error('Error al obtener las fotos de gatos:', error);
        } finally {
            isLoading = false;
        }
    }

    function renderPhotos(photos) {
        const container = document.getElementById('content');

        photos.forEach(photo => {
            const card = document.createElement('article');
            card.className = 'card w-full h-full border border-gray-300 rounded-lg overflow-hidden items-center justify-start m-2 shadow-md transition-transform transform hover:scale-105';

            const img = document.createElement('img');
            img.src = photo.url;
            img.alt = photo.title;
            img.className = 'w-full h-full object-cover rounded-t-lg';
            img.style.width = '300px'; // Set fixed width
            img.style.height = '300px'; // Set fixed height

            const title = document.createElement('h3');
            title.className = 'text-center text-lg font-semibold mt-2 text-gray-700';
            title.textContent = photo.title;

            card.appendChild(img);
            card.appendChild(title);
            container.appendChild(card);
        });
    }

    function handleScroll() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && !isLoading) {
            fetchCatPhotos();
        }
    }

    window.addEventListener('scroll', handleScroll);
    fetchCatPhotos();
});
