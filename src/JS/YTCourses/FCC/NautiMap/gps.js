

export function initialiseGeolocation(){
    let geolocation = null

    if (window.navigator && window.navigator.geolocation){
        geolocation=window.navigator.geolocation
    }

    if(geolocation){
        geolocation.getCurrentPosition(onLocationUpdate)

        // call onLocationUpdate when senseor gets new loc
        geolocation.watchPosition(onLocationUpdate, null,{
            enableHighAccuracy:true,
            maximumAge:1000
        })
        return true
    }
    return false
}

export function onLocationUpdate(event){
    currentLocation = event.coords
    // console.log(currentLocation)
    // document.getElementById("loc").innerHTML = "Your location:<br><span class='locFont'>Lat: " + currentLocation.latitude.toFixed(5)+"<br>Lon: "+currentLocation.longitude.toFixed(5)+"</span>"

    showLocationOnMap()

    // const mappedCoords = remap(currentLocation, mapCenter, mapSize, projection)
    // drawDot(mappedCoords, ctx)
}