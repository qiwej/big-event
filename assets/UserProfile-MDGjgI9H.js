import{u as v,r as m,o as V,c as k,b as a,d as l,f as E,bN as U,E as x}from"./index-BNaY0Lnh.js";import{E as y,a as w}from"./el-form-item-D7GVCCfD.js";import{E as B}from"./_plugin-vue_export-helper-Ck8KoU-A.js";import{E as F}from"./el-input-BRjVM-Yz.js";import{_ as I}from"./PageContainer-DgUBqWMu.js";import"./_baseClone-BHYAv1eG.js";const j={__name:"UserProfile",setup(N){const{user:{email:s,id:n,nickname:i,username:p},getUser:d}=v(),e=m({id:n,username:p,nickname:i,email:s}),_=m({nickname:[{required:!0,message:"请输入用户昵称",trigger:"blur"},{pattern:/^\S{2,10}/,message:"昵称必须是2-10位的非空字符串",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]}),f=m(null),c=async()=>{console.log(e.value),await U(e.value),d(),x.success("修改成功")};return(S,o)=>{const u=F,t=y,g=B,b=w;return V(),k(I,{title:"基本资料"},{default:a(()=>[l(b,{model:e.value,rules:_.value,ref_key:"formRef",ref:f,"label-width":"100px"},{default:a(()=>[l(t,{label:"登录名称",prop:"username"},{default:a(()=>[l(u,{disabled:"",modelValue:e.value.username,"onUpdate:modelValue":o[0]||(o[0]=r=>e.value.username=r)},null,8,["modelValue"])]),_:1}),l(t,{label:"用户昵称",prop:"nickname"},{default:a(()=>[l(u,{modelValue:e.value.nickname,"onUpdate:modelValue":o[1]||(o[1]=r=>e.value.nickname=r)},null,8,["modelValue"])]),_:1}),l(t,{label:"用户邮箱",prop:"email"},{default:a(()=>[l(u,{modelValue:e.value.email,"onUpdate:modelValue":o[2]||(o[2]=r=>e.value.email=r)},null,8,["modelValue"])]),_:1}),l(t,null,{default:a(()=>[l(g,{type:"primary",onClick:c},{default:a(()=>[E("提交修改")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}}};export{j as default};
