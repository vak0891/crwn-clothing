import React from "react";
import data from "./directory.data";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component{
    constructor(){
        super()
        this.state={
            sections: data
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...othersections}) => <MenuItem key={id} {...othersections}/>)
                }
            </div>
        )
    }
}

export default Directory;