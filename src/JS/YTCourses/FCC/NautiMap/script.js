import { remap, drawDot } from "./utils"
import { initialiseGeolocation } from "./gps"

nautiCanvas.width = 2000
// nautiCanvas.height = 700

const mapMargin ={width: 6, height: 7}
let mapCenter = {x: 0, y: 0}
let mapSize = {width: 0, height: 0}
let projection = "mercator"
let currentLocation = {lat: 0, lon: 0}

const ctx = nautiCanvas.getContext('2d')
const mapImgTopo = new Image()
// mapImgTopo.src = "assets/Equirectangular_projection_SW.jpg"
mapImgTopo.src = "assets/Mercator.jpeg"
mapImgTopo.onload = () => {
    const aspectRatio = mapImgTopo.width / mapImgTopo.height
    nautiCanvas.height = nautiCanvas.width / aspectRatio
    ctx.drawImage(mapImgTopo, 0, 0, nautiCanvas.width, nautiCanvas.height)

    // const canvasCenter = {x: nautiCanvas.width/2, y: nautiCanvas.height/2}

    // const margin = {width: 6, height: 7}

    mapCenter = {
        x: nautiCanvas.width /2,
        y: nautiCanvas.height /2,
    }
    mapSize = {
        width: nautiCanvas.width - mapMargin.width,
        height: nautiCanvas.height - mapMargin.height
    }
 




    initialiseGeolocation()
}

export function updateMapType(select){
    const val = select.value
    if(val<4){
        projection = "equirectangular"
    } else {
        projection = "mercator"
    }
    mapImgTopo.src = "assets/map_"+val+".jpg"
}