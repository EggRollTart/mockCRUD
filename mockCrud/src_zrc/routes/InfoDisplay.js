import React from 'react';
import { connect } from 'dva';
import InfoList from "../components/InfoList"

function InfoDisplay(props) {
  let {dispatch,user} = props
  return (
    <div>
      <InfoList 
      data={props.infoList} 
      isShowAddModel={props.isShowAddModel}
      isShowUpdateModel={props.isShowUpdateModel}
      dispatch={dispatch}
      user={user}
      ></InfoList>
    </div>
  );
}

InfoDisplay.propTypes = {
};

export default connect(({ info }) => info)(InfoDisplay);
