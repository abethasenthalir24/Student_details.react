import './Studentgrid.css';
export default function Studentgrid({data}){
    
    return (
        <div className="deatils">
            <h2>Student Details</h2>
                {
                    data.map((val)=>{
                        return(
                            <div key={val.name} className='box'>
                                <h3>{val.name}</h3>
                                <p>{val.course}</p>
                                <p>{val.rollno}</p>
                                <p>{val.regno}</p>
                                <p>{val.duration}</p>
                            </div>
                        )
                    })
                }
        </div>
    )
}


