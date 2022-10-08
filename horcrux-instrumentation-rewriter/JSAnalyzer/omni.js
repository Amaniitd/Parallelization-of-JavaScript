(function(){var r,n,t={}.hasOwnProperty,e=function(r,n){for(var e in n)t.call(n,e)&&(r[e]=n[e]);function o(){this.constructor=r}return o.prototype=n.prototype,r.prototype=new o,r.__super__=n.prototype,r};r=this,n=function(){var n,t,o,i,s;return(s={d2h:function(r){return r.toString(16)},h2d:function(r){return parseInt(r,16)},supportsProto:null!={}.__proto__,supportsFunctionNames:"string"==typeof function(){}.name}).functionName=s.supportsFunctionNames?function(r){return r.name}:function(r){var n;return null!=(n=r.toString().match(/function ([^(]*)/))?n[1]:void 0},s.isArray=Array.isArray?Array.isArray:function(r){return"[object Array]"===Object.prototype.toString.call(r)},t=function(){function t(t){if(this.resolver=null!=t?t:null,null==this.resolver){if("undefined"==typeof window)throw new Error("A context-resolver is required in non-browser environments");this.resolver=new n(r)}this.errorHandler=function(r){throw r},this.migrations={}}return t.name="Omni",t.NonPrototypeFunctionError=function(r){function n(r,n){this.object=r,this.name=n,this.message="Couldn't serialize object; had non-prototype function '"+this.name+"'"}return e(n,r),n.name="NonPrototypeFunctionError",n}(Error),t.PrototypeNotFoundError=function(r){function n(r,n){this.object=r,this.cons_id=n,this.message="Prototype not found for object; looked for "+this.cons_id}return e(n,r),n.name="PrototypeNotFoundError",n}(Error),t.AnonymousConstructorError=function(r){function n(r){this.object=r,this.message="Couldn't resolve constructor name; seems it has an anonymous constructor and object's prototype has no #constructor_name property to provide hints"}return e(n,r),n.name="AnonymousConstructorError",n}(Error),t.VersionInstancePropertyError=function(r){function n(r){this.object=r,this.message="Objects can't have versions on the instances; can only be on the prototype"}return e(n,r),n.name="VersionInstancePropertyError",n}(Error),t.prototype.stringify=function(r){var n,t,e;return this.processed_inputs=[],this.counter=0,e=function(){var e,o;switch(typeof r){case"number":case"string":return JSON.stringify(r);case"function":throw new Error("can't serialize functions");default:if(s.isArray(r)){for(n=[],e=0,o=r.length;e<o;e++)t=r[e],n.push(this.analyze(t));return JSON.stringify(n)}return JSON.stringify(this.analyze(r))}}.call(this),this.cleanAfterStringify(),e},t.prototype.cleanAfterStringify=function(){var r,n,t,e;for(n=0,t=(e=this.processed_inputs).length;n<t;n++)(r=e[n])&&(delete r.__Omni_id,delete r.version);return!0},t.prototype.analyze=function(r,n){var e,o,i,u,c,a,l;switch(typeof r){case"number":case"string":case"boolean":return r;case"function":return this.errorHandler(new t.NonPrototypeFunctionError(r,n));case"undefined":return"__Omni_undef";default:if(null===r)return null;if(s.isArray(r)){for(u=[],o=a=0,l=r.length;a<l;o=++a)c=r[o],u[o]=this.analyze(c,o);return u}for(i in u=new Object,r)c=r[i],r.hasOwnProperty(i)&&(u[i]=this.analyze(c,i));return""!==(e=s.functionName(r.constructor))||r.hasOwnProperty("constructor_name")||(e=r.constructor_name),null==e&&this.errorHandler(new t.AnonymousConstructorError(r)),"Object"!==e&&(u.__Omni_cons=e),r.hasOwnProperty("version")&&this.errorHandler(new t.VersionInstancePropertyError(r)),null!=r.version&&(u.version=r.version),u}},t.prototype.setErrorHandler=function(r){this.errorHandler=r},t._refMatcher=/__Omni_ref_(.*)/,t.prototype.parse=function(r){var n,t,e,o,i,u,c,a;if(this.identified_objects=[],this.references_to_resolve=[],n=JSON.parse(r),n=this.fixTree(n),(s.isArray(n)||null!=n&&"object"==typeof n)&&(n.length,null!=n)){for(u=0,c=(a=this.references_to_resolve).length;u<c;u++)t=(i=a[u])[0],e=i[1],o=i[2],t[e]=this.identified_objects[o];this.clean(n)}return n},t.prototype.fixTree=function(r){var n,e,o,i,u,c,a;if(s.isArray(r))for(n=c=0,a=r.length;c<a;n=++c)u=r[n],u=this.fixTree(u),r[n]="__Omni_undef"===u?void 0:u;else if("__Omni_undef"===r)r=void 0;else if(null!=r&&"object"==typeof r){if(r&&null!=r.__Omni_cons)if(null!=(e=this.resolvePrototype(r.__Omni_cons)))if(s.supportsProto)r.__proto__=e;else{for(n in(i=function(){}).prototype=e,o=new i,r)u=r[n],r.hasOwnProperty(n)&&(o[n]=u);r=o}else this.errorHandler(new t.PrototypeNotFoundError(r,r.__Omni_cons));for(n in r)u=r[n],r.hasOwnProperty(n)&&(u=this.fixTree(u),r[n]="__Omni_undef"===u?void 0:u)}return r},t.prototype.resolvePrototype=function(r){if(null==this.resolver)throw new Error("No Omni resolver found -- you should specify one in the Omni constructor!");return this.resolver.resolve(r)},t.prototype.clean=function(r,n){var t,e,o,i,u,c,a,l,f,p;if(null==n&&(n=[]),null===r||"object"!=typeof r)return!0;if(!s.isArray(r)&&n.indexOf(r)>-1)return!0;if(o=this.migrations[r.__Omni_cons],null!=r.version&&null!=o&&r.version<o.length){for(i=c=f=r.version,p=o.length-1;f<=p?c<=p:c>=p;i=f<=p?++c:--c)o[i].call(r);delete r.version}if(n.push(r),s.isArray(r))for(a=0,l=r.length;a<l;a++)t=r[a],this.clean(t,n);else for(e in r)u=r[e],"__Omni_id"===e||"__Omni_cons"===e?delete r[e]:this.clean(u,n);return!0},t.prototype.migration=function(r,n,e){var o;switch(typeof r){case"function":""===(r=r.name)&&this.errorHandler(new t.AnonymousConstructorError(r));break;case"string":break;default:throw new Error("invalid class passed in; pass a function or a string")}return null==(o=this.migrations[r])&&(o=this.migrations[r]=[]),o[n-1]=e,!0},t}(),i=function(){function r(){}return r.name="Resolver",r.prototype.resolve=function(r){throw new Error("abstract")},r}(),n=function(r){function n(r){this.context=r}return e(n,i),n.name="ContextResolver",n.prototype.resolve=function(r){var n;return null!=(n=this.context[r])?n.prototype:null},n}(),o=function(r){function n(r){this.resolvers=null!=r?r:[]}return e(n,i),n.name="MultiResolver",n.prototype.resolve=function(r){var n,t,e,o;for(t=0,e=(o=this.resolvers).length;t<e;t++)if(null!=(n=o[t].resolve(r)))return n;return null},n}(),t.Util=s,t.Resolver=i,t.ContextResolver=n,t.MultiResolver=o,t},"function"==typeof bootstrap?bootstrap("Omni",n):"object"==typeof exports?module.exports=n():"function"==typeof define&&define.amd?define(n):"undefined"==typeof ses?r.Omni=n():ses.ok()&&(ses.makeOmni=n)}).call(this);