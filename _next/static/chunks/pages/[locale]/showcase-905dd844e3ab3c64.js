(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[506],{453:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/showcase",function(){return a(2624)}])},2624:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return f}});var r=a(5893),o=a(5839),i=a(1163),n=a(7294),s=(a(1897),a(1631)),l=a(4349),c=a(9683),u=a(987),d=a(6898),p=a(3567);function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){h(e,t,a[t])}))}return e}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=!0;t.default=function(){var e=(0,c.Z)().isDesktop,t=(0,l.Z)(s),a=m(Array(s.length).keys()),f=(0,n.useState)(a),y=f[0],v=f[1],b=(0,n.useState)({}),w=b[0],k=b[1],S=(0,i.useRouter)(),_=(0,n.useState)(S.query.locale?S.query.locale:"en"),j=(_[0],_[1],function(e){return Object.keys(t[e]).map((function(e){return{key:e,value:e,text:e}}))}),O=function(e){return function(r,o){for(var i=o.value,n=m(a),s=g({},w,h({},e,i)),l=Object.keys(s),c=0;c<l.length;c++){var u=l[c],d=s[l[c]],p=[];if(d.length>0)for(var f=0;f<d.length;f++)for(var y=t[u][d[f]],b=0;b<y.length;b++)p.includes(y[b])||p.push(y[b]);else p=m(a);n=n.filter((function(e){return-1!==p.indexOf(e)}))}k(s),v(n)}},A=function(e,r){for(var o=r,i=m(a),n=g({},w,h({},e,o)),s=Object.keys(n),l=0;l<s.length;l++){var c=s[l],u=n[s[l]],d=[];if(u.length>0)for(var p=0;p<u.length;p++)for(var f=t[c][u[p]],y=0;y<f.length;y++)d.includes(f[y])||d.push(f[y]);else d=m(a);i=i.filter((function(e){return-1!==d.indexOf(e)}))}k(n),v(i)},P=function(){v(a),k({})},R=["project_summary","read_full_report"];return(0,r.jsx)(o.Z,{children:e?(0,r.jsx)(d.Z,{filters:t,showcaseData:s,filteredRows:y,getOptions:j,filterSelectHandler:O,getLangname:u,filteredOptions:w,setFilteredOptions:k,tagSelectHandler:A,resetFilters:P,title:R,tagclass:"tags purple"}):(0,r.jsx)(p.Z,{filters:t,showcaseData:s,filteredRows:y,getOptions:j,filterSelectHandler:O,getLangname:u,filteredOptions:w,setFilteredOptions:k,tagSelectHandler:A,resetFilters:P,title:R,tagclass:"tags purple"})})}},1631:function(e){"use strict";e.exports=JSON.parse('[{"title":"Tropical Cyclone Risk Assessment Model","header_image":"/showcase/ph-pdrf.png","country":"Philippines","language":"en","authors":"Miguel Adrian Garcia, Gerson Hubert Aquino","project_summary":"The project is a Risk Assessment Model which follows the Risk Formula, Risk = Hazard X Vulnerability X Exposure, to compute the risk score and corresponding activation level for a Tropical Cyclone. The model utilizes population data, poverty indices, and tropical cyclone intensity as its variables for Exposure, Vulnerability, and Hazard, respectively. Using these set of variables, the model will compute the risk scores of specific provinces/boundaries which determines the activation level for a Tropical Cyclone affecting the country.","tools":"qgis, datawrapper","themes_keywords":"risk assessment, tropical cyclone, hazard, vulnerability, exposure","readmore":"https://docs.google.com/document/d/1jYX9XAi9_j1fbFtsYoKnhrOC6uNFQbkdoyt0PR7feas/edit?usp=sharing","algorithms":"buffer, extract by location, field calculator,graphical modeler","datasets":"administrative boundary: https://github.com/benhur07b/phl-admin-psgc\\n\\npopulation layer: Philippine Statistics Authority\\n\\npoverty indices: Philippine Statistics Authority (https://psa.gov.ph/poverty-press-releases/nid/162559)\\n\\npopulation density: High Resolution Settlement Layer (https://data.humdata.org/dataset/philippines-high-resolution-population-density-maps-demographic-estimates)\\n\\ntropical cyclone tracks (GONI): NIII JP (http://agora.ex.nii.ac.jp/digital-typhoon/year/wnp/2020.html.en)"},{"title":"Bataan Barangays Most Exposed to Flood","header_image":"/showcase/ph-upri.png","country":"Philippines","language":"en","authors":"Patricia Anne Delmendo, Jericho Mendoza","project_summary":"In the Philippines, the University of the Philippines Resilience Institute (UPRI) combined Meta\u2019s High Resolution Settlement Layer (HRSL) with recent census data (2020) of the province of Bataan in order to generate an updated settlement area and population density map layer of the province. Using this updated population layer, UPRI was able to calculate and present the flood-hazard exposed population in the different barangays of the province.","tools":"qgis, datawrapper, blender, global mapper, arcgis","themes_keywords":"flood, flood hazard, affected population","readmore":"https://docs.google.com/document/d/1spWZfPW6k6SrgWigEYOpKQeIaMDv6zDtnjzA0_BdQto/edit?usp=sharing","algorithms":"vectorize, intersection, field calculator","datasets":"digital elevation model: IfSAR\\nadministrative boundary: PhilGIS\\npopulation density: HRSL\\nflood hazard: UP NOAH Center"},{"title":"Family farming","header_image":"/showcase/br-familyfarming.jpg","country":"Brazil","language":"en","authors":"Agmerson Bruno, Marcus Boente","project_summary":"The project explores the relevance of family farming for Brazil using official data.","tools":"qgis, google sheets, ms excel","themes_keywords":"family farming, agriculture","readmore":"https://docs.google.com/document/d/1Jvy4WDte3G5nsPbho4jJgWxSrlrEVtLv67nQyHIksSo/edit?usp=sharing","algorithms":"","datasets":"agricultural census,\\nDeclaration of Aptitude to PRONAF,\\nadministrative boundary"},{"title":"Rural Credit","header_image":"/showcase/br-ruralcredit.png","country":"Brazil","language":"en","authors":"Eduardo Marcusso","project_summary":"The project uses several sources of spatial data to study the State of Cear\xe1 based on data from Human Development Index, official licenses, and rural credit. We have merged them and created analysis, knowledge, and territorial intelligence to support MAPA\'s public policy.","tools":"qgis, google sheets, ms excel","themes_keywords":"agriculture, financial credit","readmore":"https://docs.google.com/document/d/1wq_KF-buF8qfIYoy7mLwSkgwtDTgjA7XDl0vz8DFmrg/edit?usp=sharing","algorithms":"","datasets":"Shapefiles of Brazilian states,\\nCities boundaries in Cear\xe1,\\nMunicipal Human Development Index for Brazilian Cities,\\nRural credit,\\nDeclaration of Aptitude to PRONAF  (National Program for Strengthening Family Agriculture)"},{"title":"Precipitation in Stung Treng province, Cambodia","header_image":"/showcase/mrc-cambodia.jpg","country":"Cambodia","language":"en","authors":"Cambodia National Mekong Committee","project_summary":"Strung Treng province is one of the important provinces in the Mekong basin of Cambodia, since RAMSAR site is located in the province. As climate change is very sensitive, the pilot project may tell us some change of precipitation during the period of time from 2015 to 2019, and could see the trend of rainfall in the future","tools":"qgis","themes_keywords":"precipitation, rainfall, mekong","readmore":"https://docs.google.com/document/d/1snrt83CQrb1tR1lYhUC0jt7-MEwizL0C/edit?usp=sharing&ouid=106197508188487009998&rtpof=true&sd=true","algorithms":"intersection, clip raster, raster calculator","datasets":"GADM"},{"title":"Flood Risk Assessment Map of NamNgum Basin, Laos","header_image":"/showcase/mrc-laopdr.png","country":"Lao PDR","language":"en","authors":"Malabou Baylatry, Soukphaphone Soodtharavong, Soutvilay Douangphachan, Oudomsak Bounmanivanh","project_summary":"Our project was about generating the flood extend map in lower Namngum basin and calculating the risk area of land use in mentioned basin.","tools":"qgis, ms excel","themes_keywords":"flood risk assessment","readmore":"https://docs.google.com/document/d/1kFsaMtbocNPAamBBciDiFS2ptOgUFOe7/edit?usp=sharing&ouid=106197508188487009998&rtpof=true&sd=true","algorithms":"intersection, raster calculator","datasets":"DEM,\\nflood hazard,\\nadministrative boundary,\\nland use"},{"title":"Sirindhorn Dam Storage Capacity","header_image":"/showcase/mrc-thailand.jpg","country":"Thailand","language":"en","authors":"Peraya Tantianuparp, Suluk Chaikhan","project_summary":"This project aims to monitor capacity and show monthly water extent of Sirindhorn reservoir in 2020 using map visualization and analytical data. The project can be applied with other reservoirs and related projects in the future.","tools":"qgis","themes_keywords":"reservoir storage capacity, water level warning","readmore":"https://docs.google.com/document/d/1odipdouDcvNHAd9GgVav9lgy3xgjXkbu/edit?usp=sharing&ouid=106197508188487009998&rtpof=true&sd=true","algorithms":"intersection, clip raster, raster calculator, clip vector, buffer","datasets":"SRTM DEM,\\nSentinel-1,\\nSentinel-2,\\nwater volume,\\nreservoir boundary"}]')}},function(e){e.O(0,[217,258,774,888,179],(function(){return t=453,e(e.s=t);var t}));var t=e.O();_N_E=t}]);