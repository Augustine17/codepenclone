import React,{useEffect, useState} from 'react'
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

import './CodeEditor.css'

import SignUp from '../../Components/SignUp/SignUp';
import Login from '../../Components/Login/Login'
import Save from '../../Components/Save/Save';

import {useSelector} from 'react-redux';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Link } from 'react-router-dom';

const CodeEditor = () => {
    const user = useSelector(state => state.user?.user)
    const [sizes, setSizes] = useState(['500', '500']);
    const [sizes1, setSizes1] = useState([300, '30%', 'auto']);

    const [html,setHtml]=useState("")
    const [css,setCss]=useState("")
    const [js,setJs]=useState("")
    const [output,setOutput]=useState("")
    const [isTitle, setisTitle] = useState(false)
    const [title, setTitle] = useState("Untitled")

        useEffect(()=>{
        updateOutput();
        },[html,css,js])

    const layoutCSS = {
        height: '100%',
    };

    const updateOutput = () =>{
        const combinedOutput = `
          <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}</script>
            </body>
          </html>
        `

        setOutput(combinedOutput)
    }

    const save = async () => {
        const id = `${Date.now()}`
        const _doc={
            id:id,
            html:html,
            css:css,
            js:js,
            output:output,
            user:user
        }

        await setDoc(doc(db,"projects",id),_doc).then(()=>{
            toast("Saved");
        }).catch((err)=>{
            console.log(err);
        })
    }

  return (
    <>
        <ToastContainer />
        <header className='w-screen flex item-center justify-between px-2 py-4' style={{height:"10vh",backgroundColor : 'hsl(0deg 0% 0.39%)'}}>
            <div className='left flex'>
                <Link to="/" class="editorLogo">
                    <svg viewBox="0 0 100 100">
                        <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8 19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path>
                    </svg>
                </Link>
                <div className='flex item-start justify-start'>
                    <div className='flex items-center justify-center gap-2'>
                        {
                        isTitle ?
                        <>
                        <input type='text' placeholder='Your Title' value={title} onChange={(e)=>setTitle(e.target.value)} className='titleChange' />
                        </> :
                        <>
                        <p className='px-3 py-2 text-white text-lg'>{title}</p>
                        </>
                        }

                        {
                        !isTitle ?
                        < FaPencilAlt onClick={()=>{setisTitle(!isTitle)}} style={{color:"white", cursor:'pointer'}}/>
                        :
                        < FaCheck onClick={()=>{setisTitle(!isTitle)}} style={{color:"green", cursor:'pointer'}}/>
                        }   
                    </div>
                </div>
            </div>
            <div className='right flex'>\
            {user ? <Save save={save}/> : <>
                <SignUp />
                <Login />
            </>}
                
                
            </div>
        </header>


        <div style={{ height: '90vh' }}>
            <SplitPane
                split="horizontal"
                sizes={sizes}
                onChange={setSizes}
            >
                <SplitPane sizes={sizes1} onChange={setSizes1}>
                    <Pane minSize={100} maxSize='50%'>
                        <div style={{ ...layoutCSS, background: 'hsl(0deg 0% 0.39%)' }} className='w-full h-full flex flex-col items-start justify-start'>
                            <div className='top_setion px-4 py-2 flex gap-3 items-center justify-start'>
                                <FaHtml5 className='text-xl text-red-500'/>
                                <p className='text-primaryText font-semibold headColor'>Html</p>
                            </div> 
                            <div className='w-full px-2 textColor'>
                                <CodeMirror value={html} height="250px" extensions={[javascript({ jsx: true })]} onChange={(val, viewUpdate)=>{setHtml(val)}} />
                            </div>
                            
                        </div>
                    </Pane>
                    <Pane minSize={100} maxSize='50%'>
                    <div style={{ ...layoutCSS, background: 'hsl(0deg 0% 0.39%)' }} className='w-full h-full flex flex-col items-start justify-start'>
                            <div className='top_setion px-4 py-2 flex gap-3 items-center justify-start'>
                                <FaCss3 className='text-xl text-blue-500 '/>
                                <p className='text-primaryText font-semibold headColor'>Css</p>
                            </div> 
                            <div className='w-full px-2 textColor'>
                                <CodeMirror value={css} height="250px" extensions={[javascript({ jsx: true })]} onChange={(val, viewUpdate)=>{setCss(val)}} />
                            </div>
                        </div>
                    </Pane>
                    <Pane minSize={100} maxSize='50%'>
                    <div style={{ ...layoutCSS, background: 'hsl(0deg 0% 0.39%)' }} className='w-full h-full flex flex-col items-start justify-start'>
                            <div className='top_setion px-4 py-2 flex gap-3 items-center justify-start'>
                                <FaJs className='text-xl text-yellow-500'/>
                                <p className='text-primaryText font-semibold headColor'>Js</p>
                            </div> 
                            <div className='w-full px-2 textColor'>
                                <CodeMirror value={js} height="250px" extensions={[javascript({ jsx: true })]} onChange={(val, viewUpdate)=>{setJs(val)}} />
                            </div>
                        </div>
                    </Pane>
                </SplitPane>
                <Pane minSize={100} maxSize='50%'>
                    <div style={{ ...layoutCSS, overflow: "hidden", height: '100%' }} className='bg-white'>
                       <iframe title="result" srcDoc={output} style={{border:'none', width:'100%', height:'100%'}}/>
                    </div> 
                </Pane>
            </SplitPane>
        </div>
    </>
        
  )
}

export default CodeEditor