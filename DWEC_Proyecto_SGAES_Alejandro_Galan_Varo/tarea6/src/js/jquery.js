$(() => {
    let page = 1;
    let isLoading = false;
    const content = $('#content');
    const apiKey = 'YOUR_CAT_API_KEY'; // Reemplaza con tu clave de API de The Cat API

    async function fetchCatPhotos() {
        if (isLoading) return;
        isLoading = true;

        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=20&page=${page}`, {
                method: 'GET',
                headers: {
                    'x-api-key': apiKey
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
        photos.forEach(photo => {
            const card = $(`
                <article class="card border border-gray-300 rounded-lg overflow-hidden items-center justify-start m-2 shadow-md transition-transform">
                    <img src="${photo.url}" alt="${photo.title}" class="w-full object-cover rounded-t-lg" style="height: 200px;">
                    <div class="p-4 text-center">
                        <h3 class="text-lg font-semibold mt-2 text-gray-700">${photo.title}</h3>
                    </div>
                </article>
            `);
            content.append(card);
        });
    }

    function handleScroll() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && !isLoading) {
            fetchCatPhotos();
        }
    }

    $(window).on('scroll', handleScroll);
    fetchCatPhotos();
});
