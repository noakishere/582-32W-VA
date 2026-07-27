# Web Project 1

## Plan

### Course code

582-32W-VA

### Duration

5 weeks

### Schedule

Monday to Thursday, 9:00 a.m.–12:00 p.m.

# 1. Project format

Each student will independently develop one complete dynamic website based on a simulated client quote.

The project must include:

- a clear client need
- a defined audience
- a refined Figma design
- a written design rationale
- a Flask backend
- a database
- a frontend implementation
- dynamic data
- user input and validation
- authentication where appropriate
- responsive design
- accessibility considerations
- Git version control
- testing documentation
- installation documentation
- a final presentation

The project should demonstrate integration of previous course knowledge rather than a large number of new technologies.

# 2. Approved technical approaches

## Backend

All projects must use:

- Python
- Flask
- Flask-SQLAlchemy
- SQLite or another instructor-approved relational database
- server-side validation

Authentication should use Flask-Login when user accounts are part of the project.

## Frontend track A — Flask and JavaScript

This is the recommended approach.

Students may use:

- Jinja templates
- HTML
- CSS or Bootstrap
- JavaScript modules
- custom elements
- fetch requests
- progressive enhancement

This track is appropriate when most pages are rendered by Flask and JavaScript enhances specific interactions.

Possible examples include:

- filters
- asynchronous forms
- interactive components
- live search
- client-side interface states
- reusable custom elements

## Frontend track B — React

Students with a preference for React may use:

- React
- a Flask JSON API
- fetch requests
- component-based state management
- client-side routing where appropriate

Students choosing React must clearly separate:

```text
React frontend
        ↓
HTTP request
        ↓
Flask API
        ↓
SQLAlchemy database
```

React is optional and does not automatically receive a higher grade.

A simpler, complete Flask and JavaScript project is preferable to an incomplete React application.

# 3. Common requirements for both frontend tracks

Regardless of the chosen frontend technology, every project must demonstrate:

- clear separation of concerns
- reusable code
- logical file organization
- dynamic database content
- complete CRUD workflows where appropriate
- server-side validation
- meaningful error handling
- loading and error states for asynchronous operations
- responsive layout
- accessible forms and navigation
- readable code
- meaningful Git history
- complete documentation

The assessment focuses on the quality and completeness of the project rather than the number of libraries used.

# 4. Scope limitations

The five-week duration requires a controlled scope.

A suitable project should normally contain:

- one primary content model
- one supporting model
- a user model
- approximately five to eight important routes or API endpoints
- one clear main user workflow
- a limited number of secondary features

Advanced features may only be added after the core project is complete.

# 5. Minimum functional scope

Every project must include at least one complete vertical workflow.

A vertical workflow connects:

```text
Interface
    ↓
Form or interaction
    ↓
Validation
    ↓
Flask route or API endpoint
    ↓
Database operation
    ↓
Updated interface
```

_The project must not consist only of disconnected pages or static mockups._

# 6. Design requirements

Students will use their knowledge from Applied UX/UI Design.

Each student must provide:

- a refined Figma file
- desktop and mobile layouts
- a clear visual hierarchy
- reusable interface components
- appropriate typography
- an accessible colour system
- form states
- loading, empty, success, and error states where relevant
- a short design rationale

# 7. Weekly course rhythm

## Mondays — Planning and studio development

Monday sessions are structured project-development periods.

Possible activities include:

- weekly planning (High priority)
  - updating the task board
  - reviewing the current milestone
- backend development
- frontend development
- database work
- integration
- instructor check-ins

At the beginning of each Monday, students should identify:

- what was completed
- what remains
- the main goal for the week
- the largest current risk

## Tuesdays — Project lecture and drop-in support

Each Tuesday begins with a possible short project-level lecture.

Students may bring:

- architecture questions
- debugging problems
- design questions
- integration issues
- Git problems
- scope concerns
- testing questions

Tuesday support is not intended for the instructor to build the project for the student. Students must arrive able to explain:

- what they attempted
- what happened
- what research has been conducted
- what they expected
- what evidence they collected

## Wednesdays — Integration studio

Wednesday sessions focus on implementation and integration.

Students should prioritize:

- connecting frontend and backend
- completing workflows
- testing
- resolving blockers
- preparing the Thursday deliverable

**IMPORTANT**: Wednesday is not intended for beginning the weekly deliverable from scratch.

## Thursdays — Individual progress review

During Weeks 1–4, each student presents the current deliverable individually.

The purpose is to detect scope and integration problems early.

The remaining Thursday time may be used for project development.

# 8. Schedule

## Week 1 — Scope, design, and architecture

### Monday - July 27th 2026

Topics:

- course introduction
- project constraints
- review of client quote
- project scope
- definition of the main user
- identification of the primary workflow
- initial task planning

### Tuesday - July 28th 2026

Lecture on design and project management.

Drop-in

### Wednesday - July 29th 2026

Studio work

### Thursday - July 30th 2026 - Deliverable 1

Meeting time slot will be shared.

## Project Definition and Design Plan

Students individually present:

- client quote interpretation
- target user
- problem being solved
- project scope
- must-have features
- optional features
- chosen frontend track
- refined Figma design
- design rationale
- proposed database models
- proposed relationships
- route or endpoint list
- project structure
- initial Git repository
- milestone plan

## Week 2 - Backend foundation

### Monday - August 3rd 2026

Studio work

### Tuesday - August 4th 2026

Drop-in hours

### Wednesday - August 5th 2026

Studio work

### Thursday - August 6th 2026 - Deliverable 2

### Backend Foundation and First Vertical Slice

Students individually demonstrate:

- application starts correctly
- environment configuration works
- database can be created
- core models exist
- relationships function
- authentication functions if required
- at least one create workflow
- at least one read workflow
- validation is demonstrated
- data persists in the database
- Git history shows meaningful progression

Students should also explain:

- how data moves through the application (with the help of a diagram)
- where validation occurs
- how the current architecture supports the remaining work

## Week 3 - Frontend integration

### Monday - August 10th 2026

Studio work

### Tuesday - August 11th 2026

To be confirmed.

Drop-in hours.

### Wednesday - August 12th 2026

Studio work

### Thursday - Deliverable 3

## Integrated Working Prototype

Students individually present:

- frontend connected to the backend
- real database content displayed
- primary workflow works from beginning to end
- user input is validated
- successful actions provide feedback
- errors are visible to the user
- navigation is functional
- responsive design is substantially implemented
- interface matches the design direction
- no major feature relies on hard-coded placeholder data

The application may still require cleanup, but its main purpose should already work.

## Week 4 — Feature completion and testing

### Monday - August 17th 2026

Studio work

### Tuesday - August 18th 2026

Drop-in

### Wednesday - August 19th 2026

Studio work

### Thursday - August 20th 2026 - Deliverable 4

## Feature-Complete Beta

Students individually demonstrate:

- Most importantly, you should show that you're almost ready for the finish line.
- all required features are implemented
- authentication and authorization work
- forms and validation work
- responsive layouts work
- major errors are handled
- accessibility has been considered
- test checklist has been completed
- README draft exists
- setup instructions are usable
- major known issues are documented
- project scope is frozen

After Deliverable 4, students should not add major features.

The final week is for stabilization, documentation, and presentation.

## Week 5 - Finalization and presentation

### Monday - August 24th 2026

Studio work:

- resolve critical bugs
- improve usability
- finish README
- clean project structure
- prepare demonstration data

### Tuesday - August 25th 2026

Drop-in focus:

- final debugging
- presentation structure
- demonstration sequence
- documentation review

### Wednesday - August 26th 2026

Final studio and rehearsal:

- complete final testing
- rehearse presentation
- test setup on presentation equipment
- prepare backup screenshots or video
- submit final repository information

### Thursday - August 27th 2026 - Final presentations

Each student presents the completed project.

(instructions to come)

# 9. Four staged deliverables

## Deliverable 1 — Definition and design

Required evidence:

- project summary
- client needs
- target user
- scope
- Figma design
- rationale
- model diagram
- route or endpoint plan
- repository
- implementation schedule

## Deliverable 2 - Backend and vertical slice

Required evidence:

- Flask project
- database
- models
- validation
- authentication where required
- one complete database-backed workflow

## Deliverable 3 - Integrated prototype

Required evidence:

- frontend and backend integration
- primary workflow
- responsive interface
- dynamic data
- error and success states
- substantial alignment with the Figma design

## Deliverable 4 - Feature-complete beta

Required evidence:

- all required workflows
- testing results
- authorization
- documentation
- responsive and accessible implementation
- no major unfinished requirements

# 10. Final presentation

The presentation should include:

1. client need
2. target user
3. final project scope
4. design rationale
5. main user workflow
6. live website demonstration
7. technical architecture
8. database structure
9. one significant challenge
10. testing performed
11. limitations
12. possible future improvements

Students should not spend the presentation reading code line by line, but rather demonstrate how the complete website responds to the client need.

# 11. Project-management expectations

Students should maintain a small project board with columns such as:

```text
Backlog
Ready
In progress
Testing
Complete
```

Tasks should be small enough to complete and verify.

Weak task:

```text
Build backend
```

Stronger tasks:

```text
Create Event model
Validate event title
Add event creation route
Display event list
Protect event-edit route
```

Students should update their board throughout the project.

In addition to that, a daily journal should be updated from Monday to Thursday. In the journal you should write a few paragraphs as to what you've faced and achieved throughout the day.

The final document will be evaluated.

# 12. Git expectations

Students must use Git throughout development.

Commits should:

- contain related changes
- have clear messages
- occur throughout the project
- demonstrate meaningful progress

# 13. Documentation requirements

The final repository must contain a README explaining:

- project purpose
- client need
- main features
- technology choices
- project structure
- installation
- environment variables
- database setup
- how to run the project
- test account or seed-data instructions where appropriate
- known limitations

Real secrets, api-keys, and passwords must not be committed.

# 14. References

- [awwwwards](https://www.awwwards.com/)
