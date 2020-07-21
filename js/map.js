//DROP DOWNS
const dropDownBtnRoutes = document.getElementById('dropDownBtnRoutes')
const dropDownPanelRoutes = document.getElementById('dropDownPanelRoutes')
dropDownBtnRoutes.addEventListener('click', function () {
  dropDownPanelRoutes.classList.toggle('show')
})
const dropDownBtnPoints = document.getElementById('dropDownBtnPoints')
const dropDownPanelPoints = document.getElementById('dropDownPanelPoints')
dropDownBtnPoints.addEventListener('click', function () {
  dropDownPanelPoints.classList.toggle('show')
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

const routesCoordinates = {
  bog_bun: { origin: '4.59808, -74.0760439', destination: '3.89005264, -77.0737238' },
  med_car: { origin: '6.2443382, -75.573553', destination: '10.4195841, -75.5271224' },
  bog_bar: { origin: '4.59808, -74.0760439', destination: '11.01184845, -74.80886012' },
  bog_med: { origin: '4.59808, -74.0760439', destination: '6.2443382, -75.573553' },
  bog_cuc: { origin: '4.59808, -74.0760439', destination: '7.8971458, -72.5080387' },
  cal_med: { origin: '3.4108435, -76.58121271', destination: '6.2443382, -75.573553' },
  bog_lln: { origin: '4.59808, -74.0760439', destination: '4.3120724, -72.0829509' }
}

const pointsCoordinates = {
  electronic: {
    bog_bun: ['4.441265, -74.687023', '3.887984, -76.452030'],
    med_car: ['9.175375, -75.400853', '8.529448, -75.521137', '7.358891, -75.348556'],
    bog_bar: ['5.252074, -73.851417'],
    bog_med: ['6.013802, -75.417333'],
    bog_cuc: ['5.210830, -73.898135', '5.963198, -73.629186'],
    cal_med: ['3.897677, -76.378702'],
    bog_lln: ['4.063768, -73.436811', '4.346714, -73.882641']
  },
  physical: {
    bog_bun: ['4.466940, -75.814002', '4.534717, -74.579784', '4.461726, -75.772164'],
    med_car: ['6.850314, -75.568205'],
    bog_bar: ['6.543478, -73.184398', '8.350420, -73.613196'],
    bog_med: ['5.550962, -74.937586'],
    bog_cuc: ['6.765066, -72.720575'],
    cal_med: ['4.882684, -75.872077'],
    bog_lln: []
  },
  mixed: {
    bog_bun: ['4.326153, -76.070260'],
    med_car: ['6.699710, -75.494988', '8.063699, -75.359015'],
    bog_bar: ['9.867522, -74.625635', '9.268512, -73.875239'],
    bog_med: ['5.015351, -74.319731', '5.550962, -74.734057'],
    bog_cuc: ['7.371009, -72.713306', '7.710682, -72.623083'],
    cal_med: ['5.972072, -75.851812'],
    bog_lln: ['4.508350, -73.953568']
  }
}

function initMap() {
  var directionsService = new google.maps.DirectionsService()
  var directionsRenderer = new google.maps.DirectionsRenderer()
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6.8,
    center: { lat: 6.9920373, lng: -76.0535881 },
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  })
  directionsRenderer.setMap(map)

  var rendererBogBun = new google.maps.DirectionsRenderer({ preserveViewport: true })
  var rendererMedCar = new google.maps.DirectionsRenderer({ preserveViewport: true })
  var rendererBogBar = new google.maps.DirectionsRenderer({ preserveViewport: true })
  var rendererBogMed = new google.maps.DirectionsRenderer({ preserveViewport: true })
  var rendererBogCuc = new google.maps.DirectionsRenderer({ preserveViewport: true })
  var rendererCalMed = new google.maps.DirectionsRenderer({ preserveViewport: true })
  var rendererBogLln = new google.maps.DirectionsRenderer({ preserveViewport: true })

  function selectedWaypoints(route) {
    var waypoints = []
    for (let i = 0; i < points.length; i++) {
      const point = points[i]
      if (point.checked) {
        const array = pointsCoordinates[point.value][route]
        array.forEach(e => {
          waypoints.push({
            location: e,
            stopover: true
          })
        });
      }
    }
    return waypoints
  }

  //ROUTE BOG-BUN
  function selectRouteBogBun(state, all) {
    if (state) {
      if (!all) {
        selectRouteMedCar(false)
        selectRouteBogBar(false)
        selectRouteBogMed(false)
        selectRouteBogCuc(false)
        selectRouteCalMed(false)
        selectRouteBogLln(false)
      }
      routeBogBun.setAttribute('checked', 'true')
      const { origin, destination } = routesCoordinates['bog_bun']
      var waypoints = selectedWaypoints('bog_bun')
      checkRoute(origin, destination, waypoints, rendererBogBun, directionsService)
      rendererBogBun.setMap(map)
    } else {
      routeBogBun.setAttribute('checked', 'false')
      rendererBogBun.setOptions({ suppressPolylines: true, suppressMarkers: true })
      rendererBogBun.setMap(map)
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
      var waypoints = selectedWaypoints('med_car')
      checkRoute(origin, destination, waypoints, rendererMedCar, directionsService)
      rendererMedCar.setMap(map)
    } else {
      routeMedCar.setAttribute('checked', 'false')
      rendererMedCar.setOptions({ suppressPolylines: true, suppressMarkers: true })
      rendererMedCar.setMap(map)
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
      var waypoints = selectedWaypoints('bog_bar')
      checkRoute(origin, destination, waypoints, rendererBogBar, directionsService)
      rendererBogBar.setMap(map)
    } else {
      routeBogBar.setAttribute('checked', 'false')
      rendererBogBar.setOptions({ suppressPolylines: true, suppressMarkers: true })
      rendererBogBar.setMap(map)
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
      var waypoints = selectedWaypoints('bog_med')
      checkRoute(origin, destination, waypoints, rendererBogMed, directionsService)
      rendererBogMed.setMap(map)
    } else {
      routeBogMed.setAttribute('checked', 'false')
      rendererBogMed.setOptions({ suppressPolylines: true, suppressMarkers: true })
      rendererBogMed.setMap(map)
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
      var waypoints = selectedWaypoints('bog_cuc')
      checkRoute(origin, destination, waypoints, rendererBogCuc, directionsService)
      rendererBogCuc.setMap(map)
    } else {
      routeBogCuc.setAttribute('checked', 'false')
      rendererBogCuc.setOptions({ suppressPolylines: true, suppressMarkers: true })
      rendererBogCuc.setMap(map)
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
      var waypoints = selectedWaypoints('cal_med')
      checkRoute(origin, destination, waypoints, rendererCalMed, directionsService)
      rendererCalMed.setMap(map)
    } else {
      routeCalMed.setAttribute('checked', 'false')
      rendererCalMed.setOptions({ suppressPolylines: true, suppressMarkers: true })
      rendererCalMed.setMap(map)
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
      var waypoints = selectedWaypoints('bog_lln')
      checkRoute(origin, destination, waypoints, rendererBogLln, directionsService)
      rendererBogLln.setMap(map)
    } else {
      routeBogLln.setAttribute('checked', 'false')
      rendererBogLln.setOptions({ suppressPolylines: true, suppressMarkers: true })
      rendererBogLln.setMap(map)
    }
  }
  routeBogLln.addEventListener('click', () => selectRouteBogLln(true))

  function allRoutes() {
    setTimeout(() => { selectRouteBogBar(true, true) }, 1500)
    setTimeout(() => { selectRouteBogBun(true, true) }, 1500)
    setTimeout(() => { selectRouteBogCuc(true, true) }, 1500)
    setTimeout(() => { selectRouteBogLln(true, true) }, 1500)
    setTimeout(() => { selectRouteBogMed(true, true) }, 1500)
    setTimeout(() => { selectRouteCalMed(true, true) }, 1500)
    setTimeout(() => { selectRouteMedCar(true, true) }, 1500)
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
    if (routeBogBar.getAttribute('checked') === 'true'
      && routeBogBun.getAttribute('checked') === 'true'
      && routeBogCuc.getAttribute('checked') === 'true'
      && routeBogLln.getAttribute('checked') === 'true'
      && routeBogMed.getAttribute('checked') === 'true'
      && routeCalMed.getAttribute('checked') === 'true'
      && routeMedCar.getAttribute('checked') === 'true') {
      allRoutes()
    } else {
      if (routeBogBar.getAttribute('checked') == 'true')
        selectRouteBogBar(true)
      if (routeBogBun.getAttribute('checked') == 'true')
        selectRouteBogBun(true)
      if (routeBogCuc.getAttribute('checked') == 'true')
        selectRouteBogCuc(true)
      if (routeBogLln.getAttribute('checked') == 'true')
        selectRouteBogLln(true)
      if (routeBogMed.getAttribute('checked') == 'true')
        selectRouteBogMed(true)
      if (routeCalMed.getAttribute('checked') == 'true')
        selectRouteCalMed(true)
      if (routeMedCar.getAttribute('checked') == 'true')
        selectRouteMedCar(true)
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
}

function checkRoute(origin, destination, waypoints, render, service) {
  var request = {
    origin,
    destination,
    waypoints,
    optimizeWaypoints: true,
    provideRouteAlternatives: true,
    travelMode: 'DRIVING'
  }
  service.route(request, function (response, status) {
    try {
      if (status == 'OK') {
        render.setOptions({ directions: response, suppressPolylines: false, suppressMarkers: false })
      } else {
        window.alert('Directions request failed due to ' + status)
      }
    } catch (error) {
      console.log(error)
    }
  })
}
