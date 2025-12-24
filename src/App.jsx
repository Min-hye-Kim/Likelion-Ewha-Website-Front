import './App.css'
import SegmentBar from './components/SegmentBar';

function App() {
  return (
    <>
      <SegmentBar items={['전체', '해커톤', '졸업 프로젝트', '대동제 사이트']} styleType={1} />
      <br />
      <SegmentBar items={['기획∙디자인', '프론트엔드', '백엔드']} styleType={2} />
    </>
  )
}

export default App