// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import OccupationalHealthPage from './pages/OccupationalHealthPage'
import WorkerTrainingPage from './pages/WorkerTrainingPage'
import WorkshopPage from './pages/WorkshopPage'
import CarDiagnosticsPage from './pages/CarDiagnosticsPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <MainPage/> }/>
        <Route path='occupational-health' element={ <OccupationalHealthPage/> }/>
        <Route path='worker-training' element={ <WorkerTrainingPage/> }/>
        <Route path='workshop' element={ <WorkshopPage/> }/>
        <Route path='car-diagnostics' element={ <CarDiagnosticsPage/> }/>
      </Routes>
    </>
  )
}

export default App
