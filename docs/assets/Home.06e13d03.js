import{d as J,_ as C,r as B,o as _,c as v,a as e,b as $,w as U,p as q,e as R,u as M,f as i,g as u,v as g,n as m,h as w,i as V,t as x,j as Y,k as Z,l as A,m as z,F as H,q as X,s as W}from"./index.fbf46cc7.js";import{c as G}from"./index.92abe176.js";const K="https://lyyqilmwickycckqcbjy.supabase.co",L="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eXFpbG13aWNreWNja3FjYmp5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjA4OTExOCwiZXhwIjoxOTgxNjY1MTE4fQ.uOjDqpXSF2wBM_Y7C2Dp8OJ4jngcc3yOJBTZKSRzKVM",y=G(K,L),I=J("task",{state:()=>({tasks:[]}),actions:{async getTask(){const t=await y.from("task").select("*").order("id",{ascending:!1});return this.task=t.data,t.data},async updateTask(t,o,s){await y.from("task").update({title:o,description:s}).eq("id",t)},async deleteTask(t){await y.from("task").delete().eq("id",t)},async addTask(t,o,s){const c=await y.from("task").insert({user_id:t,title:o,description:s});console.log(c),console.log("Funcion newTask")},async taskDone(t,o){const s=await y.from("task").update({isCompleted:o}).match({id:t});console.log(s),console.log("Funcion newTask")}}});const P={},T=t=>(q("data-v-995b8a2f"),t=t(),R(),t),Q={class:"main-home columns is-centered is-vcentered"},ee={class:"content has-text-centered light-container"},se=T(()=>e("h1",null,"Making You More Productive",-1)),te=T(()=>e("h2",null,"Tools to help you and make your life easier beyond the limits!",-1)),ae=T(()=>e("strong",null,"GET STARTED",-1)),oe=T(()=>e("p",{class:"mt-2"},"It's free now and forever.",-1)),le=T(()=>e("div",null,null,-1));function ne(t,o){const s=B("router-link");return _(),v("div",Q,[e("div",ee,[se,te,$(s,{to:{name:"register"},class:"button is-primary mt-5"},{default:U(()=>[ae]),_:1}),oe]),le])}const ie=C(P,[["render",ne],["__scopeId","data-v-995b8a2f"]]),ce={class:"columns"},de=["onSubmit"],re={class:"field"},ue=e("label",{class:"label"},"Title",-1),_e={class:"control"},pe={class:"help is-danger"},ve={class:"field"},he=e("label",{class:"label"},"Description",-1),me={class:"control"},ke={class:"help is-danger"},fe=e("div",{class:"control"},[e("button",{class:"button is-link"},"Save")],-1),be={__name:"PostTask",emits:["handleRefresh"],setup(t,{emit:o}){const s=I(),c=M(),l=i(""),a=i(""),n=i(!1),d=i(!1),k=async()=>{l.value!==""&&a.value!==""?(await s.addTask(c.$state.user.id,l.value,a.value),await s.getTask(),l.value="",a.value="",o("handleRefresh")):l.value==""?(n.value=!0,setTimeout(()=>{n.value=!1},3e3)):a.value==""&&(d.value=!0,setTimeout(()=>{d.value=!1},3e3))},S=()=>{n.value=!1,d.value=!1};return(f,r)=>(_(),v("div",ce,[e("form",{onSubmit:V(k,["prevent"]),class:"column is-6 is-12-mobile is-offset-one-quarter box p-5 mb-5"},[e("div",re,[ue,e("div",_e,[u(e("input",{"onUpdate:modelValue":r[0]||(r[0]=b=>l.value=b),class:m(["input",{"is-danger":n.value}]),type:"text",placeholder:"Task title"},null,2),[[g,l.value]]),u(e("p",pe,"Title is required",512),[[w,n.value]])])]),e("div",ve,[he,e("div",me,[u(e("textarea",{"onUpdate:modelValue":r[1]||(r[1]=b=>a.value=b),class:m(["textarea",{"is-danger":d.value}]),placeholder:"Description"},null,2),[[g,a.value]]),u(e("p",ke,"Description is required",512),[[w,d.value]])])]),e("div",{class:"field is-grouped"},[fe,e("div",{class:"control"},[e("button",{onClick:S,class:"button is-link is-light"},"Cancel")])])],40,de)]))}};const j=t=>(q("data-v-b3b3eeb0"),t=t(),R(),t),ye={class:"column is-4-desktop is-12-mobile is-6-tablet"},Te={key:0,class:"content content-task"},ge={class:""},we={class:"date"},Se={class:"actions-task"},xe={class:"checkbox"},$e={key:1},Ce={class:"field"},Ie=j(()=>e("label",{class:"label"},"Title",-1)),De={class:"control"},qe=["placeholder"],Re={class:"help is-danger"},Me={class:"field"},Ve=j(()=>e("label",{class:"label"},"Description",-1)),je={class:"control"},Fe=["placeholder"],Ne={class:"help is-danger"},Oe={__name:"Task",props:{task:Object},emits:["handleRefresh"],setup(t,{emit:o}){const s=t,c=I(),l=i(!1),a=i(s.task.title),n=i(s.task.description),d=i(s.task.isCompleted),k=i(new Date(s.task.created_at)),S={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",hour12:"false"},f=i(!1),r=i(!1),b=async()=>{confirm("Are you sure you want to delete task id ?")&&(await c.deleteTask(s.task.id),o("handleRefresh"),console.log("eliminara task "+s.task.id))},F=()=>{l.value=!0},N=()=>{l.value=!1},O=async()=>{a.value!==""&&n.value!==""?(await c.updateTask(s.task.id,a.value,n.value),o("handleRefresh"),l.value=!1):a.value==""?(f.value=!0,setTimeout(()=>{f.value=!1},3e3)):n.value==""&&(r.value=!0,setTimeout(()=>{r.value=!1},3e3))},E=async()=>{d.value=!d.value,await c.taskDone(s.task.id,d.value),o("handleRefresh")};return(D,p)=>(_(),v("div",ye,[e("div",{class:m(["notification box",{doneStyle:s.task.isCompleted}])},[e("button",{onClick:b,class:"delete is-medium"}),l.value?(_(),v("div",$e,[e("form",{onSubmit:p[3]||(p[3]=V((...h)=>D.onSubmit&&D.onSubmit(...h),["prevent"]))},[e("div",Ce,[Ie,e("div",De,[u(e("input",{"onUpdate:modelValue":p[1]||(p[1]=h=>a.value=h),class:m(["input",{"is-danger":f.value}]),type:"text",placeholder:s.task.title},null,10,qe),[[g,a.value]]),u(e("p",Re,"Title is required",512),[[w,f.value]])])]),e("div",Me,[Ve,e("div",je,[u(e("textarea",{"onUpdate:modelValue":p[2]||(p[2]=h=>n.value=h),class:m(["textarea",{"is-danger":r.value}]),placeholder:s.task.description},null,10,Fe),[[g,n.value]]),u(e("p",Ne,"Description is required",512),[[w,r.value]])])]),e("div",{class:"field is-grouped"},[e("div",{class:"control"},[e("button",{onClick:O,class:"button is-link"},"Save")]),e("div",{class:"control"},[e("button",{onClick:N,class:"button is-link is-light"},"Cancel")])])],32)])):(_(),v("div",Te,[e("div",null,[e("h2",{class:m({textDone:s.task.isCompleted})},x(s.task.title),3),e("p",null,x(s.task.description),1)]),e("div",ge,[e("p",we,x(k.value.toLocaleDateString("en-us",S)),1),e("div",Se,[e("i",{onClick:F,class:"far fa-edit"}),e("label",xe,[u(e("input",{onClick:E,"onUpdate:modelValue":p[0]||(p[0]=h=>s.task.isCompleted=h),type:"checkbox"},null,512),[[Y,s.task.isCompleted]]),Z(" Done ")])])])]))],2)]))}},Ee=C(Oe,[["__scopeId","data-v-b3b3eeb0"]]);const Je={key:0},Be={key:1,class:"container mt-6"},Ue={class:"columns is-multiline mt-5 task-container"},Ye={__name:"Home",setup(t){const o=M(),s=I(),c=i(),l=async()=>{c.value=await s.getTask()},a=async()=>{await l()};return A(async()=>{l()}),(n,d)=>z(o).isAuth?(_(),v("div",Be,[$(be,{onHandleRefresh:a}),e("div",Ue,[(_(!0),v(H,null,X(c.value,k=>(_(),W(Ee,{task:k,onHandleRefresh:a},null,8,["task"]))),256))])])):(_(),v("div",Je,[$(ie)]))}},ze=C(Ye,[["__scopeId","data-v-89cf914c"]]);export{ze as default};
