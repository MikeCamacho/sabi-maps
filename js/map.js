const routeBogBun = document.getElementById('routeBogBun')
const routeMedCar = document.getElementById('routeMedCar')
const routeBogBar = document.getElementById('routeBogBar')
const routeBogMed = document.getElementById('routeBogMed')
const routeBogCuc = document.getElementById('routeBogCuc')
const routeCalMed = document.getElementById('routeCalMed')
const routeBogLln = document.getElementById('routeBogLln')

const pointParqueadero = document.getElementById('pointParquedero')
const pointMontaña = document.getElementById('pointMontaña')

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

const routes = document.getElementsByName('routes')
const routesCoordinates = {
  bog_bun: { origin: '4.59808, -74.0760439', destination: '3.89005264, -77.0737238' },
  med_car: { origin: '6.2443382, -75.573553', destination: '10.4195841, -75.5271224' },
  bog_bar: { origin: '4.59808, -74.0760439', destination: '11.01184845, -74.80886012' },
  bog_med: { origin: '4.59808, -74.0760439', destination: '6.2443382, -75.573553' },
  bog_cuc: { origin: '4.59808, -74.0760439', destination: '7.8971458, -72.5080387' },
  cal_med: { origin: '3.4108435, -76.58121271', destination: '6.2443382, -75.573553' },
  bog_lln: { origin: '4.59808, -74.0760439', destination: '4.3120724, -72.0829509' }
}

const points = document.getElementsByName('points')
//se puede hacer por grupo de points
const pointsCoordinates = {
  parqueadero: '4.959757, -75.090155',
  montaña: '4.264340, -74.606285'
}

function initMap() {
  var directionsService = new google.maps.DirectionsService()
  var directionsRenderer = new google.maps.DirectionsRenderer()
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: { lat: 3.6010754, lng: -72.6167754 },
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

  function selectRoute(route, render) {
    if (route.checked) {
      const { origin, destination } = routesCoordinates[route.value]

      var waypoints = selectedWaypoints()

      var request = {
        origin,
        destination,
        waypoints,
        optimizeWaypoints: true,
        provideRouteAlternatives: true,
        travelMode: 'DRIVING'
      }

      directionsService.route(request, function (response, status) {
        if (status == 'OK') {
          render.setMap(map)
          render.setOptions({ directions: response, suppressPolylines: false, suppressMarkers: false })
        } else {
          window.alert('Directions request failed due to ' + status)
        }
      })
    } else {
      render.setMap(map)
      render.setOptions({ suppressPolylines: true, suppressMarkers: true })
    }
  }

  function selectedWaypoints() {
    var waypoints = []
    for (let i = 0; i < points.length; i++) {
      const point = points[i]
      if (point.checked) {
        waypoints.push({
          location: pointsCoordinates[point.value],
          stopover: true
        })
      }
    }
    return waypoints
  }

  routeBogBun.addEventListener('change', () => selectRoute(routeBogBun, rendererBogBun))
  routeMedCar.addEventListener('change', () => selectRoute(routeMedCar, rendererMedCar))
  routeBogBar.addEventListener('change', () => selectRoute(routeBogBar, rendererBogBar))
  routeBogMed.addEventListener('change', () => selectRoute(routeBogMed, rendererBogMed))
  routeBogCuc.addEventListener('change', () => selectRoute(routeBogCuc, rendererBogCuc))
  routeCalMed.addEventListener('change', () => selectRoute(routeCalMed, rendererCalMed))
  routeBogLln.addEventListener('change', () => selectRoute(routeBogLln, rendererBogLln))

  function updateRoute() {
    selectRoute(routeBogBun, rendererBogBun)
    selectRoute(routeMedCar, rendererMedCar)
    selectRoute(routeBogBar, rendererBogBar)
    selectRoute(routeBogMed, rendererBogMed)
    selectRoute(routeBogCuc, rendererBogCuc)
    selectRoute(routeCalMed, rendererCalMed)
    selectRoute(routeBogLln, rendererBogLln)
  }

  pointParqueadero.addEventListener('change', () => updateRoute())
  pointMontaña.addEventListener('change', () => updateRoute())


}

