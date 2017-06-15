var noteTaking = new Vue({
  el: '#NoteTaking',
  created: function () {
    // "Constructor" logic
  },
  data: {
    // Static view data
      notes:
      ['capicity'],
  },
  methods: {
    // View logic (events)
      notePrompt: function () {
          var note = prompt('Put words towards your idea', ' ');
          if (note) {
              this.notes.push(note);
          }
      },
      deleteNote: function (index) {
          var message = "Verwijder de 'note'\n" + this.notes[index]; 
          if (confirm(message)) {
              this.notes.splice(index, 1);
          }
      },

      getNotes: function () {
          var notes;
          try {
              var value = localStorage.getItem(noteKey);
              notes = JSON.parse(value) || [];
          } catch (e) {
              notes = [];
          }
          return notes;
      },
      setNotes: function () {
          var value = JSON.stringify(this.notes);
          localStorage.setItem(noteKey, value);
      },
  },
  created: function () {
      this.notes = this.getNotes();
  },
        
});
