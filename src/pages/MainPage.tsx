// import React from 'react'

import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <ul>
      <li><Link to='/'>Main page</Link></li>
      <li><Link to='/occupational-health'>OccupationalHealthPage</Link></li>
      <li><Link to='/worker-training'>WorkerTrainingPage</Link></li>
      <li><Link to='/workshop'>WorkshopPage</Link></li>
      <li><Link to='/car-diagnostics'>CarDiagnosticsPage</Link></li>
    </ul>
  )
}
