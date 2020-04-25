class Member {
  constructor (id, name, position, thumb) {
    [this.id, this.name, this.position, this.thumb] = [id, name, position, thumb]
    return this
  }
}

export const members = [
  new Member('NE30-0006C', 'H0L1C', 'video/web/design', ''),
  new Member('NE30-0085F', 'Taisei', 'web/unity', ''),
  new Member('NE30-0105K', 'あおき', 'songs/design', ''),
  new Member('NE30-0206B', 'Kentaro', 'songs/planning', ''),
  new Member('NE30-0209G', 'taichan', 'web/unity', ''),
  new Member('NE30-0223A', 'うさ', 'video/song/illustration', ''),
  new Member('NE30-0228B', 'haru', 'illustration', ''),
  new Member('NE30-0229K', 'めがね', 'illustration/web/unity', ''),
  new Member('NE30-0249B', 'いろはす', 'leader/planning', ''),
  new Member('担当教員', '藤原 正仁', 'associate professor', '')
]
