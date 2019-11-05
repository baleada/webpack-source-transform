// Adapted from https://github.com/markdown-it/markdown-it/blob/master/lib/rules_block/fence.js

export default function(asciiCode, tag) {
  function multiCharacterMarkerRule (state, startLine, endLine, silent) {
    var marker, len, params, nextLine, mem, token, markup,
        haveEndMarker = false,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine]

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) { return false }

    if (pos + 3 > max) { return false }

    marker = state.src.charCodeAt(pos)

    if (marker !== asciiCode) {
      return false
    }

    // scan marker length
    mem = pos
    pos = state.skipChars(pos, marker)

    len = pos - mem

    if (len < 3) { return false }

    markup = state.src.slice(mem, pos)
    params = state.src.slice(pos, max)

    if (marker === asciiCode) {
      if (params.includes(String.fromCharCode(marker))) {
        return false
      }
    }

    // Since start is found, we can report success here in validation mode
    if (silent) { return true }

    // search end of block
    nextLine = startLine

    for (;;) {
      nextLine++
      if (nextLine >= endLine) {
        // unclosed block should be autoclosed by end of document.
        // also block seems to be autoclosed by end of parent
        break
      }

      pos = mem = state.bMarks[nextLine] + state.tShift[nextLine]
      max = state.eMarks[nextLine]

      if (pos < max && state.sCount[nextLine] < state.blkIndent) {
        // non-empty line with negative indent should stop the list:
        // - ```
        //  test
        break
      }

      if (state.src.charCodeAt(pos) !== marker) { continue }

      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        // closing fence should be indented less than 4 spaces
        continue
      }

      pos = state.skipChars(pos, marker)

      // closing multi-character marker must be at least as long as the opening one
      if (pos - mem < len) { continue }

      // make sure tail has spaces only
      pos = state.skipSpaces(pos)

      if (pos < max) { continue }

      haveEndMarker = true
      // found!
      break
    }

    // If a multi-character marker has heading spaces, they should be removed from its inner block
    len = state.sCount[startLine]

    state.line = nextLine + (haveEndMarker ? 1 : 0)

    token         = state.push(`${tag}_open`, tag, 1)
    token.info    = params
    token.content = state.getLines(startLine + 1, nextLine, len, true)
    token.markup  = markup
    token.map     = [ startLine, state.line ]

    return true
  }

  return multiCharacterMarkerRule
}
