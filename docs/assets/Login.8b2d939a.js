import{y as w,u as k,f as n,r as u,o as y,c as x,a as s,g as c,h as S,k as r,i as V,v as d,n as _,b as h,w as m}from"./index.fbf46cc7.js";import{l as C}from"./index.6c906bdd.js";import"./index.92abe176.js";const E={class:"columns is-centered background-grey"},N={class:"column is-two-fifths is-full-mobile total-height"},B={class:"box m-5"},L=s("h1",{class:"mb-3"},"Login",-1),M={class:"notification is-danger is-light"},P=s("button",{class:"delete"},null,-1),T=s("strong",null,"Error:",-1),U=["onSubmit"],z={class:"field"},A={class:"control has-icons-left has-icons-right"},D=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-envelope"})],-1),I=s("span",{class:"icon is-small is-right"},[s("i",{class:"fas fa-check"})],-1),R={class:"field"},j={class:"control has-icons-left"},q=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-lock"})],-1),F=s("div",{class:"field"},[s("p",{class:"control"},[s("button",{class:"button is-primary"}," Login ")])],-1),O={__name:"Login",setup(G){const p=w(),f=k(),t=n(""),o=n(""),e=n(!1),v=async()=>{try{const l=await C(t.value,o.value);f.login(l,t.value,o.value),p.push({name:"home"})}catch{e.value=!0,setTimeout(()=>{e.value=!1},5e3)}};return(l,a)=>{const g=u("router-link"),b=u("P");return y(),x("div",E,[s("div",N,[s("div",B,[L,c(s("div",M,[P,T,r(" Invalid login credentials ")],512),[[S,e.value]]),s("form",{onSubmit:V(v,["prevent"])},[s("div",z,[s("p",A,[c(s("input",{"onUpdate:modelValue":a[0]||(a[0]=i=>t.value=i),class:_(["input",{"is-danger":e.value}]),type:"email",placeholder:"Email"},null,2),[[d,t.value]]),D,I])]),s("div",R,[s("p",j,[c(s("input",{"onUpdate:modelValue":a[1]||(a[1]=i=>o.value=i),class:_(["input",{"is-danger":e.value}]),type:"password",placeholder:"Password"},null,2),[[d,o.value]]),q])]),F,h(b,null,{default:m(()=>[r("Not yet registered? "),h(g,{to:{name:"register"}},{default:m(()=>[r("Create a free account.")]),_:1})]),_:1})],40,U)])])])}}};export{O as default};
