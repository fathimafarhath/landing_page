import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage from '../images/feature_1.png'
import featureimage1 from '../images/feature_1.png'
import featureimage2 from '../images/feature_1.png'


function Feature() {
    return (
        <div id="features">
            <div className="a-container">
                <FeatureBox image={featureimage} title="Development course" alt="" />
                <FeatureBox image={featureimage1} title="Development course" alt="" />
                <FeatureBox image={featureimage2} title="Development course" alt="" />

            </div>
            
        </div>
    )
}

export default Feature
