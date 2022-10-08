
function removeUseStrict(code) {
  return code.replace(/"use strict";/, '');
}

var code = 'var a = 1; "use strict"; function b() { return 2; }';

console.log(removeUseStrict(code));