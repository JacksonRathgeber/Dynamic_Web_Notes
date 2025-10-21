import axios from 'axios'

// Build an IIIF image URL for an artwork image_id
const buildImageUrl = (imageId, width = 843) => {
  if (!imageId) return null
  return `https://www.artic.edu/iiif/2/${imageId}/full/${width},/0/default.jpg`
}

// Fetch a single artwork by id and normalize the shape we use in the app
const fetchArtworkById = async (id) => {
  const url = `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_display,image_id`
  try {
    const { data } = await axios.get(url)
    const d = data?.data
    if (!d || !d.image_id) return null
    return {
      id: d.id,
      title: d.title || 'Untitled',
      artist: d.artist_display || 'Unknown artist',
      imageUrl: buildImageUrl(d.image_id),
    }
  } catch (err) {
    // Many random IDs won't exist (404) — treat as a miss and continue
    return null
  }
}

// Get a handful of random artworks that actually have images
const searchImages = async (count = 8) => {
  const results = []
  let attempts = 0
  const maxAttempts = count * 12 // be generous to find enough with images

  while (results.length < count && attempts < maxAttempts) {
    attempts += 1
    const randomId = Math.floor(Math.random() * 120000) + 1
    const item = await fetchArtworkById(randomId)
    if (item) results.push(item)
  }

  return results
}

export default searchImages
