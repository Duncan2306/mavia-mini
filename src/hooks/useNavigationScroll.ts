import { useEffect } from "react"

const useNavigationScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log('scroll')
    }
  }, [])
}

export default useNavigationScroll