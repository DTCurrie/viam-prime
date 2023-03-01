import{M as O,C as m,S as h}from"./chunk-MA2MUXQN-bbbbfbe5.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{j as i}from"./jsx-runtime-c27a426b.js";import{u as b}from"./index-0e5a60ed.js";import"./preload-helper-101896b7.js";import"./index-c4c77e71.js";import"./_commonjsHelpers-725317a4.js";import"./index-55ae201a.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-3392a817.js";import"./index-d475d2ea.js";import"./memoizerific-cab73ecf.js";import"./index-014c75af.js";import"./chunk-XHUUYXNA-40ecb194.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./index-10d4cb7f.js";import"./_getTag-25edba2d.js";import"./index-842d733b.js";const g=JSON.stringify({name:"Bob",age:400,favorite_food:"pizza"},null,2),M=`
function doSomething(thing) { 
  console.log(thing) 
}
`.trim(),C=`
function doSomething(thing: string): void { 
    console.log(thing) 
  }
`.trim(),V=`
def do_something(thing):
    print(thing)    
`.trim(),N=`
package main

import "fmt"

func DoSomething(thing string) {
	fmt.Println(thing)
}
`.trim(),T=`
#!/bin/sh
echo "Hello world"
`.trim(),D=`
{ 
  "name": "bob",
  "age": "400",
  "role": "Senescence research",
  "favorite_food": "pizza"
}
`.trim(),_=`
{ 
  "name": "bob",
  "age": "400",
  "role": "Senescence research",
  "favorite_food": "salad",
  "status": "healthy"
}
`.trim();function k(a={}){const{wrapper:o}=Object.assign({},b(),a.components);return o?i.exports.jsx(o,{...a,children:i.exports.jsx(l,{})}):l();function l(){const r=Object.assign({h1:"h1",p:"p",code:"code"},b(),a.components);return i.exports.jsxs(i.exports.Fragment,{children:[i.exports.jsx(O,{title:"Elements/Code Editor",parameters:{actions:{handles:["blur","destroy","input","resize","update-markers","update-model"]}},argTypes:{value:{description:"The content for the editor",table:{defaultValue:{summary:""}}},variant:{description:"The type of editor to display",control:{type:"select"},options:["default","diff"],table:{defaultValue:{summary:"default"}}},language:{control:{type:"select"},options:["json","javascript","typescript","python","go","shell"],description:"The language to use for syntax highlighting",table:{defaultValue:{summary:"json"}}},theme:{description:"The `monaco` theme to use",control:{type:"select"},options:["vs","vs-dark"],table:{defaultValue:{summary:"vs"}}},readonly:{description:"Determines if the editor should be readonly or editable",control:{type:"select"},options:["true","false"],table:{defaultValue:{summary:"false"}}},minimap:{description:"Determines if the editor should render the minimap",control:{type:"select"},options:["true","false"],table:{defaultValue:{summary:"false"}}},uri:{description:"When defined, is passed to `window.monaco.editor.createModel`",control:{type:"text"},table:{defaultValue:{summary:""}}}}}),`
`,i.exports.jsx(r.h1,{children:"Code Editor"}),`
`,i.exports.jsxs(r.p,{children:["Uses ",i.exports.jsx(r.code,{children:"monaco"})," for syntax-highlighting."]}),`
`,i.exports.jsx(m,{children:i.exports.jsx(h,{name:"JSON editor",args:{language:"json",value:g},children:({value:e,previous:n,language:t,theme:d,readonly:s,minimap:u,uri:p})=>`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor
        value='${e}'
        previous='${n}'
        language='${t}'
        theme='${d}'
        readonly='${s}'
        minimap='${u}'
        uri='${p??""}'
      />
    </div>
    `})}),`
`,i.exports.jsx(m,{children:i.exports.jsx(h,{name:"JavaScript editor",args:{language:"javascript",value:M},children:({value:e,previous:n,language:t,theme:d,readonly:s,minimap:u,uri:p})=>`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor
        value='${e}'
        previous='${n}'
        language='${t}'
        theme='${d}'
        readonly='${s}'
        minimap='${u}'
        uri='${p??""}'
      />
    </div>
    `})}),`
`,i.exports.jsx(m,{children:i.exports.jsx(h,{name:"TypeScript editor",args:{language:"typescript",value:C},children:({value:e,language:n,theme:t,readonly:d,minimap:s,uri:u})=>`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor 
        value='${e}'
        language='${n}'
        theme='${t}'
        readonly='${d}'
        minimap='${s}'
        uri='${u??""}'
      />
    </div>
    `})}),`
`,i.exports.jsx(m,{children:i.exports.jsx(h,{name:"Python editor",args:{language:"python",value:V},children:({value:e,language:n,theme:t,readonly:d,minimap:s,uri:u})=>`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor 
        value='${e}'
        language='${n}'
        theme='${t}'
        readonly='${d}'
        minimap='${s}'
        uri='${u??""}'
      />
    </div>
    `})}),`
`,i.exports.jsx(m,{children:i.exports.jsx(h,{name:"Go editor",args:{language:"go",value:N},children:({value:e,language:n,theme:t,readonly:d,minimap:s,uri:u})=>`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor 
        value='${e}'
        language='${n}'
        theme='${t}'
        readonly='${d}'
        minimap='${s}'
        uri='${u??""}'
      />
    </div>
    `})}),`
`,i.exports.jsx(m,{children:i.exports.jsx(h,{name:"Shell editor",args:{language:"shell",value:T},children:({value:e,language:n,theme:t,readonly:d,minimap:s,uri:u})=>`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor 
        value='${e}'
        language='${n}'
        theme='${t}'
        readonly='${d}'
        minimap='${s}'
        uri='${u??""}'
      />
    </div>
    `})}),`
`,i.exports.jsx(m,{children:i.exports.jsx(h,{name:"Readonly editor",args:{language:"json",value:g,readonly:!0},children:({value:e,previous:n,language:t,theme:d,readonly:s,minimap:u,uri:p})=>`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor
        value='${e}'
        previous='${n}'
        language='${t}'
        theme='${d}'
        readonly='${s}'
        minimap='${u}'
        uri='${p??""}'
      />
    </div>
    `})}),`
`,i.exports.jsx(m,{children:i.exports.jsx(h,{name:"Mini Map",args:{language:"json",value:g,minimap:!0},children:({value:e,previous:n,language:t,theme:d,readonly:s,minimap:u,uri:p})=>`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor
        value='${e}'
        previous='${n}'
        language='${t}'
        theme='${d}'
        readonly='${s}'
        minimap='${u}'
        uri='${p??""}'
      />
    </div>
    `})}),`
`,i.exports.jsx(m,{children:i.exports.jsx(h,{name:"Diff editor",args:{variant:"diff",language:"json",value:_,previous:D},children:({variant:e,value:n,previous:t,language:d,theme:s,readonly:u,minimap:p,uri:z})=>`
    <div style='width: auto; height: 400px;'>
      <v-code-editor
        variant='${e}'
        value='${n}'
        previous='${t}'
        language='${d}'
        theme='${s}'
        readonly='${u}'
        minimap='${p}'
        uri='${z??""}'
      />
    </div>
    `})})]})}}const c=({value:a,previous:o,language:l,theme:r,readonly:e,minimap:n,uri:t})=>`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor
        value='${a}'
        previous='${o}'
        language='${l}'
        theme='${r}'
        readonly='${e}'
        minimap='${n}'
        uri='${t??""}'
      />
    </div>
    `;c.storyName="JSON editor";c.args={language:"json",value:g};c.parameters={storySource:{source:`({
  value,
  previous,
  language,
  theme,
  readonly,
  minimap,
  uri
}) => \`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor
        value='\${value}'
        previous='\${previous}'
        language='\${language}'
        theme='\${theme}'
        readonly='\${readonly}'
        minimap='\${minimap}'
        uri='\${uri ?? ""}'
      />
    </div>
    \``}};const $=({value:a,previous:o,language:l,theme:r,readonly:e,minimap:n,uri:t})=>`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor
        value='${a}'
        previous='${o}'
        language='${l}'
        theme='${r}'
        readonly='${e}'
        minimap='${n}'
        uri='${t??""}'
      />
    </div>
    `;$.storyName="JavaScript editor";$.args={language:"javascript",value:M};$.parameters={storySource:{source:`({
  value,
  previous,
  language,
  theme,
  readonly,
  minimap,
  uri
}) => \`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor
        value='\${value}'
        previous='\${previous}'
        language='\${language}'
        theme='\${theme}'
        readonly='\${readonly}'
        minimap='\${minimap}'
        uri='\${uri ?? ""}'
      />
    </div>
    \``}};const y=({value:a,language:o,theme:l,readonly:r,minimap:e,uri:n})=>`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor 
        value='${a}'
        language='${o}'
        theme='${l}'
        readonly='${r}'
        minimap='${e}'
        uri='${n??""}'
      />
    </div>
    `;y.storyName="TypeScript editor";y.args={language:"typescript",value:C};y.parameters={storySource:{source:`({
  value,
  language,
  theme,
  readonly,
  minimap,
  uri
}) => \`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor 
        value='\${value}'
        language='\${language}'
        theme='\${theme}'
        readonly='\${readonly}'
        minimap='\${minimap}'
        uri='\${uri ?? ""}'
      />
    </div>
    \``}};const x=({value:a,language:o,theme:l,readonly:r,minimap:e,uri:n})=>`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor 
        value='${a}'
        language='${o}'
        theme='${l}'
        readonly='${r}'
        minimap='${e}'
        uri='${n??""}'
      />
    </div>
    `;x.storyName="Python editor";x.args={language:"python",value:V};x.parameters={storySource:{source:`({
  value,
  language,
  theme,
  readonly,
  minimap,
  uri
}) => \`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor 
        value='\${value}'
        language='\${language}'
        theme='\${theme}'
        readonly='\${readonly}'
        minimap='\${minimap}'
        uri='\${uri ?? ""}'
      />
    </div>
    \``}};const f=({value:a,language:o,theme:l,readonly:r,minimap:e,uri:n})=>`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor 
        value='${a}'
        language='${o}'
        theme='${l}'
        readonly='${r}'
        minimap='${e}'
        uri='${n??""}'
      />
    </div>
    `;f.storyName="Go editor";f.args={language:"go",value:N};f.parameters={storySource:{source:`({
  value,
  language,
  theme,
  readonly,
  minimap,
  uri
}) => \`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor 
        value='\${value}'
        language='\${language}'
        theme='\${theme}'
        readonly='\${readonly}'
        minimap='\${minimap}'
        uri='\${uri ?? ""}'
      />
    </div>
    \``}};const j=({value:a,language:o,theme:l,readonly:r,minimap:e,uri:n})=>`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor 
        value='${a}'
        language='${o}'
        theme='${l}'
        readonly='${r}'
        minimap='${e}'
        uri='${n??""}'
      />
    </div>
    `;j.storyName="Shell editor";j.args={language:"shell",value:T};j.parameters={storySource:{source:`({
  value,
  language,
  theme,
  readonly,
  minimap,
  uri
}) => \`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor 
        value='\${value}'
        language='\${language}'
        theme='\${theme}'
        readonly='\${readonly}'
        minimap='\${minimap}'
        uri='\${uri ?? ""}'
      />
    </div>
    \``}};const S=({value:a,previous:o,language:l,theme:r,readonly:e,minimap:n,uri:t})=>`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor
        value='${a}'
        previous='${o}'
        language='${l}'
        theme='${r}'
        readonly='${e}'
        minimap='${n}'
        uri='${t??""}'
      />
    </div>
    `;S.storyName="Readonly editor";S.args={language:"json",value:g,readonly:!0};S.parameters={storySource:{source:`({
  value,
  previous,
  language,
  theme,
  readonly,
  minimap,
  uri
}) => \`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor
        value='\${value}'
        previous='\${previous}'
        language='\${language}'
        theme='\${theme}'
        readonly='\${readonly}'
        minimap='\${minimap}'
        uri='\${uri ?? ""}'
      />
    </div>
    \``}};const E=({value:a,previous:o,language:l,theme:r,readonly:e,minimap:n,uri:t})=>`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor
        value='${a}'
        previous='${o}'
        language='${l}'
        theme='${r}'
        readonly='${e}'
        minimap='${n}'
        uri='${t??""}'
      />
    </div>
    `;E.storyName="Mini Map";E.args={language:"json",value:g,minimap:!0};E.parameters={storySource:{source:`({
  value,
  previous,
  language,
  theme,
  readonly,
  minimap,
  uri
}) => \`
    <div style='width: 400px; height: 400px;'>
      <v-code-editor
        value='\${value}'
        previous='\${previous}'
        language='\${language}'
        theme='\${theme}'
        readonly='\${readonly}'
        minimap='\${minimap}'
        uri='\${uri ?? ""}'
      />
    </div>
    \``}};const w=({variant:a,value:o,previous:l,language:r,theme:e,readonly:n,minimap:t,uri:d})=>`
    <div style='width: auto; height: 400px;'>
      <v-code-editor
        variant='${a}'
        value='${o}'
        previous='${l}'
        language='${r}'
        theme='${e}'
        readonly='${n}'
        minimap='${t}'
        uri='${d??""}'
      />
    </div>
    `;w.storyName="Diff editor";w.args={variant:"diff",language:"json",value:_,previous:D};w.parameters={storySource:{source:`({
  variant,
  value,
  previous,
  language,
  theme,
  readonly,
  minimap,
  uri
}) => \`
    <div style='width: auto; height: 400px;'>
      <v-code-editor
        variant='\${variant}'
        value='\${value}'
        previous='\${previous}'
        language='\${language}'
        theme='\${theme}'
        readonly='\${readonly}'
        minimap='\${minimap}'
        uri='\${uri ?? ""}'
      />
    </div>
    \``}};const v={title:"Elements/Code Editor",parameters:{actions:{handles:["blur","destroy","input","resize","update-markers","update-model"]}},argTypes:{value:{description:"The content for the editor",table:{defaultValue:{summary:""}}},variant:{description:"The type of editor to display",control:{type:"select"},options:["default","diff"],table:{defaultValue:{summary:"default"}}},language:{control:{type:"select"},options:["json","javascript","typescript","python","go","shell"],description:"The language to use for syntax highlighting",table:{defaultValue:{summary:"json"}}},theme:{description:"The `monaco` theme to use",control:{type:"select"},options:["vs","vs-dark"],table:{defaultValue:{summary:"vs"}}},readonly:{description:"Determines if the editor should be readonly or editable",control:{type:"select"},options:["true","false"],table:{defaultValue:{summary:"false"}}},minimap:{description:"Determines if the editor should render the minimap",control:{type:"select"},options:["true","false"],table:{defaultValue:{summary:"false"}}},uri:{description:"When defined, is passed to `window.monaco.editor.createModel`",control:{type:"text"},table:{defaultValue:{summary:""}}}},tags:["mdx"],includeStories:["jsonEditor","javaScriptEditor","typeScriptEditor","pythonEditor","goEditor","shellEditor","readonlyEditor","miniMap","diffEditor"]};v.parameters=v.parameters||{};v.parameters.docs={...v.parameters.docs||{},page:k};const te=["jsonEditor","javaScriptEditor","typeScriptEditor","pythonEditor","goEditor","shellEditor","readonlyEditor","miniMap","diffEditor"];export{te as __namedExportsOrder,v as default,w as diffEditor,f as goEditor,$ as javaScriptEditor,c as jsonEditor,E as miniMap,x as pythonEditor,S as readonlyEditor,j as shellEditor,y as typeScriptEditor};
//# sourceMappingURL=code-editor.stories-82f8564f.js.map
