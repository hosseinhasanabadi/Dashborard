import React from "react";
import './Feature.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function Feature() {
  return (
    <div className="feature">
      <div className="featureitem">
        <span className="featureTitle">Remow</span>
        <div className="featureCountiner">
          <span className="featuremoney">$2.415</span>
          <span className="featureRate">
            <ArrowDownwardIcon className="featureIcone negative"/>
            -11.4</span>
        </div>
        <div >
            <span className="featureSub"> Compared top last month</span>
        </div>
      </div>
      <div className="featureitem">
        <span className="featureTitle">sales</span>
        <div className="featureCountiner">
          <span className="featuremoney">$2.415</span>
          <span className="featureRate">
            <ArrowDownwardIcon className="featureIcone negative"/>
            -1.4</span>
        </div>
        <div >
            <span className="featureSub"> Compared top last month</span>
        </div>
      </div>
      <div className="featureitem">
        <span className="featureTitle">Cost</span>
        <div className="featureCountiner">
          <span className="featuremoney">$2.415</span>
          <span className="featureRate">
            <ArrowUpwardIcon className="featureIcone "/>
           +2.4</span>
        </div>
        <div >
            <span className="featureSub"> Compared top last month</span>
        </div>
      </div>
    </div>
  );
}
