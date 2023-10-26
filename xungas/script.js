const movies = [
    {
        name: "Vingadores Ultimato",
        image: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg",
        date: "26/10/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 10.00,
        ticketsAvailable: 50
    },
    {
        name: "Oppenheimer",
        image: "https://jardimdasamericas.com.br/uploads/2023/07/capa-filme-oppenheimer-4a9d6-large.jpg",
        date: "27/10/2023",
        isReleased: false,
        releaseDate: "15/10/2023",
        price: 12.00,
        ticketsAvailable: 30
    },
    {
        name: "Super Mario Bros",
        image: "https://cdn.awsli.com.br/800x800/1610/1610163/produto/208807923/poster-super-mario-bros-o-filme-i-f04111d3.jpg",
        date: "28/10/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 9.50,
        ticketsAvailable: 40
    },
    {
        name: "Todo Mundo em Pânico",
        image: "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/28/03/19873867.jpg",
        isReleased: false,
        releaseDate: "15/10/2023",
        price: 11.00,
        ticketsAvailable: 35
    },
    {
        name: "O Terror da Criançada",
        image: "https://preview.redd.it/novo-filme-da-pixar-v0-fvlmfwfabmtb1.jpg?auto=webp&s=3267795e7690310509118e124925bd2ce9611c6d",
        date: "30/10/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 10.50,
        ticketsAvailable: 45
    },
    {
        name: "'Caust'",
        image: "https://www.piratesandprincesses.net/wp-content/uploads/2023/10/caust.png",
        date: "31/10/2023",
        isReleased: false,
        releaseDate: "15/10/2023",
        price: 11.50,
        ticketsAvailable: 25
    },
    {
        name: "One Jar",
        image: "https://preview.redd.it/theres-nothing-like-the-wholesome-story-of-a-guy-his-jar-v0-g9tl0l4zoipb1.jpg?width=640&crop=smart&auto=webp&s=9c4733e9119076c03d3d6155b943ff1208e91d44",
        date: "01/11/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 10.00,
        ticketsAvailable: 55
    },
    {
        name: "O Chamado",
        image: "https://caras.uol.com.br/media/_versions/legacy/2017/01/24/img-755109-o-chamado-completa-15-anos-veja-como-estao-os-atores20170124091485258584_widexl.jpg",
        date: "02/11/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 12.00,
        ticketsAvailable: 60
    },
    {
        name: "Grávida de Taubaté",
        image: "https://i0.wp.com/likemagazine.com.br/midias/2023/10/Filme-da-gravida-de-taubate-em-animacao-Disney-Pixar-Temos-tambem.jpg?resize=574%2C850&ssl=1",
        date: "03/11/2023",
        isReleased: false,
        releaseDate: "15/10/2023",
        price: 11.00,
        ticketsAvailable: 35
    },
    {
        name: "Hereditário",
        image: "https://i0.wp.com/cinestera.com.br/wp-content/uploads/2023/01/Hereditario.jpeg?fit=1280%2C720&ssl=1",
        date: "04/11/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 9.50,
        ticketsAvailable: 40
    },
    {
        name: "Cai Fora",
        image: "https://miro.medium.com/v2/resize:fit:1013/1*Y1YsOwrkJkcxs65B8AEMQw.jpeg",
        date: "26/10/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 10.00,
        ticketsAvailable: 50
    },
    {
        name: "Annabelle",
        image: "https://proxy.olhardigital.com.br/wp-content/uploads/2023/01/Annabelle-1024x506.png",
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
