/**
 * Created by Ofir_Dagan on 4/17/14.
 */
(function __HORCRUX__(){ 'use strict';
window.XdUtils = window.XdUtils || (function () {

    function extend(object, defaultObject) {
        var result = defaultObject || {};
        var key;
        for (key in object) {
            if (object.hasOwnProperty(key)) {
                result[key] = object[key];
            }
        }
        return result;
    }

    //public interface
    return {
        extend : extend
    };
})();


/**
 * Created by dagan on 07/04/2014.
 */
'use strict';
/* global XdUtils */
(function () {

  var MESSAGE_NAMESPACE = 'cross-domain-local-message';

  var defaultData = {
    namespace: MESSAGE_NAMESPACE
  };

  function postData(id, data) {
    var mergedData = window.XdUtils.extend(data, defaultData);
    mergedData.id = id;
    window.parent.postMessage(JSON.stringify(mergedData), '*');
  }

  function getData(id, key) {
    var value = window.localStorage.getItem(key);
    var data = {
      key: key,
      value: value
    };
    postData(id, data);
  }

  function setData(id, key, value) {
    window.localStorage.setItem(key, value);
    var checkGet = window.localStorage.getItem(key);
    var data = {
      success: checkGet === value
    };
    postData(id, data);
  }

  function removeData(id, key) {
    window.localStorage.removeItem(key);
    postData(id, {});
  }

  function getKey(id, index) {
    var key = window.localStorage.key(index);
    postData(id, {key: key});
  }

  function clear(id) {
    window.localStorage.clear();
    postData(id, {});
  }

  function receiveMessage(event) {
    var data;
    try {
      data = JSON.parse(event.data);
    } catch (err) {
      //not our message, can ignore
    }
    if (data && data.namespace === MESSAGE_NAMESPACE) {
      if (data.action === 'set') {
        setData(data.id, data.key, data.value);
      } else if (data.action === 'get') {
        getData(data.id, data.key);
      } else if (data.action === 'remove') {
        removeData(data.id, data.key);
      } else if (data.action === 'key') {
        getKey(data.id, data.key);
      } else if (data.action === 'clear') {
        clear(data.id);
      }
    }
  }

  if(window.addEventListener){
    window.addEventListener('message', receiveMessage, false);
  }else{
    window.attachEvent('onmessage', receiveMessage);
  }

  function sendOnLoad() {
    var data = {
      namespace: MESSAGE_NAMESPACE,
      id: 'iframe-ready'
    };
    window.parent.postMessage(JSON.stringify(data), '*');
  }
  //on creation
  sendOnLoad();
})(); })();
