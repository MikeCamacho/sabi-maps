const routeBogBun = document.getElementById('routeBogBun')
const routeMedCar = document.getElementById('routeMedCar')
const routeBogBar = document.getElementById('routeBogBar')
const routeBogMed = document.getElementById('routeBogMed')
const routeBogCuc = document.getElementById('routeBogCuc')
const routeCalMed = document.getElementById('routeCalMed')
const routeBogLln = document.getElementById('routeBogLln')
var selectOrigin = document.getElementById('start')
var selectDestination = document.getElementById('end')

const dropDownBtn = document.getElementById('dropDownBtn')
const dropDownPanel = document.getElementById('dropDownPanel')

dropDownBtn.addEventListener('click', function () {
  dropDownPanel.classList.toggle('show')
})

function initMap() {
  var directionsService = new google.maps.DirectionsService()
  var directionsRenderer = new google.maps.DirectionsRenderer()
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 3.6010754, lng: -72.6167754},
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  })
  directionsRenderer.setMap(map)

  // function onChangeHandler() {
  //   calculateAndDisplayRoute(directionsService, directionsRenderer)
  // }
  // document.getElementById('start').addEventListener('change', onChangeHandler)
  // document.getElementById('end').addEventListener('change', onChangeHandler)

  function onClickHandler() {
    selectOrigin = selectOrigin.selectedIndex = '4.59808, -74.0760439'
    selectDestination = selectDestination.selectedIndex =
      '3.89005264, -77.0737238'
    calculateAndDisplayRoute(
      directionsService,
      directionsRenderer,
      selectOrigin,
      selectDestination
    )
  }
  routeBogBun.addEventListener('click', onClickHandler)

  function onClickHandler1() {
    selectOrigin = selectOrigin.selectedIndex = '6.2443382, -75.573553'
    selectDestination = selectDestination.selectedIndex =
      '10.4195841, -75.5271224'
    calculateAndDisplayRoute(
      directionsService,
      directionsRenderer,
      selectOrigin,
      selectDestination
    )
  }
  routeMedCar.addEventListener('click', onClickHandler1)

  function onClickHandler2() {
    selectOrigin = selectOrigin.selectedIndex = '4.59808, -74.0760439'
    selectDestination = selectDestination.selectedIndex =
      '11.01184845, -74.80886012'
    calculateAndDisplayRoute(
      directionsService,
      directionsRenderer,
      selectOrigin,
      selectDestination
    )
  }
  routeBogBar.addEventListener('click', onClickHandler2)

  function onClickHandler3() {
    selectOrigin = selectOrigin.selectedIndex = '4.59808, -74.0760439'
    selectDestination = selectDestination.selectedIndex =
      '6.2443382, -75.573553'
    calculateAndDisplayRoute(
      directionsService,
      directionsRenderer,
      selectOrigin,
      selectDestination
    )
  }
  routeBogMed.addEventListener('click', onClickHandler3)

  function onClickHandler4() {
    selectOrigin = selectOrigin.selectedIndex = '4.59808, -74.0760439'
    selectDestination = selectDestination.selectedIndex =
      '7.8971458, -72.5080387'
    calculateAndDisplayRoute(
      directionsService,
      directionsRenderer,
      selectOrigin,
      selectDestination
    )
  }
  routeBogCuc.addEventListener('click', onClickHandler4)

  function onClickHandler5() {
    selectOrigin = selectOrigin.selectedIndex = '3.4108435, -76.58121271'
    selectDestination = selectDestination.selectedIndex =
      '6.2443382, -75.573553'
    calculateAndDisplayRoute(
      directionsService,
      directionsRenderer,
      selectOrigin,
      selectDestination
    )
  }
  routeCalMed.addEventListener('click', onClickHandler5)

  function onClickHandler6() {
    selectOrigin = selectOrigin.selectedIndex = '4.59808, -74.0760439'
    selectDestination = selectDestination.selectedIndex =
      '4.3120724, -72.0829509'
    calculateAndDisplayRoute(
      directionsService,
      directionsRenderer,
      selectOrigin,
      selectDestination
    )
  }
  routeBogLln.addEventListener('click', onClickHandler6)
}

function calculateAndDisplayRoute(
  directionsService,
  directionsRenderer,
  selectOrigin,
  selectDestination
) {
  var myLatlng = new google.maps.LatLng(41.149709, -80.182595)
  var origin = selectOrigin
  var destination = selectDestination
  directionsService.route(
    {
      origin: {query: origin},
      destination: {query: destination},
      travelMode: 'DRIVING',
    },
    function (response, status, map) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response)
        var marker = new google.maps.Marker()
        marker.setMap(map)
        marker.setPosition(myLatlng)
      } else {
        window.alert('Directions request failed due to ' + status)
      }
    }
  )
}
