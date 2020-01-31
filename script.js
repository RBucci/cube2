(function(){
    var script = {
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_25975547_291C_A5B8_41B9_ACEE4F41140F",
  "this.Container_2646134B_2925_BC48_41A1_D12FC34D03C6",
  "this.Container_3B3A64FA_291C_6448_41C0_3F0A6B4D04B1"
 ],
 "scrollBarVisible": "rollOver",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A,this.IconButton_25941547_291C_A5B8_41B1_638DAFFF3CF7], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_3B3A74FA_291C_6448_41A6_7808C67F3695_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0,this.IconButton_25944547_291C_A5B8_41C3_6A6A0CEC1CE0].forEach(function(component) { component.set('visible', false); }) }; this.playAudioList([this.audio_B492F04B_A878_0561_41E3_578276E58A57, this.audio_B568A947_A878_0762_41CF_77DC9B6EE9DB, this.audio_B5090118_A878_04EE_41E0_65BB8186A854])",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "definitions": [{
 "initialPosition": {
  "yaw": -61.8,
  "class": "PanoramaCameraPosition",
  "pitch": -4.52
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -112.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -28.83,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_camera"
},
{
 "initialPosition": {
  "yaw": -110.03,
  "class": "PanoramaCameraPosition",
  "pitch": 5.02
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -70.97,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -13,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 7.91,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.83,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -162.92,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -6.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_camera"
},
{
 "items": [
  {
   "media": "this.video_B5C8DED1_A828_1D7E_41D1_24E088A83BFA",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_B6075EF7_A8E8_1D22_41AE_053E238738DA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B6075EF7_A8E8_1D22_41AE_053E238738DA, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_B6075EF7_A8E8_1D22_41AE_053E238738DA",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "2do Piso - Habitaci\u00f3n 2",
 "hfovMin": "120%",
 "id": "panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5",
 "overlays": [
  "this.overlay_B79882C6_A79B_8817_41E1_BCB44C1FF0CC",
  "this.overlay_B3A1F3A1_A794_880D_41D3_EAB12ED98F7E",
  "this.panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 77.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -94.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.02,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "yawSpeed": 216
   },
   {
    "targetYaw": -76.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -9.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -46.1,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.83,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -12.18,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 17.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 39.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -21.29,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -138.8,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.22,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_B73AC08B_A8E8_05E1_41E0_BD6B7A0F86C8"
},
{
 "initialPosition": {
  "yaw": -94.96,
  "class": "PanoramaCameraPosition",
  "pitch": 4.02
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -76.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -9.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -46.1,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.83,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -12.18,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 17.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 39.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -21.29,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -138.8,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.22,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_camera"
},
{
 "items": [
  {
   "media": "this.video_B28F000B_A7B4_881D_41C4_2A96B6BCEFB7",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_B6042EF7_A8E8_1D22_41AE_A47C0A0CBD72, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B6042EF7_A8E8_1D22_41AE_A47C0A0CBD72, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_B6042EF7_A8E8_1D22_41AE_A47C0A0CBD72",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Piscina",
 "hfovMin": "120%",
 "id": "panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE",
 "overlays": [
  "this.overlay_B65B2803_A797_780D_41B8_746E5F70180C",
  "this.overlay_B3CC62EE_A79D_8816_41E2_6E6706841F35",
  "this.panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -109.79,
   "class": "AdjacentPanorama",
   "backwardYaw": -74.97,
   "panorama": "this.panorama_AC529246_A78F_8816_41E2_ABC58233627E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Living - Cocina",
 "hfovMin": "120%",
 "id": "panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1",
 "overlays": [
  "this.overlay_B789E4D5_A79C_8835_41E2_DB6B04B1075F",
  "this.overlay_B66E3762_A78D_880F_41E4_48FB22CEC35D",
  "this.overlay_B311AFA2_A79F_F80F_41CC_92EFC40102D9",
  "this.overlay_B2CF48E4_A7B4_980B_41CB_03454D76433F",
  "this.panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -72.05,
   "class": "AdjacentPanorama",
   "backwardYaw": -102.7,
   "panorama": "this.panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC529246_A78F_8816_41E2_ABC58233627E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -106.52,
  "class": "PanoramaCameraPosition",
  "pitch": 3.77
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -67.7,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -6.97,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -19.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -12.5,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 73.73,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.71,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 137.29,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -2.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -141.56,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_AC529246_A78F_8816_41E2_ABC58233627E_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "2do Piso - Escalera",
 "hfovMin": "120%",
 "id": "panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2",
 "overlays": [
  "this.overlay_B580C43B_A78C_887D_41DD_4BB546AEFADF",
  "this.overlay_B4A018DA_A78B_983F_41AE_CD644A26B48D",
  "this.panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -88.61,
   "class": "AdjacentPanorama",
   "backwardYaw": -116.67,
   "panorama": "this.panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751",
   "distance": 1
  },
  {
   "yaw": 121.21,
   "class": "AdjacentPanorama",
   "backwardYaw": -27.01,
   "panorama": "this.panorama_AC424F93_A78D_780D_41D1_7A17063F150D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "thumbnailUrl": "media/video_B28F000B_A7B4_881D_41C4_2A96B6BCEFB7_t.jpg",
 "scaleMode": "fit_inside",
 "width": 300,
 "label": "Untitled",
 "loop": false,
 "id": "video_B28F000B_A7B4_881D_41C4_2A96B6BCEFB7",
 "class": "Video",
 "height": 200,
 "video": {
  "width": 300,
  "mp4Url": "media/video_B28F000B_A7B4_881D_41C4_2A96B6BCEFB7.mp4",
  "class": "VideoResource",
  "height": 200
 }
},
{
 "from": "left",
 "duration": 400,
 "id": "effect_4CD06BFB_5705_AD47_41BD_DD626E481855",
 "class": "SlideInEffect",
 "easing": "quad_in"
},
{
 "displayOriginPosition": {
  "yaw": -90.44,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": -90.44,
  "class": "PanoramaCameraPosition",
  "pitch": 1.76
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -39.57,
    "hfovSpeed": 33.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 110,
    "targetPitch": -1.7,
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -132.52,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -2.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -120.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 28.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -84.79,
    "hfovSpeed": 33.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 110,
    "targetPitch": -3.96,
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 1.76,
   "duration": 3000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out"
  }
 ]
},
{
 "items": [
  {
   "media": "this.video_A9FEA2AC_A794_881B_41DD_6F4BF129E64C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_B6046EF7_A8E8_1D22_41E3_22FC9C3E0C1B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B6046EF7_A8E8_1D22_41E3_22FC9C3E0C1B, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_B6046EF7_A8E8_1D22_41E3_22FC9C3E0C1B",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Ba\u00f1o Master",
 "hfovMin": "120%",
 "id": "panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92",
 "overlays": [
  "this.overlay_B436445C_A794_883B_41DC_56FB9C38B6D4",
  "this.panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -129.7,
   "class": "AdjacentPanorama",
   "backwardYaw": 107.65,
   "panorama": "this.panorama_AC424F93_A78D_780D_41D1_7A17063F150D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 70.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 24.87,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.76,
    "pitchSpeed": 12.02,
    "easing": "cubic_in_out",
    "yawSpeed": 23.14
   },
   {
    "targetYaw": -40.82,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.61,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -77.5,
    "hfovSpeed": 33.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 110,
    "targetPitch": -0.44,
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -134.03,
    "hfovSpeed": 33.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 110,
    "targetPitch": -2.95,
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -165.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -18.03,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_B7886FB9_A8E8_1B2E_41BD_2FEAB5DCCFC6"
},
{
 "initialPosition": {
  "yaw": 25.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -94.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.02,
    "pitchSpeed": 84.93,
    "easing": "cubic_in_out",
    "yawSpeed": 169.64
   },
   {
    "targetYaw": -76.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -9.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -46.1,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.83,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -12.18,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 17.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 39.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -21.29,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -138.8,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.22,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_B75A40AA_A8E8_0522_41A3_3FEA382182CB"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Ba\u00f1o Social",
 "hfovMin": "120%",
 "id": "panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311",
 "overlays": [
  "this.overlay_B4C86843_A795_780D_41C9_6C37B914F392",
  "this.panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 64.44,
   "class": "AdjacentPanorama",
   "backwardYaw": -154.63,
   "panorama": "this.panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 152.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -117.82,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.02,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "yawSpeed": 216
   },
   {
    "targetYaw": -77.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.83,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -130.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -18.03,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 149.1,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -10.74,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_B671DF9B_A8E8_1BE1_41E2_C0A9F999709B"
},
{
 "initialPosition": {
  "yaw": -58.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -61.8,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.52,
    "pitchSpeed": 2.55,
    "easing": "cubic_in_out",
    "yawSpeed": 4.12
   },
   {
    "targetYaw": -112.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -28.83,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_B6314F36_A8E8_1B22_41E3_20D888525898"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Quincho",
 "hfovMin": "120%",
 "id": "panorama_AC529246_A78F_8816_41E2_ABC58233627E",
 "overlays": [
  "this.overlay_A874A762_A794_880E_41E4_BD4F3797BC95",
  "this.overlay_B4696894_A79B_B80B_41B5_77B451C05533",
  "this.overlay_B41C59AA_A79C_B81E_41E1_24E4AA5D0E09",
  "this.panorama_AC529246_A78F_8816_41E2_ABC58233627E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751"
  },
  {
   "yaw": -74.97,
   "class": "AdjacentPanorama",
   "backwardYaw": -109.79,
   "panorama": "this.panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_B492F04B_A878_0561_41E3_578276E58A57",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_B492F04B_A878_0561_41E3_578276E58A57.ogg",
  "mp3Url": "media/audio_B492F04B_A878_0561_41E3_578276E58A57.mp3"
 },
 "data": {
  "label": "Tech"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "2do Piso - Habitaci\u00f3n 1",
 "hfovMin": "120%",
 "id": "panorama_AC424F93_A78D_780D_41D1_7A17063F150D",
 "overlays": [
  "this.overlay_B7DF93E8_A79C_881B_41CE_39375A05683C",
  "this.overlay_B5289073_A794_880D_41C5_5D3BFC09443F",
  "this.overlay_B4BAAB7F_A795_98F5_41C2_7FA43236796A",
  "this.panorama_AC424F93_A78D_780D_41D1_7A17063F150D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -27.01,
   "class": "AdjacentPanorama",
   "backwardYaw": 121.21,
   "panorama": "this.panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2",
   "distance": 1
  },
  {
   "yaw": 107.65,
   "class": "AdjacentPanorama",
   "backwardYaw": -129.7,
   "panorama": "this.panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/video_B87946A8_A818_0D2E_41E2_A593120D42BA_t.jpg",
 "scaleMode": "fit_inside",
 "width": 328,
 "label": "mask1",
 "loop": false,
 "id": "video_B87946A8_A818_0D2E_41E2_A593120D42BA",
 "class": "Video",
 "height": 280,
 "video": {
  "width": 328,
  "mp4Url": "media/video_B87946A8_A818_0D2E_41E2_A593120D42BA.mp4",
  "class": "VideoResource",
  "height": 280
 }
},
{
 "initialPosition": {
  "yaw": 24.87,
  "class": "PanoramaCameraPosition",
  "pitch": 2.76
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -40.82,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.61,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -77.5,
    "hfovSpeed": 33.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 110,
    "targetPitch": -0.44,
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -134.03,
    "hfovSpeed": 33.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 110,
    "targetPitch": -2.95,
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -165.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -18.03,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_camera"
},
{
 "items": [
  {
   "media": "this.video_B87946A8_A818_0D2E_41E2_A593120D42BA",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_B6043EF7_A8E8_1D22_4191_95C0ED195540, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B6043EF7_A8E8_1D22_4191_95C0ED195540, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_B6043EF7_A8E8_1D22_4191_95C0ED195540",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/video_BA5ED97A_A818_0722_41D2_D0FE8EF3FE65_t.jpg",
 "scaleMode": "fit_inside",
 "width": 626,
 "label": "birds_window_1",
 "loop": false,
 "id": "video_BA5ED97A_A818_0722_41D2_D0FE8EF3FE65",
 "class": "Video",
 "height": 400,
 "video": {
  "width": 626,
  "mp4Url": "media/video_BA5ED97A_A818_0722_41D2_D0FE8EF3FE65.mp4",
  "class": "VideoResource",
  "height": 400
 }
},
{
 "initialPosition": {
  "yaw": 105.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -106.52,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.77,
    "pitchSpeed": 85.32,
    "easing": "cubic_in_out",
    "yawSpeed": 170.43
   },
   {
    "targetYaw": -67.7,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -6.97,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -19.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -12.5,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 73.73,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.71,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 137.29,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -2.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -141.56,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_B7A35FD6_A8E8_1B62_41CF_1F74F6E5D6C7"
},
{
 "buttonToggleHotspots": [
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_25947547_291C_A5B8_41C1_24F267A40EC1"
 ],
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_25945547_291C_A5B8_41B5_5097A0DA2687"
 ],
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleGyroscope": [
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_25941547_291C_A5B8_41B1_638DAFFF3CF7"
 ],
 "mouseControlMode": "drag_rotation",
 "touchControlMode": "drag_rotation"
},
{
 "thumbnailUrl": "media/video_A9FEA2AC_A794_881B_41DD_6F4BF129E64C_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1024,
 "label": "espaciodisponible_x264",
 "loop": false,
 "id": "video_A9FEA2AC_A794_881B_41DD_6F4BF129E64C",
 "class": "Video",
 "height": 768,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_A9FEA2AC_A794_881B_41DD_6F4BF129E64C.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_A85FE961_A7B4_B80D_4196_3F44807033BE",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_A85FE961_A7B4_B80D_4196_3F44807033BE.ogg",
  "mp3Url": "media/audio_A85FE961_A7B4_B80D_4196_3F44807033BE.mp3"
 },
 "data": {
  "label": "Tech"
 }
},
{
 "items": [
  {
   "media": "this.panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_camera"
  },
  {
   "media": "this.panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_camera"
  },
  {
   "media": "this.panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_camera"
  },
  {
   "media": "this.panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_camera"
  },
  {
   "media": "this.panorama_AC424F93_A78D_780D_41D1_7A17063F150D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC424F93_A78D_780D_41D1_7A17063F150D_camera"
  },
  {
   "media": "this.panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_camera"
  },
  {
   "media": "this.panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_camera"
  },
  {
   "media": "this.panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_camera"
  },
  {
   "media": "this.panorama_AC529246_A78F_8816_41E2_ABC58233627E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC529246_A78F_8816_41E2_ABC58233627E_camera"
  },
  {
   "media": "this.panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_B70F9485_A7B5_8815_41CA_7D515CE34C70",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_B70F9485_A7B5_8815_41CA_7D515CE34C70.ogg",
  "mp3Url": "media/audio_B70F9485_A7B5_8815_41CA_7D515CE34C70.mp3"
 },
 "data": {
  "label": "Stay With Me"
 }
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_B7C189FC_A7B5_9BFA_41D4_9CFB42408FBA",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_B7C189FC_A7B5_9BFA_41D4_9CFB42408FBA.ogg",
  "mp3Url": "media/audio_B7C189FC_A7B5_9BFA_41D4_9CFB42408FBA.mp3"
 },
 "data": {
  "label": "Shattered Horizon (Original)"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Living - Comedor Social",
 "hfovMin": "120%",
 "id": "panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751",
 "overlays": [
  "this.overlay_A8CDC925_A79B_980A_41D5_C3CF06339A85",
  "this.overlay_A84549B1_A794_980D_41DA_4ABF86D20488",
  "this.overlay_B6375491_A78D_880A_41E4_B7AF1A60E488",
  "this.overlay_B5D7B2B7_A78F_8875_41BB_DC0B36928AD8",
  "this.overlay_B59451F6_A78D_8BF7_41D0_7DA6F09EB309",
  "this.overlay_A67C9007_A818_04E2_41B4_9ABBB24A98AA",
  "this.overlay_B8A817E2_A828_0B22_41CA_7A4B7ED00205",
  "this.overlay_BA06E4E0_A868_0D5E_41E0_879E1E69EABE",
  "this.panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_tcap0",
  "this.overlay_B576D904_A828_04E6_41E3_F94BB8F92648",
  "this.overlay_B5D3B9BB_A828_0721_41E1_E5C8095C708B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -154.63,
   "class": "AdjacentPanorama",
   "backwardYaw": 64.44,
   "panorama": "this.panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311",
   "distance": 1
  },
  {
   "yaw": -116.67,
   "class": "AdjacentPanorama",
   "backwardYaw": -88.61,
   "panorama": "this.panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2",
   "distance": 1
  },
  {
   "yaw": 106.81,
   "class": "AdjacentPanorama",
   "backwardYaw": -83.91,
   "panorama": "this.panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE",
   "distance": 1
  },
  {
   "yaw": -102.7,
   "class": "AdjacentPanorama",
   "backwardYaw": -72.05,
   "panorama": "this.panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "from": "left",
 "duration": 400,
 "id": "effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368",
 "class": "SlideInEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": -72.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -117.82,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.02,
    "pitchSpeed": 19.28,
    "easing": "cubic_in_out",
    "yawSpeed": 37.74
   },
   {
    "targetYaw": -77.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.83,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -130.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -18.03,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 149.1,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -10.74,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_B624BF15_A8E8_1CE6_41E0_A87E3FDDCD7C"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Acceso - Calle",
 "hfovMin": "120%",
 "id": "panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE",
 "overlays": [
  "this.overlay_B671188E_A78B_B816_41C7_06B1A9A5E3AC",
  "this.panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -83.91,
   "class": "AdjacentPanorama",
   "backwardYaw": 106.81,
   "panorama": "this.panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 200,
 "id": "effect_7A139A35_5088_DA2A_4194_18115BA11BA4",
 "class": "FadeOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 50.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -56.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -12.81,
    "pitchSpeed": 44.42,
    "easing": "cubic_in_out",
    "yawSpeed": 88.25
   },
   {
    "targetYaw": -95.59,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -128.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -1.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_B6423F5A_A8E8_1B62_41DC_D8092184063E"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_B5090118_A878_04EE_41E0_65BB8186A854",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_B5090118_A878_04EE_41E0_65BB8186A854.ogg",
  "mp3Url": "media/audio_B5090118_A878_04EE_41E0_65BB8186A854.mp3"
 },
 "data": {
  "label": "Stay With Me"
 }
},
{
 "initialPosition": {
  "yaw": 117.32,
  "class": "PanoramaCameraPosition",
  "pitch": -1.51
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 23.49,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -5.97,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -102.88,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_camera"
},
{
 "items": [
  {
   "media": "this.video_BA5ED97A_A818_0722_41D2_D0FE8EF3FE65",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_B6049EF7_A8E8_1D22_41E1_BA29FD2C6319, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B6049EF7_A8E8_1D22_41E1_BA29FD2C6319, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_B6049EF7_A8E8_1D22_41E1_BA29FD2C6319",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 63.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -94.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.02,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "yawSpeed": 216
   },
   {
    "targetYaw": -76.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -9.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -46.1,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.83,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -12.18,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 17.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 39.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -21.29,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -138.8,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.22,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_B658BF7E_A8E8_1B22_41D0_6A2150B2132A"
},
{
 "items": [
  {
   "media": "this.video_B8A122C0_A828_055E_41DD_9B6FBFC6ECA6",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_B6048EF7_A8E8_1D22_41E3_6562B53BB4C0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B6048EF7_A8E8_1D22_41E3_6562B53BB4C0, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_B6048EF7_A8E8_1D22_41E3_6562B53BB4C0",
 "class": "PlayList"
},
{
 "duration": 1200,
 "id": "effect_38AD6637_291D_A7D8_41AC_6060A7CCC539",
 "class": "FadeInEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 107.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 117.32,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -1.51,
    "pitchSpeed": 2.62,
    "easing": "cubic_in_out",
    "yawSpeed": 4.26
   },
   {
    "targetYaw": 23.49,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -5.97,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -102.88,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_B700704C_A8E8_0566_4190_2D2BB8F70904"
},
{
 "initialPosition": {
  "yaw": 96.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -90.44,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.76,
    "pitchSpeed": 59.72,
    "easing": "cubic_in_out",
    "yawSpeed": 118.98
   },
   {
    "targetYaw": -39.57,
    "hfovSpeed": 33.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 110,
    "targetPitch": -1.7,
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -132.52,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -2.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -120.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 28.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -84.79,
    "hfovSpeed": 33.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 110,
    "targetPitch": -3.96,
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_B7E9E02F_A8E8_0522_41C9_D02783BE460F"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_B568A947_A878_0762_41CF_77DC9B6EE9DB",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_B568A947_A878_0762_41CF_77DC9B6EE9DB.ogg",
  "mp3Url": "media/audio_B568A947_A878_0762_41CF_77DC9B6EE9DB.mp3"
 },
 "data": {
  "label": "Shattered Horizon (Original)"
 }
},
{
 "thumbnailUrl": "media/video_B8A122C0_A828_055E_41DD_9B6FBFC6ECA6_t.jpg",
 "scaleMode": "fit_inside",
 "width": 626,
 "label": "window_birds1",
 "loop": false,
 "id": "video_B8A122C0_A828_055E_41DD_9B6FBFC6ECA6",
 "class": "Video",
 "height": 418,
 "video": {
  "width": 626,
  "mp4Url": "media/video_B8A122C0_A828_055E_41DD_9B6FBFC6ECA6.mp4",
  "class": "VideoResource",
  "height": 418
 }
},
{
 "initialPosition": {
  "yaw": 91.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -61.8,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.52,
    "pitchSpeed": 44.8,
    "easing": "cubic_in_out",
    "yawSpeed": 89.02
   },
   {
    "targetYaw": -112.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -28.83,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_B7D01011_A8E8_04FE_41AB_D60A7EF5AE36"
},
{
 "initialPosition": {
  "yaw": -73.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -94.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.02,
    "pitchSpeed": 16.43,
    "easing": "cubic_in_out",
    "yawSpeed": 32.01
   },
   {
    "targetYaw": -76.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -9.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -46.1,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.83,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -12.18,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 17.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 39.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -21.29,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -138.8,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.22,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_B724D06D_A8E8_0526_41C3_97C5CF2EEB0C"
},
{
 "initialPosition": {
  "yaw": -117.82,
  "class": "PanoramaCameraPosition",
  "pitch": 4.02
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -77.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.83,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -130.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -18.03,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 149.1,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -10.74,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_AC424F93_A78D_780D_41D1_7A17063F150D_camera"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "items": [
  {
   "media": "this.panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_3B3A74FA_291C_6448_41A6_7808C67F3695_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_camera"
  },
  {
   "media": "this.panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_3B3A74FA_291C_6448_41A6_7808C67F3695_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_camera"
  },
  {
   "media": "this.panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_3B3A74FA_291C_6448_41A6_7808C67F3695_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_camera"
  },
  {
   "media": "this.panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_3B3A74FA_291C_6448_41A6_7808C67F3695_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_camera"
  },
  {
   "media": "this.panorama_AC424F93_A78D_780D_41D1_7A17063F150D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_3B3A74FA_291C_6448_41A6_7808C67F3695_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC424F93_A78D_780D_41D1_7A17063F150D_camera"
  },
  {
   "media": "this.panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_3B3A74FA_291C_6448_41A6_7808C67F3695_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_camera"
  },
  {
   "media": "this.panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_3B3A74FA_291C_6448_41A6_7808C67F3695_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_camera"
  },
  {
   "media": "this.panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_3B3A74FA_291C_6448_41A6_7808C67F3695_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_camera"
  },
  {
   "media": "this.panorama_AC529246_A78F_8816_41E2_ABC58233627E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_3B3A74FA_291C_6448_41A6_7808C67F3695_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC529246_A78F_8816_41E2_ABC58233627E_camera"
  },
  {
   "media": "this.panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_3B3A74FA_291C_6448_41A6_7808C67F3695_playlist, 9, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_camera"
  }
 ],
 "id": "ThumbnailGrid_3B3A74FA_291C_6448_41A6_7808C67F3695_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -109.28,
  "class": "PanoramaCameraPosition",
  "pitch": 1.51
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -63.18,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -16.27,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 24.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_camera"
},
{
 "initialPosition": {
  "yaw": -115.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -109.28,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.51,
    "pitchSpeed": 3.1,
    "easing": "cubic_in_out",
    "yawSpeed": 5.22
   },
   {
    "targetYaw": -63.18,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -16.27,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 24.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_B7B86FF4_A8E8_1B26_41CC_6E825706DC59"
},
{
 "initialPosition": {
  "yaw": -56.27,
  "class": "PanoramaCameraPosition",
  "pitch": -12.81
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -95.59,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -128.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -1.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_camera"
},
{
 "thumbnailUrl": "media/video_B5C8DED1_A828_1D7E_41D1_24E088A83BFA_t.jpg",
 "scaleMode": "fit_inside",
 "width": 640,
 "label": "spinning cube",
 "loop": false,
 "id": "video_B5C8DED1_A828_1D7E_41D1_24E088A83BFA",
 "class": "Video",
 "height": 480,
 "video": {
  "width": 640,
  "mp4Url": "media/video_B5C8DED1_A828_1D7E_41D1_24E088A83BFA.mp4",
  "class": "VideoResource",
  "height": 480
 }
},
{
 "duration": 1200,
 "id": "effect_3B829BB4_291F_ECD8_419C_4A78CCAF4134",
 "class": "FadeInEffect",
 "easing": "quad_in"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 10,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "12px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_25975547_291C_A5B8_41B9_ACEE4F41140F",
 "left": "0%",
 "width": 330,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_25960546_291C_A5B8_41BA_9FE5E08232B3",
  "this.Container_2597C546_291C_A5B8_41B4_DD62925AD982"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL 2"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2646134B_2925_BC48_41A1_D12FC34D03C6",
 "left": "0%",
 "children": [
  "this.Container_2640B34B_2925_BC48_41B1_09A311DD7A1A",
  "this.Container_2646534B_2925_BC48_41BB_E1DC4754413E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2646134B_2925_BC48_41A1_D12FC34D03C6, false, 0, this.effect_7A139A35_5088_DA2A_4194_18115BA11BA4, 'hideEffect', false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--INFO"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_3B3A64FA_291C_6448_41C0_3F0A6B4D04B1",
 "left": "0%",
 "children": [
  "this.Container_3B3BB4FA_291C_6448_419E_879178906AEF"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_3B3A64FA_291C_6448_41C0_3F0A6B4D04B1, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_25946547_291C_A5B8_41C1_3CBC8053F3C3",
 "backgroundOpacity": 0,
 "width": 30,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "height": 30,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_25946547_291C_A5B8_41C1_3CBC8053F3C3.png",
 "pressedIconURL": "skin/IconButton_25946547_291C_A5B8_41C1_3CBC8053F3C3_pressed.png",
 "data": {
  "name": "IconButton Sound"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_25944547_291C_A5B8_41C3_6A6A0CEC1CE0",
 "backgroundOpacity": 0,
 "width": 30,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "height": 30,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_25944547_291C_A5B8_41C3_6A6A0CEC1CE0.png",
 "pressedIconURL": "skin/IconButton_25944547_291C_A5B8_41C3_6A6A0CEC1CE0_pressed.png",
 "data": {
  "name": "IconButton Fullscreen"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "blending": 0,
 "id": "overlay_B79882C6_A79B_8817_41E1_BCB44C1FF0CC",
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_B79882C6_A79B_8817_41E1_BCB44C1FF0CC_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": 5.74,
 "useHandCursor": true,
 "roll": -6.13,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Me%20interesa%20el%20espacio%20publicitario%20de%20Cube2.', '_blank')",
 "hfov": 24.04,
 "autoplay": true,
 "yaw": -110.64,
 "vfov": 13.68,
 "rotationY": 45.73,
 "rotationX": -9.24,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 1024,
  "mp4Url": "media/video_A9FEA2AC_A794_881B_41DD_6F4BF129E64C.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.09,
   "yaw": -161.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_B9218977_A818_0722_41E5_05D8259934F9",
   "pitch": -2.2,
   "hfov": 22.09,
   "yaw": -161.91,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B3A1F3A1_A794_880D_41D3_EAB12ED98F7E",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 35.55,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 10.61,
 "bleaching": 0.7,
 "id": "overlay_B65B2803_A797_780D_41B8_746E5F70180C"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.04,
   "yaw": -109.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC529246_A78F_8816_41E2_ABC58233627E, this.camera_B7A35FD6_A8E8_1B62_41CF_1F74F6E5D6C7); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_B920C978_A818_072E_41E3_2297E246C731",
   "pitch": -5.59,
   "hfov": 7.04,
   "yaw": -109.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B3CC62EE_A79D_8816_41E2_6E6706841F35",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "blending": 0,
 "id": "overlay_B789E4D5_A79C_8835_41E2_DB6B04B1075F",
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_B789E4D5_A79C_8835_41E2_DB6B04B1075F_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": 1.05,
 "useHandCursor": true,
 "roll": -0.83,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Me%20interesa%20el%20espacio%20publicitario%20de%20Cube2.', '_blank')",
 "hfov": 22.05,
 "autoplay": true,
 "yaw": -118.92,
 "vfov": 12.62,
 "rotationY": 31.9,
 "rotationX": -0.37,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 1024,
  "mp4Url": "media/video_A9FEA2AC_A794_881B_41DD_6F4BF129E64C.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.5,
   "yaw": -72.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751, this.camera_B73AC08B_A8E8_05E1_41E0_BD6B7A0F86C8); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_B922F975_A818_0726_41DE_D9F28C2F91BF",
   "pitch": -14.29,
   "hfov": 11.5,
   "yaw": -72.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B66E3762_A78D_880F_41E4_48FB22CEC35D",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.37,
   "yaw": 116.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_B922A975_A818_0726_41E2_129C1B911E7E",
   "pitch": -25.51,
   "hfov": 15.37,
   "yaw": 116.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B311AFA2_A79F_F80F_41CC_92EFC40102D9",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "rotationX": 6.46,
 "blending": 0,
 "id": "overlay_B2CF48E4_A7B4_980B_41CB_03454D76433F",
 "roll": -0.63,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_B2CF48E4_A7B4_980B_41CB_03454D76433F_t.jpg",
    "width": 300,
    "class": "ImageResourceLevel",
    "height": 200
   }
  ]
 },
 "pitch": -6.44,
 "chromaSmoothing": 0.29,
 "yaw": -79.85,
 "chromaColor": "#00EA00",
 "autoplay": true,
 "vfov": 5.29,
 "rotationY": -2.04,
 "useHandCursor": true,
 "hfov": 9.11,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.29,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 300,
  "mp4Url": "media/video_B28F000B_A7B4_881D_41C4_2A96B6BCEFB7.mp4",
  "class": "VideoResource",
  "height": 200
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.95,
   "yaw": -88.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751, this.camera_B658BF7E_A8E8_1B22_41D0_6A2150B2132A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_B9226976_A818_0722_41C4_8DBB3D0CE9EC",
   "pitch": -32.99,
   "hfov": 9.95,
   "yaw": -88.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B580C43B_A78C_887D_41DD_4BB546AEFADF",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 57.85,
   "yaw": 121.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC424F93_A78D_780D_41D1_7A17063F150D, this.camera_B671DF9B_A8E8_1BE1_41E2_C0A9F999709B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_B9224976_A818_0722_41E1_9AE040A8548E",
   "pitch": -31.46,
   "hfov": 57.85,
   "yaw": 121.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B4A018DA_A78B_983F_41AE_CD644A26B48D",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.04,
   "yaw": -129.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC424F93_A78D_780D_41D1_7A17063F150D, this.camera_B624BF15_A8E8_1CE6_41E0_A87E3FDDCD7C); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_B921D977_A818_0722_41B4_D0A90DFA3021",
   "pitch": -2.28,
   "hfov": 13.04,
   "yaw": -129.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B436445C_A794_883B_41DC_56FB9C38B6D4",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 105.98,
   "yaw": 64.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751, this.camera_B75A40AA_A8E8_0522_41A3_3FEA382182CB); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_B9216977_A818_0722_41C6_8938F695ACE7",
   "pitch": 1.32,
   "hfov": 105.98,
   "yaw": 64.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B4C86843_A795_780D_41C9_6C37B914F392",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -106.64,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 11.87,
 "bleaching": 0.7,
 "id": "overlay_A874A762_A794_880E_41E4_BD4F3797BC95"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.78,
   "yaw": 87.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_B9212977_A818_0722_41A3_EA1114488011",
   "pitch": -6.78,
   "hfov": 11.78,
   "yaw": 87.12,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B4696894_A79B_B80B_41B5_77B451C05533",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.67,
   "yaw": -74.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE, this.camera_B7886FB9_A8E8_1B2E_41BD_2FEAB5DCCFC6); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_B9210977_A818_0722_41D6_E8AFC16FA7A8",
   "pitch": -7.37,
   "hfov": 7.67,
   "yaw": -74.97,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B41C59AA_A79C_B81E_41E1_24E4AA5D0E09",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_AC529246_A78F_8816_41E2_ABC58233627E_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "blending": 0,
 "id": "overlay_B7DF93E8_A79C_881B_41CE_39375A05683C",
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_B7DF93E8_A79C_881B_41CE_39375A05683C_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": 2.41,
 "useHandCursor": true,
 "roll": 1.17,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Me%20interesa%20el%20espacio%20publicitario%20de%20Cube2.', '_blank')",
 "hfov": 24.32,
 "autoplay": true,
 "yaw": -78.67,
 "vfov": 14.03,
 "rotationY": -27.78,
 "rotationX": -3.04,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 1024,
  "mp4Url": "media/video_A9FEA2AC_A794_881B_41DD_6F4BF129E64C.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.89,
   "yaw": -27.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2, this.camera_B6314F36_A8E8_1B22_41E3_20D888525898); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_B9220976_A818_0722_41D7_19F27218CCC3",
   "pitch": -8.35,
   "hfov": 18.89,
   "yaw": -27.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B5289073_A794_880D_41C5_5D3BFC09443F",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.81,
   "yaw": 107.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92, this.camera_B6423F5A_A8E8_1B62_41DC_D8092184063E); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_B921E976_A818_0722_41E2_9F156112937E",
   "pitch": -9.86,
   "hfov": 18.81,
   "yaw": 107.65,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B4BAAB7F_A795_98F5_41C2_7FA43236796A",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_AC424F93_A78D_780D_41D1_7A17063F150D_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_25947547_291C_A5B8_41C1_24F267A40EC1",
 "backgroundOpacity": 0,
 "width": 30,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "height": 30,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_25947547_291C_A5B8_41C1_24F267A40EC1.png",
 "pressedIconURL": "skin/IconButton_25947547_291C_A5B8_41C1_24F267A40EC1_pressed.png",
 "data": {
  "name": "IconButton Hs visibility"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_25945547_291C_A5B8_41B5_5097A0DA2687",
 "backgroundOpacity": 0,
 "width": 30,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "height": 30,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_25945547_291C_A5B8_41B5_5097A0DA2687.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_25941547_291C_A5B8_41B1_638DAFFF3CF7",
 "backgroundOpacity": 0,
 "width": 34,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "height": 34,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_25941547_291C_A5B8_41B1_638DAFFF3CF7.png",
 "pressedIconURL": "skin/IconButton_25941547_291C_A5B8_41B1_638DAFFF3CF7_pressed.png",
 "data": {
  "name": "IconButton Gyroscopic"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "rotationX": -3.84,
 "blending": 0,
 "id": "overlay_A8CDC925_A79B_980A_41D5_C3CF06339A85",
 "roll": 2.46,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_A8CDC925_A79B_980A_41D5_C3CF06339A85_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": 2.57,
 "useHandCursor": true,
 "yaw": -47.06,
 "autoplay": true,
 "vfov": 14.07,
 "rotationY": -43.72,
 "hfov": 24.21,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 1024,
  "mp4Url": "media/video_A9FEA2AC_A794_881B_41DD_6F4BF129E64C.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -94.84,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 12.62,
 "bleaching": 0.7,
 "id": "overlay_A84549B1_A794_980D_41DA_4ABF86D20488"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.65,
   "yaw": -102.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1, this.camera_B700704C_A8E8_0566_4190_2D2BB8F70904); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_B923A974_A818_0726_41E0_03FB5F554992",
   "pitch": -10.92,
   "hfov": 11.65,
   "yaw": -102.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B6375491_A78D_880A_41E4_B7AF1A60E488",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.23,
   "yaw": 106.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE, this.camera_B7E9E02F_A8E8_0522_41C9_D02783BE460F); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_B9239974_A818_0726_41D0_0420A338A807",
   "pitch": -14.64,
   "hfov": 20.23,
   "yaw": 106.81,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B5D7B2B7_A78F_8875_41BB_DC0B36928AD8",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.1,
   "yaw": -116.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 19.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2, this.camera_B7D01011_A8E8_04FE_41AB_D60A7EF5AE36); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_B9237975_A818_0726_41E4_4B7B44455DF4",
   "pitch": 19.52,
   "hfov": 7.1,
   "yaw": -116.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B59451F6_A78D_8BF7_41D0_7DA6F09EB309",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "rotationX": 27.95,
 "blending": 0,
 "id": "overlay_A67C9007_A818_04E2_41B4_9ABBB24A98AA",
 "roll": -1.97,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_A67C9007_A818_04E2_41B4_9ABBB24A98AA_t.jpg",
    "width": 328,
    "class": "ImageResourceLevel",
    "height": 280
   }
  ]
 },
 "pitch": -23.5,
 "chromaSmoothing": 0.07,
 "yaw": 40.75,
 "chromaColor": "#0C5900",
 "autoplay": true,
 "vfov": 13.1,
 "rotationY": -3.89,
 "useHandCursor": true,
 "hfov": 12.69,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.11,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 328,
  "mp4Url": "media/video_B87946A8_A818_0D2E_41E2_A593120D42BA.mp4",
  "class": "VideoResource",
  "height": 280
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.42,
   "yaw": -154.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311, this.camera_B7B86FF4_A8E8_1B26_41CC_6E825706DC59); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_B9232975_A818_0726_41C3_B2C5AD54F32B",
   "pitch": -8.85,
   "hfov": 10.42,
   "yaw": -154.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B8A817E2_A828_0B22_41CA_7A4B7ED00205",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "rotationX": -19.2,
 "blending": 0,
 "id": "overlay_BA06E4E0_A868_0D5E_41E0_879E1E69EABE",
 "roll": 1.3,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_BA06E4E0_A868_0D5E_41E0_879E1E69EABE_t.jpg",
    "width": 626,
    "class": "ImageResourceLevel",
    "height": 400
   }
  ]
 },
 "pitch": 18.58,
 "chromaSmoothing": 0.72,
 "yaw": -12.62,
 "chromaColor": "#00B600",
 "autoplay": true,
 "vfov": 17.84,
 "rotationY": -11.11,
 "useHandCursor": true,
 "hfov": 26.61,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.08,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 626,
  "mp4Url": "media/video_BA5ED97A_A818_0722_41D2_D0FE8EF3FE65.mp4",
  "class": "VideoResource",
  "height": 400
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "rotationX": 22.05,
 "blending": 0,
 "id": "overlay_B576D904_A828_04E6_41E3_F94BB8F92648",
 "roll": -0.57,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_B576D904_A828_04E6_41E3_F94BB8F92648_t.jpg",
    "width": 640,
    "class": "ImageResourceLevel",
    "height": 480
   }
  ]
 },
 "pitch": -24.85,
 "chromaSmoothing": 0.32,
 "yaw": -53.84,
 "chromaColor": "#1BDA00",
 "autoplay": true,
 "vfov": 19,
 "rotationY": -0.47,
 "useHandCursor": true,
 "hfov": 20.73,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.21,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 640,
  "mp4Url": "media/video_B5C8DED1_A828_1D7E_41D1_24E088A83BFA.mp4",
  "class": "VideoResource",
  "height": 480
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.7,
   "yaw": -54.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0_HS_4_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -28.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 24.7,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_0_HS_4_0.png",
      "width": 640,
      "class": "ImageResourceLevel",
      "height": 479
     }
    ]
   },
   "pitch": -28.57,
   "yaw": -54.14,
   "distance": 50
  }
 ],
 "id": "overlay_B5D3B9BB_A828_0721_41E1_E5C8095C708B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.77,
   "yaw": -83.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751, this.camera_B724D06D_A8E8_0526_41C3_97C5CF2EEB0C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_B92D5974_A818_0726_41DB_B25952EFA56E",
   "pitch": -4.08,
   "hfov": 8.77,
   "yaw": -83.91,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B671188E_A78B_B816_41C7_06B1A9A5E3AC",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "bottom": "0%",
 "height": "85.959%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "gap": 3,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_25960546_291C_A5B8_41BA_9FE5E08232B3",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_25963546_291C_A5B8_41B3_36193A3F9430",
  "this.IconButton_25962546_291C_A5B8_41C1_0F214080BF00"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2597C546_291C_A5B8_41B4_DD62925AD982",
 "left": "0%",
 "children": [
  "this.Container_2597F546_291C_A5B8_41A7_18F5C329784B",
  "this.IconButton_25942547_291C_A5B8_41B3_AF7399A69B95"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left"
},
{
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_2640B34B_2925_BC48_41B1_09A311DD7A1A",
 "left": "2%",
 "children": [
  "this.Container_2640A34B_2925_BC48_41AC_85F8639BAD1C",
  "this.Container_2647734B_2925_BC48_41B7_5A36AC83A028"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "top": "2%",
 "bottom": "2%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2646534B_2925_BC48_41BB_E1DC4754413E",
 "backgroundOpacity": 0,
 "width": 1590.59,
 "scrollBarVisible": "rollOver",
 "right": "2%",
 "children": [
  "this.IconButton_2646734B_2925_BC48_41A9_10FC2CAFBCED"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 20,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "2%",
 "bottom": "2%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_3B3BB4FA_291C_6448_419E_879178906AEF",
 "left": "15%",
 "children": [
  "this.Container_3B3BA4FA_291C_6448_41BF_552166BB290B",
  "this.ThumbnailGrid_3B3A74FA_291C_6448_41A6_7808C67F3695"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "7%",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "center"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC5CA826_A78C_F816_41CE_35D38B58F1D5_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_B9218977_A818_0722_41E5_05D8259934F9",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC58FFB3_A78F_F80E_41E1_8EC6B82BC4AE_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_B920C978_A818_072E_41E3_2297E246C731",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_B922F975_A818_0726_41DE_D9F28C2F91BF",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC590A30_A78D_980A_41B1_9E78FC8217F1_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_B922A975_A818_0726_41E2_129C1B911E7E",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_B9226976_A818_0722_41C4_8DBB3D0CE9EC",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC4AB2FE_A78D_89F7_41C0_DF6A47CD14E2_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_B9224976_A818_0722_41E1_9AE040A8548E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC5C7BE6_A78C_B817_41D1_8AAC3BC43E92_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_B921D977_A818_0722_41B4_D0A90DFA3021",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AB8C42B2_A78F_880F_41E0_14796E2A3311_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_B9216977_A818_0722_41C6_8938F695ACE7",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_B9212977_A818_0722_41A3_EA1114488011",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC529246_A78F_8816_41E2_ABC58233627E_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_B9210977_A818_0722_41D6_E8AFC16FA7A8",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_B9220976_A818_0722_41D7_19F27218CCC3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC424F93_A78D_780D_41D1_7A17063F150D_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_B921E976_A818_0722_41E2_9F156112937E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_B923A974_A818_0726_41E0_03FB5F554992",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_B9239974_A818_0726_41D0_0420A338A807",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_B9237975_A818_0726_41E4_4B7B44455DF4",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC6D94D1_A78D_880D_41DD_A3936EE10751_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_B9232975_A818_0726_41C3_B2C5AD54F32B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC7BE564_A78D_880A_41D1_8A3C7E7269AE_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_B92D5974_A818_0726_41DB_B25952EFA56E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "this.shareTwitter('https://www.visitapy.com/cube2')",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "this.shareFacebook('https://www.visitapy.com/cube2')",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_25963546_291C_A5B8_41B3_36193A3F9430",
 "left": "0%",
 "width": 36,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container black"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_25962546_291C_A5B8_41C1_0F214080BF00",
 "left": 10,
 "width": 44,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_25962546_291C_A5B8_41C1_0F214080BF00_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "top": "40%",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2597C546_291C_A5B8_41B4_DD62925AD982, true, 0, this.effect_4CD06BFB_5705_AD47_41BD_DD626E481855, 'showEffect', false); this.setComponentVisibility(this.Container_25960546_291C_A5B8_41BA_9FE5E08232B3, false, 0, this.effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6, 'hideEffect', false)",
 "iconURL": "skin/IconButton_25962546_291C_A5B8_41C1_0F214080BF00.png",
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2597F546_291C_A5B8_41A7_18F5C329784B",
 "left": "0%",
 "width": 300,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.7,
 "overflow": "scroll",
 "children": [
  "this.Container_25979546_291C_A5B8_41C2_0CA26BEA681A",
  "this.Container_25948546_291C_A5B8_41B5_64105BA581CF",
  "this.Image_323164EB_214E_E383_419C_16ED4FC46FA7"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 40,
 "verticalAlign": "top",
 "paddingLeft": 40,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 40,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 40,
 "gap": 10,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_25942547_291C_A5B8_41B3_AF7399A69B95",
 "backgroundOpacity": 0,
 "width": 44,
 "right": 9,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_25942547_291C_A5B8_41B3_AF7399A69B95_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "top": "40%",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2597C546_291C_A5B8_41B4_DD62925AD982, false, 0, this.effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E, 'hideEffect', false); this.setComponentVisibility(this.Container_25960546_291C_A5B8_41BA_9FE5E08232B3, true, 0, this.effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368, 'showEffect', false)",
 "iconURL": "skin/IconButton_25942547_291C_A5B8_41B3_AF7399A69B95.png",
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2640A34B_2925_BC48_41AC_85F8639BAD1C",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_3808B5FD_292C_6449_419C_0ACFB4FB6C5C"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 3,
 "verticalAlign": "middle",
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.51,
 "id": "Container_2647734B_2925_BC48_41B7_5A36AC83A028",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_2647634B_2925_BC48_41AF_DC6B25D1D5AD",
  "this.Container_2647034B_2925_BC48_419B_349E05962D11",
  "this.Container_2647A34B_2925_BC48_4190_2D8BBBFFB74A"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 60,
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 450,
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2646734B_2925_BC48_41A9_10FC2CAFBCED",
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2646734B_2925_BC48_41A9_10FC2CAFBCED_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "click": "this.setComponentVisibility(this.Container_2646134B_2925_BC48_41A1_D12FC34D03C6, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2646734B_2925_BC48_41A9_10FC2CAFBCED.png",
 "pressedIconURL": "skin/IconButton_2646734B_2925_BC48_41A9_10FC2CAFBCED_pressed.png",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_3B3BA4FA_291C_6448_41BF_552166BB290B",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_3B3B94FA_291C_6448_41B1_558BDC6B328C",
  "this.IconButton_3B3B84FA_291C_6448_4197_F8E71CA4F14B"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 140,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelPosition": "bottom",
 "id": "ThumbnailGrid_3B3A74FA_291C_6448_41A6_7808C67F3695",
 "backgroundOpacity": 0.05,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemVerticalAlign": "top",
 "verticalAlign": "middle",
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "ThumbnailGrid",
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.ThumbnailGrid_3B3A74FA_291C_6448_41A6_7808C67F3695_playlist",
 "minWidth": 1,
 "itemMinWidth": 50,
 "height": "100%",
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#04A3E1",
 "itemHeight": 156,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontWeight": "normal",
 "itemLabelGap": 7,
 "itemThumbnailHeight": 125,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "paddingRight": 70,
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemWidth": 220,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "horizontalAlign": "center",
 "itemLabelFontFamily": "Montserrat"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_25979546_291C_A5B8_41C2_0CA26BEA681A",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_25978546_291C_A5B8_41B4_B439DAE3A686",
  "this.Button_2597B546_291C_A5B8_41C1_1616838DD5F5",
  "this.Container_2597A546_291C_A5B8_41B7_CF2E5187F6ED",
  "this.Button_25975546_291C_A5B8_419D_E9903F4A3ACD",
  "this.Container_25974546_291C_A5B8_41C1_D133F15A7E92",
  "this.Button_25976546_291C_A5B8_41C3_6FC6779BD0E7",
  "this.Container_25971546_291C_A5B8_41C0_BAAF630BF762",
  "this.Button_25970546_291C_A5B8_41B2_716CC584E58A",
  "this.Container_25973546_291C_A5B8_41AF_161B698DDB16",
  "this.Button_25972546_291C_A5B8_41B1_05E03D18DA61",
  "this.Container_2594C546_291C_A5B8_4195_2E37A1304CF9",
  "this.Button_2594F546_291C_A5B8_41B4_010808C37501",
  "this.Container_25949546_291C_A5B8_41C4_870A5BE939E9"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "25%",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container buttons"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_25948546_291C_A5B8_41B5_64105BA581CF",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_2594B547_291C_A5B8_41C2_EDD5801E677B",
  "this.Container_2594A547_291C_A5B8_41A2_2133CBAAB135",
  "this.HTMLText_25940547_291C_A5B8_41BC_24EC3ED1B959"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "bottom",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 120,
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "maxHeight": 960,
 "maxWidth": 960,
 "id": "Image_323164EB_214E_E383_419C_16ED4FC46FA7",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "url": "skin/Image_323164EB_214E_E383_419C_16ED4FC46FA7.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "height": "23.833%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image19097"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 851,
 "maxWidth": 1279,
 "id": "Image_3808B5FD_292C_6449_419C_0ACFB4FB6C5C",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "url": "skin/Image_3808B5FD_292C_6449_419C_0ACFB4FB6C5C.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image6681"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2647634B_2925_BC48_41AF_DC6B25D1D5AD",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 40,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.79,
 "id": "Container_2647034B_2925_BC48_419B_349E05962D11",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Container_2647334B_2925_BC48_41BE_D12F658124CC",
  "this.Container_2647C34B_2925_BC48_41B1_580A26CE997D",
  "this.Container_2647F34B_2925_BC48_41A9_55566BBCE3DF",
  "this.Image_39E69FD6_2927_A458_41AC_FCE6C1AB7B50"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 300,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2647A34B_2925_BC48_4190_2D8BBBFFB74A",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 40,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_3B3B94FA_291C_6448_41B1_558BDC6B328C",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "borderRadius": 0,
 "minHeight": 100,
 "propagateClick": false,
 "class": "HTMLText",
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.26vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.37vh;font-family:'Bebas Neue Bold';\">Lista de Panoramas</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_3B3B84FA_291C_6448_4197_F8E71CA4F14B",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_3B3B84FA_291C_6448_4197_F8E71CA4F14B_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "top": 20,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_3B3A64FA_291C_6448_41C0_3F0A6B4D04B1, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_3B3B84FA_291C_6448_4197_F8E71CA4F14B.jpg",
 "pressedIconURL": "skin/IconButton_3B3B84FA_291C_6448_4197_F8E71CA4F14B_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "pressedRollOverIconURL": "skin/IconButton_3B3B84FA_291C_6448_4197_F8E71CA4F14B_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_25978546_291C_A5B8_41B4_B439DAE3A686",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "id": "Button_2597B546_291C_A5B8_41C1_1616838DD5F5",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_2646134B_2925_BC48_41A1_D12FC34D03C6, true, 0, this.effect_38AD6637_291D_A7D8_41AC_6060A7CCC539, 'showEffect', false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Quienes Somos",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Tour Info"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2597A546_291C_A5B8_41B7_CF2E5187F6ED",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "id": "Button_25975546_291C_A5B8_419D_E9903F4A3ACD",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_3B3A64FA_291C_6448_41C0_3F0A6B4D04B1, true, 0, this.effect_3B829BB4_291F_ECD8_419C_4A78CCAF4134, 'showEffect', false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lista de Panoramas",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "gap": 23,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Panorama List"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_25974546_291C_A5B8_41C1_D133F15A7E92",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "pressedLabel": "Location",
 "id": "Button_25976546_291C_A5B8_41C3_6FC6779BD0E7",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Ubicaci\u00f3n",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Location"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_25971546_291C_A5B8_41C0_BAAF630BF762",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "id": "Button_25970546_291C_A5B8_41B2_716CC584E58A",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Planos",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Floorplan"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_25973546_291C_A5B8_41AF_161B698DDB16",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "id": "Button_25972546_291C_A5B8_41B1_05E03D18DA61",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Fotos",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Photoalbum"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2594C546_291C_A5B8_4195_2E37A1304CF9",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "id": "Button_2594F546_291C_A5B8_41B4_010808C37501",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Informaci\u00f3n de Contacto",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Contact"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_25949546_291C_A5B8_41C4_870A5BE939E9",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2594B547_291C_A5B8_41C2_EDD5801E677B",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 2,
 "minWidth": 1,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2594A547_291C_A5B8_41A2_2133CBAAB135",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_25945547_291C_A5B8_41B5_5097A0DA2687",
  "this.IconButton_25944547_291C_A5B8_41C3_6A6A0CEC1CE0",
  "this.IconButton_25947547_291C_A5B8_41C1_24F267A40EC1",
  "this.IconButton_25946547_291C_A5B8_41C1_3CBC8053F3C3",
  "this.IconButton_25941547_291C_A5B8_41B1_638DAFFF3CF7"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "height": 40,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 16,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container settings"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_25940547_291C_A5B8_41BC_24EC3ED1B959",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "HTMLText",
 "height": 78,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0,
 "id": "Container_2647334B_2925_BC48_41BE_D12F658124CC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_2647234B_2925_BC48_41C1_297FEBF0145F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "30%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container header"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2647C34B_2925_BC48_41B1_580A26CE997D",
 "backgroundOpacity": 1,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 7,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2647F34B_2925_BC48_41A9_55566BBCE3DF",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_2647E34B_2925_BC48_41B1_06AE049E1A77"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "55.182%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 22,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "horizontalAlign": "center",
 "maxHeight": 256,
 "maxWidth": 738,
 "id": "Image_39E69FD6_2927_A458_41AC_FCE6C1AB7B50",
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "url": "skin/Image_39E69FD6_2927_A458_41AC_FCE6C1AB7B50.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "height": "13.723%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595975344695&text=Hola!%20Quisiera%20saber%20mas%20sobre%20tu%20trabajo.', '_blank')",
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image7732"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_2647234B_2925_BC48_41C1_297FEBF0145F",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "HTMLText",
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.37vh;font-family:'Cinzel Bold';\"><B>DESIGN</B></SPAN><SPAN STYLE=\"font-size:5.93vh;font-family:'Otama.ep';\"><B>/</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:10.74vh;font-family:'Cinzel Bold';\"><B>CUBE</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#996633",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_2647E34B_2925_BC48_41B1_06AE049E1A77",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.8vh;font-family:'Antonio';\"><B>Nuestro nombre refleja perfecci\u00f3n, simetr\u00eda y armon\u00eda; elementos presentes en nuestra marca y en todos nuestros trabajos.</B></SPAN><SPAN STYLE=\"font-size:1.68vh;\"> </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#666666;font-size:2.13vh;font-family:'Open Sans Semibold';\">Somos una empresa joven e innovadora con la tecnolog\u00eda m\u00e1s vanguardista del mercado. Nuestros servicios van m\u00e1s all\u00e1 de la del dise\u00f1o. Comprendemos, acompa\u00f1amos y motivamos tus sue\u00f1os y te los mostramos como ning\u00fan otro estudio en el pa\u00eds.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.13vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#666666;font-size:2.13vh;font-family:'Open Sans Semibold';\">Gracias a nuestra alianza estrat\u00e9gica con</SPAN><SPAN STYLE=\"color:#999999;font-size:2.13vh;font-family:'Open Sans Semibold';\"> </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://www.visitapy.com\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0000ff;font-size:2.13vh;font-family:'Open Sans Semibold';\"><B><U>VisitaPY</U></B></SPAN></A></SPAN><SPAN STYLE=\"color:#666666;font-size:2.13vh;font-family:'Open Sans Semibold';\">, hoy podemos superar las limitaciones de las 2 Dimensiones y llevarte a la simulaci\u00f3n de verdaderamente estar en tu propiedad antes de dar la primera palada.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#987B55",
 "data": {
  "name": "HTMLText12940"
 },
 "shadow": false
}],
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "buttonToggleMute": [
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_25946547_291C_A5B8_41C1_3CBC8053F3C3"
 ],
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getKey": function(key){  return window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "registerKey": function(key, value){  window[key] = value; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "existsKey": function(key){  return key in window; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } }
 },
 "buttonToggleFullscreen": [
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_25944547_291C_A5B8_41C3_6A6A0CEC1CE0"
 ],
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "shadow": false,
 "downloadEnabled": false,
 "horizontalAlign": "left",
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
