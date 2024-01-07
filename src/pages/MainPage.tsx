import Card from "../components/Card";
import './MainPage.css'

export default function MainPage() {
  return (
    <>
      {/* <ul>
        <li><Link to='/'>Main page</Link></li>
        <li><Link to='/occupational-health'>OccupationalHealthPage</Link></li>
        <li><Link to='/worker-training'>WorkerTrainingPage</Link></li>
        <li><Link to='/workshop'>WorkshopPage</Link></li>
        <li><Link to='/car-diagnostics'>CarDiagnosticsPage</Link></li>
        <li><Link to='/resources'>Resources</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul> */}
      <div className="card-layout-container">
        <div className="card-layout">
          <Card text="НАВЧАННЯ З ПИТАНЬ ОХОРОНИ ПРАЦІ" link="/occupational-health" description="Докладніше / онлайн навчання"></Card>
          <Card text="НАВЧАННЯ ЗА ПРОФЕСІЯМИ" link="/worker-training" description="Докладніше / онлайн навчання"></Card>
          <Card text="МАЙСТЕРНЯ" link="/workshop" description="Послуги"></Card>
          <Card text="ДІАГНОСТИКА АВТОМОБІЛІВ" link="/car-diagnostics" description="Послуги"></Card>
        </div>
      </div>
    </>
  )
}
