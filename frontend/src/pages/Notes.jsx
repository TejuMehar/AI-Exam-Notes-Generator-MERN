import React, { useState } from "react";
import { motion } from "framer-motion";
import TopicForm from "../components/TopicForm";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


function Notes() {
  const navigate = useNavigate();
  const {userData} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("")


  return (
    <div className="min-h-screen overflow-hidden bg-white text-black px-8 ">
 
 <motion.div
 initial={{opacity:20, y:20}}
 animate={{opacity:1, y:0}}
 className="m-12" 
>
<TopicForm loading={loading} setResult={setResult} setError={setError} setLoading={setLoading}
/>
 </motion.div>

 {!result && <motion.div
 whileHover={{scale:1.02}}
 >
  </motion.div>}
    </div>
  );
}

export default Notes;

