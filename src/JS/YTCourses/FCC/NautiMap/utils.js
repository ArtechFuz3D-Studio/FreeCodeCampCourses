export function remap(coords, mapCenter, mapSize, projection){
    if(projection === "equirectangular"){
        return remapEquirectangular(coords, mapCenter, mapSize)
    } else if (projection === "mercator"){
        return remapMercator(coords, mapCenter, mapSize)
    }
}

export function remapEquirectangular (coords, mapCenter, mapSize){
    const mappedCoords = {
        x: mapCenter.x + (coords.longitude * mapSize.width) /360,
        y: mapCenter.y - (coords.latitude * mapSize.height) /180,
    }
    return mappedCoords
}

export function remapMercator(coords, mapCenter, mapSize){
    const earthRadius = mapSize.width / (2*Math.PI)
    const latitudeInRadians = coords.latitude * Math.PI / 180
    const verticalOffset = Math.log(Math.tan((Math.PI*0.25) + (latitudeInRadians*0.5)))
    const mappedCoords = {
        x: mapCenter.x + (coords.longitude * mapSize.width) /360,
        y: mapCenter.y - (verticalOffset * earthRadius)
    }
    return mappedCoords
}

export function drawDot(coords, ctx){
    ctx.fillStyle = 'red'
    ctx.strokeStyle = 'white'
    ctx.beginPath()
    ctx.arc(coords.x, coords.y, 5, 0, 2*Math.PI)
    ctx.fill()
    ctx.stroke()
}

export function showLocationOnMap(currentLocation, mapCenter, mapSize, projection){
    const mappedCoords = remap(currentLocation, mapCenter, mapSize, projection)
    drawDot(mappedCoords, ctx)
}