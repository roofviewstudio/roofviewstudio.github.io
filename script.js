(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist,this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist,this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist,this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist,this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist,this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "contentOpaque": false,
 "minHeight": 20,
 "defaultVRPointer": "laser",
 "paddingLeft": 0,
 "definitions": [{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36",
   "camera": "this.panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03",
   "camera": "this.panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3",
   "camera": "this.panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 2, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist"
},
{
 "hfovMin": "120%",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "VR_test",
 "id": "panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_t.jpg",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36",
   "camera": "this.panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03",
   "camera": "this.panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3",
   "camera": "this.panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist"
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36",
   "camera": "this.panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03",
   "camera": "this.panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3",
   "camera": "this.panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist"
},
{
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration",
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36",
   "camera": "this.panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03",
   "camera": "this.panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3",
   "camera": "this.panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36",
   "camera": "this.panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03",
   "camera": "this.panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3",
   "camera": "this.panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 2, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist"
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36",
   "camera": "this.panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03",
   "camera": "this.panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3",
   "camera": "this.panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 2, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist"
},
{
 "hfovMin": "120%",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "VR_test - Copy",
 "id": "panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_t.jpg",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36",
   "camera": "this.panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03",
   "camera": "this.panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "VR_test - Copy (2)",
 "id": "panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36",
 "vfov": 180,
 "partial": false,
 "thumbnailUrl": "media/panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_t.jpg",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36",
   "camera": "this.panorama_168654EF_1AB8_DDDD_41B7_7A757A89CE36_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03",
   "camera": "this.panorama_1131AD27_1AB8_AC4D_41B5_975F652D4C03_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3",
   "camera": "this.panorama_11CDD4F1_1AB8_BDC5_41B5_BC3435B366B3_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 2, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist"
},
{
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "textDecoration": "none",
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "gap": 5,
 "fontStyle": "normal",
 "width": 60,
 "iconWidth": 30,
 "minHeight": 1,
 "fontFamily": "Arial",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "layout": "horizontal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "shadow": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "height": 60,
 "pressedIconHeight": 30,
 "class": "Button",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "paddingTop": 0,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "mode": "toggle",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "pressedIconWidth": 30,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Button Settings Mute"
 },
 "fontWeight": "normal",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ]
},
{
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "toolTipPaddingTop": 7,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipPaddingRight": 10,
 "progressBottom": 0,
 "class": "ViewerArea",
 "toolTipShadowOpacity": 0,
 "height": "100%",
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "progressHeight": 10,
 "toolTipShadowSpread": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "toolTipOpacity": 0.5,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "toolTipPaddingLeft": 10,
 "progressLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontSize": 13,
 "toolTipBorderColor": "#767676",
 "toolTipFontColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarRight": 0,
 "minHeight": 50,
 "displayTooltipInTouchScreens": true,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderSize": 0,
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadOpacity": 1,
 "minWidth": 100,
 "shadow": false,
 "top": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 7,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 5,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": true,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "Main Viewer"
 },
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "playbackBarLeft": 0
},
{
 "layout": "absolute",
 "paddingBottom": 0,
 "id": "Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
 "left": 30,
 "width": 271,
 "contentOpaque": false,
 "minHeight": 1,
 "children": [
  "this.Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
  "this.Label_0C5F23A8_3BA0_A6FF_419F_468451E37918"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": 20,
 "height": 97,
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "--STICKER"
 },
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "top": 0,
 "height": 60,
 "class": "Container",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "--BUTTON SET"
 },
 "backgroundColorRatios": [
  0
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "vertical",
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "width": 60,
 "contentOpaque": false,
 "minHeight": 1,
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "right": 15,
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "top": 62,
 "height": 300,
 "class": "Container",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-button set"
 },
 "backgroundColorRatios": [
  0.02
 ],
 "visible": false,
 "gap": 0
},
{
 "layout": "horizontal",
 "paddingBottom": 0,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "children": [
  "this.IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
  "this.IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
  "this.IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
  "this.IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
  "this.IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
  "this.IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "width": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "height": 90,
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "paddingRight": 30,
 "horizontalAlign": "right",
 "data": {
  "name": "-button set container"
 },
 "gap": 3
},
{
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "propagateClick": true,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "---INFO photo"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "propagateClick": true,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "---PANORAMA LIST"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "propagateClick": true,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "---LOCATION"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "propagateClick": true,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "---FLOORPLAN"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "propagateClick": true,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "---PHOTOALBUM"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "propagateClick": true,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "---REALTOR"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "gap": 10
},
{
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "textDecoration": "none",
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "gap": 5,
 "fontStyle": "normal",
 "width": 60,
 "iconWidth": 30,
 "minHeight": 1,
 "fontFamily": "Arial",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "layout": "horizontal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "shadow": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "height": 60,
 "pressedIconHeight": 30,
 "class": "Button",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "paddingTop": 0,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "mode": "toggle",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "pressedIconWidth": 30,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "fontWeight": "normal",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ]
},
{
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "textDecoration": "none",
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "gap": 5,
 "fontStyle": "normal",
 "rollOverIconWidth": 30,
 "width": 60,
 "iconWidth": 30,
 "minHeight": 1,
 "fontFamily": "Arial",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverIconHeight": 30,
 "iconHeight": 30,
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "fontSize": 12,
 "layout": "horizontal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "shadow": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "pressedIconHeight": 30,
 "class": "Button",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "paddingTop": 0,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "mode": "toggle",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "pressedIconWidth": 30,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Button Settings HS"
 },
 "fontWeight": "normal",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ]
},
{
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "textDecoration": "none",
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "fontStyle": "normal",
 "width": 60,
 "iconWidth": 30,
 "minHeight": 1,
 "fontFamily": "Arial",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "fontSize": 12,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "shadow": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "layout": "horizontal",
 "height": 60,
 "class": "Button",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "paddingTop": 0,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Button settings VR"
 },
 "fontWeight": "normal",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "gap": 5
},
{
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "textDecoration": "none",
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "gap": 5,
 "fontStyle": "normal",
 "rollOverIconWidth": 30,
 "width": 60,
 "iconWidth": 30,
 "minHeight": 1,
 "fontFamily": "Arial",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverIconHeight": 30,
 "iconHeight": 30,
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "fontSize": 12,
 "layout": "horizontal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "shadow": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "pressedIconHeight": 30,
 "class": "Button",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "paddingTop": 0,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "mode": "toggle",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "pressedIconWidth": 30,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Button Settings Gyro"
 },
 "fontWeight": "normal",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "paddingBottom": 0,
 "id": "Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
 "left": 0,
 "width": 239,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "text": "LOREM",
 "minWidth": 1,
 "textShadowHorizontalLength": 0,
 "shadow": false,
 "textShadowVerticalLength": 0,
 "textShadowBlurRadius": 10,
 "top": 5,
 "height": 67,
 "class": "Label",
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "fontSize": 54,
 "backgroundOpacity": 0,
 "textShadowOpacity": 1,
 "propagateClick": false,
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold",
 "fontStyle": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "paddingBottom": 0,
 "id": "Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
 "left": 0,
 "width": 236,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "text": "DOLOR SIT AMET",
 "minWidth": 1,
 "textShadowHorizontalLength": 0,
 "shadow": false,
 "textShadowVerticalLength": 0,
 "textShadowBlurRadius": 10,
 "top": 66,
 "height": 32,
 "class": "Label",
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "fontSize": 18,
 "backgroundOpacity": 0,
 "textShadowOpacity": 1,
 "propagateClick": false,
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "text 2"
 },
 "fontWeight": "normal",
 "fontStyle": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "paddingBottom": 0,
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "left": 76,
 "width": 450,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "text": "COMPANY NAME",
 "minWidth": 1,
 "shadow": false,
 "top": "0%",
 "height": 60,
 "class": "Label",
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "fontSize": 31,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Label Company Name"
 },
 "fontWeight": "normal",
 "fontStyle": "normal"
},
{
 "maxHeight": 30,
 "paddingBottom": 0,
 "id": "Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
 "left": 30,
 "width": "4.222%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "url": "skin/Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50.png",
 "minWidth": 1,
 "shadow": false,
 "top": "0%",
 "bottom": "0%",
 "class": "Image",
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 40,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "scaleMode": "fit_inside",
 "data": {
  "name": "logo"
 }
},
{
 "layout": "horizontal",
 "paddingBottom": 0,
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "width": 1199,
 "contentOpaque": false,
 "minHeight": 1,
 "children": [
  "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
  "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
  "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
  "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
  "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
  "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "right": "0%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "top": "0%",
 "height": 60,
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "paddingRight": 15,
 "horizontalAlign": "right",
 "data": {
  "name": "-button set container"
 },
 "gap": 3
},
{
 "iconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52.png",
 "cursor": "hand",
 "maxHeight": 101,
 "paddingBottom": 0,
 "id": "IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
 "width": 44,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52_rollover.png",
 "minWidth": 1,
 "shadow": false,
 "class": "IconButton",
 "height": 44,
 "borderSize": 0,
 "paddingTop": 0,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 101,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Info"
 },
 "transparencyActive": true
},
{
 "iconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8.png",
 "cursor": "hand",
 "maxHeight": 101,
 "paddingBottom": 0,
 "id": "IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
 "width": 44,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8_rollover.png",
 "minWidth": 1,
 "shadow": false,
 "class": "IconButton",
 "height": 44,
 "borderSize": 0,
 "paddingTop": 0,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 101,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Thumblist"
 },
 "transparencyActive": true
},
{
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "cursor": "hand",
 "maxHeight": 101,
 "paddingBottom": 0,
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "width": 44,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "minWidth": 1,
 "shadow": false,
 "class": "IconButton",
 "height": 44,
 "borderSize": 0,
 "paddingTop": 0,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 101,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Location"
 },
 "transparencyActive": true
},
{
 "iconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA.png",
 "cursor": "hand",
 "maxHeight": 101,
 "paddingBottom": 0,
 "id": "IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
 "width": 44,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA_rollover.png",
 "minWidth": 1,
 "shadow": false,
 "class": "IconButton",
 "height": 44,
 "borderSize": 0,
 "paddingTop": 0,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 101,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Photoalbum"
 },
 "transparencyActive": true
},
{
 "iconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B.png",
 "cursor": "hand",
 "maxHeight": 101,
 "paddingBottom": 0,
 "id": "IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
 "width": 44,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B_rollover.png",
 "minWidth": 1,
 "shadow": false,
 "class": "IconButton",
 "height": 44,
 "borderSize": 0,
 "paddingTop": 0,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 101,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "transparencyActive": true
},
{
 "iconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8.png",
 "cursor": "hand",
 "maxHeight": 101,
 "paddingBottom": 0,
 "id": "IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
 "width": 44,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_rollover.png",
 "minWidth": 1,
 "shadow": false,
 "class": "IconButton",
 "height": 44,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_pressed.png",
 "paddingTop": 0,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 101,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Realtor"
 },
 "transparencyActive": true
},
{
 "iconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93.png",
 "cursor": "hand",
 "maxHeight": 101,
 "paddingBottom": 0,
 "id": "IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93",
 "width": 44,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93_rollover.png",
 "minWidth": 1,
 "shadow": false,
 "height": 44,
 "class": "IconButton",
 "borderSize": 0,
 "paddingTop": 0,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 101,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Video"
 },
 "transparencyActive": true
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "right": "15%",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadow": true,
 "scrollBarMargin": 2,
 "top": "10%",
 "shadowBlurRadius": 25,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadowOpacity": 0.3,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "layout": "vertical",
 "paddingBottom": 0,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "right": "15%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "top": "10%",
 "bottom": "80%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "paddingRight": 20,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "right": "15%",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "top": "10%",
 "shadow": true,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadowOpacity": 0.3,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "right": "15%",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "top": "10%",
 "shadow": true,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadowOpacity": 0.3,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "right": "15%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "top": "10%",
 "bottom": "80%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "paddingRight": 20,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "layout": "vertical",
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "right": "15%",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "top": "10%",
 "shadow": true,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadowOpacity": 0.3,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "vertical",
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "right": "15%",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "top": "10%",
 "shadow": true,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadowOpacity": 0.3,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "right": "15%",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadow": true,
 "scrollBarMargin": 2,
 "top": "10%",
 "shadowBlurRadius": 25,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadowOpacity": 0.3,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "layout": "vertical",
 "paddingBottom": 0,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "right": "15%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "top": "10%",
 "bottom": "80%",
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "paddingRight": 20,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "gap": 10
},
{
 "fontFamily": "Montserrat",
 "paddingBottom": 0,
 "textDecoration": "none",
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
 "width": 116,
 "popUpPaddingLeft": 15,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "popUpShadowOpacity": 0,
 "paddingLeft": 15,
 "backgroundColorDirection": "vertical",
 "popUpGap": 2,
 "popUpShadowBlurRadius": 6,
 "popUpBorderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "popUpBackgroundColor": "#F7931E",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "class": "DropDown",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "popUpBackgroundOpacity": 1,
 "arrowColor": "#FFFFFF",
 "popUpShadow": false,
 "popUpFontColor": "#FFFFFF",
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "RECEPTION",
 "backgroundOpacity": 1,
 "popUpPaddingBottom": 10,
 "popUpShadowSpread": 1,
 "fontSize": 12,
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "popUpShadowColor": "#000000",
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "popUpPaddingTop": 10,
 "data": {
  "name": "DropDown 1"
 },
 "fontWeight": "bold",
 "fontStyle": "normal",
 "backgroundColorRatios": [
  0
 ],
 "gap": 0,
 "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist"
},
{
 "fontFamily": "Montserrat",
 "paddingBottom": 0,
 "textDecoration": "none",
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
 "width": 96,
 "popUpPaddingLeft": 15,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "popUpShadowOpacity": 0,
 "height": "100%",
 "paddingLeft": 15,
 "backgroundColorDirection": "vertical",
 "popUpGap": 2,
 "popUpShadowBlurRadius": 6,
 "popUpBorderRadius": 5,
 "minWidth": 1,
 "shadow": false,
 "popUpBackgroundColor": "#F7931E",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "class": "DropDown",
 "popUpFontColor": "#FFFFFF",
 "borderSize": 0,
 "paddingTop": 0,
 "popUpBackgroundOpacity": 1,
 "arrowColor": "#FFFFFF",
 "popUpShadow": false,
 "popUpPaddingBottom": 10,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "ROOMS",
 "backgroundOpacity": 1,
 "popUpShadowSpread": 1,
 "fontSize": 12,
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "popUpShadowColor": "#000000",
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "popUpPaddingTop": 10,
 "data": {
  "name": "DropDown 2"
 },
 "fontWeight": "bold",
 "fontStyle": "normal",
 "backgroundColorRatios": [
  0
 ],
 "gap": 0,
 "playList": "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist"
},
{
 "fontFamily": "Montserrat",
 "paddingBottom": 0,
 "textDecoration": "none",
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
 "width": 114,
 "popUpPaddingLeft": 15,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "popUpShadowOpacity": 0,
 "paddingLeft": 15,
 "backgroundColorDirection": "vertical",
 "popUpGap": 2,
 "popUpShadowBlurRadius": 6,
 "popUpBorderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "popUpBackgroundColor": "#F7931E",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "class": "DropDown",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "popUpBackgroundOpacity": 1,
 "arrowColor": "#FFFFFF",
 "popUpShadow": false,
 "popUpFontColor": "#FFFFFF",
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "AMENITIES",
 "backgroundOpacity": 1,
 "popUpPaddingBottom": 10,
 "popUpShadowSpread": 1,
 "fontSize": 12,
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "popUpShadowColor": "#000000",
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "popUpPaddingTop": 10,
 "data": {
  "name": "DropDown 3"
 },
 "fontWeight": "bold",
 "fontStyle": "normal",
 "backgroundColorRatios": [
  0
 ],
 "gap": 0,
 "playList": "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist"
},
{
 "fontFamily": "Montserrat",
 "paddingBottom": 0,
 "textDecoration": "none",
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
 "width": 130,
 "popUpPaddingLeft": 15,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "popUpShadowOpacity": 0,
 "paddingLeft": 15,
 "backgroundColorDirection": "vertical",
 "popUpGap": 2,
 "popUpShadowBlurRadius": 6,
 "popUpBorderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "popUpBackgroundColor": "#F7931E",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "class": "DropDown",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "popUpBackgroundOpacity": 1,
 "arrowColor": "#FFFFFF",
 "popUpShadow": false,
 "popUpFontColor": "#FFFFFF",
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "SPORTS AREA",
 "backgroundOpacity": 1,
 "popUpPaddingBottom": 10,
 "popUpShadowSpread": 1,
 "fontSize": 12,
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "popUpShadowColor": "#000000",
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "popUpPaddingTop": 10,
 "data": {
  "name": "DropDown 4"
 },
 "fontWeight": "bold",
 "fontStyle": "normal",
 "backgroundColorRatios": [
  0
 ],
 "gap": 0,
 "playList": "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist"
},
{
 "fontFamily": "Montserrat",
 "paddingBottom": 0,
 "textDecoration": "none",
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
 "width": 152,
 "popUpPaddingLeft": 15,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "popUpShadowOpacity": 0,
 "paddingLeft": 15,
 "backgroundColorDirection": "vertical",
 "popUpGap": 2,
 "popUpShadowBlurRadius": 6,
 "popUpBorderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "popUpBackgroundColor": "#F7931E",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "class": "DropDown",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "popUpBackgroundOpacity": 1,
 "arrowColor": "#FFFFFF",
 "popUpShadow": false,
 "popUpFontColor": "#FFFFFF",
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "SWIMMING POOL",
 "backgroundOpacity": 1,
 "popUpPaddingBottom": 10,
 "popUpShadowSpread": 1,
 "fontSize": 12,
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "popUpShadowColor": "#000000",
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "popUpPaddingTop": 10,
 "data": {
  "name": "DropDown 5"
 },
 "fontWeight": "bold",
 "fontStyle": "normal",
 "backgroundColorRatios": [
  0
 ],
 "gap": 0,
 "playList": "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist"
},
{
 "fontFamily": "Montserrat",
 "paddingBottom": 0,
 "textDecoration": "none",
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
 "width": 136,
 "popUpPaddingLeft": 15,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "popUpShadowOpacity": 0,
 "paddingLeft": 15,
 "backgroundColorDirection": "vertical",
 "popUpGap": 2,
 "popUpShadowBlurRadius": 6,
 "popUpBorderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "popUpBackgroundColor": "#F7931E",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "class": "DropDown",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "popUpBackgroundOpacity": 1,
 "arrowColor": "#FFFFFF",
 "popUpShadow": false,
 "popUpFontColor": "#FFFFFF",
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "RESTAURANTS",
 "backgroundOpacity": 1,
 "popUpPaddingBottom": 10,
 "popUpShadowSpread": 1,
 "fontSize": 12,
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "popUpShadowColor": "#000000",
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "popUpPaddingTop": 10,
 "data": {
  "name": "DropDown 6"
 },
 "fontWeight": "bold",
 "fontStyle": "normal",
 "backgroundColorRatios": [
  0
 ],
 "gap": 0,
 "playList": "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist"
},
{
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "textDecoration": "none",
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "fontStyle": "normal",
 "width": 60,
 "iconWidth": 17,
 "minHeight": 1,
 "fontFamily": "Arial",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 17,
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "fontSize": 12,
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "shadow": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "layout": "horizontal",
 "height": 60,
 "class": "Button",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "paddingTop": 0,
 "mode": "toggle",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Button Settings"
 },
 "fontWeight": "normal",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "gap": 5
},
{
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "width": "85%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "class": "Container",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "backgroundColorRatios": [
  0
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "width": 8,
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#F7931E"
 ],
 "class": "Container",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "orange line"
 },
 "backgroundColorRatios": [
  0
 ],
 "gap": 10
},
{
 "paddingBottom": 20,
 "layout": "vertical",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 50,
 "backgroundColorDirection": "vertical",
 "width": "50%",
 "verticalAlign": "top",
 "minWidth": 460,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingRight": 50,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "cursor": "hand",
 "maxHeight": 60,
 "paddingBottom": 0,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "minHeight": 50,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minWidth": 50,
 "shadow": false,
 "class": "IconButton",
 "height": "75%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingTop": 0,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "transparencyActive": false
},
{
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 140,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "header"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 70,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "verticalAlign": "middle",
 "itemThumbnailScaleMode": "fit_outside",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "itemThumbnailWidth": 220,
 "itemMaxWidth": 1000,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColor": [],
 "scrollBarWidth": 10,
 "itemPaddingRight": 3,
 "itemLabelPosition": "bottom",
 "selectedItemLabelFontColor": "#F7931E",
 "itemPaddingTop": 3,
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "class": "ThumbnailGrid",
 "itemThumbnailShadow": false,
 "height": "92%",
 "scrollBarVisible": "rollOver",
 "selectedItemThumbnailShadow": true,
 "itemLabelGap": 7,
 "backgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorRatios": [],
 "selectedItemThumbnailShadowBlurRadius": 16,
 "rollOverItemThumbnailShadow": true,
 "itemOpacity": 1,
 "paddingRight": 70,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailBorderRadius": 0,
 "itemMinHeight": 50,
 "rollOverItemLabelFontColor": "#F7931E",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemMode": "normal",
 "itemLabelFontWeight": "normal",
 "itemHorizontalAlign": "center",
 "minHeight": 1,
 "itemThumbnailHeight": 125,
 "selectedItemLabelFontWeight": "bold",
 "itemMaxHeight": 1000,
 "itemMinWidth": 50,
 "minWidth": 1,
 "shadow": false,
 "scrollBarMargin": 2,
 "itemWidth": 220,
 "itemBackgroundOpacity": 0,
 "bottom": -0.2,
 "itemLabelFontSize": 13,
 "rollOverItemThumbnailShadowColor": "#F7931E",
 "itemPaddingBottom": 3,
 "itemHeight": 160,
 "paddingTop": 10,
 "itemLabelTextDecoration": "none",
 "borderRadius": 5,
 "itemLabelFontFamily": "Montserrat",
 "scrollBarColor": "#F7931E",
 "propagateClick": false,
 "itemLabelFontStyle": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "horizontalAlign": "center",
 "itemLabelHorizontalAlign": "center",
 "itemBorderRadius": 0,
 "gap": 26,
 "itemVerticalAlign": "top"
},
{
 "paddingBottom": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minWidth": 1,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "class": "WebFrame",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "insetBorder": false,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "backgroundColorRatios": [
  0
 ]
},
{
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "cursor": "hand",
 "maxHeight": 60,
 "paddingBottom": 0,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "minHeight": 50,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minWidth": 50,
 "shadow": false,
 "class": "IconButton",
 "height": "75%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingTop": 0,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "transparencyActive": false
},
{
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "id": "MapViewer",
 "transitionMode": "blending",
 "width": "100%",
 "toolTipPaddingTop": 4,
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipPaddingRight": 6,
 "progressBottom": 2,
 "class": "ViewerArea",
 "toolTipShadowOpacity": 1,
 "height": "100%",
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "progressHeight": 10,
 "toolTipShadowSpread": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "toolTipOpacity": 1,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "toolTipPaddingLeft": 6,
 "progressLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipDisplayTime": 600,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontSize": 12,
 "toolTipBorderColor": "#767676",
 "toolTipFontColor": "#606060",
 "toolTipBorderRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarRight": 0,
 "minHeight": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadOpacity": 1,
 "minWidth": 1,
 "shadow": false,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "Floor Plan"
 },
 "toolTipShadowColor": "#333333",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "playbackBarLeft": 0
},
{
 "layout": "absolute",
 "paddingBottom": 0,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 140,
 "class": "Container",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "header"
 },
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Container photo"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "width": "55%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "class": "Container",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "backgroundColorRatios": [
  0
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "width": 8,
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#F7931E"
 ],
 "class": "Container",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "orange line"
 },
 "backgroundColorRatios": [
  0
 ],
 "gap": 10
},
{
 "paddingBottom": 20,
 "layout": "vertical",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 60,
 "backgroundColorDirection": "vertical",
 "width": "45%",
 "verticalAlign": "top",
 "minWidth": 460,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingRight": 60,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "cursor": "hand",
 "maxHeight": 60,
 "paddingBottom": 0,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "width": "25%",
 "minHeight": 50,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "minWidth": 50,
 "shadow": false,
 "class": "IconButton",
 "height": "75%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingTop": 0,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "transparencyActive": false
},
{
 "maxHeight": 1000,
 "paddingBottom": 0,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minWidth": 1,
 "shadow": false,
 "top": "0%",
 "height": "100%",
 "class": "Image",
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 2000,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "data": {
  "name": "photo"
 }
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 60,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "paddingBottom": 30,
 "layout": "vertical",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "contentOpaque": false,
 "minHeight": 520,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 40,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "cursor": "hand",
 "maxHeight": 60,
 "paddingBottom": 0,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "minHeight": 50,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "right": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "minWidth": 50,
 "shadow": false,
 "top": 20,
 "class": "IconButton",
 "height": "36.14%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingTop": 0,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "transparencyActive": false
},
{
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "cursor": "hand",
 "maxHeight": 60,
 "paddingBottom": 0,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "width": "100%",
 "minHeight": 50,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "right": 20,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "minWidth": 50,
 "shadow": false,
 "top": 20,
 "class": "IconButton",
 "height": "36.14%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingTop": 0,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "transparencyActive": false
},
{
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "toolTipPaddingTop": 4,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipPaddingRight": 6,
 "progressBottom": 2,
 "class": "ViewerArea",
 "toolTipShadowOpacity": 1,
 "height": "100%",
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "progressHeight": 10,
 "toolTipShadowSpread": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "toolTipOpacity": 1,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "toolTipPaddingLeft": 6,
 "progressLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontSize": 12,
 "toolTipBorderColor": "#767676",
 "toolTipFontColor": "#606060",
 "toolTipBorderRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarRight": 0,
 "minHeight": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadOpacity": 1,
 "minWidth": 1,
 "shadow": false,
 "top": "0%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "toolTipShadowColor": "#333333",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "playbackBarLeft": 0
},
{
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "maxHeight": 60,
 "paddingBottom": 0,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "minHeight": 50,
 "cursor": "hand",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "minWidth": 50,
 "shadow": false,
 "top": "20%",
 "bottom": "20%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "transparencyActive": false
},
{
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "maxHeight": 60,
 "paddingBottom": 0,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "width": "14.22%",
 "minHeight": 50,
 "cursor": "hand",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "right": 10,
 "minWidth": 50,
 "shadow": false,
 "top": "20%",
 "bottom": "20%",
 "class": "IconButton",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingTop": 0,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "transparencyActive": false
},
{
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "cursor": "hand",
 "maxHeight": 60,
 "paddingBottom": 0,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "width": "10%",
 "minHeight": 50,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "right": 20,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "minWidth": 50,
 "shadow": false,
 "top": 20,
 "class": "IconButton",
 "height": "10%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingTop": 0,
 "mode": "push",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "transparencyActive": false
},
{
 "maxHeight": 1000,
 "paddingBottom": 0,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "width": "100%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "bottom",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minWidth": 1,
 "shadow": false,
 "top": "0%",
 "height": "100%",
 "class": "Image",
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 2000,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 }
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 60,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "paddingBottom": 30,
 "layout": "vertical",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "contentOpaque": false,
 "minHeight": 520,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 40,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 20,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "minHeight": 1,
 "paddingLeft": 10,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarColor": "#F7931E",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.61vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.7vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.7vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.96vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.96vh;font-family:'Montserrat';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.2vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.2vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.2vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.96vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.96vh;font-family:'Montserrat';\"><B>DONEC FEUGIAT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.74vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.96vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.96vh;font-family:'Montserrat';\"><B>LOREM IPSUM:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.83vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "propagateClick": false,
 "paddingRight": 10,
 "data": {
  "name": "HTMLText"
 }
},
{
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "textDecoration": "none",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontStyle": "normal",
 "width": 180,
 "iconWidth": 32,
 "minHeight": 1,
 "fontFamily": "Montserrat",
 "pressedBackgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "layout": "horizontal",
 "fontSize": "1.96vh",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "shadow": false,
 "height": 50,
 "class": "Button",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "mode": "push",
 "borderRadius": 0,
 "label": "LOREM IPSUM",
 "backgroundOpacity": 0.8,
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "propagateClick": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Button Lorem Ipsum"
 },
 "fontWeight": "bold",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "gap": 5
},
{
 "paddingBottom": 10,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "100%",
 "minHeight": 1,
 "paddingLeft": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": "45%",
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.61vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.7vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.7vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV></div>",
 "propagateClick": false,
 "paddingRight": 0,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "height": "80%",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "- content"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "maxHeight": 200,
 "paddingBottom": 0,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "width": "25%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minWidth": 1,
 "shadow": false,
 "height": "100%",
 "class": "Image",
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 200,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 }
},
{
 "paddingBottom": 10,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "75%",
 "minHeight": 1,
 "paddingLeft": 10,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "class": "HTMLText",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarColor": "#F7931E",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.07vh;font-family:'Montserrat';\"><B>JOHN DOE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.74vh;font-family:'Montserrat';\">LICENSED REAL ESTATE SALESPERSON</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.2vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.2vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.2vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "propagateClick": false,
 "paddingRight": 10,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "desktopMipmappingEnabled": false,
 "width": "100%",
 "verticalAlign": "top",
 "minWidth": 20,
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.5,
 "shadow": false,
 "scrollBarMargin": 2,
 "class": "Player",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "height": "100%",
 "borderRadius": 0,
 "backgroundPreloadEnabled": true,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "mouseWheelEnabled": true,
 "propagateClick": true,
 "scripts": {
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getKey": function(key){  return window[key]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); }
 },
 "paddingRight": 0,
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
 },
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
