import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../state/redux/filterform-store'

// Use throughout your filters app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch
export const useFiltersDispatch: DispatchFunc = useDispatch
export const useFiltersSelector: TypedUseSelectorHook<RootState> = useSelector