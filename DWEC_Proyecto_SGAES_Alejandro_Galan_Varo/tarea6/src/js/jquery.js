$(() => {
    let page = 1;
    let isLoading = false;
    const content = $('#content');

    function fetchCatPhotos() {
        if (isLoading) return;
        isLoading = true;

        $.ajax({
            url: `https://api.thecatapi.com/v1/images/search?limit=20&page=${page}`,
            method: 'GET',
            
            success: function(catPhotos) {
                renderPhotos(catPhotos.map(catPhoto => ({
                    url: catPhoto.url,
                    title: 'A cute cat'
                })));
                page++;
            },
            error: function(error) {
                console.error('Error al obtener las fotos de gatos:', error);
            },
            complete: function() {
                isLoading = false;
            }
        });
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
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 500 && !isLoading) {
            fetchCatPhotos();
        }
    }

    $(window).on('scroll', handleScroll);
    $(window).on('load', fetchCatPhotos);
});
