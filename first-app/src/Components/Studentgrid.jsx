import './Studentgrid.css';

export default function Studentgrid(){

    const data = [
        { id:"1", name: "Preethi", course: "B.TECH[CSBS]", rollno: "24UGCBS00063", regno: "710724244042", duration: "2024-2028" },
        { id:"2", name: "Keerthi", course: "B.TECH[CSBS]", rollno: "24UGCBS00037", regno: "710724244026", duration: "2024-2028" },
        { id:"3", name: "Abetha Senthalir", course:"B.TECH[CSBS]", rollno: "24UGCBS00027", regno: "710724244001", duration: "2024-2028" },
        { id:"4", name: "Shri Vidya", course: "B.TECH[CSBS]", rollno: "24UGCBS00004", regno: "710724244057", duration: "2024-2028" },
        { id:"5", name: "Sivadharshini", course: "B.TECH[CSBS]", rollno: "24UGCBS00004", regno: "710724244058", duration: "2024-2028" }
    ];

    return (
        <div className="container">
            <h2>Student Details</h2>

            <div className="gridContainer">

                {data.map((val) => {
                    return(
                        <div key={val.id} className="studentCard">
                            <h3>{val.name}</h3>
                            <p>{val.course}</p>
                            <p>{val.rollno}</p>
                            <p>{val.regno}</p>
                            <p>{val.duration}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
