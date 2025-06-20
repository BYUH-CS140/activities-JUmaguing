document.addEventListener('DOMContentLoaded', function() {

    // Mock Database of Manga
    const mangaData = [
        {
            id: 1,
            title: "Lookism",
            author: "PARK Tae Jun",
            tags: "Comedy, Drama, School Life",
            type: "Manhwa",
            status: "Ongoing",
            released: "2014",
            coverImage: "https://placehold.co/300x450/2d3748/ffffff?text=Lookism",
            description: "Daniel is an unattractive loner who wakes up in a different body. Now tall, handsome, and cooler than ever in his new form, Daniel aims to achieve everything he couldn't before. How far will he go to keep his body... and his secrets?",
            chapters: [ { name: "Chapter 560", date: "14h" }, { name: "Chapter 559", date: "Jun 13" }, { name: "Chapter 558", date: "Jun 6" } ]
        },
        {
            id: 2,
            title: "One-Punch Man",
            author: "ONE, Murata Yusuke",
            tags: "Action, Comedy, Sci-Fi, Superhero",
            type: "Manga",
            status: "Ongoing",
            released: "2012",
            coverImage: "https://placehold.co/300x450/e53e3e/ffffff?text=One-Punch+Man",
            description: "The story of Saitama, a hero who can defeat any enemy with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge in his fight against evil.",
            chapters: [ { name: "Chapter 215", date: "Jun 15" }, { name: "Chapter 214", date: "May 20" }, { name: "Chapter 213", date: "Apr 28" } ]
        },
        {
            id: 3,
            title: "Solo Leveling",
            author: "Chugong, Dubu",
            tags: "Action, Fantasy, Adventure",
            type: "Manhwa",
            status: "Completed",
            released: "2018",
            coverImage: "https://placehold.co/300x450/4299e1/ffffff?text=Solo+Leveling",
            description: "In a world where hunters must battle deadly monsters to protect humanity, Sung Jinwoo, a notoriously weak hunter, finds himself in a struggle for survival. But when he is chosen by a mysterious 'System' as its sole player, he gains the unique ability to level up, leading him on a journey to become the world's greatest hunter.",
            chapters: [ { name: "Chapter 179", date: "Dec 29, 2021" }, { name: "Chapter 178", date: "Dec 22, 2021" }, { name: "Chapter 177", date: "Dec 15, 2021" } ]
        },
        {
            id: 4,
            title: "Berserk",
            author: "Miura Kentaro",
            tags: "Action, Adventure, Dark Fantasy, Horror",
            type: "Manga",
            status: "Ongoing",
            released: "1989",
            coverImage: "https://placehold.co/300x450/1a202c/ffffff?text=Berserk",
            description: "Guts, a former mercenary now known as the \"Black Swordsman,\" is out for revenge. After a tumultuous childhood, he finally finds someone he respects and believes he can trust, only to have everything taken away from him when the person he looks up to sacrifices his whole band of mercenaries in order to obtain god-like power.",
            chapters: [ { name: "Chapter 375", date: "May 26" }, { name: "Chapter 374", date: "Apr 28" }, { name: "Chapter 373", date: "Mar 24" } ]
        }
    ];

    // --- Function to populate the homepage manga grid ---
    const popularMangaGrid = document.getElementById('popular-manga-grid');
    if (popularMangaGrid) {
        mangaData.forEach(manga => {
            const mangaLink = document.createElement('a');
            mangaLink.href = '#';
            mangaLink.className = 'manga-item-link';
            mangaLink.setAttribute('data-id', manga.id); // Set data-id to find manga later

            const mangaItemDiv = document.createElement('div');
            mangaItemDiv.className = 'manga-item';

            const img = document.createElement('img');
            img.src = manga.coverImage.replace('300x450', '200x300'); // Use smaller image for grid
            img.alt = `${manga.title} Cover`;

            const title = document.createElement('h3');
            title.textContent = manga.title;
            
            mangaItemDiv.appendChild(img);
            mangaItemDiv.appendChild(title);
            mangaLink.appendChild(mangaItemDiv);
            popularMangaGrid.appendChild(mangaLink);
        });
    }

    // --- Event Delegation for Clicks ---
    document.addEventListener('click', function(event) {
        const target = event.target;

        // Random link in the main navigation
        if (target.matches('#random-link')) {
            event.preventDefault();
            redirectToRandomManga();
        }

        const mangaLink = target.closest('.manga-item-link');
        if (mangaLink) {
            event.preventDefault();

            // If it's a random trigger (like on the subscriptions page)
            if (mangaLink.classList.contains('random-manga-trigger')) {
                redirectToRandomManga();
            } 
            // If it's a specific manga link (from the homepage)
            else {
                const mangaId = mangaLink.getAttribute('data-id');
                const selectedManga = mangaData.find(m => m.id == mangaId);
                if (selectedManga) {
                    localStorage.setItem('selectedManga', JSON.stringify(selectedManga));
                    window.location.href = 'mangadetails.html';
                }
            }
        }
    });

    function redirectToRandomManga() {
        const randomIndex = Math.floor(Math.random() * mangaData.length);
        const randomManga = mangaData[randomIndex];
        localStorage.setItem('selectedManga', JSON.stringify(randomManga));
        window.location.href = 'mangadetails.html';
    }


    // --- Form Submission Handling (for demonstration) ---
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Login functionality is not implemented yet.');
        });
    }

    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Search functionality is not implemented yet.');
        });
    }
});
