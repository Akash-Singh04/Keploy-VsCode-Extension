var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t){t.parentNode&&t.parentNode.removeChild(t)}let a;function u(t){a=t}const c=[],l=[];let d=[];const f=[],m=Promise.resolve();let h=!1;function p(t){d.push(t)}const $=new Set;let g=0;function v(){if(0!==g)return;const t=a;do{try{for(;g<c.length;){const t=c[g];g++,u(t),b(t.$$)}}catch(t){throw c.length=0,g=0,t}for(u(null),c.length=0,g=0;l.length;)l.pop()();for(let t=0;t<d.length;t+=1){const e=d[t];$.has(e)||($.add(e),e())}d.length=0}while(c.length);for(;f.length;)f.pop()();h=!1,$.clear(),u(t)}function b(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(p)}}const y=new Set;function _(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];d.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),d=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function C(t,e){-1===t.$$.dirty[0]&&(c.push(t),h||(h=!0,m.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function x(i,c,l,d,f,m,h=null,$=[-1]){const g=a;u(i);const b=i.$$={fragment:null,ctx:[],props:m,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(g?g.$$.context:[])),callbacks:n(),dirty:$,skip_bound:!1,root:c.target||g.$$.root};h&&h(b.root);let _=!1;if(b.ctx=l?l(i,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return b.ctx&&f(b.ctx[t],b.ctx[t]=o)&&(!b.skip_bound&&b.bound[t]&&b.bound[t](o),_&&C(i,t)),e})):[],b.update(),_=!0,o(b.before_update),b.fragment=!!d&&d(b.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);b.fragment&&b.fragment.l(t),t.forEach(r)}else b.fragment&&b.fragment.c();c.intro&&((x=i.$$.fragment)&&x.i&&(y.delete(x),x.i(w))),function(t,n,i){const{fragment:r,after_update:a}=t.$$;r&&r.m(n,i),p((()=>{const n=t.$$.on_mount.map(e).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(p)}(i,c.target,c.anchor),v()}var x,w;u(g)}class w{$$=void 0;$$set=void 0;$destroy(){_(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function k(e){let n;return{c(){var t;t="body",n=document.createElement(t),n.innerHTML='<div id="topGrid" class="svelte-6fa13m"><img class="keploylogo svelte-6fa13m" src="https://avatars.githubusercontent.com/u/92252339?s=200&amp;v=4" alt="Keploy Logo"/> <div class="lastTestResultsContainer svelte-6fa13m"><h2>Last Test Results</h2> <div class="loader" id="loader"></div> <div id="lastTestResults" class="svelte-6fa13m"></div></div></div> <hr/> <div id="buttonsDiv" class="svelte-6fa13m"><button id="openRecordPageButton" class="svelte-6fa13m">Record Test Cases</button> <button id="openTestPageButton" class="svelte-6fa13m">Run Test Cases</button> <button id="runCustomCommandButton" disabled="true" class="svelte-6fa13m">Run Custom Command</button></div> <hr/> <div id="configurationsDiv" class="svelte-6fa13m"><div id="configurations" class="svelte-6fa13m"><h4>Your Configurations</h4> <ul><li>Config 1</li> <li>Config 2</li> <li>Config 3</li></ul></div> <div id="configurationsButtons" class="svelte-6fa13m"><button id="customizeConfigButton" disabled="true" class="svelte-6fa13m">Change</button> <button id="resetConfigButton" disabled="true" class="svelte-6fa13m">Reset</button></div></div>'},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){t&&r(n)}}}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");return new class extends w{constructor(t){super(),x(this,t,null,k,i,{})}}({target:document.body})}();
//# sourceMappingURL=Home.js.map
