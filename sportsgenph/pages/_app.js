import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { useEffect } from 'react'
import Menu from '../components/Menu'
import '../styles/Modal.css'
import Modal from '../components/Modal/index.jsx'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'



function MyApp({ Component, pageProps }) {

  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  

  // useEffect(() => {
  //   const use = async () => {
  //     (await import('tw-elements')).default;
  //   };
  //   use();
  // }, []);

  const loginClick = (event, bool) => {
    // console.log(bool);
    setModalOpen(bool);
  };

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
       {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
      <script src="https://cdn.tailwindcss.com"></script> */}
    
      <Menu loginClick={loginClick} modalOpen={modalOpen} />
      <Component {...pageProps} />

      <AnimatePresence
        initial={false}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>

      
      <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
      
    </>
  )
}

export default MyApp
