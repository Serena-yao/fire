import React from 'react';
import { Table, Divider, Tag } from 'antd';
import { connect } from 'dva';

const mapStateToProps=state=>{
  return {
    type:state.gov.type,
    info:state.gov.info
  }
}
  @connect(mapStateToProps)
  class NewGov extends React.Component{
      render(){
          return<>
            <p>新增机构</p>
  
          </>
      }
  }
  export default NewGov;