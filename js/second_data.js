const zones = {
  east: {
    origin: { lat: 4.6273523, lng: -74.083301 },
    destination: { lat: 5.3328799, lng: -72.4261063 },
    points: {
      cities: [
        { lat: 4.3277051, lng: -73.8710759 },//quetame
        { lat: 4.1201653, lng: -73.643678 },//Villavicencio
        { lat: 4.0560889, lng: -73.1755426 },//Pachaquiaro
        { lat: 4.0903233, lng: -72.959896 },//pto lopez
        { lat: 4.2571163, lng: -73.564102 },//restrepo
        { lat: 4.2697853, lng: -73.488339 }, //cumaral
        { lat: 4.3763043, lng: -73.213404 }, //paratebueno
        { lat: 4.8816743, lng: -72.891351 },//monterrey
        { lat: 5.0114703, lng: -72.750982 }//tauramena
      ],
      type1: [
        {
          name: 'Aguazul',
          position: { lat: 5.16869, lng: -72.54503 }
        },
        {
          name: 'Pipiral',
          position: { lat: 4.20383, lng: -73.71635 }
        }
      ],
      type2: [
        {
          name: 'Monterrey',
          position: { lat: 4.619142, lng: -72.925438 }
        },
        {
          name: 'Chipaque',
          position: { lat: 4.4419322, lng: -74.0488241 }
        },
        {
          name: 'Puerto Gaitan',
          position: { lat: 4.31483, lng: -72.09992 }
        }
      ],
      matpel: []
    }
  },
  center: {
    origin: { lat: 4.6273523, lng: -74.083301 },
    destination: { lat: 7.7610842, lng: -73.4023927 },
    points: {
      cities: [
        { lat: 7.3923933, lng: -73.494368 },//Sabana de torres
        { lat: 6.5208613, lng: -74.104072 },//Puerto araujo
        { lat: 6.2608893, lng: -74.489076 },//Zambito
        { lat: 5.4654002, lng: -74.6591638 },//Puerto salgar
        { lat: 5.2072293, lng: -74.738393 }, //Honda
        { lat: 5.4143753, lng: -74.69078 },//El purnio
        { lat: 5.1897721, lng: -74.7147489 }, //guaduas
        { lat: 4.9972111, lng: -74.3411389 },//La vega
        { lat: 4.8071223, lng: -74.355662 },//Facatativa
        { lat: 4.7329912, lng: -74.2651858 },//Madrid
      ],
      type1: [
        {
          name: 'Guaduas',
          position: { lat: 5.07723, lng: -74.60063 }
        }
      ],
      type2: [
        {
          name: 'Lizama',
          position: { lat: 7.12140, lng: -73.59613 }
        },
        {
          name: 'Puerto Boyaca',
          position: { lat: 5.93852, lng: -74.57107 }
        },
        {
          name: 'Jalisco',
          position: { lat: 4.877034, lng: -74.438353 }
        }
      ],
      matpel: [
        {
          name: 'Mosquera',
          position: { lat: 4.7064627, lng: -74.2432617 }
        }
      ]
    }
  },
  nort: {
    origin: { lat: 7.7610842, lng: -73.4023927 },
    destination: { lat: 10.9946023, lng: -74.808128 },
    points: {
      cities: [
        { lat: 8.6905393, lng: -73.666125 },//Pelaya
        { lat: 9.2020793, lng: -73.542328 },//Curumani
        { lat: 9.7399083, lng: -73.711995 }, //Cuatro vientos
        { lat: 10.1486463, lng: -73.954705 }, //El Copey
        { lat: 10.5916773, lng: -74.171903 }, //Aracataca
        { lat: 11.1805383, lng: -74.229934 },//Gaira
        { lat: 10.9933923, lng: -74.946651 },//Puerto Colombia
        { lat: 10.8762448, lng: -75.0827786 },//Santa veronica
        { lat: 10.7338193, lng: -75.2648022 },//Loma de arena
        { lat: 10.3933443, lng: -75.485486 },//Cartagena
        { lat: 10.6022583, lng: -75.288912 },//Santa catalina
        { lat: 10.6384052, lng: -74.9266825 },//Sabanalarga
      ],
      type1: [
        {
          name: 'Bosconia',
          position: { lat: 9.977575, lng: -73.88730 }
        }
      ],
      type2: [
        {
          name: 'Aguachica',
          position: { lat: 8.310301, lng: -73.622421 }
        },
        {
          name: 'Cienaga',
          position: { lat: 11.0091387, lng: -74.2808352 }
        }
      ],
      matpel: [
        {
          name: 'Carmen del Bolivar',
          position: { lat: 9.7176884, lng: -75.1408309 }
        }
      ]
    }
  },
  south: {
    origin: { lat: 4.6273523, lng: -74.083301 },
    destination: { lat: 1.6146454, lng: -75.607163 },
    points: {
      cities: [
        { lat: 2.0642375, lng: -75.791772 },//Altamira
        { lat: 2.5833424, lng: -75.453968 },//Hobo
        { lat: 2.9423014, lng: -75.313008 },//Neiva
        { lat: 3.2221164, lng: -75.2498427 },//Aipe
        { lat: 3.6255504, lng: -75.1019597 },//Natagaima
        { lat: 4.0262693, lng: -74.969608 },//Guamo
        { lat: 4.1499521, lng: -74.901375 },//Espinal
        { lat: 4.3054013, lng: -74.805155 },//Girardot
        { lat: 4.2054513, lng: -74.647517 },//Melgar
        { lat: 4.3426943, lng: -74.364582 },//Fusagasuga
        { lat: 4.5668648, lng: -74.9647717 },//Alvarado
        { lat: 3.3952332, lng: -76.5958754 },//Cali
      ],
      type1: [
        {
          name: 'Ibagué',
          position: { lat: 4.4046853, lng: -75.181892 }
        }
      ],
      type2: [
        {
          name: 'Gigante',
          position: { lat: 2.3845279, lng: -75.5548267 }
        }
      ],
      matpel: [
        {
          name: 'Valle',
          position: { lat: 3.5320986, lng: -76.3305307 }
        }
      ]
    }
  }
}