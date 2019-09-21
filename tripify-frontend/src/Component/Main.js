import React from 'react'

const Main = (props) => {
    return (
        <div className="Main">
        {
         props.content.map(el =>
                <div>
                <img className="image" src={el.image} />       

                <h3 className="Descritpion"> {el.title}</h3>
                
            </div>
         )
       }
        </div>
    

)
    }
 
export default Main
