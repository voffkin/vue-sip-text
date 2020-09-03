export function typograph (text) {
  const reAfter = / (в|во|без|до|из|к|ко|на|по|о|от|перед|при|через|с|у|не|за|над|для|об|под|про|и|а|но|да|или|ли|бы|то|что|как|я|он|мы|они|ни) /ig
  const reBefore = / (—) /ig
  // return text.replace(re, ' $1\u00A0')
  text = text.replace(reAfter, ' $1&nbsp;')
  text = text.replace(reBefore, '&nbsp;$1 ')
  return text 
}