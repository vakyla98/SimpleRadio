(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c0d005a"],{"182b":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"station-page"},[a("v-btn",{attrs:{dark:""},on:{click:t.xxx}},[t._v("X")]),a("stations-list",{attrs:{stations:t.getAllStations}})],1)},s=[],i=a("5530"),o=a("2f62"),r=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"station-list"},t._l(t.stations,(function(n){return a("station-card",{key:n.name,attrs:{station:n},nativeOn:{click:function(a){return t.$router.push({path:"/player/"+n.route})}}})})),1)},c=[],l=a("3cb3"),u={name:"StationList",components:{StationCard:l["a"]},props:{stations:{type:Array,required:!0}}},p=u,d=a("2877"),f=Object(d["a"])(p,r,c,!1,null,null,null),m=f.exports,b=0,v={name:"StationPage",components:{StationsList:m},data:function(){return{}},methods:{xxx:function(){b=this.getAllStations,console.log(b)}},computed:Object(i["a"])({},Object(o["c"])(["getAllStations"]))},_=v,h=a("6544"),x=a.n(h),g=a("8336"),S=Object(d["a"])(_,e,s,!1,null,null,null);n["default"]=S.exports;x()(S,{VBtn:g["a"]})},"3cb3":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"station-card"},[a("img",{attrs:{src:t.station.image}}),a("p",[t._v(t._s(t.station.name))])])},s=[],i={name:"StationCard",props:{station:{type:Object,required:!0}},data:function(){return{}}},o=i,r=a("2877"),c=Object(r["a"])(o,e,s,!1,null,null,null);n["a"]=c.exports}}]);
//# sourceMappingURL=chunk-8c0d005a.68c89b6d.js.map