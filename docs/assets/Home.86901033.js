import{d as O,_ as w,r as E,o as c,c as u,a as e,b as T,w as J,p as I,e as C,u as $,f as i,g as h,v as b,h as D,i as q,n as x,t as y,j as A,k as B,l as U,m as Y,F as Z,q as z,s as H}from"./index.fb9d5139.js";import{c as X}from"./index.04be904e.js";const W="https://lyyqilmwickycckqcbjy.supabase.co",G="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eXFpbG13aWNreWNja3FjYmp5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjA4OTExOCwiZXhwIjoxOTgxNjY1MTE4fQ.uOjDqpXSF2wBM_Y7C2Dp8OJ4jngcc3yOJBTZKSRzKVM",v=X(W,G),S=O("task",{state:()=>({tasks:[]}),actions:{async getTask(){const t=await v.from("task").select("*").order("id",{ascending:!1});return this.task=t.data,t.data},async updateTask(t,o,s){await v.from("task").update({title:o,description:s}).eq("id",t)},async deleteTask(t){await v.from("task").delete().eq("id",t)},async addTask(t,o,s){const l=await v.from("task").insert({user_id:t,title:o,description:s});console.log(l),console.log("Funcion newTask")},async taskDone(t,o){const s=await v.from("task").update({isCompleted:o}).match({id:t});console.log(s),console.log("Funcion newTask")}}});const K={},f=t=>(I("data-v-b9d7b6e4"),t=t(),C(),t),L={class:"main-home columns is-centered is-vcentered"},P={class:"content has-text-centered light-container"},Q=f(()=>e("h1",null,"Making You More Productive",-1)),ee=f(()=>e("h2",null,"Tools to help you and make your life easier beyond the limits!",-1)),se=f(()=>e("strong",null,"GET STARTED",-1)),te=f(()=>e("p",{class:"mt-2"},"It's free now and forever.",-1)),oe=f(()=>e("div",null,null,-1));function ae(t,o){const s=E("router-link");return c(),u("div",L,[e("div",P,[Q,ee,T(s,{to:{name:"register"},class:"button is-primary mt-5"},{default:J(()=>[se]),_:1}),te]),oe])}const ne=w(K,[["render",ae],["__scopeId","data-v-b9d7b6e4"]]),le={class:"columns"},ie=["onSubmit"],ce={class:"field"},de=e("label",{class:"label"},"Title",-1),re={class:"control"},ue={class:"field"},_e=e("label",{class:"label"},"Description",-1),pe={class:"control"},ke=q('<div class="field is-grouped"><div class="control"><button class="button is-link">Save</button></div><div class="control"><button class="button is-link is-light">Cancel</button></div></div>',1),me={__name:"PostTask",emits:["handleRefresh"],setup(t,{emit:o}){const s=S(),l=$(),a=i(""),n=i(""),_=async()=>{a.value!==""&&n.value!==""&&(await s.addTask(l.$state.user.id,a.value,n.value),await s.getTask(),a.value="",n.value="",o("handleRefresh"))};return(k,d)=>(c(),u("div",le,[e("form",{onSubmit:D(_,["prevent"]),class:"column is-6 is-12-mobile is-offset-one-quarter box p-5 mb-5"},[e("div",ce,[de,e("div",re,[h(e("input",{"onUpdate:modelValue":d[0]||(d[0]=m=>a.value=m),class:"input",type:"text",placeholder:"Task title"},null,512),[[b,a.value]])])]),e("div",ue,[_e,e("div",pe,[h(e("textarea",{"onUpdate:modelValue":d[1]||(d[1]=m=>n.value=m),class:"textarea",placeholder:"Description"},null,512),[[b,n.value]])])]),ke],40,ie)]))}};const V=t=>(I("data-v-52d9f8e3"),t=t(),C(),t),ve={class:"column is-4-desktop is-12-mobile is-6-tablet"},he={key:0,class:"content content-task"},fe={class:""},be={class:"date"},ye={class:"actions-task"},Te={class:"checkbox"},we={key:1},Se={class:"field"},ge=V(()=>e("label",{class:"label"},"Title",-1)),xe={class:"control"},Ie=["placeholder"],Ce={class:"field"},$e=V(()=>e("label",{class:"label"},"Description",-1)),De={class:"control"},Ve=["placeholder"],Me={__name:"Task",props:{task:Object},emits:["handleRefresh"],setup(t,{emit:o}){const s=t,l=S(),a=i(!1),n=i(s.task.title),_=i(s.task.description),k=i(s.task.isCompleted),d=i(new Date(s.task.created_at)),m={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",hour12:"false"};i("");const M=async()=>{confirm("Are you sure you want to delete task id ?")&&(await l.deleteTask(s.task.id),o("handleRefresh"),console.log("eliminara task "+s.task.id))},R=()=>{a.value=!0},j=()=>{a.value=!1},N=async()=>{n.value!==""&&_.value!==""&&(await l.updateTask(s.task.id,n.value,_.value),o("handleRefresh"),a.value=!1)},F=async()=>{k.value=!k.value,await l.taskDone(s.task.id,k.value),o("handleRefresh")};return(g,r)=>(c(),u("div",ve,[e("div",{class:x(["notification box",{doneStyle:s.task.isCompleted}])},[e("button",{onClick:M,class:"delete is-medium"}),a.value?(c(),u("div",we,[e("form",{onSubmit:r[3]||(r[3]=D((...p)=>g.onSubmit&&g.onSubmit(...p),["prevent"]))},[e("div",Se,[ge,e("div",xe,[h(e("input",{"onUpdate:modelValue":r[1]||(r[1]=p=>n.value=p),class:"input",type:"text",placeholder:s.task.title},null,8,Ie),[[b,n.value]])])]),e("div",Ce,[$e,e("div",De,[h(e("textarea",{"onUpdate:modelValue":r[2]||(r[2]=p=>_.value=p),class:"textarea",placeholder:s.task.description},null,8,Ve),[[b,_.value]])])]),e("div",{class:"field is-grouped"},[e("div",{class:"control"},[e("button",{onClick:N,class:"button is-link"},"Save")]),e("div",{class:"control"},[e("button",{onClick:j,class:"button is-link is-light"},"Cancel")])])],32)])):(c(),u("div",he,[e("div",null,[e("h2",{class:x({textDone:s.task.isCompleted})},y(s.task.title),3),e("p",null,y(s.task.description),1)]),e("div",fe,[e("p",be,y(d.value.toLocaleDateString("en-us",m)),1),e("div",ye,[e("i",{onClick:R,class:"far fa-edit"}),e("label",Te,[h(e("input",{onClick:F,"onUpdate:modelValue":r[0]||(r[0]=p=>s.task.isCompleted=p),type:"checkbox"},null,512),[[A,s.task.isCompleted]]),B(" Done ")])])])]))],2)]))}},Re=w(Me,[["__scopeId","data-v-52d9f8e3"]]);const je={key:0},Ne={key:1,class:"container mt-6"},Fe={class:"columns is-multiline mt-5 task-container"},Oe={__name:"Home",setup(t){const o=$(),s=S(),l=i(),a=async()=>{l.value=await s.getTask(),console.log("Actualizar tasks")},n=async()=>{await a()};return U(async()=>{a()}),(_,k)=>Y(o).isAuth?(c(),u("div",Ne,[T(me,{onHandleRefresh:n}),e("div",Fe,[(c(!0),u(Z,null,z(l.value,d=>(c(),H(Re,{task:d,onHandleRefresh:n},null,8,["task"]))),256))])])):(c(),u("div",je,[T(ne)]))}},qe=w(Oe,[["__scopeId","data-v-f311ea8a"]]);export{qe as default};