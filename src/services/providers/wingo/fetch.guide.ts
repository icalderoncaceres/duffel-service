/*
https://booking.wingo.com/es/search/BOG/CTG/2024-02-16/2024-02-19/1/0/0/0/COP/0/0
*/

fetch("https://ancillaries-api.wingo.com/v1/retrieveAARQuotes", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOlsiaHR0cHM6Ly9hZG1pbi1hcGkud2luZ28uY29tIiwiaHR0cHM6Ly9hbmNpbGxhcmllcy1hcGkud2luZ28uY29tIiwiaHR0cHM6Ly9jaGF0Ym90LWFwaS53aW5nby5jb20iLCJodHRwczovL2Fub25hdXRoLndpbmdvLmNvbSIsImh0dHBzOi8vbm90aWZpY2F0aW9ucy1hcGkud2luZ28uY29tIiwiaHR0cHM6Ly9wYXltZW50c2FwaS53aW5nby5jb20iLCJodHRwczovL2Rpc2NvdW50cy1hcGkud2luZ28uY29tIiwiaHR0cHM6Ly9wcm9tb3Rpb25zLWFwaS53aW5nby5jb20iLCJodHRwczovL211bHRpY3VycmVuY3ktYXBpLndpbmdvLmNvbSIsImh0dHBzOi8vcGF5bWVudC1hcGkud2luZ28uY29tIiwiaHR0cHM6Ly9mbGlnaHRzLWFwaS53aW5nby5jb20iLCJodHRwczovL3JvdXRlcy1hcGkud2luZ28uY29tIiwiaHR0cHM6Ly9yZXNlcnZhdGlvbi1hcGkud2luZ28uY29tIiwiaHR0cHM6Ly9hbnRpYm90LWFwaS53aW5nby5jb20iLCJodHRwczovL2RhdGFyZXBsaWNhZGEtYXBpLndpbmdvLmNvbSIsImh0dHBzOi8vZXZlbnRzLXJlZ2lzdHJ5LWFwaS53aW5nby5jb20iLCJodHRwczovL2ZseW1hcmtldC1hcGkud2luZ28uY29tIiwiaHR0cHM6Ly9yZXRhaWwtYXBpLndpbmdvLmNvbSIsImh0dHBzOi8vcGF5bWVudC10Yy1hcGkud2luZ28uY29tIiwiaHR0cHM6Ly9wYXltZW50cy1hcGkud2luZ28uY29tIiwiaHR0cHM6Ly9pcnJvcHMtYXBpLndpbmdvLmNvbSIsImh0dHBzOi8vdHJhbnNhY3Rpb24tbWFuYWdlci1hcGkud2luZ28uY29tIiwiaHR0cHM6Ly9wcm9jZXNzLXBheW1lbnQtYXBpLndpbmdvLmNvbSJdLCJzdWIiOiJhdXRoLWp3dEBnY3Atd2luZ28tcHJvLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwibWV0YWRhdGEiOnsidXNlciI6IkFQUF9JQkUifSwiaXNzIjoiYXV0aC1qd3RAZ2NwLXdpbmdvLXByby5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInNjb3BlcyI6W10sImV4cCI6MTcwNTk4NDk1OCwiaWF0IjoxNzA1OTgxMzU4fQ.ZKXqIcDNavYz09iS2T6_cNDl5Pt_Q2-MZVYocleRqB-dDaCab2XbB98z93Cu4V_ECYM0WyNP5I0dCMNzqonnJknnB46j5wQGGU1189BLOtIEAKOUJjtDGNoim7dBA9YWPG7MoNhIwm-FaNTSOZwt4T1Rs5tz5IcjvNF_iGoRifewzOiAReBS3X0ZnaNh5Xi9ci1_zSqhUtlgVNXg6e1FNL_8IMCibiVkzFqEvh5_LY-pmIVzht15YCwWS8rZThBtse3X4zYG5dYpzax2kE5_NrKAfBZLPjgYLYbcU2eyXrgEs2I6XvmoE2s917Rx6eVaCuGXb1E6MfQq3RDBL0sicA",
    "content-type": "application/json",
    "path-site": "booking/search",
    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "token-user": "d2dbd33b92w2sbdbv4t5t1k6tbpfg7b7fef31a0e427c"
  },
  "referrer": "https://booking.wingo.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"securityToken\":\"d2dbd33b92w2sbdbv4t5t1k6tbpfg7b7fef31a0e427c\",\"flightServicesRequest\":[{\"fromAirportCode\":\"BOG\",\"toDestinationAirportCode\":\"CTG\",\"departureDate\":\"2024-02-13T10:41:00\",\"logicalFlightID\":125456,\"operatingCarrierCode\":\"P5\",\"currency\":\"COP\",\"infoPassengers\":[{\"passengerTypeID\":1,\"quantity\":1}],\"fareBasisCode\":\"VPROD2P5\",\"fareClass\":\"V\"},{\"fromAirportCode\":\"CTG\",\"toDestinationAirportCode\":\"BOG\",\"departureDate\":\"2024-02-16T14:36:00\",\"logicalFlightID\":125592,\"operatingCarrierCode\":\"P5\",\"currency\":\"COP\",\"infoPassengers\":[{\"passengerTypeID\":1,\"quantity\":1}],\"fareBasisCode\":\"SPROD2P5\",\"fareClass\":\"S\"}],\"pricingEvent\":1,\"carrierCodes\":[\"P5\"],\"isRoundTrip\":true,\"multiCurrency\":false,\"languageId\":1,\"isMultiAto\":false}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

[
    {
      "from": "BOG",
      "to": "CTG",
      "departureDate": "2024-02-13T10:41:00.000+00:00",
      "flightId": 125456,
      "services": [
        {
          "codeType": "123C",
          "amount": 360000,
          "amountOriginal": 360000,
          "description": "1_WEB_CCS_2DA, 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 68400,
              "taxAmountOriginal": 68400,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 1,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "123M",
          "amount": 280000,
          "amountOriginal": 280000,
          "description": "1_WEB_MX_2DA, 3RA MALETA_TARIFA PLUS",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 53200,
              "taxAmountOriginal": 53200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 2,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "12CM",
          "amount": 180000,
          "amountOriginal": 180000,
          "description": "1_WEB_CCS_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 34200,
              "taxAmountOriginal": 34200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 3,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "12MC",
          "amount": 140000,
          "amountOriginal": 140000,
          "description": "1_WEB_MX_2DA MALETA_TARIFA PLUS",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 26600,
              "taxAmountOriginal": 26600,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 4,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "12WM",
          "amount": 276500,
          "amountOriginal": 276500,
          "description": "2_MMB_INT_1RA Y 2DA MALETA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 52535,
              "taxAmountOriginal": 52535,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 5,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "1MCI",
          "amount": 134750,
          "amountOriginal": 134750,
          "description": "3_CI_INT_1RA MALETA 20KG",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 25602,
              "taxAmountOriginal": 25602,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 6,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "2CIM",
          "amount": 327250,
          "amountOriginal": 327250,
          "description": "3_CI_INT_1RA Y 2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 62178,
              "taxAmountOriginal": 62178,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 7,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "2MAB",
          "amount": 65000,
          "amountOriginal": 65000,
          "description": "SEGUNDA MALETA ADZ",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 12350,
              "taxAmountOriginal": 12350,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 8,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "2MCI",
          "amount": 192500,
          "amountOriginal": 192500,
          "description": "3_CI_INT_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 36575,
              "taxAmountOriginal": 36575,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 9,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "2MDB",
          "amount": 45000,
          "amountOriginal": 45000,
          "description": "SEGUNDA MALETA DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 8550,
              "taxAmountOriginal": 8550,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 10,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "2MHB",
          "amount": 200000,
          "amountOriginal": 200000,
          "description": "SEGUNDA MALETA HAV",
          "avalaibleQuantity": 70,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 38000,
              "taxAmountOriginal": 38000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 11,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "2MIB",
          "amount": 140000,
          "amountOriginal": 140000,
          "description": "SEGUNDA MALETA INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 26600,
              "taxAmountOriginal": 26600,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 12,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "3CIM",
          "amount": 519750,
          "amountOriginal": 519750,
          "description": "3_CI_INT_1RA, 2DA Y 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 98752,
              "taxAmountOriginal": 98752,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 13,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "3MAB",
          "amount": 130000,
          "amountOriginal": 130000,
          "description": "SEGUNDA Y TERCERA MALETA ADZ",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 24700,
              "taxAmountOriginal": 24700,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 14,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "3MCI",
          "amount": 192500,
          "amountOriginal": 192500,
          "description": "3_CI_INT_3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 36575,
              "taxAmountOriginal": 36575,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 15,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "3MDB",
          "amount": 90000,
          "amountOriginal": 90000,
          "description": "SEGUNDA Y TERCERA MALETA DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 17100,
              "taxAmountOriginal": 17100,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 16,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "3MHB",
          "amount": 520000,
          "amountOriginal": 520000,
          "description": "SEGUNDA Y TERCERA MALETA HAV",
          "avalaibleQuantity": 50,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 98800,
              "taxAmountOriginal": 98800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 17,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "3MIB",
          "amount": 280000,
          "amountOriginal": 280000,
          "description": "SEGUNDA Y TERCERA MALETA INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 53200,
              "taxAmountOriginal": 53200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 18,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "AP06",
          "amount": 0,
          "amountOriginal": 0,
          "description": "CARRY ON ORIGINAL 10 KGS",
          "avalaibleQuantity": 100,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 26,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "AP10",
          "amount": 0,
          "amountOriginal": 0,
          "description": "ART PERSONAL ORIGINAL 10 KGS",
          "avalaibleQuantity": 994,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 27,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "ASD1",
          "amount": 30000,
          "amountOriginal": 30000,
          "description": "SILLA EXTRA ESPACIO DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 5700,
              "taxAmountOriginal": 5700,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 28,
          "ssrCategory": 8,
          "flightId": 125456
        },
        {
          "codeType": "ASD2",
          "amount": 20000,
          "amountOriginal": 20000,
          "description": "SILLA ESTANDAR AELANTE DOM",
          "avalaibleQuantity": 991,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3800,
              "taxAmountOriginal": 3800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 29,
          "ssrCategory": 8,
          "flightId": 125456
        },
        {
          "codeType": "ASD3",
          "amount": 18000,
          "amountOriginal": 18000,
          "description": "SILLA ESTANDAR DOM",
          "avalaibleQuantity": 991,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3420,
              "taxAmountOriginal": 3420,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 30,
          "ssrCategory": 8,
          "flightId": 125456
        },
        {
          "codeType": "ASD7",
          "amount": 25000,
          "amountOriginal": 25000,
          "description": "SILLA EXTRA ESPACIO DOM",
          "avalaibleQuantity": 997,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 4750,
              "taxAmountOriginal": 4750,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 34,
          "ssrCategory": 8,
          "flightId": 125456
        },
        {
          "codeType": "ASD8",
          "amount": 15000,
          "amountOriginal": 15000,
          "description": "SILLA ESTANDAR ATRÁS DOM",
          "avalaibleQuantity": 994,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 2850,
              "taxAmountOriginal": 2850,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 35,
          "ssrCategory": 8,
          "flightId": 125456
        },
        {
          "codeType": "ASDU",
          "amount": 5000,
          "amountOriginal": 5000,
          "description": "0_CALL_WEB_DOM_UPGRADE EE",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 950,
              "taxAmountOriginal": 950,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 38,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "ASI1",
          "amount": 113575,
          "amountOriginal": 113575,
          "description": "SILLA EXTRA ESPACIO INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 21579,
              "taxAmountOriginal": 21579,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 39,
          "ssrCategory": 8,
          "flightId": 125456
        },
        {
          "codeType": "ASI2",
          "amount": 68000,
          "amountOriginal": 68000,
          "description": "SILLA ESTANDAR ADELANTE INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 12920,
              "taxAmountOriginal": 12920,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 40,
          "ssrCategory": 8,
          "flightId": 125456
        },
        {
          "codeType": "ASI3",
          "amount": 60000,
          "amountOriginal": 60000,
          "description": "SILLA ESTANDAR INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 11400,
              "taxAmountOriginal": 11400,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 41,
          "ssrCategory": 8,
          "flightId": 125456
        },
        {
          "codeType": "ASI7",
          "amount": 76000,
          "amountOriginal": 76000,
          "description": "SILLA EXTRA ESPACIO INTER",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 14440,
              "taxAmountOriginal": 14440,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 45,
          "ssrCategory": 8,
          "flightId": 125456
        },
        {
          "codeType": "ASI8",
          "amount": 48000,
          "amountOriginal": 48000,
          "description": "SILLA ESTANDAR ATRAS INTER",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 9120,
              "taxAmountOriginal": 9120,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 46,
          "ssrCategory": 8,
          "flightId": 125456
        },
        {
          "codeType": "ASIU",
          "amount": 30800,
          "amountOriginal": 30800,
          "description": "0_CALL_WEB_INT_UPGRADE EE",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 5852,
              "taxAmountOriginal": 5852,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 49,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "AVIH",
          "amount": 55000,
          "amountOriginal": 55000,
          "description": "ANIMAL IN HOLD - SPECIFY DETAI",
          "avalaibleQuantity": 4,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 10450,
              "taxAmountOriginal": 10450,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 50,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "B1MC",
          "amount": 400000,
          "amountOriginal": 400000,
          "description": "0_CALL_HAV_1RA MALETA 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 76000,
              "taxAmountOriginal": 76000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 52,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "B1MW",
          "amount": 100000,
          "amountOriginal": 100000,
          "description": "I- MALETA 1 WEB",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 19000,
              "taxAmountOriginal": 19000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 53,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "B2MW",
          "amount": 480000,
          "amountOriginal": 480000,
          "description": "0_CALL_HAV_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 91200,
              "taxAmountOriginal": 91200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 54,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "B3MW",
          "amount": 800000,
          "amountOriginal": 800000,
          "description": "0_CALL_HAV_3RA MALETA",
          "avalaibleQuantity": 5994,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 152000,
              "taxAmountOriginal": 152000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 55,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "BFEE",
          "amount": 59100,
          "amountOriginal": 59100,
          "description": "TARIFA ADMINISTRATIVA WEB",
          "avalaibleQuantity": 907,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "IVA Colombia",
              "taxAmount": 11229,
              "taxAmountOriginal": 11229,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Tarifa Administrativa (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 57,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "C12D",
          "amount": 56000,
          "amountOriginal": 56000,
          "description": "CARRY ON DOM CABINA",
          "avalaibleQuantity": 100,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 10640,
              "taxAmountOriginal": 10640,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 66,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "C12I",
          "amount": 128000,
          "amountOriginal": 128000,
          "description": "CARRY ON CABINA INTER",
          "avalaibleQuantity": 100,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 24320,
              "taxAmountOriginal": 24320,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 67,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "CAWV",
          "amount": 24000,
          "amountOriginal": 24000,
          "description": "0_CTOCCS_CHECKIN",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 4560,
              "taxAmountOriginal": 4560,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 72,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "CDCC",
          "amount": 20000,
          "amountOriginal": 20000,
          "description": "0_CALL_DOM_CHECKIN",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3800,
              "taxAmountOriginal": 3800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 73,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "CH12",
          "amount": 360000,
          "amountOriginal": 360000,
          "description": "CARRY ON",
          "avalaibleQuantity": 100,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 68400,
              "taxAmountOriginal": 68400,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 74,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "CICC",
          "amount": 48000,
          "amountOriginal": 48000,
          "description": "0_CALL_INT_CHECKIN",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 9120,
              "taxAmountOriginal": 9120,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 76,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "CICI",
          "amount": 28875,
          "amountOriginal": 28875,
          "description": "3_CI_INT_CHECKIN",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 5486,
              "taxAmountOriginal": 5486,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 77,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "CIHB",
          "amount": 0,
          "amountOriginal": 0,
          "description": "HAV_CHECKIN",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 78,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "CIMD",
          "amount": 10000,
          "amountOriginal": 10000,
          "description": "2_MMB_DOM_CHECKIN",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 1900,
              "taxAmountOriginal": 1900,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 79,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "CIMI",
          "amount": 25025,
          "amountOriginal": 25025,
          "description": "2_MMB_INT_CHECKIN",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 4755,
              "taxAmountOriginal": 4755,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 80,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "CIPA",
          "amount": 9000,
          "amountOriginal": 9000,
          "description": "3_CI_DOM_PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 1710,
              "taxAmountOriginal": 1710,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 81,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "CM1C",
          "amount": 220000,
          "amountOriginal": 220000,
          "description": "0_CALL_MX_1RA MALETA_TARIFA PLUS_CO 20KG_MX 25KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 41800,
              "taxAmountOriginal": 41800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 82,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "CM1W",
          "amount": 100000,
          "amountOriginal": 100000,
          "description": "1_WEB_MX_1RA MALETA_TARIFA LIGHT_CO 20KG_MX 25KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 19000,
              "taxAmountOriginal": 19000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 83,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "COO1",
          "amount": 0,
          "amountOriginal": 0,
          "description": "CARRY ON ORIGINAL 10 KGS",
          "avalaibleQuantity": 100,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 85,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "CORR",
          "amount": 0,
          "amountOriginal": 0,
          "description": "CORRECCION DE NOMBRE",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 86,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "CV19",
          "amount": 0,
          "amountOriginal": 0,
          "description": "0_CALL_WEB_EXONERACION PENALIDAD",
          "avalaibleQuantity": 996,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 87,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "D1CI",
          "amount": 55000,
          "amountOriginal": 55000,
          "description": "3_CI_DOM_1RA MALETA 20KG",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 10450,
              "taxAmountOriginal": 10450,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 88,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "D1MB",
          "amount": 45000,
          "amountOriginal": 45000,
          "description": "2_MMB_DOM_1RA MALETA 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 8550,
              "taxAmountOriginal": 8550,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 89,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "D2CI",
          "amount": 130000,
          "amountOriginal": 130000,
          "description": "3_CI_DOM_1RA Y 2DA MALETA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 24700,
              "taxAmountOriginal": 24700,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 90,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "D2MB",
          "amount": 100000,
          "amountOriginal": 100000,
          "description": "2_MMB_DOM_1RA Y 2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 19000,
              "taxAmountOriginal": 19000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 91,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "D2WM",
          "amount": 55000,
          "amountOriginal": 55000,
          "description": "2_MMB_DOM_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 10450,
              "taxAmountOriginal": 10450,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 93,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "D3CI",
          "amount": 195000,
          "amountOriginal": 195000,
          "description": "3_CI_DOM_1RA, 2DA Y 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 37050,
              "taxAmountOriginal": 37050,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 94,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "D3MB",
          "amount": 155000,
          "amountOriginal": 155000,
          "description": "2_MMB_DOM_1RA, 2DA Y 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 29450,
              "taxAmountOriginal": 29450,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 95,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "D3WM",
          "amount": 110000,
          "amountOriginal": 110000,
          "description": "2_MMB_DOM_2DA, 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 20900,
              "taxAmountOriginal": 20900,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 97,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DCAW",
          "amount": 5000,
          "amountOriginal": 5000,
          "description": "CHECKIN DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 950,
              "taxAmountOriginal": 950,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 102,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "DCCD",
          "amount": 83000,
          "amountOriginal": 83000,
          "description": "0_CALL_DOM_DEPORTIVO CABINA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 15770,
              "taxAmountOriginal": 15770,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 104,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DCCI",
          "amount": 390000,
          "amountOriginal": 390000,
          "description": "0_CALL_INT_DEPORTIVO CABINA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 74100,
              "taxAmountOriginal": 74100,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 105,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DCI1",
          "amount": 65000,
          "amountOriginal": 65000,
          "description": "3_CI_DOM_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 12350,
              "taxAmountOriginal": 12350,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 106,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DCI2",
          "amount": 130000,
          "amountOriginal": 130000,
          "description": "3_CI_DOM_2DA Y 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 24700,
              "taxAmountOriginal": 24700,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 107,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DCI3",
          "amount": 65000,
          "amountOriginal": 65000,
          "description": "3_CI_DOM_3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 12350,
              "taxAmountOriginal": 12350,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 108,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DCIC",
          "amount": 12000,
          "amountOriginal": 12000,
          "description": "3_CI_DOM-CHECKIN",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 2280,
              "taxAmountOriginal": 2280,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 109,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "DDCD",
          "amount": 98000,
          "amountOriginal": 98000,
          "description": "0_CALL_DOM_DEPORTIVO BODEGA",
          "avalaibleQuantity": 40,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 18620,
              "taxAmountOriginal": 18620,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 110,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DDCI",
          "amount": 442800,
          "amountOriginal": 442800,
          "description": "0_CALL_INT_DEPORTIVO BODEGA",
          "avalaibleQuantity": 18,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 84132,
              "taxAmountOriginal": 84132,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 111,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DEBW",
          "amount": 60000,
          "amountOriginal": 60000,
          "description": "DEPORTIVO EN BODEGA DOM",
          "avalaibleQuantity": 40,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 11400,
              "taxAmountOriginal": 11400,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 114,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DECW",
          "amount": 83000,
          "amountOriginal": 83000,
          "description": "DEPORTIVO EN CABINA DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 15770,
              "taxAmountOriginal": 15770,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 117,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DFRW",
          "amount": 5000,
          "amountOriginal": 5000,
          "description": "1_WEB_DOM_FILA RAPIDA",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 950,
              "taxAmountOriginal": 950,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 122,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "DIBW",
          "amount": 60000,
          "amountOriginal": 60000,
          "description": "I. MUSICAL BODEGA DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 11400,
              "taxAmountOriginal": 11400,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 126,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DICW",
          "amount": 62000,
          "amountOriginal": 62000,
          "description": "I. MUSICAL CABINA DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 11780,
              "taxAmountOriginal": 11780,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 129,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DIF1",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DIFERENCIA TARIFA_EXONERACION",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 130,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "DIF2",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DIFERENCIA SERVICIOS_EXONERACION",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 131,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "DIF3",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DIFERENCIA MEDIOS PAGO_EXONERACION",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 132,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "DIFI",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DIFERENCIA TASAS, IMPUESTOS",
          "avalaibleQuantity": 998,
          "taxes": [],
          "serviceIDRadixx": 133,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "DIFS",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DIFERENCIA SERVICIOS",
          "avalaibleQuantity": 998,
          "taxes": [],
          "serviceIDRadixx": 134,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "DIFT",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DIFERENCIA TARIFA",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 135,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "DM1W",
          "amount": 35000,
          "amountOriginal": 35000,
          "description": "PRIMERA MALETA DOM 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 6650,
              "taxAmountOriginal": 6650,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 139,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DM2T",
          "amount": 104000,
          "amountOriginal": 104000,
          "description": "0_CALL_DOM_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 19760,
              "taxAmountOriginal": 19760,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 142,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DM2W",
          "amount": 80000,
          "amountOriginal": 80000,
          "description": "PRIMERA Y SEGUNDA MALETA DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 15200,
              "taxAmountOriginal": 15200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 143,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DM3T",
          "amount": 133000,
          "amountOriginal": 133000,
          "description": "0_CALL_DOM_3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 25270,
              "taxAmountOriginal": 25270,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 146,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DM3W",
          "amount": 125000,
          "amountOriginal": 125000,
          "description": "PRIMERA, SEGUNDA Y TERCERA MALETA DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 23750,
              "taxAmountOriginal": 23750,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 147,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DMW1",
          "amount": 30000,
          "amountOriginal": 30000,
          "description": "1_WEB_BOG<>CTG_1RA MALETA 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 5700,
              "taxAmountOriginal": 5700,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 148,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DMW2",
          "amount": 70000,
          "amountOriginal": 70000,
          "description": "1_WEB_BOG<>CTG_1RA Y 2DA MALETA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 13300,
              "taxAmountOriginal": 13300,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 149,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DMW3",
          "amount": 120000,
          "amountOriginal": 120000,
          "description": "1_WEB_BOG<>CTG_1RA, 2DA Y 3RA MALETA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 22800,
              "taxAmountOriginal": 22800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 150,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DW3M",
          "amount": 55000,
          "amountOriginal": 55000,
          "description": "2_MMB_DOM_3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 10450,
              "taxAmountOriginal": 10450,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 151,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "EBWV",
          "amount": 442800,
          "amountOriginal": 442800,
          "description": "0_CTOCCS_DEPORTIVO BODEGA",
          "avalaibleQuantity": 40,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 84132,
              "taxAmountOriginal": 84132,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 153,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "ECWV",
          "amount": 390000,
          "amountOriginal": 390000,
          "description": "0_CTOCCS_DEPORTIVO CABINA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 74100,
              "taxAmountOriginal": 74100,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 155,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "FEDR",
          "amount": 75100,
          "amountOriginal": 75100,
          "description": "FEE DOMESTICO RT",
          "avalaibleQuantity": 973,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "IVA Colombia",
              "taxAmount": 14269,
              "taxAmountOriginal": 14269,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Tarifa Administrativa (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 159,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FEE1",
          "amount": 72000,
          "amountOriginal": 72000,
          "description": "FEE INTER HASTA 354 USD",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "IVA Colombia",
              "taxAmount": 13680,
              "taxAmountOriginal": 13680,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Tarifa Administrativa (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 160,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FEE2",
          "amount": 134400,
          "amountOriginal": 134400,
          "description": "FEE INTER HASTA 590 USD",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "IVA Colombia",
              "taxAmount": 25536,
              "taxAmountOriginal": 25536,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Tarifa Administrativa (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 161,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FEE3",
          "amount": 220800,
          "amountOriginal": 220800,
          "description": "FEE INTER HASTA 944 USD",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "IVA Colombia",
              "taxAmount": 41952,
              "taxAmountOriginal": 41952,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Tarifa Administrativa (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 162,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FEE4",
          "amount": 456000,
          "amountOriginal": 456000,
          "description": "FEE INTER > 944",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "IVA Colombia",
              "taxAmount": 86640,
              "taxAmountOriginal": 86640,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Tarifa Administrativa (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 163,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FEED",
          "amount": 41300,
          "amountOriginal": 41300,
          "description": "FEE DOMESTICO OW",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "IVA Colombia",
              "taxAmount": 7847,
              "taxAmountOriginal": 7847,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Tarifa Administrativa (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 164,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FL1G",
          "amount": 0,
          "amountOriginal": 0,
          "description": "FLEX 1 GRATIS",
          "avalaibleQuantity": 889,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 169,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FLD1",
          "amount": 20000,
          "amountOriginal": 20000,
          "description": "0_CALL_WEB_EXONERACION_1CAMBIO_DOM",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3800,
              "taxAmountOriginal": 3800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 172,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FLI1",
          "amount": 19750,
          "amountOriginal": 19750,
          "description": "0_CALL_WEB_EXONERACION_1CAMBIO",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3752,
              "taxAmountOriginal": 3752,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 173,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FLWD",
          "amount": 20000,
          "amountOriginal": 20000,
          "description": "1_WEB_DOM_FLEX",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3800,
              "taxAmountOriginal": 3800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 174,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FLWI",
          "amount": 68000,
          "amountOriginal": 68000,
          "description": "1_WEB_INT_FLEX",
          "avalaibleQuantity": 9990,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 12920,
              "taxAmountOriginal": 12920,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 175,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FRC1",
          "amount": 9000,
          "amountOriginal": 9000,
          "description": "3_CI_DOM_FILA RAPIDA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 1710,
              "taxAmountOriginal": 1710,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 180,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FRC2",
          "amount": 28875,
          "amountOriginal": 28875,
          "description": "3_CI_INT_FILA RAPIDA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 5486,
              "taxAmountOriginal": 5486,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 181,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FRDC",
          "amount": 11000,
          "amountOriginal": 11000,
          "description": "0_CALL_DOM_FILA RAPIDA",
          "avalaibleQuantity": 70,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 2090,
              "taxAmountOriginal": 2090,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 182,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FRIC",
          "amount": 48000,
          "amountOriginal": 48000,
          "description": "0_CALL_INT_FILA RAPIDA",
          "avalaibleQuantity": 70,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 9120,
              "taxAmountOriginal": 9120,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 183,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FRMD",
          "amount": 8000,
          "amountOriginal": 8000,
          "description": "2_MMB_DOM_FILA RAPIDA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 1520,
              "taxAmountOriginal": 1520,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 184,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FRMI",
          "amount": 25025,
          "amountOriginal": 25025,
          "description": "2_MMB_INT_FILA RAPIDA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 4755,
              "taxAmountOriginal": 4755,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 185,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FRWV",
          "amount": 24000,
          "amountOriginal": 24000,
          "description": "0_CTOCCS_FILA RAPIDA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 4560,
              "taxAmountOriginal": 4560,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 186,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "I1MB",
          "amount": 115500,
          "amountOriginal": 115500,
          "description": "2_MMB_INT_1RA MALETA 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 21945,
              "taxAmountOriginal": 21945,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 196,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "I2WM",
          "amount": 154000,
          "amountOriginal": 154000,
          "description": "2_MMB_INT_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 29260,
              "taxAmountOriginal": 29260,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 198,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "I3MM",
          "amount": 423500,
          "amountOriginal": 423500,
          "description": "2_MMB_INT_1RA, 2DA Y 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 80465,
              "taxAmountOriginal": 80465,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 199,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "I3WM",
          "amount": 308000,
          "amountOriginal": 308000,
          "description": "2_MMB_INT_2DA, 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 58520,
              "taxAmountOriginal": 58520,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 201,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "IBWV",
          "amount": 443000,
          "amountOriginal": 443000,
          "description": "0_CTOCCS_MUSICAL BODEGA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 84170,
              "taxAmountOriginal": 84170,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 203,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "ICAW",
          "amount": 20000,
          "amountOriginal": 20000,
          "description": "CHECKIN INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3800,
              "taxAmountOriginal": 3800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 207,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "ICWV",
          "amount": 390000,
          "amountOriginal": 390000,
          "description": "0_CTOCCS_MUSICAL CABINA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 74100,
              "taxAmountOriginal": 74100,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 208,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "IEBW",
          "amount": 192000,
          "amountOriginal": 192000,
          "description": "DEPORTIVO EN BODEGA INTER",
          "avalaibleQuantity": 18,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 36480,
              "taxAmountOriginal": 36480,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 211,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "IECW",
          "amount": 252000,
          "amountOriginal": 252000,
          "description": "DEPORTIVO EN CABINA INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 47880,
              "taxAmountOriginal": 47880,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 214,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "IFRW",
          "amount": 20000,
          "amountOriginal": 20000,
          "description": "1_WEB_INT_FILA RAPIDA",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3800,
              "taxAmountOriginal": 3800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 219,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "IIBW",
          "amount": 192000,
          "amountOriginal": 192000,
          "description": "I. MUSICAL BODEGA INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 36480,
              "taxAmountOriginal": 36480,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 222,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "IICW",
          "amount": 252000,
          "amountOriginal": 252000,
          "description": "I. MUSICAL CABINA INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 47880,
              "taxAmountOriginal": 47880,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 225,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "IM1W",
          "amount": 100000,
          "amountOriginal": 100000,
          "description": "PRIMERA MALETA INTER 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 19000,
              "taxAmountOriginal": 19000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 231,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "IM2T",
          "amount": 348000,
          "amountOriginal": 348000,
          "description": "0_CALL_INT_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 66120,
              "taxAmountOriginal": 66120,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 234,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "IM2W",
          "amount": 240000,
          "amountOriginal": 240000,
          "description": "PRIMERA Y SEGUNDA MALETA INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 45600,
              "taxAmountOriginal": 45600,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 235,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "IM3T",
          "amount": 416000,
          "amountOriginal": 416000,
          "description": "0_CALL_INT_3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 79040,
              "taxAmountOriginal": 79040,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 238,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "IM3W",
          "amount": 380000,
          "amountOriginal": 380000,
          "description": "PRIMERA, SEGUNDA Y TERCERA MALETA INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 72200,
              "taxAmountOriginal": 72200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 239,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "INFT",
          "amount": 0,
          "amountOriginal": 0,
          "description": "INFANT UNDER 2 YEARS",
          "avalaibleQuantity": 25,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 240,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "INSD",
          "amount": 0,
          "amountOriginal": 0,
          "description": "INSURANCE RUTAS DOMESTICO",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 242,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "INSI",
          "amount": 0,
          "amountOriginal": 0,
          "description": "INSURANCE RUTAS INTERNACIONALES",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 243,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "IW3M",
          "amount": 154000,
          "amountOriginal": 154000,
          "description": "2_MMB_INT_3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 29260,
              "taxAmountOriginal": 29260,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 245,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "M12V",
          "amount": 0,
          "amountOriginal": 0,
          "description": "4_ATOCCS_1RA MALETA-CCS23KG-",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 253,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "M1WV",
          "amount": 0,
          "amountOriginal": 0,
          "description": "0_CTOCCS_1RA MALETA -CCS23KG-",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 256,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "M22V",
          "amount": 587000,
          "amountOriginal": 587000,
          "description": "CCS_SEGUNDA_MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 111530,
              "taxAmountOriginal": 111530,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 257,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "M2TV",
          "amount": 587000,
          "amountOriginal": 587000,
          "description": "0_CALL_CTOCCS_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 111530,
              "taxAmountOriginal": 111530,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 259,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "M32V",
          "amount": 640000,
          "amountOriginal": 640000,
          "description": "CCS_TERCERA_MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 121600,
              "taxAmountOriginal": 121600,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 260,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "M3C1",
          "amount": 385000,
          "amountOriginal": 385000,
          "description": "3_CI_INT_2DA Y 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 73150,
              "taxAmountOriginal": 73150,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 261,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "M3TV",
          "amount": 640000,
          "amountOriginal": 640000,
          "description": "0_CALL_CTOCCS_3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 121600,
              "taxAmountOriginal": 121600,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 263,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MAB1",
          "amount": 45000,
          "amountOriginal": 45000,
          "description": "PRIMERA MALETA ADZ 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 8550,
              "taxAmountOriginal": 8550,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 265,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MAB2",
          "amount": 110000,
          "amountOriginal": 110000,
          "description": "PRIMERA Y SEGUNDA MALETA ADZ",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 20900,
              "taxAmountOriginal": 20900,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 266,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MAB3",
          "amount": 175000,
          "amountOriginal": 175000,
          "description": "PRIMERA, SEGUNDA Y TERCERA MALETA ADZ",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 33250,
              "taxAmountOriginal": 33250,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 267,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MAB4",
          "amount": 136000,
          "amountOriginal": 136000,
          "description": "2_MMB_ADZ_2DA Y 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 25840,
              "taxAmountOriginal": 25840,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 268,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MAC1",
          "amount": 125000,
          "amountOriginal": 125000,
          "description": "0_CALL_ADZ_1RA MALETA 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 23750,
              "taxAmountOriginal": 23750,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 269,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MAC2",
          "amount": 110000,
          "amountOriginal": 110000,
          "description": "0_CALL_ADZ_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 20900,
              "taxAmountOriginal": 20900,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 270,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MAC3",
          "amount": 160000,
          "amountOriginal": 160000,
          "description": "0_CALL_ADZ_3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 30400,
              "taxAmountOriginal": 30400,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 271,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MBH1",
          "amount": 120000,
          "amountOriginal": 120000,
          "description": "PRIMERA MALETA HAV 20KG",
          "avalaibleQuantity": 186,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 22800,
              "taxAmountOriginal": 22800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 275,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MBH2",
          "amount": 320000,
          "amountOriginal": 320000,
          "description": "PRIMERA Y SEGUNDA MALETA HAV",
          "avalaibleQuantity": 80,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 60800,
              "taxAmountOriginal": 60800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 276,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MBH3",
          "amount": 640000,
          "amountOriginal": 640000,
          "description": "PRIMERA, SEGUNDA Y TERCERA MALETA HAV",
          "avalaibleQuantity": 60,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 121600,
              "taxAmountOriginal": 121600,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 277,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MC1C",
          "amount": 0,
          "amountOriginal": 0,
          "description": "0_CALL PRIMERA MALETA CCS23KG-",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 280,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MC1W",
          "amount": 0,
          "amountOriginal": 0,
          "description": "1RA MALETA CCS 23 KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 281,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MCCD",
          "amount": 65000,
          "amountOriginal": 65000,
          "description": "0_CALL_WEB_MASCOTA CABINA DOM",
          "avalaibleQuantity": 6,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 12350,
              "taxAmountOriginal": 12350,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 282,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "MCCI",
          "amount": 390000,
          "amountOriginal": 390000,
          "description": "0_CALL_INT_MUSICAL CABINA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 74100,
              "taxAmountOriginal": 74100,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 283,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MD1C",
          "amount": 120000,
          "amountOriginal": 120000,
          "description": "0_CALL_DOM_1RA MALETA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 22800,
              "taxAmountOriginal": 22800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 287,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MDCD",
          "amount": 63000,
          "amountOriginal": 63000,
          "description": "0_CALL_DOM_MUSICAL BODEGA",
          "avalaibleQuantity": 9990,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 11970,
              "taxAmountOriginal": 11970,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 288,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MDCI",
          "amount": 340000,
          "amountOriginal": 340000,
          "description": "0_CALL_INT_MUSICAL BODEGA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 64600,
              "taxAmountOriginal": 64600,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 289,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MFEE",
          "amount": 29625,
          "amountOriginal": 29625,
          "description": "FEE ADMINISTRATIVO MXCO",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "IVA Colombia",
              "taxAmount": 5629,
              "taxAmountOriginal": 5629,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Tarifa Administrativa (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 290,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "MI1C",
          "amount": 280000,
          "amountOriginal": 280000,
          "description": "0_CALL_INT_1RA MALETA 20KG",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 53200,
              "taxAmountOriginal": 53200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 291,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MICD",
          "amount": 83000,
          "amountOriginal": 83000,
          "description": "0_CALL_DOM_MUSICAL CABINA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 15770,
              "taxAmountOriginal": 15770,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 292,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MXPL",
          "amount": 0,
          "amountOriginal": 0,
          "description": "1_WEB_MX_1RA MALETA_TARIFA PLUS_CO 20KG_MX 25KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 296,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "NAME",
          "amount": 120000,
          "amountOriginal": 120000,
          "description": "CAMBIO DE NOMBRE",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 22800,
              "taxAmountOriginal": 22800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 297,
          "ssrCategory": 42,
          "flightId": 125456
        },
        {
          "codeType": "NREF",
          "amount": 0,
          "amountOriginal": 0,
          "description": "NO REFUND PENALTY",
          "avalaibleQuantity": 150,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 299,
          "ssrCategory": 42,
          "flightId": 125456
        },
        {
          "codeType": "PACC",
          "amount": 28875,
          "amountOriginal": 28875,
          "description": "3_CI_INT_PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 5486,
              "taxAmountOriginal": 5486,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 311,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PACD",
          "amount": 10000,
          "amountOriginal": 10000,
          "description": "0_CALL_DOM_PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 1900,
              "taxAmountOriginal": 1900,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 312,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PACI",
          "amount": 48000,
          "amountOriginal": 48000,
          "description": "0_CALL_INT_PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 9120,
              "taxAmountOriginal": 9120,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 313,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PAMD",
          "amount": 8000,
          "amountOriginal": 8000,
          "description": "2_MMB_DOM_PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 1520,
              "taxAmountOriginal": 1520,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 317,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PAMI",
          "amount": 25025,
          "amountOriginal": 25025,
          "description": "2_MMB_INT_PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 4755,
              "taxAmountOriginal": 4755,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 318,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PAWD",
          "amount": 5000,
          "amountOriginal": 5000,
          "description": "1_WEB_DOM_PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 950,
              "taxAmountOriginal": 950,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 319,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PAWI",
          "amount": 20000,
          "amountOriginal": 20000,
          "description": "1_WEB_INT_PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3800,
              "taxAmountOriginal": 3800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 320,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PMNC",
          "amount": 8000,
          "amountOriginal": 8000,
          "description": "CARGO MEDIO DE PAGO TC WEB",
          "avalaibleQuantity": 970,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta método de pago Colombia",
              "taxAmount": 1520,
              "taxAmountOriginal": 1520,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Medio de Pago VAT -CO-"
            }
          ],
          "serviceIDRadixx": 329,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PMNE",
          "amount": 5100,
          "amountOriginal": 5100,
          "description": "CARGO MEDIO DE PAGO EFECTIVO WEB",
          "avalaibleQuantity": 994,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta método de pago Colombia",
              "taxAmount": 969,
              "taxAmountOriginal": 969,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Medio de Pago VAT -CO-"
            }
          ],
          "serviceIDRadixx": 331,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PMNT",
          "amount": 0,
          "amountOriginal": 0,
          "description": "FEE ASSOCIATED WITH A PAYMENT METHOD.",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta método de pago Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Medio de Pago VAT -CO-"
            }
          ],
          "serviceIDRadixx": 332,
          "ssrCategory": 42,
          "flightId": 125456
        },
        {
          "codeType": "PN00",
          "amount": 0,
          "amountOriginal": 0,
          "description": "2_MMB_CAMBIO RESERVA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 333,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PND1",
          "amount": 70000,
          "amountOriginal": 70000,
          "description": "0_PNLT_DOM_1_72HRS Y 3HRS",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 334,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PND2",
          "amount": 70000,
          "amountOriginal": 70000,
          "description": "0_PNLT_DOM_2_15DIAS Y 72HRS",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 335,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PNI1",
          "amount": 128000,
          "amountOriginal": 128000,
          "description": "0_PNLT_INT_1_72HRS Y 3HRS",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 336,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PNI2",
          "amount": 128000,
          "amountOriginal": 128000,
          "description": "0_PNLT_INT_2_15DIAS Y 72HRS",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 337,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "SCMR",
          "amount": 0,
          "amountOriginal": 0,
          "description": "MOVILIDAD REDUCIDA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 344,
          "ssrCategory": 2,
          "flightId": 125456
        },
        {
          "codeType": "SCOX",
          "amount": 0,
          "amountOriginal": 0,
          "description": "CONCENTRADORES DE OXIGENO",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 345,
          "ssrCategory": 2,
          "flightId": 125456
        },
        {
          "codeType": "SDCM",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DISC. COG/MEN",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 347,
          "ssrCategory": 2,
          "flightId": 125456
        },
        {
          "codeType": "SDVA",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DISC. VIS/AUD",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 348,
          "ssrCategory": 2,
          "flightId": 125456
        },
        {
          "codeType": "SPAA",
          "amount": 0,
          "amountOriginal": 0,
          "description": "ANIMAL DE ASISTENCIA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 351,
          "ssrCategory": 2,
          "flightId": 125456
        },
        {
          "codeType": "SPEC",
          "amount": 0,
          "amountOriginal": 0,
          "description": "PASAJERO EN CUSTODIA",
          "avalaibleQuantity": 2,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 352,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "SPJI",
          "amount": 0,
          "amountOriginal": 0,
          "description": "JERINGUILLAS/INSULINA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 354,
          "ssrCategory": 2,
          "flightId": 125456
        },
        {
          "codeType": "SRPX",
          "amount": 0,
          "amountOriginal": 0,
          "description": "SILLA DE RUEDAS PAX",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 356,
          "ssrCategory": 2,
          "flightId": 125456
        },
        {
          "codeType": "SRWN",
          "amount": 0,
          "amountOriginal": 0,
          "description": "SILLA DE RUEDAS WINGO",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 357,
          "ssrCategory": 2,
          "flightId": 125456
        },
        {
          "codeType": "TTAC",
          "amount": 0,
          "amountOriginal": 0,
          "description": "TRASLADO ATO BLB - ALBROOK",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 375,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "TTAM",
          "amount": 0,
          "amountOriginal": 0,
          "description": "TRASLADO ATO BLB - MULTIPLAZA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 376,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "WWWD",
          "amount": 100000,
          "amountOriginal": 100000,
          "description": "0_CALL_WEB_DOM_ TARIFA EXTRA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 19000,
              "taxAmountOriginal": 19000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 393,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "XXXA",
          "amount": 67500,
          "amountOriginal": 67500,
          "description": "0_CALL_WEB_ADZ_TARIFA PLUS",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 12825,
              "taxAmountOriginal": 12825,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 396,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "XXXD",
          "amount": 56250,
          "amountOriginal": 56250,
          "description": "0_CALL_WEB_DOM_TARIFA PLUS",
          "avalaibleQuantity": 996,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 10688,
              "taxAmountOriginal": 10688,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 397,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "TADZ",
          "amount": 137000,
          "amountOriginal": 137000,
          "description": "TARJETA TURISMO SAN ANDRES",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 421,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "SPRX",
          "amount": 0,
          "amountOriginal": 0,
          "description": "SALDOS PENDIENTES RADIXX",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 521,
          "ssrCategory": 3,
          "flightId": 125456
        },
        {
          "codeType": "PETI",
          "amount": 400000,
          "amountOriginal": 400000,
          "description": "PET IN CABIN INTER",
          "avalaibleQuantity": 6,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 76000,
              "taxAmountOriginal": 76000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 541,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PLUS",
          "amount": 117492,
          "amountOriginal": 117492,
          "description": "BUNDLE PRECIO ESPECIAL",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 22323,
              "taxAmountOriginal": 22323,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 562,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PREM",
          "amount": 195820,
          "amountOriginal": 195820,
          "description": "BUNDLE PRECIO ESPECIAL",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 37206,
              "taxAmountOriginal": 37206,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 582,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "MKTD",
          "amount": 0,
          "amountOriginal": 0,
          "description": "MKT_DOM_PREORDER",
          "avalaibleQuantity": 1998,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 641,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "MKTI",
          "amount": 0,
          "amountOriginal": 0,
          "description": "MKT_INT_PREORDER",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 642,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "THAV",
          "amount": 82000,
          "amountOriginal": 82000,
          "description": "HAV_TARJETA_TURISMO",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 661,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PDNR",
          "amount": 34000,
          "amountOriginal": 34000,
          "description": "MASCOTA EN CABINA DOM NR",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 681,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "NAMI",
          "amount": 280000,
          "amountOriginal": 280000,
          "description": "CAMBIO DE NOMBRE INTER",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 701,
          "ssrCategory": 4,
          "flightId": 125456
        },
        {
          "codeType": "FRNR",
          "amount": 0,
          "amountOriginal": 0,
          "description": "FILA RÁPIDA NR",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 721,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PINR",
          "amount": 195000,
          "amountOriginal": 195000,
          "description": "MASCOTA EN CABINA INTER NR",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 722,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "MACA",
          "amount": 41000,
          "amountOriginal": 41000,
          "description": "00_NEW EQUIPAJE DE MANO EN CABINA/CARRY ON (12 KG)",
          "avalaibleQuantity": 100,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 7790,
              "taxAmountOriginal": 7790,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 762,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "PMBO",
          "amount": 48000,
          "amountOriginal": 48000,
          "description": "00_NEW PRIMERA MALETA BODEGA 20KG",
          "avalaibleQuantity": 997,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 9120,
              "taxAmountOriginal": 9120,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 763,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "SMBO",
          "amount": 62000,
          "amountOriginal": 62000,
          "description": "00_NEW SEGUNDA MALETA BODEGA 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 11780,
              "taxAmountOriginal": 11780,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 764,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "TMBO",
          "amount": 69000,
          "amountOriginal": 69000,
          "description": "00_NEW TERCERA MALETA BODEGA 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 13110,
              "taxAmountOriginal": 13110,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 765,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MUCA",
          "amount": 90000,
          "amountOriginal": 90000,
          "description": "00_NEW MUSICAL CABINA",
          "avalaibleQuantity": 70,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 17100,
              "taxAmountOriginal": 17100,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 769,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "MUBO",
          "amount": 80000,
          "amountOriginal": 80000,
          "description": "00_NEW MUSICAL BODEGA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 15200,
              "taxAmountOriginal": 15200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 770,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DPBO",
          "amount": 80000,
          "amountOriginal": 80000,
          "description": "00_NEW DEPORTIVO BODEGA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 15200,
              "taxAmountOriginal": 15200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 771,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DPCA",
          "amount": 90000,
          "amountOriginal": 90000,
          "description": "00_NEW DEPORTIVO CABINA",
          "avalaibleQuantity": 70,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 17100,
              "taxAmountOriginal": 17100,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 781,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "PYSM",
          "amount": 112000,
          "amountOriginal": 112000,
          "description": "PRIMERA Y SEGUNDA MALETA BODEGA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 21280,
              "taxAmountOriginal": 21280,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 801,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "SYTM",
          "amount": 131000,
          "amountOriginal": 131000,
          "description": "00_NEW SEGUNDA Y TERCERA MALETA BODEGA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 24890,
              "taxAmountOriginal": 24890,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 802,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "PSTM",
          "amount": 181000,
          "amountOriginal": 181000,
          "description": "PRIMERA,SEGUNDA,TERCERA MALETA BODEGA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 34390,
              "taxAmountOriginal": 34390,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 803,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "CHIN",
          "amount": 15000,
          "amountOriginal": 15000,
          "description": "00_NEW CHECK IN",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 2850,
              "taxAmountOriginal": 2850,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 821,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "FIRA",
          "amount": 12000,
          "amountOriginal": 12000,
          "description": "00_NEW FILA RAPIDA COUNTER",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 2280,
              "taxAmountOriginal": 2280,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 822,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PETT",
          "amount": 60000,
          "amountOriginal": 60000,
          "description": "00_NEW PET IN CABIN",
          "avalaibleQuantity": 6,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 11400,
              "taxAmountOriginal": 11400,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 823,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "PRIO",
          "amount": 8000,
          "amountOriginal": 8000,
          "description": "00_NEW PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 1520,
              "taxAmountOriginal": 1520,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 841,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "INAD",
          "amount": 0,
          "amountOriginal": 0,
          "description": "INADMITIDOS MANEJO ATO",
          "avalaibleQuantity": 100,
          "taxes": [],
          "serviceIDRadixx": 881,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "MG20",
          "amount": 0,
          "amountOriginal": 0,
          "description": "MALETA GRATIS BUNDLES CCS",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 921,
          "ssrCategory": 22,
          "flightId": 125456
        },
        {
          "codeType": "DEVI",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DEVOLUCIÓN DE IMPUESTO POR NACIONALIDAD O RESIDENCIA",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 941,
          "ssrCategory": 3,
          "flightId": 125456
        },
        {
          "codeType": "CATU",
          "amount": 0,
          "amountOriginal": 0,
          "description": "CARGO POR IMPUESTOS DE TURISMO",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 942,
          "ssrCategory": 3,
          "flightId": 125456
        },
        {
          "codeType": "DVL8",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DEVOLUCIÓN DE IMPUESTO POR NACIONALIDAD O RESIDENCIA",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 943,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "CAL8",
          "amount": 0,
          "amountOriginal": 0,
          "description": "CARGO POR IMPUESTOS DE TURISMO",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 944,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "CKIN",
          "amount": 0,
          "amountOriginal": 0,
          "description": "COMENTARIO RESERVA",
          "avalaibleQuantity": 9999,
          "taxes": [],
          "serviceIDRadixx": 961,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "DIFR",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DIFI CON REEMBOLSO EN CALL",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 981,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "ZZZI",
          "amount": 0,
          "amountOriginal": 0,
          "description": "0_CALL_WEB_INT_ TARIFA BASIC",
          "avalaibleQuantity": 1998,
          "taxes": [],
          "serviceIDRadixx": 1001,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "ZZZD",
          "amount": 0,
          "amountOriginal": 0,
          "description": "0_CALL_WEB_DOM_ TARIFA BASIC",
          "avalaibleQuantity": 1938,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 1002,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "YYYD",
          "amount": 39000,
          "amountOriginal": 39000,
          "description": "0_CALL_WEB_DOM_ TARIFA STANDARD",
          "avalaibleQuantity": 976,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 7410,
              "taxAmountOriginal": 7410,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 1022,
          "ssrCategory": 1,
          "flightId": 125456
        },
        {
          "codeType": "XXXM",
          "amount": 80000,
          "amountOriginal": 80000,
          "description": "PLUS DOM- NEW",
          "avalaibleQuantity": 979,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 15200,
              "taxAmountOriginal": 15200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 1062,
          "ssrCategory": 1,
          "flightId": 125456
        }
      ]
    },
    {
      "from": "CTG",
      "to": "BOG",
      "departureDate": "2024-02-16T14:36:00.000+00:00",
      "flightId": 125592,
      "services": [
        {
          "codeType": "123C",
          "amount": 360000,
          "amountOriginal": 360000,
          "description": "1_WEB_CCS_2DA, 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 68400,
              "taxAmountOriginal": 68400,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 1,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "123M",
          "amount": 280000,
          "amountOriginal": 280000,
          "description": "1_WEB_MX_2DA, 3RA MALETA_TARIFA PLUS",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 53200,
              "taxAmountOriginal": 53200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 2,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "12CM",
          "amount": 180000,
          "amountOriginal": 180000,
          "description": "1_WEB_CCS_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 34200,
              "taxAmountOriginal": 34200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 3,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "12MC",
          "amount": 140000,
          "amountOriginal": 140000,
          "description": "1_WEB_MX_2DA MALETA_TARIFA PLUS",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 26600,
              "taxAmountOriginal": 26600,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 4,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "12WM",
          "amount": 276500,
          "amountOriginal": 276500,
          "description": "2_MMB_INT_1RA Y 2DA MALETA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 52535,
              "taxAmountOriginal": 52535,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 5,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "1MCI",
          "amount": 134750,
          "amountOriginal": 134750,
          "description": "3_CI_INT_1RA MALETA 20KG",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 25602,
              "taxAmountOriginal": 25602,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 6,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "2CIM",
          "amount": 327250,
          "amountOriginal": 327250,
          "description": "3_CI_INT_1RA Y 2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 62178,
              "taxAmountOriginal": 62178,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 7,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "2MAB",
          "amount": 65000,
          "amountOriginal": 65000,
          "description": "SEGUNDA MALETA ADZ",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 12350,
              "taxAmountOriginal": 12350,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 8,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "2MCI",
          "amount": 192500,
          "amountOriginal": 192500,
          "description": "3_CI_INT_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 36575,
              "taxAmountOriginal": 36575,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 9,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "2MDB",
          "amount": 45000,
          "amountOriginal": 45000,
          "description": "SEGUNDA MALETA DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 8550,
              "taxAmountOriginal": 8550,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 10,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "2MHB",
          "amount": 200000,
          "amountOriginal": 200000,
          "description": "SEGUNDA MALETA HAV",
          "avalaibleQuantity": 70,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 38000,
              "taxAmountOriginal": 38000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 11,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "2MIB",
          "amount": 140000,
          "amountOriginal": 140000,
          "description": "SEGUNDA MALETA INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 26600,
              "taxAmountOriginal": 26600,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 12,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "3CIM",
          "amount": 519750,
          "amountOriginal": 519750,
          "description": "3_CI_INT_1RA, 2DA Y 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 98752,
              "taxAmountOriginal": 98752,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 13,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "3MAB",
          "amount": 130000,
          "amountOriginal": 130000,
          "description": "SEGUNDA Y TERCERA MALETA ADZ",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 24700,
              "taxAmountOriginal": 24700,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 14,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "3MCI",
          "amount": 192500,
          "amountOriginal": 192500,
          "description": "3_CI_INT_3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 36575,
              "taxAmountOriginal": 36575,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 15,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "3MDB",
          "amount": 90000,
          "amountOriginal": 90000,
          "description": "SEGUNDA Y TERCERA MALETA DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 17100,
              "taxAmountOriginal": 17100,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 16,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "3MHB",
          "amount": 520000,
          "amountOriginal": 520000,
          "description": "SEGUNDA Y TERCERA MALETA HAV",
          "avalaibleQuantity": 50,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 98800,
              "taxAmountOriginal": 98800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 17,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "3MIB",
          "amount": 280000,
          "amountOriginal": 280000,
          "description": "SEGUNDA Y TERCERA MALETA INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 53200,
              "taxAmountOriginal": 53200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 18,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "AP06",
          "amount": 0,
          "amountOriginal": 0,
          "description": "CARRY ON ORIGINAL 10 KGS",
          "avalaibleQuantity": 100,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 26,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "AP10",
          "amount": 0,
          "amountOriginal": 0,
          "description": "ART PERSONAL ORIGINAL 10 KGS",
          "avalaibleQuantity": 988,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 27,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "ASD1",
          "amount": 30000,
          "amountOriginal": 30000,
          "description": "SILLA EXTRA ESPACIO DOM",
          "avalaibleQuantity": 989,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 5700,
              "taxAmountOriginal": 5700,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 28,
          "ssrCategory": 8,
          "flightId": 125592
        },
        {
          "codeType": "ASD2",
          "amount": 20000,
          "amountOriginal": 20000,
          "description": "SILLA ESTANDAR AELANTE DOM",
          "avalaibleQuantity": 990,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3800,
              "taxAmountOriginal": 3800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 29,
          "ssrCategory": 8,
          "flightId": 125592
        },
        {
          "codeType": "ASD3",
          "amount": 18000,
          "amountOriginal": 18000,
          "description": "SILLA ESTANDAR DOM",
          "avalaibleQuantity": 990,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3420,
              "taxAmountOriginal": 3420,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 30,
          "ssrCategory": 8,
          "flightId": 125592
        },
        {
          "codeType": "ASD7",
          "amount": 25000,
          "amountOriginal": 25000,
          "description": "SILLA EXTRA ESPACIO DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 4750,
              "taxAmountOriginal": 4750,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 34,
          "ssrCategory": 8,
          "flightId": 125592
        },
        {
          "codeType": "ASD8",
          "amount": 15000,
          "amountOriginal": 15000,
          "description": "SILLA ESTANDAR ATRÁS DOM",
          "avalaibleQuantity": 992,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 2850,
              "taxAmountOriginal": 2850,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 35,
          "ssrCategory": 8,
          "flightId": 125592
        },
        {
          "codeType": "ASDU",
          "amount": 5000,
          "amountOriginal": 5000,
          "description": "0_CALL_WEB_DOM_UPGRADE EE",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 950,
              "taxAmountOriginal": 950,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 38,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "ASI1",
          "amount": 113575,
          "amountOriginal": 113575,
          "description": "SILLA EXTRA ESPACIO INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 21579,
              "taxAmountOriginal": 21579,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 39,
          "ssrCategory": 8,
          "flightId": 125592
        },
        {
          "codeType": "ASI2",
          "amount": 68000,
          "amountOriginal": 68000,
          "description": "SILLA ESTANDAR ADELANTE INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 12920,
              "taxAmountOriginal": 12920,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 40,
          "ssrCategory": 8,
          "flightId": 125592
        },
        {
          "codeType": "ASI3",
          "amount": 60000,
          "amountOriginal": 60000,
          "description": "SILLA ESTANDAR INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 11400,
              "taxAmountOriginal": 11400,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 41,
          "ssrCategory": 8,
          "flightId": 125592
        },
        {
          "codeType": "ASI7",
          "amount": 76000,
          "amountOriginal": 76000,
          "description": "SILLA EXTRA ESPACIO INTER",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 14440,
              "taxAmountOriginal": 14440,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 45,
          "ssrCategory": 8,
          "flightId": 125592
        },
        {
          "codeType": "ASI8",
          "amount": 48000,
          "amountOriginal": 48000,
          "description": "SILLA ESTANDAR ATRAS INTER",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 9120,
              "taxAmountOriginal": 9120,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 46,
          "ssrCategory": 8,
          "flightId": 125592
        },
        {
          "codeType": "ASIU",
          "amount": 30800,
          "amountOriginal": 30800,
          "description": "0_CALL_WEB_INT_UPGRADE EE",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 5852,
              "taxAmountOriginal": 5852,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 49,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "AVIH",
          "amount": 55000,
          "amountOriginal": 55000,
          "description": "ANIMAL IN HOLD - SPECIFY DETAI",
          "avalaibleQuantity": 4,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 10450,
              "taxAmountOriginal": 10450,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 50,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "B1MC",
          "amount": 400000,
          "amountOriginal": 400000,
          "description": "0_CALL_HAV_1RA MALETA 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 76000,
              "taxAmountOriginal": 76000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 52,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "B1MW",
          "amount": 100000,
          "amountOriginal": 100000,
          "description": "I- MALETA 1 WEB",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 19000,
              "taxAmountOriginal": 19000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 53,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "B2MW",
          "amount": 480000,
          "amountOriginal": 480000,
          "description": "0_CALL_HAV_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 91200,
              "taxAmountOriginal": 91200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 54,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "B3MW",
          "amount": 800000,
          "amountOriginal": 800000,
          "description": "0_CALL_HAV_3RA MALETA",
          "avalaibleQuantity": 5994,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 152000,
              "taxAmountOriginal": 152000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 55,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "BFEE",
          "amount": 59100,
          "amountOriginal": 59100,
          "description": "TARIFA ADMINISTRATIVA WEB",
          "avalaibleQuantity": 904,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "IVA Colombia",
              "taxAmount": 11229,
              "taxAmountOriginal": 11229,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Tarifa Administrativa (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 57,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "C12D",
          "amount": 56000,
          "amountOriginal": 56000,
          "description": "CARRY ON DOM CABINA",
          "avalaibleQuantity": 100,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 10640,
              "taxAmountOriginal": 10640,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 66,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "C12I",
          "amount": 128000,
          "amountOriginal": 128000,
          "description": "CARRY ON CABINA INTER",
          "avalaibleQuantity": 100,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 24320,
              "taxAmountOriginal": 24320,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 67,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "CAWV",
          "amount": 24000,
          "amountOriginal": 24000,
          "description": "0_CTOCCS_CHECKIN",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 4560,
              "taxAmountOriginal": 4560,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 72,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "CDCC",
          "amount": 20000,
          "amountOriginal": 20000,
          "description": "0_CALL_DOM_CHECKIN",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3800,
              "taxAmountOriginal": 3800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 73,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "CH12",
          "amount": 360000,
          "amountOriginal": 360000,
          "description": "CARRY ON",
          "avalaibleQuantity": 100,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 68400,
              "taxAmountOriginal": 68400,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 74,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "CICC",
          "amount": 48000,
          "amountOriginal": 48000,
          "description": "0_CALL_INT_CHECKIN",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 9120,
              "taxAmountOriginal": 9120,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 76,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "CICI",
          "amount": 28875,
          "amountOriginal": 28875,
          "description": "3_CI_INT_CHECKIN",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 5486,
              "taxAmountOriginal": 5486,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 77,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "CIHB",
          "amount": 0,
          "amountOriginal": 0,
          "description": "HAV_CHECKIN",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 78,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "CIMD",
          "amount": 10000,
          "amountOriginal": 10000,
          "description": "2_MMB_DOM_CHECKIN",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 1900,
              "taxAmountOriginal": 1900,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 79,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "CIMI",
          "amount": 25025,
          "amountOriginal": 25025,
          "description": "2_MMB_INT_CHECKIN",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 4755,
              "taxAmountOriginal": 4755,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 80,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "CIPA",
          "amount": 9000,
          "amountOriginal": 9000,
          "description": "3_CI_DOM_PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 1710,
              "taxAmountOriginal": 1710,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 81,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "CM1C",
          "amount": 220000,
          "amountOriginal": 220000,
          "description": "0_CALL_MX_1RA MALETA_TARIFA PLUS_CO 20KG_MX 25KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 41800,
              "taxAmountOriginal": 41800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 82,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "CM1W",
          "amount": 100000,
          "amountOriginal": 100000,
          "description": "1_WEB_MX_1RA MALETA_TARIFA LIGHT_CO 20KG_MX 25KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 19000,
              "taxAmountOriginal": 19000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 83,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "COO1",
          "amount": 0,
          "amountOriginal": 0,
          "description": "CARRY ON ORIGINAL 10 KGS",
          "avalaibleQuantity": 100,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 85,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "CORR",
          "amount": 0,
          "amountOriginal": 0,
          "description": "CORRECCION DE NOMBRE",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 86,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "CV19",
          "amount": 0,
          "amountOriginal": 0,
          "description": "0_CALL_WEB_EXONERACION PENALIDAD",
          "avalaibleQuantity": 987,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 87,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "D1CI",
          "amount": 55000,
          "amountOriginal": 55000,
          "description": "3_CI_DOM_1RA MALETA 20KG",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 10450,
              "taxAmountOriginal": 10450,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 88,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "D1MB",
          "amount": 45000,
          "amountOriginal": 45000,
          "description": "2_MMB_DOM_1RA MALETA 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 8550,
              "taxAmountOriginal": 8550,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 89,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "D2CI",
          "amount": 130000,
          "amountOriginal": 130000,
          "description": "3_CI_DOM_1RA Y 2DA MALETA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 24700,
              "taxAmountOriginal": 24700,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 90,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "D2MB",
          "amount": 100000,
          "amountOriginal": 100000,
          "description": "2_MMB_DOM_1RA Y 2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 19000,
              "taxAmountOriginal": 19000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 91,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "D2WM",
          "amount": 55000,
          "amountOriginal": 55000,
          "description": "2_MMB_DOM_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 10450,
              "taxAmountOriginal": 10450,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 93,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "D3CI",
          "amount": 195000,
          "amountOriginal": 195000,
          "description": "3_CI_DOM_1RA, 2DA Y 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 37050,
              "taxAmountOriginal": 37050,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 94,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "D3MB",
          "amount": 155000,
          "amountOriginal": 155000,
          "description": "2_MMB_DOM_1RA, 2DA Y 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 29450,
              "taxAmountOriginal": 29450,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 95,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "D3WM",
          "amount": 110000,
          "amountOriginal": 110000,
          "description": "2_MMB_DOM_2DA, 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 20900,
              "taxAmountOriginal": 20900,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 97,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DCAW",
          "amount": 5000,
          "amountOriginal": 5000,
          "description": "CHECKIN DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 950,
              "taxAmountOriginal": 950,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 102,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "DCCD",
          "amount": 83000,
          "amountOriginal": 83000,
          "description": "0_CALL_DOM_DEPORTIVO CABINA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 15770,
              "taxAmountOriginal": 15770,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 104,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DCCI",
          "amount": 390000,
          "amountOriginal": 390000,
          "description": "0_CALL_INT_DEPORTIVO CABINA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 74100,
              "taxAmountOriginal": 74100,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 105,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DCI1",
          "amount": 65000,
          "amountOriginal": 65000,
          "description": "3_CI_DOM_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 12350,
              "taxAmountOriginal": 12350,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 106,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DCI2",
          "amount": 130000,
          "amountOriginal": 130000,
          "description": "3_CI_DOM_2DA Y 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 24700,
              "taxAmountOriginal": 24700,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 107,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DCI3",
          "amount": 65000,
          "amountOriginal": 65000,
          "description": "3_CI_DOM_3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 12350,
              "taxAmountOriginal": 12350,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 108,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DCIC",
          "amount": 12000,
          "amountOriginal": 12000,
          "description": "3_CI_DOM-CHECKIN",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 2280,
              "taxAmountOriginal": 2280,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 109,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "DDCD",
          "amount": 98000,
          "amountOriginal": 98000,
          "description": "0_CALL_DOM_DEPORTIVO BODEGA",
          "avalaibleQuantity": 40,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 18620,
              "taxAmountOriginal": 18620,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 110,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DDCI",
          "amount": 442800,
          "amountOriginal": 442800,
          "description": "0_CALL_INT_DEPORTIVO BODEGA",
          "avalaibleQuantity": 18,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 84132,
              "taxAmountOriginal": 84132,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 111,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DEBW",
          "amount": 60000,
          "amountOriginal": 60000,
          "description": "DEPORTIVO EN BODEGA DOM",
          "avalaibleQuantity": 40,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 11400,
              "taxAmountOriginal": 11400,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 114,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DECW",
          "amount": 83000,
          "amountOriginal": 83000,
          "description": "DEPORTIVO EN CABINA DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 15770,
              "taxAmountOriginal": 15770,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 117,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DFRW",
          "amount": 5000,
          "amountOriginal": 5000,
          "description": "1_WEB_DOM_FILA RAPIDA",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 950,
              "taxAmountOriginal": 950,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 122,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "DIBW",
          "amount": 60000,
          "amountOriginal": 60000,
          "description": "I. MUSICAL BODEGA DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 11400,
              "taxAmountOriginal": 11400,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 126,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DICW",
          "amount": 62000,
          "amountOriginal": 62000,
          "description": "I. MUSICAL CABINA DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 11780,
              "taxAmountOriginal": 11780,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 129,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DIF1",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DIFERENCIA TARIFA_EXONERACION",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 130,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "DIF2",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DIFERENCIA SERVICIOS_EXONERACION",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 131,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "DIF3",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DIFERENCIA MEDIOS PAGO_EXONERACION",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 132,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "DIFI",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DIFERENCIA TASAS, IMPUESTOS",
          "avalaibleQuantity": 998,
          "taxes": [],
          "serviceIDRadixx": 133,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "DIFS",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DIFERENCIA SERVICIOS",
          "avalaibleQuantity": 998,
          "taxes": [],
          "serviceIDRadixx": 134,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "DIFT",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DIFERENCIA TARIFA",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 135,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "DM1W",
          "amount": 35000,
          "amountOriginal": 35000,
          "description": "PRIMERA MALETA DOM 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 6650,
              "taxAmountOriginal": 6650,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 139,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DM2T",
          "amount": 104000,
          "amountOriginal": 104000,
          "description": "0_CALL_DOM_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 19760,
              "taxAmountOriginal": 19760,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 142,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DM2W",
          "amount": 80000,
          "amountOriginal": 80000,
          "description": "PRIMERA Y SEGUNDA MALETA DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 15200,
              "taxAmountOriginal": 15200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 143,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DM3T",
          "amount": 133000,
          "amountOriginal": 133000,
          "description": "0_CALL_DOM_3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 25270,
              "taxAmountOriginal": 25270,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 146,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DM3W",
          "amount": 125000,
          "amountOriginal": 125000,
          "description": "PRIMERA, SEGUNDA Y TERCERA MALETA DOM",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 23750,
              "taxAmountOriginal": 23750,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 147,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DMW1",
          "amount": 30000,
          "amountOriginal": 30000,
          "description": "1_WEB_BOG<>CTG_1RA MALETA 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 5700,
              "taxAmountOriginal": 5700,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 148,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DMW2",
          "amount": 70000,
          "amountOriginal": 70000,
          "description": "1_WEB_BOG<>CTG_1RA Y 2DA MALETA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 13300,
              "taxAmountOriginal": 13300,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 149,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DMW3",
          "amount": 120000,
          "amountOriginal": 120000,
          "description": "1_WEB_BOG<>CTG_1RA, 2DA Y 3RA MALETA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 22800,
              "taxAmountOriginal": 22800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 150,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DW3M",
          "amount": 55000,
          "amountOriginal": 55000,
          "description": "2_MMB_DOM_3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 10450,
              "taxAmountOriginal": 10450,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 151,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "EBWV",
          "amount": 442800,
          "amountOriginal": 442800,
          "description": "0_CTOCCS_DEPORTIVO BODEGA",
          "avalaibleQuantity": 40,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 84132,
              "taxAmountOriginal": 84132,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 153,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "ECWV",
          "amount": 390000,
          "amountOriginal": 390000,
          "description": "0_CTOCCS_DEPORTIVO CABINA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 74100,
              "taxAmountOriginal": 74100,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 155,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "FEDR",
          "amount": 75100,
          "amountOriginal": 75100,
          "description": "FEE DOMESTICO RT",
          "avalaibleQuantity": 990,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "IVA Colombia",
              "taxAmount": 14269,
              "taxAmountOriginal": 14269,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Tarifa Administrativa (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 159,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FEE1",
          "amount": 72000,
          "amountOriginal": 72000,
          "description": "FEE INTER HASTA 354 USD",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "IVA Colombia",
              "taxAmount": 13680,
              "taxAmountOriginal": 13680,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Tarifa Administrativa (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 160,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FEE2",
          "amount": 134400,
          "amountOriginal": 134400,
          "description": "FEE INTER HASTA 590 USD",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "IVA Colombia",
              "taxAmount": 25536,
              "taxAmountOriginal": 25536,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Tarifa Administrativa (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 161,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FEE3",
          "amount": 220800,
          "amountOriginal": 220800,
          "description": "FEE INTER HASTA 944 USD",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "IVA Colombia",
              "taxAmount": 41952,
              "taxAmountOriginal": 41952,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Tarifa Administrativa (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 162,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FEE4",
          "amount": 456000,
          "amountOriginal": 456000,
          "description": "FEE INTER > 944",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "IVA Colombia",
              "taxAmount": 86640,
              "taxAmountOriginal": 86640,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Tarifa Administrativa (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 163,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FEED",
          "amount": 41300,
          "amountOriginal": 41300,
          "description": "FEE DOMESTICO OW",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "IVA Colombia",
              "taxAmount": 7847,
              "taxAmountOriginal": 7847,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Tarifa Administrativa (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 164,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FL1G",
          "amount": 0,
          "amountOriginal": 0,
          "description": "FLEX 1 GRATIS",
          "avalaibleQuantity": 888,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 169,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FLD1",
          "amount": 20000,
          "amountOriginal": 20000,
          "description": "0_CALL_WEB_EXONERACION_1CAMBIO_DOM",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3800,
              "taxAmountOriginal": 3800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 172,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FLI1",
          "amount": 19750,
          "amountOriginal": 19750,
          "description": "0_CALL_WEB_EXONERACION_1CAMBIO",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3752,
              "taxAmountOriginal": 3752,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 173,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FLWD",
          "amount": 20000,
          "amountOriginal": 20000,
          "description": "1_WEB_DOM_FLEX",
          "avalaibleQuantity": 9997,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3800,
              "taxAmountOriginal": 3800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 174,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FLWI",
          "amount": 68000,
          "amountOriginal": 68000,
          "description": "1_WEB_INT_FLEX",
          "avalaibleQuantity": 9990,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 12920,
              "taxAmountOriginal": 12920,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 175,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FRC1",
          "amount": 9000,
          "amountOriginal": 9000,
          "description": "3_CI_DOM_FILA RAPIDA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 1710,
              "taxAmountOriginal": 1710,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 180,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FRC2",
          "amount": 28875,
          "amountOriginal": 28875,
          "description": "3_CI_INT_FILA RAPIDA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 5486,
              "taxAmountOriginal": 5486,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 181,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FRDC",
          "amount": 11000,
          "amountOriginal": 11000,
          "description": "0_CALL_DOM_FILA RAPIDA",
          "avalaibleQuantity": 70,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 2090,
              "taxAmountOriginal": 2090,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 182,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FRIC",
          "amount": 48000,
          "amountOriginal": 48000,
          "description": "0_CALL_INT_FILA RAPIDA",
          "avalaibleQuantity": 70,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 9120,
              "taxAmountOriginal": 9120,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 183,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FRMD",
          "amount": 8000,
          "amountOriginal": 8000,
          "description": "2_MMB_DOM_FILA RAPIDA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 1520,
              "taxAmountOriginal": 1520,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 184,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FRMI",
          "amount": 25025,
          "amountOriginal": 25025,
          "description": "2_MMB_INT_FILA RAPIDA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 4755,
              "taxAmountOriginal": 4755,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 185,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FRWV",
          "amount": 24000,
          "amountOriginal": 24000,
          "description": "0_CTOCCS_FILA RAPIDA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 4560,
              "taxAmountOriginal": 4560,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 186,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "I1MB",
          "amount": 115500,
          "amountOriginal": 115500,
          "description": "2_MMB_INT_1RA MALETA 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 21945,
              "taxAmountOriginal": 21945,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 196,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "I2WM",
          "amount": 154000,
          "amountOriginal": 154000,
          "description": "2_MMB_INT_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 29260,
              "taxAmountOriginal": 29260,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 198,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "I3MM",
          "amount": 423500,
          "amountOriginal": 423500,
          "description": "2_MMB_INT_1RA, 2DA Y 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 80465,
              "taxAmountOriginal": 80465,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 199,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "I3WM",
          "amount": 308000,
          "amountOriginal": 308000,
          "description": "2_MMB_INT_2DA, 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 58520,
              "taxAmountOriginal": 58520,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 201,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "IBWV",
          "amount": 443000,
          "amountOriginal": 443000,
          "description": "0_CTOCCS_MUSICAL BODEGA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 84170,
              "taxAmountOriginal": 84170,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 203,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "ICAW",
          "amount": 20000,
          "amountOriginal": 20000,
          "description": "CHECKIN INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3800,
              "taxAmountOriginal": 3800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 207,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "ICWV",
          "amount": 390000,
          "amountOriginal": 390000,
          "description": "0_CTOCCS_MUSICAL CABINA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 74100,
              "taxAmountOriginal": 74100,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 208,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "IEBW",
          "amount": 192000,
          "amountOriginal": 192000,
          "description": "DEPORTIVO EN BODEGA INTER",
          "avalaibleQuantity": 18,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 36480,
              "taxAmountOriginal": 36480,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 211,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "IECW",
          "amount": 252000,
          "amountOriginal": 252000,
          "description": "DEPORTIVO EN CABINA INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 47880,
              "taxAmountOriginal": 47880,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 214,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "IFRW",
          "amount": 20000,
          "amountOriginal": 20000,
          "description": "1_WEB_INT_FILA RAPIDA",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3800,
              "taxAmountOriginal": 3800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 219,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "IIBW",
          "amount": 192000,
          "amountOriginal": 192000,
          "description": "I. MUSICAL BODEGA INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 36480,
              "taxAmountOriginal": 36480,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 222,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "IICW",
          "amount": 252000,
          "amountOriginal": 252000,
          "description": "I. MUSICAL CABINA INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 47880,
              "taxAmountOriginal": 47880,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 225,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "IM1W",
          "amount": 100000,
          "amountOriginal": 100000,
          "description": "PRIMERA MALETA INTER 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 19000,
              "taxAmountOriginal": 19000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 231,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "IM2T",
          "amount": 348000,
          "amountOriginal": 348000,
          "description": "0_CALL_INT_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 66120,
              "taxAmountOriginal": 66120,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 234,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "IM2W",
          "amount": 240000,
          "amountOriginal": 240000,
          "description": "PRIMERA Y SEGUNDA MALETA INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 45600,
              "taxAmountOriginal": 45600,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 235,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "IM3T",
          "amount": 416000,
          "amountOriginal": 416000,
          "description": "0_CALL_INT_3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 79040,
              "taxAmountOriginal": 79040,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 238,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "IM3W",
          "amount": 380000,
          "amountOriginal": 380000,
          "description": "PRIMERA, SEGUNDA Y TERCERA MALETA INTER",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 72200,
              "taxAmountOriginal": 72200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 239,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "INFT",
          "amount": 0,
          "amountOriginal": 0,
          "description": "INFANT UNDER 2 YEARS",
          "avalaibleQuantity": 28,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 240,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "INSD",
          "amount": 0,
          "amountOriginal": 0,
          "description": "INSURANCE RUTAS DOMESTICO",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 242,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "INSI",
          "amount": 0,
          "amountOriginal": 0,
          "description": "INSURANCE RUTAS INTERNACIONALES",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 243,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "IW3M",
          "amount": 154000,
          "amountOriginal": 154000,
          "description": "2_MMB_INT_3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 29260,
              "taxAmountOriginal": 29260,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 245,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "M12V",
          "amount": 0,
          "amountOriginal": 0,
          "description": "4_ATOCCS_1RA MALETA-CCS23KG-",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 253,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "M1WV",
          "amount": 0,
          "amountOriginal": 0,
          "description": "0_CTOCCS_1RA MALETA -CCS23KG-",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 256,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "M22V",
          "amount": 587000,
          "amountOriginal": 587000,
          "description": "CCS_SEGUNDA_MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 111530,
              "taxAmountOriginal": 111530,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 257,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "M2TV",
          "amount": 587000,
          "amountOriginal": 587000,
          "description": "0_CALL_CTOCCS_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 111530,
              "taxAmountOriginal": 111530,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 259,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "M32V",
          "amount": 640000,
          "amountOriginal": 640000,
          "description": "CCS_TERCERA_MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 121600,
              "taxAmountOriginal": 121600,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 260,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "M3C1",
          "amount": 385000,
          "amountOriginal": 385000,
          "description": "3_CI_INT_2DA Y 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 73150,
              "taxAmountOriginal": 73150,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 261,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "M3TV",
          "amount": 640000,
          "amountOriginal": 640000,
          "description": "0_CALL_CTOCCS_3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 121600,
              "taxAmountOriginal": 121600,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 263,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MAB1",
          "amount": 45000,
          "amountOriginal": 45000,
          "description": "PRIMERA MALETA ADZ 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 8550,
              "taxAmountOriginal": 8550,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 265,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MAB2",
          "amount": 110000,
          "amountOriginal": 110000,
          "description": "PRIMERA Y SEGUNDA MALETA ADZ",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 20900,
              "taxAmountOriginal": 20900,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 266,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MAB3",
          "amount": 175000,
          "amountOriginal": 175000,
          "description": "PRIMERA, SEGUNDA Y TERCERA MALETA ADZ",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 33250,
              "taxAmountOriginal": 33250,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 267,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MAB4",
          "amount": 136000,
          "amountOriginal": 136000,
          "description": "2_MMB_ADZ_2DA Y 3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 25840,
              "taxAmountOriginal": 25840,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 268,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MAC1",
          "amount": 125000,
          "amountOriginal": 125000,
          "description": "0_CALL_ADZ_1RA MALETA 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 23750,
              "taxAmountOriginal": 23750,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 269,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MAC2",
          "amount": 110000,
          "amountOriginal": 110000,
          "description": "0_CALL_ADZ_2DA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 20900,
              "taxAmountOriginal": 20900,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 270,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MAC3",
          "amount": 160000,
          "amountOriginal": 160000,
          "description": "0_CALL_ADZ_3RA MALETA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 30400,
              "taxAmountOriginal": 30400,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 271,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MBH1",
          "amount": 120000,
          "amountOriginal": 120000,
          "description": "PRIMERA MALETA HAV 20KG",
          "avalaibleQuantity": 186,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 22800,
              "taxAmountOriginal": 22800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 275,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MBH2",
          "amount": 320000,
          "amountOriginal": 320000,
          "description": "PRIMERA Y SEGUNDA MALETA HAV",
          "avalaibleQuantity": 80,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 60800,
              "taxAmountOriginal": 60800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 276,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MBH3",
          "amount": 640000,
          "amountOriginal": 640000,
          "description": "PRIMERA, SEGUNDA Y TERCERA MALETA HAV",
          "avalaibleQuantity": 60,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 121600,
              "taxAmountOriginal": 121600,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 277,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MC1C",
          "amount": 0,
          "amountOriginal": 0,
          "description": "0_CALL PRIMERA MALETA CCS23KG-",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 280,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MC1W",
          "amount": 0,
          "amountOriginal": 0,
          "description": "1RA MALETA CCS 23 KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 281,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MCCD",
          "amount": 65000,
          "amountOriginal": 65000,
          "description": "0_CALL_WEB_MASCOTA CABINA DOM",
          "avalaibleQuantity": 6,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 12350,
              "taxAmountOriginal": 12350,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 282,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "MCCI",
          "amount": 390000,
          "amountOriginal": 390000,
          "description": "0_CALL_INT_MUSICAL CABINA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 74100,
              "taxAmountOriginal": 74100,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 283,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MD1C",
          "amount": 120000,
          "amountOriginal": 120000,
          "description": "0_CALL_DOM_1RA MALETA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 22800,
              "taxAmountOriginal": 22800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 287,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MDCD",
          "amount": 63000,
          "amountOriginal": 63000,
          "description": "0_CALL_DOM_MUSICAL BODEGA",
          "avalaibleQuantity": 9990,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 11970,
              "taxAmountOriginal": 11970,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 288,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MDCI",
          "amount": 340000,
          "amountOriginal": 340000,
          "description": "0_CALL_INT_MUSICAL BODEGA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 64600,
              "taxAmountOriginal": 64600,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 289,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MFEE",
          "amount": 29625,
          "amountOriginal": 29625,
          "description": "FEE ADMINISTRATIVO MXCO",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "IVA Colombia",
              "taxAmount": 5629,
              "taxAmountOriginal": 5629,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Tarifa Administrativa (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 290,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "MI1C",
          "amount": 280000,
          "amountOriginal": 280000,
          "description": "0_CALL_INT_1RA MALETA 20KG",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 53200,
              "taxAmountOriginal": 53200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 291,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MICD",
          "amount": 83000,
          "amountOriginal": 83000,
          "description": "0_CALL_DOM_MUSICAL CABINA",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 15770,
              "taxAmountOriginal": 15770,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 292,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MXPL",
          "amount": 0,
          "amountOriginal": 0,
          "description": "1_WEB_MX_1RA MALETA_TARIFA PLUS_CO 20KG_MX 25KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 296,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "NAME",
          "amount": 120000,
          "amountOriginal": 120000,
          "description": "CAMBIO DE NOMBRE",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 22800,
              "taxAmountOriginal": 22800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 297,
          "ssrCategory": 42,
          "flightId": 125592
        },
        {
          "codeType": "NREF",
          "amount": 0,
          "amountOriginal": 0,
          "description": "NO REFUND PENALTY",
          "avalaibleQuantity": 150,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 299,
          "ssrCategory": 42,
          "flightId": 125592
        },
        {
          "codeType": "PACC",
          "amount": 28875,
          "amountOriginal": 28875,
          "description": "3_CI_INT_PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 5486,
              "taxAmountOriginal": 5486,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 311,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PACD",
          "amount": 10000,
          "amountOriginal": 10000,
          "description": "0_CALL_DOM_PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 1900,
              "taxAmountOriginal": 1900,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 312,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PACI",
          "amount": 48000,
          "amountOriginal": 48000,
          "description": "0_CALL_INT_PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 9120,
              "taxAmountOriginal": 9120,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 313,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PAMD",
          "amount": 8000,
          "amountOriginal": 8000,
          "description": "2_MMB_DOM_PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 1520,
              "taxAmountOriginal": 1520,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 317,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PAMI",
          "amount": 25025,
          "amountOriginal": 25025,
          "description": "2_MMB_INT_PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 4755,
              "taxAmountOriginal": 4755,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 318,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PAWD",
          "amount": 5000,
          "amountOriginal": 5000,
          "description": "1_WEB_DOM_PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 950,
              "taxAmountOriginal": 950,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 319,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PAWI",
          "amount": 20000,
          "amountOriginal": 20000,
          "description": "1_WEB_INT_PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 30,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 3800,
              "taxAmountOriginal": 3800,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 320,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PMNC",
          "amount": 8000,
          "amountOriginal": 8000,
          "description": "CARGO MEDIO DE PAGO TC WEB",
          "avalaibleQuantity": 971,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta método de pago Colombia",
              "taxAmount": 1520,
              "taxAmountOriginal": 1520,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Medio de Pago VAT -CO-"
            }
          ],
          "serviceIDRadixx": 329,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PMNE",
          "amount": 5100,
          "amountOriginal": 5100,
          "description": "CARGO MEDIO DE PAGO EFECTIVO WEB",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta método de pago Colombia",
              "taxAmount": 969,
              "taxAmountOriginal": 969,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Medio de Pago VAT -CO-"
            }
          ],
          "serviceIDRadixx": 331,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PMNT",
          "amount": 0,
          "amountOriginal": 0,
          "description": "FEE ASSOCIATED WITH A PAYMENT METHOD.",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta método de pago Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Medio de Pago VAT -CO-"
            }
          ],
          "serviceIDRadixx": 332,
          "ssrCategory": 42,
          "flightId": 125592
        },
        {
          "codeType": "PN00",
          "amount": 0,
          "amountOriginal": 0,
          "description": "2_MMB_CAMBIO RESERVA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 333,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PND1",
          "amount": 70000,
          "amountOriginal": 70000,
          "description": "0_PNLT_DOM_1_72HRS Y 3HRS",
          "avalaibleQuantity": 998,
          "taxes": [],
          "serviceIDRadixx": 334,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PND2",
          "amount": 70000,
          "amountOriginal": 70000,
          "description": "0_PNLT_DOM_2_15DIAS Y 72HRS",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 335,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PNI1",
          "amount": 128000,
          "amountOriginal": 128000,
          "description": "0_PNLT_INT_1_72HRS Y 3HRS",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 336,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PNI2",
          "amount": 128000,
          "amountOriginal": 128000,
          "description": "0_PNLT_INT_2_15DIAS Y 72HRS",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 337,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "SCMR",
          "amount": 0,
          "amountOriginal": 0,
          "description": "MOVILIDAD REDUCIDA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 344,
          "ssrCategory": 2,
          "flightId": 125592
        },
        {
          "codeType": "SCOX",
          "amount": 0,
          "amountOriginal": 0,
          "description": "CONCENTRADORES DE OXIGENO",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 345,
          "ssrCategory": 2,
          "flightId": 125592
        },
        {
          "codeType": "SDCM",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DISC. COG/MEN",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 347,
          "ssrCategory": 2,
          "flightId": 125592
        },
        {
          "codeType": "SDVA",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DISC. VIS/AUD",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 348,
          "ssrCategory": 2,
          "flightId": 125592
        },
        {
          "codeType": "SPAA",
          "amount": 0,
          "amountOriginal": 0,
          "description": "ANIMAL DE ASISTENCIA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 351,
          "ssrCategory": 2,
          "flightId": 125592
        },
        {
          "codeType": "SPEC",
          "amount": 0,
          "amountOriginal": 0,
          "description": "PASAJERO EN CUSTODIA",
          "avalaibleQuantity": 2,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 352,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "SPJI",
          "amount": 0,
          "amountOriginal": 0,
          "description": "JERINGUILLAS/INSULINA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 354,
          "ssrCategory": 2,
          "flightId": 125592
        },
        {
          "codeType": "SRPX",
          "amount": 0,
          "amountOriginal": 0,
          "description": "SILLA DE RUEDAS PAX",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 356,
          "ssrCategory": 2,
          "flightId": 125592
        },
        {
          "codeType": "SRWN",
          "amount": 0,
          "amountOriginal": 0,
          "description": "SILLA DE RUEDAS WINGO",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 357,
          "ssrCategory": 2,
          "flightId": 125592
        },
        {
          "codeType": "TTAC",
          "amount": 0,
          "amountOriginal": 0,
          "description": "TRASLADO ATO BLB - ALBROOK",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 375,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "TTAM",
          "amount": 0,
          "amountOriginal": 0,
          "description": "TRASLADO ATO BLB - MULTIPLAZA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 376,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "WWWD",
          "amount": 100000,
          "amountOriginal": 100000,
          "description": "0_CALL_WEB_DOM_ TARIFA EXTRA",
          "avalaibleQuantity": 998,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 19000,
              "taxAmountOriginal": 19000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 393,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "XXXA",
          "amount": 67500,
          "amountOriginal": 67500,
          "description": "0_CALL_WEB_ADZ_TARIFA PLUS",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 12825,
              "taxAmountOriginal": 12825,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 396,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "XXXD",
          "amount": 56250,
          "amountOriginal": 56250,
          "description": "0_CALL_WEB_DOM_TARIFA PLUS",
          "avalaibleQuantity": 992,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 10688,
              "taxAmountOriginal": 10688,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 397,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "TADZ",
          "amount": 137000,
          "amountOriginal": 137000,
          "description": "TARJETA TURISMO SAN ANDRES",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 421,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "SPRX",
          "amount": 0,
          "amountOriginal": 0,
          "description": "SALDOS PENDIENTES RADIXX",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 521,
          "ssrCategory": 3,
          "flightId": 125592
        },
        {
          "codeType": "PETI",
          "amount": 400000,
          "amountOriginal": 400000,
          "description": "PET IN CABIN INTER",
          "avalaibleQuantity": 6,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 76000,
              "taxAmountOriginal": 76000,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 541,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PLUS",
          "amount": 117492,
          "amountOriginal": 117492,
          "description": "BUNDLE PRECIO ESPECIAL",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 22323,
              "taxAmountOriginal": 22323,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 562,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PREM",
          "amount": 195820,
          "amountOriginal": 195820,
          "description": "BUNDLE PRECIO ESPECIAL",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 37206,
              "taxAmountOriginal": 37206,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 582,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "MKTD",
          "amount": 0,
          "amountOriginal": 0,
          "description": "MKT_DOM_PREORDER",
          "avalaibleQuantity": 1998,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 641,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "MKTI",
          "amount": 0,
          "amountOriginal": 0,
          "description": "MKT_INT_PREORDER",
          "avalaibleQuantity": 9999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 642,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "THAV",
          "amount": 82000,
          "amountOriginal": 82000,
          "description": "HAV_TARJETA_TURISMO",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 661,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PDNR",
          "amount": 34000,
          "amountOriginal": 34000,
          "description": "MASCOTA EN CABINA DOM NR",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 681,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "NAMI",
          "amount": 280000,
          "amountOriginal": 280000,
          "description": "CAMBIO DE NOMBRE INTER",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 701,
          "ssrCategory": 4,
          "flightId": 125592
        },
        {
          "codeType": "FRNR",
          "amount": 0,
          "amountOriginal": 0,
          "description": "FILA RÁPIDA NR",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 721,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PINR",
          "amount": 195000,
          "amountOriginal": 195000,
          "description": "MASCOTA EN CABINA INTER NR",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 722,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "MACA",
          "amount": 41000,
          "amountOriginal": 41000,
          "description": "00_NEW EQUIPAJE DE MANO EN CABINA/CARRY ON (12 KG)",
          "avalaibleQuantity": 99,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 7790,
              "taxAmountOriginal": 7790,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 762,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "PMBO",
          "amount": 48000,
          "amountOriginal": 48000,
          "description": "00_NEW PRIMERA MALETA BODEGA 20KG",
          "avalaibleQuantity": 991,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 9120,
              "taxAmountOriginal": 9120,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 763,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "SMBO",
          "amount": 62000,
          "amountOriginal": 62000,
          "description": "00_NEW SEGUNDA MALETA BODEGA 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 11780,
              "taxAmountOriginal": 11780,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 764,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "TMBO",
          "amount": 69000,
          "amountOriginal": 69000,
          "description": "00_NEW TERCERA MALETA BODEGA 20KG",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 13110,
              "taxAmountOriginal": 13110,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 765,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MUCA",
          "amount": 90000,
          "amountOriginal": 90000,
          "description": "00_NEW MUSICAL CABINA",
          "avalaibleQuantity": 70,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 17100,
              "taxAmountOriginal": 17100,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 769,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "MUBO",
          "amount": 80000,
          "amountOriginal": 80000,
          "description": "00_NEW MUSICAL BODEGA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 15200,
              "taxAmountOriginal": 15200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 770,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DPBO",
          "amount": 80000,
          "amountOriginal": 80000,
          "description": "00_NEW DEPORTIVO BODEGA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 15200,
              "taxAmountOriginal": 15200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 771,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DPCA",
          "amount": 90000,
          "amountOriginal": 90000,
          "description": "00_NEW DEPORTIVO CABINA",
          "avalaibleQuantity": 70,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 17100,
              "taxAmountOriginal": 17100,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 781,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "PYSM",
          "amount": 112000,
          "amountOriginal": 112000,
          "description": "PRIMERA Y SEGUNDA MALETA BODEGA",
          "avalaibleQuantity": 998,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 21280,
              "taxAmountOriginal": 21280,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 801,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "SYTM",
          "amount": 131000,
          "amountOriginal": 131000,
          "description": "00_NEW SEGUNDA Y TERCERA MALETA BODEGA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 24890,
              "taxAmountOriginal": 24890,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 802,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "PSTM",
          "amount": 181000,
          "amountOriginal": 181000,
          "description": "PRIMERA,SEGUNDA,TERCERA MALETA BODEGA",
          "avalaibleQuantity": 999,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 34390,
              "taxAmountOriginal": 34390,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 803,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "CHIN",
          "amount": 15000,
          "amountOriginal": 15000,
          "description": "00_NEW CHECK IN",
          "avalaibleQuantity": 995,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 2850,
              "taxAmountOriginal": 2850,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 821,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "FIRA",
          "amount": 12000,
          "amountOriginal": 12000,
          "description": "00_NEW FILA RAPIDA COUNTER",
          "avalaibleQuantity": 28,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 2280,
              "taxAmountOriginal": 2280,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 822,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PETT",
          "amount": 60000,
          "amountOriginal": 60000,
          "description": "00_NEW PET IN CABIN",
          "avalaibleQuantity": 6,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 11400,
              "taxAmountOriginal": 11400,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 823,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "PRIO",
          "amount": 8000,
          "amountOriginal": 8000,
          "description": "00_NEW PRIORIDAD ABORDAJE",
          "avalaibleQuantity": 28,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 1520,
              "taxAmountOriginal": 1520,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 841,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "INAD",
          "amount": 0,
          "amountOriginal": 0,
          "description": "INADMITIDOS MANEJO ATO",
          "avalaibleQuantity": 100,
          "taxes": [],
          "serviceIDRadixx": 881,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "MG20",
          "amount": 0,
          "amountOriginal": 0,
          "description": "MALETA GRATIS BUNDLES CCS",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 921,
          "ssrCategory": 22,
          "flightId": 125592
        },
        {
          "codeType": "DEVI",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DEVOLUCIÓN DE IMPUESTO POR NACIONALIDAD O RESIDENCIA",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 941,
          "ssrCategory": 3,
          "flightId": 125592
        },
        {
          "codeType": "CATU",
          "amount": 0,
          "amountOriginal": 0,
          "description": "CARGO POR IMPUESTOS DE TURISMO",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 942,
          "ssrCategory": 3,
          "flightId": 125592
        },
        {
          "codeType": "DVL8",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DEVOLUCIÓN DE IMPUESTO POR NACIONALIDAD O RESIDENCIA",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 943,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "CAL8",
          "amount": 0,
          "amountOriginal": 0,
          "description": "CARGO POR IMPUESTOS DE TURISMO",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 944,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "CKIN",
          "amount": 0,
          "amountOriginal": 0,
          "description": "COMENTARIO RESERVA",
          "avalaibleQuantity": 9999,
          "taxes": [],
          "serviceIDRadixx": 961,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "DIFR",
          "amount": 0,
          "amountOriginal": 0,
          "description": "DIFI CON REEMBOLSO EN CALL",
          "avalaibleQuantity": 999,
          "taxes": [],
          "serviceIDRadixx": 981,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "ZZZI",
          "amount": 0,
          "amountOriginal": 0,
          "description": "0_CALL_WEB_INT_ TARIFA BASIC",
          "avalaibleQuantity": 1998,
          "taxes": [],
          "serviceIDRadixx": 1001,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "ZZZD",
          "amount": 0,
          "amountOriginal": 0,
          "description": "0_CALL_WEB_DOM_ TARIFA BASIC",
          "avalaibleQuantity": 1937,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 0,
              "taxAmountOriginal": 0,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 1002,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "YYYD",
          "amount": 39000,
          "amountOriginal": 39000,
          "description": "0_CALL_WEB_DOM_ TARIFA STANDARD",
          "avalaibleQuantity": 958,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 7410,
              "taxAmountOriginal": 7410,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 1022,
          "ssrCategory": 1,
          "flightId": 125592
        },
        {
          "codeType": "XXXM",
          "amount": 80000,
          "amountOriginal": 80000,
          "description": "PLUS DOM- NEW",
          "avalaibleQuantity": 997,
          "taxes": [
            {
              "taxCode": "YS",
              "taxDescription": "Impuesto venta servicio opcional Colombia",
              "taxAmount": 15200,
              "taxAmountOriginal": 15200,
              "taxCurrencyCode": "COP",
              "taxOriginalDescription": "YS Ancillary VAT (Domestic) CO"
            }
          ],
          "serviceIDRadixx": 1062,
          "ssrCategory": 1,
          "flightId": 125592
        }
      ]
    }
  ]