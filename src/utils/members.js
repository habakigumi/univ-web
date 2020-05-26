class Member {
  constructor(id, name, position, thumb) {
    [this.id, this.name, this.position, this.thumb] = [id, name, position, thumb]
    this.image = thumb ? require('@/assets/members/' + thumb) : ''
    this.attribute = ['fuji.png'].includes(this.thumb) ? 'rounded' : ''
    return this
  }
}
export const members = [
  new Member('NE30-0006C', 'H0L1C', 'creator', 'H0L1C.png'),
  new Member('NE30-0085F', 'Taisei', 'developer', 'tomaito.png'),
  new Member('NE30-0105K', 'あおき', 'creator', 'aoki.png'),
  new Member('NE30-0206B', 'Kentaro', 'planner', 'Kentaro.png'),
  new Member('NE30-0209G', 'taichan', 'developer', 'taichan.svg'),
  new Member('NE30-0223A', 'うさ', 'creator', 'usa.png'),
  new Member('NE30-0228B', 'haru', 'creator', 'haru.png'),
  new Member('NE30-0229K', 'めがね', 'developer', 'megane.png'),
  new Member('NE30-0249B', 'いろはす', 'planner', 'irohasu.jpg'),
  new Member('担当教員', '藤原 正仁', 'teacher', 'fuji.png')
]
