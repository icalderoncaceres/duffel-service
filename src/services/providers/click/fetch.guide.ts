fetch("https://ecommerce-prod.kiusys.net/flightresults/api/v1/configs/", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "Token backendsearchflightb8ba380b0ea9fd9f9c4aae58AAD-cedcb5d42ac5f47e06fcc4bc8f264c03e4724db87a1bdc2e",
    "carrier": "ve",
    "lang": "en",
    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://reservas.clicair.co/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});

/*
responses
{
    "kiu_internals": {
        "duration": 681.382417678833,
        "id_tracking": "backendflightresults.backend-flightresults-59f7d5688d-x88hb_2019094467ea4b92a71ec204bdcd3412"
    },
    "response": {
        "airports": {
            "airports": {
                "BOG": {
                    "city": {
                        "description": "BOGOTA"
                    },
                    "country": "CO",
                    "country_name": "COLOMBIA",
                    "description": "EL DORADO INTERNATIONAL AIRPORT",
                    "iso_country_code2": "CO",
                    "iso_country_code3": "COL",
                    "location_city": "BOG",
                    "location_city_iata": true,
                    "location_city_name": "BOGOTA",
                    "location_code": "BOG",
                    "location_iata": true,
                    "location_name": "EL DORADO INTERNATIONAL AIRPORT",
                    "locations_reference_id": "BOG_0"
                },
                "CUC": {
                    "city": {
                        "description": "CUCUTA"
                    },
                    "country": "CO",
                    "country_name": "COLOMBIA",
                    "description": "CAMILO DAZA AIRPORT",
                    "iso_country_code2": "CO",
                    "iso_country_code3": "COL",
                    "location_city": "CUC",
                    "location_city_iata": true,
                    "location_city_name": "CUCUTA",
                    "location_code": "CUC",
                    "location_iata": true,
                    "location_name": "CAMILO DAZA AIRPORT",
                    "locations_reference_id": "CUC_0"
                }
            }
        },
        "carousel": {
            "going": [
                {
                    "2024-02-05": -1
                },
                {
                    "2024-02-06": -1
                },
                {
                    "2024-02-07": -1
                },
                {
                    "2024-02-08": -1
                },
                {
                    "2024-02-09": -1
                },
                {
                    "2024-02-10": -1
                },
                {
                    "2024-02-11": -1
                }
            ],
            "return": [
                {
                    "2024-02-26": -1
                },
                {
                    "2024-02-27": -1
                },
                {
                    "2024-02-28": -1
                },
                {
                    "2024-02-29": -1
                },
                {
                    "2024-03-01": -1
                },
                {
                    "2024-03-02": -1
                },
                {
                    "2024-03-03": -1
                }
            ]
        },
        "components": [
            {
                "arrival_information": {
                    "date": null,
                    "location_reference_id": "CUC_0"
                },
                "component": "OD_BOGCUC_01_20240208",
                "departure_information": {
                    "date": "2024-02-08",
                    "location_reference_id": "BOG_0"
                }
            },
            {
                "arrival_information": {
                    "date": null,
                    "location_reference_id": "BOG_0"
                },
                "component": "OD_CUCBOG_02_20240229",
                "departure_information": {
                    "date": "2024-02-29",
                    "location_reference_id": "CUC_0"
                }
            }
        ],
        "configs": {
            "bottom_message": {
                "check_enabled": false,
                "display": false,
                "id": 23,
                "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
            },
            "carousel": {
                "carousel": true,
                "id": 23,
                "lower_fare": false,
                "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec",
                "show_arrival_flight": true,
                "show_departure_flight": true
            },
            "carrier": {
                "code": "VE",
                "enable": true,
                "name": "VE",
                "numcode": "246",
                "uuid": "e92d9d0f-5c9c-47b4-9670-845082a9e046"
            },
            "price_display": {
                "fare_basis_all_passengers": false,
                "fare_basis_by_passenger_type": false,
                "full_fare_basis_all_passengers": true,
                "full_fare_basis_by_passenger_type": false,
                "id": 23,
                "medium_fare_basis_all_passengers": false,
                "medium_fare_basis_by_passenger_type": false,
                "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
            },
            "purchase_time": {
                "id": 23,
                "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec",
                "time": 10
            },
            "search_results_preferences": [
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "HAV",
                    "direct_flight": true,
                    "enable": true,
                    "id": 251,
                    "non_stop_flight": false,
                    "origin": "AUA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "AUC",
                    "direct_flight": true,
                    "enable": true,
                    "id": 252,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 2,
                    "day_displays": "operational",
                    "destination": "UIB",
                    "direct_flight": true,
                    "enable": true,
                    "id": 253,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "APO",
                    "direct_flight": false,
                    "enable": true,
                    "id": 254,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "TLU",
                    "direct_flight": false,
                    "enable": true,
                    "id": 255,
                    "non_stop_flight": false,
                    "origin": "CLO",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "TLU",
                    "direct_flight": false,
                    "enable": true,
                    "id": 256,
                    "non_stop_flight": false,
                    "origin": "PEI",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "CLO",
                    "direct_flight": true,
                    "enable": true,
                    "id": 257,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": false,
                    "enable": true,
                    "id": 258,
                    "non_stop_flight": false,
                    "origin": "RVE",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "CUC",
                    "direct_flight": false,
                    "enable": true,
                    "id": 259,
                    "non_stop_flight": false,
                    "origin": "RVE",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "BSC",
                    "direct_flight": false,
                    "enable": true,
                    "id": 261,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "UIB",
                    "direct_flight": true,
                    "enable": true,
                    "id": 262,
                    "non_stop_flight": false,
                    "origin": "CLO",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "UIB",
                    "direct_flight": true,
                    "enable": true,
                    "id": 264,
                    "non_stop_flight": false,
                    "origin": "EOH",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "VVC",
                    "direct_flight": true,
                    "enable": true,
                    "id": 265,
                    "non_stop_flight": false,
                    "origin": "EOH",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "EYP",
                    "direct_flight": true,
                    "enable": true,
                    "id": 266,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "NVA",
                    "direct_flight": true,
                    "enable": true,
                    "id": 267,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "AUC",
                    "direct_flight": false,
                    "enable": true,
                    "id": 268,
                    "non_stop_flight": false,
                    "origin": "BGA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "AUC",
                    "direct_flight": false,
                    "enable": true,
                    "id": 269,
                    "non_stop_flight": false,
                    "origin": "CUC",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "CUC",
                    "direct_flight": false,
                    "enable": true,
                    "id": 270,
                    "non_stop_flight": false,
                    "origin": "BGA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "VVC",
                    "direct_flight": false,
                    "enable": true,
                    "id": 271,
                    "non_stop_flight": false,
                    "origin": "BGA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "PSO",
                    "direct_flight": false,
                    "enable": true,
                    "id": 272,
                    "non_stop_flight": false,
                    "origin": "EOH",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": false,
                    "enable": true,
                    "id": 273,
                    "non_stop_flight": false,
                    "origin": "GPI",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "FLA",
                    "direct_flight": true,
                    "enable": true,
                    "id": 274,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "PUU",
                    "direct_flight": true,
                    "enable": true,
                    "id": 275,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": true,
                    "enable": true,
                    "id": 276,
                    "non_stop_flight": false,
                    "origin": "APO",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "BAQ",
                    "direct_flight": true,
                    "enable": true,
                    "id": 277,
                    "non_stop_flight": false,
                    "origin": "BGA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "EYP",
                    "direct_flight": true,
                    "enable": true,
                    "id": 280,
                    "non_stop_flight": false,
                    "origin": "RON",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "RON",
                    "direct_flight": false,
                    "enable": true,
                    "id": 281,
                    "non_stop_flight": false,
                    "origin": "EYP",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": true,
                    "enable": true,
                    "id": 283,
                    "non_stop_flight": false,
                    "origin": "UIB",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "CLO",
                    "direct_flight": true,
                    "enable": true,
                    "id": 284,
                    "non_stop_flight": false,
                    "origin": "UIB",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "BOG",
                    "direct_flight": true,
                    "enable": true,
                    "id": 285,
                    "non_stop_flight": false,
                    "origin": "UIB",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "MZL",
                    "direct_flight": true,
                    "enable": true,
                    "id": 286,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BOG",
                    "direct_flight": true,
                    "enable": true,
                    "id": 287,
                    "non_stop_flight": false,
                    "origin": "MZL",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "PSO",
                    "direct_flight": true,
                    "enable": true,
                    "id": 289,
                    "non_stop_flight": false,
                    "origin": "PPN",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "PPN",
                    "direct_flight": true,
                    "enable": true,
                    "id": 290,
                    "non_stop_flight": false,
                    "origin": "PSO",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": true,
                    "enable": true,
                    "id": 291,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BOG",
                    "direct_flight": true,
                    "enable": true,
                    "id": 292,
                    "non_stop_flight": false,
                    "origin": "EOH",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "PSO",
                    "direct_flight": false,
                    "enable": true,
                    "id": 293,
                    "non_stop_flight": false,
                    "origin": "PUU",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "PUU",
                    "direct_flight": false,
                    "enable": true,
                    "id": 294,
                    "non_stop_flight": false,
                    "origin": "PSO",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "MZL",
                    "direct_flight": true,
                    "enable": true,
                    "id": 295,
                    "non_stop_flight": false,
                    "origin": "EOH",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": true,
                    "enable": true,
                    "id": 296,
                    "non_stop_flight": false,
                    "origin": "MZL",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BOG",
                    "direct_flight": true,
                    "enable": true,
                    "id": 297,
                    "non_stop_flight": false,
                    "origin": "NVA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BOG",
                    "direct_flight": true,
                    "enable": true,
                    "id": 298,
                    "non_stop_flight": false,
                    "origin": "FLA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BOG",
                    "direct_flight": true,
                    "enable": true,
                    "id": 299,
                    "non_stop_flight": false,
                    "origin": "AUC",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "PEI",
                    "direct_flight": true,
                    "enable": true,
                    "id": 300,
                    "non_stop_flight": false,
                    "origin": "EOH",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": true,
                    "enable": true,
                    "id": 301,
                    "non_stop_flight": false,
                    "origin": "PEI",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": true,
                    "enable": true,
                    "id": 302,
                    "non_stop_flight": false,
                    "origin": "VVC",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BGA",
                    "direct_flight": true,
                    "enable": true,
                    "id": 303,
                    "non_stop_flight": false,
                    "origin": "EOH",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": true,
                    "enable": true,
                    "id": 304,
                    "non_stop_flight": false,
                    "origin": "BGA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "PSO",
                    "direct_flight": true,
                    "enable": true,
                    "id": 305,
                    "non_stop_flight": false,
                    "origin": "CLO",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "CLO",
                    "direct_flight": true,
                    "enable": true,
                    "id": 306,
                    "non_stop_flight": false,
                    "origin": "PSO",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "PUU",
                    "direct_flight": true,
                    "enable": true,
                    "id": 307,
                    "non_stop_flight": false,
                    "origin": "CLO",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "CLO",
                    "direct_flight": true,
                    "enable": true,
                    "id": 308,
                    "non_stop_flight": false,
                    "origin": "PUU",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "IBE",
                    "direct_flight": true,
                    "enable": true,
                    "id": 309,
                    "non_stop_flight": false,
                    "origin": "EOH",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "GPI",
                    "direct_flight": true,
                    "enable": true,
                    "id": 310,
                    "non_stop_flight": false,
                    "origin": "CLO",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": true,
                    "enable": true,
                    "id": 311,
                    "non_stop_flight": false,
                    "origin": "IBE",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "AXM",
                    "direct_flight": true,
                    "enable": true,
                    "id": 312,
                    "non_stop_flight": false,
                    "origin": "EOH",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "CLO",
                    "direct_flight": true,
                    "enable": true,
                    "id": 313,
                    "non_stop_flight": false,
                    "origin": "GPI",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": true,
                    "enable": true,
                    "id": 314,
                    "non_stop_flight": false,
                    "origin": "AXM",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "VVC",
                    "direct_flight": true,
                    "enable": true,
                    "id": 315,
                    "non_stop_flight": false,
                    "origin": "CLO",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "GPI",
                    "direct_flight": false,
                    "enable": true,
                    "id": 316,
                    "non_stop_flight": false,
                    "origin": "EOH",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "CLO",
                    "direct_flight": true,
                    "enable": true,
                    "id": 317,
                    "non_stop_flight": false,
                    "origin": "VVC",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BGA",
                    "direct_flight": true,
                    "enable": true,
                    "id": 318,
                    "non_stop_flight": false,
                    "origin": "CUC",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "TCO",
                    "direct_flight": true,
                    "enable": true,
                    "id": 319,
                    "non_stop_flight": false,
                    "origin": "CLO",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "CLO",
                    "direct_flight": true,
                    "enable": true,
                    "id": 320,
                    "non_stop_flight": false,
                    "origin": "TCO",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": true,
                    "enable": true,
                    "id": 321,
                    "non_stop_flight": false,
                    "origin": "CLO",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BGA",
                    "direct_flight": true,
                    "enable": true,
                    "id": 322,
                    "non_stop_flight": false,
                    "origin": "AUC",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "CLO",
                    "direct_flight": true,
                    "enable": true,
                    "id": 323,
                    "non_stop_flight": false,
                    "origin": "EOH",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "CUC",
                    "direct_flight": true,
                    "enable": true,
                    "id": 324,
                    "non_stop_flight": false,
                    "origin": "AUC",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BOG",
                    "direct_flight": true,
                    "enable": true,
                    "id": 325,
                    "non_stop_flight": false,
                    "origin": "PUU",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "PEI",
                    "direct_flight": false,
                    "enable": true,
                    "id": 326,
                    "non_stop_flight": false,
                    "origin": "VVC",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "VVC",
                    "direct_flight": false,
                    "enable": true,
                    "id": 327,
                    "non_stop_flight": false,
                    "origin": "PEI",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "PEI",
                    "direct_flight": true,
                    "enable": true,
                    "id": 328,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BOG",
                    "direct_flight": true,
                    "enable": true,
                    "id": 329,
                    "non_stop_flight": false,
                    "origin": "PEI",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "MMP",
                    "direct_flight": false,
                    "enable": true,
                    "id": 330,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "BOG",
                    "direct_flight": false,
                    "enable": true,
                    "id": 331,
                    "non_stop_flight": false,
                    "origin": "MMP",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "MMP",
                    "direct_flight": true,
                    "enable": true,
                    "id": 332,
                    "non_stop_flight": false,
                    "origin": "EOH",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": true,
                    "enable": true,
                    "id": 333,
                    "non_stop_flight": false,
                    "origin": "MMP",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "EYP",
                    "direct_flight": false,
                    "enable": true,
                    "id": 334,
                    "non_stop_flight": false,
                    "origin": "EOH",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": false,
                    "enable": true,
                    "id": 335,
                    "non_stop_flight": false,
                    "origin": "EYP",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "EYP",
                    "direct_flight": false,
                    "enable": true,
                    "id": 336,
                    "non_stop_flight": false,
                    "origin": "NVA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "NVA",
                    "direct_flight": false,
                    "enable": true,
                    "id": 337,
                    "non_stop_flight": false,
                    "origin": "EYP",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "NVA",
                    "direct_flight": false,
                    "enable": true,
                    "id": 338,
                    "non_stop_flight": false,
                    "origin": "FLA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "FLA",
                    "direct_flight": false,
                    "enable": true,
                    "id": 339,
                    "non_stop_flight": false,
                    "origin": "NVA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "NVA",
                    "direct_flight": false,
                    "enable": true,
                    "id": 340,
                    "non_stop_flight": false,
                    "origin": "EJA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "EJA",
                    "direct_flight": false,
                    "enable": true,
                    "id": 341,
                    "non_stop_flight": false,
                    "origin": "NVA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "NVA",
                    "direct_flight": false,
                    "enable": true,
                    "id": 342,
                    "non_stop_flight": false,
                    "origin": "AUC",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "AUC",
                    "direct_flight": false,
                    "enable": true,
                    "id": 343,
                    "non_stop_flight": false,
                    "origin": "NVA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "UIB",
                    "direct_flight": false,
                    "enable": true,
                    "id": 344,
                    "non_stop_flight": false,
                    "origin": "NVA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "NVA",
                    "direct_flight": false,
                    "enable": true,
                    "id": 345,
                    "non_stop_flight": false,
                    "origin": "UIB",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "NVA",
                    "direct_flight": false,
                    "enable": true,
                    "id": 346,
                    "non_stop_flight": false,
                    "origin": "PUU",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "PUU",
                    "direct_flight": false,
                    "enable": true,
                    "id": 347,
                    "non_stop_flight": false,
                    "origin": "NVA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "NVA",
                    "direct_flight": false,
                    "enable": true,
                    "id": 348,
                    "non_stop_flight": false,
                    "origin": "SJE",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "SJE",
                    "direct_flight": false,
                    "enable": true,
                    "id": 349,
                    "non_stop_flight": false,
                    "origin": "NVA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "PPN",
                    "direct_flight": false,
                    "enable": true,
                    "id": 350,
                    "non_stop_flight": false,
                    "origin": "NVA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "NVA",
                    "direct_flight": false,
                    "enable": true,
                    "id": 351,
                    "non_stop_flight": false,
                    "origin": "PPN",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": false,
                    "enable": true,
                    "id": 353,
                    "non_stop_flight": false,
                    "origin": "PSO",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BGA",
                    "direct_flight": true,
                    "enable": true,
                    "id": 354,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BOG",
                    "direct_flight": true,
                    "enable": true,
                    "id": 355,
                    "non_stop_flight": false,
                    "origin": "BGA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "CUC",
                    "direct_flight": true,
                    "enable": true,
                    "id": 357,
                    "non_stop_flight": false,
                    "origin": "EOH",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "PTX",
                    "direct_flight": true,
                    "enable": true,
                    "id": 365,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BOG",
                    "direct_flight": true,
                    "enable": true,
                    "id": 366,
                    "non_stop_flight": false,
                    "origin": "PTX",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "EYP",
                    "direct_flight": false,
                    "enable": true,
                    "id": 367,
                    "non_stop_flight": false,
                    "origin": "PTX",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "BGA",
                    "direct_flight": true,
                    "enable": true,
                    "id": 368,
                    "non_stop_flight": false,
                    "origin": "PTX",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "PEI",
                    "direct_flight": true,
                    "enable": true,
                    "id": 369,
                    "non_stop_flight": false,
                    "origin": "PTX",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "TLU",
                    "direct_flight": false,
                    "enable": true,
                    "id": 371,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BOG",
                    "direct_flight": true,
                    "enable": true,
                    "id": 385,
                    "non_stop_flight": false,
                    "origin": "CLO",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "VVC",
                    "direct_flight": true,
                    "enable": true,
                    "id": 386,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BOG",
                    "direct_flight": true,
                    "enable": true,
                    "id": 387,
                    "non_stop_flight": false,
                    "origin": "VVC",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "CTG",
                    "direct_flight": true,
                    "enable": true,
                    "id": 388,
                    "non_stop_flight": false,
                    "origin": "EOH",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": true,
                    "enable": true,
                    "id": 389,
                    "non_stop_flight": false,
                    "origin": "CTG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "CTG",
                    "direct_flight": true,
                    "enable": true,
                    "id": 390,
                    "non_stop_flight": false,
                    "origin": "BGA",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BGA",
                    "direct_flight": true,
                    "enable": true,
                    "id": 391,
                    "non_stop_flight": false,
                    "origin": "CTG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "CUC",
                    "direct_flight": true,
                    "enable": true,
                    "id": 441,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BOG",
                    "direct_flight": true,
                    "enable": true,
                    "id": 442,
                    "non_stop_flight": false,
                    "origin": "CUC",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "NQU",
                    "direct_flight": true,
                    "enable": true,
                    "id": 443,
                    "non_stop_flight": false,
                    "origin": "EOH",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": true,
                    "enable": true,
                    "id": 444,
                    "non_stop_flight": false,
                    "origin": "NQU",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "CTG",
                    "direct_flight": true,
                    "enable": true,
                    "id": 445,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BOG",
                    "direct_flight": true,
                    "enable": true,
                    "id": 446,
                    "non_stop_flight": false,
                    "origin": "CTG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "NQU",
                    "direct_flight": false,
                    "enable": true,
                    "id": 447,
                    "non_stop_flight": false,
                    "origin": "BOG",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 1,
                    "day_displays": "operational",
                    "destination": "BOG",
                    "direct_flight": false,
                    "enable": true,
                    "id": 448,
                    "non_stop_flight": false,
                    "origin": "NQU",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "EOH",
                    "direct_flight": true,
                    "enable": true,
                    "id": 493,
                    "non_stop_flight": false,
                    "origin": "BAQ",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                },
                {
                    "connections": 0,
                    "day_displays": "operational",
                    "destination": "BAQ",
                    "direct_flight": true,
                    "enable": true,
                    "id": 494,
                    "non_stop_flight": false,
                    "origin": "EOH",
                    "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
                }
            ],
            "setting": {
                "carrier": "e92d9d0f-5c9c-47b4-9670-845082a9e046",
                "enable": true,
                "name": "init",
                "uuid": "04f6872f-7537-4287-91dd-ba0c10c0eaec"
            },
            "soldout_fare": {
                "id": 23,
                "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec",
                "soldout_fare_amount_crossed_out": false,
                "soldout_fare_amount_in_table": false
            },
            "term_condition": {
                "id": 21,
                "setting": "04f6872f-7537-4287-91dd-ba0c10c0eaec",
                "term_condition": true
            }
        },
        "extra_searcher_criteria": {
            "cabin": "first",
            "country_setting": 90
        },
        "family_fares": [
            "ECONOMICA_00VE_0",
            "PREFERENCIAL_00VE_0"
        ],
        "family_fares_information": {
            "ECONOMICA_00VE_0": {
                "brand_definition": {
                    "offeredForFree": {}
                },
                "cabin_designator_code": "Y",
                "cabin_designator_name": "ECONOMY",
                "display_order_preference": 1,
                "family_fare_description": "ECONOMICA",
                "family_fare_reference": "ECONOMICA",
                "family_fare_reference_id": "ECONOMICA_00VE_0",
                "kiu_shopping_brand_definition": {
                    "conditions": [
                        {
                            "icon": "suitcase-rolling",
                            "order": 1,
                            "service": "equipaje_bodega"
                        },
                        {
                            "icon": "suitcase",
                            "order": 2,
                            "service": "equipaje_de_mano"
                        },
                        {
                            "icon": "hand-holding-usd",
                            "order": 3,
                            "service": "retracto"
                        },
                        {
                            "icon": "wallet",
                            "order": 4,
                            "service": "reembolsos"
                        },
                        {
                            "icon": "calendar-alt",
                            "order": 5,
                            "service": "desistimiento"
                        },
                        {
                            "icon": "calendar-alt",
                            "order": 6,
                            "service": "cambios"
                        },
                        {
                            "icon": "money-check-alt",
                            "order": 7,
                            "service": "descuentos"
                        },
                        {
                            "icon": "suitcase-rolling",
                            "order": 8,
                            "service": "exceso_de_equipaje"
                        },
                        {
                            "icon": "user-slash",
                            "order": 9,
                            "service": "no_show_penalty"
                        }
                    ],
                    "showNotice": false,
                    "showPolicies": false
                }
            },
            "PREFERENCIAL_00VE_0": {
                "brand_definition": {
                    "offeredForFree": {}
                },
                "cabin_designator_code": "Y",
                "cabin_designator_name": "ECONOMY",
                "display_order_preference": 2,
                "family_fare_description": "PREFERENCIAL",
                "family_fare_reference": "PREFERENCIAL",
                "family_fare_reference_id": "PREFERENCIAL_00VE_0",
                "kiu_shopping_brand_definition": {
                    "conditions": [
                        {
                            "icon": "suitcase-rolling",
                            "order": 1,
                            "service": "equipaje_bodega"
                        },
                        {
                            "icon": "suitcase",
                            "order": 2,
                            "service": "equipaje_de_mano"
                        },
                        {
                            "icon": "hand-holding-usd",
                            "order": 3,
                            "service": "retracto"
                        },
                        {
                            "icon": "wallet",
                            "order": 4,
                            "service": "reembolsos"
                        },
                        {
                            "icon": "calendar-alt",
                            "order": 5,
                            "service": "desistimiento"
                        },
                        {
                            "icon": "calendar-alt",
                            "order": 6,
                            "service": "cambios"
                        },
                        {
                            "icon": "money-check-alt",
                            "order": 7,
                            "service": "descuentos"
                        },
                        {
                            "icon": "suitcase-rolling",
                            "order": 8,
                            "service": "exceso_de_equipaje"
                        },
                        {
                            "icon": "user-slash",
                            "order": 9,
                            "service": "no_show_penalty"
                        }
                    ],
                    "showNotice": false,
                    "showPolicies": false
                }
            }
        },
        "first_journeys": [
            "OD_BOGCUC_01_20240208-CPA_1_0"
        ],
        "flights": {
            "OD_BOGCUC_01_20240208-CPA_1_0-FL00VE9142": {
                "arrival_information": {
                    "airport_reference_id": "CUC_0",
                    "change_day_indicator": "0",
                    "date": "2024-02-08",
                    "date_of_week_name": "Thursday",
                    "time": "21:30:00"
                },
                "carrier_reference_id": "00VE_0",
                "departure_information": {
                    "airport_reference_id": "BOG_0",
                    "date": "2024-02-08",
                    "date_of_week_name": "Thursday",
                    "remain_time_for_departure": "405:23:00",
                    "time": "20:10:00"
                },
                "flight_additional_information": {
                    "api_required": false,
                    "connecting_times_detail": {},
                    "dei8": "",
                    "enable_prs": false,
                    "equipment": {
                        "change_of_gauge": true,
                        "equipment_reference_id": "AT4_0"
                    },
                    "flight_remarks_list": [],
                    "flight_stops_details": [],
                    "in_flight_services": "",
                    "meal_service": [],
                    "special_service_availability_list": [
                        {
                            "code": "WCHR",
                            "remain_space": 1
                        },
                        {
                            "code": "UMNR",
                            "remain_space": 2
                        },
                        {
                            "code": "PETC",
                            "remain_space": 4
                        },
                        {
                            "code": "AVIH",
                            "remain_space": 2
                        },
                        {
                            "code": "WEAP",
                            "remain_space": 10
                        }
                    ]
                },
                "flight_code_key": "FL00VE9142",
                "flight_duration": "01:20:00",
                "flight_number": "9142",
                "flight_rbd": "B9E9DCG9H9K9M3O9N9T9W9Y9",
                "flight_stops": "0",
                "flight_time": "01:20:00",
                "flight_type": "DOMESTIC",
                "no_operation": true,
                "order": 1
            },
            "OD_CUCBOG_02_20240229-CPA_1_0-FL00VE9143": {
                "arrival_information": {
                    "airport_reference_id": "BOG_0",
                    "change_day_indicator": "0",
                    "date": "2024-02-29",
                    "date_of_week_name": "Thursday",
                    "time": "23:25:00"
                },
                "carrier_reference_id": "00VE_0",
                "departure_information": {
                    "airport_reference_id": "CUC_0",
                    "date": "2024-02-29",
                    "date_of_week_name": "Thursday",
                    "remain_time_for_departure": "911:03:00",
                    "time": "21:50:00"
                },
                "flight_additional_information": {
                    "api_required": false,
                    "connecting_times_detail": {},
                    "dei8": "",
                    "enable_prs": false,
                    "equipment": {
                        "change_of_gauge": true,
                        "equipment_reference_id": "AT4_0"
                    },
                    "flight_remarks_list": [],
                    "flight_stops_details": [],
                    "in_flight_services": "",
                    "meal_service": [],
                    "special_service_availability_list": [
                        {
                            "code": "WCHR",
                            "remain_space": 1
                        },
                        {
                            "code": "UMNR",
                            "remain_space": 2
                        },
                        {
                            "code": "PETC",
                            "remain_space": 4
                        },
                        {
                            "code": "AVIH",
                            "remain_space": 2
                        },
                        {
                            "code": "WEAP",
                            "remain_space": 10
                        }
                    ]
                },
                "flight_code_key": "FL00VE9143",
                "flight_duration": "01:35:00",
                "flight_number": "9143",
                "flight_rbd": "B9E9D7G9H9K9M9O9N9T9W9Y9",
                "flight_stops": "0",
                "flight_time": "01:35:00",
                "flight_type": "DOMESTIC",
                "no_operation": true,
                "order": 1
            }
        },
        "journeys": {
            "OD_BOGCUC_01_20240208-CPA_1_0": {
                "fares": {
                    "ECONOMICA_00VE_0": {
                        "average_amount": "207235.00",
                        "average_amount_per_pax_adt": "207235.00",
                        "currency_reference_id": "COP_0",
                        "fares_equivalent_paid_by_ptc": [
                            {
                                "amount": 273000,
                                "passenger_quantity": 1,
                                "passenger_type": "ADULT"
                            }
                        ],
                        "fees": {
                            "fees_detail": [],
                            "total_fees": 0
                        },
                        "next": {
                            "OD_CUCBOG_02_20240229-CPA_1_0-ECONOMICA_00VE_0": [
                                "ECONOMICA_00VE_0",
                                "PREFERENCIAL_00VE_0"
                            ]
                        },
                        "prev": null,
                        "rbd": {
                            "closed": "",
                            "posting": "3",
                            "reservation_booking_designator": "M",
                            "to_required": "",
                            "waitlist_enable": ""
                        },
                        "taxes": {
                            "taxes_detail": [
                                {
                                    "passenger_quantity": 1,
                                    "passenger_type": "ADULT",
                                    "taxes_list": [
                                        {
                                            "amount": 40000,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": false,
                                            "tax_code": "6B",
                                            "tax_code_name": "AIRLINE FEE"
                                        },
                                        {
                                            "amount": 7600,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "6S",
                                            "tax_code_name": "IVA TASA ADMINISTRATIVA"
                                        },
                                        {
                                            "amount": 42000,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "CO",
                                            "tax_code_name": "AIRLINE FEE"
                                        },
                                        {
                                            "amount": 51870,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "YS",
                                            "tax_code_name": "SALES TAX"
                                        }
                                    ],
                                    "total_amount": 141470
                                }
                            ],
                            "total_taxes": 141470
                        },
                        "total_equivalent_paid": 273000
                    },
                    "PREFERENCIAL_00VE_0": {
                        "average_amount": "376810.00",
                        "average_amount_per_pax_adt": "376810.00",
                        "currency_reference_id": "COP_0",
                        "fares_equivalent_paid_by_ptc": [
                            {
                                "amount": 880000,
                                "passenger_quantity": 1,
                                "passenger_type": "ADULT"
                            }
                        ],
                        "fees": {
                            "fees_detail": [],
                            "total_fees": 0
                        },
                        "next": {
                            "OD_CUCBOG_02_20240229-CPA_1_1-PREFERENCIAL_00VE_0": [
                                "ECONOMICA_00VE_0",
                                "PREFERENCIAL_00VE_0"
                            ]
                        },
                        "prev": null,
                        "rbd": {
                            "closed": "",
                            "posting": "9",
                            "reservation_booking_designator": "H",
                            "to_required": "",
                            "waitlist_enable": ""
                        },
                        "taxes": {
                            "taxes_detail": [
                                {
                                    "passenger_quantity": 1,
                                    "passenger_type": "ADULT",
                                    "taxes_list": [
                                        {
                                            "amount": 40000,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": false,
                                            "tax_code": "6B",
                                            "tax_code_name": "AIRLINE FEE"
                                        },
                                        {
                                            "amount": 7600,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "6S",
                                            "tax_code_name": "IVA TASA ADMINISTRATIVA"
                                        },
                                        {
                                            "amount": 42000,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "CO",
                                            "tax_code_name": "AIRLINE FEE"
                                        },
                                        {
                                            "amount": 167200,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "YS",
                                            "tax_code_name": "SALES TAX"
                                        }
                                    ],
                                    "total_amount": 256800
                                }
                            ],
                            "total_taxes": 256800
                        },
                        "total_equivalent_paid": 880000
                    }
                },
                "flights": [
                    "OD_BOGCUC_01_20240208-CPA_1_0-FL00VE9142"
                ],
                "order": {
                    "connection_qty": 0,
                    "lower_price": "207235.00",
                    "stop_conn_factor": 0,
                    "total_stops": 0,
                    "total_time": "01:20:00"
                }
            },
            "OD_CUCBOG_02_20240229-CPA_1_0-ECONOMICA_00VE_0": {
                "fares": {
                    "ECONOMICA_00VE_0": {
                        "average_amount": "207235.00",
                        "average_amount_per_pax_adt": "207235.00",
                        "currency_reference_id": "COP_0",
                        "fares_equivalent_paid_by_ptc": [
                            {
                                "amount": 273000,
                                "passenger_quantity": 1,
                                "passenger_type": "ADULT"
                            }
                        ],
                        "fees": {
                            "fees_detail": [],
                            "total_fees": 0
                        },
                        "next": null,
                        "prev": {
                            "OD_BOGCUC_01_20240208-CPA_1_0": [
                                "ECONOMICA_00VE_0"
                            ]
                        },
                        "rbd": {
                            "closed": "",
                            "posting": "7",
                            "reservation_booking_designator": "D",
                            "to_required": "",
                            "waitlist_enable": ""
                        },
                        "taxes": {
                            "taxes_detail": [
                                {
                                    "passenger_quantity": 1,
                                    "passenger_type": "ADULT",
                                    "taxes_list": [
                                        {
                                            "amount": 40000,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": false,
                                            "tax_code": "6B",
                                            "tax_code_name": "AIRLINE FEE"
                                        },
                                        {
                                            "amount": 7600,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "6S",
                                            "tax_code_name": "IVA TASA ADMINISTRATIVA"
                                        },
                                        {
                                            "amount": 42000,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "CO",
                                            "tax_code_name": "AIRLINE FEE"
                                        },
                                        {
                                            "amount": 51870,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "YS",
                                            "tax_code_name": "SALES TAX"
                                        }
                                    ],
                                    "total_amount": 141470
                                }
                            ],
                            "total_taxes": 141470
                        },
                        "total_equivalent_paid": 273000
                    },
                    "PREFERENCIAL_00VE_0": {
                        "average_amount": "590415.00",
                        "average_amount_per_pax_adt": "590415.00",
                        "currency_reference_id": "COP_0",
                        "fares_equivalent_paid_by_ptc": [
                            {
                                "amount": 595000,
                                "passenger_quantity": 1,
                                "passenger_type": "ADULT"
                            }
                        ],
                        "fees": {
                            "fees_detail": [],
                            "total_fees": 0
                        },
                        "next": null,
                        "prev": {
                            "OD_BOGCUC_01_20240208-CPA_1_0": [
                                "ECONOMICA_00VE_0"
                            ]
                        },
                        "rbd": {
                            "closed": "",
                            "posting": "9",
                            "reservation_booking_designator": "H",
                            "to_required": "",
                            "waitlist_enable": ""
                        },
                        "taxes": {
                            "taxes_detail": [
                                {
                                    "passenger_quantity": 1,
                                    "passenger_type": "ADULT",
                                    "taxes_list": [
                                        {
                                            "amount": 40000,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": false,
                                            "tax_code": "6B",
                                            "tax_code_name": "AIRLINE FEE"
                                        },
                                        {
                                            "amount": 7600,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "6S",
                                            "tax_code_name": "IVA TASA ADMINISTRATIVA"
                                        },
                                        {
                                            "amount": 42000,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "CO",
                                            "tax_code_name": "AIRLINE FEE"
                                        },
                                        {
                                            "amount": 113050,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "YS",
                                            "tax_code_name": "SALES TAX"
                                        }
                                    ],
                                    "total_amount": 202650
                                }
                            ],
                            "total_taxes": 202650
                        },
                        "total_equivalent_paid": 595000
                    }
                },
                "flights": [
                    "OD_CUCBOG_02_20240229-CPA_1_0-FL00VE9143"
                ],
                "order": {
                    "connection_qty": 0,
                    "lower_price": "207235.00",
                    "stop_conn_factor": 0,
                    "total_stops": 0,
                    "total_time": "01:35:00"
                }
            },
            "OD_CUCBOG_02_20240229-CPA_1_1-PREFERENCIAL_00VE_0": {
                "fares": {
                    "ECONOMICA_00VE_0": {
                        "average_amount": "376810.00",
                        "average_amount_per_pax_adt": "376810.00",
                        "currency_reference_id": "COP_0",
                        "fares_equivalent_paid_by_ptc": [
                            {
                                "amount": 558000,
                                "passenger_quantity": 1,
                                "passenger_type": "ADULT"
                            }
                        ],
                        "fees": {
                            "fees_detail": [],
                            "total_fees": 0
                        },
                        "next": null,
                        "prev": {
                            "OD_BOGCUC_01_20240208-CPA_1_0": [
                                "PREFERENCIAL_00VE_0"
                            ]
                        },
                        "rbd": {
                            "closed": "",
                            "posting": "7",
                            "reservation_booking_designator": "D",
                            "to_required": "",
                            "waitlist_enable": ""
                        },
                        "taxes": {
                            "taxes_detail": [
                                {
                                    "passenger_quantity": 1,
                                    "passenger_type": "ADULT",
                                    "taxes_list": [
                                        {
                                            "amount": 40000,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": false,
                                            "tax_code": "6B",
                                            "tax_code_name": "AIRLINE FEE"
                                        },
                                        {
                                            "amount": 7600,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "6S",
                                            "tax_code_name": "IVA TASA ADMINISTRATIVA"
                                        },
                                        {
                                            "amount": 42000,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "CO",
                                            "tax_code_name": "AIRLINE FEE"
                                        },
                                        {
                                            "amount": 106020,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "YS",
                                            "tax_code_name": "SALES TAX"
                                        }
                                    ],
                                    "total_amount": 195620
                                }
                            ],
                            "total_taxes": 195620
                        },
                        "total_equivalent_paid": 558000
                    },
                    "PREFERENCIAL_00VE_0": {
                        "average_amount": "759990.00",
                        "average_amount_per_pax_adt": "759990.00",
                        "currency_reference_id": "COP_0",
                        "fares_equivalent_paid_by_ptc": [
                            {
                                "amount": 880000,
                                "passenger_quantity": 1,
                                "passenger_type": "ADULT"
                            }
                        ],
                        "fees": {
                            "fees_detail": [],
                            "total_fees": 0
                        },
                        "next": null,
                        "prev": {
                            "OD_BOGCUC_01_20240208-CPA_1_0": [
                                "PREFERENCIAL_00VE_0"
                            ]
                        },
                        "rbd": {
                            "closed": "",
                            "posting": "9",
                            "reservation_booking_designator": "H",
                            "to_required": "",
                            "waitlist_enable": ""
                        },
                        "taxes": {
                            "taxes_detail": [
                                {
                                    "passenger_quantity": 1,
                                    "passenger_type": "ADULT",
                                    "taxes_list": [
                                        {
                                            "amount": 40000,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": false,
                                            "tax_code": "6B",
                                            "tax_code_name": "AIRLINE FEE"
                                        },
                                        {
                                            "amount": 7600,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "6S",
                                            "tax_code_name": "IVA TASA ADMINISTRATIVA"
                                        },
                                        {
                                            "amount": 42000,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "CO",
                                            "tax_code_name": "AIRLINE FEE"
                                        },
                                        {
                                            "amount": 167200,
                                            "collectable": true,
                                            "currency_reference_id": "COP_0",
                                            "excepted": false,
                                            "exchange_allowed": true,
                                            "paid": false,
                                            "quotation_mode": "AUTOMATIC",
                                            "refund_allowed": true,
                                            "tax_code": "YS",
                                            "tax_code_name": "SALES TAX"
                                        }
                                    ],
                                    "total_amount": 256800
                                }
                            ],
                            "total_taxes": 256800
                        },
                        "total_equivalent_paid": 880000
                    }
                },
                "flights": [
                    "OD_CUCBOG_02_20240229-CPA_1_0-FL00VE9143"
                ],
                "order": {
                    "connection_qty": 0,
                    "lower_price": "376810.00",
                    "stop_conn_factor": 0,
                    "total_stops": 0,
                    "total_time": "01:35:00"
                }
            }
        },
        "online_information": {
            "users_online": 89,
            "users_online_same_date_route": 2
        },
        "passengers": [
            {
                "ptc": "ADT",
                "total": 1,
                "type": "adult"
            }
        ]
    }
}
*/