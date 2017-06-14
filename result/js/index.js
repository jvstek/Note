var noteKey = 'notes';
var noteTaking = new Vue({
  el: '#NoteTaking',  
  data: {
    notes: [],
  },
  methods: {
    deleteNote: function (index) {
      var message = 'Are you sure you want to delete\n' + this.notes[index];

      if (confirm(message)) {
        this.notes.splice(index, 1);
        this.setNotes();
      }
    },
    notePrompt: function () {
      var note = prompt('What \'s on your mind?', '');

      if (note) {
        this.notes.push(note);
        this.setNotes();
      }
    },
    /* 
     * MVP 2
     */
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
