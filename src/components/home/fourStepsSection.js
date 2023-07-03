import React from "react";
import "../stylesHome.scss"
import Decoration from "../../assets/Decoration.svg";
import Icon_1 from "../../assets/Icon-1.png"
import Icon_2 from "../../assets/Icon-2.png"
import Icon_3 from "../../assets/Icon-3.png"
import Icon_4 from "../../assets/Icon-4.png"

const FourStepsColumn = () => {
    return (
        <div className="container_foursteps">
            <div className="foursteps">
                <div className="four_column">
                    <div className="column">
                        <img src={Icon_1} alt="Decoration Home" />
                        <h3 className="title_column">Wybierz rzeczy</h3>
                        <p className="text_column">ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="column">
                        <img src={Icon_2} alt="Decoration Home" />
                        <h3 className="title_column">Spakuj je</h3>
                        <p className="text_column">skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="column">
                        <img src={Icon_3} alt="Decoration Home" />
                        <h3 className="title_column">Zdecyduj komu chcesz pomóc</h3>
                        <p className="text_column">wybierz zaufane miejsce</p>
                    </div>
                    <div className="column">
                        <img src={Icon_4} alt="Decoration Home" />
                        <h3 className="title_column">Zamów kuriera</h3>
                        <p className="text_column">kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FourStepsColumn;