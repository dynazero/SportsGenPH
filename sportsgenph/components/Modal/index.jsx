import { motion } from "framer-motion"
import Backdrop from "../Backdrop"
import LoginForm from '../LoginDetails'


const dropIn = {
    hidden: {
        y:"-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1 ,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },

    },
    exit: {

    },
}

const Modal = ({ handleClose, text }) => {

    return (
        <Backdrop onClick={handleClose}>
            <motion.div onClick={(e) => e.stopPropagation()}
            className="modalCustom orange-gradient"
            variants={dropIn}
            initial= "hidden"
            animate= "visible"
            exit= "exit"
            >
                <LoginForm />
       
            </motion.div>
        </Backdrop>
    )

};

export default Modal;