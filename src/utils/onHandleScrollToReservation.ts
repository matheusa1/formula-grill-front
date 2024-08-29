export const onHandleScrollToReservation = () => {
  const reservation = document.getElementById('reservation')

  if (reservation) {
    reservation.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
