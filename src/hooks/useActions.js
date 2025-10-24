import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { useMemo } from "react"
import { actions } from "../store/favorites/favorites.slice"
import  * as searchActions from "../store/search/search.actions"

const rootActions = {
    ...actions,
    // Получаем все actions для user
    ...searchActions,
}

console.log("rootActions: ", rootActions)

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}