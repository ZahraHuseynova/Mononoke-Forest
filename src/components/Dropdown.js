import { useState , useEffect, useRef } from "react";



const Dropdown = ({options, selected, onSelectChange, label})=>{
    const [open, setOpen] = useState(false);
    const ref = useRef();
    

    useEffect(()=>{
        const onBodyClick =(e)=>{
            if(ref.current.contains(e.target)){
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener('click',onBodyClick,{
            capture:true,
        });
        return()=>{
            document.body.removeEventListener('click',onBodyClick,{
                capture:true,
            });
        };
    },[]);

    const renderedOptions = options.map((option)=>{
        if(option.value === selected.value){
            return null;
        }
        return(
            <div className="item" key={option.value} onClick={()=>{
                onSelectChange(option)
            }}>
               {option.label} 
            </div>
        );
    });
    
    return(
        <div className="ui form " ref={ref}>
            <div className="field">
                <label className="label" style={{fontSize:'2em',color:'#00ab84'}}>{label}</label>
                <div className={`ui selection dropdown ${open?"visible active":""}`} onClick={()=>{setOpen(!open)}}> 
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open?"visible transition":""}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;