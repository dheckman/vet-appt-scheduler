import { Appointments } from './types'
import FullCalendar, { EventClickArg } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

function AppointmentCalendar(props: {appointments: Appointments[]}) {
  const { appointments } = props
  const calendarDate = new Date('2022-04-11 00:00')

  const formattedAppointments = appointments.map((appointment: Appointments) => {
    return {
      title: `${appointment.patient_name} (${appointment.patient_breed}) - ${appointment.appointment_type}`,
      start: appointment.start_time,
      extendedProps: {
        staffNotes: appointment.staff_notes, 
        client: `${appointment.client_first_name} ${appointment.client_last_name}`
      }
    }
  })
  
  const showAppointmentInfo = (appointment: EventClickArg) => {
    alert(`${appointment.event.extendedProps.staffNotes}: ${appointment.event.extendedProps.client}`)
  }

  return (
    <FullCalendar
      allDayContent={false}
      defaultTimedEventDuration={'00:30'}
      events={formattedAppointments}
      eventColor={'#00b198'}
      eventClick={showAppointmentInfo}
      expandRows={true}
      forceEventDuration={true}
      headerToolbar={{
        left: 'title',
        center: '',
        right: ''
      }}  
      initialView="timeGridDay"
      initialDate={calendarDate}
      plugins={[ dayGridPlugin, timeGridPlugin ]}   
      slotMinTime={'09:00:00'}
      slotMaxTime={'18:00:00'}
    />
  )
}

export default AppointmentCalendar
