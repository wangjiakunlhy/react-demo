import React from 'react';
import { render } from 'react-dom';
import AppTestLifeCycle from './lifeCycle/app';
import ComponentConcept from './analysisComponent/ComponentConcept';
import CompleteComponent from './analysisComponent/CompleteComponent';
import Father from './analysisComponent/ComponentDataStream';
import ComponentControl from './analysisComponent/ComponentControl';
import ComponentAndEvent from './analysisComponent/ComponentAndEvent';
// import 'antd/dist/antd.css';
// render(<ComponentConcept text="ddfdfdfdfdfdf" />,document.getElementById('body'));
// render(<CompleteComponent />,document.getElementById('body'));
// render(<Father />,document.getElementById('body'));
// render(<ComponentAndEvent />,document.getElementById('body'));
render(<ComponentControl />,document.getElementById('body'));


