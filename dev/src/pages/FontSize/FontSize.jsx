import { useState, useRef, useEffect } from 'react'
import { Div } from '@/novaGrand'
import './fontSizePage.scss'
export default props => {
    const [num, setNum] = useState(() => 15)
    const [red, setRed] = useState(() => true)
    function handleClick(){
        setNum(() => num + 1)
        setRed(() => !red)
    }
    return <div className='fontSizePage' onClick={ handleClick }>
        <Div fs={num} noSelect block ht={200} wd={800} pointer ba={10} color={'white'}>
            <Div ba={10} color={'red'} ><div>AAA</div><div>BBB</div><div>CCC</div></Div>
            <Div ba={10} bb={10} color={'red'} wd={200}><div>AAA</div><div>BBB</div><div>CCC</div></Div>
            <Div wd={200} color={'skyblue'} ba={1} bg jc>
                <Div color={'black'}>DDDEEEFFF</Div>
            </Div>
        </Div>
    </div>
}