/**
 * Mock for the `plaiceholder` package.
 * Returns a 1x1 transparent PNG as base64 blur placeholder.
 */
const TRANSPARENT_1X1_PNG =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="

export async function getPlaiceholder(_src: string) {
  return {
    base64: TRANSPARENT_1X1_PNG,
    img: { src: _src, width: 1, height: 1, type: "png" },
    blurhash: { hash: "L00000fQfQfQfQfQfQfQfQfQfQfQ", width: 1, height: 1 },
    css: {
      backgroundImage: `url(${TRANSPARENT_1X1_PNG})`,
      backgroundSize: "cover",
    },
    svg: [],
  }
}
