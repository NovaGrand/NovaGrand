import { useEffect, useState, useRef, useMemo } from 'react'
import './scss/index.scss'

export default props => {
    // keys 存放属性名的列表
    // style 存放 CSS 变量的值
    // className 存放类名，通过类名决定是否开启指定的样式
    let [ keys, chars, style, className, setClassName ] = [ Object.getOwnPropertyNames(props).slice(0, -1), '', {}, ...useState(() => '') ]

    keys.forEach(key => style['--' + key] = props[key])

    useEffect(() => {
        keys.forEach(key => chars += props[key] ? ' ' + key : '')
        setClassName(()  => 'novaGrand' + chars)
    },[props])

    return <>
        <div className={ className } style={ style }>
            { props.children }
        </div>
    </>
}