import React, {useState} from "react";
import Decoration from "../../assets/Decoration.svg";
import "../styleThree.scss";
import {FoundationSection, LocalSection, NongovernmentalSection} from "./organization.js"


const Help = () => {
    const [fundation, setFundation] = useState(0);
    const [pageIndex, setPageIndex] = useState(0);
    const items = 3;

    const handleChange = (event, newValue) => {
        setFundation(newValue);
        setPageIndex(0);
    };

    const handlePageChange = (newPageIndex) => {
        setPageIndex(newPageIndex);
    };

    const startIndex = pageIndex * items;
    const endIndex = startIndex + items;


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
            {fundation === "fundacjom" && (
                <FoundationSection
                    startIndex={startIndex}
                    endIndex={endIndex}
                />
            )}
            {fundation === "organizacjom" && (
                <NongovernmentalSection
                    startIndex={startIndex}
                    endIndex={endIndex}
                />
            )}
            {fundation === "inne" && (
                <LocalSection
                    startIndex={startIndex}
                    endIndex={endIndex}
                />
            )}
            <div className="pagination">
                <button
                    className={pageIndex === 0 ? "firstbutton" : "lastbutton"}
                    onClick={() => setPageIndex(0)}
                > 1
                </button>
                <button
                    className={pageIndex === 1 ? "firstbutton" : "lastbutton"}
                    onClick={() => setPageIndex(1)}
                >
                    2
                </button>
                <button
                    className={pageIndex === 2 ? "firstbutton" : "lastbutton"}
                    onClick={() => setPageIndex(2)}
                >
                    3
                </button>
            </div>
        </div>
    )
}

export default Help;
