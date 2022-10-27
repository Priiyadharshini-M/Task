import { useState, useEffect } from "react"
const SchoolList = () => {
    const [schools, setSchools] = useState([])
    const [collapse, setCollapse] = useState('Expand all +')

    useEffect(() => {
        fetch("http://localhost:8000/schools")
            .then(result => result.json())
            .then(res => {
                setSchools(res)
            })
    }, [])

    return (
        <div className="container justify-content-center text-align-center">
       <h1 className="ml-5 mt-5">Top Colleges in California (Full List)</h1><hr />
       <button className="navbar-toggler float-right mt-2" data-bs-toggle="collapse" data-bs-target=".colleges" aria-expanded="false" onClick={() =>{collapse==="Expand all +" ? setCollapse("Collapse all -") : setCollapse("Expand all +")}}><b className="text-dark fs-3">{collapse}</b></button>
            {schools && schools.map((school) => {
                const collapseid = "#" + school.id
                return (
                    <div key={school.title}>
                        <div className="container bg-light mt-5 w-75">
                            <div className="mt-0">
                                <div className="bg-secondary"><h1 className="ml-5">{school.field_display_name}
                                    <button className="navbar-toggler float-right mr-5" type="button" data-bs-toggle="collapse"
                                        data-bs-target={collapseid} aria-controls={collapseid} aria-expanded="false">
                                        <span className="bi bi-plus" />
                                    </button></h1>
                                    <p className="fs-4 mt-0  ml-5 font-weight-bold">{school.field_city}, {school.field_sch_state}</p>
                                </div>

                                <div className="collapse colleges" id={school.id}>
                                    <b className="nav-item fs-4 ml-3">Average Graduation Rate</b>
                                    <p className="nav-item ml-3 fs-4"><i className="bi bi-mortarboard-fill"></i> 2018 - 2022 Average : {school.field_weighted_grad_rate}%</p>
                                    <b className="nav-item fs-4 ml-3">Courses</b>
                                    <p className="nav-item ml-3 fs-4"><i className="bi bi-book-half"></i> {school.field_program_type}</p>
                                    <b className="nav-item fs-4 ml-3">College Profile</b>
                                    <p className="nav-item ml-3 fs-4"><i className="bi bi-link-45deg"></i> <a href={school.field_school_website} > {school.field_display_name}</a></p>
                                </div>
                            </div><br />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SchoolList