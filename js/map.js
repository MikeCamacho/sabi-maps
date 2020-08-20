//DROP DOWNS
const dropDownBtnRoutes = document.getElementById('dropDownBtnRoutes')
const dropDownPanelRoutes = document.getElementById('dropDownPanelRoutes')
dropDownBtnRoutes.addEventListener('click', function () {
  dropDownPanelRoutes.classList.toggle('show')
  dropDownPanelPoints.classList.remove('show')
})
const dropDownBtnPoints = document.getElementById('dropDownBtnPoints')
const dropDownPanelPoints = document.getElementById('dropDownPanelPoints')
dropDownBtnPoints.addEventListener('click', function () {
  dropDownPanelPoints.classList.toggle('show')
  dropDownPanelRoutes.classList.remove('show')
})

const routeBogBun = document.getElementById('routeBogBun')
const routeMedCar = document.getElementById('routeMedCar')
const routeBogBar = document.getElementById('routeBogBar')
const routeBogMed = document.getElementById('routeBogMed')
const routeBogCuc = document.getElementById('routeBogCuc')
const routeCalMed = document.getElementById('routeCalMed')
const routeBogLln = document.getElementById('routeBogLln')

const buttonAllRoutes = document.getElementById('allRoutes')
const buttonAllPoints = document.getElementById('allPoints')

const points = document.getElementsByName('points')
const electronicPoint = document.getElementById('electronic')
const physicalPoint = document.getElementById('physical')
const mixedPoint = document.getElementById('mixed')

var icon_point = "../icons/icon-point-blue.png"

const routesCoordinates = {
  bog_bun: { origin: { lat: 4.59808, lng: -74.0760439 }, destination: { lat: 3.89005264, lng: -77.0737238 } },
  med_car: { origin: { lat: 6.2443382, lng: -75.573553 }, destination: { lat: 10.4195841, lng: -75.5271224 } },
  bog_bar: { origin: { lat: 4.59808, lng: -74.0760439 }, destination: { lat: 11.01184845, lng: -74.80886012 } },
  bog_med: { origin: { lat: 4.59808, lng: -74.0760439 }, destination: { lat: 6.2443382, lng: -75.573553 } },
  bog_cuc: { origin: { lat: 4.59808, lng: -74.0760439 }, destination: { lat: 7.8971458, lng: -72.5080387 } },
  cal_med: { origin: { lat: 3.4108435, lng: -76.58121271 }, destination: { lat: 6.2443382, lng: -75.573553 } },
  bog_lln: { origin: { lat: 4.59808, lng: -74.0760439 }, destination: { lat: 4.3120724, lng: -72.0829509 } }
}

const pointsCoordinates = {
  electronic: {
    bog_bun: [{ lat: 4.441265, lng: -74.687023 }, { lat: 3.887984, lng: -76.452030 }],
    med_car: [{ lat: 9.175375, lng: -75.400853 }, { lat: 8.529448, lng: -75.521137 }],
    bog_bar: [{ lat: 5.252074, lng: -73.851417 }],
    bog_med: [{ lat: 6.013802, lng: -75.417333 }],
    bog_cuc: [{ lat: 5.210830, lng: -73.898135 }, { lat: 5.963198, lng: -73.629186 }],
    cal_med: [{ lat: 3.897677, lng: -76.378702 }],
    bog_lln: [{ lat: 4.063768, lng: -73.436811 }, { lat: 4.346714, lng: -73.882641 }]
  },
  physical: {
    bog_bun: [{ lat: 4.466940, lng: -75.814002 }, { lat: 4.534717, lng: -74.579784 }],
    med_car: [{ lat: 6.850314, lng: -75.568205 }],
    bog_bar: [{ lat: 6.543478, lng: -73.184398 }, { lat: 8.350420, lng: -73.613196 }],
    bog_med: [{ lat: 5.550962, lng: -74.937586 }],
    bog_cuc: [{ lat: 6.765066, lng: -72.720575 }],
    cal_med: [{ lat: 4.882684, lng: -75.872077 }],
    bog_lln: []
  },
  mixed: {
    bog_bun: [{ lat: 4.326153, lng: -76.070260 }],
    med_car: [{ lat: 6.699710, lng: -75.494988 }, { lat: 8.063699, lng: -75.359015 }],
    bog_bar: [{ lat: 9.867522, lng: -74.625635 }, { lat: 9.268512, lng: -73.875239 }],
    bog_med: [{ lat: 5.015351, lng: -74.319731 }, { lat: 5.550962, lng: -74.734057 }],
    bog_cuc: [{ lat: 7.371009, lng: -72.713306 }, { lat: 7.710682, lng: -72.623083 }],
    cal_med: [{ lat: 5.972072, lng: -75.851812 }],
    bog_lln: [{ lat: 4.508350, lng: -73.953568 }]
  }
}


function initMap() {
  var directionsService = new google.maps.DirectionsService()
  var directionsRenderer = new google.maps.DirectionsRenderer()
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6.8,
    center: {lat: 6.9920373, lng: -76.0535881},
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  })
  ', '
  directionsRenderer.setMap(map)

  var rendererBogBun = new google.maps.DirectionsRenderer({ preserveViewport: true })
  let markersBogBun = []
  let markersPointsBogBun = { electronic: [], physical: [], mixed: [] }

  var rendererMedCar = new google.maps.DirectionsRenderer({ preserveViewport: true })
  let markersMedCar = []
  let markersPointsMedCar = { electronic: [], physical: [], mixed: [] }

  var rendererBogBar = new google.maps.DirectionsRenderer({ preserveViewport: true })
  let markersBogBar = []
  let markersPointsBogBar = { electronic: [], physical: [], mixed: [] }

  var rendererBogMed = new google.maps.DirectionsRenderer({ preserveViewport: true })
  let markersBogMed = []
  let markersPointsBogMed = { electronic: [], physical: [], mixed: [] }

  var rendererBogCuc = new google.maps.DirectionsRenderer({ preserveViewport: true })
  let markersBogCuc = []
  let markersPointsBogCuc = { electronic: [], physical: [], mixed: [] }

  var rendererCalMed = new google.maps.DirectionsRenderer({ preserveViewport: true })
  let markersCalMed = []
  let markersPointsCalMed = { electronic: [], physical: [], mixed: [] }

  var rendererBogLln = new google.maps.DirectionsRenderer({ preserveViewport: true })
  let markersBogLln = []
  let markersPointsBogLln = { electronic: [], physical: [], mixed: [] }

  function setMapMarkers(map, markers) {
    for (let index = 0; index < markers.length; index++) {
      markers[index].setMap(map)
    }
  }

  function setMapMarkersElectronics(map, markers) {
    for (let index = 0; index < markers.electronic.length; index++) {
      markers.electronic[index].setMap(map)
    }
  }

  function setMapMarkersPhysical(map, markers) {
    for (let index = 0; index < markers.physical.length; index++) {
      markers.physical[index].setMap(map)
    }
  }

  function setMapMarkersMixed(map, markers) {
    for (let index = 0; index < markers.mixed.length; index++) {
      markers.mixed[index].setMap(map)
    }
  }

  function selectedWaypoints(route, markers) {
    var waypoints = []
    for (let i = 0; i < points.length; i++) {
      const point = points[i]
      if (point.checked) {
        const array = pointsCoordinates[point.value][route]
        array.forEach((e) => {
          waypoints.push({
            location: e,
            stopover: true,
          })
          let icon
          if (point.value === 'electronic')
            icon = 'https://clientes.mi-martinez.com/sabi/wp-content/uploads/2020/08/icon-puestoElectricos.svg'
          if (point.value === 'mixed')
            icon = 'https://clientes.mi-martinez.com/sabi/wp-content/uploads/2020/08/icon-puestoMixtos.svg'
          if (point.value === 'physical')
            icon = 'https://clientes.mi-martinez.com/sabi/wp-content/uploads/2020/08/icon-puestosFisicos.svg'
          let marker = new google.maps.Marker({
            position: e,
            map,
            icon,
          })
          markers[point.value].push(marker)
        });
      } else {
        if (point.value === 'electronic'){
          setMapMarkersElectronics(null, markers)
        }
        if (point.value === 'mixed'){
          setMapMarkersMixed(null, markers)
        }
        if (point.value === 'physical'){
          setMapMarkersPhysical(null, markers)
        }
      }
    }
    return waypoints
  }

  //ROUTE BOG-BUN
  async function selectRouteBogBun(state, all) {
    if (state) {
      if (!all) {
        selectRouteMedCar(false)
        selectRouteBogBar(false)
        selectRouteBogMed(false)
        selectRouteBogCuc(false)
        selectRouteCalMed(false)
        selectRouteBogLln(false)
      }
      const { origin, destination } = routesCoordinates['bog_bun']
      routeBogBun.setAttribute('checked', 'true')
      rendererBogBun.setMap(map)
      var markerStart = new google.maps.Marker({
        position: origin,
        map,
        icon: icon_point
      })
      var markerEnd = new google.maps.Marker({
        position: destination,
        map,
        icon: icon_point
      })
      markersBogBun.push(markerStart, markerEnd)
      var waypoints = selectedWaypoints('bog_bun', markersPointsBogBun)
      checkRoute(origin, destination, waypoints, rendererBogBun, directionsService)
    } else {
      routeBogBun.setAttribute('checked', 'false')
      rendererBogBun.setOptions({
        suppressPolylines: true,
        suppressMarkers: true,
      })
      rendererBogBun.setMap(map)
      setMapMarkers(null, markersBogBun)
      setMapMarkersElectronics(null, markersPointsBogBun)
      setMapMarkersMixed(null, markersPointsBogBun)
      setMapMarkersPhysical(null, markersPointsBogBun)
      markersBogBun = []
      markersPointsBogBun = { electronic: [], physical: [], mixed: [] }
    }
  }
  routeBogBun.addEventListener('click', () => selectRouteBogBun(true))

  //ROUTE MED-CAR
  function selectRouteMedCar(state, all) {
    if (state) {
      if (!all) {
        selectRouteBogBun(false)
        selectRouteBogBar(false)
        selectRouteBogMed(false)
        selectRouteBogCuc(false)
        selectRouteCalMed(false)
        selectRouteBogLln(false)
      }
      routeMedCar.setAttribute('checked', 'true')
      const { origin, destination } = routesCoordinates['med_car']
      var markerStart = new google.maps.Marker({
        position: origin,
        map,
        icon: icon_point
      })
      var markerEnd = new google.maps.Marker({
        position: destination,
        map,
        icon: icon_point
      })
      markersMedCar.push(markerStart, markerEnd)
      var waypoints = selectedWaypoints('med_car', markersPointsMedCar)
      checkRoute(origin, destination, waypoints, rendererMedCar, directionsService)
      rendererMedCar.setMap(map)
    } else {
      routeMedCar.setAttribute('checked', 'false')
      rendererMedCar.setOptions({
        suppressPolylines: true,
        suppressMarkers: true,
      })
      rendererMedCar.setMap(map)
      setMapMarkers(null, markersMedCar)
      setMapMarkersElectronics(null, markersPointsMedCar)
      setMapMarkersMixed(null, markersPointsMedCar)
      setMapMarkersPhysical(null, markersPointsMedCar)
      markersMedCar = []
      markersPointsMedCar = { electronic: [], physical: [], mixed: [] }
    }
  }
  routeMedCar.addEventListener('click', () => selectRouteMedCar(true))

  //ROUTE BOG-BAR
  function selectRouteBogBar(state, all) {
    if (state) {
      if (!all) {
        selectRouteBogBun(false)
        selectRouteMedCar(false)
        selectRouteBogMed(false)
        selectRouteBogCuc(false)
        selectRouteCalMed(false)
        selectRouteBogLln(false)
      }
      routeBogBar.setAttribute('checked', 'true')
      const { origin, destination } = routesCoordinates['bog_bar']
      var markerStart = new google.maps.Marker({
        position: origin,
        map,
        icon: icon_point
      })
      var markerEnd = new google.maps.Marker({
        position: destination,
        map,
        icon: icon_point
      })
      markersBogBar.push(markerStart, markerEnd)
      var waypoints = selectedWaypoints('bog_bar', markersPointsBogBar)
      checkRoute(origin, destination, waypoints, rendererBogBar, directionsService, map)
      rendererBogBar.setMap(map)
    } else {
      routeBogBar.setAttribute('checked', 'false')
      rendererBogBar.setOptions({
        suppressPolylines: true,
        suppressMarkers: true,
      })
      rendererBogBar.setMap(map)
      setMapMarkers(null, markersBogBar)
      setMapMarkersElectronics(null, markersPointsBogBar)
      setMapMarkersMixed(null, markersPointsBogBar)
      setMapMarkersPhysical(null, markersPointsBogBar)
      markersBogBar = []
      markersPointsBogBar = { electronic: [], physical: [], mixed: [] }
    }
  }
  routeBogBar.addEventListener('click', () => selectRouteBogBar(true))

  //ROUTE BOG-MED
  function selectRouteBogMed(state, all) {
    if (state) {
      if (!all) {
        selectRouteBogBun(false)
        selectRouteMedCar(false)
        selectRouteBogBar(false)
        selectRouteBogCuc(false)
        selectRouteCalMed(false)
        selectRouteBogLln(false)
      }
      routeBogMed.setAttribute('checked', 'true')
      const { origin, destination } = routesCoordinates['bog_med']
      var markerStart = new google.maps.Marker({
        position: origin,
        map,
        icon: icon_point
      })
      var markerEnd = new google.maps.Marker({
        position: destination,
        map,
        icon: icon_point
      })
      markersBogMed.push(markerStart, markerEnd)
      var waypoints = selectedWaypoints('bog_med', markersPointsBogMed)
      checkRoute(origin, destination, waypoints, rendererBogMed, directionsService, map)
      rendererBogMed.setMap(map)
    } else {
      routeBogMed.setAttribute('checked', 'false')
      rendererBogMed.setOptions({
        suppressPolylines: true,
        suppressMarkers: true,
      })
      rendererBogMed.setMap(map)
      setMapMarkers(null, markersBogMed)
      setMapMarkersElectronics(null, markersPointsBogMed)
      setMapMarkersMixed(null, markersPointsBogMed)
      setMapMarkersPhysical(null, markersPointsBogMed)
      markersBogMed = []
      markersPointsBogMed = { electronic: [], physical: [], mixed: [] }
    }
  }
  routeBogMed.addEventListener('click', () => selectRouteBogMed(true))

  //ROUTE BOG-CUC
  function selectRouteBogCuc(state, all) {
    if (state) {
      if (!all) {
        selectRouteBogBun(false)
        selectRouteMedCar(false)
        selectRouteBogBar(false)
        selectRouteBogMed(false)
        selectRouteCalMed(false)
        selectRouteBogLln(false)
      }
      routeBogCuc.setAttribute('checked', 'true')
      const { origin, destination } = routesCoordinates['bog_cuc']
      var markerStart = new google.maps.Marker({
        position: origin,
        map,
        icon: icon_point
      })
      var markerEnd = new google.maps.Marker({
        position: destination,
        map,
        icon: icon_point
      })
      markersBogCuc.push(markerStart, markerEnd)
      var waypoints = selectedWaypoints('bog_cuc', markersPointsBogCuc)
      checkRoute(origin, destination, waypoints, rendererBogCuc, directionsService, map)
      rendererBogCuc.setMap(map)
    } else {
      routeBogCuc.setAttribute('checked', 'false')
      rendererBogCuc.setOptions({
        suppressPolylines: true,
        suppressMarkers: true,
      })
      rendererBogCuc.setMap(map)
      setMapMarkers(null, markersBogCuc)
      setMapMarkersElectronics(null, markersPointsBogCuc)
      setMapMarkersMixed(null, markersPointsBogCuc)
      setMapMarkersPhysical(null, markersPointsBogCuc)
      markersBogCuc = []
      markersPointsBogCuc = { electronic: [], physical: [], mixed: [] }
    }
  }
  routeBogCuc.addEventListener('click', () => selectRouteBogCuc(true))

  //ROUTE CAL-MED
  function selectRouteCalMed(state, all) {
    if (state) {
      if (!all) {
        selectRouteBogBun(false)
        selectRouteMedCar(false)
        selectRouteBogBar(false)
        selectRouteBogMed(false)
        selectRouteBogCuc(false)
        selectRouteBogLln(false)
      }
      routeCalMed.setAttribute('checked', 'true')
      const { origin, destination } = routesCoordinates['cal_med']
      var markerStart = new google.maps.Marker({
        position: origin,
        map,
        icon: icon_point
      })
      var markerEnd = new google.maps.Marker({
        position: destination,
        map,
        icon: icon_point
      })
      markersCalMed.push(markerStart, markerEnd)
      var waypoints = selectedWaypoints('cal_med', markersPointsCalMed)
      checkRoute(origin, destination, waypoints, rendererCalMed, directionsService, map)
      rendererCalMed.setMap(map)
    } else {
      routeCalMed.setAttribute('checked', 'false')
      rendererCalMed.setOptions({
        suppressPolylines: true,
        suppressMarkers: true,
      })
      rendererCalMed.setMap(map)
      setMapMarkers(null, markersCalMed)
      setMapMarkersElectronics(null, markersPointsCalMed)
      setMapMarkersMixed(null, markersPointsCalMed)
      setMapMarkersPhysical(null, markersPointsCalMed)
      markersCalMed = []
      markersPointsCalMed = { electronic: [], physical: [], mixed: [] }
    }
  }
  routeCalMed.addEventListener('click', () => selectRouteCalMed(true))

  //ROUTE BOG-LLN
  function selectRouteBogLln(state, all) {
    if (state) {
      if (!all) {
        selectRouteBogBun(false)
        selectRouteMedCar(false)
        selectRouteBogBar(false)
        selectRouteBogMed(false)
        selectRouteBogCuc(false)
        selectRouteCalMed(false)
      }
      routeBogLln.setAttribute('checked', 'true')
      const { origin, destination } = routesCoordinates['bog_lln']
      var markerStart = new google.maps.Marker({
        position: origin,
        map,
        icon: icon_point
      })
      var markerEnd = new google.maps.Marker({
        position: destination,
        map,
        icon: icon_point
      })
      markersBogLln.push(markerStart, markerEnd)
      var waypoints = selectedWaypoints('bog_lln', markersPointsBogLln)
      checkRoute(origin, destination, waypoints, rendererBogLln, directionsService, map)
      rendererBogLln.setMap(map)
    } else {
      routeBogLln.setAttribute('checked', 'false')
      rendererBogLln.setOptions({
        suppressPolylines: true,
        suppressMarkers: true,
      })
      rendererBogLln.setMap(map)
      setMapMarkers(null, markersBogLln)
      setMapMarkersElectronics(null, markersPointsBogLln)
      setMapMarkersMixed(null, markersPointsBogLln)
      setMapMarkersPhysical(null, markersPointsBogLln)
      markersBogLln = []
      markersPointsBogLln = { electronic: [], physical: [], mixed: [] }
    }
  }
  routeBogLln.addEventListener('click', () => selectRouteBogLln(true))

  function allRoutes() {
    setTimeout(() => {
      selectRouteBogBar(true, true)
    }, 1500)
    setTimeout(() => {
      selectRouteBogBun(true, true)
    }, 1500)
    setTimeout(() => {
      selectRouteBogCuc(true, true)
    }, 1500)
    setTimeout(() => {
      selectRouteBogLln(true, true)
    }, 1500)
    setTimeout(() => {
      selectRouteBogMed(true, true)
    }, 1500)
    setTimeout(() => {
      selectRouteCalMed(true, true)
    }, 1500)
    setTimeout(() => {
      selectRouteMedCar(true, true)
    }, 1500)
  }
  buttonAllRoutes.addEventListener('click', () => allRoutes())

  function allPoints() {
    electronicPoint.checked = true
    physicalPoint.checked = true
    mixedPoint.checked = true
    updateRoutes()
  }
  buttonAllPoints.addEventListener('click', () => allPoints())

  function updateRoutes() {
    if (
      routeBogBar.getAttribute('checked') === 'true' &&
      routeBogBun.getAttribute('checked') === 'true' &&
      routeBogCuc.getAttribute('checked') === 'true' &&
      routeBogLln.getAttribute('checked') === 'true' &&
      routeBogMed.getAttribute('checked') === 'true' &&
      routeCalMed.getAttribute('checked') === 'true' &&
      routeMedCar.getAttribute('checked') === 'true'
    ) {
      allRoutes()
    } else {
      if (routeBogBar.getAttribute('checked') == 'true') selectRouteBogBar(true)
      if (routeBogBun.getAttribute('checked') == 'true') selectRouteBogBun(true)
      if (routeBogCuc.getAttribute('checked') == 'true') selectRouteBogCuc(true)
      if (routeBogLln.getAttribute('checked') == 'true') selectRouteBogLln(true)
      if (routeBogMed.getAttribute('checked') == 'true') selectRouteBogMed(true)
      if (routeCalMed.getAttribute('checked') == 'true') selectRouteCalMed(true)
      if (routeMedCar.getAttribute('checked') == 'true') selectRouteMedCar(true)
    }
  }

  electronicPoint.addEventListener('click', function () {
    updateRoutes()
  })
  physicalPoint.addEventListener('click', function () {
    updateRoutes()
  })
  mixedPoint.addEventListener('click', function () {
    updateRoutes()
  })

  buttonAllRoutes.click()
  buttonAllPoints.click()
}

function checkRoute(origin, destination, waypoints, render, service, map) {
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
