import{y as w,u as b,f as i,r as u,o as k,c as S,g as c,z as x,a as s,e as r,v as d,b as _,w as h,h as y}from"./index.39e889f8.js";import{l as N}from"./index.61702eee.js";import"./index.fd5972df.js";const V={class:"section"},E=s("h1",null,"LOGIN",-1),L={class:"notification is-danger is-light"},B=s("button",{class:"delete"},null,-1),C=s("strong",null,"Error:",-1),M=["onSubmit"],P={class:"field"},I={class:"control has-icons-left has-icons-right"},T=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-envelope"})],-1),U=s("span",{class:"icon is-small is-right"},[s("i",{class:"fas fa-check"})],-1),z={class:"field"},A={class:"control has-icons-left"},D=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-lock"})],-1),G=s("div",{class:"field"},[s("p",{class:"control"},[s("button",{class:"button is-success"}," Login ")])],-1),F={__name:"Login",setup(O){const p=w(),f=b(),e=i(""),o=i(""),a=i(!1),m=async()=>{console.log("formulario enviado Login ",e.value,o.value);const l=await N(e.value,o.value);a.value=!1,l?(console.log("login hecho"),f.login(l,e.value,o.value),p.push({name:"home"})):a.value=!0};return(l,t)=>{const v=u("router-link"),g=u("P");return k(),S("div",V,[E,c(s("div",L,[B,C,r(" Invalid login credentials ")],512),[[x,a.value]]),s("form",{onSubmit:y(m,["prevent"])},[s("div",P,[s("p",I,[c(s("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>e.value=n),class:"input",type:"email",placeholder:"Email"},null,512),[[d,e.value]]),T,U])]),s("div",z,[s("p",A,[c(s("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>o.value=n),class:"input",type:"password",placeholder:"Password"},null,512),[[d,o.value]]),D])]),G,_(g,null,{default:h(()=>[r("Not yet registered? "),_(v,{to:{name:"register"}},{default:h(()=>[r("Create a free account.")]),_:1})]),_:1})],40,M)])}}};export{F as default};
