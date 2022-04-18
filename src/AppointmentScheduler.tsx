import styles from './AppointmentScheduler.module.scss'
import { useEffect, useState } from 'react'
import { Appointments, Clinic } from './types'
import AppointmentCalendar from './AppointmentCalendar'

const baseUrl = 'https://61a576964c822c001704220b.mockapi.io/api/v1'

function AppointmentScheduler() {
  const [appointments, setAppointments] = useState([] as Appointments[])

  useEffect(() => {
    const fetchClinicData = async () => {
      try {
        const clinicData = await fetch(`${baseUrl}/clinics`)
        const clinicsJson = await clinicData.json()
        const woofClinicId = clinicsJson
          .filter((clinic: Clinic) => clinic.name.includes('Woof Vet Clinic'))
          .map((ele: Clinic) => ele.id)
        const appointmentData = await fetch(
          `${baseUrl}/clinics/${woofClinicId}/appointment`
        )
        const appointmentsJson = await appointmentData.json()
        setAppointments(appointmentsJson)
      } catch (e) {
        console.log('An unexpected error occured:', e)
      }
    }
    fetchClinicData()
  }, [])

  return (
    <section className={styles.AppointmentSchedulerContainer}>
      <header className={styles.AppointmentSchedulerHeader}>
        <h1 className={styles.AppointmentSchedulerTitle}>
          Woof Vet Clinic Appointments 
        </h1>
      </header>
      <AppointmentCalendar appointments={appointments} />
    </section>
  )
}

export default AppointmentScheduler
