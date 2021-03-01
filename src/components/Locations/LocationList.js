import React, {useContext, useEffect} from "react"
import { LocationContext } from "./LocationProvider"
import { Location } from "./Location"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    getLocations()
  }, [])

  return (
    <div className="location-list">
      {locations.map((location) => {
        return <Location key={location.id} location={location} />
      })}
    </div>
  )
}