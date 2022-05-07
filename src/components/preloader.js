import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { gsap } from "gsap";
import './preloader.scss';

function LinearProgressWithLabel(props) {
    const el = React.useRef();
    const tl = React.useRef();
    const q = gsap.utils.selector(el);

    React.useEffect(() => {
        tl.current = gsap.timeline()
      .to(q(".square"), {
        opacity: .7
      })
      .to(q(".square"), {
        duration: 1.5, ease: "powerInOut", opacity: 1, repeat: -1, yoyo: true
      });
      }, []);
  return (
    <div className="preload">
        <div className="log">
        {/* <svg  viewBox="0 0 66 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_4_24" fill="white">
<rect x="0.189087" y="0.689423" width="65.6696" height="65.6696" rx="3"/>
</mask>
<rect className="square" x="33" y="34" width="14.4256" height="14.4256" rx="1.57801" fill="#14E956"/>
</svg> */}
           <p ref={el}>Loading: <span className="square"><i>{`onyedika.xyz${window.location.pathname}`}</i></span></p>
        </div>
      <div className="loader">
        <LinearProgress variant="determinate" {...props} />
      </div>
      <div className="progress">
        <Typography variant="body2" color="">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </div>
    </div>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
