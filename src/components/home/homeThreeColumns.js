import React from "react";
import "../stylesHome.scss"

const ThreeColumns = () => {
    return (
        <div className="container_three_columns">
            <div className="three_columns">
                <div className="tcolumn">
                    <h3 className="number_column">10</h3>
                    <p className="title_column">oddanych worków</p>
                    <p className="text_column">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="tcolumn">
                    <h3 className="number_column">5</h3>
                    <p className="title_column">wspartych organizacji</p>
                    <p className="text_column">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="tcolumn">
                    <h3 className="number_column">7</h3>
                    <p className="title_column">zorganizowane zbiorki</p>
                    <p className="text_column">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </div>
        </div>
    )
}

export default ThreeColumns;