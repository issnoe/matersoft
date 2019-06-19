module.exports = function () {
  return JSON.stringify({
      "mongodb": {
        "core": {
          "connectionString": "",
          "can_reset": true
        },
        "clients": {
          "connectionString": "",
          "can_reset": true
        },
        "notification": {
          "connectionString": "",
          "can_reset": true
        }
      },
      "maps": {
        "width": 0,
        "height": 0,
        "scale": 0,
        "zoom": 0,
        "type": 0,
        "apiKey": 0
      },
      "s3": {
        "bucket": "skyalert3-data"
      },
      "storage": {
        "name": "",
        "key": "",
        "container": ""
      },
      "webQuake": {
        "similarDistanceM": 0,
        "similarMagnitude": 0,
        "similarTimeSec": 0,
        "container": "",
        "autoNotifyMagnitude": {
          "ssn": 0,
          "emsc": 0,
          "usgs": 0
        }
      },
      "apiRoot": "",
      "storageProvider": "",
      "geonames": {
        "username": ""
      },
      "asset": {
        "container": ""
      },
      "wundergroundCDN": {
        "freshness": {
          "short": 0,
          "long": 0
        },
        "coordinatesRounding": {
          "json": 3,
          "image": 0
        }
      },
      "minimumVersion": {
        "android": 0,
        "ios": 0
      },
      "recommendedVersion": {
        "android": 0,
        "ios": 0
      },
      "aws": {
        "access": {
          "accessKeyId": "",
          "secretAccessKey": "",
          "region": ""
        },
        "pinpoint": {
          "access": {
            "region": ""
          },
          "application": {
            "applicationId": ""
          }
        },
        "lambda": {
          "access": {
            "region": ""
          }
        }
      },
      "notificationBlaster": {
        "masterLambdaName": ""
      },
      "name": ""
    }
  }