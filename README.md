# react-native-select-dialog
- A react-native picker/selector component for both Android & iOS.
#Features
- Pure JS.
- Compatible with both iOS and Android.
- Highly customizable.(You can change the style you want)
- Controllable with API by code. (show/hide/valueChange)
- Flexible change of content
#Installation
- npm i react-native-select-dialog --save

# Usage
## Import this module:
- import SelectDialog from 'react-native-select-dialog';
## Code
```javascript
import React,{Component} from 'react'
import {
	View,
	StyleSheet,
	Navigator,
	TouchableHighlight,
	TouchableOpacity,
	Text,
	ScrollView,
	Image,
} from 'react-native'
import Demo from './index';
import SelectDialog from 'react-native-select-dialog';
var Dimensions = require('Dimensions');
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;
var dataBank=[
{txt:'中国工商银行',id:'option1'},
{txt:'中国建设银行',id:'option2'},
{txt:'中国银行',id:'option3'},
{txt:'交通银行',id:'option4'},
{txt:'招商银行',id:'option5'},
{txt:'中国邮政储蓄银行',id:'option6'},
{txt:'中国光大银行',id:'option7'},
{txt:'中国民生银行',id:'option8'},
{txt:'平安银行',id:'option9'},
{txt:'浦发银行',id:'option10'},
{txt:'中信银行',id:'option11'},
{txt:'兴业银行',id:'option12'},
]
var dataList=[
{name:'小红',id:'option1',age:13},
{name:'小明',id:'option2',age:14},
{name:'小林',id:'option3',age:15},
{name:'小李',id:'option4',age:16},
{name:'小赵',id:'option5',age:17},
{name:'小兰',id:'option6',age:18},
{name:'小绿',id:'option7',age:19},
{name:'小芳',id:'option8',age:20},
{name:'小黑',id:'option9',age:21},
{name:'小白',id:'option10',age:22},
{name:'阿福',id:'option11',age:23},
{name:'旺财',id:'option12',age:24},
]
export default class Dialogs extends Component{
	constructor(props){
		super(props);
                this.state={
			initTxt:'请选择银行',
			initlistTxt:'请选择名字',
			mess:'',
			listtxt:'',
			index:null,
			valChange:false,
			vallistChange:false,
		}	
	}
	changBank(item,index){
                this.setState({mess:item.txt,index:item.id,valChange:true})	  
	}
	changList(item,index){
		this.setState({
			listtxt:item.name,
			listindex:item.id,
			listage:item.age,
			vallistChange:true})		
	}
	show(){
		this.refs.bankName.show()
	}
	showList(){
		this.refs.showList.show()
	}
        render(){	
                const listVal=this.state.valChange?this.state.mess:this.state.initTxt	
		 const listVal2=this.state.vallistChange?this.state.listtxt:this.state.initlistTxt
		 return (
		       <ScrollView style={{flexDirection:'column',flex:1}} >		 
                           <TouchableHighlight style={[styles.borderGray,styles.borderRadius3,
			           {flexDirection:'row',height:32,
				   margin:20}]}  
				   onPress={this.show.bind(this)}
				  underlayColor="transparent">
				    <View style={[styles.flexRow,styles.flex1,styles.Acenter]}>
					    <Text style={[styles.flex1,{fontSize:14,paddingLeft:10}]}>
						   {listVal}
				            </Text>
				            <Image style={{width:18,height:18}} source={require('./product/imgs/Arrow.png')} />
		                     </View>
		           </TouchableHighlight>
			   <View style={{paddingLeft:20}}>
				     <Text>你已经选择了
					   {this.state.mess}
					   </Text>
				     <Text>它的id值为{this.state.index}</Text>
		           </View>
			   <SelectDialog 
		                   ref="bankName" 
			           titles={'请选择银行'} 
			            valueChange={this.changBank.bind(this)} 
			           datas={dataBank}
	                           animateType={'fade'}			  
		             />
			    <View style={[styles.flexVer,{position:'relative',borderWidth:1,}]}>
				  <TouchableHighlight style={[styles.borderGray,styles.borderRadius3,
						 {flexDirection:'row',height:32,
						   margin:20}]}  
						 onPress={this.showList.bind(this)}
						 underlayColor="transparent">
					  <View style={[styles.flexRow,styles.flex1,styles.Acenter]}>
						<Text style={[styles.flex1,{fontSize:14,paddingLeft:10}]}>
						   {listVal2}
						</Text>
						<Image style={{width:18,height:18}} source={require('./product/imgs/Arrow.png')} />
					  </View>
				   </TouchableHighlight>
				  <SelectDialog 
					  ref="showList" 
					  titles={'我是列表标题'} 
					  valueChange={this.changList.bind(this)} 
					  datas={dataList}
					  animateType={'fade'}
					  positionStyle={{backgroundColor:'#ff6600'}}	
					  renderRow={this.defineList.bind(this)}
					  innersWidth={150}
					 innersHeight={200}					  
				   />
			 </View>
			 <View style={{paddingLeft:20}}>
			     <Text>姓名：{this.state.listtxt}</Text>
			     <Text>id值为： {this.state.listindex}</Text>
			     <Text>年龄：{this.state.listage}</Text>
		        </View>
		   </ScrollView>
		 );
   }
   defineList(rowData,rowID,highlighted) {
    let icon = highlighted ? require('./images/selected.png') : require('./images/select.png');
    let evenRow = rowID % 2;
    return (
        <View style={[styles.flexRow,
    		{backgroundColor: evenRow ? '#dfdfdf' : 'white',
			alignItems:'center',height:36}]}>
            <Image style={{width:18,height:18,marginLeft:10,marginRight:10}}
                 mode='stretch'
                 source={icon}
            />
            <Text style={[styles.listTxt, 
		    highlighted && {color: 'mediumaquamarine'}]}>
			{rowData.name}{rowData.age}
            </Text>
        </View>
    
    );
  } 
}	 
```
# You can view the full instance in folder example   
## Demo
<img src="https://github.com/antiantian/react-native-zDialog-List/blob/master/show.gif" width = "560" height = "auto" alt="Demo 1"/>

## Customization
- 'titles': List title
- 'datas' : List object
- 'animateType': Change pop up block display animation ('fade','normal','slide')	    
- 'positionStyle': Change the style of the pop-up block header
- 'renderRow':  Custom middle content
- 'innersWidth': Change the width of the pop-up block
- 'innersHeight':Change the height of the pop-up block

### Methods
 Method           |   Description
----------------- |  -----------
`show()`          |  Show the pop-up block   （ use the react-native Modal component  to always be at the top）
`hide()`          |  Hide the pop-up block

### props

`valueChange`     |  'valueChange={this.changBank.bind(this)}'  Returns the currently selected object and index
`renderRow`       |  'renderRow={this.defineList.bind(this)}'   define yourself code for selectlist
```
		   defineList(rowData,rowID,highlighted) {//object,index,selected:boolen
		    let icon = highlighted ? require('./images/selected.png') : require('./images/select.png');
		    let evenRow = rowID % 2;
		    return (
			<View style={[styles.flexRow,
				{backgroundColor: evenRow ? '#dfdfdf' : 'white',
					alignItems:'center',height:36}]}>
			    <Image style={{width:18,height:18,marginLeft:10,marginRight:10}}
				 mode='stretch'
				 source={icon}
			    />
			    <Text style={[styles.listTxt, 
				    highlighted && {color: 'mediumaquamarine'}]}>
					{rowData.name}{rowData.age}
			    </Text>
			</View>

		    );
		  }



