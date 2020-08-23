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

const routeBogMed = document.getElementById('routeBogMed')
const routeManGua = document.getElementById('routeManGua')
const routeMedCar = document.getElementById('routeMedCar')
const routeCalMed = document.getElementById('routeCalMed')
const routeBogCuc = document.getElementById('routeBogCuc')
const routeBogAqui = document.getElementById('routeBogAqui')
const routeCalPas = document.getElementById('routeCalPas')
const routeBogBue = document.getElementById('routeBogBue')
const routeBogBar = document.getElementById('routeBogBar')

const points = document.getElementsByName('points')
const electronicPoint = document.getElementById('electronic')
const physicalPoint = document.getElementById('physical')
const mixedPoint = document.getElementById('mixed')

const buttonAllRoutes = document.getElementById('allRoutes')
const buttonAllPoints = document.getElementById('allPoints')

var icon_point = "https://clientes.mi-martinez.com/sabi/wp-content/uploads/2020/08/icon-point-blue.png"
var icon_mixed = "https://clientes.mi-martinez.com/sabi/wp-content/uploads/2020/08/icon-puestoMixtos.svg"
var icon_physical = "https://clientes.mi-martinez.com/sabi/wp-content/uploads/2020/08/icon-puestosFisicos.svg"
var icon_electronic = "https://clientes.mi-martinez.com/sabi/wp-content/uploads/2020/08/icon-puestoElectricos.svg"

var text_mixed = "Puesto de control Mixto"
var text_physical = "Puesto de control Fisico"
var text_electronic = "Puesto de control Electronico"

const titleRoute = document.getElementById('titleRoute')
const titlePoints = document.getElementById('titlePoints')

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
  directionsRenderer.setMap(map)

  //ROUTE BOG-MED
  var rendererBogMed = new google.maps.DirectionsRenderer()
  let markersBogMed = { points: [], electronic: [], physical: [], mixed: [] }
  async function selectRouteBogMed(state, all) {
    if (state) {
      if (!all) {
        selectRouteBogAqui(false)
        selectRouteBogBar(false)
        selectRouteBogBue(false)
        selectRouteBogCuc(false)
        selectRouteCalPas(false)
        selectRouteCalMed(false)
        selectRouteMedCar(false)
        selectRouteManGua(false)
        titleRoute.innerText = 'BOG - MED'
        rendererBogMed.setOptions({ preserveViewport: false })
      } else {
        rendererBogMed.setOptions({ preserveViewport: true })
      }
      selectRoute('bog_med', routeBogMed, rendererBogMed, map, markersBogMed, directionsService)
    } else {
      deselectRoute(routeBogMed, rendererBogMed, map, markersBogMed)
    }
  }
  routeBogMed.addEventListener('click', () => selectRouteBogMed(true))

  //ROUTE MAN-GUA
  var rendererManGua = new google.maps.DirectionsRenderer()
  let markersManGua = { points: [], electronic: [], physical: [], mixed: [] }
  async function selectRouteManGua(state, all) {
    if (state) {
      if (!all) {
        selectRouteBogAqui(false)
        selectRouteBogBar(false)
        selectRouteBogBue(false)
        selectRouteBogCuc(false)
        selectRouteCalPas(false)
        selectRouteCalMed(false)
        selectRouteMedCar(false)
        selectRouteBogMed(false)
        titleRoute.innerText = 'MAN - GUA'
        rendererManGua.setOptions({ preserveViewport: false })
      } else {
        rendererManGua.setOptions({ preserveViewport: true })
      }
      selectRoute('man_gua', routeManGua, rendererManGua, map, markersManGua, directionsService)
    } else {
      deselectRoute(routeManGua, rendererManGua, map, markersManGua)
    }
  }
  routeManGua.addEventListener('click', () => selectRouteManGua(true))

  //ROUTE MED-CAR
  var rendererMedCar = new google.maps.DirectionsRenderer()
  let markersMedCar = { points: [], electronic: [], physical: [], mixed: [] }
  async function selectRouteMedCar(state, all) {
    if (state) {
      if (!all) {
        selectRouteBogAqui(false)
        selectRouteBogBar(false)
        selectRouteBogBue(false)
        selectRouteBogCuc(false)
        selectRouteCalPas(false)
        selectRouteCalMed(false)
        selectRouteManGua(false)
        selectRouteBogMed(false)
        titleRoute.innerText = 'MED - CAR'
        rendererMedCar.setOptions({ preserveViewport: false })
      } else {
        rendererMedCar.setOptions({ preserveViewport: true })
      }
      selectRoute('med_car', routeMedCar, rendererMedCar, map, markersMedCar, directionsService)
    } else {
      deselectRoute(routeMedCar, rendererMedCar, map, markersMedCar)
    }
  }
  routeMedCar.addEventListener('click', () => selectRouteMedCar(true))

  //ROUTE CAL-Med
  var rendererCalMed = new google.maps.DirectionsRenderer()
  let markersCalMed = { points: [], electronic: [], physical: [], mixed: [] }
  async function selectRouteCalMed(state, all) {
    if (state) {
      if (!all) {
        selectRouteBogAqui(false)
        selectRouteBogBar(false)
        selectRouteBogBue(false)
        selectRouteBogCuc(false)
        selectRouteCalPas(false)
        selectRouteManGua(false)
        selectRouteMedCar(false)
        selectRouteBogMed(false)
        titleRoute.innerText = 'CAL - MED'
        rendererCalMed.setOptions({ preserveViewport: false })
      } else {
        rendererCalMed.setOptions({ preserveViewport: true })
      }
      selectRoute('cal_med', routeCalMed, rendererCalMed, map, markersCalMed, directionsService)
    } else {
      deselectRoute(routeCalMed, rendererCalMed, map, markersCalMed)
    }
  }
  routeCalMed.addEventListener('click', () => selectRouteCalMed(true))

  //ROUTE BOG-CUC
  var rendererBogCuc = new google.maps.DirectionsRenderer()
  let markersBogCuc = { points: [], electronic: [], physical: [], mixed: [] }
  async function selectRouteBogCuc(state, all) {
    if (state) {
      if (!all) {
        selectRouteBogAqui(false)
        selectRouteBogBar(false)
        selectRouteBogBue(false)
        selectRouteCalPas(false)
        selectRouteCalMed(false)
        selectRouteManGua(false)
        selectRouteMedCar(false)
        selectRouteBogMed(false)
        titleRoute.innerText = 'BOG - CUC'
        rendererBogCuc.setOptions({ preserveViewport: false })
      } else {
        rendererBogCuc.setOptions({ preserveViewport: true })
      }
      selectRoute('bog_cuc', routeBogCuc, rendererBogCuc, map, markersBogCuc, directionsService)
    } else {
      deselectRoute(routeBogCuc, rendererBogCuc, map, markersBogCuc)
    }
  }
  routeBogCuc.addEventListener('click', () => selectRouteBogCuc(true))

  //ROUTE BOG-AQUI
  var rendererBogAqui = new google.maps.DirectionsRenderer()
  let markersBogAqui = { points: [], electronic: [], physical: [], mixed: [] }
  async function selectRouteBogAqui(state, all) {
    if (state) {
      if (!all) {
        selectRouteBogBar(false)
        selectRouteBogBue(false)
        selectRouteBogCuc(false)
        selectRouteCalPas(false)
        selectRouteCalMed(false)
        selectRouteManGua(false)
        selectRouteMedCar(false)
        selectRouteBogMed(false)
        titleRoute.innerText = 'BOG - AQUI'
        rendererBogAqui.setOptions({ preserveViewport: false })
      } else {
        rendererBogAqui.setOptions({ preserveViewport: true })
      }
      selectRoute('bog_aqui', routeBogAqui, rendererBogAqui, map, markersBogAqui, directionsService)
    } else {
      deselectRoute(routeBogAqui, rendererBogAqui, map, markersBogAqui)
    }
  }
  routeBogAqui.addEventListener('click', () => selectRouteBogAqui(true))

  //ROUTE CAL-PAS
  var rendererCalPas = new google.maps.DirectionsRenderer()
  let markersCalPas = { points: [], electronic: [], physical: [], mixed: [] }
  async function selectRouteCalPas(state, all) {
    if (state) {
      if (!all) {
        selectRouteBogAqui(false)
        selectRouteBogBar(false)
        selectRouteBogBue(false)
        selectRouteBogCuc(false)
        selectRouteCalMed(false)
        selectRouteManGua(false)
        selectRouteMedCar(false)
        selectRouteBogMed(false)
        titleRoute.innerText = 'CAL - PAS'
        rendererCalPas.setOptions({ preserveViewport: false })
      } else {
        rendererCalPas.setOptions({ preserveViewport: true })
      }
      selectRoute('cal_pas', routeCalPas, rendererCalPas, map, markersCalPas, directionsService)
    } else {
      deselectRoute(routeCalPas, rendererCalPas, map, markersCalPas)
    }
  }
  routeCalPas.addEventListener('click', () => selectRouteCalPas(true))

  //ROUTE BOG-BUE
  var rendererBogBue = new google.maps.DirectionsRenderer()
  let markersBogBue = { points: [], electronic: [], physical: [], mixed: [] }
  async function selectRouteBogBue(state, all) {
    if (state) {
      if (!all) {
        selectRouteBogAqui(false)
        selectRouteBogBar(false)
        selectRouteBogCuc(false)
        selectRouteCalPas(false)
        selectRouteCalMed(false)
        selectRouteManGua(false)
        selectRouteMedCar(false)
        selectRouteBogMed(false)
        titleRoute.innerText = 'BOG - BUE'
        rendererBogBue.setOptions({ preserveViewport: false })
      } else {
        rendererBogBue.setOptions({ preserveViewport: true })
      }
      selectRoute('bog_bue', routeBogBue, rendererBogBue, map, markersBogBue, directionsService)
    } else {
      deselectRoute(routeBogBue, rendererBogBue, map, markersBogBue)
    }
  }
  routeBogBue.addEventListener('click', () => selectRouteBogBue(true))

  //ROUTE BOG-BAR
  var rendererBogBar = new google.maps.DirectionsRenderer()
  let markersBogBar = { points: [], electronic: [], physical: [], mixed: [] }
  async function selectRouteBogBar(state, all) {
    if (state) {
      if (!all) {
        selectRouteBogAqui(false)
        selectRouteBogBue(false)
        selectRouteBogCuc(false)
        selectRouteCalPas(false)
        selectRouteCalMed(false)
        selectRouteManGua(false)
        selectRouteMedCar(false)
        selectRouteBogMed(false)
        titleRoute.innerText = 'BOG - BAR'
        rendererBogBar.setOptions({ preserveViewport: false })
      } else {
        rendererBogBar.setOptions({ preserveViewport: true })
      }
      selectRoute('bog_bar', routeBogBar, rendererBogBar, map, markersBogBar, directionsService)
    } else {
      deselectRoute(routeBogBar, rendererBogBar, map, markersBogBar)
    }
  }
  routeBogBar.addEventListener('click', () => selectRouteBogBar(true))

  //ALL ROUTES AND POINTS
  function allRoutes() {
    setTimeout(() => {
      selectRouteManGua(true, true)
    }, 1300)
    setTimeout(() => {
      selectRouteMedCar(true, true)
    }, 1300)
    setTimeout(() => {
      selectRouteCalMed(true, true)
    }, 1300)
    setTimeout(() => {
      selectRouteBogCuc(true, true)
    }, 1300)
    setTimeout(() => {
      selectRouteBogAqui(true, true)
    }, 1300)
    setTimeout(() => {
      selectRouteCalPas(true, true)
    }, 1300)
    setTimeout(() => {
      selectRouteBogBue(true, true)
    }, 1300)
    setTimeout(() => {
      selectRouteBogBar(true, true)
    }, 1300)
    titleRoute.innerText = 'TODOS'
    map.setOptions({ zoom: 6.6, center: { lat: 6.4920373, lng: -75.5535881 } })
  }
  buttonAllRoutes.addEventListener('click', () => allRoutes())

  function allPoints() {
    electronicPoint.checked = true
    physicalPoint.checked = true
    mixedPoint.checked = true
    //titlePoints.innerText = 'TODOS'
    updateRoutes()
  }
  buttonAllPoints.addEventListener('click', () => allPoints())

  function updateRoutes() {
    if (
      routeManGua.getAttribute('checked') === 'true' &&
      routeMedCar.getAttribute('checked') === 'true' &&
      routeCalMed.getAttribute('checked') === 'true' &&
      routeBogCuc.getAttribute('checked') === 'true' &&
      routeBogAqui.getAttribute('checked') === 'true' &&
      routeCalPas.getAttribute('checked') === 'true' &&
      routeBogBue.getAttribute('checked') === 'true' &&
      routeBogBar.getAttribute('checked') === 'true'
    ) {
      allRoutes()
    } else {
      if (routeManGua.getAttribute('checked') === 'true') selectRouteManGua(true)
      if (routeMedCar.getAttribute('checked') === 'true') selectRouteMedCar(true)
      if (routeCalMed.getAttribute('checked') === 'true') selectRouteCalMed(true)
      if (routeBogCuc.getAttribute('checked') === 'true') selectRouteBogCuc(true)
      if (routeBogAqui.getAttribute('checked') === 'true') selectRouteBogAqui(true)
      if (routeCalPas.getAttribute('checked') === 'true') selectRouteCalPas(true)
      if (routeBogBue.getAttribute('checked') === 'true') selectRouteBogBue(true)
      if (routeBogBar.getAttribute('checked') === 'true') selectRouteBogBar(true)
    }
  }

  electronicPoint.addEventListener('click', function () { updateRoutes() })
  physicalPoint.addEventListener('click', function () { updateRoutes() })
  mixedPoint.addEventListener('click', function () { updateRoutes() })

  //INIT ALL ROUTES AND ALL POINTS
  buttonAllRoutes.click()
  buttonAllPoints.click()
}

function setMarkersPoints(map, markers, points) {
  const object = markers
  if (points) {
    const arrayPoints = eval("object." + points)
    for (let index = 0; index < arrayPoints.length; index++) {
      arrayPoints[index].setMap(map)
    }
  } else {
    Object.keys(object).map(key => {
      for (let index = 0; index < object[key].length; index++) {
        object[key][index].setMap(map)
      }
      object[key] = []
    })
  }
}

function selectedWaypoints(route, markers, map) {
  var waypoints = []
  for (let i = 0; i < points.length; i++) {
    const point = points[i]
    if (point.checked) {
      const array = routes[route].points[point.value]
      array.forEach((item) => {
        waypoints.push({
          location: item.position,
          stopover: true,
        })
        if (item.name) {
          var content = '<div class="popup-marker" id="content">' +
            `<h5>${item.name}</h5>` +
            `<p>${eval('text_' + point.value)}</p>` +
            `<p>${item.ubication}</p>` +
            '</div>'

          var info = new google.maps.InfoWindow({
            content
          })
          let icon = eval('icon_' + point.value)
          let marker = new google.maps.Marker({
            position: item.position,
            map,
            icon,
            title: item.name
          })
          markers[point.value].push(marker)
          marker.addListener('click', function () {
            info.open(map, marker);
          });
        }
      });
    } else {
      setMarkersPoints(null, markers, point.value)
    }
  }
  return waypoints
}

function deselectRoute(route, render, map, markers) {
  route.setAttribute('checked', 'false')
  render.setOptions({ suppressPolylines: true, suppressMarkers: true })
  setMarkersPoints(null, markers)
  render.setMap(map)
}

function selectRoute(name_route, route, render, map, markers, service) {
  route.setAttribute('checked', 'true')
  const { origin, destination } = routes[name_route]
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
  markers['points'].push(markerStart, markerEnd)
  var waypoints = selectedWaypoints(name_route, markers, map)
  checkRoute(origin, destination, waypoints, render, service)
  render.setMap(map)
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