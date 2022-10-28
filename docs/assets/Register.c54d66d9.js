import{_ as E,u as V,f as o,r as S,o as q,c as I,a as s,g as e,h as l,k as c,t as M,b as m,w as g,i as N,v as w,n as b,p as R,e as U}from"./index.e6895d6f.js";import{s as B}from"./index.18bb8dc6.js";import"./index.1edf40f1.js";const a=d=>(R("data-v-aec8761b"),d=d(),U(),d),T={class:"columns is-centered background-grey"},A={class:"total-height column is-two-fifths is-full-mobile"},D={class:"box m-5"},L=a(()=>s("h1",{class:"mb-3"},"Create new account",-1)),j={class:"notification is-success is-light"},z=a(()=>s("button",{class:"delete"},null,-1)),Y=a(()=>s("h2",{class:"notification-title"},"Congratulations Your account has been created",-1)),F=a(()=>s("strong",null,"click the confirmation link",-1)),G=a(()=>s("strong",null,"Login",-1)),H=["onSubmit"],J={class:"field"},K={class:"control has-icons-left has-icons-right"},O=a(()=>s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-envelope"})],-1)),Q=a(()=>s("span",{class:"icon is-small is-right"},[s("i",{class:"fas fa-check"})],-1)),W={class:"help is-danger"},X={class:"field"},Z={class:"control has-icons-left"},$=a(()=>s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-lock"})],-1)),ss={class:"help is-danger"},es={class:"help is-danger"},as={class:"help is-danger"},os={class:"field"},ts={class:"control has-icons-left"},ls=a(()=>s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-lock"})],-1)),ns={class:"help is-danger"},is={class:"help is-danger"},cs=a(()=>s("div",{class:"field"},[s("p",{class:"control"},[s("button",{class:"button is-primary"}," Sign Up ")])],-1)),rs={__name:"Register",setup(d){V();const r=o(""),t=o(""),_=o(""),p=o(!1),v=o(!1),y=o(!1),f=o(!1),h=o(!1),n=o(!1),P=async()=>{p.value=!1,v.value=!1,f.value=!1,h.value=!1,n.value=!1,t.value===_.value&&t.value.length>5?(await B(r.value,t.value),y.value=!0):r.value==""?f.value=!0:t.value==""?(h.value=!0,n.value=!0):t.value.length<6?(v.value=!0,n.value=!0):t.value!==_.value&&(p.value=!0,n.value=!0)};return(x,i)=>{const k=S("router-link"),C=S("P");return q(),I("div",T,[s("div",A,[s("div",D,[L,e(s("div",j,[z,Y,c(" Confirm your registration by going to your inbox "),s("strong",null,M(r.value),1),c(" and "),F,c(" that we just sent you. when the email has been confirmed, you can access in "),m(k,{to:{name:"login"}},{default:g(()=>[G]),_:1}),c(" page. ")],512),[[l,y.value]]),s("form",{onSubmit:N(P,["prevent"])},[s("div",J,[s("p",K,[e(s("input",{"onUpdate:modelValue":i[0]||(i[0]=u=>r.value=u),class:b(["input",{"is-danger":x.emailErrorya}]),type:"email",placeholder:"Email"},null,2),[[w,r.value]]),O,Q]),e(s("p",W,"Email is required",512),[[l,f.value]])]),s("div",X,[s("p",Z,[e(s("input",{"onUpdate:modelValue":i[1]||(i[1]=u=>t.value=u),class:b(["input",{"is-danger":n.value}]),type:"password",placeholder:"Password"},null,2),[[w,t.value]]),$]),e(s("p",ss,"Passwords do not match",512),[[l,p.value]]),e(s("p",es,"The password must be at least 6 characters long.",512),[[l,v.value]]),e(s("p",as,"Password is required",512),[[l,h.value]])]),s("div",os,[s("p",ts,[e(s("input",{"onUpdate:modelValue":i[2]||(i[2]=u=>_.value=u),class:b(["input",{"is-danger":n.value}]),type:"password",placeholder:"Confirm Password"},null,2),[[w,_.value]]),ls]),e(s("p",ns,"Passwords do not match",512),[[l,p.value]]),e(s("p",is,"Password is required",512),[[l,h.value]])]),cs,m(C,null,{default:g(()=>[c("Already have an account? "),m(k,{to:{name:"login"}},{default:g(()=>[c("Log in")]),_:1})]),_:1})],40,H)])])])}}},ps=E(rs,[["__scopeId","data-v-aec8761b"]]);export{ps as default};
