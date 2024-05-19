fetch("https://ibisservices.iberia.com/api/sse-avm/rs/v2/availability", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "es-CO",
    "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJNQnl5bzlwSWVqUG5vUzdFeEZxdk12WE41cWVfTy1FRnBRYUlMOUYyQjdRIn0.eyJqdGkiOiIwMDZiMDA4Zi1hMmExLTRlOWMtOGMyOC1mNmE4Y2U0ZDg0NGYiLCJleHAiOjE3MDU5ODA5NzAsIm5iZiI6MCwiaWF0IjoxNzA1OTgwMDcwLCJpc3MiOiJodHRwczovL25ldy1pYmlzYXV0aC5jb3JwLmliZXJpYS5lcy9hdXRoL3JlYWxtcy9jb21tZXJjaWFsX3BsYXRmb3JtIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjhmMDcyYmNhLWQ5Y2QtNGZiZi05NzY0LTI0Y2MxODQxYjNhMCIsInR5cCI6IkJlYXJlciIsImF6cCI6ImliZXJpYV93ZWIiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiI3YzQ4YzBhOS0wMTZiLTRlNTUtYjI5NS0wMzcwZTQ2NzA3MTMiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlJPTEVfQ1JFQVRFX0NMQUlNIiwiUk9MRV9JRENfU0VBUkNIX0NVU1RPTUVSX1NBIiwiUk9MRV9GQVZMIiwiUk9MRV9MT0MiLCJST0xFX1JFVFJJRVZFX0RBTUFHRURfQkFHX1JFVElSRURfUkVDT1JEIiwiUk9MRV9FTlJPTF9NRU1CRVJfWkVSTyIsIlJPTEVfT1JTIiwiUk9MRV9PUk0iLCJST0xFX1RSQVZFTF9ET0NVTUVOVF9UWVBFUyIsIlJPTEVfUkVRVUVTVF9TVVBQT1JUX0NBTEwiLCJST0xFX1BSTSIsIm9mZmxpbmVfYWNjZXNzIiwiUk9MRV9BRFZNIiwiUk9MRV9QQUNDIiwiUk9MRV9TUlYiLCJST0xFX1VMIiwiUk9MRV9SRVNFVF9QQVNTV09SRCIsIlJPTEVfRkFTUyIsIlJPTEVfSURDX0dFVF9JREVOVElGSUVSUyIsIlJPTEVfQlBNIiwiUk9MRV9BUElNIiwiUk9MRV9DVVNUIiwiUk9MRV9JVlMiLCJST0xFX1JFVFJJRVZFX0RFTEFZRURfQkFHIiwiUk9MRV9GT0ZGIiwiUk9MRV9SRVRSSUVWRV9EQU1BR0VEX0JBRyIsIlJPTEVfQ0hFQ0tfUElSU1RBVFVTIiwiUk9MRV9HRVRfQ0xBSU1fU1RBVFVTIiwiUk9MRV9FTlJPTF9NRU1CRVIiLCJST0xFX0NBTENfUE9JTlRTIiwiUk9MRV9SRVFVRVNUX0dDX0JBR19DTEFJTSIsIlJPTEVfQVZNIiwiUk9MRV9DTElFTlRfV0VCIiwiUk9MRV9QTVQiLCJST0xFX1JFVFJJRVZFX0RFTEFZRURfQkFHX1JFVElSRURfUkVDT1JEIiwiUk9MRV9MRU0iLCJST0xFX1NFQVRTIiwiUk9MRV9ST1AiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50Iiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiY2xpZW50SG9zdCI6IjIwMC4xMTguNjIuMTEwIiwiY2xpZW50SWQiOiJpYmVyaWFfd2ViIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtaWJlcmlhX3dlYiIsImNsaWVudEFkZHJlc3MiOiIyMDAuMTE4LjYyLjExMCIsImVtYWlsIjoic2VydmljZS1hY2NvdW50LWliZXJpYV93ZWJAcGxhY2Vob2xkZXIub3JnIn0.I2_Aj4J40e8gQ8c4D9fBoocB5lAk49paPoIWdSdDI4KDYMFW-bUjb7f-DJgrICia09zSo1txHPXTrDqxJEbH-RTMxmhPqzr89jBVnIiGiVGUb4Hs0ZCpkBkFfq_AcpeVhTj8Ne-WnhpfNyHa8ryR23DFDvpk4k82-THj3F4JtPT0Lsdd_-_yN9QjFZlzpjiawHok7n48oyNid17odT6x7kk3KjW9krhBaT2dfSzsp8IQ6BOFAHzpGf2KuEpQfxgE3vjLBu7Iv0vG5HSm0C-bTP1W9I6lShU05U2r4XE1bhqELKemMN11OvGf4p7TP4JCpe_xs_YRy5ds9cwOMd_yvA",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "x-observations-current-page": "availability",
    "x-observations-origin-page": "availability",
    "x-request-appversion": "10.20.1",
    "x-request-device": "unknown|chrome|113.0.0.0",
    "x-request-osversion": "mac|unknown"
  },
  "referrer": "https://www.iberia.com/",
  "referrerPolicy": "strict-origin",
  "body": "{\"slices\":[{\"origin\":\"CUC\",\"destination\":\"MAD\",\"date\":\"2024-05-01\"},{\"origin\":\"MAD\",\"destination\":\"CUC\",\"date\":\"2024-08-30\"}],\"passengers\":[{\"passengerType\":\"ADULT\",\"count\":1}],\"marketCode\":\"CO\",\"preferredCabin\":\"ECONOMY\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

    /*
        response
        {
        "offers": [
            {
                "offerId": "IB9f264e1ee7f240dbb10e8e9058a8c814OP",
                "offerItems": [
                    {
                        "offerItemId": "IB9f264e1ee7f240dbb10e8e9058a8c814OP_01",
                        "price": {
                            "fare": 2526100,
                            "tax": 689280,
                            "total": 3215380,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1323800,
                            "tax": 444290,
                            "total": 1768090,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1323800,
                            "tax": 444290,
                            "total": 1768090,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1323800,
                            "tax": 444290,
                            "total": 1768090,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            },
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1202300,
                            "tax": 244990,
                            "total": 1447290,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1202300,
                            "tax": 244990,
                            "total": 1447290,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1202300,
                            "tax": 244990,
                            "total": 1447290,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "1",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 2526100,
                    "tax": 689280,
                    "total": 3215380,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB1f2b2382ec85490b8d4074328861714cOP",
                "offerItems": [
                    {
                        "offerItemId": "IB1f2b2382ec85490b8d4074328861714cOP_01",
                        "price": {
                            "fare": 2682800,
                            "tax": 704170,
                            "total": 3386970,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1480500,
                            "tax": 451735,
                            "total": 1932235,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1480500,
                            "tax": 451735,
                            "total": 1932235,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1480500,
                            "tax": 451735,
                            "total": 1932235,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T2N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T2N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1202300,
                            "tax": 252435,
                            "total": 1454735,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1202300,
                            "tax": 252435,
                            "total": 1454735,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1202300,
                            "tax": 252435,
                            "total": 1454735,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "2",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 2682800,
                    "tax": 704170,
                    "total": 3386970,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB9bc1e64c9aaf445eac4b25a7750424e2OP",
                "offerItems": [
                    {
                        "offerItemId": "IB9bc1e64c9aaf445eac4b25a7750424e2OP_01",
                        "price": {
                            "fare": 2682800,
                            "tax": 704170,
                            "total": 3386970,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1323800,
                            "tax": 451735,
                            "total": 1775535,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1323800,
                            "tax": 451735,
                            "total": 1775535,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1323800,
                            "tax": 451735,
                            "total": 1775535,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            },
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1359000,
                            "tax": 252435,
                            "total": 1611435,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1359000,
                            "tax": 252435,
                            "total": 1611435,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1359000,
                            "tax": 252435,
                            "total": 1611435,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "3",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 2682800,
                    "tax": 704170,
                    "total": 3386970,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB1c89202367124f708bdfddeb8e86704fOP",
                "offerItems": [
                    {
                        "offerItemId": "IB1c89202367124f708bdfddeb8e86704fOP_01",
                        "price": {
                            "fare": 2808100,
                            "tax": 716070,
                            "total": 3524170,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1323800,
                            "tax": 457685,
                            "total": 1781485,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1323800,
                            "tax": 457685,
                            "total": 1781485,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1323800,
                            "tax": 457685,
                            "total": 1781485,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            },
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1484300,
                            "tax": 258385,
                            "total": 1742685,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1484300,
                            "tax": 258385,
                            "total": 1742685,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1484300,
                            "tax": 258385,
                            "total": 1742685,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "4",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 2808100,
                    "tax": 716070,
                    "total": 3524170,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB6e5cf37cec1245df926d703c0c461b83OP",
                "offerItems": [
                    {
                        "offerItemId": "IB6e5cf37cec1245df926d703c0c461b83OP_01",
                        "price": {
                            "fare": 2815900,
                            "tax": 716810,
                            "total": 3532710,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1613700,
                            "tax": 458055,
                            "total": 2071755,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1613700,
                            "tax": 458055,
                            "total": 2071755,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1613700,
                            "tax": 458055,
                            "total": 2071755,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            },
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1202200,
                            "tax": 258755,
                            "total": 1460955,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1202200,
                            "tax": 258755,
                            "total": 1460955,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1202200,
                            "tax": 258755,
                            "total": 1460955,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "5",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 2815900,
                    "tax": 716810,
                    "total": 3532710,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB0c04826bb33f4fd5ae2db2e05628dca6OP",
                "offerItems": [
                    {
                        "offerItemId": "IB0c04826bb33f4fd5ae2db2e05628dca6OP_01",
                        "price": {
                            "fare": 2839400,
                            "tax": 719040,
                            "total": 3558440,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1480500,
                            "tax": 459170,
                            "total": 1939670,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1480500,
                            "tax": 459170,
                            "total": 1939670,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1480500,
                            "tax": 459170,
                            "total": 1939670,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T2N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T2N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1358900,
                            "tax": 259870,
                            "total": 1618770,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1358900,
                            "tax": 259870,
                            "total": 1618770,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1358900,
                            "tax": 259870,
                            "total": 1618770,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "6",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 2839400,
                    "tax": 719040,
                    "total": 3558440,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBf53d07372e104eb78188010193f40417OP",
                "offerItems": [
                    {
                        "offerItemId": "IBf53d07372e104eb78188010193f40417OP_01",
                        "price": {
                            "fare": 2964800,
                            "tax": 730960,
                            "total": 3695760,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1480500,
                            "tax": 465130,
                            "total": 1945630,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1480500,
                            "tax": 465130,
                            "total": 1945630,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1480500,
                            "tax": 465130,
                            "total": 1945630,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T2N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T2N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1484300,
                            "tax": 265830,
                            "total": 1750130,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1484300,
                            "tax": 265830,
                            "total": 1750130,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1484300,
                            "tax": 265830,
                            "total": 1750130,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "7",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 2964800,
                    "tax": 730960,
                    "total": 3695760,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBf7b4a5df10904387aff6b6b5aca8cdbdOP",
                "offerItems": [
                    {
                        "offerItemId": "IBf7b4a5df10904387aff6b6b5aca8cdbdOP_01",
                        "price": {
                            "fare": 2972600,
                            "tax": 731700,
                            "total": 3704300,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1613700,
                            "tax": 465500,
                            "total": 2079200,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1613700,
                            "tax": 465500,
                            "total": 2079200,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1613700,
                            "tax": 465500,
                            "total": 2079200,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            },
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1358900,
                            "tax": 266200,
                            "total": 1625100,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1358900,
                            "tax": 266200,
                            "total": 1625100,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1358900,
                            "tax": 266200,
                            "total": 1625100,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "8",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 2972600,
                    "tax": 731700,
                    "total": 3704300,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBecc76915c2e84568a07d8239e5c36c64OP",
                "offerItems": [
                    {
                        "offerItemId": "IBecc76915c2e84568a07d8239e5c36c64OP_01",
                        "price": {
                            "fare": 3035300,
                            "tax": 737650,
                            "total": 3772950,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1323800,
                            "tax": 468475,
                            "total": 1792275,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1323800,
                            "tax": 468475,
                            "total": 1792275,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1323800,
                            "tax": 468475,
                            "total": 1792275,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            },
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1711500,
                            "tax": 269175,
                            "total": 1980675,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1711500,
                            "tax": 269175,
                            "total": 1980675,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1711500,
                            "tax": 269175,
                            "total": 1980675,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "9",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3035300,
                    "tax": 737650,
                    "total": 3772950,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBa01a3e41978c4053a4e2531af700d814OP",
                "offerItems": [
                    {
                        "offerItemId": "IBa01a3e41978c4053a4e2531af700d814OP_01",
                        "price": {
                            "fare": 3035300,
                            "tax": 737650,
                            "total": 3772950,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1833000,
                            "tax": 468475,
                            "total": 2301475,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1833000,
                            "tax": 468475,
                            "total": 2301475,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1833000,
                            "tax": 468475,
                            "total": 2301475,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            },
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1202300,
                            "tax": 269175,
                            "total": 1471475,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1202300,
                            "tax": 269175,
                            "total": 1471475,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1202300,
                            "tax": 269175,
                            "total": 1471475,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "10",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3035300,
                    "tax": 737650,
                    "total": 3772950,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBf66e5ffaaec24f0187ec76f743b7dfc9OP",
                "offerItems": [
                    {
                        "offerItemId": "IBf66e5ffaaec24f0187ec76f743b7dfc9OP_01",
                        "price": {
                            "fare": 3097900,
                            "tax": 743600,
                            "total": 3841500,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1613700,
                            "tax": 471450,
                            "total": 2085150,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1613700,
                            "tax": 471450,
                            "total": 2085150,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1613700,
                            "tax": 471450,
                            "total": 2085150,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            },
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1484200,
                            "tax": 272150,
                            "total": 1756350,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1484200,
                            "tax": 272150,
                            "total": 1756350,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1484200,
                            "tax": 272150,
                            "total": 1756350,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "11",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3097900,
                    "tax": 743600,
                    "total": 3841500,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB6b12c045cfa3432680c4ebc73fa696a2OP",
                "offerItems": [
                    {
                        "offerItemId": "IB6b12c045cfa3432680c4ebc73fa696a2OP_01",
                        "price": {
                            "fare": 3191900,
                            "tax": 752530,
                            "total": 3944430,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1833000,
                            "tax": 475915,
                            "total": 2308915,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1833000,
                            "tax": 475915,
                            "total": 2308915,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1833000,
                            "tax": 475915,
                            "total": 2308915,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            },
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1358900,
                            "tax": 276615,
                            "total": 1635515,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1358900,
                            "tax": 276615,
                            "total": 1635515,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1358900,
                            "tax": 276615,
                            "total": 1635515,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "12",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3191900,
                    "tax": 752530,
                    "total": 3944430,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB3fbd3640fda045d6a78fa5708831574bOP",
                "offerItems": [
                    {
                        "offerItemId": "IB3fbd3640fda045d6a78fa5708831574bOP_01",
                        "price": {
                            "fare": 3191900,
                            "tax": 752530,
                            "total": 3944430,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1480500,
                            "tax": 475915,
                            "total": 1956415,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1480500,
                            "tax": 475915,
                            "total": 1956415,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1480500,
                            "tax": 475915,
                            "total": 1956415,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T2N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T2N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1711400,
                            "tax": 276615,
                            "total": 1988015,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1711400,
                            "tax": 276615,
                            "total": 1988015,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1711400,
                            "tax": 276615,
                            "total": 1988015,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "13",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3191900,
                    "tax": 752530,
                    "total": 3944430,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBaba3f406f5ed4c92b4e760428879c8bdOP",
                "offerItems": [
                    {
                        "offerItemId": "IBaba3f406f5ed4c92b4e760428879c8bdOP_01",
                        "price": {
                            "fare": 3191900,
                            "tax": 752530,
                            "total": 3944430,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1985700,
                            "tax": 475915,
                            "total": 2461615,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1985700,
                            "tax": 475915,
                            "total": 2461615,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1985700,
                            "tax": 475915,
                            "total": 2461615,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "NDL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "N",
                                        "remainingSeats": 9,
                                        "fareBasis": "NDL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1206200,
                            "tax": 276615,
                            "total": 1482815,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1206200,
                            "tax": 276615,
                            "total": 1482815,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1206200,
                            "tax": 276615,
                            "total": 1482815,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "14",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3191900,
                    "tax": 752530,
                    "total": 3944430,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBd16e75cbcd784c419d5a8ef37628f83aOP",
                "offerItems": [
                    {
                        "offerItemId": "IBd16e75cbcd784c419d5a8ef37628f83aOP_01",
                        "price": {
                            "fare": 3317200,
                            "tax": 764430,
                            "total": 4081630,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1833000,
                            "tax": 481865,
                            "total": 2314865,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1833000,
                            "tax": 481865,
                            "total": 2314865,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1833000,
                            "tax": 481865,
                            "total": 2314865,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            },
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1484200,
                            "tax": 282565,
                            "total": 1766765,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1484200,
                            "tax": 282565,
                            "total": 1766765,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1484200,
                            "tax": 282565,
                            "total": 1766765,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "15",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3317200,
                    "tax": 764430,
                    "total": 4081630,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBba0b4edd394f47509b212b168931704eOP",
                "offerItems": [
                    {
                        "offerItemId": "IBba0b4edd394f47509b212b168931704eOP_01",
                        "price": {
                            "fare": 3325100,
                            "tax": 765180,
                            "total": 4090280,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1613700,
                            "tax": 482240,
                            "total": 2095940,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1613700,
                            "tax": 482240,
                            "total": 2095940,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1613700,
                            "tax": 482240,
                            "total": 2095940,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            },
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1711400,
                            "tax": 282940,
                            "total": 1994340,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1711400,
                            "tax": 282940,
                            "total": 1994340,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1711400,
                            "tax": 282940,
                            "total": 1994340,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "16",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3325100,
                    "tax": 765180,
                    "total": 4090280,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBfb0c31f83ead4a7b8dccacc09d569b58OP",
                "offerItems": [
                    {
                        "offerItemId": "IBfb0c31f83ead4a7b8dccacc09d569b58OP_01",
                        "price": {
                            "fare": 3348600,
                            "tax": 767420,
                            "total": 4116020,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1985700,
                            "tax": 483360,
                            "total": 2469060,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1985700,
                            "tax": 483360,
                            "total": 2469060,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1985700,
                            "tax": 483360,
                            "total": 2469060,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "NDL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "N",
                                        "remainingSeats": 9,
                                        "fareBasis": "NDL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1362900,
                            "tax": 284060,
                            "total": 1646960,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1362900,
                            "tax": 284060,
                            "total": 1646960,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1362900,
                            "tax": 284060,
                            "total": 1646960,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "17",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3348600,
                    "tax": 767420,
                    "total": 4116020,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBeb0e7bf254d0496ba2d38e0a980df802OP",
                "offerItems": [
                    {
                        "offerItemId": "IBeb0e7bf254d0496ba2d38e0a980df802OP_01",
                        "price": {
                            "fare": 3348600,
                            "tax": 767420,
                            "total": 4116020,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2142400,
                            "tax": 483360,
                            "total": 2625760,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2142400,
                            "tax": 483360,
                            "total": 2625760,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2142400,
                            "tax": 483360,
                            "total": 2625760,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "TNL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "TNL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1206200,
                            "tax": 284060,
                            "total": 1490260,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1206200,
                            "tax": 284060,
                            "total": 1490260,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1206200,
                            "tax": 284060,
                            "total": 1490260,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "18",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3348600,
                    "tax": 767420,
                    "total": 4116020,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBc2cc7650a521498da29f7bdad82556b1OP",
                "offerItems": [
                    {
                        "offerItemId": "IBc2cc7650a521498da29f7bdad82556b1OP_01",
                        "price": {
                            "fare": 3473900,
                            "tax": 779320,
                            "total": 4253220,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1985700,
                            "tax": 489310,
                            "total": 2475010,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1985700,
                            "tax": 489310,
                            "total": 2475010,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1985700,
                            "tax": 489310,
                            "total": 2475010,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "NDL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "N",
                                        "remainingSeats": 9,
                                        "fareBasis": "NDL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1488200,
                            "tax": 290010,
                            "total": 1778210,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1488200,
                            "tax": 290010,
                            "total": 1778210,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1488200,
                            "tax": 290010,
                            "total": 1778210,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "19",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3473900,
                    "tax": 779320,
                    "total": 4253220,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB9ff9e1b5ddaa4530a1c7b134a31b1ba8OP",
                "offerItems": [
                    {
                        "offerItemId": "IB9ff9e1b5ddaa4530a1c7b134a31b1ba8OP_01",
                        "price": {
                            "fare": 3485600,
                            "tax": 780430,
                            "total": 4266030,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2279400,
                            "tax": 489865,
                            "total": 2769265,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2279400,
                            "tax": 489865,
                            "total": 2769265,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2279400,
                            "tax": 489865,
                            "total": 2769265,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "B",
                                        "remainingSeats": 7,
                                        "fareBasis": "ENL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "E",
                                        "remainingSeats": 9,
                                        "fareBasis": "ENL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1206200,
                            "tax": 290565,
                            "total": 1496765,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1206200,
                            "tax": 290565,
                            "total": 1496765,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1206200,
                            "tax": 290565,
                            "total": 1496765,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "20",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3485600,
                    "tax": 780430,
                    "total": 4266030,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBcee2a4911be4410e9ffed07c472502c4OP",
                "offerItems": [
                    {
                        "offerItemId": "IBcee2a4911be4410e9ffed07c472502c4OP_01",
                        "price": {
                            "fare": 3497400,
                            "tax": 781550,
                            "total": 4278950,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2291200,
                            "tax": 490425,
                            "total": 2781625,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2291200,
                            "tax": 490425,
                            "total": 2781625,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2291200,
                            "tax": 490425,
                            "total": 2781625,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "NDL0NNU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "N",
                                        "remainingSeats": 9,
                                        "fareBasis": "NDL0NNU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1206200,
                            "tax": 291125,
                            "total": 1497325,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1206200,
                            "tax": 291125,
                            "total": 1497325,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1206200,
                            "tax": 291125,
                            "total": 1497325,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "21",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3497400,
                    "tax": 781550,
                    "total": 4278950,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBed1a841bf5884b3d8fb48e66ef0159ebOP",
                "offerItems": [
                    {
                        "offerItemId": "IBed1a841bf5884b3d8fb48e66ef0159ebOP_01",
                        "price": {
                            "fare": 3505200,
                            "tax": 782290,
                            "total": 4287490,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2142400,
                            "tax": 490795,
                            "total": 2633195,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2142400,
                            "tax": 490795,
                            "total": 2633195,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2142400,
                            "tax": 490795,
                            "total": 2633195,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "TNL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "TNL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1362800,
                            "tax": 291495,
                            "total": 1654295,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1362800,
                            "tax": 291495,
                            "total": 1654295,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1362800,
                            "tax": 291495,
                            "total": 1654295,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "22",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3505200,
                    "tax": 782290,
                    "total": 4287490,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBd224ec5b1f3c400da4516eba06aed802OP",
                "offerItems": [
                    {
                        "offerItemId": "IBd224ec5b1f3c400da4516eba06aed802OP_01",
                        "price": {
                            "fare": 3544400,
                            "tax": 786020,
                            "total": 4330420,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1833000,
                            "tax": 492660,
                            "total": 2325660,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1833000,
                            "tax": 492660,
                            "total": 2325660,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1833000,
                            "tax": 492660,
                            "total": 2325660,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            },
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1711400,
                            "tax": 293360,
                            "total": 2004760,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1711400,
                            "tax": 293360,
                            "total": 2004760,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1711400,
                            "tax": 293360,
                            "total": 2004760,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "23",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3544400,
                    "tax": 786020,
                    "total": 4330420,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB36dfbe794a5844b7b5db514b67a7f737OP",
                "offerItems": [
                    {
                        "offerItemId": "IB36dfbe794a5844b7b5db514b67a7f737OP_01",
                        "price": {
                            "fare": 3630500,
                            "tax": 794200,
                            "total": 4424700,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2142400,
                            "tax": 496750,
                            "total": 2639150,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2142400,
                            "tax": 496750,
                            "total": 2639150,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2142400,
                            "tax": 496750,
                            "total": 2639150,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "TNL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "TNL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1488100,
                            "tax": 297450,
                            "total": 1785550,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1488100,
                            "tax": 297450,
                            "total": 1785550,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1488100,
                            "tax": 297450,
                            "total": 1785550,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "24",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3630500,
                    "tax": 794200,
                    "total": 4424700,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBfd4733a11ca24bed87376fd9ac799dceOP",
                "offerItems": [
                    {
                        "offerItemId": "IBfd4733a11ca24bed87376fd9ac799dceOP_01",
                        "price": {
                            "fare": 3642300,
                            "tax": 795320,
                            "total": 4437620,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2279400,
                            "tax": 497310,
                            "total": 2776710,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2279400,
                            "tax": 497310,
                            "total": 2776710,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2279400,
                            "tax": 497310,
                            "total": 2776710,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "B",
                                        "remainingSeats": 7,
                                        "fareBasis": "ENL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "E",
                                        "remainingSeats": 9,
                                        "fareBasis": "ENL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1362900,
                            "tax": 298010,
                            "total": 1660910,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1362900,
                            "tax": 298010,
                            "total": 1660910,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1362900,
                            "tax": 298010,
                            "total": 1660910,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "25",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3642300,
                    "tax": 795320,
                    "total": 4437620,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBb7d01095e1424f0d81d7471e371715b9OP",
                "offerItems": [
                    {
                        "offerItemId": "IBb7d01095e1424f0d81d7471e371715b9OP_01",
                        "price": {
                            "fare": 3654000,
                            "tax": 796430,
                            "total": 4450430,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2291200,
                            "tax": 497865,
                            "total": 2789065,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2291200,
                            "tax": 497865,
                            "total": 2789065,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2291200,
                            "tax": 497865,
                            "total": 2789065,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "NDL0NNU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "N",
                                        "remainingSeats": 9,
                                        "fareBasis": "NDL0NNU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1362800,
                            "tax": 298565,
                            "total": 1661365,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1362800,
                            "tax": 298565,
                            "total": 1661365,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1362800,
                            "tax": 298565,
                            "total": 1661365,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "26",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3654000,
                    "tax": 796430,
                    "total": 4450430,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBe9df8157e79e4e409d8e7c56d4a15f9fOP",
                "offerItems": [
                    {
                        "offerItemId": "IBe9df8157e79e4e409d8e7c56d4a15f9fOP_01",
                        "price": {
                            "fare": 3661900,
                            "tax": 797180,
                            "total": 4459080,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2459600,
                            "tax": 498240,
                            "total": 2957840,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2459600,
                            "tax": 498240,
                            "total": 2957840,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2459600,
                            "tax": 498240,
                            "total": 2957840,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T2N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T2N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1202300,
                            "tax": 298940,
                            "total": 1501240,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1202300,
                            "tax": 298940,
                            "total": 1501240,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1202300,
                            "tax": 298940,
                            "total": 1501240,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "27",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3661900,
                    "tax": 797180,
                    "total": 4459080,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB86690dc70b624d80bff811a0b7904c78OP",
                "offerItems": [
                    {
                        "offerItemId": "IB86690dc70b624d80bff811a0b7904c78OP_01",
                        "price": {
                            "fare": 3661900,
                            "tax": 797180,
                            "total": 4459080,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1323800,
                            "tax": 498240,
                            "total": 1822040,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1323800,
                            "tax": 498240,
                            "total": 1822040,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1323800,
                            "tax": 498240,
                            "total": 1822040,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            },
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2338100,
                            "tax": 298940,
                            "total": 2637040,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2338100,
                            "tax": 298940,
                            "total": 2637040,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2338100,
                            "tax": 298940,
                            "total": 2637040,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "28",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3661900,
                    "tax": 797180,
                    "total": 4459080,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBe09fa104fad34f2bb7cc185bc2ffb40cOP",
                "offerItems": [
                    {
                        "offerItemId": "IBe09fa104fad34f2bb7cc185bc2ffb40cOP_01",
                        "price": {
                            "fare": 3701000,
                            "tax": 800900,
                            "total": 4501900,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1985700,
                            "tax": 500100,
                            "total": 2485800,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1985700,
                            "tax": 500100,
                            "total": 2485800,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1985700,
                            "tax": 500100,
                            "total": 2485800,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "NDL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "N",
                                        "remainingSeats": 9,
                                        "fareBasis": "NDL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1715300,
                            "tax": 300800,
                            "total": 2016100,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1715300,
                            "tax": 300800,
                            "total": 2016100,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1715300,
                            "tax": 300800,
                            "total": 2016100,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "29",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3701000,
                    "tax": 800900,
                    "total": 4501900,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB323e06df4e02470589cad07ede1909b8OP",
                "offerItems": [
                    {
                        "offerItemId": "IB323e06df4e02470589cad07ede1909b8OP_01",
                        "price": {
                            "fare": 3705000,
                            "tax": 801280,
                            "total": 4506280,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2498800,
                            "tax": 500290,
                            "total": 2999090,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2498800,
                            "tax": 500290,
                            "total": 2999090,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2498800,
                            "tax": 500290,
                            "total": 2999090,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "NDL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "N",
                                        "remainingSeats": 9,
                                        "fareBasis": "NDL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1206200,
                            "tax": 300990,
                            "total": 1507190,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1206200,
                            "tax": 300990,
                            "total": 1507190,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1206200,
                            "tax": 300990,
                            "total": 1507190,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "30",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3705000,
                    "tax": 801280,
                    "total": 4506280,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB07315e6ce5be44718294a9c5809c63b9OP",
                "offerItems": [
                    {
                        "offerItemId": "IB07315e6ce5be44718294a9c5809c63b9OP_01",
                        "price": {
                            "fare": 3767600,
                            "tax": 807220,
                            "total": 4574820,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2279400,
                            "tax": 503260,
                            "total": 2782660,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2279400,
                            "tax": 503260,
                            "total": 2782660,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2279400,
                            "tax": 503260,
                            "total": 2782660,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "B",
                                        "remainingSeats": 7,
                                        "fareBasis": "ENL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "E",
                                        "remainingSeats": 9,
                                        "fareBasis": "ENL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1488200,
                            "tax": 303960,
                            "total": 1792160,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1488200,
                            "tax": 303960,
                            "total": 1792160,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1488200,
                            "tax": 303960,
                            "total": 1792160,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "31",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3767600,
                    "tax": 807220,
                    "total": 4574820,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBae60cbe9b7834cdfae3036b8ddc4fe5eOP",
                "offerItems": [
                    {
                        "offerItemId": "IBae60cbe9b7834cdfae3036b8ddc4fe5eOP_01",
                        "price": {
                            "fare": 3779400,
                            "tax": 808340,
                            "total": 4587740,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2291200,
                            "tax": 503820,
                            "total": 2795020,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2291200,
                            "tax": 503820,
                            "total": 2795020,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2291200,
                            "tax": 503820,
                            "total": 2795020,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "NDL0NNU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "N",
                                        "remainingSeats": 9,
                                        "fareBasis": "NDL0NNU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1488200,
                            "tax": 304520,
                            "total": 1792720,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1488200,
                            "tax": 304520,
                            "total": 1792720,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1488200,
                            "tax": 304520,
                            "total": 1792720,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "32",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3779400,
                    "tax": 808340,
                    "total": 4587740,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB53fd2543e8f542d0b298d86c95b05874OP",
                "offerItems": [
                    {
                        "offerItemId": "IB53fd2543e8f542d0b298d86c95b05874OP_01",
                        "price": {
                            "fare": 3818500,
                            "tax": 812060,
                            "total": 4630560,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2459600,
                            "tax": 505680,
                            "total": 2965280,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2459600,
                            "tax": 505680,
                            "total": 2965280,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2459600,
                            "tax": 505680,
                            "total": 2965280,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T2N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T2N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1358900,
                            "tax": 306380,
                            "total": 1665280,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1358900,
                            "tax": 306380,
                            "total": 1665280,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1358900,
                            "tax": 306380,
                            "total": 1665280,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "33",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3818500,
                    "tax": 812060,
                    "total": 4630560,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB656a0723188f464d9263fc0729e9ae49OP",
                "offerItems": [
                    {
                        "offerItemId": "IB656a0723188f464d9263fc0729e9ae49OP_01",
                        "price": {
                            "fare": 3818500,
                            "tax": 812060,
                            "total": 4630560,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1480500,
                            "tax": 505680,
                            "total": 1986180,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1480500,
                            "tax": 505680,
                            "total": 1986180,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1480500,
                            "tax": 505680,
                            "total": 1986180,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T2N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T2N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2338000,
                            "tax": 306380,
                            "total": 2644380,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2338000,
                            "tax": 306380,
                            "total": 2644380,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2338000,
                            "tax": 306380,
                            "total": 2644380,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "34",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3818500,
                    "tax": 812060,
                    "total": 4630560,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBbc5d1c028eca49e79ee2956ae5bfeb58OP",
                "offerItems": [
                    {
                        "offerItemId": "IBbc5d1c028eca49e79ee2956ae5bfeb58OP_01",
                        "price": {
                            "fare": 3857700,
                            "tax": 815780,
                            "total": 4673480,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2142400,
                            "tax": 507540,
                            "total": 2649940,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2142400,
                            "tax": 507540,
                            "total": 2649940,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2142400,
                            "tax": 507540,
                            "total": 2649940,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "TNL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "TNL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1715300,
                            "tax": 308240,
                            "total": 2023540,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1715300,
                            "tax": 308240,
                            "total": 2023540,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1715300,
                            "tax": 308240,
                            "total": 2023540,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "35",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3857700,
                    "tax": 815780,
                    "total": 4673480,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBbd076716b11049348565e48056f1f2a8OP",
                "offerItems": [
                    {
                        "offerItemId": "IBbd076716b11049348565e48056f1f2a8OP_01",
                        "price": {
                            "fare": 3861600,
                            "tax": 816150,
                            "total": 4677750,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2498800,
                            "tax": 507725,
                            "total": 3006525,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2498800,
                            "tax": 507725,
                            "total": 3006525,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2498800,
                            "tax": 507725,
                            "total": 3006525,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "NDL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "N",
                                        "remainingSeats": 9,
                                        "fareBasis": "NDL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1362800,
                            "tax": 308425,
                            "total": 1671225,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1362800,
                            "tax": 308425,
                            "total": 1671225,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1362800,
                            "tax": 308425,
                            "total": 1671225,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "36",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3861600,
                    "tax": 816150,
                    "total": 4677750,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB30b667c6466a41aebb589885ccabc849OP",
                "offerItems": [
                    {
                        "offerItemId": "IB30b667c6466a41aebb589885ccabc849OP_01",
                        "price": {
                            "fare": 3943900,
                            "tax": 823970,
                            "total": 4767870,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2459600,
                            "tax": 511635,
                            "total": 2971235,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2459600,
                            "tax": 511635,
                            "total": 2971235,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2459600,
                            "tax": 511635,
                            "total": 2971235,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T2N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T2N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1484300,
                            "tax": 312335,
                            "total": 1796635,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1484300,
                            "tax": 312335,
                            "total": 1796635,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1484300,
                            "tax": 312335,
                            "total": 1796635,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "37",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3943900,
                    "tax": 823970,
                    "total": 4767870,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB979dd205991148ca990c1536d738744aOP",
                "offerItems": [
                    {
                        "offerItemId": "IB979dd205991148ca990c1536d738744aOP_01",
                        "price": {
                            "fare": 3951700,
                            "tax": 824710,
                            "total": 4776410,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1613700,
                            "tax": 512005,
                            "total": 2125705,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1613700,
                            "tax": 512005,
                            "total": 2125705,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1613700,
                            "tax": 512005,
                            "total": 2125705,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            },
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2338000,
                            "tax": 312705,
                            "total": 2650705,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2338000,
                            "tax": 312705,
                            "total": 2650705,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2338000,
                            "tax": 312705,
                            "total": 2650705,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "38",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3951700,
                    "tax": 824710,
                    "total": 4776410,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB16f2e189a2cc4ae89fc52c10c0022e56OP",
                "offerItems": [
                    {
                        "offerItemId": "IB16f2e189a2cc4ae89fc52c10c0022e56OP_01",
                        "price": {
                            "fare": 3986900,
                            "tax": 828060,
                            "total": 4814960,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2498800,
                            "tax": 513680,
                            "total": 3012480,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2498800,
                            "tax": 513680,
                            "total": 3012480,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2498800,
                            "tax": 513680,
                            "total": 3012480,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "NDL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "N",
                                        "remainingSeats": 9,
                                        "fareBasis": "NDL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1488100,
                            "tax": 314380,
                            "total": 1802480,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1488100,
                            "tax": 314380,
                            "total": 1802480,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1488100,
                            "tax": 314380,
                            "total": 1802480,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "39",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3986900,
                    "tax": 828060,
                    "total": 4814960,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB97cef413c75b46f99039e983389ecc8cOP",
                "offerItems": [
                    {
                        "offerItemId": "IB97cef413c75b46f99039e983389ecc8cOP_01",
                        "price": {
                            "fare": 3994800,
                            "tax": 828810,
                            "total": 4823610,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2279400,
                            "tax": 514055,
                            "total": 2793455,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2279400,
                            "tax": 514055,
                            "total": 2793455,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2279400,
                            "tax": 514055,
                            "total": 2793455,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "B",
                                        "remainingSeats": 7,
                                        "fareBasis": "ENL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "E",
                                        "remainingSeats": 9,
                                        "fareBasis": "ENL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1715400,
                            "tax": 314755,
                            "total": 2030155,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1715400,
                            "tax": 314755,
                            "total": 2030155,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1715400,
                            "tax": 314755,
                            "total": 2030155,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "40",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 3994800,
                    "tax": 828810,
                    "total": 4823610,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBf1da26abd480485698ce5cb95e67d7c8OP",
                "offerItems": [
                    {
                        "offerItemId": "IBf1da26abd480485698ce5cb95e67d7c8OP_01",
                        "price": {
                            "fare": 4006500,
                            "tax": 829920,
                            "total": 4836420,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2291200,
                            "tax": 514610,
                            "total": 2805810,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2291200,
                            "tax": 514610,
                            "total": 2805810,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2291200,
                            "tax": 514610,
                            "total": 2805810,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "NDL0NNU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "N",
                                        "remainingSeats": 9,
                                        "fareBasis": "NDL0NNU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1715300,
                            "tax": 315310,
                            "total": 2030610,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1715300,
                            "tax": 315310,
                            "total": 2030610,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1715300,
                            "tax": 315310,
                            "total": 2030610,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "41",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4006500,
                    "tax": 829920,
                    "total": 4836420,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB5890a3ad2723469fad53433bac6f38cdOP",
                "offerItems": [
                    {
                        "offerItemId": "IB5890a3ad2723469fad53433bac6f38cdOP_01",
                        "price": {
                            "fare": 4171000,
                            "tax": 845550,
                            "total": 5016550,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2459600,
                            "tax": 522425,
                            "total": 2982025,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2459600,
                            "tax": 522425,
                            "total": 2982025,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2459600,
                            "tax": 522425,
                            "total": 2982025,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T2N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T2N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1711400,
                            "tax": 323125,
                            "total": 2034525,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1711400,
                            "tax": 323125,
                            "total": 2034525,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1711400,
                            "tax": 323125,
                            "total": 2034525,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "42",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4171000,
                    "tax": 845550,
                    "total": 5016550,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBf24140a745404d37b9af206f3c69253fOP",
                "offerItems": [
                    {
                        "offerItemId": "IBf24140a745404d37b9af206f3c69253fOP_01",
                        "price": {
                            "fare": 4171000,
                            "tax": 845550,
                            "total": 5016550,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1833000,
                            "tax": 522425,
                            "total": 2355425,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1833000,
                            "tax": 522425,
                            "total": 2355425,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1833000,
                            "tax": 522425,
                            "total": 2355425,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            },
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "O",
                                        "remainingSeats": 9,
                                        "fareBasis": "OON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2338000,
                            "tax": 323125,
                            "total": 2661125,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2338000,
                            "tax": 323125,
                            "total": 2661125,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2338000,
                            "tax": 323125,
                            "total": 2661125,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "43",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4171000,
                    "tax": 845550,
                    "total": 5016550,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB17de9121c84145cdaec7268c37d4db59OP",
                "offerItems": [
                    {
                        "offerItemId": "IB17de9121c84145cdaec7268c37d4db59OP_01",
                        "price": {
                            "fare": 4214100,
                            "tax": 849640,
                            "total": 5063740,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2498800,
                            "tax": 524470,
                            "total": 3023270,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2498800,
                            "tax": 524470,
                            "total": 3023270,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2498800,
                            "tax": 524470,
                            "total": 3023270,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "NDL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "N",
                                        "remainingSeats": 9,
                                        "fareBasis": "NDL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1715300,
                            "tax": 325170,
                            "total": 2040470,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1715300,
                            "tax": 325170,
                            "total": 2040470,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1715300,
                            "tax": 325170,
                            "total": 2040470,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "44",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4214100,
                    "tax": 849640,
                    "total": 5063740,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBb0945e94a5d141ecadcb91cd65e52c1aOP",
                "offerItems": [
                    {
                        "offerItemId": "IBb0945e94a5d141ecadcb91cd65e52c1aOP_01",
                        "price": {
                            "fare": 4327700,
                            "tax": 860430,
                            "total": 5188130,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1985700,
                            "tax": 529865,
                            "total": 2515565,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1985700,
                            "tax": 529865,
                            "total": 2515565,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1985700,
                            "tax": 529865,
                            "total": 2515565,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "NDL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "N",
                                        "remainingSeats": 9,
                                        "fareBasis": "NDL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2342000,
                            "tax": 330565,
                            "total": 2672565,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2342000,
                            "tax": 330565,
                            "total": 2672565,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2342000,
                            "tax": 330565,
                            "total": 2672565,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "45",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4327700,
                    "tax": 860430,
                    "total": 5188130,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB7a4861f61c8e4ebaa1226a2d1b35c066OP",
                "offerItems": [
                    {
                        "offerItemId": "IB7a4861f61c8e4ebaa1226a2d1b35c066OP_01",
                        "price": {
                            "fare": 4327700,
                            "tax": 860430,
                            "total": 5188130,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 3121500,
                            "tax": 529865,
                            "total": 3651365,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 3121500,
                            "tax": 529865,
                            "total": 3651365,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 3121500,
                            "tax": 529865,
                            "total": 3651365,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "TNL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "TNL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1206200,
                            "tax": 330565,
                            "total": 1536765,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1206200,
                            "tax": 330565,
                            "total": 1536765,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1206200,
                            "tax": 330565,
                            "total": 1536765,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "46",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4327700,
                    "tax": 860430,
                    "total": 5188130,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB0e06914f689445ed8eb3be3291dc3fcfOP",
                "offerItems": [
                    {
                        "offerItemId": "IB0e06914f689445ed8eb3be3291dc3fcfOP_01",
                        "price": {
                            "fare": 4464700,
                            "tax": 873450,
                            "total": 5338150,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 3258500,
                            "tax": 536375,
                            "total": 3794875,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 3258500,
                            "tax": 536375,
                            "total": 3794875,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 3258500,
                            "tax": 536375,
                            "total": 3794875,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "B",
                                        "remainingSeats": 7,
                                        "fareBasis": "ENL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "E",
                                        "remainingSeats": 9,
                                        "fareBasis": "ENL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1206200,
                            "tax": 337075,
                            "total": 1543275,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1206200,
                            "tax": 337075,
                            "total": 1543275,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1206200,
                            "tax": 337075,
                            "total": 1543275,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "OPTLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "47",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4464700,
                    "tax": 873450,
                    "total": 5338150,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB16900baf44864bedbdcd3963ccd61fceOP",
                "offerItems": [
                    {
                        "offerItemId": "IB16900baf44864bedbdcd3963ccd61fceOP_01",
                        "price": {
                            "fare": 4484300,
                            "tax": 875310,
                            "total": 5359610,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 3121500,
                            "tax": 537305,
                            "total": 3658805,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 3121500,
                            "tax": 537305,
                            "total": 3658805,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 3121500,
                            "tax": 537305,
                            "total": 3658805,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "TNL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "TNL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1362800,
                            "tax": 338005,
                            "total": 1700805,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1362800,
                            "tax": 338005,
                            "total": 1700805,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1362800,
                            "tax": 338005,
                            "total": 1700805,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "48",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4484300,
                    "tax": 875310,
                    "total": 5359610,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB5dc7676f7b5e46918d2c3144a21dca36OP",
                "offerItems": [
                    {
                        "offerItemId": "IB5dc7676f7b5e46918d2c3144a21dca36OP_01",
                        "price": {
                            "fare": 4484300,
                            "tax": 875310,
                            "total": 5359610,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2142400,
                            "tax": 537305,
                            "total": 2679705,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2142400,
                            "tax": 537305,
                            "total": 2679705,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2142400,
                            "tax": 537305,
                            "total": 2679705,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "TNL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "TNL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2341900,
                            "tax": 338005,
                            "total": 2679905,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2341900,
                            "tax": 338005,
                            "total": 2679905,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2341900,
                            "tax": 338005,
                            "total": 2679905,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "49",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4484300,
                    "tax": 875310,
                    "total": 5359610,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB233e10b4df654167a6a7cd64a16e8b60OP",
                "offerItems": [
                    {
                        "offerItemId": "IB233e10b4df654167a6a7cd64a16e8b60OP_01",
                        "price": {
                            "fare": 4609600,
                            "tax": 887210,
                            "total": 5496810,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 3121500,
                            "tax": 543255,
                            "total": 3664755,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 3121500,
                            "tax": 543255,
                            "total": 3664755,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 3121500,
                            "tax": 543255,
                            "total": 3664755,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "TNL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "TNL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1488100,
                            "tax": 343955,
                            "total": 1832055,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1488100,
                            "tax": 343955,
                            "total": 1832055,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1488100,
                            "tax": 343955,
                            "total": 1832055,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "50",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4609600,
                    "tax": 887210,
                    "total": 5496810,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB141f34c772d547bc8d04dd5968adece5OP",
                "offerItems": [
                    {
                        "offerItemId": "IB141f34c772d547bc8d04dd5968adece5OP_01",
                        "price": {
                            "fare": 4621400,
                            "tax": 888330,
                            "total": 5509730,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 3258500,
                            "tax": 543815,
                            "total": 3802315,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 3258500,
                            "tax": 543815,
                            "total": 3802315,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 3258500,
                            "tax": 543815,
                            "total": 3802315,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "B",
                                        "remainingSeats": 7,
                                        "fareBasis": "ENL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "E",
                                        "remainingSeats": 9,
                                        "fareBasis": "ENL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1362900,
                            "tax": 344515,
                            "total": 1707415,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1362900,
                            "tax": 344515,
                            "total": 1707415,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1362900,
                            "tax": 344515,
                            "total": 1707415,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "51",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4621400,
                    "tax": 888330,
                    "total": 5509730,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB5113b012935b45d0b118beb352c5d3f0OP",
                "offerItems": [
                    {
                        "offerItemId": "IB5113b012935b45d0b118beb352c5d3f0OP_01",
                        "price": {
                            "fare": 4621400,
                            "tax": 888330,
                            "total": 5509730,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2279400,
                            "tax": 543815,
                            "total": 2823215,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2279400,
                            "tax": 543815,
                            "total": 2823215,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2279400,
                            "tax": 543815,
                            "total": 2823215,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "B",
                                        "remainingSeats": 7,
                                        "fareBasis": "ENL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "PREOPTES",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "E",
                                        "remainingSeats": 9,
                                        "fareBasis": "ENL0NNM7",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2342000,
                            "tax": 344515,
                            "total": 2686515,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2342000,
                            "tax": 344515,
                            "total": 2686515,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2342000,
                            "tax": 344515,
                            "total": 2686515,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "52",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4621400,
                    "tax": 888330,
                    "total": 5509730,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB1a3a7178b6354deb9c608fba9accd936OP",
                "offerItems": [
                    {
                        "offerItemId": "IB1a3a7178b6354deb9c608fba9accd936OP_01",
                        "price": {
                            "fare": 4633100,
                            "tax": 889440,
                            "total": 5522540,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2291200,
                            "tax": 544370,
                            "total": 2835570,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2291200,
                            "tax": 544370,
                            "total": 2835570,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2291200,
                            "tax": 544370,
                            "total": 2835570,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "NDL0NNU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "N",
                                        "remainingSeats": 9,
                                        "fareBasis": "NDL0NNU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2341900,
                            "tax": 345070,
                            "total": 2686970,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2341900,
                            "tax": 345070,
                            "total": 2686970,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2341900,
                            "tax": 345070,
                            "total": 2686970,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "53",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4633100,
                    "tax": 889440,
                    "total": 5522540,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB7651f97a141546f7b518acca3176738aOP",
                "offerItems": [
                    {
                        "offerItemId": "IB7651f97a141546f7b518acca3176738aOP_01",
                        "price": {
                            "fare": 4746700,
                            "tax": 900240,
                            "total": 5646940,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 3258500,
                            "tax": 549770,
                            "total": 3808270,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 3258500,
                            "tax": 549770,
                            "total": 3808270,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 3258500,
                            "tax": 549770,
                            "total": 3808270,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "B",
                                        "remainingSeats": 7,
                                        "fareBasis": "ENL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "E",
                                        "remainingSeats": 9,
                                        "fareBasis": "ENL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1488200,
                            "tax": 350470,
                            "total": 1838670,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1488200,
                            "tax": 350470,
                            "total": 1838670,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1488200,
                            "tax": 350470,
                            "total": 1838670,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "COLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQU3",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "54",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4746700,
                    "tax": 900240,
                    "total": 5646940,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB0982d92d909b4558bd1e7b9ff6a46ed6OP",
                "offerItems": [
                    {
                        "offerItemId": "IB0982d92d909b4558bd1e7b9ff6a46ed6OP_01",
                        "price": {
                            "fare": 4797600,
                            "tax": 905070,
                            "total": 5702670,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2459600,
                            "tax": 552185,
                            "total": 3011785,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2459600,
                            "tax": 552185,
                            "total": 3011785,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2459600,
                            "tax": 552185,
                            "total": 3011785,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T2N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB659020240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T2N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2338000,
                            "tax": 352885,
                            "total": 2690885,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2338000,
                            "tax": 352885,
                            "total": 2690885,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2338000,
                            "tax": 352885,
                            "total": 2690885,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "55",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4797600,
                    "tax": 905070,
                    "total": 5702670,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBb8033b81e7024bb7839447d77b251d2bOP",
                "offerItems": [
                    {
                        "offerItemId": "IBb8033b81e7024bb7839447d77b251d2bOP_01",
                        "price": {
                            "fare": 4836800,
                            "tax": 908800,
                            "total": 5745600,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 3121500,
                            "tax": 554050,
                            "total": 3675550,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 3121500,
                            "tax": 554050,
                            "total": 3675550,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 3121500,
                            "tax": 554050,
                            "total": 3675550,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "TNL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "TNL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1715300,
                            "tax": 354750,
                            "total": 2070050,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1715300,
                            "tax": 354750,
                            "total": 2070050,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1715300,
                            "tax": 354750,
                            "total": 2070050,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "56",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4836800,
                    "tax": 908800,
                    "total": 5745600,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBcbba0bb84add4b1db35ac1d8f8f8a751OP",
                "offerItems": [
                    {
                        "offerItemId": "IBcbba0bb84add4b1db35ac1d8f8f8a751OP_01",
                        "price": {
                            "fare": 4840700,
                            "tax": 909170,
                            "total": 5749870,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2498800,
                            "tax": 554235,
                            "total": 3053035,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2498800,
                            "tax": 554235,
                            "total": 3053035,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2498800,
                            "tax": 554235,
                            "total": 3053035,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "NDL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "N",
                                        "remainingSeats": 9,
                                        "fareBasis": "NDL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2341900,
                            "tax": 354935,
                            "total": 2696835,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2341900,
                            "tax": 354935,
                            "total": 2696835,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2341900,
                            "tax": 354935,
                            "total": 2696835,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "57",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4840700,
                    "tax": 909170,
                    "total": 5749870,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB3e31f9edca1745dc9122befac9b1c60aOP",
                "offerItems": [
                    {
                        "offerItemId": "IB3e31f9edca1745dc9122befac9b1c60aOP_01",
                        "price": {
                            "fare": 4973900,
                            "tax": 921820,
                            "total": 5895720,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 3258500,
                            "tax": 560560,
                            "total": 3819060,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 3258500,
                            "tax": 560560,
                            "total": 3819060,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 3258500,
                            "tax": 560560,
                            "total": 3819060,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "B",
                                        "remainingSeats": 7,
                                        "fareBasis": "ENL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "E",
                                        "remainingSeats": 9,
                                        "fareBasis": "ENL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 1715400,
                            "tax": 361260,
                            "total": 2076660,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 1715400,
                            "tax": 361260,
                            "total": 2076660,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 1715400,
                            "tax": 361260,
                            "total": 2076660,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 9,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "FLEXLH",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "A",
                                        "remainingSeats": 7,
                                        "fareBasis": "AON0NQS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "58",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 4973900,
                    "tax": 921820,
                    "total": 5895720,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IBe5cb332aee4940fd8cea4689ab07bed1OP",
                "offerItems": [
                    {
                        "offerItemId": "IBe5cb332aee4940fd8cea4689ab07bed1OP_01",
                        "price": {
                            "fare": 5463400,
                            "tax": 968320,
                            "total": 6431720,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 3121500,
                            "tax": 583810,
                            "total": 3705310,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 3121500,
                            "tax": 583810,
                            "total": 3705310,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 3121500,
                            "tax": 583810,
                            "total": 3705310,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "3",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "TNL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658820240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "TNL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2341900,
                            "tax": 384510,
                            "total": 2726410,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2341900,
                            "tax": 384510,
                            "total": 2726410,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2341900,
                            "tax": 384510,
                            "total": 2726410,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "59",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 5463400,
                    "tax": 968320,
                    "total": 6431720,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            },
            {
                "offerId": "IB6248f27ac20c40e7b73ac8a049e4c9fbOP",
                "offerItems": [
                    {
                        "offerItemId": "IB6248f27ac20c40e7b73ac8a049e4c9fbOP_01",
                        "price": {
                            "fare": 5600500,
                            "tax": 981350,
                            "total": 6581850,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "passengerIds": [
                            "ADULT_01"
                        ],
                        "privateFareInformation": null,
                        "reshopDifferential": null,
                        "surcharges": null
                    }
                ],
                "originDestinations": [
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 3258500,
                            "tax": 590325,
                            "total": 3848825,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 3258500,
                            "tax": 590325,
                            "total": 3848825,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 3258500,
                            "tax": 590325,
                            "total": 3848825,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD1",
                        "applicableSlices": [
                            {
                                "sliceId": "2",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB707220240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "B",
                                        "remainingSeats": 7,
                                        "fareBasis": "ENL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB658620240501",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "E",
                                        "remainingSeats": 9,
                                        "fareBasis": "ENL0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "priceDiscountApplied": false,
                        "totalPrice": {
                            "fare": 2342000,
                            "tax": 391025,
                            "total": 2733025,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "adultPrice": {
                            "fare": 2342000,
                            "tax": 391025,
                            "total": 2733025,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "perPassengerPrice": {
                            "fare": 2342000,
                            "tax": 391025,
                            "total": 2733025,
                            "currency": "COP",
                            "ticketingFee": 0
                        },
                        "originDestinationId": "OD2",
                        "applicableSlices": [
                            {
                                "sliceId": "1",
                                "remainingSeats": 16,
                                "segments": [
                                    {
                                        "segmentId": "IB658520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "PREMIUMTOURIST",
                                        "rbd": "T",
                                        "remainingSeats": 9,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    },
                                    {
                                        "segmentId": "IB722520240830",
                                        "fareFamily": "TPFLRS",
                                        "bookingCode": null,
                                        "bookingClass": "ECONOMY",
                                        "rbd": "K",
                                        "remainingSeats": 7,
                                        "fareBasis": "T1N0NNS1",
                                        "extendedFareCode": null,
                                        "brandCode": null,
                                        "checkedBaggageAllowanceKeys": [],
                                        "carryOnBaggageAllowanceKeys": [],
                                        "ticketDesignator": "",
                                        "seatDisplays": null,
                                        "cabinDescription": ""
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "timeLimits": "2024-01-23T03:51:13.409",
                "paymentTimeLimit": null,
                "specialDiscountsApplied": [],
                "providerOfferId": "60",
                "privateFare": false,
                "offerType": "",
                "flightModificationOnDemand": false,
                "discountsApplied": null,
                "excludePenalties": false,
                "price": {
                    "fare": 5600500,
                    "tax": 981350,
                    "total": 6581850,
                    "currency": "COP",
                    "ticketingFee": 0
                }
            }
        ],
        "originDestinations": [
            {
                "originDestinationId": "OD1",
                "origin": "CUC",
                "destination": "MAD",
                "originCity": {
                    "code": "CUC",
                    "description": "Cucuta",
                    "countryCode": "CO",
                    "country": {
                        "code": "CO",
                        "description": "Colombia"
                    }
                },
                "destinationCity": {
                    "code": "MAD",
                    "description": "Madrid",
                    "countryCode": "ES",
                    "country": {
                        "code": "ES",
                        "description": "España"
                    }
                },
                "slices": [
                    {
                        "sliceId": "1",
                        "arrivalDateTime": "2024-05-02 05:55",
                        "departureDateTime": "2024-05-01 08:18",
                        "segments": [
                            {
                                "segmentId": "IB707220240501",
                                "departureDateTime": "2024-05-01 08:18",
                                "arrivalDateTime": "2024-05-01 09:29",
                                "departure": {
                                    "code": "CUC",
                                    "name": "Cucuta",
                                    "terminal": null,
                                    "city": {
                                        "code": "CUC",
                                        "description": "Cucuta",
                                        "countryCode": "CO",
                                        "country": {
                                            "code": "CO",
                                            "description": "Colombia"
                                        }
                                    }
                                },
                                "arrival": {
                                    "code": "BOG",
                                    "name": "Bogotá",
                                    "terminal": "1",
                                    "city": {
                                        "code": "BOG",
                                        "description": "Bogotá",
                                        "countryCode": "CO",
                                        "country": {
                                            "code": "CO",
                                            "description": "Colombia"
                                        }
                                    }
                                },
                                "flight": {
                                    "marketingCarrier": {
                                        "code": "IB",
                                        "name": "Iberia"
                                    },
                                    "operationalCarrier": {
                                        "code": "LA",
                                        "name": "Latam Airlines Colombia"
                                    },
                                    "marketingFlightNumber": "7072",
                                    "operationalFlightNumber": null,
                                    "operationalDisclosure": "LA",
                                    "aircraft": {
                                        "code": "320",
                                        "description": "Airbus A320"
                                    }
                                },
                                "overnight": false,
                                "waitingTime": 0,
                                "duration": 71,
                                "delayInformation": null,
                                "stop": null
                            },
                            {
                                "segmentId": "IB659020240501",
                                "departureDateTime": "2024-05-01 13:10",
                                "arrivalDateTime": "2024-05-02 05:55",
                                "departure": {
                                    "code": "BOG",
                                    "name": "Bogotá",
                                    "terminal": "1",
                                    "city": {
                                        "code": "BOG",
                                        "description": "Bogotá",
                                        "countryCode": "CO",
                                        "country": {
                                            "code": "CO",
                                            "description": "Colombia"
                                        }
                                    }
                                },
                                "arrival": {
                                    "code": "MAD",
                                    "name": "Madrid",
                                    "terminal": "4S",
                                    "city": {
                                        "code": "MAD",
                                        "description": "Madrid",
                                        "countryCode": "ES",
                                        "country": {
                                            "code": "ES",
                                            "description": "España"
                                        }
                                    }
                                },
                                "flight": {
                                    "marketingCarrier": {
                                        "code": "IB",
                                        "name": "Iberia"
                                    },
                                    "operationalCarrier": {
                                        "code": "IB",
                                        "name": "Iberia"
                                    },
                                    "marketingFlightNumber": "6590",
                                    "operationalFlightNumber": null,
                                    "operationalDisclosure": "IB",
                                    "aircraft": {
                                        "code": "350",
                                        "description": "Airbus A350"
                                    }
                                },
                                "overnight": true,
                                "waitingTime": 221,
                                "duration": 585,
                                "warnings": [
                                    {
                                        "code": "SSE_AVM_20003",
                                        "description": "Vuelo nocturno"
                                    },
                                    {
                                        "code": "SSE_AVM_20004",
                                        "description": "Espera 3 h 41 m en Bogotá, Bogotá, (BOG)"
                                    }
                                ],
                                "delayInformation": null,
                                "stop": null
                            }
                        ],
                        "duration": 877,
                        "cashAvios": false,
                        "flightOfTheHouse": false,
                        "overnight": true,
                        "providerSliceId": null,
                        "stopsNumber": 1
                    },
                    {
                        "sliceId": "2",
                        "arrivalDateTime": "2024-05-02 10:05",
                        "departureDateTime": "2024-05-01 08:18",
                        "segments": [
                            {
                                "segmentId": "IB707220240501",
                                "departureDateTime": "2024-05-01 08:18",
                                "arrivalDateTime": "2024-05-01 09:29",
                                "departure": {
                                    "code": "CUC",
                                    "name": "Cucuta",
                                    "terminal": null,
                                    "city": {
                                        "code": "CUC",
                                        "description": "Cucuta",
                                        "countryCode": "CO",
                                        "country": {
                                            "code": "CO",
                                            "description": "Colombia"
                                        }
                                    }
                                },
                                "arrival": {
                                    "code": "BOG",
                                    "name": "Bogotá",
                                    "terminal": "1",
                                    "city": {
                                        "code": "BOG",
                                        "description": "Bogotá",
                                        "countryCode": "CO",
                                        "country": {
                                            "code": "CO",
                                            "description": "Colombia"
                                        }
                                    }
                                },
                                "flight": {
                                    "marketingCarrier": {
                                        "code": "IB",
                                        "name": "Iberia"
                                    },
                                    "operationalCarrier": {
                                        "code": "LA",
                                        "name": "Latam Airlines Colombia"
                                    },
                                    "marketingFlightNumber": "7072",
                                    "operationalFlightNumber": null,
                                    "operationalDisclosure": "LA",
                                    "aircraft": {
                                        "code": "320",
                                        "description": "Airbus A320"
                                    }
                                },
                                "overnight": false,
                                "waitingTime": 0,
                                "duration": 71,
                                "delayInformation": null,
                                "stop": null
                            },
                            {
                                "segmentId": "IB658620240501",
                                "departureDateTime": "2024-05-01 17:25",
                                "arrivalDateTime": "2024-05-02 10:05",
                                "departure": {
                                    "code": "BOG",
                                    "name": "Bogotá",
                                    "terminal": "1",
                                    "city": {
                                        "code": "BOG",
                                        "description": "Bogotá",
                                        "countryCode": "CO",
                                        "country": {
                                            "code": "CO",
                                            "description": "Colombia"
                                        }
                                    }
                                },
                                "arrival": {
                                    "code": "MAD",
                                    "name": "Madrid",
                                    "terminal": "4S",
                                    "city": {
                                        "code": "MAD",
                                        "description": "Madrid",
                                        "countryCode": "ES",
                                        "country": {
                                            "code": "ES",
                                            "description": "España"
                                        }
                                    }
                                },
                                "flight": {
                                    "marketingCarrier": {
                                        "code": "IB",
                                        "name": "Iberia"
                                    },
                                    "operationalCarrier": {
                                        "code": "IB",
                                        "name": "Iberia"
                                    },
                                    "marketingFlightNumber": "6586",
                                    "operationalFlightNumber": null,
                                    "operationalDisclosure": "IB",
                                    "aircraft": {
                                        "code": "350",
                                        "description": "Airbus A350"
                                    }
                                },
                                "overnight": true,
                                "waitingTime": 476,
                                "duration": 580,
                                "warnings": [
                                    {
                                        "code": "SSE_AVM_20003",
                                        "description": "Vuelo nocturno"
                                    },
                                    {
                                        "code": "SSE_AVM_20004",
                                        "description": "Espera 7 h 56 m en Bogotá, Bogotá, (BOG)"
                                    }
                                ],
                                "delayInformation": null,
                                "stop": null
                            }
                        ],
                        "duration": 1127,
                        "cashAvios": false,
                        "flightOfTheHouse": false,
                        "overnight": true,
                        "providerSliceId": null,
                        "stopsNumber": 1
                    },
                    {
                        "sliceId": "3",
                        "arrivalDateTime": "2024-05-02 14:30",
                        "departureDateTime": "2024-05-01 08:18",
                        "segments": [
                            {
                                "segmentId": "IB707220240501",
                                "departureDateTime": "2024-05-01 08:18",
                                "arrivalDateTime": "2024-05-01 09:29",
                                "departure": {
                                    "code": "CUC",
                                    "name": "Cucuta",
                                    "terminal": null,
                                    "city": {
                                        "code": "CUC",
                                        "description": "Cucuta",
                                        "countryCode": "CO",
                                        "country": {
                                            "code": "CO",
                                            "description": "Colombia"
                                        }
                                    }
                                },
                                "arrival": {
                                    "code": "BOG",
                                    "name": "Bogotá",
                                    "terminal": "1",
                                    "city": {
                                        "code": "BOG",
                                        "description": "Bogotá",
                                        "countryCode": "CO",
                                        "country": {
                                            "code": "CO",
                                            "description": "Colombia"
                                        }
                                    }
                                },
                                "flight": {
                                    "marketingCarrier": {
                                        "code": "IB",
                                        "name": "Iberia"
                                    },
                                    "operationalCarrier": {
                                        "code": "LA",
                                        "name": "Latam Airlines Colombia"
                                    },
                                    "marketingFlightNumber": "7072",
                                    "operationalFlightNumber": null,
                                    "operationalDisclosure": "LA",
                                    "aircraft": {
                                        "code": "320",
                                        "description": "Airbus A320"
                                    }
                                },
                                "overnight": false,
                                "waitingTime": 0,
                                "duration": 71,
                                "delayInformation": null,
                                "stop": null
                            },
                            {
                                "segmentId": "IB658820240501",
                                "departureDateTime": "2024-05-01 21:50",
                                "arrivalDateTime": "2024-05-02 14:30",
                                "departure": {
                                    "code": "BOG",
                                    "name": "Bogotá",
                                    "terminal": "1",
                                    "city": {
                                        "code": "BOG",
                                        "description": "Bogotá",
                                        "countryCode": "CO",
                                        "country": {
                                            "code": "CO",
                                            "description": "Colombia"
                                        }
                                    }
                                },
                                "arrival": {
                                    "code": "MAD",
                                    "name": "Madrid",
                                    "terminal": "4S",
                                    "city": {
                                        "code": "MAD",
                                        "description": "Madrid",
                                        "countryCode": "ES",
                                        "country": {
                                            "code": "ES",
                                            "description": "España"
                                        }
                                    }
                                },
                                "flight": {
                                    "marketingCarrier": {
                                        "code": "IB",
                                        "name": "Iberia"
                                    },
                                    "operationalCarrier": {
                                        "code": "IB",
                                        "name": "Iberia"
                                    },
                                    "marketingFlightNumber": "6588",
                                    "operationalFlightNumber": null,
                                    "operationalDisclosure": "IB",
                                    "aircraft": {
                                        "code": "359",
                                        "description": "Airbus A350-900"
                                    }
                                },
                                "overnight": true,
                                "waitingTime": 741,
                                "duration": 580,
                                "warnings": [
                                    {
                                        "code": "SSE_AVM_20003",
                                        "description": "Vuelo nocturno"
                                    },
                                    {
                                        "code": "SSE_AVM_20004",
                                        "description": "Espera 12 h 21 m en Bogotá, Bogotá, (BOG)"
                                    }
                                ],
                                "delayInformation": null,
                                "stop": null
                            }
                        ],
                        "duration": 1392,
                        "cashAvios": false,
                        "flightOfTheHouse": false,
                        "overnight": true,
                        "providerSliceId": null,
                        "stopsNumber": 1
                    }
                ],
                "originDestinationKey": null,
                "providerOriginDestinationKey": null
            },
            {
                "originDestinationId": "OD2",
                "origin": "MAD",
                "destination": "CUC",
                "originCity": {
                    "code": "MAD",
                    "description": "Madrid",
                    "countryCode": "ES",
                    "country": {
                        "code": "ES",
                        "description": "España"
                    }
                },
                "destinationCity": {
                    "code": "CUC",
                    "description": "Cucuta",
                    "countryCode": "CO",
                    "country": {
                        "code": "CO",
                        "description": "Colombia"
                    }
                },
                "slices": [
                    {
                        "sliceId": "1",
                        "arrivalDateTime": "2024-08-30 20:17",
                        "departureDateTime": "2024-08-30 12:15",
                        "segments": [
                            {
                                "segmentId": "IB658520240830",
                                "departureDateTime": "2024-08-30 12:15",
                                "arrivalDateTime": "2024-08-30 15:45",
                                "departure": {
                                    "code": "MAD",
                                    "name": "Madrid",
                                    "terminal": "4S",
                                    "city": {
                                        "code": "MAD",
                                        "description": "Madrid",
                                        "countryCode": "ES",
                                        "country": {
                                            "code": "ES",
                                            "description": "España"
                                        }
                                    }
                                },
                                "arrival": {
                                    "code": "BOG",
                                    "name": "Bogotá",
                                    "terminal": "1",
                                    "city": {
                                        "code": "BOG",
                                        "description": "Bogotá",
                                        "countryCode": "CO",
                                        "country": {
                                            "code": "CO",
                                            "description": "Colombia"
                                        }
                                    }
                                },
                                "flight": {
                                    "marketingCarrier": {
                                        "code": "IB",
                                        "name": "Iberia"
                                    },
                                    "operationalCarrier": {
                                        "code": "IB",
                                        "name": "Iberia"
                                    },
                                    "marketingFlightNumber": "6585",
                                    "operationalFlightNumber": null,
                                    "operationalDisclosure": "IB",
                                    "aircraft": {
                                        "code": "350",
                                        "description": "Airbus A350"
                                    }
                                },
                                "overnight": false,
                                "waitingTime": 0,
                                "duration": 630,
                                "delayInformation": null,
                                "stop": null
                            },
                            {
                                "segmentId": "IB722520240830",
                                "departureDateTime": "2024-08-30 19:02",
                                "arrivalDateTime": "2024-08-30 20:17",
                                "departure": {
                                    "code": "BOG",
                                    "name": "Bogotá",
                                    "terminal": "1",
                                    "city": {
                                        "code": "BOG",
                                        "description": "Bogotá",
                                        "countryCode": "CO",
                                        "country": {
                                            "code": "CO",
                                            "description": "Colombia"
                                        }
                                    }
                                },
                                "arrival": {
                                    "code": "CUC",
                                    "name": "Cucuta",
                                    "terminal": null,
                                    "city": {
                                        "code": "CUC",
                                        "description": "Cucuta",
                                        "countryCode": "CO",
                                        "country": {
                                            "code": "CO",
                                            "description": "Colombia"
                                        }
                                    }
                                },
                                "flight": {
                                    "marketingCarrier": {
                                        "code": "IB",
                                        "name": "Iberia"
                                    },
                                    "operationalCarrier": {
                                        "code": "LA",
                                        "name": "Latam Airlines Colombia"
                                    },
                                    "marketingFlightNumber": "7225",
                                    "operationalFlightNumber": null,
                                    "operationalDisclosure": "LA",
                                    "aircraft": {
                                        "code": "320",
                                        "description": "Airbus A320"
                                    }
                                },
                                "overnight": false,
                                "waitingTime": 197,
                                "duration": 75,
                                "warnings": [
                                    {
                                        "code": "SSE_AVM_20004",
                                        "description": "Espera 3 h 17 m en Bogotá, Bogotá, (BOG)"
                                    }
                                ],
                                "delayInformation": null,
                                "stop": null
                            }
                        ],
                        "duration": 902,
                        "cashAvios": false,
                        "flightOfTheHouse": false,
                        "overnight": false,
                        "providerSliceId": null,
                        "stopsNumber": 1
                    }
                ],
                "originDestinationKey": null,
                "providerOriginDestinationKey": null
            }
        ],
        "passengers": [
            {
                "passengerId": "ADULT_01",
                "passengerType": "ADULT",
                "firstName": null,
                "surname": null,
                "frequentFlyerInfo": null
            }
        ],
        "responseId": "Qm9va2luZ0BHVy0xNzA1OTgwMDcyMDAwLU9aUlZ1",
        "fareFamilyConditions": [
            {
                "cabinType": "E",
                "cabinDescription": "Turista",
                "commercialCode": "OPTLH",
                "commercialName": "Óptima",
                "commercialNameES": "Óptima",
                "priority": 700,
                "conditions": [
                    {
                        "code": "CABINA",
                        "name": "Cabina",
                        "text": "Turista.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Cabina Turista",
                            "message": "Turista.",
                            "code": "CA_Cabina_Turista",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "Turista"
                        }
                    },
                    {
                        "code": "COMIDA",
                        "name": "Comida",
                        "text": "Incluida.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Comida incluida",
                            "message": "Incluida. ",
                            "code": "Comida_incluida",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "Incluido"
                        }
                    },
                    {
                        "code": "ASIENTO",
                        "name": "Selección de asiento",
                        "text": "Gratuita desde 24h antes del vuelo.",
                        "units": 24,
                        "extendedInfo": {
                            "title": "Selección de asiento 24h antes del vuelo",
                            "message": "Gratuita desde 24h antes del vuelo.",
                            "code": "CA_Asiento_Gratis_24_horas",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "Gratuita desde 24 horas antes del vuelo"
                        }
                    },
                    {
                        "code": "ASIENTODELANTERO",
                        "name": "Asiento delantero",
                        "text": "Con coste.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Asiento delantero con coste",
                            "message": "Con coste.",
                            "code": "CA_Asiento_Delantero_pago",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "De pago"
                        }
                    },
                    {
                        "code": "ASIENTOPREFERENTE",
                        "name": "Asiento preferente",
                        "text": "No aplica.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Asiento preferente no aplica",
                            "message": "No aplica.",
                            "code": "CA_Asiento_Preferente_NO_aplica",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No aplica"
                        }
                    },
                    {
                        "code": "ASIENTOXL",
                        "name": "Asiento espacio extra",
                        "text": "Con coste.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Asiento espacio extra con coste",
                            "message": "Con coste.",
                            "code": "CA_Asiento_XL_Pago",
                            "conditionStatus": false,
                            "observationCode": "1",
                            "mobileMessage": "De pago"
                        }
                    },
                    {
                        "code": "EMBARQUE",
                        "name": "Prioridad de Embarque",
                        "text": "No incluido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Embarque prioritario no incluido",
                            "message": "No incluido.",
                            "code": "CA_Embarque_NO_Prioritario",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No"
                        }
                    },
                    {
                        "code": "CAMBIO",
                        "name": "Cambios",
                        "text": "Permitido con coste, no permitido en caso de no-show.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Cambio de vuelo con coste, salvo excepciones",
                            "message": "Permitido en cualquier momento con penalización de 150 EUR/ 190 USD. No permitido en caso de no presentarse al vuelo (no-show).",
                            "code": "CA_CAMBIO CON PENALTY_150€/190USD_NO_SHOW_NO_PERMITIDO",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "Permitido con coste, no permitido en caso de no-show."
                        }
                    },
                    {
                        "code": "REEMBOLSO",
                        "name": "Reembolso (por sentido)",
                        "text": "No permitido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "No permitido",
                            "message": "No permitido.",
                            "code": "CA_REEMBOLSO NO PERMITIDO",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No permitido"
                        }
                    },
                    {
                        "code": "CHECKINDESK",
                        "name": "Mostrador check-in exclusivo",
                        "text": "No incluido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Mostrador Check-in exclusivo no incluido",
                            "message": "No incluido.",
                            "code": "Chek-in_desk_ NO",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No"
                        }
                    },
                    {
                        "code": "SALAVIP",
                        "name": "Acceso a salas VIP",
                        "text": "Acceso no incluido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Acceso a Sala Vip no incluido",
                            "message": "Acceso no incluido.",
                            "code": "Acceso a salas VIP No permitido",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No"
                        }
                    },
                    {
                        "code": "FASTTRACK",
                        "name": "Fast Track",
                        "text": "No incluido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Fast Track no incluido",
                            "message": "No incluido.",
                            "code": "Fast Track NO",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No"
                        }
                    },
                    {
                        "code": "EQPPRIOR",
                        "name": "Entrega prioritaria equipaje",
                        "text": "Con coste.",
                        "units": null,
                        "extendedInfo": {
                            "title": "No incluye entrega rápida de equipaje",
                            "message": "Con coste.",
                            "code": "Entrega_prioritaria_equipaje_ NO",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No"
                        }
                    },
                    {
                        "code": "AVIO",
                        "name": "AVIOS",
                        "text": "Incluido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Obtén Avios con tu compra",
                            "message": "Incluido.  ",
                            "code": "AVIOS incluido",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "Si"
                        }
                    },
                    {
                        "code": "WIFI",
                        "name": "WiFi",
                        "text": "Disponible con coste, según el tipo de avión.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Wifi con coste",
                            "message": "Disponible con coste, según el tipo de avión. ",
                            "code": "Wifi pago",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "De pago"
                        }
                    }
                ],
                "observations": [
                    {
                        "observationCode": 1,
                        "observationText": "<a target=\"_blank\" href=\"https://www.iberia.com/web/obsmenu.do?quadrigam=PRSEAT&menuId=EQUIDE\">Más detalle sobre la reserva anticipada de asiento</a>"
                    }
                ],
                "conditionsPriority": [
                    "EQMANO",
                    "EQBODEGA",
                    "COMIDA",
                    "ASIENTO",
                    "ASIENTOXL",
                    "ASIENTODELANTERO",
                    "ASIENTOPREFERENTE",
                    "EMBARQUE",
                    "TARJEMBANTIC",
                    "CAMBIO",
                    "REEMBOLSO",
                    "CHECKINDESK",
                    "FASTTRACK"
                ]
            },
            {
                "cabinType": "E",
                "cabinDescription": "Turista",
                "commercialCode": "COLH",
                "commercialName": "Confort",
                "commercialNameES": "Confort",
                "priority": 600,
                "conditions": [
                    {
                        "code": "CABINA",
                        "name": "Cabina",
                        "text": "Turista.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Cabina Turista",
                            "message": "Turista.",
                            "code": "CA_Cabina_Turista",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "Turista"
                        }
                    },
                    {
                        "code": "EQMANO",
                        "name": "Equipaje de mano",
                        "text": "Incluida 1 pieza hasta 10 kg (56x40x25cm).",
                        "units": 1,
                        "extendedInfo": {
                            "title": "Equipaje de mano: 1 pieza",
                            "message": "Incluida 1 pieza hasta 10 kg (56x40x25cm) y 1 accesorio personal, en vuelos operados por las compañías oneworld. Para el resto de compañías, consultar con la operadora de vuelo. ",
                            "code": "CA_EQP_MANO_10KG",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "1 bulto (56x40x25cm)"
                        }
                    },
                    {
                        "code": "COMIDA",
                        "name": "Comida",
                        "text": "Incluida.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Comida incluida",
                            "message": "Incluida. ",
                            "code": "Comida_incluida",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "Incluido"
                        }
                    },
                    {
                        "code": "ASIENTOPREFERENTE",
                        "name": "Asiento preferente",
                        "text": "",
                        "units": null,
                        "extendedInfo": {
                            "title": "Asiento preferente no aplica",
                            "message": "No aplica.",
                            "code": "CA_Asiento_Preferente_NO_aplica",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No aplica"
                        }
                    },
                    {
                        "code": "EMBARQUE",
                        "name": "Prioridad de Embarque",
                        "text": "Incluido (Grupo 2).",
                        "units": 2,
                        "extendedInfo": {
                            "title": "Embarque prioritario Grupo 2",
                            "message": "Incluido (Grupo 2). (En vuelos operados por Iberia, Iberia Express y Air Nostrum).",
                            "code": "CA_Embarque_Prioritario_grupo_2",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "Sí, grupo 2"
                        }
                    },
                    {
                        "code": "REEMBOLSO",
                        "name": "Reembolso (por sentido)",
                        "text": "No permitido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "No permitido",
                            "message": "No permitido.",
                            "code": "CA_REEMBOLSO NO PERMITIDO",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No permitido"
                        }
                    },
                    {
                        "code": "SALAVIP",
                        "name": "Acceso a salas VIP",
                        "text": "Acceso no incluido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Acceso a Sala Vip no incluido",
                            "message": "Acceso no incluido.",
                            "code": "Acceso a salas VIP No permitido",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No"
                        }
                    },
                    {
                        "code": "AVIO",
                        "name": "AVIOS",
                        "text": "Incluido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Obtén Avios con tu compra",
                            "message": "Incluido.  ",
                            "code": "AVIOS incluido",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "Si"
                        }
                    }
                ],
                "observations": [],
                "conditionsPriority": [
                    "EQMANO",
                    "EQBODEGA",
                    "COMIDA",
                    "ASIENTO",
                    "ASIENTOXL",
                    "ASIENTODELANTERO",
                    "ASIENTOPREFERENTE",
                    "EMBARQUE",
                    "TARJEMBANTIC",
                    "CAMBIO",
                    "REEMBOLSO",
                    "CHECKINDESK",
                    "FASTTRACK"
                ]
            },
            {
                "cabinType": "E",
                "cabinDescription": "Turista",
                "commercialCode": "FLEXLH",
                "commercialName": "Flexible",
                "commercialNameES": "Flexible",
                "priority": 500,
                "conditions": [
                    {
                        "code": "EQBODEGA",
                        "name": "Equipaje en bodega",
                        "text": "",
                        "units": 1,
                        "extendedInfo": {
                            "title": "Equipaje facturable: 1 pieza",
                            "message": "Incluida 1 pieza hasta 23 kg y 158 cm.",
                            "code": "CA_1_PIEZAS",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "1 pieza"
                        }
                    },
                    {
                        "code": "ASIENTO",
                        "name": "Selección de asiento",
                        "text": "Incluida.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Selección de asiento incluida",
                            "message": "Incluida. ",
                            "code": "CA_Asiento_Gratuito_No_Destacado",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "Incluido"
                        }
                    },
                    {
                        "code": "ASIENTODELANTERO",
                        "name": "Asiento delantero",
                        "text": "Incluido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Asiento delantero incluido",
                            "message": "Incluido. (En vuelos operados por Iberia, Iberia Express y Air Nostrum).",
                            "code": "CA_Asiento_Delantero_Incluido",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "Incluido"
                        }
                    },
                    {
                        "code": "CAMBIO",
                        "name": "Cambios",
                        "text": "Permitido en cualquier momento.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Cambio de vuelo permitido",
                            "message": "Permitido en cualquier momento.",
                            "code": "CA_CAMBIO SIEMPRE",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "Permitido en cualquier momento."
                        }
                    },
                    {
                        "code": "REEMBOLSO",
                        "name": "Reembolso (por sentido)",
                        "text": "Permitido sin coste. No permitido en caso de no-show.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Reembolso sin coste, salvo excepciones",
                            "message": "Permitido sin penalización. No permitido en caso de no presentarse al vuelo (no-show).",
                            "code": "CA_REEMBOLSO SIEMPRE_NO_SHOW_NO PERMITIDO",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "Permitido sin penalización, excepto en caso de no presentarse al vuelo (no show), que no tendrá reembolso"
                        }
                    },
                    {
                        "code": "SALAVIP",
                        "name": "Acceso a salas VIP",
                        "text": "Acceso no incluido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Acceso a Sala Vip no incluido",
                            "message": "Acceso no incluido.",
                            "code": "Acceso a salas VIP No permitido",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No"
                        }
                    },
                    {
                        "code": "FASTTRACK",
                        "name": "Fast Track",
                        "text": "No incluido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Fast Track no incluido",
                            "message": "No incluido.",
                            "code": "Fast Track NO",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No"
                        }
                    },
                    {
                        "code": "EQPPRIOR",
                        "name": "Entrega prioritaria equipaje",
                        "text": "Con coste.",
                        "units": null,
                        "extendedInfo": {
                            "title": "No incluye entrega rápida de equipaje",
                            "message": "Con coste.",
                            "code": "Entrega_prioritaria_equipaje_ NO",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No"
                        }
                    }
                ],
                "observations": [],
                "conditionsPriority": [
                    "EQMANO",
                    "EQBODEGA",
                    "COMIDA",
                    "ASIENTO",
                    "ASIENTOXL",
                    "ASIENTODELANTERO",
                    "ASIENTOPREFERENTE",
                    "EMBARQUE",
                    "TARJEMBANTIC",
                    "CAMBIO",
                    "REEMBOLSO",
                    "CHECKINDESK",
                    "FASTTRACK"
                ]
            },
            {
                "cabinType": "N",
                "cabinDescription": "Turista Premium",
                "commercialCode": "PREOPTES",
                "commercialName": "Turista Premium Óptima",
                "commercialNameES": "Turista Premium Óptima",
                "priority": 400,
                "conditions": [
                    {
                        "code": "CABINA",
                        "name": "Cabina",
                        "text": "Turista Premium.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Cabina Turista Premium",
                            "message": "Turista Premium. ",
                            "code": "CA_Cabina_Turista Premium",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "Turista Premium"
                        }
                    },
                    {
                        "code": "EQMANO",
                        "name": "Equipaje de mano",
                        "text": "Incluida 1 pieza hasta 10 kg (56x40x25cm).",
                        "units": 1,
                        "extendedInfo": {
                            "title": "Equipaje de mano: 1 pieza",
                            "message": "Incluida 1 pieza hasta 10 kg (56x40x25cm) y 1 accesorio personal, en vuelos operados por las compañías oneworld. Para el resto de compañías, consultar con la operadora de vuelo. ",
                            "code": "CA_EQP_MANO_10KG",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "1 bulto (56x40x25cm)"
                        }
                    },
                    {
                        "code": "COMIDA",
                        "name": "Comida",
                        "text": "Incluida.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Comida incluida",
                            "message": "Incluida. ",
                            "code": "Comida_incluida",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "Incluido"
                        }
                    },
                    {
                        "code": "ASIENTO",
                        "name": "Selección de asiento",
                        "text": "Gratuita desde 24h antes del vuelo.",
                        "units": 24,
                        "extendedInfo": {
                            "title": "Selección de asiento 24h antes del vuelo",
                            "message": "Gratuita desde 24h antes del vuelo.",
                            "code": "CA_Asiento_Gratis_24_horas",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "Gratuita desde 24 horas antes del vuelo"
                        }
                    },
                    {
                        "code": "ASIENTODELANTERO",
                        "name": "Asiento delantero",
                        "text": "No aplica.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Asiento delantero no aplica",
                            "message": "No aplica.",
                            "code": "CA_Asiento_Delantero_NO_aplcia",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No aplica"
                        }
                    },
                    {
                        "code": "ASIENTOPREFERENTE",
                        "name": "Asiento preferente",
                        "text": "No aplica.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Asiento preferente no aplica",
                            "message": "No aplica.",
                            "code": "CA_Asiento_Preferente_NO_aplica",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No aplica"
                        }
                    },
                    {
                        "code": "ASIENTOXL",
                        "name": "Asiento espacio extra",
                        "text": "Con coste.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Asiento espacio extra con coste",
                            "message": "Con coste.",
                            "code": "CA_Asiento_XL_Pago",
                            "conditionStatus": false,
                            "observationCode": "1",
                            "mobileMessage": "De pago"
                        }
                    },
                    {
                        "code": "EMBARQUE",
                        "name": "Prioridad de Embarque",
                        "text": "Incluido (Grupo 2).",
                        "units": 2,
                        "extendedInfo": {
                            "title": "Embarque prioritario Grupo 2",
                            "message": "Incluido (Grupo 2). (En vuelos operados por Iberia, Iberia Express y Air Nostrum).",
                            "code": "CA_Embarque_Prioritario_grupo_2",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "Sí, grupo 2"
                        }
                    },
                    {
                        "code": "CAMBIO",
                        "name": "Cambios",
                        "text": "Permitido con coste, no permitido en caso de no-show.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Cambio de vuelo con coste, salvo excepciones",
                            "message": "Permitido en cualquier momento con penalización de 150 EUR/ 190 USD. No permitido en caso de no presentarse al vuelo (no-show).",
                            "code": "CA_CAMBIO CON PENALTY_150€/190USD_NO_SHOW_NO_PERMITIDO",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "Permitido con coste, no permitido en caso de no-show."
                        }
                    },
                    {
                        "code": "REEMBOLSO",
                        "name": "Reembolso (por sentido)",
                        "text": "No permitido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "No permitido",
                            "message": "No permitido.",
                            "code": "CA_REEMBOLSO NO PERMITIDO",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No permitido"
                        }
                    },
                    {
                        "code": "CHECKINDESK",
                        "name": "Mostrador check-in exclusivo",
                        "text": "No incluido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Mostrador Check-in exclusivo no incluido",
                            "message": "No incluido.",
                            "code": "Chek-in_desk_ NO",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No"
                        }
                    },
                    {
                        "code": "SALAVIP",
                        "name": "Acceso a salas VIP",
                        "text": "Acceso no incluido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Acceso a Sala Vip no incluido",
                            "message": "Acceso no incluido.",
                            "code": "Acceso a salas VIP No permitido",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No"
                        }
                    },
                    {
                        "code": "EQPPRIOR",
                        "name": "Entrega prioritaria equipaje",
                        "text": "Con coste.",
                        "units": null,
                        "extendedInfo": {
                            "title": "No incluye entrega rápida de equipaje",
                            "message": "Con coste.",
                            "code": "Entrega_prioritaria_equipaje_ NO",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No"
                        }
                    },
                    {
                        "code": "AVIO",
                        "name": "AVIOS",
                        "text": "Incluido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Obtén Avios con tu compra",
                            "message": "Incluido.  ",
                            "code": "AVIOS incluido",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "Si"
                        }
                    },
                    {
                        "code": "WIFI",
                        "name": "WiFi",
                        "text": "Disponible con coste, según el tipo de avión.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Wifi con coste",
                            "message": "Disponible con coste, según el tipo de avión. ",
                            "code": "Wifi pago",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "De pago"
                        }
                    }
                ],
                "observations": [
                    {
                        "observationCode": 1,
                        "observationText": "<a target=\"_blank\" href=\"https://www.iberia.com/web/obsmenu.do?quadrigam=PRSEAT&menuId=EQUIDE\">Más detalle sobre la reserva anticipada de asiento</a>"
                    }
                ],
                "conditionsPriority": [
                    "EQMANO",
                    "EQBODEGA",
                    "COMIDA",
                    "ASIENTO",
                    "ASIENTOXL",
                    "ASIENTODELANTERO",
                    "ASIENTOPREFERENTE",
                    "EMBARQUE",
                    "TARJEMBANTIC",
                    "CAMBIO",
                    "REEMBOLSO",
                    "CHECKINDESK",
                    "FASTTRACK"
                ]
            },
            {
                "cabinType": "N",
                "cabinDescription": "Turista Premium",
                "commercialCode": "TPFLRS",
                "commercialName": "Turista Premium Flexible",
                "commercialNameES": "Turista Premium Flexible",
                "priority": 300,
                "conditions": [
                    {
                        "code": "EQMANO",
                        "name": "Equipaje de mano",
                        "text": "Incluida 1 pieza hasta 10 kg (56x40x25cm).",
                        "units": 1,
                        "extendedInfo": {
                            "title": "Equipaje de mano: 1 pieza",
                            "message": "Incluida 1 pieza hasta 10 kg (56x40x25cm) y 1 accesorio personal, en vuelos operados por las compañías oneworld. Para el resto de compañías, consultar con la operadora de vuelo. ",
                            "code": "CA_EQP_MANO_10KG",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "1 bulto (56x40x25cm)"
                        }
                    },
                    {
                        "code": "COMIDA",
                        "name": "Comida",
                        "text": "Incluida.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Comida incluida",
                            "message": "Incluida. ",
                            "code": "Comida_incluida",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "Incluido"
                        }
                    },
                    {
                        "code": "ASIENTO",
                        "name": "Selección de asiento",
                        "text": "",
                        "units": null,
                        "extendedInfo": {
                            "title": "Selección de asiento incluida ",
                            "message": "Incluida. ",
                            "code": "CA_Asiento_Gratuito",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "Incluido"
                        }
                    },
                    {
                        "code": "ASIENTOPREFERENTE",
                        "name": "Asiento preferente",
                        "text": "No aplica.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Asiento preferente no aplica",
                            "message": "No aplica.",
                            "code": "CA_Asiento_Preferente_NO_aplica",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No aplica"
                        }
                    },
                    {
                        "code": "EMBARQUE",
                        "name": "Prioridad de Embarque",
                        "text": "Incluido (Grupo 2).",
                        "units": 2,
                        "extendedInfo": {
                            "title": "Embarque prioritario Grupo 2",
                            "message": "Incluido (Grupo 2). (En vuelos operados por Iberia, Iberia Express y Air Nostrum).",
                            "code": "CA_Embarque_Prioritario_grupo_2",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "Sí, grupo 2"
                        }
                    },
                    {
                        "code": "REEMBOLSO",
                        "name": "Reembolso (por sentido)",
                        "text": "Permitido sin coste. No permitido en caso de no-show.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Reembolso sin coste, salvo excepciones",
                            "message": "Permitido sin penalización. No permitido en caso de no presentarse al vuelo (no-show).",
                            "code": "CA_REEMBOLSO SIEMPRE_NO_SHOW_NO PERMITIDO",
                            "conditionStatus": true,
                            "observationCode": null,
                            "mobileMessage": "Permitido sin penalización, excepto en caso de no presentarse al vuelo (no show), que no tendrá reembolso"
                        }
                    },
                    {
                        "code": "CHECKINDESK",
                        "name": "Mostrador check-in exclusivo",
                        "text": "No incluido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Mostrador Check-in exclusivo no incluido",
                            "message": "No incluido.",
                            "code": "Chek-in_desk_ NO",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No"
                        }
                    },
                    {
                        "code": "SALAVIP",
                        "name": "Acceso a salas VIP",
                        "text": "",
                        "units": null,
                        "extendedInfo": {
                            "title": "Acceso a Sala Vip no incluido",
                            "message": "Acceso no incluido.",
                            "code": "Acceso a salas VIP No permitido",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No"
                        }
                    },
                    {
                        "code": "FASTTRACK",
                        "name": "Fast Track",
                        "text": "No incluido.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Fast Track no incluido",
                            "message": "No incluido.",
                            "code": "Fast Track NO",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No"
                        }
                    },
                    {
                        "code": "EQPPRIOR",
                        "name": "Entrega prioritaria equipaje",
                        "text": "Con coste.",
                        "units": null,
                        "extendedInfo": {
                            "title": "No incluye entrega rápida de equipaje",
                            "message": "Con coste.",
                            "code": "Entrega_prioritaria_equipaje_ NO",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "No"
                        }
                    },
                    {
                        "code": "WIFI",
                        "name": "WiFi",
                        "text": "Disponible con coste, según el tipo de avión.",
                        "units": null,
                        "extendedInfo": {
                            "title": "Wifi con coste",
                            "message": "Disponible con coste, según el tipo de avión. ",
                            "code": "Wifi pago",
                            "conditionStatus": false,
                            "observationCode": null,
                            "mobileMessage": "De pago"
                        }
                    }
                ],
                "observations": [],
                "conditionsPriority": [
                    "EQMANO",
                    "EQBODEGA",
                    "COMIDA",
                    "ASIENTO",
                    "ASIENTOXL",
                    "ASIENTODELANTERO",
                    "ASIENTOPREFERENTE",
                    "EMBARQUE",
                    "TARJEMBANTIC",
                    "CAMBIO",
                    "REEMBOLSO",
                    "CHECKINDESK",
                    "FASTTRACK"
                ]
            }
        ],
        "contextMetadata": {
            "language": "es",
            "country": "CO",
            "currencies": [
                {
                    "code": "COP",
                    "description": "Peso (Colombia)",
                    "symbol": "COP",
                    "alignment": "R",
                    "groupingSeparator": ".",
                    "decimalSeparator": ",",
                    "decimals": 0,
                    "recommendedDisplay": "symbol"
                }
            ]
        },
        "uniqueProductSuproductPairs": [],
        "relatedContent": [
            {
                "key": "TOTAL_PRICE",
                "value": "Precio total, incluye tarifa aérea, todas las <a href=\"https://www.iberia.com/web/obsmenu.do?quadrigam=IBTASA&menuId=INFLEG\" target=\"_blank\">tasas</a>, <a href=\"https://www.iberia.com/web/obsmenu.do?quadrigam=IBTASA&menuId=INFLEG\" target=\"_blank\">impuestos</a> (salvo los que se cobren en determinados aeropuertos en el momento de facturar) y el costo de combustible."
            },
            {
                "key": "EXPLANATION",
                "value": "<a target=\"_blank\" href=\"http://www.iberia.com/ibcomv3/content/pdf/derechos_pax_co_es.pdf\">Condiciones de desistimiento y retracto</a> aplicadas en las reservas desde Colombia. La hora límite para presentarse en el mostrador de Iberia en Colombia es de 60 minutos. Por motivos de seguridad se recomienda a los pasajeros que se presenten a facturación 3 horas antes de la hora programada de salida de su vuelo."
            },
            {
                "key": "OBSERVATIONS",
                "value": "Equipaje de mano: 1 bulto (56x45x25cm)+ 1 accesorio personal. Válido en vuelos operados por compañías oneworld. En el resto debes consultar con la compañía operadora.<br/> Equipaje en bodega: Piezas de Max:23 kg / 158 cm<br/> Comida: Solo disponible en vuelos de largo radio<br/> WiFi: Solo disponible en vuelos de largo radio<br/> AVIOS: LEVEL permitirá la acumulación de Avios en todas las tarifas. El porcentaje de Avios generado será diferente según el nivel de tarifa correspondiente. Los beneficios de niveles superiores de pasajero frecuente, tales como acceso a sala VIP, embarque prioritario, fast track o franquicia de equipaje no estarán autorizados para vuelos LEVEL"
            },
            {
                "key": "FARE_CONDITIONS",
                "value": "<a href=\"../reserva-de-asientos/\" class=\"links\" title=\"Ver precios de la reserva de asiento\">Más detalle sobre la reserva anticipada de asiento</a><br/>Cuando las gestiones de cambios, reembolsos o cancelaciones se realicen a través del centro de atención telefónica y oficinas de billetes, serán también aplicables los gastos de gestión que correspondan en cada caso.<br/>Los gastos de gestión no son reembolsables, a menos que se solicite un reembolso debido a un retraso, cancelación de vuelo y/o flexibilización en reservas realizadas en mercados dentro de la Unión Europea.<br/>Los cargos del operador NO son reembolsables.<br/>Si la tarifa seleccionada admite cambios, estos se deben realizar en la misma clase que reservó inicialmente. Si no hubiera disponibilidad de plazas en esa clase, el cambio deberá ser siempre a una tarifa superior, lo que implica abonar la diferencia de tarifa más el cargo de gestión correspondiente. Ten en cuenta además que determinadas tarifas pueden tener restricciones en cuanto a la estancia mínima en destino, estancia máxima, reserva anticipada de plaza o periodo de vuelo.<br/>Antes de comenzar a volar los pasajeros pueden cancelar íntegramente sus billetes, aplicando a cada trayecto sus condiciones de reembolso -cuando las mismas así lo permitan- según la tarifa correspondiente a cada trayecto que se cancela. No está permitida la cancelación parcial.<br/>Si ya se ha utilizado una parte del billete y se desea cancelar el resto, el reembolso -cuando la tarifa aplicable lo permita- se realizará: a) recalculando el precio del/de los trayecto/s efectivamente utilizado/s; b) aplicando al resto de los trayectos sus condiciones de reembolso; y c) finalmente, detrayendo del importe a reembolsar, en su caso, el importe correspondiente a la diferencia de precio recalculada para los trayectos efectivamente realizados.<br/>Cualquier otro tipo de solicitud de modificación de un billete será considerado un cambio de billete, aplicándosele las condiciones correspondientes a dicha condición.<br/>En todos los casos anteriores, cuando las gestiones de cambios, reembolsos o cancelaciones se realicen a través del centro de atención telefónica y oficinas de billetes, serán también aplicables las comisiones de gestión que correspondan en cada caso."
            }
        ],
        "specialDiscountsPossibilities": null,
        "brandedFares": [],
        "freeBaggageAllowances": [],
        "flightRatio": "Largo Radio"
    }
*/