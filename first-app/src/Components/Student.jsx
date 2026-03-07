import './Student.css';
export default function Student({data}) {
    
    return (
        <div className="container">
            <h2>Student Details</h2>
            <table border={1}>
                {
                    data.map((val)=>{
                        return(
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.course}</td>
                                <td>{val.rollno}</td>
                                <td>{val.regno}</td>
                                <td>{val.duration}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}