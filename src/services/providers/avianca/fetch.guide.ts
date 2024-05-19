fetch("https://www.avianca.com/pricing/api/v1/journeys", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "apikey": "d9eaa63c9008987381860a36e0d8c2aa2c6a936b41bf35e42bbe11e97bd452ea",
    "content-type": "application/json; charset=UTF-8",
    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://www.avianca.com/es/booking/select/?origin1=CUC&destination1=MAD&departure1=2024-02-01&adt1=1&chd1=0&inf1=0&origin2=MAD&destination2=CUC&departure2=2024-03-30&adt2=1&chd2=0&inf2=0&currency=COP&posCode=CO",
  "referrerPolicy": "same-origin",
  "body": "{\"customerId\":\"0f9ef31c-e69b-43c0-89c7-b2a7a0356d67\",\"journeyPriceRequests\":[{\"currency\":\"COP\",\"destination\":\"MAD\",\"origin\":\"CUC\",\"pax\":{\"ADT\":1,\"CHD\":0,\"INF\":0,\"TNG\":0},\"pointOfSale\":{\"Country\":\"\",\"posCode\":\"CO\"},\"details\":{\"allPrice\":[{\"begin\":\"2024-02-01\",\"end\":\"2024-02-01\"}],\"lowestPrice\":[{\"begin\":\"2024-01-26\",\"end\":\"2024-02-07\"}]},\"filters\":{\"MaxConnectingSegments\":[\"20\"],\"requestedJourneyNumber\":[\"1\"],\"tripType\":[\"RT\"]},\"id\":\"1\"},{\"currency\":\"COP\",\"destination\":\"CUC\",\"origin\":\"MAD\",\"pax\":{\"ADT\":1,\"CHD\":0,\"INF\":0,\"TNG\":0},\"pointOfSale\":{\"Country\":\"\",\"posCode\":\"CO\"},\"details\":{\"allPrice\":[{\"begin\":\"2024-03-30\",\"end\":\"2024-03-30\"}],\"lowestPrice\":[{\"begin\":\"2024-03-24\",\"end\":\"2024-04-05\"}]},\"filters\":{\"MaxConnectingSegments\":[\"20\"],\"requestedJourneyNumber\":[],\"tripType\":[\"RT\"]},\"id\":\"2\"}],\"prospectId\":\"\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

/*
{
    "journeyPriceResponses": [
        {
            "id": "1",
            "currency": "COP",
            "schedules": [
                {
                    "date": "2024-01-25T00:00:00",
                    "availability": "Available",
                    "journeys": [
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-01-25T00:00:00",
                            "stdutc": "2024-01-25T00:00:00Z",
                            "sta": "0001-01-01T00:00:00",
                            "stautc": "0001-01-01T00:00:00",
                            "duration": "-738909.00:00:00",
                            "scheduleType": "LowestPrice",
                            "segments": [
                                {
                                    "id": "4355437E4D41447E3030317E41567E323032342D30312D32357E",
                                    "origin": "CUC",
                                    "destination": "MAD",
                                    "std": "2024-01-25T00:00:00",
                                    "stdutc": "2024-01-25T00:00:00Z",
                                    "sta": "0001-01-01T00:00:00",
                                    "stautc": "0001-01-01T00:00:00",
                                    "duration": "-738909.00:00:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "MAD",
                                            "std": "2024-01-25T00:00:00",
                                            "stdutc": "2024-01-25T00:00:00Z",
                                            "sta": "0001-01-01T00:00:00",
                                            "stautc": "0001-01-01T00:00:00",
                                            "duration": "00:00:00",
                                            "referenceId": ""
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Default",
                                        "number": "001"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E45454F42314252527E7E4144547E7E",
                                    "fareBasisCode": "EEOB1BRR",
                                    "productClass": "S",
                                    "availableSeats": 0,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 3194625,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 3194625,
                                            "currency": "COP"
                                        }
                                    ],
                                    "recommended": false
                                }
                            ],
                            "availability": "Available",
                            "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333132443332333537457E"
                        }
                    ]
                },
                {
                    "date": "2024-01-26T00:00:00",
                    "availability": "Available",
                    "journeys": [
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-01-26T00:00:00",
                            "stdutc": "2024-01-26T00:00:00Z",
                            "sta": "0001-01-01T00:00:00",
                            "stautc": "0001-01-01T00:00:00",
                            "duration": "-738910.00:00:00",
                            "scheduleType": "LowestPrice",
                            "segments": [
                                {
                                    "id": "4355437E4D41447E3030317E41567E323032342D30312D32367E",
                                    "origin": "CUC",
                                    "destination": "MAD",
                                    "std": "2024-01-26T00:00:00",
                                    "stdutc": "2024-01-26T00:00:00Z",
                                    "sta": "0001-01-01T00:00:00",
                                    "stautc": "0001-01-01T00:00:00",
                                    "duration": "-738910.00:00:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "MAD",
                                            "std": "2024-01-26T00:00:00",
                                            "stdutc": "2024-01-26T00:00:00Z",
                                            "sta": "0001-01-01T00:00:00",
                                            "stautc": "0001-01-01T00:00:00",
                                            "duration": "00:00:00",
                                            "referenceId": ""
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Default",
                                        "number": "001"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E7E4144547E7E",
                                    "fareBasisCode": "PAOB1BRR",
                                    "productClass": "S",
                                    "availableSeats": 0,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "recommended": false
                                }
                            ],
                            "availability": "Available",
                            "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333132443332333637457E"
                        }
                    ]
                },
                {
                    "date": "2024-01-27T00:00:00",
                    "availability": "Available",
                    "journeys": [
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-01-27T00:00:00",
                            "stdutc": "2024-01-27T00:00:00Z",
                            "sta": "0001-01-01T00:00:00",
                            "stautc": "0001-01-01T00:00:00",
                            "duration": "-738911.00:00:00",
                            "scheduleType": "LowestPrice",
                            "segments": [
                                {
                                    "id": "4355437E4D41447E3030317E41567E323032342D30312D32377E",
                                    "origin": "CUC",
                                    "destination": "MAD",
                                    "std": "2024-01-27T00:00:00",
                                    "stdutc": "2024-01-27T00:00:00Z",
                                    "sta": "0001-01-01T00:00:00",
                                    "stautc": "0001-01-01T00:00:00",
                                    "duration": "-738911.00:00:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "MAD",
                                            "std": "2024-01-27T00:00:00",
                                            "stdutc": "2024-01-27T00:00:00Z",
                                            "sta": "0001-01-01T00:00:00",
                                            "stautc": "0001-01-01T00:00:00",
                                            "duration": "00:00:00",
                                            "referenceId": ""
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Default",
                                        "number": "001"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E4C454F42314252527E7E4144547E7E",
                                    "fareBasisCode": "LEOB1BRR",
                                    "productClass": "S",
                                    "availableSeats": 0,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2616195,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2616195,
                                            "currency": "COP"
                                        }
                                    ],
                                    "recommended": false
                                }
                            ],
                            "availability": "Available",
                            "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333132443332333737457E"
                        }
                    ]
                },
                {
                    "date": "2024-01-28T00:00:00",
                    "availability": "Available",
                    "journeys": [
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-01-28T00:00:00",
                            "stdutc": "2024-01-28T00:00:00Z",
                            "sta": "0001-01-01T00:00:00",
                            "stautc": "0001-01-01T00:00:00",
                            "duration": "-738912.00:00:00",
                            "scheduleType": "LowestPrice",
                            "segments": [
                                {
                                    "id": "4355437E4D41447E3030317E41567E323032342D30312D32387E",
                                    "origin": "CUC",
                                    "destination": "MAD",
                                    "std": "2024-01-28T00:00:00",
                                    "stdutc": "2024-01-28T00:00:00Z",
                                    "sta": "0001-01-01T00:00:00",
                                    "stautc": "0001-01-01T00:00:00",
                                    "duration": "-738912.00:00:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "MAD",
                                            "std": "2024-01-28T00:00:00",
                                            "stdutc": "2024-01-28T00:00:00Z",
                                            "sta": "0001-01-01T00:00:00",
                                            "stautc": "0001-01-01T00:00:00",
                                            "duration": "00:00:00",
                                            "referenceId": ""
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Default",
                                        "number": "001"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E7E4144547E7E",
                                    "fareBasisCode": "PAOB1BRR",
                                    "productClass": "S",
                                    "availableSeats": 0,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "recommended": false
                                }
                            ],
                            "availability": "Available",
                            "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333132443332333837457E"
                        }
                    ]
                },
                {
                    "date": "2024-01-29T00:00:00",
                    "availability": "Available",
                    "journeys": [
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-01-29T00:00:00",
                            "stdutc": "2024-01-29T00:00:00Z",
                            "sta": "0001-01-01T00:00:00",
                            "stautc": "0001-01-01T00:00:00",
                            "duration": "-738913.00:00:00",
                            "scheduleType": "LowestPrice",
                            "segments": [
                                {
                                    "id": "4355437E4D41447E3030317E41567E323032342D30312D32397E",
                                    "origin": "CUC",
                                    "destination": "MAD",
                                    "std": "2024-01-29T00:00:00",
                                    "stdutc": "2024-01-29T00:00:00Z",
                                    "sta": "0001-01-01T00:00:00",
                                    "stautc": "0001-01-01T00:00:00",
                                    "duration": "-738913.00:00:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "MAD",
                                            "std": "2024-01-29T00:00:00",
                                            "stdutc": "2024-01-29T00:00:00Z",
                                            "sta": "0001-01-01T00:00:00",
                                            "stautc": "0001-01-01T00:00:00",
                                            "duration": "00:00:00",
                                            "referenceId": ""
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Default",
                                        "number": "001"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E7E4144547E7E",
                                    "fareBasisCode": "PAOB1BRR",
                                    "productClass": "S",
                                    "availableSeats": 0,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "recommended": false
                                }
                            ],
                            "availability": "Available",
                            "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333132443332333937457E"
                        }
                    ]
                },
                {
                    "date": "2024-01-30T00:00:00",
                    "availability": "Available",
                    "journeys": [
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-01-30T00:00:00",
                            "stdutc": "2024-01-30T00:00:00Z",
                            "sta": "0001-01-01T00:00:00",
                            "stautc": "0001-01-01T00:00:00",
                            "duration": "-738914.00:00:00",
                            "scheduleType": "LowestPrice",
                            "segments": [
                                {
                                    "id": "4355437E4D41447E3030317E41567E323032342D30312D33307E",
                                    "origin": "CUC",
                                    "destination": "MAD",
                                    "std": "2024-01-30T00:00:00",
                                    "stdutc": "2024-01-30T00:00:00Z",
                                    "sta": "0001-01-01T00:00:00",
                                    "stautc": "0001-01-01T00:00:00",
                                    "duration": "-738914.00:00:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "MAD",
                                            "std": "2024-01-30T00:00:00",
                                            "stdutc": "2024-01-30T00:00:00Z",
                                            "sta": "0001-01-01T00:00:00",
                                            "stautc": "0001-01-01T00:00:00",
                                            "duration": "00:00:00",
                                            "referenceId": ""
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Default",
                                        "number": "001"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E7E4144547E7E",
                                    "fareBasisCode": "PAOB1BRR",
                                    "productClass": "S",
                                    "availableSeats": 0,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "recommended": false
                                }
                            ],
                            "availability": "Available",
                            "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333132443333333037457E"
                        }
                    ]
                },
                {
                    "date": "2024-01-31T00:00:00",
                    "availability": "Available",
                    "journeys": [
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-01-31T00:00:00",
                            "stdutc": "2024-01-31T00:00:00Z",
                            "sta": "0001-01-01T00:00:00",
                            "stautc": "0001-01-01T00:00:00",
                            "duration": "-738915.00:00:00",
                            "scheduleType": "LowestPrice",
                            "segments": [
                                {
                                    "id": "4355437E4D41447E3030317E41567E323032342D30312D33317E",
                                    "origin": "CUC",
                                    "destination": "MAD",
                                    "std": "2024-01-31T00:00:00",
                                    "stdutc": "2024-01-31T00:00:00Z",
                                    "sta": "0001-01-01T00:00:00",
                                    "stautc": "0001-01-01T00:00:00",
                                    "duration": "-738915.00:00:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "MAD",
                                            "std": "2024-01-31T00:00:00",
                                            "stdutc": "2024-01-31T00:00:00Z",
                                            "sta": "0001-01-01T00:00:00",
                                            "stautc": "0001-01-01T00:00:00",
                                            "duration": "00:00:00",
                                            "referenceId": ""
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Default",
                                        "number": "001"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E7E4144547E7E",
                                    "fareBasisCode": "PAOB1BRR",
                                    "productClass": "S",
                                    "availableSeats": 0,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "recommended": false
                                }
                            ],
                            "availability": "Available",
                            "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333132443333333137457E"
                        }
                    ]
                },
                {
                    "date": "2024-02-01T00:00:00",
                    "availability": "Available",
                    "journeys": [
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-02-01T00:00:00",
                            "stdutc": "2024-02-01T00:00:00Z",
                            "sta": "0001-01-01T00:00:00",
                            "stautc": "0001-01-01T00:00:00",
                            "duration": "-738916.00:00:00",
                            "scheduleType": "LowestPrice",
                            "segments": [
                                {
                                    "id": "4355437E4D41447E3030317E41567E323032342D30322D30317E",
                                    "origin": "CUC",
                                    "destination": "MAD",
                                    "std": "2024-02-01T00:00:00",
                                    "stdutc": "2024-02-01T00:00:00Z",
                                    "sta": "0001-01-01T00:00:00",
                                    "stautc": "0001-01-01T00:00:00",
                                    "duration": "-738916.00:00:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "MAD",
                                            "std": "2024-02-01T00:00:00",
                                            "stdutc": "2024-02-01T00:00:00Z",
                                            "sta": "0001-01-01T00:00:00",
                                            "stautc": "0001-01-01T00:00:00",
                                            "duration": "00:00:00",
                                            "referenceId": ""
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Default",
                                        "number": "001"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E7E4144547E7E",
                                    "fareBasisCode": "PAOB1BRR",
                                    "productClass": "S",
                                    "availableSeats": 0,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "recommended": false
                                }
                            ],
                            "availability": "Available",
                            "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333232443330333137457E"
                        },
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-02-01T09:13:00",
                            "stdutc": "2024-02-01T14:13:00",
                            "sta": "2024-02-02T06:30:00",
                            "stautc": "2024-02-02T05:30:00",
                            "duration": "15:17:00",
                            "referenceId": "4",
                            "scheduleType": "AllPrice",
                            "segments": [
                                {
                                    "id": "4355437E424F477E393432397E41567E323032342D30322D30317E353334353437324434313536333933343332333932443433353534333432344634373244333233303332333432443330333232443330333132443330333933313333",
                                    "referenceId": "SEG-AV9429-CUCBOG-2024-02-01-0913",
                                    "origin": "CUC",
                                    "destination": "BOG",
                                    "std": "2024-02-01T09:13:00",
                                    "stdutc": "2024-02-01T14:13:00",
                                    "sta": "2024-02-01T10:29:00",
                                    "stautc": "2024-02-01T15:29:00",
                                    "duration": "01:16:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "BOG",
                                            "originTerminal": "",
                                            "destinationTerminal": "1",
                                            "std": "2024-02-01T09:13:00",
                                            "stdutc": "2024-02-01T14:13:00",
                                            "sta": "2024-02-01T10:29:00",
                                            "stautc": "2024-02-01T15:29:00",
                                            "duration": "01:16:00",
                                            "legInfo": {
                                                "isSubjectedToGovernmentApproval": false
                                            }
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Plane",
                                        "model": "AIRBUS A320",
                                        "number": "9429"
                                    }
                                },
                                {
                                    "id": "424F477E4D41447E32367E41567E323032342D30322D30317E3533343534373244343135363332333632443432344634373444343134343244333233303332333432443330333232443330333132443331333433353330",
                                    "referenceId": "SEG-AV26-BOGMAD-2024-02-01-1450",
                                    "origin": "BOG",
                                    "destination": "MAD",
                                    "std": "2024-02-01T14:50:00",
                                    "stdutc": "2024-02-01T19:50:00",
                                    "sta": "2024-02-02T06:30:00",
                                    "stautc": "2024-02-02T05:30:00",
                                    "duration": "09:40:00",
                                    "legs": [
                                        {
                                            "origin": "BOG",
                                            "destination": "MAD",
                                            "originTerminal": "1",
                                            "destinationTerminal": "4S",
                                            "std": "2024-02-01T14:50:00",
                                            "stdutc": "2024-02-01T19:50:00",
                                            "sta": "2024-02-02T06:30:00",
                                            "stautc": "2024-02-02T05:30:00",
                                            "duration": "09:40:00",
                                            "legInfo": {
                                                "isSubjectedToGovernmentApproval": false
                                            }
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Plane",
                                        "model": "BOEING 787-8",
                                        "number": "26"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433313244333432443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-1-4-1",
                                    "fareBasisCode": "PAOB1BRR",
                                    "classOfService": "P^P",
                                    "productClass": "S",
                                    "availableSeats": 9,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN1",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN2",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 783300",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN3",
                                            "name": "refund",
                                            "description": "isReFundAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "C0CCF2",
                                            "name": "ABAG",
                                            "description": "1ST CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "FBA1",
                                            "name": "freeCheckedBaggage",
                                            "description": "",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "4D7E7E50414F42324252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433323244333432443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-2-4-1",
                                    "fareBasisCode": "PAOB2BRR",
                                    "classOfService": "P^P",
                                    "productClass": "M",
                                    "availableSeats": 9,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2554605,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "M",
                                            "amount": 2554605,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN1",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN2",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 783300",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN3",
                                            "name": "refund",
                                            "description": "isReFundAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA2-0GOC3",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO50LB 23KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "4C7E7E50414F42334252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433333244333432443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-3-4-1",
                                    "fareBasisCode": "PAOB3BRR",
                                    "classOfService": "P^P",
                                    "productClass": "L",
                                    "availableSeats": 9,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2858275,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "L",
                                            "amount": 2858275,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN4",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN5",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN6",
                                            "name": "refund",
                                            "description": "isReFundAllowed: refundPenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA2-0GOC3",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO50LB 23KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "58584C7E7E445A4F42354254527E595E447E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433353244333432443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-5-4-1",
                                    "fareBasisCode": "DZOB5BTR",
                                    "classOfService": "Y^D",
                                    "productClass": "XXL",
                                    "availableSeats": 5,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 5516620,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "XXL",
                                            "amount": 5516620,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN4",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN5",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN6",
                                            "name": "refund",
                                            "description": "isReFundAllowed: refundPenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA3-0FMC4",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO70LB 32KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "included"
                                        }
                                    ]
                                }
                            ],
                            "availability": "Available",
                            "id": "3433353534333745343234463437374533393334333233393745343135363745333233303332333432443330333232443330333137453335333333343335333433373332343433343331333533363333333933333334333333323333333933323434333433333335333533343333333433323334343633343337333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333303333333933333331333333337E3432344634373745344434313434374533323336374534313536374533323330333233343244333033323244333033313745333533333334333533343337333234343334333133353336333333323333333633323434333433323334343633343337333434343334333133343334333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333433333335333333307E3334"
                        },
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-02-01T09:59:00",
                            "stdutc": "2024-02-01T14:59:00",
                            "sta": "2024-02-02T06:30:00",
                            "stautc": "2024-02-02T05:30:00",
                            "duration": "14:31:00",
                            "referenceId": "3",
                            "scheduleType": "AllPrice",
                            "segments": [
                                {
                                    "id": "4355437E424F477E393332317E41567E323032342D30322D30317E353334353437324434313536333933333332333132443433353534333432344634373244333233303332333432443330333232443330333132443330333933353339",
                                    "referenceId": "SEG-AV9321-CUCBOG-2024-02-01-0959",
                                    "origin": "CUC",
                                    "destination": "BOG",
                                    "std": "2024-02-01T09:59:00",
                                    "stdutc": "2024-02-01T14:59:00",
                                    "sta": "2024-02-01T11:14:00",
                                    "stautc": "2024-02-01T16:14:00",
                                    "duration": "01:15:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "BOG",
                                            "originTerminal": "",
                                            "destinationTerminal": "1",
                                            "std": "2024-02-01T09:59:00",
                                            "stdutc": "2024-02-01T14:59:00",
                                            "sta": "2024-02-01T11:14:00",
                                            "stautc": "2024-02-01T16:14:00",
                                            "duration": "01:15:00",
                                            "legInfo": {
                                                "isSubjectedToGovernmentApproval": false
                                            }
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Plane",
                                        "model": "AIRBUS A320",
                                        "number": "9321"
                                    }
                                },
                                {
                                    "id": "424F477E4D41447E32367E41567E323032342D30322D30317E3533343534373244343135363332333632443432344634373444343134343244333233303332333432443330333232443330333132443331333433353330",
                                    "referenceId": "SEG-AV26-BOGMAD-2024-02-01-1450",
                                    "origin": "BOG",
                                    "destination": "MAD",
                                    "std": "2024-02-01T14:50:00",
                                    "stdutc": "2024-02-01T19:50:00",
                                    "sta": "2024-02-02T06:30:00",
                                    "stautc": "2024-02-02T05:30:00",
                                    "duration": "09:40:00",
                                    "legs": [
                                        {
                                            "origin": "BOG",
                                            "destination": "MAD",
                                            "originTerminal": "1",
                                            "destinationTerminal": "4S",
                                            "std": "2024-02-01T14:50:00",
                                            "stdutc": "2024-02-01T19:50:00",
                                            "sta": "2024-02-02T06:30:00",
                                            "stautc": "2024-02-02T05:30:00",
                                            "duration": "09:40:00",
                                            "legInfo": {
                                                "isSubjectedToGovernmentApproval": false
                                            }
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Plane",
                                        "model": "BOEING 787-8",
                                        "number": "26"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433313244333332443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-1-3-1",
                                    "fareBasisCode": "PAOB1BRR",
                                    "classOfService": "P^P",
                                    "productClass": "S",
                                    "availableSeats": 9,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN1",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN2",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 783300",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN3",
                                            "name": "refund",
                                            "description": "isReFundAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "C0CCF2",
                                            "name": "ABAG",
                                            "description": "1ST CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "FBA1",
                                            "name": "freeCheckedBaggage",
                                            "description": "",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "4D7E7E50414F42324252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433323244333332443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-2-3-1",
                                    "fareBasisCode": "PAOB2BRR",
                                    "classOfService": "P^P",
                                    "productClass": "M",
                                    "availableSeats": 9,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2554605,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "M",
                                            "amount": 2554605,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN1",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN2",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 783300",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN3",
                                            "name": "refund",
                                            "description": "isReFundAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA2-0GOC3",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO50LB 23KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "4C7E7E50414F42334252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433333244333332443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-3-3-1",
                                    "fareBasisCode": "PAOB3BRR",
                                    "classOfService": "P^P",
                                    "productClass": "L",
                                    "availableSeats": 9,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2858275,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "L",
                                            "amount": 2858275,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN4",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN5",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN6",
                                            "name": "refund",
                                            "description": "isReFundAllowed: refundPenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA2-0GOC3",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO50LB 23KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "58584C7E7E445A4F42354254527E595E447E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433353244333332443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-5-3-1",
                                    "fareBasisCode": "DZOB5BTR",
                                    "classOfService": "Y^D",
                                    "productClass": "XXL",
                                    "availableSeats": 5,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 5516620,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "XXL",
                                            "amount": 5516620,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN4",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN5",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN6",
                                            "name": "refund",
                                            "description": "isReFundAllowed: refundPenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA3-0FMC4",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO70LB 32KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "included"
                                        }
                                    ]
                                }
                            ],
                            "availability": "Available",
                            "id": "3433353534333745343234463437374533393333333233313745343135363745333233303332333432443330333232443330333137453335333333343335333433373332343433343331333533363333333933333333333333323333333133323434333433333335333533343333333433323334343633343337333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333303333333933333335333333397E3432344634373745344434313434374533323336374534313536374533323330333233343244333033323244333033313745333533333334333533343337333234343334333133353336333333323333333633323434333433323334343633343337333434343334333133343334333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333433333335333333307E3333"
                        },
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-02-01T11:35:00",
                            "stdutc": "2024-02-01T16:35:00",
                            "sta": "2024-02-02T06:30:00",
                            "stautc": "2024-02-02T05:30:00",
                            "duration": "12:55:00",
                            "referenceId": "1",
                            "scheduleType": "AllPrice",
                            "segments": [
                                {
                                    "id": "4355437E424F477E393435397E41567E323032342D30322D30317E353334353437324434313536333933343335333932443433353534333432344634373244333233303332333432443330333232443330333132443331333133333335",
                                    "referenceId": "SEG-AV9459-CUCBOG-2024-02-01-1135",
                                    "origin": "CUC",
                                    "destination": "BOG",
                                    "std": "2024-02-01T11:35:00",
                                    "stdutc": "2024-02-01T16:35:00",
                                    "sta": "2024-02-01T12:51:00",
                                    "stautc": "2024-02-01T17:51:00",
                                    "duration": "01:16:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "BOG",
                                            "originTerminal": "",
                                            "destinationTerminal": "1",
                                            "std": "2024-02-01T11:35:00",
                                            "stdutc": "2024-02-01T16:35:00",
                                            "sta": "2024-02-01T12:51:00",
                                            "stautc": "2024-02-01T17:51:00",
                                            "duration": "01:16:00",
                                            "legInfo": {
                                                "isSubjectedToGovernmentApproval": false
                                            }
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Plane",
                                        "model": "AIRBUS A320",
                                        "number": "9459"
                                    }
                                },
                                {
                                    "id": "424F477E4D41447E32367E41567E323032342D30322D30317E3533343534373244343135363332333632443432344634373444343134343244333233303332333432443330333232443330333132443331333433353330",
                                    "referenceId": "SEG-AV26-BOGMAD-2024-02-01-1450",
                                    "origin": "BOG",
                                    "destination": "MAD",
                                    "std": "2024-02-01T14:50:00",
                                    "stdutc": "2024-02-01T19:50:00",
                                    "sta": "2024-02-02T06:30:00",
                                    "stautc": "2024-02-02T05:30:00",
                                    "duration": "09:40:00",
                                    "legs": [
                                        {
                                            "origin": "BOG",
                                            "destination": "MAD",
                                            "originTerminal": "1",
                                            "destinationTerminal": "4S",
                                            "std": "2024-02-01T14:50:00",
                                            "stdutc": "2024-02-01T19:50:00",
                                            "sta": "2024-02-02T06:30:00",
                                            "stautc": "2024-02-02T05:30:00",
                                            "duration": "09:40:00",
                                            "legInfo": {
                                                "isSubjectedToGovernmentApproval": false
                                            }
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Plane",
                                        "model": "BOEING 787-8",
                                        "number": "26"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433313244333132443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-1-1-1",
                                    "fareBasisCode": "PAOB1BRR",
                                    "classOfService": "P^P",
                                    "productClass": "S",
                                    "availableSeats": 5,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN1",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN2",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 783300",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN3",
                                            "name": "refund",
                                            "description": "isReFundAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "C0CCF2",
                                            "name": "ABAG",
                                            "description": "1ST CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "FBA1",
                                            "name": "freeCheckedBaggage",
                                            "description": "",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "4D7E7E50414F42324252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433323244333132443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-2-1-1",
                                    "fareBasisCode": "PAOB2BRR",
                                    "classOfService": "P^P",
                                    "productClass": "M",
                                    "availableSeats": 5,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2554605,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "M",
                                            "amount": 2554605,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN1",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN2",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 783300",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN3",
                                            "name": "refund",
                                            "description": "isReFundAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA2-0GOC3",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO50LB 23KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "4C7E7E50414F42334252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433333244333132443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-3-1-1",
                                    "fareBasisCode": "PAOB3BRR",
                                    "classOfService": "P^P",
                                    "productClass": "L",
                                    "availableSeats": 5,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2858275,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "L",
                                            "amount": 2858275,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN4",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN5",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN6",
                                            "name": "refund",
                                            "description": "isReFundAllowed: refundPenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA2-0GOC3",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO50LB 23KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "58584C7E7E445A4F42354254527E595E447E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433353244333132443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-5-1-1",
                                    "fareBasisCode": "DZOB5BTR",
                                    "classOfService": "Y^D",
                                    "productClass": "XXL",
                                    "availableSeats": 5,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 5516620,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "XXL",
                                            "amount": 5516620,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN4",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN5",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN6",
                                            "name": "refund",
                                            "description": "isReFundAllowed: refundPenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA3-0FMC4",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO70LB 32KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "included"
                                        }
                                    ]
                                }
                            ],
                            "availability": "Available",
                            "id": "3433353534333745343234463437374533393334333533393745343135363745333233303332333432443330333232443330333137453335333333343335333433373332343433343331333533363333333933333334333333353333333933323434333433333335333533343333333433323334343633343337333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333133333333333333357E3432344634373745344434313434374533323336374534313536374533323330333233343244333033323244333033313745333533333334333533343337333234343334333133353336333333323333333633323434333433323334343633343337333434343334333133343334333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333433333335333333307E3331"
                        },
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-02-01T14:43:00",
                            "stdutc": "2024-02-01T19:43:00",
                            "sta": "2024-02-02T13:05:00",
                            "stautc": "2024-02-02T12:05:00",
                            "duration": "16:22:00",
                            "referenceId": "6",
                            "scheduleType": "AllPrice",
                            "segments": [
                                {
                                    "id": "4355437E424F477E353232397E41567E323032342D30322D30317E353334353437324434313536333533323332333932443433353534333432344634373244333233303332333432443330333232443330333132443331333433343333",
                                    "referenceId": "SEG-AV5229-CUCBOG-2024-02-01-1443",
                                    "origin": "CUC",
                                    "destination": "BOG",
                                    "std": "2024-02-01T14:43:00",
                                    "stdutc": "2024-02-01T19:43:00",
                                    "sta": "2024-02-01T15:59:00",
                                    "stautc": "2024-02-01T20:59:00",
                                    "duration": "01:16:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "BOG",
                                            "originTerminal": "",
                                            "destinationTerminal": "1",
                                            "std": "2024-02-01T14:43:00",
                                            "stdutc": "2024-02-01T19:43:00",
                                            "sta": "2024-02-01T15:59:00",
                                            "stautc": "2024-02-01T20:59:00",
                                            "duration": "01:16:00",
                                            "legInfo": {
                                                "isSubjectedToGovernmentApproval": false
                                            }
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Plane",
                                        "model": "AIRBUS A320",
                                        "number": "5229"
                                    }
                                },
                                {
                                    "id": "424F477E4D41447E31307E41567E323032342D30322D30317E3533343534373244343135363331333032443432344634373444343134343244333233303332333432443330333232443330333132443332333133323335",
                                    "referenceId": "SEG-AV10-BOGMAD-2024-02-01-2125",
                                    "origin": "BOG",
                                    "destination": "MAD",
                                    "std": "2024-02-01T21:25:00",
                                    "stdutc": "2024-02-02T02:25:00",
                                    "sta": "2024-02-02T13:05:00",
                                    "stautc": "2024-02-02T12:05:00",
                                    "duration": "09:40:00",
                                    "legs": [
                                        {
                                            "origin": "BOG",
                                            "destination": "MAD",
                                            "originTerminal": "1",
                                            "destinationTerminal": "4S",
                                            "std": "2024-02-01T21:25:00",
                                            "stdutc": "2024-02-02T02:25:00",
                                            "sta": "2024-02-02T13:05:00",
                                            "stautc": "2024-02-02T12:05:00",
                                            "duration": "09:40:00",
                                            "legInfo": {
                                                "isSubjectedToGovernmentApproval": false
                                            }
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Plane",
                                        "model": "BOEING 787-8",
                                        "number": "10"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433313244333632443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-1-6-1",
                                    "fareBasisCode": "PAOB1BRR",
                                    "classOfService": "P^P",
                                    "productClass": "S",
                                    "availableSeats": 9,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN1",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN2",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 783300",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN3",
                                            "name": "refund",
                                            "description": "isReFundAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "C0CCF2",
                                            "name": "ABAG",
                                            "description": "1ST CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "FBA1",
                                            "name": "freeCheckedBaggage",
                                            "description": "",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "4D7E7E50414F42324252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433323244333632443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-2-6-1",
                                    "fareBasisCode": "PAOB2BRR",
                                    "classOfService": "P^P",
                                    "productClass": "M",
                                    "availableSeats": 9,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2554605,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "M",
                                            "amount": 2554605,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN1",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN2",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 783300",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN3",
                                            "name": "refund",
                                            "description": "isReFundAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA2-0GOC3",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO50LB 23KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "4C7E7E50414F42334252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433333244333632443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-3-6-1",
                                    "fareBasisCode": "PAOB3BRR",
                                    "classOfService": "P^P",
                                    "productClass": "L",
                                    "availableSeats": 9,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2858275,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "L",
                                            "amount": 2858275,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN4",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN5",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN6",
                                            "name": "refund",
                                            "description": "isReFundAllowed: refundPenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA2-0GOC3",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO50LB 23KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "58584C7E7E435A4F42354252527E595E437E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433383244333632443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-8-6-1",
                                    "fareBasisCode": "CZOB5BRR",
                                    "classOfService": "Y^C",
                                    "productClass": "XXL",
                                    "availableSeats": 4,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 9914340,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "XXL",
                                            "amount": 9914340,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN4",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN5",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN6",
                                            "name": "refund",
                                            "description": "isReFundAllowed: refundPenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA3-0FMC4",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO70LB 32KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "included"
                                        }
                                    ]
                                }
                            ],
                            "availability": "Available",
                            "id": "3433353534333745343234463437374533353332333233393745343135363745333233303332333432443330333232443330333137453335333333343335333433373332343433343331333533363333333533333332333333323333333933323434333433333335333533343333333433323334343633343337333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333433333334333333337E3432344634373745344434313434374533313330374534313536374533323330333233343244333033323244333033313745333533333334333533343337333234343334333133353336333333313333333033323434333433323334343633343337333434343334333133343334333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333323333333133333332333333357E3336"
                        },
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-02-01T15:28:00",
                            "stdutc": "2024-02-01T20:28:00",
                            "sta": "2024-02-02T13:05:00",
                            "stautc": "2024-02-02T12:05:00",
                            "duration": "15:37:00",
                            "referenceId": "5",
                            "scheduleType": "AllPrice",
                            "segments": [
                                {
                                    "id": "4355437E424F477E353232377E41567E323032342D30322D30317E353334353437324434313536333533323332333732443433353534333432344634373244333233303332333432443330333232443330333132443331333533323338",
                                    "referenceId": "SEG-AV5227-CUCBOG-2024-02-01-1528",
                                    "origin": "CUC",
                                    "destination": "BOG",
                                    "std": "2024-02-01T15:28:00",
                                    "stdutc": "2024-02-01T20:28:00",
                                    "sta": "2024-02-01T16:44:00",
                                    "stautc": "2024-02-01T21:44:00",
                                    "duration": "01:16:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "BOG",
                                            "originTerminal": "",
                                            "destinationTerminal": "1",
                                            "std": "2024-02-01T15:28:00",
                                            "stdutc": "2024-02-01T20:28:00",
                                            "sta": "2024-02-01T16:44:00",
                                            "stautc": "2024-02-01T21:44:00",
                                            "duration": "01:16:00",
                                            "legInfo": {
                                                "isSubjectedToGovernmentApproval": false
                                            }
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Plane",
                                        "model": "AIRBUS A320",
                                        "number": "5227"
                                    }
                                },
                                {
                                    "id": "424F477E4D41447E31307E41567E323032342D30322D30317E3533343534373244343135363331333032443432344634373444343134343244333233303332333432443330333232443330333132443332333133323335",
                                    "referenceId": "SEG-AV10-BOGMAD-2024-02-01-2125",
                                    "origin": "BOG",
                                    "destination": "MAD",
                                    "std": "2024-02-01T21:25:00",
                                    "stdutc": "2024-02-02T02:25:00",
                                    "sta": "2024-02-02T13:05:00",
                                    "stautc": "2024-02-02T12:05:00",
                                    "duration": "09:40:00",
                                    "legs": [
                                        {
                                            "origin": "BOG",
                                            "destination": "MAD",
                                            "originTerminal": "1",
                                            "destinationTerminal": "4S",
                                            "std": "2024-02-01T21:25:00",
                                            "stdutc": "2024-02-02T02:25:00",
                                            "sta": "2024-02-02T13:05:00",
                                            "stautc": "2024-02-02T12:05:00",
                                            "duration": "09:40:00",
                                            "legInfo": {
                                                "isSubjectedToGovernmentApproval": false
                                            }
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Plane",
                                        "model": "BOEING 787-8",
                                        "number": "10"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433313244333532443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-1-5-1",
                                    "fareBasisCode": "PAOB1BRR",
                                    "classOfService": "P^P",
                                    "productClass": "S",
                                    "availableSeats": 9,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN1",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN2",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 783300",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN3",
                                            "name": "refund",
                                            "description": "isReFundAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "C0CCF2",
                                            "name": "ABAG",
                                            "description": "1ST CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "FBA1",
                                            "name": "freeCheckedBaggage",
                                            "description": "",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "4D7E7E50414F42324252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433323244333532443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-2-5-1",
                                    "fareBasisCode": "PAOB2BRR",
                                    "classOfService": "P^P",
                                    "productClass": "M",
                                    "availableSeats": 9,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2554605,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "M",
                                            "amount": 2554605,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN1",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN2",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 783300",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN3",
                                            "name": "refund",
                                            "description": "isReFundAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA2-0GOC3",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO50LB 23KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "4C7E7E50414F42334252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433333244333532443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-3-5-1",
                                    "fareBasisCode": "PAOB3BRR",
                                    "classOfService": "P^P",
                                    "productClass": "L",
                                    "availableSeats": 9,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2858275,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "L",
                                            "amount": 2858275,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN4",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN5",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN6",
                                            "name": "refund",
                                            "description": "isReFundAllowed: refundPenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA2-0GOC3",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO50LB 23KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "58584C7E7E435A4F42354252527E595E437E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433383244333532443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-8-5-1",
                                    "fareBasisCode": "CZOB5BRR",
                                    "classOfService": "Y^C",
                                    "productClass": "XXL",
                                    "availableSeats": 4,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 9914340,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "XXL",
                                            "amount": 9914340,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN4",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN5",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN6",
                                            "name": "refund",
                                            "description": "isReFundAllowed: refundPenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA3-0FMC4",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO70LB 32KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "included"
                                        }
                                    ]
                                }
                            ],
                            "availability": "Available",
                            "id": "3433353534333745343234463437374533353332333233373745343135363745333233303332333432443330333232443330333137453335333333343335333433373332343433343331333533363333333533333332333333323333333733323434333433333335333533343333333433323334343633343337333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333533333332333333387E3432344634373745344434313434374533313330374534313536374533323330333233343244333033323244333033313745333533333334333533343337333234343334333133353336333333313333333033323434333433323334343633343337333434343334333133343334333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333323333333133333332333333357E3335"
                        },
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-02-01T17:42:00",
                            "stdutc": "2024-02-01T22:42:00",
                            "sta": "2024-02-02T13:05:00",
                            "stautc": "2024-02-02T12:05:00",
                            "duration": "13:23:00",
                            "referenceId": "2",
                            "scheduleType": "AllPrice",
                            "segments": [
                                {
                                    "id": "4355437E424F477E393432317E41567E323032342D30322D30317E353334353437324434313536333933343332333132443433353534333432344634373244333233303332333432443330333232443330333132443331333733343332",
                                    "referenceId": "SEG-AV9421-CUCBOG-2024-02-01-1742",
                                    "origin": "CUC",
                                    "destination": "BOG",
                                    "std": "2024-02-01T17:42:00",
                                    "stdutc": "2024-02-01T22:42:00",
                                    "sta": "2024-02-01T18:58:00",
                                    "stautc": "2024-02-01T23:58:00",
                                    "duration": "01:16:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "BOG",
                                            "originTerminal": "",
                                            "destinationTerminal": "1",
                                            "std": "2024-02-01T17:42:00",
                                            "stdutc": "2024-02-01T22:42:00",
                                            "sta": "2024-02-01T18:58:00",
                                            "stautc": "2024-02-01T23:58:00",
                                            "duration": "01:16:00",
                                            "legInfo": {
                                                "isSubjectedToGovernmentApproval": false
                                            }
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Plane",
                                        "model": "AIRBUS A320",
                                        "number": "9421"
                                    }
                                },
                                {
                                    "id": "424F477E4D41447E31307E41567E323032342D30322D30317E3533343534373244343135363331333032443432344634373444343134343244333233303332333432443330333232443330333132443332333133323335",
                                    "referenceId": "SEG-AV10-BOGMAD-2024-02-01-2125",
                                    "origin": "BOG",
                                    "destination": "MAD",
                                    "std": "2024-02-01T21:25:00",
                                    "stdutc": "2024-02-02T02:25:00",
                                    "sta": "2024-02-02T13:05:00",
                                    "stautc": "2024-02-02T12:05:00",
                                    "duration": "09:40:00",
                                    "legs": [
                                        {
                                            "origin": "BOG",
                                            "destination": "MAD",
                                            "originTerminal": "1",
                                            "destinationTerminal": "4S",
                                            "std": "2024-02-01T21:25:00",
                                            "stdutc": "2024-02-02T02:25:00",
                                            "sta": "2024-02-02T13:05:00",
                                            "stautc": "2024-02-02T12:05:00",
                                            "duration": "09:40:00",
                                            "legInfo": {
                                                "isSubjectedToGovernmentApproval": false
                                            }
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Plane",
                                        "model": "BOEING 787-8",
                                        "number": "10"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433313244333232443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-1-2-1",
                                    "fareBasisCode": "PAOB1BRR",
                                    "classOfService": "P^P",
                                    "productClass": "S",
                                    "availableSeats": 9,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN1",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN2",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 783300",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN3",
                                            "name": "refund",
                                            "description": "isReFundAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "C0CCF2",
                                            "name": "ABAG",
                                            "description": "1ST CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "FBA1",
                                            "name": "freeCheckedBaggage",
                                            "description": "",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "4D7E7E50414F42324252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433323244333232443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-2-2-1",
                                    "fareBasisCode": "PAOB2BRR",
                                    "classOfService": "P^P",
                                    "productClass": "M",
                                    "availableSeats": 9,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2554605,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "M",
                                            "amount": 2554605,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN1",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN2",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 783300",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN3",
                                            "name": "refund",
                                            "description": "isReFundAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA2-0GOC3",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO50LB 23KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "4C7E7E50414F42334252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433333244333232443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-3-2-1",
                                    "fareBasisCode": "PAOB3BRR",
                                    "classOfService": "P^P",
                                    "productClass": "L",
                                    "availableSeats": 9,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2858275,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "L",
                                            "amount": 2858275,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN4",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN5",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN6",
                                            "name": "refund",
                                            "description": "isReFundAllowed: refundPenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA2-0GOC3",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO50LB 23KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "58584C7E7E435A4F42354252527E595E437E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433383244333232443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-8-2-1",
                                    "fareBasisCode": "CZOB5BRR",
                                    "classOfService": "Y^C",
                                    "productClass": "XXL",
                                    "availableSeats": 4,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 9914340,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "XXL",
                                            "amount": 9914340,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN4",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN5",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN6",
                                            "name": "refund",
                                            "description": "isReFundAllowed: refundPenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA3-0FMC4",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO70LB 32KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "included"
                                        }
                                    ]
                                }
                            ],
                            "availability": "Available",
                            "id": "3433353534333745343234463437374533393334333233313745343135363745333233303332333432443330333232443330333137453335333333343335333433373332343433343331333533363333333933333334333333323333333133323434333433333335333533343333333433323334343633343337333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333733333334333333327E3432344634373745344434313434374533313330374534313536374533323330333233343244333033323244333033313745333533333334333533343337333234343334333133353336333333313333333033323434333433323334343633343337333434343334333133343334333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333323333333133333332333333357E3332"
                        },
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-02-01T11:35:00",
                            "stdutc": "2024-02-01T16:35:00",
                            "sta": "2024-02-02T10:40:00",
                            "stautc": "2024-02-02T09:40:00",
                            "duration": "17:05:00",
                            "referenceId": "7",
                            "scheduleType": "AllPrice",
                            "segments": [
                                {
                                    "id": "4355437E424F477E393435397E41567E323032342D30322D30317E353334353437324434313536333933343335333932443433353534333432344634373244333233303332333432443330333232443330333132443331333133333335",
                                    "referenceId": "SEG-AV9459-CUCBOG-2024-02-01-1135",
                                    "origin": "CUC",
                                    "destination": "BOG",
                                    "std": "2024-02-01T11:35:00",
                                    "stdutc": "2024-02-01T16:35:00",
                                    "sta": "2024-02-01T12:51:00",
                                    "stautc": "2024-02-01T17:51:00",
                                    "duration": "01:16:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "BOG",
                                            "originTerminal": "",
                                            "destinationTerminal": "1",
                                            "std": "2024-02-01T11:35:00",
                                            "stdutc": "2024-02-01T16:35:00",
                                            "sta": "2024-02-01T12:51:00",
                                            "stautc": "2024-02-01T17:51:00",
                                            "duration": "01:16:00",
                                            "legInfo": {
                                                "isSubjectedToGovernmentApproval": false
                                            }
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Plane",
                                        "model": "AIRBUS A320",
                                        "number": "9459"
                                    }
                                },
                                {
                                    "id": "424F477E42434E7E31387E41567E323032342D30322D30317E3533343534373244343135363331333832443432344634373432343334453244333233303332333432443330333232443330333132443331333533343330",
                                    "referenceId": "SEG-AV18-BOGBCN-2024-02-01-1540",
                                    "origin": "BOG",
                                    "destination": "BCN",
                                    "std": "2024-02-01T15:40:00",
                                    "stdutc": "2024-02-01T20:40:00",
                                    "sta": "2024-02-02T07:40:00",
                                    "stautc": "2024-02-02T06:40:00",
                                    "duration": "10:00:00",
                                    "legs": [
                                        {
                                            "origin": "BOG",
                                            "destination": "BCN",
                                            "originTerminal": "1",
                                            "destinationTerminal": "1",
                                            "std": "2024-02-01T15:40:00",
                                            "stdutc": "2024-02-01T20:40:00",
                                            "sta": "2024-02-02T07:40:00",
                                            "stautc": "2024-02-02T06:40:00",
                                            "duration": "10:00:00",
                                            "legInfo": {
                                                "isSubjectedToGovernmentApproval": false
                                            }
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Plane",
                                        "model": "BOEING 787-8",
                                        "number": "18"
                                    }
                                },
                                {
                                    "id": "42434E7E4D41447E363030307E49427E323032342D30322D30327E353334353437324434313536333633303330333032443432343334453444343134343244333233303332333432443330333232443330333232443330333933313335",
                                    "referenceId": "SEG-AV6000-BCNMAD-2024-02-02-0915",
                                    "origin": "BCN",
                                    "destination": "MAD",
                                    "std": "2024-02-02T09:15:00",
                                    "stdutc": "2024-02-02T08:15:00",
                                    "sta": "2024-02-02T10:40:00",
                                    "stautc": "2024-02-02T09:40:00",
                                    "duration": "01:25:00",
                                    "legs": [
                                        {
                                            "origin": "BCN",
                                            "destination": "MAD",
                                            "originTerminal": "1",
                                            "destinationTerminal": "4",
                                            "std": "2024-02-02T09:15:00",
                                            "stdutc": "2024-02-02T08:15:00",
                                            "sta": "2024-02-02T10:40:00",
                                            "stautc": "2024-02-02T09:40:00",
                                            "duration": "01:25:00",
                                            "legInfo": {
                                                "isSubjectedToGovernmentApproval": false
                                            }
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "IB"
                                        },
                                        "type": "Plane",
                                        "model": "AIRBUS A320",
                                        "number": "6000"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E45455342314252517E455E455E457E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433343244333732443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-4-7-1",
                                    "fareBasisCode": "EESB1BRQ",
                                    "classOfService": "E^E^E",
                                    "productClass": "S",
                                    "availableSeats": 4,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 4896680,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 4896680,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN1",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN2",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 783300",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN3",
                                            "name": "refund",
                                            "description": "isReFundAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "FBA4",
                                            "name": "freeCheckedBaggage",
                                            "description": "",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CCF2",
                                            "name": "ABAG",
                                            "description": "1ST CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "4D7E7E45455342324252517E455E455E457E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433363244333732443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-6-7-1",
                                    "fareBasisCode": "EESB2BRQ",
                                    "classOfService": "E^E^E",
                                    "productClass": "M",
                                    "availableSeats": 4,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 5364500,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "M",
                                            "amount": 5364500,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN1",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN2",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 783300",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN3",
                                            "name": "refund",
                                            "description": "isReFundAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "FBA5-0GOC3",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO50LB 23KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                },
                                {
                                    "id": "4C7E7E454C4F42334252527E455E455E457E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433373244333732443331",
                                    "referenceId": "BC1-2-OFR-486419495660782-7-7-1",
                                    "fareBasisCode": "ELOB3BRR",
                                    "classOfService": "E^E^E",
                                    "productClass": "L",
                                    "availableSeats": 4,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 5714145,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "L",
                                            "amount": 5714145,
                                            "currency": "COP"
                                        }
                                    ],
                                    "cabin": "eco",
                                    "recommended": false,
                                    "items": [
                                        {
                                            "code": "PEN4",
                                            "name": "change",
                                            "description": "isRevalidationAllowed: ",
                                            "applicability": "notOffered"
                                        },
                                        {
                                            "code": "PEN5",
                                            "name": "change",
                                            "description": "isReIssueAllowed: changePenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "PEN6",
                                            "name": "refund",
                                            "description": "isReFundAllowed: refundPenalty COP 0",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "FBA5-0GOC3",
                                            "name": "freeCheckedBaggage",
                                            "description": "UPTO50LB 23KG AND62LI 158LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "04JF5",
                                            "name": "04JF5",
                                            "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A05QF6",
                                            "name": "PASS",
                                            "description": "AIRPORT CHECK IN COUNTER",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "056Z7",
                                            "name": "056Z7",
                                            "description": "REFUNDABLE TICKET",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "055Z8",
                                            "name": "055Z8",
                                            "description": "CHANGE FEE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "A0B5F1",
                                            "name": "SEAT",
                                            "description": "PRE RESERVED SEAT ASSIGNMENT",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0LNB9",
                                            "name": "0LNB9",
                                            "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "0DFA13",
                                            "name": "0DFA13",
                                            "description": "FREE BAGGAGE ALLOWANCE",
                                            "applicability": "included"
                                        },
                                        {
                                            "code": "C0CDF10",
                                            "name": "BBAG",
                                            "description": "2ND CHECKED BAG 23KG 158 LCM",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0G6F11",
                                            "name": "PBRD",
                                            "description": "PRIORITY BOARDING",
                                            "applicability": "chargeable"
                                        },
                                        {
                                            "code": "E0AGF12",
                                            "name": "VIPD",
                                            "description": "VIP LOUNGE DAY PASS",
                                            "applicability": "chargeable"
                                        }
                                    ]
                                }
                            ],
                            "availability": "Available",
                            "id": "3433353534333745343234463437374533393334333533393745343135363745333233303332333432443330333232443330333137453335333333343335333433373332343433343331333533363333333933333334333333353333333933323434333433333335333533343333333433323334343633343337333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333133333333333333357E3432344634373745343234333445374533313338374534313536374533323330333233343244333033323244333033313745333533333334333533343337333234343334333133353336333333313333333833323434333433323334343633343337333433323334333333343435333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333533333334333333307E3432343334453745344434313434374533363330333033303745343934323745333233303332333432443330333232443330333237453335333333343335333433373332343433343331333533363333333633333330333333303333333033323434333433323334333333343435333434343334333133343334333234343333333233333330333333323333333433323434333333303333333233323434333333303333333233323434333333303333333933333331333333357E3337"
                        }
                    ]
                },
                {
                    "date": "2024-02-02T00:00:00",
                    "availability": "Available",
                    "journeys": [
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-02-02T00:00:00",
                            "stdutc": "2024-02-02T00:00:00Z",
                            "sta": "0001-01-01T00:00:00",
                            "stautc": "0001-01-01T00:00:00",
                            "duration": "-738917.00:00:00",
                            "scheduleType": "LowestPrice",
                            "segments": [
                                {
                                    "id": "4355437E4D41447E3030317E41567E323032342D30322D30327E",
                                    "origin": "CUC",
                                    "destination": "MAD",
                                    "std": "2024-02-02T00:00:00",
                                    "stdutc": "2024-02-02T00:00:00Z",
                                    "sta": "0001-01-01T00:00:00",
                                    "stautc": "0001-01-01T00:00:00",
                                    "duration": "-738917.00:00:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "MAD",
                                            "std": "2024-02-02T00:00:00",
                                            "stdutc": "2024-02-02T00:00:00Z",
                                            "sta": "0001-01-01T00:00:00",
                                            "stautc": "0001-01-01T00:00:00",
                                            "duration": "00:00:00",
                                            "referenceId": ""
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Default",
                                        "number": "001"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E7E4144547E7E",
                                    "fareBasisCode": "PAOB1BRR",
                                    "productClass": "S",
                                    "availableSeats": 0,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "recommended": false
                                }
                            ],
                            "availability": "Available",
                            "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333232443330333237457E"
                        }
                    ]
                },
                {
                    "date": "2024-02-03T00:00:00",
                    "availability": "Available",
                    "journeys": [
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-02-03T00:00:00",
                            "stdutc": "2024-02-03T00:00:00Z",
                            "sta": "0001-01-01T00:00:00",
                            "stautc": "0001-01-01T00:00:00",
                            "duration": "-738918.00:00:00",
                            "scheduleType": "LowestPrice",
                            "segments": [
                                {
                                    "id": "4355437E4D41447E3030317E41567E323032342D30322D30337E",
                                    "origin": "CUC",
                                    "destination": "MAD",
                                    "std": "2024-02-03T00:00:00",
                                    "stdutc": "2024-02-03T00:00:00Z",
                                    "sta": "0001-01-01T00:00:00",
                                    "stautc": "0001-01-01T00:00:00",
                                    "duration": "-738918.00:00:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "MAD",
                                            "std": "2024-02-03T00:00:00",
                                            "stdutc": "2024-02-03T00:00:00Z",
                                            "sta": "0001-01-01T00:00:00",
                                            "stautc": "0001-01-01T00:00:00",
                                            "duration": "00:00:00",
                                            "referenceId": ""
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Default",
                                        "number": "001"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E7E4144547E7E",
                                    "fareBasisCode": "PAOB1BRR",
                                    "productClass": "S",
                                    "availableSeats": 0,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "recommended": false
                                }
                            ],
                            "availability": "Available",
                            "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333232443330333337457E"
                        }
                    ]
                },
                {
                    "date": "2024-02-04T00:00:00",
                    "availability": "Available",
                    "journeys": [
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-02-04T00:00:00",
                            "stdutc": "2024-02-04T00:00:00Z",
                            "sta": "0001-01-01T00:00:00",
                            "stautc": "0001-01-01T00:00:00",
                            "duration": "-738919.00:00:00",
                            "scheduleType": "LowestPrice",
                            "segments": [
                                {
                                    "id": "4355437E4D41447E3030317E41567E323032342D30322D30347E",
                                    "origin": "CUC",
                                    "destination": "MAD",
                                    "std": "2024-02-04T00:00:00",
                                    "stdutc": "2024-02-04T00:00:00Z",
                                    "sta": "0001-01-01T00:00:00",
                                    "stautc": "0001-01-01T00:00:00",
                                    "duration": "-738919.00:00:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "MAD",
                                            "std": "2024-02-04T00:00:00",
                                            "stdutc": "2024-02-04T00:00:00Z",
                                            "sta": "0001-01-01T00:00:00",
                                            "stautc": "0001-01-01T00:00:00",
                                            "duration": "00:00:00",
                                            "referenceId": ""
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Default",
                                        "number": "001"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E7E4144547E7E",
                                    "fareBasisCode": "PAOB1BRR",
                                    "productClass": "S",
                                    "availableSeats": 0,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "recommended": false
                                }
                            ],
                            "availability": "Available",
                            "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333232443330333437457E"
                        }
                    ]
                },
                {
                    "date": "2024-02-05T00:00:00",
                    "availability": "Available",
                    "journeys": [
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-02-05T00:00:00",
                            "stdutc": "2024-02-05T00:00:00Z",
                            "sta": "0001-01-01T00:00:00",
                            "stautc": "0001-01-01T00:00:00",
                            "duration": "-738920.00:00:00",
                            "scheduleType": "LowestPrice",
                            "segments": [
                                {
                                    "id": "4355437E4D41447E3030317E41567E323032342D30322D30357E",
                                    "origin": "CUC",
                                    "destination": "MAD",
                                    "std": "2024-02-05T00:00:00",
                                    "stdutc": "2024-02-05T00:00:00Z",
                                    "sta": "0001-01-01T00:00:00",
                                    "stautc": "0001-01-01T00:00:00",
                                    "duration": "-738920.00:00:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "MAD",
                                            "std": "2024-02-05T00:00:00",
                                            "stdutc": "2024-02-05T00:00:00Z",
                                            "sta": "0001-01-01T00:00:00",
                                            "stautc": "0001-01-01T00:00:00",
                                            "duration": "00:00:00",
                                            "referenceId": ""
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Default",
                                        "number": "001"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E7E4144547E7E",
                                    "fareBasisCode": "PAOB1BRR",
                                    "productClass": "S",
                                    "availableSeats": 0,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "recommended": false
                                }
                            ],
                            "availability": "Available",
                            "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333232443330333537457E"
                        }
                    ]
                },
                {
                    "date": "2024-02-06T00:00:00",
                    "availability": "Available",
                    "journeys": [
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-02-06T00:00:00",
                            "stdutc": "2024-02-06T00:00:00Z",
                            "sta": "0001-01-01T00:00:00",
                            "stautc": "0001-01-01T00:00:00",
                            "duration": "-738921.00:00:00",
                            "scheduleType": "LowestPrice",
                            "segments": [
                                {
                                    "id": "4355437E4D41447E3030317E41567E323032342D30322D30367E",
                                    "origin": "CUC",
                                    "destination": "MAD",
                                    "std": "2024-02-06T00:00:00",
                                    "stdutc": "2024-02-06T00:00:00Z",
                                    "sta": "0001-01-01T00:00:00",
                                    "stautc": "0001-01-01T00:00:00",
                                    "duration": "-738921.00:00:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "MAD",
                                            "std": "2024-02-06T00:00:00",
                                            "stdutc": "2024-02-06T00:00:00Z",
                                            "sta": "0001-01-01T00:00:00",
                                            "stautc": "0001-01-01T00:00:00",
                                            "duration": "00:00:00",
                                            "referenceId": ""
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Default",
                                        "number": "001"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E7E4144547E7E",
                                    "fareBasisCode": "PAOB1BRR",
                                    "productClass": "S",
                                    "availableSeats": 0,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "recommended": false
                                }
                            ],
                            "availability": "Available",
                            "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333232443330333637457E"
                        }
                    ]
                },
                {
                    "date": "2024-02-07T00:00:00",
                    "availability": "Available",
                    "journeys": [
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-02-07T00:00:00",
                            "stdutc": "2024-02-07T00:00:00Z",
                            "sta": "0001-01-01T00:00:00",
                            "stautc": "0001-01-01T00:00:00",
                            "duration": "-738922.00:00:00",
                            "scheduleType": "LowestPrice",
                            "segments": [
                                {
                                    "id": "4355437E4D41447E3030317E41567E323032342D30322D30377E",
                                    "origin": "CUC",
                                    "destination": "MAD",
                                    "std": "2024-02-07T00:00:00",
                                    "stdutc": "2024-02-07T00:00:00Z",
                                    "sta": "0001-01-01T00:00:00",
                                    "stautc": "0001-01-01T00:00:00",
                                    "duration": "-738922.00:00:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "MAD",
                                            "std": "2024-02-07T00:00:00",
                                            "stdutc": "2024-02-07T00:00:00Z",
                                            "sta": "0001-01-01T00:00:00",
                                            "stautc": "0001-01-01T00:00:00",
                                            "duration": "00:00:00",
                                            "referenceId": ""
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Default",
                                        "number": "001"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E7E4144547E7E",
                                    "fareBasisCode": "PAOB1BRR",
                                    "productClass": "S",
                                    "availableSeats": 0,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "recommended": false
                                }
                            ],
                            "availability": "Available",
                            "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333232443330333737457E"
                        }
                    ]
                },
                {
                    "date": "2024-02-08T00:00:00",
                    "availability": "Available",
                    "journeys": [
                        {
                            "origin": "CUC",
                            "destination": "MAD",
                            "std": "2024-02-08T00:00:00",
                            "stdutc": "2024-02-08T00:00:00Z",
                            "sta": "0001-01-01T00:00:00",
                            "stautc": "0001-01-01T00:00:00",
                            "duration": "-738923.00:00:00",
                            "scheduleType": "LowestPrice",
                            "segments": [
                                {
                                    "id": "4355437E4D41447E3030317E41567E323032342D30322D30387E",
                                    "origin": "CUC",
                                    "destination": "MAD",
                                    "std": "2024-02-08T00:00:00",
                                    "stdutc": "2024-02-08T00:00:00Z",
                                    "sta": "0001-01-01T00:00:00",
                                    "stautc": "0001-01-01T00:00:00",
                                    "duration": "-738923.00:00:00",
                                    "legs": [
                                        {
                                            "origin": "CUC",
                                            "destination": "MAD",
                                            "std": "2024-02-08T00:00:00",
                                            "stdutc": "2024-02-08T00:00:00Z",
                                            "sta": "0001-01-01T00:00:00",
                                            "stautc": "0001-01-01T00:00:00",
                                            "duration": "00:00:00",
                                            "referenceId": ""
                                        }
                                    ],
                                    "transport": {
                                        "carrier": {
                                            "code": "AV"
                                        },
                                        "type": "Default",
                                        "number": "001"
                                    }
                                }
                            ],
                            "fares": [
                                {
                                    "id": "537E7E50414F42314252527E7E4144547E7E",
                                    "fareBasisCode": "PAOB1BRR",
                                    "productClass": "S",
                                    "availableSeats": 0,
                                    "paxCode": "ADT",
                                    "serviceBundleCode": "",
                                    "totalAmount": 2193635,
                                    "charges": [
                                        {
                                            "type": "Fare",
                                            "code": "S",
                                            "amount": 2193635,
                                            "currency": "COP"
                                        }
                                    ],
                                    "recommended": false
                                }
                            ],
                            "availability": "Available",
                            "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333232443330333837457E"
                        }
                    ]
                }
            ]
        },
        {
            "id": "2",
            "schedules": []
        }
    ],
    "error": {
        "code": "",
        "description": "",
        "trace": ""
    },
    "success": true,
    "result": {
        "result": true,
        "data": [
            {
                "id": "1",
                "currency": "COP",
                "schedules": [
                    {
                        "date": "2024-01-25T00:00:00",
                        "availability": "Available",
                        "journeys": [
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-01-25T00:00:00",
                                "stdutc": "2024-01-25T00:00:00Z",
                                "sta": "0001-01-01T00:00:00",
                                "stautc": "0001-01-01T00:00:00",
                                "duration": "-738909.00:00:00",
                                "scheduleType": "LowestPrice",
                                "segments": [
                                    {
                                        "id": "4355437E4D41447E3030317E41567E323032342D30312D32357E",
                                        "origin": "CUC",
                                        "destination": "MAD",
                                        "std": "2024-01-25T00:00:00",
                                        "stdutc": "2024-01-25T00:00:00Z",
                                        "sta": "0001-01-01T00:00:00",
                                        "stautc": "0001-01-01T00:00:00",
                                        "duration": "-738909.00:00:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "MAD",
                                                "std": "2024-01-25T00:00:00",
                                                "stdutc": "2024-01-25T00:00:00Z",
                                                "sta": "0001-01-01T00:00:00",
                                                "stautc": "0001-01-01T00:00:00",
                                                "duration": "00:00:00",
                                                "referenceId": ""
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Default",
                                            "number": "001"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E45454F42314252527E7E4144547E7E",
                                        "fareBasisCode": "EEOB1BRR",
                                        "productClass": "S",
                                        "availableSeats": 0,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 3194625,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 3194625,
                                                "currency": "COP"
                                            }
                                        ],
                                        "recommended": false
                                    }
                                ],
                                "availability": "Available",
                                "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333132443332333537457E"
                            }
                        ]
                    },
                    {
                        "date": "2024-01-26T00:00:00",
                        "availability": "Available",
                        "journeys": [
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-01-26T00:00:00",
                                "stdutc": "2024-01-26T00:00:00Z",
                                "sta": "0001-01-01T00:00:00",
                                "stautc": "0001-01-01T00:00:00",
                                "duration": "-738910.00:00:00",
                                "scheduleType": "LowestPrice",
                                "segments": [
                                    {
                                        "id": "4355437E4D41447E3030317E41567E323032342D30312D32367E",
                                        "origin": "CUC",
                                        "destination": "MAD",
                                        "std": "2024-01-26T00:00:00",
                                        "stdutc": "2024-01-26T00:00:00Z",
                                        "sta": "0001-01-01T00:00:00",
                                        "stautc": "0001-01-01T00:00:00",
                                        "duration": "-738910.00:00:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "MAD",
                                                "std": "2024-01-26T00:00:00",
                                                "stdutc": "2024-01-26T00:00:00Z",
                                                "sta": "0001-01-01T00:00:00",
                                                "stautc": "0001-01-01T00:00:00",
                                                "duration": "00:00:00",
                                                "referenceId": ""
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Default",
                                            "number": "001"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E7E4144547E7E",
                                        "fareBasisCode": "PAOB1BRR",
                                        "productClass": "S",
                                        "availableSeats": 0,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "recommended": false
                                    }
                                ],
                                "availability": "Available",
                                "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333132443332333637457E"
                            }
                        ]
                    },
                    {
                        "date": "2024-01-27T00:00:00",
                        "availability": "Available",
                        "journeys": [
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-01-27T00:00:00",
                                "stdutc": "2024-01-27T00:00:00Z",
                                "sta": "0001-01-01T00:00:00",
                                "stautc": "0001-01-01T00:00:00",
                                "duration": "-738911.00:00:00",
                                "scheduleType": "LowestPrice",
                                "segments": [
                                    {
                                        "id": "4355437E4D41447E3030317E41567E323032342D30312D32377E",
                                        "origin": "CUC",
                                        "destination": "MAD",
                                        "std": "2024-01-27T00:00:00",
                                        "stdutc": "2024-01-27T00:00:00Z",
                                        "sta": "0001-01-01T00:00:00",
                                        "stautc": "0001-01-01T00:00:00",
                                        "duration": "-738911.00:00:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "MAD",
                                                "std": "2024-01-27T00:00:00",
                                                "stdutc": "2024-01-27T00:00:00Z",
                                                "sta": "0001-01-01T00:00:00",
                                                "stautc": "0001-01-01T00:00:00",
                                                "duration": "00:00:00",
                                                "referenceId": ""
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Default",
                                            "number": "001"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E4C454F42314252527E7E4144547E7E",
                                        "fareBasisCode": "LEOB1BRR",
                                        "productClass": "S",
                                        "availableSeats": 0,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2616195,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2616195,
                                                "currency": "COP"
                                            }
                                        ],
                                        "recommended": false
                                    }
                                ],
                                "availability": "Available",
                                "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333132443332333737457E"
                            }
                        ]
                    },
                    {
                        "date": "2024-01-28T00:00:00",
                        "availability": "Available",
                        "journeys": [
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-01-28T00:00:00",
                                "stdutc": "2024-01-28T00:00:00Z",
                                "sta": "0001-01-01T00:00:00",
                                "stautc": "0001-01-01T00:00:00",
                                "duration": "-738912.00:00:00",
                                "scheduleType": "LowestPrice",
                                "segments": [
                                    {
                                        "id": "4355437E4D41447E3030317E41567E323032342D30312D32387E",
                                        "origin": "CUC",
                                        "destination": "MAD",
                                        "std": "2024-01-28T00:00:00",
                                        "stdutc": "2024-01-28T00:00:00Z",
                                        "sta": "0001-01-01T00:00:00",
                                        "stautc": "0001-01-01T00:00:00",
                                        "duration": "-738912.00:00:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "MAD",
                                                "std": "2024-01-28T00:00:00",
                                                "stdutc": "2024-01-28T00:00:00Z",
                                                "sta": "0001-01-01T00:00:00",
                                                "stautc": "0001-01-01T00:00:00",
                                                "duration": "00:00:00",
                                                "referenceId": ""
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Default",
                                            "number": "001"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E7E4144547E7E",
                                        "fareBasisCode": "PAOB1BRR",
                                        "productClass": "S",
                                        "availableSeats": 0,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "recommended": false
                                    }
                                ],
                                "availability": "Available",
                                "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333132443332333837457E"
                            }
                        ]
                    },
                    {
                        "date": "2024-01-29T00:00:00",
                        "availability": "Available",
                        "journeys": [
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-01-29T00:00:00",
                                "stdutc": "2024-01-29T00:00:00Z",
                                "sta": "0001-01-01T00:00:00",
                                "stautc": "0001-01-01T00:00:00",
                                "duration": "-738913.00:00:00",
                                "scheduleType": "LowestPrice",
                                "segments": [
                                    {
                                        "id": "4355437E4D41447E3030317E41567E323032342D30312D32397E",
                                        "origin": "CUC",
                                        "destination": "MAD",
                                        "std": "2024-01-29T00:00:00",
                                        "stdutc": "2024-01-29T00:00:00Z",
                                        "sta": "0001-01-01T00:00:00",
                                        "stautc": "0001-01-01T00:00:00",
                                        "duration": "-738913.00:00:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "MAD",
                                                "std": "2024-01-29T00:00:00",
                                                "stdutc": "2024-01-29T00:00:00Z",
                                                "sta": "0001-01-01T00:00:00",
                                                "stautc": "0001-01-01T00:00:00",
                                                "duration": "00:00:00",
                                                "referenceId": ""
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Default",
                                            "number": "001"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E7E4144547E7E",
                                        "fareBasisCode": "PAOB1BRR",
                                        "productClass": "S",
                                        "availableSeats": 0,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "recommended": false
                                    }
                                ],
                                "availability": "Available",
                                "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333132443332333937457E"
                            }
                        ]
                    },
                    {
                        "date": "2024-01-30T00:00:00",
                        "availability": "Available",
                        "journeys": [
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-01-30T00:00:00",
                                "stdutc": "2024-01-30T00:00:00Z",
                                "sta": "0001-01-01T00:00:00",
                                "stautc": "0001-01-01T00:00:00",
                                "duration": "-738914.00:00:00",
                                "scheduleType": "LowestPrice",
                                "segments": [
                                    {
                                        "id": "4355437E4D41447E3030317E41567E323032342D30312D33307E",
                                        "origin": "CUC",
                                        "destination": "MAD",
                                        "std": "2024-01-30T00:00:00",
                                        "stdutc": "2024-01-30T00:00:00Z",
                                        "sta": "0001-01-01T00:00:00",
                                        "stautc": "0001-01-01T00:00:00",
                                        "duration": "-738914.00:00:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "MAD",
                                                "std": "2024-01-30T00:00:00",
                                                "stdutc": "2024-01-30T00:00:00Z",
                                                "sta": "0001-01-01T00:00:00",
                                                "stautc": "0001-01-01T00:00:00",
                                                "duration": "00:00:00",
                                                "referenceId": ""
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Default",
                                            "number": "001"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E7E4144547E7E",
                                        "fareBasisCode": "PAOB1BRR",
                                        "productClass": "S",
                                        "availableSeats": 0,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "recommended": false
                                    }
                                ],
                                "availability": "Available",
                                "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333132443333333037457E"
                            }
                        ]
                    },
                    {
                        "date": "2024-01-31T00:00:00",
                        "availability": "Available",
                        "journeys": [
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-01-31T00:00:00",
                                "stdutc": "2024-01-31T00:00:00Z",
                                "sta": "0001-01-01T00:00:00",
                                "stautc": "0001-01-01T00:00:00",
                                "duration": "-738915.00:00:00",
                                "scheduleType": "LowestPrice",
                                "segments": [
                                    {
                                        "id": "4355437E4D41447E3030317E41567E323032342D30312D33317E",
                                        "origin": "CUC",
                                        "destination": "MAD",
                                        "std": "2024-01-31T00:00:00",
                                        "stdutc": "2024-01-31T00:00:00Z",
                                        "sta": "0001-01-01T00:00:00",
                                        "stautc": "0001-01-01T00:00:00",
                                        "duration": "-738915.00:00:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "MAD",
                                                "std": "2024-01-31T00:00:00",
                                                "stdutc": "2024-01-31T00:00:00Z",
                                                "sta": "0001-01-01T00:00:00",
                                                "stautc": "0001-01-01T00:00:00",
                                                "duration": "00:00:00",
                                                "referenceId": ""
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Default",
                                            "number": "001"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E7E4144547E7E",
                                        "fareBasisCode": "PAOB1BRR",
                                        "productClass": "S",
                                        "availableSeats": 0,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "recommended": false
                                    }
                                ],
                                "availability": "Available",
                                "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333132443333333137457E"
                            }
                        ]
                    },
                    {
                        "date": "2024-02-01T00:00:00",
                        "availability": "Available",
                        "journeys": [
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-02-01T00:00:00",
                                "stdutc": "2024-02-01T00:00:00Z",
                                "sta": "0001-01-01T00:00:00",
                                "stautc": "0001-01-01T00:00:00",
                                "duration": "-738916.00:00:00",
                                "scheduleType": "LowestPrice",
                                "segments": [
                                    {
                                        "id": "4355437E4D41447E3030317E41567E323032342D30322D30317E",
                                        "origin": "CUC",
                                        "destination": "MAD",
                                        "std": "2024-02-01T00:00:00",
                                        "stdutc": "2024-02-01T00:00:00Z",
                                        "sta": "0001-01-01T00:00:00",
                                        "stautc": "0001-01-01T00:00:00",
                                        "duration": "-738916.00:00:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "MAD",
                                                "std": "2024-02-01T00:00:00",
                                                "stdutc": "2024-02-01T00:00:00Z",
                                                "sta": "0001-01-01T00:00:00",
                                                "stautc": "0001-01-01T00:00:00",
                                                "duration": "00:00:00",
                                                "referenceId": ""
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Default",
                                            "number": "001"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E7E4144547E7E",
                                        "fareBasisCode": "PAOB1BRR",
                                        "productClass": "S",
                                        "availableSeats": 0,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "recommended": false
                                    }
                                ],
                                "availability": "Available",
                                "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333232443330333137457E"
                            },
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-02-01T09:13:00",
                                "stdutc": "2024-02-01T14:13:00",
                                "sta": "2024-02-02T06:30:00",
                                "stautc": "2024-02-02T05:30:00",
                                "duration": "15:17:00",
                                "referenceId": "4",
                                "scheduleType": "AllPrice",
                                "segments": [
                                    {
                                        "id": "4355437E424F477E393432397E41567E323032342D30322D30317E353334353437324434313536333933343332333932443433353534333432344634373244333233303332333432443330333232443330333132443330333933313333",
                                        "referenceId": "SEG-AV9429-CUCBOG-2024-02-01-0913",
                                        "origin": "CUC",
                                        "destination": "BOG",
                                        "std": "2024-02-01T09:13:00",
                                        "stdutc": "2024-02-01T14:13:00",
                                        "sta": "2024-02-01T10:29:00",
                                        "stautc": "2024-02-01T15:29:00",
                                        "duration": "01:16:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "BOG",
                                                "originTerminal": "",
                                                "destinationTerminal": "1",
                                                "std": "2024-02-01T09:13:00",
                                                "stdutc": "2024-02-01T14:13:00",
                                                "sta": "2024-02-01T10:29:00",
                                                "stautc": "2024-02-01T15:29:00",
                                                "duration": "01:16:00",
                                                "legInfo": {
                                                    "isSubjectedToGovernmentApproval": false
                                                }
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Plane",
                                            "model": "AIRBUS A320",
                                            "number": "9429"
                                        }
                                    },
                                    {
                                        "id": "424F477E4D41447E32367E41567E323032342D30322D30317E3533343534373244343135363332333632443432344634373444343134343244333233303332333432443330333232443330333132443331333433353330",
                                        "referenceId": "SEG-AV26-BOGMAD-2024-02-01-1450",
                                        "origin": "BOG",
                                        "destination": "MAD",
                                        "std": "2024-02-01T14:50:00",
                                        "stdutc": "2024-02-01T19:50:00",
                                        "sta": "2024-02-02T06:30:00",
                                        "stautc": "2024-02-02T05:30:00",
                                        "duration": "09:40:00",
                                        "legs": [
                                            {
                                                "origin": "BOG",
                                                "destination": "MAD",
                                                "originTerminal": "1",
                                                "destinationTerminal": "4S",
                                                "std": "2024-02-01T14:50:00",
                                                "stdutc": "2024-02-01T19:50:00",
                                                "sta": "2024-02-02T06:30:00",
                                                "stautc": "2024-02-02T05:30:00",
                                                "duration": "09:40:00",
                                                "legInfo": {
                                                    "isSubjectedToGovernmentApproval": false
                                                }
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Plane",
                                            "model": "BOEING 787-8",
                                            "number": "26"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433313244333432443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-1-4-1",
                                        "fareBasisCode": "PAOB1BRR",
                                        "classOfService": "P^P",
                                        "productClass": "S",
                                        "availableSeats": 9,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN1",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN2",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 783300",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN3",
                                                "name": "refund",
                                                "description": "isReFundAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "C0CCF2",
                                                "name": "ABAG",
                                                "description": "1ST CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "FBA1",
                                                "name": "freeCheckedBaggage",
                                                "description": "",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "4D7E7E50414F42324252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433323244333432443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-2-4-1",
                                        "fareBasisCode": "PAOB2BRR",
                                        "classOfService": "P^P",
                                        "productClass": "M",
                                        "availableSeats": 9,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2554605,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "M",
                                                "amount": 2554605,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN1",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN2",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 783300",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN3",
                                                "name": "refund",
                                                "description": "isReFundAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA2-0GOC3",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO50LB 23KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "4C7E7E50414F42334252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433333244333432443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-3-4-1",
                                        "fareBasisCode": "PAOB3BRR",
                                        "classOfService": "P^P",
                                        "productClass": "L",
                                        "availableSeats": 9,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2858275,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "L",
                                                "amount": 2858275,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN4",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN5",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN6",
                                                "name": "refund",
                                                "description": "isReFundAllowed: refundPenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA2-0GOC3",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO50LB 23KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "58584C7E7E445A4F42354254527E595E447E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433353244333432443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-5-4-1",
                                        "fareBasisCode": "DZOB5BTR",
                                        "classOfService": "Y^D",
                                        "productClass": "XXL",
                                        "availableSeats": 5,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 5516620,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "XXL",
                                                "amount": 5516620,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN4",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN5",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN6",
                                                "name": "refund",
                                                "description": "isReFundAllowed: refundPenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA3-0FMC4",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO70LB 32KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "included"
                                            }
                                        ]
                                    }
                                ],
                                "availability": "Available",
                                "id": "3433353534333745343234463437374533393334333233393745343135363745333233303332333432443330333232443330333137453335333333343335333433373332343433343331333533363333333933333334333333323333333933323434333433333335333533343333333433323334343633343337333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333303333333933333331333333337E3432344634373745344434313434374533323336374534313536374533323330333233343244333033323244333033313745333533333334333533343337333234343334333133353336333333323333333633323434333433323334343633343337333434343334333133343334333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333433333335333333307E3334"
                            },
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-02-01T09:59:00",
                                "stdutc": "2024-02-01T14:59:00",
                                "sta": "2024-02-02T06:30:00",
                                "stautc": "2024-02-02T05:30:00",
                                "duration": "14:31:00",
                                "referenceId": "3",
                                "scheduleType": "AllPrice",
                                "segments": [
                                    {
                                        "id": "4355437E424F477E393332317E41567E323032342D30322D30317E353334353437324434313536333933333332333132443433353534333432344634373244333233303332333432443330333232443330333132443330333933353339",
                                        "referenceId": "SEG-AV9321-CUCBOG-2024-02-01-0959",
                                        "origin": "CUC",
                                        "destination": "BOG",
                                        "std": "2024-02-01T09:59:00",
                                        "stdutc": "2024-02-01T14:59:00",
                                        "sta": "2024-02-01T11:14:00",
                                        "stautc": "2024-02-01T16:14:00",
                                        "duration": "01:15:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "BOG",
                                                "originTerminal": "",
                                                "destinationTerminal": "1",
                                                "std": "2024-02-01T09:59:00",
                                                "stdutc": "2024-02-01T14:59:00",
                                                "sta": "2024-02-01T11:14:00",
                                                "stautc": "2024-02-01T16:14:00",
                                                "duration": "01:15:00",
                                                "legInfo": {
                                                    "isSubjectedToGovernmentApproval": false
                                                }
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Plane",
                                            "model": "AIRBUS A320",
                                            "number": "9321"
                                        }
                                    },
                                    {
                                        "id": "424F477E4D41447E32367E41567E323032342D30322D30317E3533343534373244343135363332333632443432344634373444343134343244333233303332333432443330333232443330333132443331333433353330",
                                        "referenceId": "SEG-AV26-BOGMAD-2024-02-01-1450",
                                        "origin": "BOG",
                                        "destination": "MAD",
                                        "std": "2024-02-01T14:50:00",
                                        "stdutc": "2024-02-01T19:50:00",
                                        "sta": "2024-02-02T06:30:00",
                                        "stautc": "2024-02-02T05:30:00",
                                        "duration": "09:40:00",
                                        "legs": [
                                            {
                                                "origin": "BOG",
                                                "destination": "MAD",
                                                "originTerminal": "1",
                                                "destinationTerminal": "4S",
                                                "std": "2024-02-01T14:50:00",
                                                "stdutc": "2024-02-01T19:50:00",
                                                "sta": "2024-02-02T06:30:00",
                                                "stautc": "2024-02-02T05:30:00",
                                                "duration": "09:40:00",
                                                "legInfo": {
                                                    "isSubjectedToGovernmentApproval": false
                                                }
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Plane",
                                            "model": "BOEING 787-8",
                                            "number": "26"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433313244333332443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-1-3-1",
                                        "fareBasisCode": "PAOB1BRR",
                                        "classOfService": "P^P",
                                        "productClass": "S",
                                        "availableSeats": 9,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN1",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN2",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 783300",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN3",
                                                "name": "refund",
                                                "description": "isReFundAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "C0CCF2",
                                                "name": "ABAG",
                                                "description": "1ST CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "FBA1",
                                                "name": "freeCheckedBaggage",
                                                "description": "",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "4D7E7E50414F42324252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433323244333332443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-2-3-1",
                                        "fareBasisCode": "PAOB2BRR",
                                        "classOfService": "P^P",
                                        "productClass": "M",
                                        "availableSeats": 9,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2554605,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "M",
                                                "amount": 2554605,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN1",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN2",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 783300",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN3",
                                                "name": "refund",
                                                "description": "isReFundAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA2-0GOC3",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO50LB 23KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "4C7E7E50414F42334252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433333244333332443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-3-3-1",
                                        "fareBasisCode": "PAOB3BRR",
                                        "classOfService": "P^P",
                                        "productClass": "L",
                                        "availableSeats": 9,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2858275,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "L",
                                                "amount": 2858275,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN4",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN5",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN6",
                                                "name": "refund",
                                                "description": "isReFundAllowed: refundPenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA2-0GOC3",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO50LB 23KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "58584C7E7E445A4F42354254527E595E447E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433353244333332443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-5-3-1",
                                        "fareBasisCode": "DZOB5BTR",
                                        "classOfService": "Y^D",
                                        "productClass": "XXL",
                                        "availableSeats": 5,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 5516620,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "XXL",
                                                "amount": 5516620,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN4",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN5",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN6",
                                                "name": "refund",
                                                "description": "isReFundAllowed: refundPenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA3-0FMC4",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO70LB 32KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "included"
                                            }
                                        ]
                                    }
                                ],
                                "availability": "Available",
                                "id": "3433353534333745343234463437374533393333333233313745343135363745333233303332333432443330333232443330333137453335333333343335333433373332343433343331333533363333333933333333333333323333333133323434333433333335333533343333333433323334343633343337333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333303333333933333335333333397E3432344634373745344434313434374533323336374534313536374533323330333233343244333033323244333033313745333533333334333533343337333234343334333133353336333333323333333633323434333433323334343633343337333434343334333133343334333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333433333335333333307E3333"
                            },
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-02-01T11:35:00",
                                "stdutc": "2024-02-01T16:35:00",
                                "sta": "2024-02-02T06:30:00",
                                "stautc": "2024-02-02T05:30:00",
                                "duration": "12:55:00",
                                "referenceId": "1",
                                "scheduleType": "AllPrice",
                                "segments": [
                                    {
                                        "id": "4355437E424F477E393435397E41567E323032342D30322D30317E353334353437324434313536333933343335333932443433353534333432344634373244333233303332333432443330333232443330333132443331333133333335",
                                        "referenceId": "SEG-AV9459-CUCBOG-2024-02-01-1135",
                                        "origin": "CUC",
                                        "destination": "BOG",
                                        "std": "2024-02-01T11:35:00",
                                        "stdutc": "2024-02-01T16:35:00",
                                        "sta": "2024-02-01T12:51:00",
                                        "stautc": "2024-02-01T17:51:00",
                                        "duration": "01:16:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "BOG",
                                                "originTerminal": "",
                                                "destinationTerminal": "1",
                                                "std": "2024-02-01T11:35:00",
                                                "stdutc": "2024-02-01T16:35:00",
                                                "sta": "2024-02-01T12:51:00",
                                                "stautc": "2024-02-01T17:51:00",
                                                "duration": "01:16:00",
                                                "legInfo": {
                                                    "isSubjectedToGovernmentApproval": false
                                                }
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Plane",
                                            "model": "AIRBUS A320",
                                            "number": "9459"
                                        }
                                    },
                                    {
                                        "id": "424F477E4D41447E32367E41567E323032342D30322D30317E3533343534373244343135363332333632443432344634373444343134343244333233303332333432443330333232443330333132443331333433353330",
                                        "referenceId": "SEG-AV26-BOGMAD-2024-02-01-1450",
                                        "origin": "BOG",
                                        "destination": "MAD",
                                        "std": "2024-02-01T14:50:00",
                                        "stdutc": "2024-02-01T19:50:00",
                                        "sta": "2024-02-02T06:30:00",
                                        "stautc": "2024-02-02T05:30:00",
                                        "duration": "09:40:00",
                                        "legs": [
                                            {
                                                "origin": "BOG",
                                                "destination": "MAD",
                                                "originTerminal": "1",
                                                "destinationTerminal": "4S",
                                                "std": "2024-02-01T14:50:00",
                                                "stdutc": "2024-02-01T19:50:00",
                                                "sta": "2024-02-02T06:30:00",
                                                "stautc": "2024-02-02T05:30:00",
                                                "duration": "09:40:00",
                                                "legInfo": {
                                                    "isSubjectedToGovernmentApproval": false
                                                }
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Plane",
                                            "model": "BOEING 787-8",
                                            "number": "26"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433313244333132443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-1-1-1",
                                        "fareBasisCode": "PAOB1BRR",
                                        "classOfService": "P^P",
                                        "productClass": "S",
                                        "availableSeats": 5,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN1",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN2",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 783300",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN3",
                                                "name": "refund",
                                                "description": "isReFundAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "C0CCF2",
                                                "name": "ABAG",
                                                "description": "1ST CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "FBA1",
                                                "name": "freeCheckedBaggage",
                                                "description": "",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "4D7E7E50414F42324252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433323244333132443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-2-1-1",
                                        "fareBasisCode": "PAOB2BRR",
                                        "classOfService": "P^P",
                                        "productClass": "M",
                                        "availableSeats": 5,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2554605,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "M",
                                                "amount": 2554605,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN1",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN2",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 783300",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN3",
                                                "name": "refund",
                                                "description": "isReFundAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA2-0GOC3",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO50LB 23KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "4C7E7E50414F42334252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433333244333132443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-3-1-1",
                                        "fareBasisCode": "PAOB3BRR",
                                        "classOfService": "P^P",
                                        "productClass": "L",
                                        "availableSeats": 5,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2858275,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "L",
                                                "amount": 2858275,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN4",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN5",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN6",
                                                "name": "refund",
                                                "description": "isReFundAllowed: refundPenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA2-0GOC3",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO50LB 23KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "58584C7E7E445A4F42354254527E595E447E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433353244333132443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-5-1-1",
                                        "fareBasisCode": "DZOB5BTR",
                                        "classOfService": "Y^D",
                                        "productClass": "XXL",
                                        "availableSeats": 5,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 5516620,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "XXL",
                                                "amount": 5516620,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN4",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN5",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN6",
                                                "name": "refund",
                                                "description": "isReFundAllowed: refundPenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA3-0FMC4",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO70LB 32KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "included"
                                            }
                                        ]
                                    }
                                ],
                                "availability": "Available",
                                "id": "3433353534333745343234463437374533393334333533393745343135363745333233303332333432443330333232443330333137453335333333343335333433373332343433343331333533363333333933333334333333353333333933323434333433333335333533343333333433323334343633343337333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333133333333333333357E3432344634373745344434313434374533323336374534313536374533323330333233343244333033323244333033313745333533333334333533343337333234343334333133353336333333323333333633323434333433323334343633343337333434343334333133343334333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333433333335333333307E3331"
                            },
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-02-01T14:43:00",
                                "stdutc": "2024-02-01T19:43:00",
                                "sta": "2024-02-02T13:05:00",
                                "stautc": "2024-02-02T12:05:00",
                                "duration": "16:22:00",
                                "referenceId": "6",
                                "scheduleType": "AllPrice",
                                "segments": [
                                    {
                                        "id": "4355437E424F477E353232397E41567E323032342D30322D30317E353334353437324434313536333533323332333932443433353534333432344634373244333233303332333432443330333232443330333132443331333433343333",
                                        "referenceId": "SEG-AV5229-CUCBOG-2024-02-01-1443",
                                        "origin": "CUC",
                                        "destination": "BOG",
                                        "std": "2024-02-01T14:43:00",
                                        "stdutc": "2024-02-01T19:43:00",
                                        "sta": "2024-02-01T15:59:00",
                                        "stautc": "2024-02-01T20:59:00",
                                        "duration": "01:16:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "BOG",
                                                "originTerminal": "",
                                                "destinationTerminal": "1",
                                                "std": "2024-02-01T14:43:00",
                                                "stdutc": "2024-02-01T19:43:00",
                                                "sta": "2024-02-01T15:59:00",
                                                "stautc": "2024-02-01T20:59:00",
                                                "duration": "01:16:00",
                                                "legInfo": {
                                                    "isSubjectedToGovernmentApproval": false
                                                }
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Plane",
                                            "model": "AIRBUS A320",
                                            "number": "5229"
                                        }
                                    },
                                    {
                                        "id": "424F477E4D41447E31307E41567E323032342D30322D30317E3533343534373244343135363331333032443432344634373444343134343244333233303332333432443330333232443330333132443332333133323335",
                                        "referenceId": "SEG-AV10-BOGMAD-2024-02-01-2125",
                                        "origin": "BOG",
                                        "destination": "MAD",
                                        "std": "2024-02-01T21:25:00",
                                        "stdutc": "2024-02-02T02:25:00",
                                        "sta": "2024-02-02T13:05:00",
                                        "stautc": "2024-02-02T12:05:00",
                                        "duration": "09:40:00",
                                        "legs": [
                                            {
                                                "origin": "BOG",
                                                "destination": "MAD",
                                                "originTerminal": "1",
                                                "destinationTerminal": "4S",
                                                "std": "2024-02-01T21:25:00",
                                                "stdutc": "2024-02-02T02:25:00",
                                                "sta": "2024-02-02T13:05:00",
                                                "stautc": "2024-02-02T12:05:00",
                                                "duration": "09:40:00",
                                                "legInfo": {
                                                    "isSubjectedToGovernmentApproval": false
                                                }
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Plane",
                                            "model": "BOEING 787-8",
                                            "number": "10"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433313244333632443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-1-6-1",
                                        "fareBasisCode": "PAOB1BRR",
                                        "classOfService": "P^P",
                                        "productClass": "S",
                                        "availableSeats": 9,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN1",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN2",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 783300",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN3",
                                                "name": "refund",
                                                "description": "isReFundAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "C0CCF2",
                                                "name": "ABAG",
                                                "description": "1ST CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "FBA1",
                                                "name": "freeCheckedBaggage",
                                                "description": "",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "4D7E7E50414F42324252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433323244333632443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-2-6-1",
                                        "fareBasisCode": "PAOB2BRR",
                                        "classOfService": "P^P",
                                        "productClass": "M",
                                        "availableSeats": 9,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2554605,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "M",
                                                "amount": 2554605,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN1",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN2",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 783300",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN3",
                                                "name": "refund",
                                                "description": "isReFundAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA2-0GOC3",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO50LB 23KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "4C7E7E50414F42334252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433333244333632443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-3-6-1",
                                        "fareBasisCode": "PAOB3BRR",
                                        "classOfService": "P^P",
                                        "productClass": "L",
                                        "availableSeats": 9,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2858275,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "L",
                                                "amount": 2858275,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN4",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN5",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN6",
                                                "name": "refund",
                                                "description": "isReFundAllowed: refundPenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA2-0GOC3",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO50LB 23KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "58584C7E7E435A4F42354252527E595E437E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433383244333632443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-8-6-1",
                                        "fareBasisCode": "CZOB5BRR",
                                        "classOfService": "Y^C",
                                        "productClass": "XXL",
                                        "availableSeats": 4,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 9914340,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "XXL",
                                                "amount": 9914340,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN4",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN5",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN6",
                                                "name": "refund",
                                                "description": "isReFundAllowed: refundPenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA3-0FMC4",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO70LB 32KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "included"
                                            }
                                        ]
                                    }
                                ],
                                "availability": "Available",
                                "id": "3433353534333745343234463437374533353332333233393745343135363745333233303332333432443330333232443330333137453335333333343335333433373332343433343331333533363333333533333332333333323333333933323434333433333335333533343333333433323334343633343337333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333433333334333333337E3432344634373745344434313434374533313330374534313536374533323330333233343244333033323244333033313745333533333334333533343337333234343334333133353336333333313333333033323434333433323334343633343337333434343334333133343334333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333323333333133333332333333357E3336"
                            },
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-02-01T15:28:00",
                                "stdutc": "2024-02-01T20:28:00",
                                "sta": "2024-02-02T13:05:00",
                                "stautc": "2024-02-02T12:05:00",
                                "duration": "15:37:00",
                                "referenceId": "5",
                                "scheduleType": "AllPrice",
                                "segments": [
                                    {
                                        "id": "4355437E424F477E353232377E41567E323032342D30322D30317E353334353437324434313536333533323332333732443433353534333432344634373244333233303332333432443330333232443330333132443331333533323338",
                                        "referenceId": "SEG-AV5227-CUCBOG-2024-02-01-1528",
                                        "origin": "CUC",
                                        "destination": "BOG",
                                        "std": "2024-02-01T15:28:00",
                                        "stdutc": "2024-02-01T20:28:00",
                                        "sta": "2024-02-01T16:44:00",
                                        "stautc": "2024-02-01T21:44:00",
                                        "duration": "01:16:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "BOG",
                                                "originTerminal": "",
                                                "destinationTerminal": "1",
                                                "std": "2024-02-01T15:28:00",
                                                "stdutc": "2024-02-01T20:28:00",
                                                "sta": "2024-02-01T16:44:00",
                                                "stautc": "2024-02-01T21:44:00",
                                                "duration": "01:16:00",
                                                "legInfo": {
                                                    "isSubjectedToGovernmentApproval": false
                                                }
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Plane",
                                            "model": "AIRBUS A320",
                                            "number": "5227"
                                        }
                                    },
                                    {
                                        "id": "424F477E4D41447E31307E41567E323032342D30322D30317E3533343534373244343135363331333032443432344634373444343134343244333233303332333432443330333232443330333132443332333133323335",
                                        "referenceId": "SEG-AV10-BOGMAD-2024-02-01-2125",
                                        "origin": "BOG",
                                        "destination": "MAD",
                                        "std": "2024-02-01T21:25:00",
                                        "stdutc": "2024-02-02T02:25:00",
                                        "sta": "2024-02-02T13:05:00",
                                        "stautc": "2024-02-02T12:05:00",
                                        "duration": "09:40:00",
                                        "legs": [
                                            {
                                                "origin": "BOG",
                                                "destination": "MAD",
                                                "originTerminal": "1",
                                                "destinationTerminal": "4S",
                                                "std": "2024-02-01T21:25:00",
                                                "stdutc": "2024-02-02T02:25:00",
                                                "sta": "2024-02-02T13:05:00",
                                                "stautc": "2024-02-02T12:05:00",
                                                "duration": "09:40:00",
                                                "legInfo": {
                                                    "isSubjectedToGovernmentApproval": false
                                                }
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Plane",
                                            "model": "BOEING 787-8",
                                            "number": "10"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433313244333532443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-1-5-1",
                                        "fareBasisCode": "PAOB1BRR",
                                        "classOfService": "P^P",
                                        "productClass": "S",
                                        "availableSeats": 9,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN1",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN2",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 783300",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN3",
                                                "name": "refund",
                                                "description": "isReFundAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "C0CCF2",
                                                "name": "ABAG",
                                                "description": "1ST CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "FBA1",
                                                "name": "freeCheckedBaggage",
                                                "description": "",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "4D7E7E50414F42324252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433323244333532443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-2-5-1",
                                        "fareBasisCode": "PAOB2BRR",
                                        "classOfService": "P^P",
                                        "productClass": "M",
                                        "availableSeats": 9,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2554605,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "M",
                                                "amount": 2554605,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN1",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN2",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 783300",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN3",
                                                "name": "refund",
                                                "description": "isReFundAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA2-0GOC3",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO50LB 23KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "4C7E7E50414F42334252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433333244333532443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-3-5-1",
                                        "fareBasisCode": "PAOB3BRR",
                                        "classOfService": "P^P",
                                        "productClass": "L",
                                        "availableSeats": 9,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2858275,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "L",
                                                "amount": 2858275,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN4",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN5",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN6",
                                                "name": "refund",
                                                "description": "isReFundAllowed: refundPenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA2-0GOC3",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO50LB 23KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "58584C7E7E435A4F42354252527E595E437E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433383244333532443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-8-5-1",
                                        "fareBasisCode": "CZOB5BRR",
                                        "classOfService": "Y^C",
                                        "productClass": "XXL",
                                        "availableSeats": 4,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 9914340,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "XXL",
                                                "amount": 9914340,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN4",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN5",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN6",
                                                "name": "refund",
                                                "description": "isReFundAllowed: refundPenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA3-0FMC4",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO70LB 32KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "included"
                                            }
                                        ]
                                    }
                                ],
                                "availability": "Available",
                                "id": "3433353534333745343234463437374533353332333233373745343135363745333233303332333432443330333232443330333137453335333333343335333433373332343433343331333533363333333533333332333333323333333733323434333433333335333533343333333433323334343633343337333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333533333332333333387E3432344634373745344434313434374533313330374534313536374533323330333233343244333033323244333033313745333533333334333533343337333234343334333133353336333333313333333033323434333433323334343633343337333434343334333133343334333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333323333333133333332333333357E3335"
                            },
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-02-01T17:42:00",
                                "stdutc": "2024-02-01T22:42:00",
                                "sta": "2024-02-02T13:05:00",
                                "stautc": "2024-02-02T12:05:00",
                                "duration": "13:23:00",
                                "referenceId": "2",
                                "scheduleType": "AllPrice",
                                "segments": [
                                    {
                                        "id": "4355437E424F477E393432317E41567E323032342D30322D30317E353334353437324434313536333933343332333132443433353534333432344634373244333233303332333432443330333232443330333132443331333733343332",
                                        "referenceId": "SEG-AV9421-CUCBOG-2024-02-01-1742",
                                        "origin": "CUC",
                                        "destination": "BOG",
                                        "std": "2024-02-01T17:42:00",
                                        "stdutc": "2024-02-01T22:42:00",
                                        "sta": "2024-02-01T18:58:00",
                                        "stautc": "2024-02-01T23:58:00",
                                        "duration": "01:16:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "BOG",
                                                "originTerminal": "",
                                                "destinationTerminal": "1",
                                                "std": "2024-02-01T17:42:00",
                                                "stdutc": "2024-02-01T22:42:00",
                                                "sta": "2024-02-01T18:58:00",
                                                "stautc": "2024-02-01T23:58:00",
                                                "duration": "01:16:00",
                                                "legInfo": {
                                                    "isSubjectedToGovernmentApproval": false
                                                }
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Plane",
                                            "model": "AIRBUS A320",
                                            "number": "9421"
                                        }
                                    },
                                    {
                                        "id": "424F477E4D41447E31307E41567E323032342D30322D30317E3533343534373244343135363331333032443432344634373444343134343244333233303332333432443330333232443330333132443332333133323335",
                                        "referenceId": "SEG-AV10-BOGMAD-2024-02-01-2125",
                                        "origin": "BOG",
                                        "destination": "MAD",
                                        "std": "2024-02-01T21:25:00",
                                        "stdutc": "2024-02-02T02:25:00",
                                        "sta": "2024-02-02T13:05:00",
                                        "stautc": "2024-02-02T12:05:00",
                                        "duration": "09:40:00",
                                        "legs": [
                                            {
                                                "origin": "BOG",
                                                "destination": "MAD",
                                                "originTerminal": "1",
                                                "destinationTerminal": "4S",
                                                "std": "2024-02-01T21:25:00",
                                                "stdutc": "2024-02-02T02:25:00",
                                                "sta": "2024-02-02T13:05:00",
                                                "stautc": "2024-02-02T12:05:00",
                                                "duration": "09:40:00",
                                                "legInfo": {
                                                    "isSubjectedToGovernmentApproval": false
                                                }
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Plane",
                                            "model": "BOEING 787-8",
                                            "number": "10"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433313244333232443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-1-2-1",
                                        "fareBasisCode": "PAOB1BRR",
                                        "classOfService": "P^P",
                                        "productClass": "S",
                                        "availableSeats": 9,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN1",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN2",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 783300",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN3",
                                                "name": "refund",
                                                "description": "isReFundAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "C0CCF2",
                                                "name": "ABAG",
                                                "description": "1ST CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "FBA1",
                                                "name": "freeCheckedBaggage",
                                                "description": "",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "4D7E7E50414F42324252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433323244333232443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-2-2-1",
                                        "fareBasisCode": "PAOB2BRR",
                                        "classOfService": "P^P",
                                        "productClass": "M",
                                        "availableSeats": 9,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2554605,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "M",
                                                "amount": 2554605,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN1",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN2",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 783300",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN3",
                                                "name": "refund",
                                                "description": "isReFundAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA2-0GOC3",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO50LB 23KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "4C7E7E50414F42334252527E505E507E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433333244333232443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-3-2-1",
                                        "fareBasisCode": "PAOB3BRR",
                                        "classOfService": "P^P",
                                        "productClass": "L",
                                        "availableSeats": 9,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2858275,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "L",
                                                "amount": 2858275,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN4",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN5",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN6",
                                                "name": "refund",
                                                "description": "isReFundAllowed: refundPenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA2-0GOC3",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO50LB 23KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "58584C7E7E435A4F42354252527E595E437E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433383244333232443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-8-2-1",
                                        "fareBasisCode": "CZOB5BRR",
                                        "classOfService": "Y^C",
                                        "productClass": "XXL",
                                        "availableSeats": 4,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 9914340,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "XXL",
                                                "amount": 9914340,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN4",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN5",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN6",
                                                "name": "refund",
                                                "description": "isReFundAllowed: refundPenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA3-0FMC4",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO70LB 32KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "included"
                                            }
                                        ]
                                    }
                                ],
                                "availability": "Available",
                                "id": "3433353534333745343234463437374533393334333233313745343135363745333233303332333432443330333232443330333137453335333333343335333433373332343433343331333533363333333933333334333333323333333133323434333433333335333533343333333433323334343633343337333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333733333334333333327E3432344634373745344434313434374533313330374534313536374533323330333233343244333033323244333033313745333533333334333533343337333234343334333133353336333333313333333033323434333433323334343633343337333434343334333133343334333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333323333333133333332333333357E3332"
                            },
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-02-01T11:35:00",
                                "stdutc": "2024-02-01T16:35:00",
                                "sta": "2024-02-02T10:40:00",
                                "stautc": "2024-02-02T09:40:00",
                                "duration": "17:05:00",
                                "referenceId": "7",
                                "scheduleType": "AllPrice",
                                "segments": [
                                    {
                                        "id": "4355437E424F477E393435397E41567E323032342D30322D30317E353334353437324434313536333933343335333932443433353534333432344634373244333233303332333432443330333232443330333132443331333133333335",
                                        "referenceId": "SEG-AV9459-CUCBOG-2024-02-01-1135",
                                        "origin": "CUC",
                                        "destination": "BOG",
                                        "std": "2024-02-01T11:35:00",
                                        "stdutc": "2024-02-01T16:35:00",
                                        "sta": "2024-02-01T12:51:00",
                                        "stautc": "2024-02-01T17:51:00",
                                        "duration": "01:16:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "BOG",
                                                "originTerminal": "",
                                                "destinationTerminal": "1",
                                                "std": "2024-02-01T11:35:00",
                                                "stdutc": "2024-02-01T16:35:00",
                                                "sta": "2024-02-01T12:51:00",
                                                "stautc": "2024-02-01T17:51:00",
                                                "duration": "01:16:00",
                                                "legInfo": {
                                                    "isSubjectedToGovernmentApproval": false
                                                }
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Plane",
                                            "model": "AIRBUS A320",
                                            "number": "9459"
                                        }
                                    },
                                    {
                                        "id": "424F477E42434E7E31387E41567E323032342D30322D30317E3533343534373244343135363331333832443432344634373432343334453244333233303332333432443330333232443330333132443331333533343330",
                                        "referenceId": "SEG-AV18-BOGBCN-2024-02-01-1540",
                                        "origin": "BOG",
                                        "destination": "BCN",
                                        "std": "2024-02-01T15:40:00",
                                        "stdutc": "2024-02-01T20:40:00",
                                        "sta": "2024-02-02T07:40:00",
                                        "stautc": "2024-02-02T06:40:00",
                                        "duration": "10:00:00",
                                        "legs": [
                                            {
                                                "origin": "BOG",
                                                "destination": "BCN",
                                                "originTerminal": "1",
                                                "destinationTerminal": "1",
                                                "std": "2024-02-01T15:40:00",
                                                "stdutc": "2024-02-01T20:40:00",
                                                "sta": "2024-02-02T07:40:00",
                                                "stautc": "2024-02-02T06:40:00",
                                                "duration": "10:00:00",
                                                "legInfo": {
                                                    "isSubjectedToGovernmentApproval": false
                                                }
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Plane",
                                            "model": "BOEING 787-8",
                                            "number": "18"
                                        }
                                    },
                                    {
                                        "id": "42434E7E4D41447E363030307E49427E323032342D30322D30327E353334353437324434313536333633303330333032443432343334453444343134343244333233303332333432443330333232443330333232443330333933313335",
                                        "referenceId": "SEG-AV6000-BCNMAD-2024-02-02-0915",
                                        "origin": "BCN",
                                        "destination": "MAD",
                                        "std": "2024-02-02T09:15:00",
                                        "stdutc": "2024-02-02T08:15:00",
                                        "sta": "2024-02-02T10:40:00",
                                        "stautc": "2024-02-02T09:40:00",
                                        "duration": "01:25:00",
                                        "legs": [
                                            {
                                                "origin": "BCN",
                                                "destination": "MAD",
                                                "originTerminal": "1",
                                                "destinationTerminal": "4",
                                                "std": "2024-02-02T09:15:00",
                                                "stdutc": "2024-02-02T08:15:00",
                                                "sta": "2024-02-02T10:40:00",
                                                "stautc": "2024-02-02T09:40:00",
                                                "duration": "01:25:00",
                                                "legInfo": {
                                                    "isSubjectedToGovernmentApproval": false
                                                }
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "IB"
                                            },
                                            "type": "Plane",
                                            "model": "AIRBUS A320",
                                            "number": "6000"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E45455342314252517E455E455E457E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433343244333732443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-4-7-1",
                                        "fareBasisCode": "EESB1BRQ",
                                        "classOfService": "E^E^E",
                                        "productClass": "S",
                                        "availableSeats": 4,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 4896680,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 4896680,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN1",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN2",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 783300",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN3",
                                                "name": "refund",
                                                "description": "isReFundAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "FBA4",
                                                "name": "freeCheckedBaggage",
                                                "description": "",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CCF2",
                                                "name": "ABAG",
                                                "description": "1ST CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "4D7E7E45455342324252517E455E455E457E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433363244333732443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-6-7-1",
                                        "fareBasisCode": "EESB2BRQ",
                                        "classOfService": "E^E^E",
                                        "productClass": "M",
                                        "availableSeats": 4,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 5364500,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "M",
                                                "amount": 5364500,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN1",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN2",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 783300",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN3",
                                                "name": "refund",
                                                "description": "isReFundAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "FBA5-0GOC3",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO50LB 23KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "4C7E7E454C4F42334252527E455E455E457E4144547E7E3432343333313244333232443446343635323244333433383336333433313339333433393335333633363330333733383332324433373244333732443331",
                                        "referenceId": "BC1-2-OFR-486419495660782-7-7-1",
                                        "fareBasisCode": "ELOB3BRR",
                                        "classOfService": "E^E^E",
                                        "productClass": "L",
                                        "availableSeats": 4,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 5714145,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "L",
                                                "amount": 5714145,
                                                "currency": "COP"
                                            }
                                        ],
                                        "cabin": "eco",
                                        "recommended": false,
                                        "items": [
                                            {
                                                "code": "PEN4",
                                                "name": "change",
                                                "description": "isRevalidationAllowed: ",
                                                "applicability": "notOffered"
                                            },
                                            {
                                                "code": "PEN5",
                                                "name": "change",
                                                "description": "isReIssueAllowed: changePenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "PEN6",
                                                "name": "refund",
                                                "description": "isReFundAllowed: refundPenalty COP 0",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "FBA5-0GOC3",
                                                "name": "freeCheckedBaggage",
                                                "description": "UPTO50LB 23KG AND62LI 158LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "04JF5",
                                                "name": "04JF5",
                                                "description": "LAPTOP OR HANDBAG UP TO 85LCM",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A05QF6",
                                                "name": "PASS",
                                                "description": "AIRPORT CHECK IN COUNTER",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "056Z7",
                                                "name": "056Z7",
                                                "description": "REFUNDABLE TICKET",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "055Z8",
                                                "name": "055Z8",
                                                "description": "CHANGE FEE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "A0B5F1",
                                                "name": "SEAT",
                                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0LNB9",
                                                "name": "0LNB9",
                                                "description": "CARRYON HAND BAGGAGE 10KG 22LB",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "0DFA13",
                                                "name": "0DFA13",
                                                "description": "FREE BAGGAGE ALLOWANCE",
                                                "applicability": "included"
                                            },
                                            {
                                                "code": "C0CDF10",
                                                "name": "BBAG",
                                                "description": "2ND CHECKED BAG 23KG 158 LCM",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0G6F11",
                                                "name": "PBRD",
                                                "description": "PRIORITY BOARDING",
                                                "applicability": "chargeable"
                                            },
                                            {
                                                "code": "E0AGF12",
                                                "name": "VIPD",
                                                "description": "VIP LOUNGE DAY PASS",
                                                "applicability": "chargeable"
                                            }
                                        ]
                                    }
                                ],
                                "availability": "Available",
                                "id": "3433353534333745343234463437374533393334333533393745343135363745333233303332333432443330333232443330333137453335333333343335333433373332343433343331333533363333333933333334333333353333333933323434333433333335333533343333333433323334343633343337333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333133333333333333357E3432344634373745343234333445374533313338374534313536374533323330333233343244333033323244333033313745333533333334333533343337333234343334333133353336333333313333333833323434333433323334343633343337333433323334333333343435333234343333333233333330333333323333333433323434333333303333333233323434333333303333333133323434333333313333333533333334333333307E3432343334453745344434313434374533363330333033303745343934323745333233303332333432443330333232443330333237453335333333343335333433373332343433343331333533363333333633333330333333303333333033323434333433323334333333343435333434343334333133343334333234343333333233333330333333323333333433323434333333303333333233323434333333303333333233323434333333303333333933333331333333357E3337"
                            }
                        ]
                    },
                    {
                        "date": "2024-02-02T00:00:00",
                        "availability": "Available",
                        "journeys": [
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-02-02T00:00:00",
                                "stdutc": "2024-02-02T00:00:00Z",
                                "sta": "0001-01-01T00:00:00",
                                "stautc": "0001-01-01T00:00:00",
                                "duration": "-738917.00:00:00",
                                "scheduleType": "LowestPrice",
                                "segments": [
                                    {
                                        "id": "4355437E4D41447E3030317E41567E323032342D30322D30327E",
                                        "origin": "CUC",
                                        "destination": "MAD",
                                        "std": "2024-02-02T00:00:00",
                                        "stdutc": "2024-02-02T00:00:00Z",
                                        "sta": "0001-01-01T00:00:00",
                                        "stautc": "0001-01-01T00:00:00",
                                        "duration": "-738917.00:00:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "MAD",
                                                "std": "2024-02-02T00:00:00",
                                                "stdutc": "2024-02-02T00:00:00Z",
                                                "sta": "0001-01-01T00:00:00",
                                                "stautc": "0001-01-01T00:00:00",
                                                "duration": "00:00:00",
                                                "referenceId": ""
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Default",
                                            "number": "001"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E7E4144547E7E",
                                        "fareBasisCode": "PAOB1BRR",
                                        "productClass": "S",
                                        "availableSeats": 0,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "recommended": false
                                    }
                                ],
                                "availability": "Available",
                                "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333232443330333237457E"
                            }
                        ]
                    },
                    {
                        "date": "2024-02-03T00:00:00",
                        "availability": "Available",
                        "journeys": [
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-02-03T00:00:00",
                                "stdutc": "2024-02-03T00:00:00Z",
                                "sta": "0001-01-01T00:00:00",
                                "stautc": "0001-01-01T00:00:00",
                                "duration": "-738918.00:00:00",
                                "scheduleType": "LowestPrice",
                                "segments": [
                                    {
                                        "id": "4355437E4D41447E3030317E41567E323032342D30322D30337E",
                                        "origin": "CUC",
                                        "destination": "MAD",
                                        "std": "2024-02-03T00:00:00",
                                        "stdutc": "2024-02-03T00:00:00Z",
                                        "sta": "0001-01-01T00:00:00",
                                        "stautc": "0001-01-01T00:00:00",
                                        "duration": "-738918.00:00:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "MAD",
                                                "std": "2024-02-03T00:00:00",
                                                "stdutc": "2024-02-03T00:00:00Z",
                                                "sta": "0001-01-01T00:00:00",
                                                "stautc": "0001-01-01T00:00:00",
                                                "duration": "00:00:00",
                                                "referenceId": ""
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Default",
                                            "number": "001"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E7E4144547E7E",
                                        "fareBasisCode": "PAOB1BRR",
                                        "productClass": "S",
                                        "availableSeats": 0,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "recommended": false
                                    }
                                ],
                                "availability": "Available",
                                "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333232443330333337457E"
                            }
                        ]
                    },
                    {
                        "date": "2024-02-04T00:00:00",
                        "availability": "Available",
                        "journeys": [
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-02-04T00:00:00",
                                "stdutc": "2024-02-04T00:00:00Z",
                                "sta": "0001-01-01T00:00:00",
                                "stautc": "0001-01-01T00:00:00",
                                "duration": "-738919.00:00:00",
                                "scheduleType": "LowestPrice",
                                "segments": [
                                    {
                                        "id": "4355437E4D41447E3030317E41567E323032342D30322D30347E",
                                        "origin": "CUC",
                                        "destination": "MAD",
                                        "std": "2024-02-04T00:00:00",
                                        "stdutc": "2024-02-04T00:00:00Z",
                                        "sta": "0001-01-01T00:00:00",
                                        "stautc": "0001-01-01T00:00:00",
                                        "duration": "-738919.00:00:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "MAD",
                                                "std": "2024-02-04T00:00:00",
                                                "stdutc": "2024-02-04T00:00:00Z",
                                                "sta": "0001-01-01T00:00:00",
                                                "stautc": "0001-01-01T00:00:00",
                                                "duration": "00:00:00",
                                                "referenceId": ""
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Default",
                                            "number": "001"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E7E4144547E7E",
                                        "fareBasisCode": "PAOB1BRR",
                                        "productClass": "S",
                                        "availableSeats": 0,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "recommended": false
                                    }
                                ],
                                "availability": "Available",
                                "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333232443330333437457E"
                            }
                        ]
                    },
                    {
                        "date": "2024-02-05T00:00:00",
                        "availability": "Available",
                        "journeys": [
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-02-05T00:00:00",
                                "stdutc": "2024-02-05T00:00:00Z",
                                "sta": "0001-01-01T00:00:00",
                                "stautc": "0001-01-01T00:00:00",
                                "duration": "-738920.00:00:00",
                                "scheduleType": "LowestPrice",
                                "segments": [
                                    {
                                        "id": "4355437E4D41447E3030317E41567E323032342D30322D30357E",
                                        "origin": "CUC",
                                        "destination": "MAD",
                                        "std": "2024-02-05T00:00:00",
                                        "stdutc": "2024-02-05T00:00:00Z",
                                        "sta": "0001-01-01T00:00:00",
                                        "stautc": "0001-01-01T00:00:00",
                                        "duration": "-738920.00:00:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "MAD",
                                                "std": "2024-02-05T00:00:00",
                                                "stdutc": "2024-02-05T00:00:00Z",
                                                "sta": "0001-01-01T00:00:00",
                                                "stautc": "0001-01-01T00:00:00",
                                                "duration": "00:00:00",
                                                "referenceId": ""
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Default",
                                            "number": "001"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E7E4144547E7E",
                                        "fareBasisCode": "PAOB1BRR",
                                        "productClass": "S",
                                        "availableSeats": 0,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "recommended": false
                                    }
                                ],
                                "availability": "Available",
                                "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333232443330333537457E"
                            }
                        ]
                    },
                    {
                        "date": "2024-02-06T00:00:00",
                        "availability": "Available",
                        "journeys": [
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-02-06T00:00:00",
                                "stdutc": "2024-02-06T00:00:00Z",
                                "sta": "0001-01-01T00:00:00",
                                "stautc": "0001-01-01T00:00:00",
                                "duration": "-738921.00:00:00",
                                "scheduleType": "LowestPrice",
                                "segments": [
                                    {
                                        "id": "4355437E4D41447E3030317E41567E323032342D30322D30367E",
                                        "origin": "CUC",
                                        "destination": "MAD",
                                        "std": "2024-02-06T00:00:00",
                                        "stdutc": "2024-02-06T00:00:00Z",
                                        "sta": "0001-01-01T00:00:00",
                                        "stautc": "0001-01-01T00:00:00",
                                        "duration": "-738921.00:00:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "MAD",
                                                "std": "2024-02-06T00:00:00",
                                                "stdutc": "2024-02-06T00:00:00Z",
                                                "sta": "0001-01-01T00:00:00",
                                                "stautc": "0001-01-01T00:00:00",
                                                "duration": "00:00:00",
                                                "referenceId": ""
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Default",
                                            "number": "001"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E7E4144547E7E",
                                        "fareBasisCode": "PAOB1BRR",
                                        "productClass": "S",
                                        "availableSeats": 0,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "recommended": false
                                    }
                                ],
                                "availability": "Available",
                                "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333232443330333637457E"
                            }
                        ]
                    },
                    {
                        "date": "2024-02-07T00:00:00",
                        "availability": "Available",
                        "journeys": [
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-02-07T00:00:00",
                                "stdutc": "2024-02-07T00:00:00Z",
                                "sta": "0001-01-01T00:00:00",
                                "stautc": "0001-01-01T00:00:00",
                                "duration": "-738922.00:00:00",
                                "scheduleType": "LowestPrice",
                                "segments": [
                                    {
                                        "id": "4355437E4D41447E3030317E41567E323032342D30322D30377E",
                                        "origin": "CUC",
                                        "destination": "MAD",
                                        "std": "2024-02-07T00:00:00",
                                        "stdutc": "2024-02-07T00:00:00Z",
                                        "sta": "0001-01-01T00:00:00",
                                        "stautc": "0001-01-01T00:00:00",
                                        "duration": "-738922.00:00:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "MAD",
                                                "std": "2024-02-07T00:00:00",
                                                "stdutc": "2024-02-07T00:00:00Z",
                                                "sta": "0001-01-01T00:00:00",
                                                "stautc": "0001-01-01T00:00:00",
                                                "duration": "00:00:00",
                                                "referenceId": ""
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Default",
                                            "number": "001"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E7E4144547E7E",
                                        "fareBasisCode": "PAOB1BRR",
                                        "productClass": "S",
                                        "availableSeats": 0,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "recommended": false
                                    }
                                ],
                                "availability": "Available",
                                "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333232443330333737457E"
                            }
                        ]
                    },
                    {
                        "date": "2024-02-08T00:00:00",
                        "availability": "Available",
                        "journeys": [
                            {
                                "origin": "CUC",
                                "destination": "MAD",
                                "std": "2024-02-08T00:00:00",
                                "stdutc": "2024-02-08T00:00:00Z",
                                "sta": "0001-01-01T00:00:00",
                                "stautc": "0001-01-01T00:00:00",
                                "duration": "-738923.00:00:00",
                                "scheduleType": "LowestPrice",
                                "segments": [
                                    {
                                        "id": "4355437E4D41447E3030317E41567E323032342D30322D30387E",
                                        "origin": "CUC",
                                        "destination": "MAD",
                                        "std": "2024-02-08T00:00:00",
                                        "stdutc": "2024-02-08T00:00:00Z",
                                        "sta": "0001-01-01T00:00:00",
                                        "stautc": "0001-01-01T00:00:00",
                                        "duration": "-738923.00:00:00",
                                        "legs": [
                                            {
                                                "origin": "CUC",
                                                "destination": "MAD",
                                                "std": "2024-02-08T00:00:00",
                                                "stdutc": "2024-02-08T00:00:00Z",
                                                "sta": "0001-01-01T00:00:00",
                                                "stautc": "0001-01-01T00:00:00",
                                                "duration": "00:00:00",
                                                "referenceId": ""
                                            }
                                        ],
                                        "transport": {
                                            "carrier": {
                                                "code": "AV"
                                            },
                                            "type": "Default",
                                            "number": "001"
                                        }
                                    }
                                ],
                                "fares": [
                                    {
                                        "id": "537E7E50414F42314252527E7E4144547E7E",
                                        "fareBasisCode": "PAOB1BRR",
                                        "productClass": "S",
                                        "availableSeats": 0,
                                        "paxCode": "ADT",
                                        "serviceBundleCode": "",
                                        "totalAmount": 2193635,
                                        "charges": [
                                            {
                                                "type": "Fare",
                                                "code": "S",
                                                "amount": 2193635,
                                                "currency": "COP"
                                            }
                                        ],
                                        "recommended": false
                                    }
                                ],
                                "availability": "Available",
                                "id": "343335353433374534443431343437453330333033313745343135363745333233303332333432443330333232443330333837457E"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "2",
                "schedules": []
            }
        ]
    }
}
*/