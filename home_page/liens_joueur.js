jQuery(function () {
    if (!$('.paragraph.IDjoueur').length) {
      return false;
    }
    
    $(document).on('membersLoaded membersLoadedV2',function(){
      $('.IDjoueur .liens a').each(function(){
        let text = $.slugify($(this).text()),
          href = '#';
        
        if (typeof(_userdata) !== "undefined") {
          let uid = _userdata["user_id"];
          
          if (text === 'profil') {
            href = '/u' + uid;
          }
          
          if (text === 'sujets') {
            href = '/sta/u' + uid;
          }
          
          if (text === 'messages') {
            href = '/spa/u' + uid;
          }
          
          if (text === 'ficheDePresentation' && typeof(_allMembersObject[uid]) !== "undefined" && _allMembersObject[uid].hasOwnProperty('fiche')) {
            href = _allMembersObject[uid].fiche;
          }
        }
        
        if (text !== 'carnetDeRoute') {
            $(this).attr('href',href);
        }
      });
    });
  });