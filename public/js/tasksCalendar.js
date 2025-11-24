document.addEventListener('DOMContentLoaded', () => {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    selectable: true,
    eventClick: (info) => {
      const id = info.event.id;
      // eksempel: bekræft slet
      if (confirm('Vil du slette denne opgave?')) {
        fetch(`/api/tasks/${id}`, { method: 'DELETE' })
          .then(r => {
            if (r.ok) {
              info.event.remove();
              alert('Slettet');
            } else {
              alert('Kunne ikke slette');
            }
          });
      }
    },
    datesSet: (dateInfo) => {
      // hent events for synligt interval
      loadEvents(dateInfo.startStr, dateInfo.endStr);
    }
  });

  calendar.render();

  async function loadEvents(start, end) {
    try {
      const res = await fetch(`/api/tasks?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`);
      if (!res.ok) throw new Error('Kunne ikke hente tasks');
      const events = await res.json();
      calendar.removeAllEvents();
      calendar.addEventSource(events);
    } catch (err) {
      console.error(err);
    }
  }

  // Formular submit: opret ny task
  const form = document.getElementById('taskForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const gasstationId = document.getElementById('stationSelect').value || null;
      const startTimeLocal = document.getElementById('startTime').value;
      if (!startTimeLocal) return alert('Vælg dato og tid');

      // Konverter datetime-local (lokal tid) til ISO (UTC)
      const iso = new Date(startTimeLocal).toISOString();

      const payload = { gasstationId, startTime: iso };

      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        // genindlæs events i nuværende visning
        const newEv = await res.json();
        calendar.refetchEvents ? calendar.refetchEvents() : calendar.addEvent(newEv);
        alert('Opgave oprettet');
        form.reset();
      } else {
        const err = await res.json();
        alert('Fejl: ' + (err.error || 'Ukendt fejl'));
      }
    });
  }
});