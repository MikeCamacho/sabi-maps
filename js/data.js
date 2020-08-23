
const routes = {
  //BOGOTA - MEDELLIN
  bog_med: {
    origin: { lat: 4.6486259, lng: -74.2478903 },
    destination: { lat: 6.2442876, lng: -75.6162309 },
    points: {
      electronic: [
        {
          name: 'DORADAL (Antioquia)',
          ubication: 'Doradal, Vía Bogotá – Medellín, costado derecho, Restaurante parador la Cascada al lado de EDS MOBIL',
          position: {
            lat: 5.898737,
            lng: -74.732452
          }
        },
        {
          name: 'LA PINUELA',
          ubication: 'Km 80 Medellin Bogota - restaurante Carbon y Zason - Costado Izquierdo - Sector La Piñuela',
          position: {
            lat: 6.016513,
            lng: -75.157913
          }
        }
      ],
      physical: [],
      mixed: []
    }
  },
  //MANIZALEZ - GUADUAS
  man_gua: {
    origin: { lat: 5.0687821, lng: -75.5186624 },
    destination: { lat: 5.0705358, lng: -74.6100557 },
    points: {
      electronic: [
        {
          name: 'ESTADERO PADUA',
          ubication: 'km 68, Vía Honda – Manizales, Costado derecho, Estadero y Hotel Padua',
          position: {
            lat: 5.135657,
            lng: -75.139129
          }
        },
      ],
      physical: [],
      mixed: [
        {
          name: 'E.D.S. MOBIL TEKA ( Honda-Tolima)',
          ubication: 'Sector de Caracolí, Vía Honda - Guarinocito, Costado izquierdo, Parador Teka EDS Mobil',
          position: {
            lat: 5.229013,
            lng: -74.734213
          }
        },
      ]
    }
  },
  //MEDELLIN - CARTAGENA
  med_car: {
    origin: { lat: 6.2442876, lng: -75.6162309 },
    destination: { lat: 10.4002813, lng: -75.5435448 },
    points: {
      electronic: [
        {
          name: 'GIRARDOTA (Antioquia)',
          ubication: 'KM 18+200 adelante de Girardota antes del peaje El Trapiche , Vía Medellín – Barbosa, Costado derecho a 15 metros del estadero Punto Rojo',
          position: {
            lat: 6.395701,
            lng: -75.438386
          }
        },
        {
          name: 'YARUMAL (Antioquia)',
          ubication: '5 km delante de yarumal, Vía Yarumal - La Costa, Costado izquierdo, Estadero Mina Vieja',
          position: {
            lat: 6.986419,
            lng: -75.434298
          }
        },
        {
          name: 'BELGICA (Antioquia)',
          ubication: '6 km adelante de Caceres, Vía Medellin-Cartagena, Costado derecho, EDS Texaco',
          position: {
            lat: 7.673578,
            lng: -75.282324
          }
        },
        {
          name: 'PLANETA RICA MANGUITOS (Cordoba)',
          ubication: 'Planeta Rica, Vía Medellín – La Costa, costado izquierdo, estadero restaurante Los Manguitos',
          position: {
            lat: 8.372832,
            lng: -75.567344
          }
        },
        {
          name: 'CHINU',
          ubication: 'Hotel y restaurante CHINU , A la entrada del Municipio de Chinu - Via Sampues - CHINU a mano derecha',
          position: {
            lat: 9.1158611,
            lng: -75.3960556
          }
        },
        {
          name: 'SAN JUAN DE NEPOMUCENO (Bolivar)',
          ubication: 'km 94 San Juan de Nepomuceno, Vía Sincelejo - Cartagena, costado izquierdo, EDS Zeus Ana Teresa Centro Comercial Edita',
          position: {
            lat: 9.957410,
            lng: -75.083962
          }
        }
      ],
      physical: [],
      mixed: []
    }
  },
  //CALI - MEDELLIN
  cal_med: {
    origin: { lat: 3.3952332, lng: -76.5957037 },
    destination: { lat: 6.2442876, lng: -75.6162309 },
    points: {
      electronic: [
        {
          name: 'LA GRAN VIA Cerritos (Risaralda)',
          ubication: 'Hotel y parador la gran via, frente al CDA, variante romelia el pollo km 8 via Pereira - Medellin',
          position: {
            lat: 4.830292,
            lng: -75.698579
          }
        },
        {
          name: 'EDS TERPEL EL BOTIJA - EL LLANERITO',
          ubication: 'Km 33 troncal del occidente, Vía Manizales - Medellín, costado Derecho , EDS Terpel El Botija - El Llanerito',
          position: {
            lat: 5.213243,
            lng: -75.640687
          }
        },
        {
          name: 'MARMATO (Caldas)',
          ubication: '9 km adelante del peaje La Felisa, Vía Manizales – Medellín, Costado derecho -Restaurante Marmato',
          position: {
            lat: 5.38954,
            lng: -75.60011
          }
        },
        {
          name: 'LOS LAGOS (Caldas-Antioquia)',
          ubication: '5 km adelante de Caldas, Vía Medellín – Pereira, costado derecho, estadero los Lagos',
          position: {
            lat: 6.057413,
            lng: -75.629879
          }
        },
      ],
      physical: [],
      mixed: []
    }
  },
  //BOGOTA - CUCUTA
  bog_cuc: {
    origin: { lat: 4.6486259, lng: -74.2478903 },
    destination: { lat: 7.9088436, lng: -72.5394399 },
    points: {
      electronic: [
        {
          name: 'UBATE (Cundinamarca)',
          ubication: 'km 6,2 adelante de ubate, Vía Ubate - Bogotá, Costado derecho, Sutatausa, Hotel y restaurante Monteverde',
          position: {
            lat: 5.258465,
            lng: -73.849915
          }
        },
        {
          name: 'LAS ACACIAS (San Gil-Santander)',
          ubication: '8 km antes de San Gil, Vía Bogotá – Bucaramanga, costado izquierdo, Restaurante las Acacias',
          position: {
            lat: 6.506831,
            lng: -73.221492
          }
        },
        {
          name: 'LOS CUROS',
          ubication: 'Km 32 via Bucaramanga - Bogota sector los Curos, Piedecuesta santander, Parador y autoservicio TravelMarket',
          position: {
            lat: 6.946149,
            lng: -73.024784
          }
        },
        {
          name: 'LA LAGUNA (Nte. de Santander)',
          ubication: 'Km 88 Vía Bucaramanga - Pamplona, costado derecho, Sector de la Laguna diagonal a la estación de policía caseta tienda Daniela',
          position: {
            lat: 7.253787,
            lng: -72.759688
          }
        },
        {
          name: 'LA MIGUELERA (Nte. de Santander)',
          ubication: 'Km 17, Vía Pamplona – Cúcuta, costado izquierdo, Parador la Miguelera',
          position: {
            lat: 7.479351,
            lng: -72.634451
          }
        }
      ],
      physical: [],
      mixed: [
        {
          name: 'SANTANA (Boyaca)',
          ubication: '1 km adelante de Santana, Vía Santana - Bucaramanga, Costado derecho, En la EDS Terpel tienda Santana',
          position: {
            lat: 6.052337,
            lng: -73.485602
          }
        }
      ]
    }
  },
  //BOGOTA - AQUITANIA
  bog_aqui: {
    origin: { lat: 4.6486259, lng: -74.2478903 },
    destination: { lat: 5.5788893, lng: -72.8074627 },
    points: {
      electronic: [],
      physical: [
        {
          name: 'E. VILLANUEVA (Villanueva - Casanare) IMPALA',
          ubication: 'Estación de servicio BIOMAX PARQUEADERO: VILLAGRANDE',
          position: {
            lat: 4.591284,
            lng: -72.924669
          }
        },
        {
          name: 'E. MONTERREY (Casanare)',
          ubication: 'Monterrey parqueadero Llano Grande Km 5 vía monterrey Villanueva',
          position: {
            lat: 4.853805,
            lng: -72.926251
          }
        }
      ],
      mixed: [
        {
          name: 'CHIPAQUE (Chipaque - Cundinamarca)',
          ubication: 'Eds Esso el Morro Chipaque costado derecho via Bogota - Villavicenio',
          position: {
            lat: 4.441205,
            lng: -74.031909
          }
        },
        {
          name: 'PUNTO 53 (Cundinamarca)',
          ubication: 'EDS Texaco Rio negro, Km 53 Vía villavicencio - Bogota costado derecho, Caqueza Cundinamarca.',
          position: {
            lat: 4.372968,
            lng: -73.899986
          }
        },
        {
          name: 'PIPIRAL',
          ubication: 'Km 1 Después del peaje Pïpiral, Vía antigua Bogotá – Villavicencio, Costado derecho - Restaurante Aguas Claras',
          position: {
            lat: 4.203149,
            lng: -73.717843
          }
        },
        {
          name: 'CASA HOTEL LAS PIÑAS - MAYA (Cundinamarca)',
          ubication: 'Km 86 Via Villavicencio - Yopal , Municipio de Paratebueno - Maya Cundinamarca - lado izquierdo casa hotel las piñas',
          position: {
            lat: 4.4873137,
            lng: -73.1120845
          }
        },
        {
          name: 'PUERTO GAITAN ALTO DE NEBLINAS',
          ubication: 'Puerto Gaitan - Sitio Alto de Neblinas Km 12 vía Puerto Gaitan – Rubiales - Estacion de Serrvicio Distracom',
          position: {
            lat: 4.315406,
            lng: -72.030546
          }
        }
      ]
    }
  },
  //CALI - PASTO
  cal_pas: {
    origin: { lat: 3.3952332, lng: -76.5957037 },
    destination: { lat: 1.2135683, lng: -77.2947321 },
    points: {
      electronic: [
        {
          name: 'Santander de Quilichao (cauca)',
          ubication: 'Km 64 Vereda Mandiva, Vía Cali - Popayán, Costado derecho, EDS Esso Restaurante El Paisa',
          position: {
            lat: 2.957601,
            lng: -76.526801
          }
        },
        {
          name: 'POPAYAN (Cauca)',
          ubication: 'Entrada a Popayan, Vía Cali - Popayán, costado derecho, frente a EDS Terpel Río Blanco',
          position: {
            lat: 2.508298,
            lng: -76.547753
          }
        },
        {
          name: 'EL BORDO (Cauca)',
          ubication: 'El Bordo, Vía Panamericana Popayan – Ipiales, Costado izquierdo, frente a EDS Terpel entrada al bordo',
          position: {
            lat: 2.127210,
            lng: -76.973923
          }
        },
        {
          name: 'CHACHAGUI (Nariño)',
          ubication: 'Km 33, Vía Chachagui - Pasto, EDS Esso Chachagui frente al restaurante el cuy dorado tienda doble via',
          position: {
            lat: 1.395768,
            lng: -77.286851
          }
        }
      ],
      physical: [],
      mixed: []
    }
  },
  //BOGOTA - BUENAVENTURA
  bog_bue: {
    origin: { lat: 4.6486259, lng: -74.2478903 },
    destination: { lat: 3.8757051, lng: -77.0407116 },
    points: {
      electronic: [
        {
          name: 'PC CORDOBA (SALIDA BUENAVENTURA) (Valle)',
          ubication: 'km 9 Vía Buenaventura - Loboguerrero, costado derecho, Restaurante Amanecer Porteño',
          position: {
            lat: 3.764814,
            lng: -76.667973
          }
        },
        {
          name: 'HOTEL LA RAMADA LOBOGUERRERO',
          ubication: 'HOTEL LA RAMADA Loboguerrero - Buga, Restrepo, Valle del Cauca',
          position: {
            lat: 3.831017,
            lng: -76.593585
          }
        },
        {
          name: 'PC YOTOCO',
          ubication: 'Yotoco - Hospedaje El Paraiso Carrera 10 No. 7 05 Via Panorama - Yotoco - Valle',
          position: {
            lat: 3.858292,
            lng: -76.379485
          }
        },
        {
          name: 'CAJAMARCA (Tolima)',
          ubication: '1 km antes de Cajamarca, Vía Ibagué - Cajamarca, Parador La vía Dorada 100 mts antes del Mednte',
          position: {
            lat: 4.438358,
            lng: -75.433260
          }
        },
        {
          name: 'EDS BANDERAS (Chicoral - Tolima)',
          ubication: 'Km 40, Via Bogota – Ibague, adelante del peaje de Chicoral sobre la variante mano derecha EDS Banderas',
          position: {
            lat: 4.419657,
            lng: -75.250545
          }
        },
        {
          name: 'LA HOLANDA',
          ubication: 'EDS Mobil La Holanda - El Vergel , Vía Espinal - Gualanday, costado derecho',
          position: {
            lat: 4.267863,
            lng: -75.003157
          }
        }
      ],
      physical: [],
      mixed: [
        {
          name: 'LA URIBE 2',
          ubication: 'ESSO LA URIBE - DISTRACOM - DESMedS DEL PEAJE DE BETANIA COSTADO IZQUIERDO CALI - CALARCA, RESTAURANTE COMA SABROSO',
          position: {
            lat: 4.2574246,
            lng: -76.1179113
          }
        },
        {
          name: 'CALARCA (Quindio)',
          ubication: 'Calarca, Vía Calarca - Cali, costado izquierdo, antiguo parador Colfecar diagonal a la EDS Terpel el prado.',
          position: {
            lat: 4.506325,
            lng: -75.652696
          }
        },
        {
          name: 'GRANADA2 (Bogota - Buenaventura) (Cundinamarca)',
          ubication: 'km 23,7, Via Bogotá - Silvania, Costado derecho, EDS Biomax Santa Lucia Sector el Granadino',
          position: {
            lat: 4.526243,
            lng: -74.346400
          }
        }
      ]
    }
  },
  //BOGOTA - BARRANQUILLA
  bog_bar: {
    origin: { lat: 4.6486259, lng: -74.2478903 },
    destination: { lat: 10.9838942, lng: -74.8530369 },
    points: {
      electronic: [
        {
          name: 'EL VELEÑO (Medrto Araujo Santander)',
          ubication: '3 km adelante de Medrto Araujo, vía Medrto Araujo - Campo 23, Costado izquierdo, Parador el veleño.',
          position: {
            lat: 6.536716,
            lng: -74.068161
          }
        },
        {
          name: 'PC SAN ALBERTO',
          ubication: 'E.D.S Terpel - El Retorno KM 2 via al mar - San - Alberto - Aguachica - Costado Izquierdo',
          position: {
            lat: 7.7802,
            lng: -73.3999
          }
        },
        {
          name: 'AGUACHICA 1 (Cesar)',
          ubication: '1 km antes de la entrada de Aguachica, Vía Bosconia - Aguachica costado derecho EDS Petromil',
          position: {
            lat: 8.346044,
            lng: -73.595452
          }
        },
        {
          name: 'ARACATACA (Magdalena)',
          ubication: '1 km adelante del peaje Tucurinca,Vía Santa Marta- Bosconia, costado derecho, Hospedaje Macondo',
          position: {
            lat: 10.595801,
            lng: -74.169937
          }
        }
      ],
      physical: [
        {
          name: 'PC DOS Y MEDIO',
          ubication: 'Km 2,5, via pto Boyaca la Dorada , Costado Derecho, Parqueadero Hotel y Restaurante LAS PALMAS',
          position: {
            lat: 5.938529,
            lng: -74.570405
          }
        },
        {
          name: 'EDS DOÑA CLEME (Turbana-Bolivar)',
          ubication: 'Estacion de Servicio Doña Cleme - Variante Mamonal - Gambote',
          position: {
            lat: 10.2675,
            lng: -75.4655
          }
        }
      ],
      mixed: [
        {
          name: 'JALISCO (Cundinamarca)',
          ubication: '200 mts adelante del peaje de Jalisco Albán Cundinamarca,Vía Facatativa - Villeta, Hotel El Edén de Jalisco',
          position: {
            lat: 4.903099,
            lng: -74.426735
          }
        },
        {
          name: 'ALTO DEL TRIGO',
          ubication: 'Alto del trigo hotel el triangulo del alto',
          position: {
            lat: 5.001668,
            lng: -74.538325
          }
        },
        {
          name: 'MedRTO LIBRE',
          ubication: 'ntersección la ruta del sol costado derecho, EDS Mobil el punto',
          position: {
            lat: 5.754484,
            lng: -74.628863
          }
        },
        {
          name: 'ALTO BONITO (Boyaca)',
          ubication: 'Kilometro 74 sector ruta del sol (2) via Medrto boyaca - bogota, EDS Alto Bonito',
          position: {
            lat: 5.789804,
            lng: -74.603233
          }
        },
        {
          name: 'LA LIZAMA',
          ubication: 'E.D.S TERPEL PALERMO - Autop. B/manga - B/bermeja KM. 85 La Lizama - Costado Derecho',
          position: {
            lat: 7.125004,
            lng: -73.587632
          }
        },
        {
          name: 'PC BESOTE (Cesar)',
          ubication: 'km 20, Vía Aguchica - Pailitas, Costado Derecho, EDS Terpel Besotes',
          position: {
            lat: 8.491433,
            lng: -73.639689
          }
        },
        {
          name: 'BOSCONIA (Cesar)',
          ubication: '8 km antes de Bosconia, Vía Curumaní - Bosconia, costado derecho al frente EDS Petromil El Colorado. - LOMA Colorada',
          position: {
            lat: 9.897464,
            lng: -73.836310
          }
        },
        {
          name: 'LOMA COLORADA (Bosconia - Cesar)',
          ubication: 'EDS Distracon - PC LOMA - Km 2 Via Bosconia - Curumani',
          position: {
            lat: 9.89985,
            lng: -73.837471
          }
        },
        {
          name: 'RIO FRIO',
          ubication: '10 Km adelante de Ciénaga, Vía Ciénaga -Barranquilla, Costado derecho, EDS Ecos Parador Playa y Mar.',
          position: {
            lat: 10.9072783,
            lng: -74.1544831
          }
        }
      ]
    }
  },
}