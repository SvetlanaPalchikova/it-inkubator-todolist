import React, {ChangeEvent, useState} from 'react';
import set = Reflect.set;


export type propsType = {
    title: string
    callBack:(title: string)=> void
}
export const EditableSpan = (props: propsType) => {
    const[title, setTitle]=useState(props.title)
   const [edit, setEdit]=useState(false)
    const onDoubleHandler=()=>{
       setEdit(true)
    }
  const onBlurHandler=()=>{
       setEdit(false)
      props.callBack(title)
  }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.currentTarget.value)
    }

    return (
        edit
            ? < input value = {title} onChange={onChangeHandler} autoFocus onBlur={onBlurHandler}/>
        :<span onDoubleClick={onDoubleHandler}>{props.title}</span>
);
};

