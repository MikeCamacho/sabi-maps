//DROP DOWNS
const dropDownBtnZones = document.getElementById('dropDownBtnZones')
const dropDownPanelZones = document.getElementById('dropDownPanelZones')
dropDownBtnZones.addEventListener('click', function () {
  dropDownPanelZones.classList.toggle('show')
})

const zoneEast = document.getElementById('zoneEast')
const zoneCenter = document.getElementById('zoneCenter')
const zoneNort = document.getElementById('zoneNort')
const zoneWest = document.getElementById('zoneWest')
const zoneSouth = document.getElementById('zoneSouth')

const buttonAllZones = document.getElementById('allZones')

var icon_cities = "https://clientes.mi-martinez.com/sabi/wp-content/uploads/2020/08/icon-point-purple.png"
var icon_type1 = "https://clientes.mi-martinez.com/sabi/wp-content/uploads/2020/08/icon-1.png"
var icon_type2 = "https://clientes.mi-martinez.com/sabi/wp-content/uploads/2020/08/icon-2.png"
var icon_matpel = "https://clientes.mi-martinez.com/sabi/wp-content/uploads/2020/08/icon-3.png"

var text_type1 = "PAE Tipo 1"
var text_type2 = "PAE Tipo 2"
var text_matpel = "PAE Matpel"

const titleZone = document.getElementById('titleZone')

function initMap() {
  var directionsService = new google.maps.DirectionsService()
  var directionsRenderer = new google.maps.DirectionsRenderer()
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 6.4920373, lng: -75.5535881 },
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  })
  map.setOptions({ zoom: 6.6, center: { lat: 6.4920373, lng: -75.5535881 } })
  directionsRenderer.setMap(map)

  var rendererEast = new google.maps.DirectionsRenderer({ preserveViewport: true })
  let markersEast = { points: [], cities: [], type1: [], type2: [], matpel: [] }

  var rendererCenter = new google.maps.DirectionsRenderer({ preserveViewport: true })
  let markersCenter = { points: [], cities: [], type1: [], type2: [], matpel: [] }

  var rendererNort = new google.maps.DirectionsRenderer({ preserveViewport: true })
  let markersNort = { points: [], cities: [], type1: [], type2: [], matpel: [] }

  var rendererSouth = new google.maps.DirectionsRenderer({ preserveViewport: true })
  let markersSouth = { points: [], cities: [], type1: [], type2: [], matpel: [] }

  function selectZoneEast(state, all) {
    if (state) {
      if (!all) {
        selectZoneCenter(false)
        selectZoneNort(false)
        selectZoneSouth(false)
        titleZone.innerText = 'Zona 1 - Oriente'
        rendererEast.setOptions({ preserveViewport: false })
      } else {
        rendererEast.setOptions({ preserveViewport: true })
      }
      selectZone(zoneEast, rendererEast, map, markersEast)
      dropDownPanelZones.classList.remove('show')
    } else {
      deselectZone(zoneEast, rendererEast, map, markersEast)
    }
  }
  zoneEast.addEventListener('click', () => selectZoneEast(true))

  function selectZoneCenter(state, all) {
    if (state) {
      if (!all) {
        selectZoneEast(false)
        selectZoneNort(false)
        selectZoneSouth(false)
        titleZone.innerText = 'Zona 2 - Centro'
        rendererCenter.setOptions({ preserveViewport: false })
      } else {
        rendererCenter.setOptions({ preserveViewport: true })
      }
      selectZone(zoneCenter, rendererCenter, map, markersCenter)
      dropDownPanelZones.classList.remove('show')
    } else {
      deselectZone(zoneCenter, rendererCenter, map, markersCenter)
    }
  }
  zoneCenter.addEventListener('click', () => selectZoneCenter(true))

  function selectZoneNort(state, all) {
    if (state) {
      if (!all) {
        selectZoneCenter(false)
        selectZoneEast(false)
        selectZoneSouth(false)
        titleZone.innerText = 'Zona 3 - Norte'
        rendererNort.setOptions({ preserveViewport: false })
      } else {
        rendererNort.setOptions({ preserveViewport: true })
      }
      selectZone(zoneNort, rendererNort, map, markersNort)
      dropDownPanelZones.classList.remove('show')
    } else {
      deselectZone(zoneNort, rendererNort, map, markersNort)
    }
  }
  zoneNort.addEventListener('click', () => selectZoneNort(true))

  function selectZoneSouth(state, all) {
    if (state) {
      if (!all) {
        selectZoneCenter(false)
        selectZoneEast(false)
        selectZoneNort(false)
        titleZone.innerText = 'Zona 4 - Sur'
        rendererSouth.setOptions({ preserveViewport: false })
      } else {
        rendererSouth.setOptions({ preserveViewport: true })
      }
      selectZone(zoneSouth, rendererSouth, map, markersSouth)
      dropDownPanelZones.classList.remove('show')
    } else {
      deselectZone(zoneSouth, rendererSouth, map, markersSouth)
    }
  }
  zoneSouth.addEventListener('click', () => selectZoneSouth(true))

  function selectAllZones() {
    selectZoneCenter(true, true)
    selectZoneEast(true, true)
    selectZoneNort(true, true)
    selectZoneSouth(true, true)
    titleZone.innerText = 'TODOS'
    map.setOptions({ zoom: 6.6, center: { lat: 6.4920373, lng: -75.5535881 } })
  }

  buttonAllZones.addEventListener('click', () => selectAllZones())


  //INIT ZONES
  renderZone('east', zoneEast, rendererEast, map, markersEast, directionsService)
  renderZone('center', zoneCenter, rendererCenter, map, markersCenter, directionsService)
  renderZone('nort', zoneNort, rendererNort, map, markersNort, directionsService)
  renderZone('south', zoneSouth, rendererSouth, map, markersSouth, directionsService)
  titleZone.innerText = 'TODAS'
}

function renderZone(name_zone, zone, render, map, markers, service) {
  const { origin, destination } = zones[name_zone]
  var markerStart = new google.maps.Marker({
    position: origin,
    map,
    icon: icon_cities
  })
  var markerEnd = new google.maps.Marker({
    position: destination,
    map,
    icon: icon_cities
  })
  markers['points'].push(markerStart, markerEnd)
  var waypoints = selectedWaypoints(name_zone, markers, map)
  requestRoute(origin, destination, waypoints, render, service)
  render.setMap(map)
}

function requestRoute(origin, destination, waypoints, render, service) {
  var request = {
    origin,
    destination,
    waypoints,
    optimizeWaypoints: true,
    provideRouteAlternatives: true,
    travelMode: 'DRIVING',
  }
  service.route(request, function (response, status) {
    try {
      if (status == 'OK') {
        render.setOptions({ directions: response, suppressPolylines: false, suppressMarkers: true })
      } else {
        window.alert('Directions request failed due to ' + status)
      }
    } catch (error) {
      console.log(error)
    }
  })
}

function selectedWaypoints(zone, markers, map) {
  var waypoints = []
  Object.keys(zones[zone].points).map(key => {
    const array = zones[zone].points[key]
    array.forEach(item => {
      waypoints.push({
        location: key === 'cities' ? item : item.position,
        stopover: true
      })
      let icon = eval('icon_' + key)
      let marker = new google.maps.Marker({
        position: key === 'cities' ? item : item.position,
        map,
        icon,
      })
      if (key !== 'cities') {
        var content = '<div class="popup-marker" id="content">' +
          `<h5>${item.name}</h5>` +
          `<p>${eval('text_' + key)}</p>` +
          '</div>'

        var info = new google.maps.InfoWindow({
          content
        })
        marker.addListener('click', function () {
          info.open(map, marker);
        });
      }
      markers[key].push(marker)
    })
  })
  return waypoints
}

function selectZone(zone, render, map, markers) {
  render.setOptions({ suppressPolylines: false, suppressMarkers: true })
  setMarkersPoints(map, markers)
  render.setMap(map)
}

function deselectZone(zone, render, map, markers) {
  //route.setAttribute('checked', 'false')
  render.setOptions({ suppressPolylines: true, suppressMarkers: true })
  setMarkersPoints(null, markers)
  render.setMap(map)
}

function setMarkersPoints(map, markers, points) {
  const object = markers
  Object.keys(object).map(key => {
    for (let index = 0; index < object[key].length; index++) {
      object[key][index].setMap(map)
    }
    //object[key] = []
  })
}






