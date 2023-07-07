import React, {useEffect, useState} from "react";
import Decoration from "../../assets/Decoration.svg";
import "../styleThree.scss";

const data = {
    fundacjom: [
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
    ],
    organizacjom: [
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
],
    inne: [
        {
            name: "Lorem Ipsum inne",
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
            name: "Lorem Ipsum inne",
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
            name: "Lorem Ipsum inne",
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
            name: "Lorem Ipsum inne",
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
    ]

}


const Help = () => {
    const [fundation, setFundation] = useState("fundacjom");
    const [pageIndex, setPageIndex] = useState(0);
    const items = 3;

    useEffect(() => {
        setPageIndex(0)
    }, [fundation])

    const handleChange = (event, newValue) => {
        setFundation(newValue);
        setPageIndex(0);
    };

    const handlePageChange = (newPageIndex) => {
        setPageIndex(newPageIndex);
    };

    const startIndex = pageIndex * items;
    const endIndex = startIndex + items;
    const itemsData = data[fundation].slice(startIndex, endIndex);

    return (
        <div className="container_wehelp">
            <div className="wehelp">
                <div className="title_help">Komu pomagamy?</div>
                <div className="decoration_help">
                    <img src={Decoration} alt="Decoration Help" />
                </div>
                <nav className="btn_organization">
                    <button onClick={() => setFundation("fundacjom")} className="btn_foundation">Fundacjom</button>
                    <button onClick={() => setFundation("organizacjom")} className="btn_non-governmental">Organizacjom <br/>pozarządowym</button>
                    <button onClick={() => setFundation("inne")} className="btn_local">Zbiórkom <br/> lokalnym</button>
                </nav>
                <p className="information_text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
            <div>
                {itemsData.map((item, index) => (
                    <div key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.aim}</p>
                        <p>{item.things}</p>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {new Array(Math.ceil(data[fundation].length / items)).fill(null).map((_, i) => {
                    return (
                        <button
                            className={pageIndex === 0 ? "firstbutton" : "lastbutton"}
                            onClick={() => setPageIndex(i)}
                        > {i + 1}
                        </button>
                    )
                })}


            </div>
        </div>
    )
}

export default Help;
