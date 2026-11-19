import { useEffect } from 'react'

export function usePageMetadata(title, description) {
  useEffect(() => {
    const previousTitle = document.title
    const descriptionTag = document.querySelector('meta[name="description"]')
    const previousDescription = descriptionTag?.getAttribute('content')

    document.title = title
    descriptionTag?.setAttribute('content', description)

    return () => {
      document.title = previousTitle
      if (previousDescription !== null && previousDescription !== undefined) {
        descriptionTag?.setAttribute('content', previousDescription)
      }
    }
  }, [title, description])
}
