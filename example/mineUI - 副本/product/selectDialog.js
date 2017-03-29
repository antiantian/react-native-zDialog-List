import React,{Component} from 'react'
import {
	View,
	StyleSheet,
	TouchableHighlight,
    TextInput,
	Text,
	ScrollView,
	Dimensions,
	Modal,
} from 'react-native'
const {width, height} = Dimensions.get('window'); 
const [aWidth, aHeight] = [320, 240];  
const [left, top] = [0, 0];  
export default class SelectDialog extends Component{
	constructor(props){
		super(props);
		this.state={
			selectNum:'',
			hide:true,
			animationType: this.props.animateType||'fade',
	        modalVisible: false,
	        transparent: true,
		}
		this.innersWidth=this.props.innersWidth||aWidth;
		this.innersHeight=this.props.innersHeight||aHeight;
	}
	render(){ 
			const datas=this.props.datas;
			
			return(
	
				<Modal
					animationType={this.state.animationType}
					transparent={this.state.transparent}
					visible={this.state.modalVisible}
					onRequestClose={this.hide.bind(this)}
					>
					<View style={[styles.container,styles.flexVer,styles.flex1]}>
					  <TouchableHighlight onPress={this.hide.bind(this)} style={[styles.mask]} underlayColor='transparent'>
						<Text></Text>
					  </TouchableHighlight>
					  <View style={[styles.flexVer,styles.Acenter,styles.tip,
					  {width:this.innersWidth,height:this.innersHeight,}]}>
						   <View style={[styles.flexRow,{height:40}]}>
							 <Text style={[
							 styles.headLog,
							 styles.flex1,
							 styles.paddLR10,
							 this.props.positionStyle]}> {this.props.titles}</Text>
						   </View>
						   <View style={[styles.flexRow,styles.flex1]}>
							 <ScrollView style={[styles.flex1]}>
							  {datas.map((item,i)=>this.createList(item,i)) }
							 </ScrollView>
						   </View>
					  </View>
					</View>
				</Modal>	
     			
			)
	  }
	setNum(item,index){
		this.setState({selectNum:index})
		this.props.valueChange(item,index)
		this.hide()
	}
	createList(item,i){
		return(
		  <CreatList index={i} innerW={this.innersWidth} sel={this.state.selectNum===i} renderRow={this.props.renderRow} key={i} SetNum={this.setNum.bind(this)} items={item} />
		)
	}
	hide(){
		this.setState({modalVisible:false });
	}
	show(){
		this.setState({modalVisible: true});
	}
} 
class CreatList extends Component{
	constructor(props){
		super(props);
	}
	setNum(item,index){
		this.props.SetNum(item,index)
	}
	render(){
		return(
		  <TouchableHighlight  
		     underlayColor='transparent'
		     style={[{width:this.props.innerW,borderBottomWidth:1,borderColor:'#999999'}]} 
			 onPress={()=>this.setNum(this.props.items,this.props.index)}>
		   {!this.props.renderRow ? (<Text style={[
			  styles.paddLR10,
			  styles.colorBlack,
			  styles.TextCenterVer,
			  styles.h28,
			  this.props.sel&&{color:'#ff2200'}]}>
			   {this.props.items.txt}
			 </Text> ):
			 this.props.renderRow(this.props.items, this.props.index+1, this.props.sel)
	         }
		  </TouchableHighlight> 
		)
	}
}
const styles = StyleSheet.create({
	h28:{
		height:28,
	},
  container: {  
    width:width,  
    height:height,  
    alignItems:"center",  
    justifyContent:"center",  
    backgroundColor:'transparent' 	
  }, 
    mask: {  
    justifyContent:"center",  
    backgroundColor:"#383838",  
    opacity:0.8,  
    position:"absolute",  
    width:width,  
    height:height,  
    left:0,  
    top:0,  
  },  
  tip: {  
      
    alignItems:"center",  
    justifyContent:"space-between",
    backgroundColor:'#ffffff' ,	
  },
	touchScreen:{
		width:width,
		height:height,
	},
	headLog:{
	  backgroundColor:'#b40e12',
	  color:'#ffffff',
	  height:40,
	  textAlignVertical:'center'
	},
	defaultWidth:{
	  width:150
	},
	defaultStyle:{
		backgroundColor:'#ffffff',
		fontSize:14,
		borderWidth:1,
		borderColor:'#DFDFDF',
		color:'#141414',
		padding:0,
		paddingLeft:5,
		paddingRight:5,
		borderRadius:3,
		textAlignVertical:'center',
	},
	boxCenter:{
		justifyContent:'center',
		alignItems:'center',
	},
	investBtn:{
		width:90,
		marginLeft:10,
		height:30,
		justifyContent:'center',
	},
	Jcenter:{
		justifyContent:'center',
	},
	Acenter:{
		alignItems:'center',
	},
	Textcenter:{
		textAlign:'center',
	},
	TextCenterVer:{
		textAlignVertical:'center',
	},
	dropdownStyle:{
	  width:148,
      top:40,	  
	},
	style:{
	 width:150,
	 height:40, 
	 justifyContent:'center',
	},
	TextInputContainer:{
       backgroundColor:'white'
    },
	 yellow:{
		color:'#f8cb43',
	 }, 
	 flexRow:{

	   flexDirection:'row',
	 },
	 flexVer:{ 
	   flexDirection:'column',
	 },
	 flex1:{
		flex: 1, 
	 },
	  colorRed:{
		  color:'#b40e12',
	  },
	  colorYellow:{
			color:'#f8cb43', 
		 },
	  color999:{
		  color:'#999999',
	  },
	  colorWhite:{
		  color:'#ffffff',
	  },
	  colorBlack:{
		  color:'#141414',
	  },
	  paddLR10:{
		  paddingLeft:10,
		  paddingRight:10,
	  }
})