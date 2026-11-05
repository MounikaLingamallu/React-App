import './Home.css'
export default function Doctorcard(props) {
  return (
    <div className='card'>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Gender:{props.gender}</p>
        <p>Salary:{props.salary}</p>
        <p>Specialization:{props.specialization}</p>
      
    </div>
  )
}
