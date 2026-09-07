// 봄내 LangSwap 이식. 네 언어를 같은 grid 셀에 겹치고 비활성 언어를 invisible 처리한다.
// 셀 폭이 언어와 무관하게 고정되므로 언어를 바꿔도 인접 요소가 밀리지 않는다(시프트 0).
// 문장 안에서 값이 바뀌는 곳은 t() 를, 언어 전환 시 폭이 흔들리면 안 되는 곳은 이 컴포넌트를 쓴다.
// 각 span 에 lang 을 박는다. html lang 이 바뀌면 브라우저의 CJK 글꼴 선택이 달라져
// 숨은 항목의 폭까지 변하고 결국 셀 폭이 흔들린다. span 마다 언어를 고정해야 폭이 상수가 된다.
import { LANGS, dicts, pick, useLang } from './LangContext.jsx'

export default function LangSwap({ k, as: Tag = 'span', className = '' }) {
  const { lang } = useLang()
  return (
    <Tag className={`grid ${className}`}>
      {LANGS.map((code) => (
        <span
          key={code}
          lang={code}
          aria-hidden={lang !== code}
          className={`col-start-1 row-start-1 ${lang === code ? '' : 'invisible'}`}
        >
          {pick(dicts[code], k) ?? k}
        </span>
      ))}
    </Tag>
  )
}
