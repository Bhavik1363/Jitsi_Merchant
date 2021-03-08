function StartJitsiMeeting(roomName) {
    let meetingattend = false;
    let api;
    let moderatorApi;
    let userJWT = '';
    let moderatorJwt = ''
    let tenant = '';
    const expoName = 'knowledge-village';
  console.log("room found",roomName)
    
    const domain = 'meet.jit.si';
    const options = {
  
      roomName: roomName, //'vpaas-magic-cookie-88dfb7a7488f43a689e37d432fe97a85/test'
      width: '100%',
      height: '100%',
      moderator: 'false',
      parentNode: document.querySelector('#meet'),
      // jwt: userJWT,
      interfaceConfigOverwrite: {
        TOOLBAR_ALWAYS_VISIBLE: false,
        HIDE_INVITE_MORE_HEADER: true,
        SHOW_WATERMARK_FOR_GUESTS: true,
        TOOLBAR_TIMEOUT: 10000,
        INITIAL_TOOLBAR_TIMEOUT: 5000,
        SHOW_CHROME_EXTENSION_BANNER: false,
        VIDEO_QUALITY_LABEL_DISABLED: true,
        ENFORCE_NOTIFICATION_AUTO_DISMISS_TIMEOUT: 5000,
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        HIDE_KICK_BUTTON_FOR_GUESTS: true,
        FILM_STRIP_MAX_HEIGHT: 120,
        DISABLE_DOMINANT_SPEAKER_INDICATOR: true,
        DISABLE_FOCUS_INDICATOR: true,
        TILE_VIEW_MAX_COLUMNS: 4,
        TOOLBAR_BUTTONS: [
          'microphone', 'camera', 'fullscreen', 'raisehand',
          'filmstrip', 'desktop', 'chat',
          'tileview', 'hangup',
        ],
      },
    };
    api = new JitsiMeetExternalAPI(domain, options);
  
  }