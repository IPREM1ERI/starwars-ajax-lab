import { useState, useEffect  } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipDetails = () => {
  const [shipDetails, setShipDetails] = useState({})
  const location = useLocation()

  useEffect(()=> {
    const fetchDetails = async () => {
      const shipData = await getDetails(location.state.starship.url)
      setShipDetails(shipData)
      
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <>
      <h1>Ship name: {shipDetails.name}</h1>
      <h2>Ship model: {shipDetails.model}</h2>
      <Link to="/"><button>Return</button></Link>
    </>
  )
}

export default StarshipDetails

