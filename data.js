var APP_DATA = {
  "scenes": [
    {
      "id": "0-sambookas-entry",
      "name": "Sambookas Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.3594888325773304,
        "pitch": 0.5051480711329752,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 3.131879606280843,
          "pitch": 0.3513685618505793,
          "rotation": 0,
          "target": "1-hotspot-1"
        },
        {
          "yaw": -2.3862880438715344,
          "pitch": 0.13554051827776625,
          "rotation": 0,
          "target": "2-hotspot-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hotspot-1",
      "name": "Hotspot 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.4450838002526503,
        "pitch": -0.0557181914437308,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -1.53528958195119,
          "pitch": 0.36690733326275193,
          "rotation": 0,
          "target": "0-sambookas-entry"
        },
        {
          "yaw": -3.1385630449554895,
          "pitch": 0.41442375294169587,
          "rotation": 0,
          "target": "2-hotspot-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hotspot-2",
      "name": "Hotspot 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.0252283718008623,
        "pitch": -0.006555081346322211,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -0.06710662702805692,
          "pitch": 0.34098506458203914,
          "rotation": 0,
          "target": "1-hotspot-1"
        },
        {
          "yaw": -1.1265426426529253,
          "pitch": 0.19361407035287925,
          "rotation": 0,
          "target": "0-sambookas-entry"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
