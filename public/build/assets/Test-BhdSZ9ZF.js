import{r as s,j as e}from"./app-XUt0aydd.js";import{M as b,T as v,a as c,u as S}from"./TileLayer-Cjvj6Mvk.js";import{M as u,P as M}from"./Popup-CdFr8KEz.js";const z=[-4,106];function E(x){const[N,p]=s.useState(null);s.useState("");const[d,y]=s.useState();s.useState(null),console.log(d);var h=x.set,a=s.useState(null),o=s.useState(null);const[g,F]=s.useState(null),[m,k]=s.useState(null);function f(){const r=c();r.locate(),S({locationfound:n=>{a=n.latitude,o=n.longitude,console.log(a),console.log(o)}});const l=()=>(r.panTo([a,o],14),e.jsx(u,{position:[a,o]}));return e.jsx(e.Fragment,{children:e.jsx("button",{className:"absolute w-[48px] h-[48px] top-[200px] left-[80px] flex items-center justify-center z-[900] rounded-lg bg-white",onClick:l,children:e.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"w-[30px] h-[30px]",children:e.jsx("path",{fill:"#FF570A","fill-rule":"evenodd",d:"M11.291 21.706 12 21l-.709.706zM12 21l.708.706a1 1 0 0 1-1.417 0l-.006-.007-.017-.017-.062-.063a47.708 47.708 0 0 1-1.04-1.106 49.562 49.562 0 0 1-2.456-2.908c-.892-1.15-1.804-2.45-2.497-3.734C4.535 12.612 4 11.248 4 10c0-4.539 3.592-8 8-8 4.408 0 8 3.461 8 8 0 1.248-.535 2.612-1.213 3.87-.693 1.286-1.604 2.585-2.497 3.735a49.583 49.583 0 0 1-3.496 4.014l-.062.063-.017.017-.006.006L12 21zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z","clip-rule":"evenodd"})})})})}function j(){const r=c(),[l,n]=s.useState("");console.log(g,m);const w=(t,i)=>{r.flyTo([t,i],18)};return e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"absolute flex top-20 items-center z-[900] left-20",children:[e.jsx("input",{type:"text",className:"grow border-none font-plex focus:ring-0 bg-white rounded-l-lg w-[400px] h-[48px] text-black",placeholder:"Cari Stasiun",onChange:t=>n(t.target.value)}),e.jsx("button",{className:"w-10 h-[48px] bg-oren flex items-center justify-center rounded-r-lg",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"white",className:"w-5 h-5",children:e.jsx("path",{fillRule:"evenodd",d:"M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",clipRule:"evenodd"})})})]}),e.jsx("div",{className:"w-[440px] h-[100px] absolute z-[900] bg-transparent top-[130px] left-20",children:h.filter(t=>l===""?t:t.Stasiun.includes(l)).map((t,i)=>e.jsx(e.Fragment,{children:l!=""?e.jsx("div",{children:e.jsx("label",{className:"w-[440px] h-[50px] z-seribu font-plex font-bold text-[15px] bg-white flex text-black items-center hover:bg-oren hover:text-white",onClick:()=>{w(t.Latitude,t.Longitude),n("")},children:e.jsx("p",{className:"ml-10",children:t.Stasiun})})}):e.jsx(e.Fragment,{})}))})]})}return e.jsx(e.Fragment,{children:e.jsxs(b,{center:[50,50],zoom:14,style:{height:"90vh"},whenCreated:p,children:[e.jsx(v,{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.jsx(u,{position:z,children:e.jsx(M,{children:"abc"})}),e.jsx(f,{}),e.jsx(j,{})]})})}export{E as default};