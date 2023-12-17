import './App.css';
import { motion, useAnimation } from 'framer-motion';

function App() {
  //animation for the text
  const controls = useAnimation();
  //animation for the border
  const border = useAnimation();

  const startAnimation = async () => {
    // Trigger text swipe-up animation, just simply translating up
    controls.start({
      y: -65,
      transition: { duration: 0.3 },
    });

    //moving the border to all four corners, making it seem like it is going in a full circle
    await border.start({
      x: [0, -250, -250, 200, 200, 0],
      y: [0, 0, -50, -50, 0, 0],
      width: [300, 300, 300, 300, 300, 0],
      transition: { 
        duration: 1,
        ease: "easeOut",
      },
      exit: { 
        width: 0, 
      },
    });
  };

  const resetAnimation = async () => {
    // Reset the animations when the hover ends
    await controls.start({ 
      y: 0,
      transition: { duration: 0.2 },
    });
  };

  //have a button to contain everything, then leave a little space between the text container and the button
  //this will allow the border div to show and make the animation seem like it is going in a circle
  return (
    <motion.button
      whileHover={{ cursor: 'pointer' }}
      onMouseEnter={() => startAnimation()}
      onMouseLeave={() => resetAnimation()}
      className="button"
    >
      <motion.div className='button-container'>
        <motion.span className='button-text' animate={controls}>
          Discover more of our work
        </motion.span>
      </motion.div>
      <motion.div className="border" animate={border}></motion.div>
    </motion.button>
  );
}

export default App;
