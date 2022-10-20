import { useState, useEffect } from "react"
export const SchoolList = () => {
    const [schools, setSchools] = useState([])
    // const config = {
    //     mode: 'no-cors',
    //         method: "get",
    //         headers: {
    //              "Content-Type": "application/json"
    //         }
    //   }

    useEffect(()=> {
    fetch("http://localhost:3000/schools")
    .then(result => result.json())
                      .then(res => {
                        setSchools(res)
                        console.log("response",res)
                      })
                    },[])
    console.log("data",schools)
    return(
        <>
        {schools && schools.map((school) => {
            return(
                <div key={school.title}>
                    <div className="container bg-light ">
                <div className="border border-3">
                    <div className="bg-secondary"><h1 className="ml-5">{school.field_display_name}</h1><hr />
                <p className="fs-4 mt-0  ml-5 font-weight-bold">{school.field_city}, {school.field_sch_state}</p></div>
                <b className="fs-4 ml-3">Average Graduation Rate</b>
                <p className="ml-3 fs-4"><i className="bi bi-mortarboard-fill"></i> 2018 - 2022 Average : {school.field_weighted_grad_rate}%</p>
                <b className="fs-4 ml-3">Courses</b>
                <p className="ml-3 fs-4"><i className="bi bi-book-half"></i> {school.field_program_type}</p>
                <b className="fs-4 ml-3">College Profile</b>
                <p className="ml-3 fs-4"><i className="bi bi-link-45deg"></i> <a href={school.field_school_website} > {school.field_display_name}</a></p>
                </div><br />
                </div>
                </div>
            )
        })}
        </>
    )
}