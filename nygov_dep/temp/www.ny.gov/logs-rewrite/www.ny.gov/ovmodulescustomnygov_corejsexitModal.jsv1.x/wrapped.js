/**
 * @file
 *   Nygov Exit Modal
 */

(function __HORCRUX__(){ (function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.nygovExitModal = {
    attach: function (context) {
      let modalBehavior = this;

      $('body .layout-container a', context).once('nygovExitModal').each(function(){

        if (modalBehavior.isNygovLink(this)) return;
        
        const options = {
          dialogClass: 'no-close',
          width: '620px',
          classes: {
            "ui-dialog-titlebar": "no-title-bar"
          }
        }

        $(this).on('click', function(event){
          event.preventDefault();
          $('#o-exitModal .o-exitModal__button')[0].href = this.href;
          const dialog = Drupal.dialog($('#o-exitModal'), options);
          dialog.showModal();
          const modal = window.document.querySelector('.ui-widget.no-close')
          $(modal).css('zIndex', '1260');
          
          $('#o-exitModal .o-exitModal__close').on('click', function(event) {
            event.preventDefault();
            dialog.close();
          })
        })
        
      })
    },

    isNygovLink: function(element) {
      if (!element) return false;

      switch(element.hostname) {
        case 'www.facebook.com':
        case 'www.twitter.com':
        case 'facebook.com':
        case 'twitter.com':
        case '':
        case drupalSettings.site_hostname:
          return true;
      }

      const hostnameParts = element.hostname.split('.');
      const parts = [hostnameParts[hostnameParts.length - 2] ,hostnameParts[hostnameParts.length - 1]]

      if(parts[0] !== 'ny' || parts[1] !== 'gov') {
        return false;
      }

      return true;
    }
  }
})(window.jQuery, window.Drupal, window.drupalSettings); })();