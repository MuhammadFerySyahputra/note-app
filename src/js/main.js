class iniJudul extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <h1 class="iniclass mb-4">Note App</h1>
    `;
  }
}

class iniDisplayNote extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <h3 class="mb-4 text-center">Display Notes</h3>
    <div id="notesList" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"></div>
    `;
  }

  createNoteCard(note) {
    const card = document.createElement("div");
    card.classList.add("col");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card", "h-100");

    const cardContent = `
      <div class="card-body">
        <h5 class="card-title">${note.title}</h5>
        <p class="card-text">${note.body}</p>
        <small class="text-muted">Created at: ${new Date(
          note.createdAt
        ).toLocaleString()}</small>
        <div class="mt-3">
          <button class="btn btn-sm btn-danger me-2 delete-btn" data-id="${
            note.id
          }"><i class="bi bi-trash"></i> Delete</button>
          <button class="btn btn-sm btn-primary edit-btn" data-id="${
            note.id
          }"><i class="bi bi-pencil-square"></i> Edit</button>
        </div>
      </div>
    `;

    cardBody.innerHTML = cardContent;
    card.appendChild(cardBody);
    this.querySelector("#notesList").appendChild(card);
  }
}

customElements.define("ini-display-note", iniDisplayNote);
customElements.define("ini-judul", iniJudul);

document.addEventListener("DOMContentLoaded", () => {
  const notesData = [
    {
      id: "notes-jT-jjsyz61J8XKiI",
      title: "Welcome to Notes, Dimas!",
      body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
      createdAt: "2022-07-28T10:03:12.594Z",
      archived: false,
    },
    {
      id: "notes-aB-cdefg12345",
      title: "Meeting Agenda",
      body: "Discuss project updates and assign tasks for the upcoming week.",
      createdAt: "2022-08-05T15:30:00.000Z",
      archived: false,
    },
    {
      id: "notes-XyZ-789012345",
      title: "Shopping List",
      body: "Milk, eggs, bread, fruits, and vegetables.",
      createdAt: "2022-08-10T08:45:23.120Z",
      archived: false,
    },
    {
      id: "notes-1a-2b3c4d5e6f",
      title: "Personal Goals",
      body: "Read two books per month, exercise three times a week, learn a new language.",
      createdAt: "2022-08-15T18:12:55.789Z",
      archived: false,
    },
    {
      id: "notes-LMN-456789",
      title: "Recipe: Spaghetti Bolognese",
      body: "Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",
      createdAt: "2022-08-20T12:30:40.200Z",
      archived: false,
    },
    {
      id: "notes-QwErTyUiOp",
      title: "Workout Routine",
      body: "Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",
      createdAt: "2022-08-25T09:15:17.890Z",
      archived: false,
    },
    {
      id: "notes-abcdef-987654",
      title: "Book Recommendations",
      body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
      createdAt: "2022-09-01T14:20:05.321Z",
      archived: false,
    },
    {
      id: "notes-zyxwv-54321",
      title: "Daily Reflections",
      body: "Write down three positive things that happened today and one thing to improve tomorrow.",
      createdAt: "2022-09-07T20:40:30.150Z",
      archived: false,
    },
    {
      id: "notes-poiuyt-987654",
      title: "Travel Bucket List",
      body: "1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",
      createdAt: "2022-09-15T11:55:44.678Z",
      archived: false,
    },
    {
      id: "notes-asdfgh-123456",
      title: "Coding Projects",
      body: "1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",
      createdAt: "2022-09-20T17:10:12.987Z",
      archived: false,
    },
    {
      id: "notes-5678-abcd-efgh",
      title: "Project Deadline",
      body: "Complete project tasks by the deadline on October 1st.",
      createdAt: "2022-09-28T14:00:00.000Z",
      archived: false,
    },
    {
      id: "notes-9876-wxyz-1234",
      title: "Health Checkup",
      body: "Schedule a routine health checkup with the doctor.",
      createdAt: "2022-10-05T09:30:45.600Z",
      archived: false,
    },
    {
      id: "notes-qwerty-8765-4321",
      title: "Financial Goals",
      body: "1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",
      createdAt: "2022-10-12T12:15:30.890Z",
      archived: false,
    },
    {
      id: "notes-98765-54321-12345",
      title: "Holiday Plans",
      body: "Research and plan for the upcoming holiday destination.",
      createdAt: "2022-10-20T16:45:00.000Z",
      archived: false,
    },
    {
      id: "notes-1234-abcd-5678",
      title: "Language Learning",
      body: "Practice Spanish vocabulary for 30 minutes every day.",
      createdAt: "2022-10-28T08:00:20.120Z",
      archived: false,
    },
  ];

  console.log(notesData);

  const noteForm = document.getElementById("noteForm");
  const displayNote = document.querySelector("ini-display-note");

  function createNoteCard(note) {
    displayNote.createNoteCard(note);
  }

  notesData.forEach((note) => createNoteCard(note));

  noteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const noteTitle = document.getElementById("noteTitle").value;
    const noteBody = document.getElementById("noteBody").value;

    const newNote = {
      id: `note-${Date.now()}`,
      title: noteTitle,
      body: noteBody,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    notesData.push(newNote);
    createNoteCard(newNote);

    noteForm.reset();
  });

  displayNote.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const noteId = e.target.getAttribute("data-id");
      const index = notesData.findIndex((note) => note.id === noteId);
      if (index !== -1) {
        notesData.splice(index, 1);
        e.target.closest(".col").remove();
      }
    } else if (e.target.classList.contains("edit-btn")) {
      const noteId = e.target.getAttribute("data-id");
      const note = notesData.find((note) => note.id === noteId);
      if (note) {
        document.getElementById("noteTitle").value = note.title;
        document.getElementById("noteBody").value = note.body;

        const index = notesData.findIndex((note) => note.id === noteId);
        if (index !== -1) {
          notesData.splice(index, 1);
          e.target.closest(".col").remove();
        }
      }
    }
  });
});

class IniHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg fixed-top border-bottom border-body"data-bs-theme="dark">
        <div class="container fs-3">
          <a class="navbar-brand text-white ms-3" href="index.html"
            >Muhammad Fery Syahputra</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("ini-header", IniHeader);

class iniFooter extends HTMLElement {
  static get observedAttributes() {
    return ["year"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "year") {
      this.renderFooter(newValue);
    }
  }

  connectedCallback() {
    const currentYear = new Date().getFullYear();
    this.renderFooter(currentYear);
  }

  renderFooter(year) {
    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="row">
            <div class="col text-center text-white p-4">
              Create with <i class="bi bi-heart-fill"></i>
              <a href="" class="footer-name m-1">
                ©${year} Muhammad Fery Syahputra.
              </a>
              All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("ini-footer", iniFooter);
