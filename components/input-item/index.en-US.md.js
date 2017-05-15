webpackJsonp([124,155],{485:function(t,e){t.exports={content:["section",["p","A foundational component for inputting text into the app via a keyboard."],["h3","Rule"],["ul",["li",["p","Support text input via keyboard or clipboard."]],["li",["p","The cursor can be moved horizontally."]],["li",["p","Handle text with a specific format, eg: hide password."]]]],meta:{category:"Components",type:"Data Entry",title:"InputItem",filename:"components/input-item/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","Support WEB, React-Native."],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","type"],["td","the type of ",["code","InputItem"]," which is one of ",["code","bankCard"],", ",["code","phone"],"(which the maxLength is 11 and setting will be ignored), ",["code","password"],", ",["code","number"],", ",["code","text"]],["td","String"],["td",["code","text"]]],["tr",["td","value"],["td","the value of input (see ",["a",{title:null,href:"https://facebook.github.io/react/docs/forms.html"},"https://facebook.github.io/react/docs/forms.html"]," for more information about controled component)"],["td","String"],["td"]],["tr",["td","defaultValue"],["td","the initial input content"],["td","String"],["td","-"]],["tr",["td","placeholder"],["td","placeholder"],["td","String"],["td","''"]],["tr",["td","editable"],["td","whether is editable"],["td","bool"],["td","true"]],["tr",["td","disabled"],["td","whether is disabled"],["td","bool"],["td","false"]],["tr",["td","clear"],["td","whether to display clear icon(it takes effect only ",["code","editable"]," is ",["code","true"]," or ",["code","disabled"]," is ",["code","false"]," or ",["code","value"]," has been set)"],["td","bool"],["td","false"]],["tr",["td","maxLength"],["td","limits the maximum number of characters that can be entered"],["td","number"],["td"]],["tr",["td","onChange"],["td","callback that is called when the text input's text changes"],["td","(val: string): void"],["td","-"]],["tr",["td","onBlur"],["td","callback that is called when the text input is blurred"],["td","(val: string): void"],["td","-"]],["tr",["td","onFocus"],["td","callback that is called when the text input is focused"],["td","(val: string): void"],["td","-"]],["tr",["td","error"],["td","whether to display error icon"],["td","bool"],["td","false"]],["tr",["td","onErrorClick"],["td","callback that is called when the error icon is clicked"],["td","(e: Object): void"],["td"]],["tr",["td","extra"],["td","the right content of ",["code","InputItem"]],["td","string or node"],["td","''"]],["tr",["td","onExtraClick"],["td","callback that is called when the extra content is clicked"],["td","(e: Object): void"],["td"]],["tr",["td","labelNumber"],["td","number of label text, valid value is 2 to 7"],["td","number"],["td",["code","5"]]],["tr",["td","autoFocus"],["td","whether to focus the input on ",["code","componentDidMount"],", each page has only one ",["code","Input"]," can be auto focus.\uff08Note: It is no guarantee that all browsers are supported\uff09"],["td","bool"],["td","false"]],["tr",["td","focused"],["td","whether the ",["code","InputItem"]," has been focused on ",["code","componentDidMount"],", you need to change this property on ",["code","onFocus"]," or ",["code","onBlur"]," callback"],["td","bool"],["td","false"]],["tr",["td","updatePlaceholder (",["code","web only"],")"],["td","whether to replace the placeholder with cleared content"],["td","bool"],["td","false"]],["tr",["td","prefixListCls (",["code","web only"],")"],["td","the class name prefix of list"],["td","String"],["td",["code","am-list"]]],["tr",["td","name (",["code","web only"],")"],["td","the name of input"],["td","String"],["td"]]]],["blockquote",["p","More available react-native ",["code","InputItem"]," API can be found at ",["a",{title:null,href:"http://facebook.github.io/react-native/docs/textinput.html"},"react-native TextInput"]]]]}}});