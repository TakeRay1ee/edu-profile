const fs=require('fs'),vm=require('vm'),path=require('path');
process.chdir(path.resolve(__dirname,'..'));
fs.mkdirSync('artifacts',{recursive:true});
for(const file of ['index.html','app.html']){
 const html=fs.readFileSync(file,'utf8');
 let blocks=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)];
 for(let i=0;i<blocks.length;i++)new vm.Script(blocks[i][1],{filename:file+':script'+i});
 console.log(file,'script syntax OK');
 if(file==='index.html'){
  const start=html.indexOf('function genPageHTML('),end=html.indexOf('return PART1 + defaultBlock + PART3;',start)+'return PART1 + defaultBlock + PART3;'.length+2;
  const code=html.slice(start,end);
  const ctx={};vm.createContext(ctx);vm.runInContext(code,ctx);
  const generated=ctx.genPageHTML({name:'演示同学',school:'示例大学',major:'经济学',gender:'男',academic_qualification:'本科',xltype:'普通全日制'});
  for(const b of generated.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g))new vm.Script(b[1]);
  fs.writeFileSync('artifacts/generated-demo.html',generated);
  console.log('generated document syntax OK',generated.includes('<body data-share-view>'));
 }
}
