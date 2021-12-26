import { useState, useEffect } from 'react'
import { API_URL } from '@/ksh-config/index'

let ITEMS_PER_LOAD = 4
let CURRENT_ITEMS_COUNT = 4

export default function useLoadMore(initialState = []) {
  const [loadedMedicines, setLoadedMedicines] = useState(initialState)
  const [loading, setLoading] = useState(false)

  const loadMoreMedicines = async () => {
    setLoading(true)
    const resp = await fetch(
      `${API_URL}/medicines?_sort=published_at:DESC&_start=${CURRENT_ITEMS_COUNT}&_limit=${ITEMS_PER_LOAD}`
    )
    const medicines = await resp.json()
    setLoadedMedicines(prevMedicines => [...prevMedicines, ...medicines])
    setLoading(false)
  }

  useEffect(() => {
    CURRENT_ITEMS_COUNT = loadedMedicines.length
  }, [loadedMedicines])

  return { loadedMedicines, loading, loadMoreMedicines, CURRENT_ITEMS_COUNT }
}
