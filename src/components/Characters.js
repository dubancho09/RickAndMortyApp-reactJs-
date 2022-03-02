import React from "react";
const  Navbar = ({characters = []}) => {
    return(
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{minwidch: "200px"}}>
                            <img src={item.image}></img>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <hr></hr>
                                <p>location: {item.location.name}</p>
                                <p>species: {item.species}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Navbar