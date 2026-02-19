import type { Movie } from "../types/movie";

export const TMDB_BASE_URL = "https://image.tmdb.org/t/p/original";

export const realMovies: Record<string, Movie[]> = {
    originals: [
        {
            id: 66732,
            name: "Stranger Things",
            original_name: "Stranger Things",
            overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
            backdrop_path: "/56v2KjBlU4XaOv9rVYkJu64HIIV.jpg",
            poster_path: "/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", // S4 poster
        },
        {
            id: 63174,
            name: "Lucifer",
            original_name: "Lucifer",
            overview: "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals.",
            backdrop_path: "/aDBRtunw49UF4XmqeBeCNjZh0VF.jpg",
            poster_path: "/ekZobWkZvpsyGuBWLqX70jE00XQ.jpg",
        },
        {
            id: 110492,
            name: "Peaky Blinders",
            original_name: "Peaky Blinders",
            overview: "A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world.",
            backdrop_path: "/2E6pIbJien7B9yWpazVCL97Rwzh.jpg",
            poster_path: "/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
        },
        {
            id: 71446,
            name: "Money Heist",
            original_name: "La Casa de Papel",
            overview: "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose.",
            backdrop_path: "/gFZriCkpJYsFtUpTkRpMrensE5A.jpg",
            poster_path: "/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
        },
        {
            id: 119051,
            name: "Wednesday",
            original_name: "Wednesday",
            overview: "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new and very tangled relationships.",
            backdrop_path: "/iHSwvRVsRyxpX787C4BNveiuDmn.jpg",
            poster_path: "/9PFonBhy4cQy7Jz20NpMygczOkv.jpg"
        }
    ],
    trending: [
        {
            id: 634649,
            title: "Spider-Man: No Way Home",
            overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
            backdrop_path: "/14QbnygCuq0DwZSezTnrMYxCUBk.jpg",
            poster_path: "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
        },
        {
            id: 414906,
            title: "The Batman",
            overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
            backdrop_path: "/tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg",
            poster_path: "/74xTEgt7R36Fpooo50x9TfdLnVu.jpg",
        },
        {
            id: 299534,
            title: "Avengers: Endgame",
            overview: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions in this ultimate showdown.",
            backdrop_path: "/orJi0Wsf1IwqnmVtOA3OOvIVugx.jpg",
            poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
        },
        {
            id: 157336,
            title: "Interstellar",
            overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
            backdrop_path: "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
            poster_path: "/gEU2QniL6C8zt75u92Yna9FmuJB.jpg"
        },
        {
            id: 27205,
            title: "Inception",
            overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
            backdrop_path: "/8ZTVqvKDQ8emSGUEMjl54yg9D6M.jpg",
            poster_path: "/9gk7admal4zl248LOkx1tQfU1Pa.jpg"
        }

    ],
    topRated: [
        {
            id: 278,
            title: "The Shawshank Redemption",
            overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
            backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
            poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        },
        {
            id: 238,
            title: "The Godfather",
            overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
            backdrop_path: "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
            poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        },
        {
            id: 240,
            title: "The Godfather Part II",
            overview: "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
            backdrop_path: "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
            poster_path: "/hek3koDUyRLMI7nItsyQy9oic3f.jpg"
        }
    ],
    action: [
        {
            id: 76341,
            title: "Mad Max: Fury Road",
            overview: "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
            backdrop_path: "/hA5pK8ku2TjJ2tXNn6aR5XTq5y.jpg",
            poster_path: "/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
        },
        {
            id: 24428,
            title: "The Avengers",
            overview: "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
            backdrop_path: "/nNmJRkg8wWnRmzQDe2FwKbPIsJV.jpg",
            poster_path: "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        },
    ],
    comedy: [
        {
            id: 120, // Fellowship of the ring isn't comedy, fixing placeholder
            title: "Superbad",
            overview: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
            backdrop_path: "/c7f3g2l7f25k18r8m45a8m2.jpg", // Fake path for example, using placeholder logic in app if fails, but trying real one
            poster_path: "/ek8e8txUyUwd2BnqhgZT66iF0Cq.jpg", // Real Superbad
        }
    ]
};

// Fill out other categories with duplicates for now to fill the UI
const fillCategory = (source: Movie[], count: number) => {
    const filled = [];
    for (let i = 0; i < count; i++) {
        filled.push({ ...source[i % source.length], id: source[i % source.length].id + i + 1000 }); // unique IDs for keys
    }
    return filled;
};

realMovies.action = fillCategory(realMovies.action, 10);
realMovies.comedy = fillCategory(realMovies.trending, 10); // Reuse trending for now
realMovies.horror = fillCategory(realMovies.originals, 10); // Reuse originals for now
realMovies.romance = fillCategory(realMovies.topRated, 10); // Reuse top rated
realMovies.documentaries = fillCategory(realMovies.trending, 10);

realMovies.bollywoodMovies = [
    {
        id: 20001,
        title: "RRR",
        overview: "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920s.",
        backdrop_path: "https://image.tmdb.org/t/p/original/7cQSAo8r645u5FFHjveiwZ1Jcaw.jpg",
        poster_path: "https://image.tmdb.org/t/p/original/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg"
    },
    {
        id: 20002,
        title: "Brahmāstra: Part One – Shiva",
        overview: "Shiva, a DJ, discovers his strange connection with the element of fire, and also holds the power to awaken the Brahmāstra, a supernatural weapon.",
        backdrop_path: "https://image.tmdb.org/t/p/original/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
        poster_path: "https://image.tmdb.org/t/p/original/x61q9iVGA84TeHu0tzuQbQ0c8aA.jpg"
    },
    {
        id: 20003,
        title: "K.G.F: Chapter 2",
        overview: "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. His allies look up to him, the government sees him as a threat to law and order.",
        backdrop_path: "https://image.tmdb.org/t/p/original/1OscgW181D5xAAO9jW9gHAbEtNE.jpg",
        poster_path: "https://image.tmdb.org/t/p/original/5DpHiCrMWOgJzHX5XwsqyW7P5Tz.jpg"
    },
    {
        id: 20004,
        title: "Pathaan",
        overview: "A soldier caught by enemies and presumed dead comes back to complete his mission, accompanied by old friends and foes.",
        backdrop_path: "https://image.tmdb.org/t/p/original/8s4h9friP6Ci3adRGahHARVd76E.jpg",
        poster_path: "https://image.tmdb.org/t/p/original/m1b9cq7BEGLExXYTzkCz8ZCC78b.jpg"
    },
    {
        id: 20005,
        title: "Dangal",
        overview: "Mahavir Singh Phogat, a former wrestler, decides to fulfill his dream of winning a gold medal for his country by training his daughters for the Commonwealth Games.",
        backdrop_path: "https://image.tmdb.org/t/p/original/6iUNJZymJBMXXriQyFZfLAKnjhr.jpg",
        poster_path: "https://image.tmdb.org/t/p/original/cedjL18B7rN6I7rZ6l7uO8w2a4D.jpg"
    }
];

realMovies.bollywoodSeries = [
    {
        id: 21001,
        name: "Sacred Games",
        original_name: "Sacred Games",
        overview: "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm.",
        backdrop_path: "https://image.tmdb.org/t/p/original/2wM2K918W7rbfw1xVlB3gV5a8jH.jpg",
        poster_path: "https://image.tmdb.org/t/p/original/2wM2K918W7rbfw1xVlB3gV5a8jH.jpg"
    },
    {
        id: 21002,
        name: "Mirzapur",
        original_name: "Mirzapur",
        overview: "A shocking incident at a wedding procession ignites a series of events entangling the lives of two families in the lawless city of Mirzapur.",
        backdrop_path: "https://image.tmdb.org/t/p/original/m7F2C0j9G9lB2W8o5xW3gV4a5jH.jpg",
        poster_path: "https://image.tmdb.org/t/p/original/m7F2C0j9G9lB2W8o5xW3gV4a5jH.jpg"
    },
    {
        id: 21003,
        name: "The Family Man",
        original_name: "The Family Man",
        overview: "Srikant Tiwari represents 'the family man'. He is a senior analyst in TASC, a part of the National Investigation Agency of India.",
        backdrop_path: "https://image.tmdb.org/t/p/original/k7eYrF1oW8xW3gV4a5jH.jpg",
        poster_path: "https://image.tmdb.org/t/p/original/k7eYrF1oW8xW3gV4a5jH.jpg"
    },
    {
        id: 21004,
        name: "Delhi Crime",
        original_name: "Delhi Crime",
        overview: "Based on the Nirbhaya case, Delhi Crime follows the Delhi Police investigation into the finding of the men who perpetrated the crime.",
        backdrop_path: "https://image.tmdb.org/t/p/original/l8xW3gV4a5jH.jpg",
        poster_path: "https://image.tmdb.org/t/p/original/l8xW3gV4a5jH.jpg"
    },
    {
        id: 21005,
        name: "Pataal Lok",
        original_name: "Pataal Lok",
        overview: "A down-and-out cop lands the case of a lifetime when four suspects are nabbed in the assassination attempt of a prime time journalist.",
        backdrop_path: "https://image.tmdb.org/t/p/original/p9xW3gV4a5jH.jpg",
        poster_path: "https://image.tmdb.org/t/p/original/p9xW3gV4a5jH.jpg"
    }
];
