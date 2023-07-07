import React from "react";




const FoundationSection = ({ startIndex, endIndex }) => {
    const foundations = [
        {
            name: "Dbam o Zdrowie",
            aim: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            things: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Dla dzieci",
            aim: "Pomoc dzieciom z ubogich rodzin.",
            things: "ubrania, meble, zabawki"
        },
        {
            name: "Bez domu",
            aim: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
            things: "ubrania, jedzenie, ciepłe koce"
        }
    ];

    const paginatedFoundations = foundations.slice(startIndex, endIndex);
    return (
        <div>
            {paginatedFoundations.map((item, index) => (
                <div key={index}>
                    <h2>{item.name}</h2>
                    <p>{item.aim}</p>
                    <p>{item.things}</p>
                </div>
            ))}
        </div>
    );
};

const NongovernmentalSection = ({ startIndex, endIndex }) => {

    const nongovernmental = [
    {
        name: "Lorem Ipsum 1",
        aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
        things: "Egestas, sed, tempus"
    },
    {
        name: "Lorem Ipsum 2",
        aim: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
        things: "Ut, aliquam, purus, sit, amet"
    },
    {
        name: "Lorem Ipsum 3",
        aim: "Scelerisque in dictum non consectetur a erat nam.",
        things: "Mi, quis, hendrerit, dolor"
    }
];
    const paginatedNongovermental = nongovernmental.slice(startIndex, endIndex);
    return (
        <div>
            {paginatedNongovermental.map((item, index) => (
                <div key={index}>
                    <h2>{item.name}</h2>
                    <p>{item.aim}</p>
                    <p>{item.things}</p>
                </div>
            ))}
        </div>
    );
};

const LocalSection = ({ startIndex, endIndex }) => {

    const local = [
    {
        name: "Lorem Ipsum 1",
        aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
        things: "Egestas, sed, tempus"
    },
    {
        name: "Lorem Ipsum 2",
        aim: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
        things: "Ut, aliquam, purus, sit, amet"
    },
    {
        name: "Lorem Ipsum 3",
        aim: "Scelerisque in dictum non consectetur a erat nam.",
        things: "Mi, quis, hendrerit, dolor"
    },
    {
        name: "Lorem Ipsum 4",
        aim: "Scelerisque in dictum non consectetur a erat nam.",
        things: "Mi, quis, hendrerit, dolor"
    }

];

    const paginatedLocal = local.slice(startIndex, endIndex);
    return (
        <div>
            {paginatedLocal.map((item, index) => (
                <div key={index}>
                    <h2>{item.name}</h2>
                    <p>{item.aim}</p>
                    <p>{item.things}</p>
                </div>
            ))}
        </div>
    );
};
export { FoundationSection, NongovernmentalSection, LocalSection };