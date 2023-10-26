const movies = [
    {
        name: "Centopéia-Humana",
        image: "https://i.kym-cdn.com/photos/images/original/002/685/516/683.jpg",
        date: "26/10/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 10.00,
        ticketsAvailable: 50
    },
    {
        name: "Procurando-Osama",
        image: "https://preview.redd.it/4p0699ae26p91.jpg?width=640&crop=smart&auto=webp&s=1c588bd4185d982c302e9f3464b9e82bf38112a3",
        date: "27/10/2023",
        isReleased: false,
        releaseDate: "15/10/2023",
        price: 12.00,
        ticketsAvailable: 30
    },
    {
        name: "Klux",
        image: "https://www.moneyreport.com.br/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-10-at-14.07.12-692x1024.jpeg",
        date: "28/10/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 9.50,
        ticketsAvailable: 40
    },
    {
        name: "Respire",
        image: "https://i.kym-cdn.com/photos/images/original/002/676/719/bdb.jpg",
        isReleased: false,
        releaseDate: "15/10/2023",
        price: 11.00,
        ticketsAvailable: 35
    },
    {
        name: "Raulzito",
        image: "https://preview.redd.it/novo-filme-da-pixar-v0-fvlmfwfabmtb1.jpg?auto=webp&s=3267795e7690310509118e124925bd2ce9611c6d",
        date: "30/10/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 10.50,
        ticketsAvailable: 45
    },
    {
        name: "'Caust",
        image: "https://www.piratesandprincesses.net/wp-content/uploads/2023/10/caust.png",
        date: "31/10/2023",
        isReleased: false,
        releaseDate: "15/10/2023",
        price: 11.50,
        ticketsAvailable: 25
    },
    {
        name: "Um-Pote",
        image: "https://preview.redd.it/theres-nothing-like-the-wholesome-story-of-a-guy-his-jar-v0-g9tl0l4zoipb1.jpg?width=640&crop=smart&auto=webp&s=9c4733e9119076c03d3d6155b943ff1208e91d44",
        date: "01/11/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 10.00,
        ticketsAvailable: 55
    },
    {
        name: "'Nam",
        image: "https://preview.redd.it/9gffp8ae26p91.jpg?width=640&crop=smart&auto=webp&s=0661f9f5d17deabaaedbe666a7393f84e1303fff",
        date: "02/11/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 12.00,
        ticketsAvailable: 60
    },
    {
        name: "A Vida de Mia",
        image: "https://preview.redd.it/xfl80aae26p91.jpg?width=640&crop=smart&auto=webp&s=ab3cb9d9bfbbece097f9e9a63f27d9a1337a6a89",
        date: "03/11/2023",
        isReleased: false,
        releaseDate: "15/10/2023",
        price: 11.00,
        ticketsAvailable: 35
    },
    {
        name: "Raluca",
        image: "https://i.ytimg.com/vi/3i_8O2W9Hzs/maxresdefault.jpg",
        date: "04/11/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 9.50,
        ticketsAvailable: 40
    },
    {
        name: "CupCake",
        image: "https://preview.redd.it/send-me-your-best-disney-pixar-ai-memes-v0-s6rnw5vdm0ub1.jpg?width=640&crop=smart&auto=webp&s=62ff52e3cb52a72c2db5a47253b5b6f3ca1c0a2a",
        date: "26/10/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 10.00,
        ticketsAvailable: 50
    },
    {
        name: "Among Us",
        image: "https://i0.wp.com/www.piratesandprincesses.net/wp-content/uploads/2023/10/disney-pixar-among-us.jpg?fit=888%2C652&ssl=1",
        date: "26/10/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 10.00,
        ticketsAvailable: 50
    },
];

        const movieList = document.getElementById("movie-list");

        // Adicionar cada filme à lista
        movies.forEach(movie => {
            const card = document.createElement("div");
            card.classList.add("movie-card");

            const image = document.createElement("img");
            image.src = movie.image;
            image.alt = movie.name;
            image.classList.add("movie-image");

            const name = document.createElement("h2");
            name.textContent = movie.name;

            const date = document.createElement("p");
            date.textContent = "Data: " + movie.date;

            const release = document.createElement("p");
            if (movie.isReleased) {
                release.textContent = "Lançado em: " + movie.releaseDate;
            } else {
                release.textContent = "Lançamento em: " + movie.releaseDate;
            }

            const price = document.createElement("p");
            price.textContent = "Preço: R$" + movie.price.toFixed(2);

            const tickets = document.createElement("p");
            tickets.textContent = "Ingressos Disponíveis: " + movie.ticketsAvailable;

            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(date);
            card.appendChild(release);
            card.appendChild(price);
            card.appendChild(tickets);

            movieList.appendChild(card);
        });
