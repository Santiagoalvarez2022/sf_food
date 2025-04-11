import React,{useState,useEffect} from 'react'
import MapFood from '../components/Map/MapFood.jsx'
import FilterBar from '../components/Filters/FilterBar.jsx'
import FilterSide from '../components/Filters/FilterSide.jsx'
import Modal from '../components/Modals/Modal.jsx'
import { getPlacesNear } from '../services/services/getData.js'
import InfoPlace from '../components/InfoPlace/InfoPlace.jsx'

export default function MapContainer() {

  const [seeModal,setSeeModal] = useState(true)
  const [placesToShow, setPlacestoShow] = useState([])
  const [seeInfoPlace,setSeeInfoPlace] = useState(false)
  const [infoPlace,setInfoPlace] = useState(null)

  // default value is san francisco center
   const [ClickedPosition, setClickedPosition] = useState(
    {
      lat: 37.757128,
      lng: -122.442068
    }
  );

  //state for capture the click in the map,
  const handlerClicked = async({detail}) =>{
    const {latLng} = detail;
    const newLocation = {
      lat : latLng.lat,
      lng : latLng.lng
    }
    setSeeInfoPlace(false)
    setClickedPosition(newLocation) 
    const response = await getPlacesNear(newLocation,1)
    console.log(response);
    setPlacestoShow(response.data)
  }

  const selectMarket = (obj) =>{
    console.log('clickear obj', obj);
    setSeeInfoPlace(true)
    setInfoPlace(obj)
  }

  const handlerCloseInfo = () =>{
    setSeeInfoPlace(!seeInfoPlace)
  }

  const handlerClose = () =>{
    setSeeModal(!seeModal)
  }

  const handlerPlacesToShow = (array) =>{
    setPlacestoShow(array)
  }



  return (
    <div className='min-h-screen bg-sf-grey flex flex-col relative '>
      <InfoPlace seeInfoPlace={seeInfoPlace} infoPlace={infoPlace} close={handlerCloseInfo}/>
      <Modal close={handlerClose} seeModal={seeModal}/>
      <FilterBar   handlerPlacesToShow={handlerPlacesToShow} />
      <FilterSide  handlerPlacesToShow={handlerPlacesToShow} />
      <div className='h-screen  '>
        <MapFood selectMarket={selectMarket} placesToShow={placesToShow} ClickedPosition={ClickedPosition} handlerClicked={handlerClicked} />
      </div>
    </div> 
  )
}


 