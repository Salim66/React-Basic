
import React from 'react'

const Devs = () => {

    const info = [
        {
            name: 'Salim Hasan',
            skill: 'Laravel Developer'
        },
        {
            name: 'Milon Hossain',
            skill: 'Python Developer'
        },
        {
            name: 'Shohan khan',
            skill: 'MongoDB'
        },
        {
            name: 'Monira',
            skill: 'MERN Stack Developer'
        },
        {
            name: 'Rabbi Haque',
            skill: 'JavaScript Developer'
        },
        {
            name: 'Shihab Ahamed',
            skill: 'Networing'
        },
        {
            name: 'Naiyan Hossain',
            skill: 'Java Dev'
        }
    ]

    return (
        <div>
            <div className="row">

                {
                    info.map((dev) => 
                        <div className="col-md-3">
                            <div className="card my-5 shadow">
                                <div className="card-body">
                                    <h4>{ dev.name }</h4>
                                    <p>{ dev.skill }</p>
                                    <button className="btn btn-success">Read More</button>
                                </div>
                            </div>
                        </div>
                        
                    )
                }
                
               

                

            </div>
        </div>
    )
}

export default Devs
