import { Suspense } from 'react'
import { useParams } from "react-router-dom"
export default (props) => {
    let { num } = useParams()
    return <>BoxSize, { num }</>;
}