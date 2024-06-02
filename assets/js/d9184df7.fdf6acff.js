"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[463],{3392:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var i=t(651),d=t(2844);const r={sidebar_position:4},s="Months Navigation",o={id:"using-daypicker/navigation",title:"Months Navigation",description:"Default Month",source:"@site/docs/using-daypicker/navigation.mdx",sourceDirName:"using-daypicker",slug:"/using-daypicker/navigation",permalink:"/next/using-daypicker/navigation",draft:!1,unlisted:!1,editUrl:"https://github.com/gpbl/react-day-picker/tree/main/website/docs/using-daypicker/navigation.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Customization",permalink:"/next/using-daypicker/customization"},next:{title:"Selection Modes",permalink:"/next/using-daypicker/selection-modes"}},a={},h=[{value:"Default Month",id:"default-month",level:2},{value:"Controlling the Month",id:"controlling-the-month",level:2},{value:"&quot;Today&quot; Button",id:"today-button",level:3},{value:"Start and End Dates",id:"start-and-end-dates",level:2},{value:"Disabling the Navigation",id:"disabling-the-navigation",level:2},{value:"Hiding the Navigation",id:"hiding-the-navigation",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components},{BrowserWindow:t,Examples:r}=n;return t||x("BrowserWindow",!0),r||x("Examples",!1),r.Controlled||x("Examples.Controlled",!0),r.DefaultMonth||x("Examples.DefaultMonth",!0),r.DisableNavigation||x("Examples.DisableNavigation",!0),r.FromToYear||x("Examples.FromToYear",!0),r.HideNavigation||x("Examples.HideNavigation",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"months-navigation",children:"Months Navigation"}),"\n",(0,i.jsx)(n.h2,{id:"default-month",children:"Default Month"}),"\n",(0,i.jsxs)(n.p,{children:["As default, DayPicker renders the current month. You can change the default month by setting the ",(0,i.jsx)(n.code,{children:"defaultMonth"})," prop to a specific date."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Prop Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"defaultMonth"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Date"})}),(0,i.jsx)(n.td,{children:"The initial month to show in the calendar. Default is the current month."})]})})]}),"\n",(0,i.jsx)(n.p,{children:"For example, to render a calendar starting from September 1979:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<DayPicker defaultMonth={new Date(1979, 8)} />\n"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(r.DefaultMonth,{})}),"\n",(0,i.jsx)(n.h2,{id:"controlling-the-month",children:"Controlling the Month"}),"\n",(0,i.jsxs)(n.p,{children:["To programmatically control the month displayed when navigating, use the ",(0,i.jsx)(n.code,{children:"month"})," and ",(0,i.jsx)(n.code,{children:"onMonthChange"})," props."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Prop Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"month"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Date"})}),(0,i.jsx)(n.td,{children:"The month displayed in the calendar."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"onMonthChange"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/next/api/type-aliases/MonthChangeEventHandler",children:(0,i.jsx)(n.code,{children:"MonthChangeEventHandler"})})}),(0,i.jsx)(n.td,{children:"Callback when the month change."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"today-button",children:'"Today" Button'}),"\n",(0,i.jsxs)(n.p,{children:["For example, to implement a ",(0,i.jsx)("strong",{children:"Go to Today"})," button, set ",(0,i.jsx)(n.code,{children:"month"})," to the current date when the button is clicked."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { useState } from "react";\n\nimport { addMonths } from "date-fns";\nimport { DayPicker } from "react-day-picker";\n\nexport function Controlled() {\n  const today = new Date();\n  const nextMonth = addMonths(today, 1);\n\n  const [month, setMonth] = useState(nextMonth);\n\n  return (\n    <>\n      <DayPicker month={month} onMonthChange={setMonth} />\n      <button onClick={() => setMonth(today)}>Go to Today</button>\n    </>\n  );\n}\n'})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(r.Controlled,{})}),"\n",(0,i.jsx)(n.h2,{id:"start-and-end-dates",children:"Start and End Dates"}),"\n",(0,i.jsxs)(n.p,{children:["Limit the dates the user can navigate to by using the ",(0,i.jsx)(n.code,{children:"from*"}),", ",(0,i.jsx)(n.code,{children:"to*"})," props."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Prop Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"fromYear"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"The earliest year to start the navigation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"toYear"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"The latest year to start the navigation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"fromMonth"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Date"})}),(0,i.jsx)(n.td,{children:"The earliest month to start the navigation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"toMonth"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Date"})}),(0,i.jsx)(n.td,{children:"The latest month to end the navigation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"fromDate"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Date"})}),(0,i.jsx)(n.td,{children:"The earliest day to start the navigation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"toDate"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Date"})}),(0,i.jsx)(n.td,{children:"The latest day to end the navigation."})]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<DayPicker defaultMonth={new Date(2024, 0)} fromYear={2024} toYear={2026} />\n"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(r.FromToYear,{})}),"\n",(0,i.jsx)(n.h2,{id:"disabling-the-navigation",children:"Disabling the Navigation"}),"\n",(0,i.jsxs)(n.p,{children:["To prevent the user from navigating between months, set the ",(0,i.jsx)(n.code,{children:"disableNavigation"})," prop to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Prop Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"disableNavigation"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"Disable the navigation between months."})]})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<DayPicker disableNavigation />\n"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(r.DisableNavigation,{})}),"\n",(0,i.jsx)(n.h2,{id:"hiding-the-navigation",children:"Hiding the Navigation"}),"\n",(0,i.jsxs)(n.p,{children:["To hide the navigation completely, set the ",(0,i.jsx)(n.code,{children:"hideNavigation"})," prop to ",(0,i.jsx)(n.code,{children:"true"}),". Useful to display only the dropdown in the caption."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Prop Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"hideNavigation"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"Hide the navigation bar."})]})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<DayPicker hideNavigation captionLayout="dropdown" />\n'})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(r.HideNavigation,{})})]})}function c(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},2844:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(2379);const d={},r=i.createContext(d);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);